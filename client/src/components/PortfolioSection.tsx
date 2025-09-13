import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingDown, Clock, DollarSign } from "lucide-react";
import successImage from "@assets/generated_images/Business_success_metrics_dashboard_d80f8d59.png";

export default function PortfolioSection() {
  const cases = [
    {
      title: "Retail X - Optimización de Atención al Cliente",
      industry: "Retail",
      description: "Implementación de chatbots inteligentes y automatización de tickets de soporte.",
      results: [
        { metric: "Reducción en tickets manuales", value: "40%", icon: TrendingDown },
        { metric: "Tiempo de respuesta", value: "85%", icon: Clock },
        { metric: "Satisfacción del cliente", value: "+25%", icon: DollarSign }
      ],
      technologies: ["n8n", "Chatbot IA", "CRM Integration"],
      image: successImage
    },
    {
      title: "E-commerce Y - Integración de Pagos y Envíos",
      industry: "E-commerce",
      description: "Automatización completa del proceso de órdenes desde pago hasta entrega.",
      results: [
        { metric: "Procesamiento automático", value: "95%", icon: TrendingDown },
        { metric: "Errores de envío", value: "-60%", icon: Clock },
        { metric: "Tiempo de procesamiento", value: "-75%", icon: DollarSign }
      ],
      technologies: ["API Integrations", "Webhook Automation", "Real-time Sync"],
      image: successImage
    },
    {
      title: "Startup Z - Reducción de Costos Operativos",
      industry: "Tecnología",
      description: "Automatización de procesos internos y optimización de recursos humanos.",
      results: [
        { metric: "Costos operativos", value: "-30%", icon: TrendingDown },
        { metric: "Productividad del equipo", value: "+50%", icon: Clock },
        { metric: "ROI anual", value: "280%", icon: DollarSign }
      ],
      technologies: ["Process Mining", "RPA", "Analytics Dashboard"],
      image: successImage
    }
  ];

  // Mock client logos - TODO: Replace with real client logos
  const clientLogos = [
    { name: "TechCorp", color: "bg-blue-500" },
    { name: "RetailPlus", color: "bg-green-500" },
    { name: "DataFlow", color: "bg-purple-500" },
    { name: "AutoMax", color: "bg-orange-500" },
    { name: "CloudSync", color: "bg-cyan-500" },
    { name: "SmartOps", color: "bg-pink-500" }
  ];

  return (
    <section className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Casos de Éxito
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Resultados reales que nuestros clientes han logrado con nuestras soluciones de automatización
          </p>
        </div>

        {/* Case Studies */}
        <div className="space-y-12 mb-16">
          {cases.map((caseStudy, index) => (
            <Card key={index} className="overflow-hidden hover-elevate transition-all duration-300">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                <div className="p-8">
                  <CardHeader className="p-0 mb-6">
                    <div className="flex items-center space-x-2 mb-2">
                      <Badge variant="secondary">{caseStudy.industry}</Badge>
                    </div>
                    <CardTitle className="text-2xl mb-2">{caseStudy.title}</CardTitle>
                    <CardDescription className="text-base">
                      {caseStudy.description}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent className="p-0">
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                      {caseStudy.results.map((result, idx) => {
                        const IconComponent = result.icon;
                        return (
                          <div key={idx} className="text-center p-4 bg-card rounded-lg border border-card-border">
                            <IconComponent className="h-6 w-6 text-primary mx-auto mb-2" />
                            <div className="text-2xl font-bold text-primary mb-1">
                              {result.value}
                            </div>
                            <div className="text-sm text-muted-foreground">
                              {result.metric}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      {caseStudy.technologies.map((tech, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </div>
                
                <div className="relative">
                  <img
                    src={caseStudy.image}
                    alt={`Case study for ${caseStudy.title}`}
                    className="w-full h-full object-cover"
                    data-testid={`image-case-study-${index}`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-background/20 to-transparent lg:from-transparent lg:to-background/20" />
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Client Logos */}
        <div className="text-center">
          <h3 className="text-xl font-semibold text-foreground mb-8">
            Clientes que confían en nosotros
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {clientLogos.map((client, index) => (
              <div
                key={index}
                className={`${client.color} rounded-lg p-4 h-16 flex items-center justify-center opacity-60 hover:opacity-100 transition-opacity duration-300`}
                data-testid={`client-logo-${index}`}
              >
                <span className="text-white font-bold text-sm">{client.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}