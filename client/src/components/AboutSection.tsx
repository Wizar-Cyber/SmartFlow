import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Target, Eye, Heart } from "lucide-react";
import teamImage from "@assets/generated_images/Professional_startup_team_photo_4ff68f13.png";

export default function AboutSection() {
  const values = [
    {
      icon: Target,
      title: "Misión",
      description: "Democratizar el acceso a la automatización inteligente para que empresas de todos los tamaños puedan competir en la era digital."
    },
    {
      icon: Eye,
      title: "Visión",
      description: "Ser la empresa líder en automatización con IA en Latinoamérica, transformando la manera en que las empresas operan y sirven a sus clientes."
    },
    {
      icon: Heart,
      title: "Valores",
      description: "Innovación responsable, transparencia total, excelencia técnica y compromiso genuino con el éxito de nuestros clientes."
    }
  ];

  const team = [
    {
      name: "Carlos Mendoza",
      role: "CEO & Co-fundador",
      bio: "10+ años en IA y machine learning. Ex-Google, especialista en soluciones empresariales.",
      image: teamImage,
      expertise: ["Inteligencia Artificial", "Estrategia Empresarial", "Machine Learning"]
    },
    {
      name: "Ana Rodriguez",
      role: "CTO & Co-fundadora",
      bio: "Experta en desarrollo de software y arquitectura de sistemas. Ex-Microsoft, líder en automatización.",
      image: teamImage,
      expertise: ["Arquitectura de Software", "Automatización", "Cloud Computing"]
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Nosotros
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Un equipo apasionado por transformar empresas a través de la automatización inteligente
          </p>
        </div>

        {/* Mission, Vision, Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {values.map((value, index) => {
            const IconComponent = value.icon;
            return (
              <Card key={index} className="text-center hover-elevate transition-all duration-300">
                <CardHeader>
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mx-auto mb-4">
                    <IconComponent className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {value.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Team Section */}
        <div className="mb-16">
          <h3 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-12">
            Equipo Fundador
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {team.map((member, index) => (
              <Card key={index} className="hover-elevate transition-all duration-300">
                <CardHeader className="text-center">
                  <Avatar className="w-24 h-24 mx-auto mb-4">
                    <AvatarImage src={member.image} alt={member.name} />
                    <AvatarFallback className="text-lg">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <CardTitle className="text-xl">{member.name}</CardTitle>
                  <CardDescription className="text-primary font-medium">
                    {member.role}
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground mb-4">
                    {member.bio}
                  </p>
                  <div className="flex flex-wrap justify-center gap-2">
                    {member.expertise.map((skill, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Company Stats */}
        <div className="bg-card rounded-2xl p-8 border border-card-border">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-primary mb-2">50+</div>
              <div className="text-sm text-muted-foreground">Proyectos completados</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">95%</div>
              <div className="text-sm text-muted-foreground">Satisfacción del cliente</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">40%</div>
              <div className="text-sm text-muted-foreground">Reducción promedio de costos</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">24/7</div>
              <div className="text-sm text-muted-foreground">Soporte disponible</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}