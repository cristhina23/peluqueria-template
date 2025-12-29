
import { Button } from "@radix-ui/themes";
import { MessageCircle, Clock, Gift } from "lucide-react";

const CTA = () => {
  const whatsappNumber = "34600000000";
  const whatsappMessage = encodeURIComponent("¡Hola! Me gustaría reservar una cita");

  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')`,
        }}
      >
        <div className="absolute inset-0 bg-foreground/85" />
      </div>

      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center text-primary-foreground">
          {/* Urgency badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 bg-accent text-accent-foreground rounded-full text-sm font-medium">
            <Clock className="h-4 w-4" />
            <span>Cupos limitados esta semana</span>
          </div>

          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            ¿Lista para Brillar?
            <br />
            <span className="text-accent">Tu Momento es Ahora</span>
          </h2>

          <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            No esperes más para sentirte increíble. Reserva hoy y descubre 
            por qué más de 500 clientas confían en nosotras.
          </p>

          {/* Offer box */}
          <div className="bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 rounded-2xl p-6 mb-10 max-w-md mx-auto">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Gift className="h-5 w-5 text-accent" />
              <span className="font-semibold text-accent">Oferta Especial</span>
            </div>
            <p className="text-primary-foreground/90">
              Menciona esta web y obtén un <span className="font-bold text-accent">15% de descuento</span> en tu primer servicio
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button 
              size="3" 
              className="group text-lg px-10 py-7 bg-accent text-accent-foreground hover:bg-accent/90 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
              asChild
            >
              <a 
                href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="mr-2 h-6 w-6 group-hover:animate-pulse" />
                Reserva tu Cita Ahora
              </a>
            </Button>
            
            <span className="text-primary-foreground/60 text-sm">
              Respuesta en menos de 1 hora
            </span>
          </div>

          {/* Trust elements */}
          <div className="mt-12 flex flex-wrap items-center justify-center gap-8 text-primary-foreground/60 text-sm">
            <div className="flex items-center gap-2">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span>Sin compromiso</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span>Cancelación gratuita</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span>Satisfacción garantizada</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;