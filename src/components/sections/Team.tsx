import { team } from "@/data";
import { Heart, Scissors, Award } from "lucide-react";



const Team = () => {
  return (
    <section id="equipo" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Story */}
          <div>
            <span className="inline-block px-4 py-2 mb-4 text-sm font-medium tracking-wider uppercase bg-rose-light text-primary rounded-full">
              Nuestro Equipo
            </span>

            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
              Expertas en belleza,<br />
              <span className="text-primary">apasionadas por cuidarte</span>
            </h2>

            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Desde 2015 creamos un espacio donde cada detalle gira en torno a ti.
              No creemos en servicios rápidos ni en resultados genéricos: creemos
              en escucharte, asesorarte y lograr un look que realmente te
              represente.
            </p>

            <p className="text-muted-foreground mb-8 leading-relaxed">
              Nuestro equipo combina técnica avanzada, experiencia real y un
              trato humano que marca la diferencia. Aquí no eres una clienta
              más, eres parte de nuestra historia.
            </p>

            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-14 h-14 mx-auto mb-3 rounded-xl bg-rose-light flex items-center justify-center">
                  <Heart className="h-7 w-7 text-primary" />
                </div>
                <div className="font-display text-2xl font-bold text-foreground">
                  12+
                </div>
                <div className="text-sm text-muted-foreground">
                  Años cuidando tu imagen
                </div>
              </div>

              <div className="text-center">
                <div className="w-14 h-14 mx-auto mb-3 rounded-xl bg-gold-light flex items-center justify-center">
                  <Scissors className="h-7 w-7 text-accent" />
                </div>
                <div className="font-display text-2xl font-bold text-foreground">
                  7,000+
                </div>
                <div className="text-sm text-muted-foreground">
                  Transformaciones reales
                </div>
              </div>

              <div className="text-center">
                <div className="w-14 h-14 mx-auto mb-3 rounded-xl bg-rose-light flex items-center justify-center">
                  <Award className="h-7 w-7 text-primary" />
                </div>
                <div className="font-display text-2xl font-bold text-foreground">
                  25+
                </div>
                <div className="text-sm text-muted-foreground">
                  Certificaciones profesionales
                </div>
              </div>
            </div>
          </div>

          {/* Team Grid */}
          <div className="grid grid-cols-3 gap-4">
            {team.map((member, index) => (
              <div
                key={member.name}
                className={`relative group overflow-hidden rounded-2xl ${
                  index === 1 ? "mt-8" : ""
                }`}
              >
                <div className="aspect-[3/4] overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-4 text-primary-foreground translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h4 className="font-display text-lg font-semibold">
                    {member.name}
                  </h4>
                  <p className="text-sm text-primary-foreground/80">
                    {member.role}
                  </p>
                  <span className="inline-block mt-2 px-2 py-1 bg-primary-foreground/20 text-xs rounded-full backdrop-blur-sm">
                    {member.specialty}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
