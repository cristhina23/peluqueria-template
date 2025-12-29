import { values } from "@/data";



const ValueProposition = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-background to-secondary">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 mb-4 text-sm font-semibold uppercase bg-rose-light text-primary rounded-full">
            Confianza & Profesionalismo
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Expertos que cuidan tu imagen como si fuera propia
          </h2>
          <p className="text-lg text-muted-foreground">
            Decisiones técnicas, procesos claros y resultados consistentes.
            Aquí no improvisamos.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {values.map((value) => (
            <div
              key={value.title}
              className="group relative p-8 rounded-2xl bg-card border border-border hover:border-primary transition-all duration-300 text-foreground"
            >
              {/* Glow */}
              <div className="absolute inset-0 rounded-2xl bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="relative">
                <div className="w-14 h-14 mb-6 rounded-xl bg-primary/10 flex items-center justify-center">
                  <value.icon className="h-7 w-7 text-primary" />
                </div>

                <h3 className="text-lg font-semibold mb-3">
                  {value.title}
                </h3>

                <p className="text-muted-foreground text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;
