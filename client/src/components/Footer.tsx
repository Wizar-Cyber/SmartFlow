import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Mail, Phone, MapPin, Linkedin, Twitter, Github } from "lucide-react";
import { FaWhatsapp, FaFacebook } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    servicios: [
      { name: "Auditoría & Discovery", href: "/servicios" },
      { name: "Implementación Workflows", href: "/servicios" },
      { name: "Soporte & Mantenimiento", href: "/servicios" },
      { name: "Consultoría IA", href: "/servicios" }
    ],
    empresa: [
      { name: "Nosotros", href: "/nosotros" },
      { name: "Portafolio", href: "/portafolio" },
      { name: "Blog", href: "/blog" },
      { name: "Contacto", href: "/contacto" }
    ],
    legal: [
      { name: "Políticas de Privacidad", href: "/legal/privacidad" },
      { name: "Políticas de Cookies", href: "/legal/cookies" },
      { name: "Términos y Condiciones", href: "/legal/terminos" }
    ]
  };

  const socialLinks = [
    { icon: Linkedin, href: "https://linkedin.com/company/smartflow", label: "LinkedIn" },
    { icon: Twitter, href: "https://twitter.com/smartflow", label: "Twitter" },
    { icon: Github, href: "https://github.com/smartflow", label: "GitHub" },
    { icon: FaWhatsapp, href: "https://wa.me/573001234567", label: "WhatsApp" },
    { icon: FaFacebook, href: "https://facebook.com/smartflow", label: "Facebook" }
  ];

  const handleSocialClick = (platform: string, url: string) => {
    console.log(`${platform} clicked`);
    window.open(url, "_blank");
  };

  return (
    <footer className="bg-card border-t border-card-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="text-2xl font-bold text-primary">Smart Flow</div>
              </div>
              <p className="text-muted-foreground mb-6 max-w-md">
                Automatizamos tus procesos con IA para ayudarte a ahorrar tiempo, 
                reducir costos y mejorar la atención al cliente.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-2 text-sm">
                <div className="flex items-center space-x-2 text-muted-foreground">
                  <Mail className="h-4 w-4" />
                  <span>contacto@smartflow.com.co</span>
                </div>
                <div className="flex items-center space-x-2 text-muted-foreground">
                  <Phone className="h-4 w-4" />
                  <span>+57 300 123 4567</span>
                </div>
                <div className="flex items-center space-x-2 text-muted-foreground">
                  <MapPin className="h-4 w-4" />
                  <span>Medellín, Colombia</span>
                </div>
              </div>
            </div>

            {/* Services Links */}
            <div>
              <h3 className="font-semibold text-foreground mb-4">Servicios</h3>
              <ul className="space-y-2">
                {footerLinks.servicios.map((link, index) => (
                  <li key={index}>
                    <Link href={link.href}>
                      <Button
                        variant="ghost"
                        className="h-auto p-0 text-muted-foreground hover:text-foreground text-sm justify-start"
                        data-testid={`footer-link-service-${index}`}
                      >
                        {link.name}
                      </Button>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company Links */}
            <div>
              <h3 className="font-semibold text-foreground mb-4">Empresa</h3>
              <ul className="space-y-2">
                {footerLinks.empresa.map((link, index) => (
                  <li key={index}>
                    <Link href={link.href}>
                      <Button
                        variant="ghost"
                        className="h-auto p-0 text-muted-foreground hover:text-foreground text-sm justify-start"
                        data-testid={`footer-link-company-${index}`}
                      >
                        {link.name}
                      </Button>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal Links */}
            <div>
              <h3 className="font-semibold text-foreground mb-4">Legal</h3>
              <ul className="space-y-2">
                {footerLinks.legal.map((link, index) => (
                  <li key={index}>
                    <Link href={link.href}>
                      <Button
                        variant="ghost"
                        className="h-auto p-0 text-muted-foreground hover:text-foreground text-sm justify-start"
                        data-testid={`footer-link-legal-${index}`}
                      >
                        {link.name}
                      </Button>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <Separator />

        {/* Bottom Footer */}
        <div className="py-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-sm text-muted-foreground">
            © {currentYear} Smart Flow. Todos los derechos reservados. NIT: 900.123.456-7
          </div>
          
          {/* Social Links */}
          <div className="flex items-center space-x-4">
            {socialLinks.map((social, index) => {
              const IconComponent = social.icon;
              return (
                <Button
                  key={index}
                  variant="ghost"
                  size="icon"
                  onClick={() => handleSocialClick(social.label, social.href)}
                  className="hover-elevate"
                  data-testid={`social-link-${social.label.toLowerCase()}`}
                >
                  <IconComponent className="h-4 w-4" />
                </Button>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}