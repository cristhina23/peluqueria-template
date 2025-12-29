import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <span className="font-display text-2xl font-bold">
              Belleza<span className="text-accent">Studio</span>
            </span>
            <p className="mt-4 text-primary-foreground/70 text-sm">
              Tu espacio de belleza y transformación. Donde cada visita es una experiencia única.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li><a href="#servicios" className="hover:text-accent transition-colors">Servicios</a></li>
              <li><a href="#equipo" className="hover:text-accent transition-colors">Nuestro Equipo</a></li>
              <li><a href="#contacto" className="hover:text-accent transition-colors">Contacto</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li><a href="#" className="hover:text-accent transition-colors">Política de Privacidad</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Términos y Condiciones</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Política de Cookies</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-primary-foreground/10 text-center text-sm text-primary-foreground/50">
          <p className="flex items-center justify-center gap-1">
            © {new Date().getFullYear()} BellezaStudio. Hecho con 
            <Heart className="h-4 w-4 text-primary fill-primary" /> 
            en Madrid
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;