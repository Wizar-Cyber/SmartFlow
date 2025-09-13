import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSchema } from "@shared/schema";
import { fromZodError } from "zod-validation-error";
import nodemailer from "nodemailer";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      // Validate request body
      const validationResult = insertContactSchema.safeParse(req.body);
      
      if (!validationResult.success) {
        const validationError = fromZodError(validationResult.error);
        return res.status(400).json({
          error: "Datos de formulario inválidos",
          details: validationError.message,
        });
      }

      const contactData = validationResult.data;
      
      // Save contact to storage
      const contact = await storage.createContact(contactData);
      
      // Send email notification
      try {
        await sendContactEmail(contactData);
      } catch (emailError) {
        console.error("Error sending email:", emailError);
        // Don't fail the request if email fails
      }

      res.status(201).json({
        message: "Formulario enviado correctamente. Te contactaremos pronto.",
        contact: {
          id: contact.id,
          name: contact.name,
          company: contact.company,
        },
      });
    } catch (error) {
      console.error("Error processing contact form:", error);
      res.status(500).json({
        error: "Error interno del servidor",
      });
    }
  });

  // Get contacts endpoint (for admin purposes)
  app.get("/api/contacts", async (req, res) => {
    try {
      const contacts = await storage.getContacts();
      res.json(contacts);
    } catch (error) {
      console.error("Error fetching contacts:", error);
      res.status(500).json({
        error: "Error interno del servidor",
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}

async function sendContactEmail(contactData: any) {
  // Create transporter - in production, use proper SMTP credentials
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: process.env.EMAIL_USER || "noreply@smartflow.com.co",
      pass: process.env.EMAIL_PASS || "demo-password",
    },
  });

  // Email to company
  const companyEmailOptions = {
    from: process.env.EMAIL_USER || "noreply@smartflow.com.co",
    to: "contacto@smartflow.com.co",
    subject: `Nuevo contacto de ${contactData.company}`,
    html: `
      <h2>Nuevo formulario de contacto</h2>
      <p><strong>Nombre:</strong> ${contactData.name}</p>
      <p><strong>Empresa:</strong> ${contactData.company}</p>
      <p><strong>Email:</strong> ${contactData.email}</p>
      <p><strong>Teléfono:</strong> ${contactData.phone || "No proporcionado"}</p>
      <p><strong>Mensaje:</strong></p>
      <p>${contactData.message}</p>
      <hr>
      <p><small>Enviado desde el formulario de contacto de Smart Flow</small></p>
    `,
  };

  // Confirmation email to customer
  const customerEmailOptions = {
    from: process.env.EMAIL_USER || "noreply@smartflow.com.co",
    to: contactData.email,
    subject: "Gracias por contactar a Smart Flow",
    html: `
      <h2>Hola ${contactData.name},</h2>
      <p>Gracias por contactarnos. Hemos recibido tu mensaje y nos pondremos en contacto contigo en las próximas 24 horas.</p>
      <p>Mientras tanto, puedes agendar una consulta gratuita en nuestro calendario o contactarnos por WhatsApp.</p>
      <br>
      <p>Saludos,<br>
      El equipo de Smart Flow</p>
      <hr>
      <p><small>Este es un email automático, por favor no respondas a este mensaje.</small></p>
    `,
  };

  // Send emails
  await Promise.all([
    transporter.sendMail(companyEmailOptions),
    transporter.sendMail(customerEmailOptions),
  ]);
}
