import { Button } from "@/components/ui/button";
import { MessageCircle, Calendar } from "lucide-react";

const Hero = () => {
  const whatsappNumber = "34600000000";
  const whatsappMessage = encodeURIComponent("¡Hola! Me gustaría reservar una cita");

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1560066984-138dadb4c035?ixlib=rb-4.0.3&auto=format&fit=crop&w=1974&q=80')`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-2xl">
          <span className="inline-block px-4 py-2 mb-6 text-sm font-medium tracking-wider uppercase bg-rose-light text-primary rounded-full animate-fade-up">
            Tu belleza, nuestra pasión
          </span>
          
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight animate-fade-up delay-100">
            Transforma tu Look,
            <span className="block text-primary">Eleva tu Confianza</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-10 leading-relaxed animate-fade-up delay-200">
            Porque mereces sentirte increíble cada día. Descubre el cuidado personalizado 
            que tu cabello necesita con nuestro equipo de expertos.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 animate-fade-up delay-300">
            <Button 
              size="lg" 
              className="group text-lg px-8 py-6 bg-primary hover:bg-primary/90 shadow-lg hover:shadow-xl transition-all duration-300"
              asChild
            >
              <a 
                href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                Reserva por WhatsApp
              </a>
            </Button>
            
            <Button 
              size="lg" 
              variant="outline" 
              className="text-lg px-8 py-6 border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            >
              <Calendar className="mr-2 h-5 w-5" />
              Ver Disponibilidad
            </Button>
          </div>

          {/* Trust badges */}
          <div className="flex items-center gap-6 mt-12 animate-fade-up delay-400">
            <div className="flex items-center gap-2">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div 
                    key={i}
                    className="w-10 h-10 rounded-full border-2 border-background bg-muted overflow-hidden"
                  >
                    <img 
                      src={`https://i.pravatar.cc/40?img=${i + 10}`}
                      alt={`Cliente ${i}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
              <span className="text-sm text-muted-foreground">+500 clientas felices</span>
            </div>
            <div className="flex items-center gap-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <span key={star} className="text-accent text-lg">★</span>
              ))}
              <span className="text-sm text-muted-foreground ml-1">4.9 en Google</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;