import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { servicesData } from "@/data/services";
import { whatsappUrl } from "@/data"; // o donde lo tengas

const Services = () => {
  return (
    <section id="servicios" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 mb-4 text-sm font-medium uppercase bg-gold-light text-accent rounded-full">
            {servicesData.badge}
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            {servicesData.title}
          </h2>
          <p className="text-lg text-muted-foreground">
            {servicesData.subtitle}
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.services.map((service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.title}
                className="group rounded-2xl overflow-hidden bg-card border hover:border-primary transition-all duration-300"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                    <span className="text-sm text-muted-foreground">
                      {service.benefit}
                    </span>
                  </div>

                  <h3 className="text-xl font-semibold mb-2">
                    {service.title}
                  </h3>

                  <p className="text-sm text-muted-foreground mb-4">
                    {service.description}
                  </p>

                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-primary">
                      {service.price}
                    </span>

                    <Button size="sm" asChild>
                      <a
                        href={`${whatsappUrl}&text=${encodeURIComponent(
                          `Hola, me interesa el servicio de ${service.title}`
                        )}`}
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
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
