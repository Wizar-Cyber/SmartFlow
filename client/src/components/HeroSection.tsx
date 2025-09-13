import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, MessageCircle } from "lucide-react";
import heroImage from "@assets/generated_images/AI_automation_hero_background_6bad1c56.png";
import { trackEvent } from "@/lib/analytics";

export default function HeroSection() {
  const handleScheduleDemo = () => {
    console.log("Schedule demo clicked");
    trackEvent('schedule_demo_click', 'engagement', 'hero_cta');
    // TODO: Implement demo scheduling
  };

  const handleContact = () => {
    console.log("Contact clicked");
    trackEvent('contact_click', 'engagement', 'hero_cta');
    // TODO: Implement contact form navigation
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-background/60 dark:bg-background/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6">
            Automatizamos tus procesos con{" "}
            <span className="text-primary">IA</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Ahorra tiempo, reduce costos y mejora tu atención al cliente mediante automatización inteligente
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              onClick={handleScheduleDemo}
              className="text-lg px-8 py-4 hover-elevate"
              data-testid="button-hero-schedule-demo"
            >
              <Calendar className="mr-2 h-5 w-5" />
              Agendar Demo
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            
            <Button
              variant="outline"
              size="lg"
              onClick={handleContact}
              className="text-lg px-8 py-4 hover-elevate bg-background/20 backdrop-blur-sm"
              data-testid="button-hero-contact"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Contáctanos
            </Button>
          </div>

          {/* Key Benefits */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mb-4">
                <span className="text-2xl">🚀</span>
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                Ahorro de tiempo
              </h3>
              <p className="text-muted-foreground">
                Reduce tareas manuales hasta en un 80%
              </p>
            </div>
            
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mb-4">
                <span className="text-2xl">🤖</span>
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                Automatización inteligente
              </h3>
              <p className="text-muted-foreground">
                IA que aprende y mejora continuamente
              </p>
            </div>
            
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mb-4">
                <span className="text-2xl">🔒</span>
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                Seguridad y cumplimiento
              </h3>
              <p className="text-muted-foreground">
                Protección de datos empresariales
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}