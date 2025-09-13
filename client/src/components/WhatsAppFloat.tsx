import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { MessageCircle, X } from "lucide-react";
import { trackEvent } from "@/lib/analytics";

export default function WhatsAppFloat() {
  const [showMessage, setShowMessage] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  // Show the "contáctanos" message periodically
  useEffect(() => {
    const showMessageTimer = setTimeout(() => {
      setShowMessage(true);
    }, 5000); // Show after 5 seconds

    // Hide the message after 8 seconds
    const hideMessageTimer = setTimeout(() => {
      setShowMessage(false);
    }, 13000); // Hide after 13 seconds total (5 + 8)

    // Show message again periodically
    const intervalTimer = setInterval(() => {
      setShowMessage(true);
      setTimeout(() => setShowMessage(false), 6000); // Show for 6 seconds
    }, 45000); // Every 45 seconds

    return () => {
      clearTimeout(showMessageTimer);
      clearTimeout(hideMessageTimer);
      clearInterval(intervalTimer);
    };
  }, []);

  const handleWhatsAppClick = () => {
    const phoneNumber = "573001234567"; // TODO: Replace with your actual WhatsApp Business number
    const message = encodeURIComponent("Hola, me interesa conocer más sobre los servicios de Smart Flow. ¿Podrían ayudarme?");
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    
    trackEvent('whatsapp_float_click', 'engagement', 'floating_whatsapp');
    window.open(whatsappUrl, '_blank');
  };

  const handleCloseMessage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setShowMessage(false);
    trackEvent('whatsapp_message_close', 'engagement', 'floating_whatsapp');
  };

  const handleMessageClick = () => {
    setShowMessage(false);
    handleWhatsAppClick();
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-end gap-3">
      {/* Floating message bubble */}
      {showMessage && (
        <div 
          onClick={handleMessageClick}
          className="bg-white dark:bg-card border border-border rounded-2xl px-4 py-3 shadow-lg max-w-xs cursor-pointer hover-elevate animate-in slide-in-from-right-full duration-300"
          data-testid="whatsapp-message-bubble"
        >
          <div className="flex items-start justify-between gap-2">
            <div className="flex-1">
              <p className="text-sm font-medium text-foreground">¡Hola! 👋</p>
              <p className="text-xs text-muted-foreground mt-1">
                ¿Te ayudamos con la automatización de tu empresa?
              </p>
            </div>
            <Button
              variant="ghost"
              size="icon"
              className="h-4 w-4 rounded-full flex-shrink-0 mt-1"
              onClick={handleCloseMessage}
              data-testid="close-whatsapp-message"
            >
              <X className="h-3 w-3" />
            </Button>
          </div>
          
          {/* Small triangle pointer */}
          <div className="absolute bottom-4 right-[-6px] w-0 h-0 border-l-[6px] border-l-white dark:border-l-card border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent"></div>
        </div>
      )}

      {/* WhatsApp floating button */}
      <Button
        onClick={handleWhatsAppClick}
        size="icon"
        className="h-14 w-14 rounded-full bg-green-500 hover:bg-green-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 animate-bounce"
        data-testid="whatsapp-float-button"
        title="Chatea con nosotros por WhatsApp"
      >
        <MessageCircle className="h-7 w-7" />
      </Button>
    </div>
  );
}