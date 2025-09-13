import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X, Globe } from "lucide-react";
import { LanguageToggle } from "@/components/LanguageToggle";
import { ThemeToggle } from "@/components/ThemeToggle";
import { useTranslation } from "react-i18next";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [location] = useLocation();
  const { t } = useTranslation();

  const navigation = [
    { name: t("nav.home"), href: "/", key: "home" },
    { name: t("nav.services"), href: "/servicios", key: "services" },
    { name: t("nav.portfolio"), href: "/portafolio", key: "portfolio" },
    { name: t("nav.about"), href: "/nosotros", key: "about" },
    { name: t("nav.blog"), href: "/blog", key: "blog" },
    { name: t("nav.contact"), href: "/contacto", key: "contact" },
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
                data-testid={`link-${item.key}`}
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
              {t("nav.scheduleDemo")}
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
                  data-testid={`mobile-link-${item.key}`}
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
                  {t("nav.scheduleDemo")}
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}