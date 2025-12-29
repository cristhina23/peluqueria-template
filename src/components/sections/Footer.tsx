import { Heart, Instagram, Facebook, MessageCircle } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative bg-secondary">
      {/* Top divider */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="container mx-auto px-4 py-16">
        <div className="grid gap-12 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-2">
            <h3 className="font-display text-3xl font-bold text-foreground">
              Belleza<span className="text-primary">Studio</span>
            </h3>
            <p className="mt-4 max-w-md text-muted-foreground leading-relaxed">
              Un espacio creado para cuidar de ti, potenciar tu estilo y ofrecerte
              resultados profesionales en un ambiente cálido y moderno.
            </p>

            {/* Social */}
            <div className="mt-6 flex items-center gap-4">
              {[Instagram, Facebook, MessageCircle].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="
                    group
                    w-11 h-11 rounded-xl
                    bg-background
                    flex items-center justify-center
                    transition-all duration-300
                    hover:scale-110
                    hover:shadow-[0_0_20px_hsl(var(--primary)/0.45)]
                  "
                >
                  <Icon className="h-5 w-5 text-foreground group-hover:text-primary transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Explorar</h4>
            <ul className="space-y-3 text-sm">
              {[
                { label: "Servicios", href: "#servicios" },
                { label: "Nuestro equipo", href: "#equipo" },
                { label: "Testimonios", href: "#testimonios" },
                { label: "Contacto", href: "#contacto" },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Legal</h4>
            <ul className="space-y-3 text-sm">
              {[
                "Política de privacidad",
                "Términos y condiciones",
                "Política de cookies",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-6 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>
            © {new Date().getFullYear()} BellezaStudio. Todos los derechos reservados.
          </p>
          <p className="flex items-center gap-1">
            Hecho en Lima
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
