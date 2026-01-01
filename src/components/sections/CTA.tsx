import { Button } from "@radix-ui/themes";
import { MessageCircle, Clock, Gift } from "lucide-react";
import { PrimaryButton } from "../ui/PrimaryButton";

const CTA = () => {
  const whatsappNumber = "34600000000";
  const whatsappMessage = encodeURIComponent(
    "¡Hola! Quisiera agendar una asesoría para mi cabello"
  );

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
            <span>Agenda abierta · cupos limitados</span>
          </div>

          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Tu cabello merece
            <br />
            <span className="text-accent">una atención profesional</span>
          </h2>

          <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Agenda una asesoría personalizada y recibe un diagnóstico honesto,
            técnicas seguras y resultados pensados para ti, no para todos.
          </p>

          {/* Offer box */}
          <div className="bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 rounded-2xl p-6 mb-10 max-w-md mx-auto">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Gift className="h-5 w-5 text-accent" />
              <span className="font-semibold text-accent">
                Beneficio de bienvenida
              </span>
            </div>
            <p className="text-primary-foreground/90">
              Agenda desde la web y recibe un{" "}
              <span className="font-bold text-accent">
                beneficio exclusivo en tu primera visita
              </span>
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col items-center justify-center gap-4">
            <PrimaryButton
              className="group text-lg px-6 py-4 bg-accent text-accent-foreground hover:bg-accent/90 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
              asChild
            >
              <a
                href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="mr-2 h-6 w-6 group-hover:animate-pulse" />
                Agendar por WhatsApp
              </a>
            </PrimaryButton>

            <span className="text-primary-foreground/60 text-sm">
              Atención personalizada · respuesta rápida
            </span>
          </div>

          {/* Trust elements */}
          <div className="mt-12 flex flex-wrap items-center justify-center gap-8 text-primary-foreground/60 text-sm">
            <div className="flex items-center gap-2">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              <span>Asesoría sin compromiso</span>
            </div>

            <div className="flex items-center gap-2">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              <span>Diagnóstico profesional</span>
            </div>

            <div className="flex items-center gap-2">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              <span>Resultados responsables</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
