import { steps } from "@/data";

const Process = () => {
  return (
    <section className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="inline-flex items-center gap-2 px-4 py-2 mb-6 text-sm font-medium uppercase rounded-full bg-primary/10 text-primary">
            Nuestro Método
          </span>

          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            Más que un servicio, una experiencia guiada
          </h2>

          <p className="text-muted-foreground text-lg">
            Cada paso está diseñado para cuidar tu cabello, respetar tu estilo
            y garantizar resultados reales.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step) => (
            <div
              key={step.title}
              className="group relative rounded-2xl bg-card p-8 border border-border/60 hover:border-primary/40 transition-all"
            >
              {/* Step number */}
              <span className="absolute top-6 right-6 text-sm font-semibold text-muted-foreground">
                {step.step}
              </span>

              {/* Icon */}
              <div className="mb-6 w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:scale-105 transition">
                <step.icon className="w-7 h-7 text-primary" />
              </div>

              <h3 className="font-display text-xl font-semibold mb-3">
                {step.title}
              </h3>

              <p className="text-muted-foreground leading-relaxed text-sm">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
