import { Sparkles, Award, Heart, Shield } from "lucide-react";

const values = [
  {
    icon: Sparkles,
    title: "Atención Personalizada",
    description: "Cada cliente es única. Diseñamos tratamientos exclusivos según tu tipo de cabello y estilo de vida.",
  },
  {
    icon: Award,
    title: "Especialistas Certificados",
    description: "Nuestro equipo está en constante formación con las últimas tendencias y técnicas internacionales.",
  },
  {
    icon: Heart,
    title: "Productos Premium",
    description: "Solo trabajamos con marcas de alta gama que cuidan y protegen tu cabello desde la raíz.",
  },
  {
    icon: Shield,
    title: "Resultados Garantizados",
    description: "Si no estás 100% satisfecha, trabajamos contigo hasta que lo estés. Tu felicidad es nuestra prioridad.",
  },
];

const ValueProposition = () => {
  return (
    <section className="py-20 md:py-28 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 mb-4 text-sm font-medium tracking-wider uppercase bg-rose-light text-primary rounded-full">
            ¿Por qué elegirnos?
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
            La Diferencia que se Nota
          </h2>
          <p className="text-lg text-muted-foreground">
            No somos solo una peluquería. Somos tu espacio de transformación y bienestar personal.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div 
              key={value.title}
              className="group p-8 bg-card rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-14 h-14 mb-6 rounded-xl bg-rose-light flex items-center justify-center group-hover:bg-primary transition-colors duration-300">
                <value.icon className="h-7 w-7 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                {value.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;