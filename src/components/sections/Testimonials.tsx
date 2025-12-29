import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "María García",
    role: "Cliente habitual",
    image: "https://i.pravatar.cc/150?img=1",
    rating: 5,
    text: "Después de años buscando mi peluquería ideal, la encontré. El balayage que me hicieron es exactamente lo que quería. ¡Se nota que aman lo que hacen!",
    service: "Balayage",
  },
  {
    name: "Laura Martínez",
    role: "Cliente VIP",
    image: "https://i.pravatar.cc/150?img=5",
    rating: 5,
    text: "Me hicieron el maquillaje y peinado para mi boda y fue perfecto. El equipo vino a casa y me trataron como una reina. Lo recomiendo 100%.",
    service: "Novia",
  },
  {
    name: "Carmen López",
    role: "Cliente desde 2020",
    image: "https://i.pravatar.cc/150?img=9",
    rating: 5,
    text: "La keratina que me aplicaron cambió mi vida. Mi cabello estaba destruido y ahora está increíble. Además, duró mucho más de lo que esperaba.",
    service: "Keratina",
  },
  {
    name: "Ana Rodríguez",
    role: "Nueva cliente",
    image: "https://i.pravatar.cc/150?img=16",
    rating: 5,
    text: "Era mi primera vez y me sentí súper cómoda desde que entré. Me asesoraron genial con el corte y el color. ¡Ya tengo mi próxima cita agendada!",
    service: "Corte + Color",
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 md:py-28 bg-rose-light/50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 mb-4 text-sm font-medium tracking-wider uppercase bg-card text-primary rounded-full">
            Testimonios
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
            Lo que Dicen Nuestras Clientas
          </h2>
          <div className="flex items-center justify-center gap-2 mb-4">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star key={star} className="h-6 w-6 fill-accent text-accent" />
            ))}
            <span className="ml-2 text-lg font-semibold">4.9/5</span>
          </div>
          <p className="text-muted-foreground">
            Basado en más de 200 reseñas en Google
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-card p-6 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 relative"
            >
              <Quote className="absolute top-4 right-4 h-8 w-8 text-rose-light" />
              
              <div className="flex items-center gap-3 mb-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-rose-light"
                />
                <div>
                  <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                  <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>

              <div className="flex gap-1 mb-3">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                ))}
              </div>

              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                "{testimonial.text}"
              </p>

              <span className="inline-block px-3 py-1 bg-secondary text-xs font-medium text-secondary-foreground rounded-full">
                {testimonial.service}
              </span>
            </div>
          ))}
        </div>

        {/* Google Reviews Badge */}
        <div className="mt-12 text-center">
          <a 
            href="#" 
            className="inline-flex items-center gap-2 px-6 py-3 bg-card rounded-full shadow-sm hover:shadow-md transition-all text-sm font-medium text-foreground"
          >
            <svg className="h-5 w-5" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
            Ver todas las reseñas en Google
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;