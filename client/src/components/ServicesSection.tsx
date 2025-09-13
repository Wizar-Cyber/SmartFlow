import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Search, Workflow, Shield, Brain, ArrowRight } from "lucide-react";

export default function ServicesSection() {
  const services = [
    {
      icon: Search,
      title: "Auditoría & Discovery",
      description: "Analizamos tus procesos actuales para identificar oportunidades de automatización y optimización.",
      features: ["Mapeo de procesos", "Análisis de ROI", "Recomendaciones estratégicas"]
    },
    {
      icon: Workflow,
      title: "Implementación de Workflows",
      description: "Desarrollo e integración de flujos automatizados con n8n y conexiones SaaS.",
      features: ["Automatización n8n", "Integraciones API", "Workflows personalizados"]
    },
    {
      icon: Shield,
      title: "Soporte & Mantenimiento",
      description: "Soporte técnico continuo con SLA definido para garantizar el funcionamiento óptimo.",
      features: ["Monitoreo 24/7", "SLA garantizado", "Actualizaciones regulares"]
    },
    {
      icon: Brain,
      title: "Consultoría en IA Responsable",
      description: "Implementación ética y responsable de IA para maximizar beneficios y minimizar riesgos.",
      features: ["IA ética", "Compliance", "Mejores prácticas"]
    }
  ];

  const handleRequestProposal = (serviceName: string) => {
    console.log(`Request proposal for: ${serviceName}`);
    // TODO: Implement proposal request functionality
  };

  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Nuestros Servicios
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Soluciones integrales de automatización diseñadas para transformar tu negocio
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card key={index} className="hover-elevate transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg">
                      <IconComponent className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-xl">{service.title}</CardTitle>
                    </div>
                  </div>
                  <CardDescription className="text-base">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button
                    variant="outline"
                    onClick={() => handleRequestProposal(service.title)}
                    className="w-full hover-elevate"
                    data-testid={`button-request-proposal-${index}`}
                  >
                    Solicitar Propuesta
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-card rounded-2xl p-8 border border-card-border">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            ¿Listo para transformar tu negocio?
          </h3>
          <p className="text-muted-foreground mb-6">
            Agenda tu diagnóstico gratuito de 30 minutos y descubre el potencial de automatización en tu empresa
          </p>
          <Button 
            size="lg"
            className="hover-elevate"
            data-testid="button-free-diagnosis"
          >
            Agenda tu diagnóstico gratuito
          </Button>
        </div>
      </div>
    </section>
  );
}