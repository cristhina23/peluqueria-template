import { Button } from "@radix-ui/themes";
import { MapPin, Clock, Phone, Mail, MessageCircle, Instagram, Facebook } from "lucide-react";


const Contact = () => {
  const whatsappNumber = "34600000000";

  return (
    <section id="contacto" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 mb-4 text-sm font-medium tracking-wider uppercase bg-rose-light text-primary rounded-full">
            Encuéntranos
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
            Visítanos o Escríbenos
          </h2>
          <p className="text-lg text-muted-foreground">
            Estamos aquí para atenderte. Elige la forma que más te convenga para contactarnos.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Map */}
          <div className="rounded-2xl overflow-hidden shadow-lg h-[400px]">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3037.6239263035027!2d-3.7037902!3d40.4167754!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd42287d4b06f905%3A0x6e6e3f9e1b1b1b1b!2sPuerta%20del%20Sol!5e0!3m2!1ses!2ses!4v1620000000000!5m2!1ses!2ses"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación del salón"
            />
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            {/* Address */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-rose-light flex items-center justify-center flex-shrink-0">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">Dirección</h3>
                <p className="text-muted-foreground">
                  Calle Gran Vía 28, 2º Izq<br />
                  28013 Madrid, España
                </p>
              </div>
            </div>

            {/* Hours */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-gold-light flex items-center justify-center flex-shrink-0">
                <Clock className="h-6 w-6 text-accent" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">Horario</h3>
                <div className="text-muted-foreground space-y-1">
                  <p>Lunes a Viernes: 9:00 - 20:00</p>
                  <p>Sábados: 9:00 - 14:00</p>
                  <p>Domingos: Cerrado</p>
                </div>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-rose-light flex items-center justify-center flex-shrink-0">
                <Phone className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">Teléfono</h3>
                <a 
                  href="tel:+34600000000" 
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  +34 600 000 000
                </a>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-gold-light flex items-center justify-center flex-shrink-0">
                <Mail className="h-6 w-6 text-accent" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">Email</h3>
                <a 
                  href="mailto:hola@tusalonbelleza.com" 
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  hola@tusalonbelleza.com
                </a>
              </div>
            </div>

            {/* Social & WhatsApp */}
            <div className="pt-6 border-t border-border">
              <h3 className="font-semibold text-foreground mb-4">Síguenos</h3>
              <div className="flex items-center gap-4">
                <a 
                  href="#" 
                  className="w-12 h-12 rounded-xl bg-secondary hover:bg-rose-light flex items-center justify-center transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="h-5 w-5 text-foreground" />
                </a>
                <a 
                  href="#" 
                  className="w-12 h-12 rounded-xl bg-secondary hover:bg-rose-light flex items-center justify-center transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="h-5 w-5 text-foreground" />
                </a>
                <Button 
                  className="ml-auto bg-[#25D366] hover:bg-[#20BD5A] text-white"
                  asChild
                >
                  <a 
                    href={`https://wa.me/${whatsappNumber}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="mr-2 h-5 w-5" />
                    WhatsApp
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;