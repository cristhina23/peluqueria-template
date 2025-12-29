import { Button } from "@/components/ui/button";
import { Scissors, Palette, Wind, Sparkles, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Scissors,
    title: "Corte y Estilo",
    benefit: "Luce un corte que refleja tu personalidad",
    description: "Cortes modernos y clásicos adaptados a la forma de tu rostro y estilo de vida. Incluye lavado y secado.",
    price: "Desde 35€",
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    icon: Palette,
    title: "Color y Mechas",
    benefit: "Ilumina tu rostro con el tono perfecto",
    description: "Balayage, mechas, tintes globales y técnicas de coloración que cuidan tu cabello mientras lo transforman.",
    price: "Desde 65€",
    image: "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    icon: Wind,
    title: "Alisado y Tratamientos",
    benefit: "Dile adiós al frizz para siempre",
    description: "Keratina, botox capilar y tratamientos de hidratación profunda para un cabello sedoso y manejable.",
    price: "Desde 120€",
    image: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    icon: Sparkles,
    title: "Novias y Eventos",
    benefit: "Brilla en tu día más especial",
    description: "Peinados, maquillaje y pruebas previas. Servicio a domicilio disponible para el día de tu evento.",
    price: "Desde 150€",
    image: "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
];

const Services = () => {
  const whatsappNumber = "34600000000";

  return (
    <section id="servicios" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 mb-4 text-sm font-medium tracking-wider uppercase bg-gold-light text-accent rounded-full">
            Nuestros Servicios
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
            Encuentra tu Servicio Ideal
          </h2>
          <p className="text-lg text-muted-foreground">
            Cada servicio incluye asesoría personalizada para garantizar que salgas del salón sintiéndote increíble.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group relative overflow-hidden rounded-2xl bg-card shadow-sm hover:shadow-xl transition-all duration-500"
            >
              <div className="aspect-[16/10] overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />
              </div>
              
              <div className="absolute bottom-0 left-0 right-0 p-6 text-primary-foreground">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/20 backdrop-blur-sm flex items-center justify-center">
                    <service.icon className="h-5 w-5" />
                  </div>
                  <span className="text-sm font-medium text-primary-foreground/80">{service.benefit}</span>
                </div>
                
                <h3 className="font-display text-2xl font-bold mb-2">
                  {service.title}
                </h3>
                
                <p className="text-primary-foreground/80 text-sm mb-4 line-clamp-2">
                  {service.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <span className="text-lg font-semibold text-accent">
                    {service.price}
                  </span>
                  <Button 
                    size="sm"
                    className="bg-primary-foreground text-foreground hover:bg-primary-foreground/90"
                    asChild
                  >
                    <a 
                      href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(`Hola, me interesa el servicio de ${service.title}`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Reservar
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;