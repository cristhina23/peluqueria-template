"use client";


import {
  MapPin,
  Clock,
  Phone,
  Mail,
  MessageCircle,
  Instagram,
  Facebook,
} from "lucide-react";
import { contactData } from "@/data";
import type { ReactElement, JSXElementConstructor, ReactNode, ReactPortal, Key } from "react";
import { PrimaryButton } from "../ui/PrimaryButton";

const Contact = () => {
  const {
    header,
    location,
    hours,
    phone,
    email,
    social,
  } = contactData;

  return (
    <section id="contacto" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 mb-4 text-sm font-medium tracking-wider uppercase bg-rose-light text-primary rounded-full">
            {header.badge}
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
            {header.title}
          </h2>
          <p className="text-lg text-muted-foreground">
            {header.subtitle}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Map */}
          <div className="rounded-2xl overflow-hidden shadow-lg h-[400px]">
            <iframe
              src={location.mapEmbedUrl}
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
              <div className="w-12 h-12 rounded-xl bg-rose-light flex items-center justify-center">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">
                  Dirección
                </h3>
                <p className="text-muted-foreground">
                  {location.address}
                  <br />
                  {location.district}, {location.city}
                </p>
              </div>
            </div>

            {/* Hours */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-gold-light flex items-center justify-center">
                <Clock className="h-6 w-6 text-accent" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">
                  Horario
                </h3>
                <div className="text-muted-foreground space-y-1">
                  {hours.map((item: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined, index: Key | null | undefined) => (
                    <p key={index}>{item}</p>
                  ))}
                </div>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-rose-light flex items-center justify-center">
                <Phone className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">
                  {phone.label}
                </h3>
                <a
                  href={phone.href}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  {phone.value}
                </a>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-gold-light flex items-center justify-center">
                <Mail className="h-6 w-6 text-accent" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">
                  {email.label}
                </h3>
                <a
                  href={email.href}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  {email.value}
                </a>
              </div>
            </div>

            {/* Social & WhatsApp */}
            <div className="pt-6 border-t border-border  flex items-center gap-4">
              
              



                <PrimaryButton
                  className="ml-auto  bg-[#25D366] hover:bg-[#20BD6A] text-white px-5 py-3"
                  asChild
                >
                  <a
                    href={`https://wa.me/${phone.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="mr-2 h-5 w-5" />
                    WhatsApp
                  </a>
                </PrimaryButton>
              </div>
            </div>
          </div>
        </div>
      
    </section>
  );
};

export default Contact;
