import { Calendar, MessageSquare, Sparkles, Heart } from "lucide-react";

const steps = [
  {
    icon: Calendar,
    step: "01",
    title: "Reserva tu Cita",
    description: "Agenda en segundos por WhatsApp o nuestra web. Elige el día y hora que mejor te convenga.",
  },
  {
    icon: MessageSquare,
    step: "02",
    title: "Asesoría Personalizada",
    description: "Analizamos tu cabello, escuchamos tus deseos y te proponemos las mejores opciones para ti.",
  },
  {
    icon: Sparkles,
    step: "03",
    title: "Tu Transformación",
    description: "Disfruta de una experiencia relajante mientras nuestras expertas trabajan su magia.",
  },
  {
    icon: Heart,
    step: "04",
    title: "Luce Increíble",
    description: "Sales del salón sintiéndote renovada, segura y lista para conquistar el mundo.",
  },
];

const Process = () => {
  return (
    <section className="py-20 md:py-28 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 mb-4 text-sm font-medium tracking-wider uppercase bg-card text-primary rounded-full">
            Cómo Funciona
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
            Tu Experiencia Paso a Paso
          </h2>
          <p className="text-lg text-muted-foreground">
            Hemos diseñado cada detalle para que desde el primer contacto hasta 
            que salgas del salón, tu experiencia sea inolvidable.
          </p>
        </div>

        <div className="relative">
          {/* Connection line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-border -translate-y-1/2" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div 
                key={step.title}
                className="relative bg-card p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300"
              >
                {/* Step number */}
                <div className="absolute -top-4 left-8 px-4 py-1 bg-primary text-primary-foreground text-sm font-bold rounded-full">
                  {step.step}
                </div>
                
                {/* Icon */}
                <div className="w-16 h-16 mb-6 rounded-2xl bg-rose-light flex items-center justify-center">
                  <step.icon className="h-8 w-8 text-primary" />
                </div>
                
                <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                  {step.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>

                {/* Arrow for desktop */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-8 bg-card rounded-full border-2 border-primary flex items-center justify-center -translate-y-1/2 z-10">
                    <svg className="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;