import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X, Globe } from "lucide-react";
import { LanguageToggle } from "@/components/LanguageToggle";
import { ThemeToggle } from "@/components/ThemeToggle";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [location] = useLocation();

  const navigation = [
    { name: "Inicio", href: "/", nameEn: "Home" },
    { name: "Servicios", href: "/servicios", nameEn: "Services" },
    { name: "Portafolio", href: "/portafolio", nameEn: "Portfolio" },
    { name: "Nosotros", href: "/nosotros", nameEn: "About" },
    { name: "Blog", href: "/blog", nameEn: "Blog" },
    { name: "Contacto", href: "/contacto", nameEn: "Contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" data-testid="link-home">
            <div className="flex items-center space-x-2">
              <div className="text-2xl font-bold text-primary">Smart Flow</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                data-testid={`link-${item.nameEn.toLowerCase()}`}
              >
                <Button
                  variant={location === item.href ? "secondary" : "ghost"}
                  className="hover-elevate"
                >
                  {item.name}
                </Button>
              </Link>
            ))}
          </div>

          {/* Right side controls */}
          <div className="hidden md:flex items-center space-x-4">
            <LanguageToggle />
            <ThemeToggle />
            <Button data-testid="button-schedule-demo">
              Agendar Demo
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              data-testid="button-mobile-menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col space-y-2">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  data-testid={`mobile-link-${item.nameEn.toLowerCase()}`}
                >
                  <Button
                    variant={location === item.href ? "secondary" : "ghost"}
                    className="w-full justify-start"
                  >
                    {item.name}
                  </Button>
                </Link>
              ))}
              <div className="flex items-center justify-between pt-4">
                <LanguageToggle />
                <Button size="sm" data-testid="mobile-button-schedule-demo">
                  Agendar Demo
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}