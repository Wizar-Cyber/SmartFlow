import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Clock, ArrowRight, User } from "lucide-react";
import automationImage from "@assets/generated_images/Business_automation_services_illustration_0a99ee5f.png";

export default function BlogSection() {
  // TODO: Remove mock data when implementing real blog
  const articles = [
    {
      title: "Qué procesos puede automatizar tu empresa con IA",
      description: "Descubre los procesos más comunes que las empresas están automatizando y cómo puedes empezar.",
      category: "Automatización",
      readTime: "5 min",
      author: "Carlos Mendoza",
      date: "15 Mar 2024",
      image: automationImage,
      slug: "procesos-automatizar-empresa-ia"
    },
    {
      title: "Top 5 beneficios de la automatización en atención al cliente",
      description: "Cómo la automatización está transformando la experiencia del cliente y mejorando la eficiencia.",
      category: "Atención al Cliente",
      readTime: "7 min",
      author: "Ana Rodriguez",
      date: "12 Mar 2024",
      image: automationImage,
      slug: "beneficios-automatizacion-atencion-cliente"
    },
    {
      title: "n8n vs Zapier: ¿qué conviene para tu negocio?",
      description: "Comparativa completa entre las dos plataformas de automatización más populares del mercado.",
      category: "Herramientas",
      readTime: "10 min",
      author: "Carlos Mendoza",
      date: "8 Mar 2024",
      image: automationImage,
      slug: "n8n-vs-zapier-comparativa"
    }
  ];

  const handleReadMore = (slug: string) => {
    console.log(`Read more clicked for article: ${slug}`);
    // TODO: Navigate to blog post
  };

  const handleViewAllArticles = () => {
    console.log("View all articles clicked");
    // TODO: Navigate to blog page
  };

  return (
    <section className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Blog & Recursos
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Mantente actualizado con las últimas tendencias en automatización e IA empresarial
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {articles.map((article, index) => (
            <Card key={index} className="overflow-hidden hover-elevate transition-all duration-300 cursor-pointer group">
              <div className="relative">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  data-testid={`image-article-${index}`}
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-primary text-primary-foreground">
                    {article.category}
                  </Badge>
                </div>
              </div>
              
              <CardHeader>
                <CardTitle className="text-xl line-clamp-2 group-hover:text-primary transition-colors">
                  {article.title}
                </CardTitle>
                <CardDescription className="text-base line-clamp-3">
                  {article.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                      <User className="h-3 w-3" />
                      <span>{article.author}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="h-3 w-3" />
                      <span>{article.readTime}</span>
                    </div>
                  </div>
                  <span>{article.date}</span>
                </div>
                
                <Button
                  variant="ghost"
                  onClick={() => handleReadMore(article.slug)}
                  className="w-full justify-between hover-elevate"
                  data-testid={`button-read-more-${index}`}
                >
                  Leer más
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button
            variant="outline"
            size="lg"
            onClick={handleViewAllArticles}
            className="hover-elevate"
            data-testid="button-view-all-articles"
          >
            Ver todos los artículos
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}