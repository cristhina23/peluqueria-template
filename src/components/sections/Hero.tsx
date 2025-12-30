import { MessageCircle, Calendar } from "lucide-react";
import { heroData } from "@/data/hero";
import { PrimaryButton } from "../ui/PrimaryButton";
import { SecondaryButton } from "../ui/SecondaryButton";
import { whatsappUrl } from "@/data";

const Hero = () => {
  

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url('/images/bg5.jpg')` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/60 to-background/10" />
      </div>

      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-2xl">
          <span className="inline-block px-4 py-2 mb-6 text-sm font-medium uppercase bg-rose-light text-primary rounded-full">
            {heroData.badge}
          </span>

          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
            {heroData.title.firstLine}
            <span className="block text-4xl md:text-5xl text-primary">
              {heroData.title.highlight}
            </span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground mb-10 leading-relaxed">
            {heroData.description}
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <PrimaryButton
              asChild
              className="px-6 py-4 text-sm"
            >
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="h-5 w-5" />
                {heroData.cta.primary.label}
              </a>
            </PrimaryButton>

            <SecondaryButton className="px-6 py-4 text-sm flex items-center justify-center gap-2 font-semibold"
             icon={<Calendar className="h-5 w-5" />}
            >
             
              {heroData.cta.secondary.label}
            </SecondaryButton>
          </div>

          <div className="flex items-center gap-6 mt-12">
            <div className="flex items-center gap-2">
              <div className="flex -space-x-2">
                {heroData.trust.avatars.map((i) => (
                  <img
                    key={i}
                    src={`https://i.pravatar.cc/40?img=${i + 10}`}
                    className="w-10 h-10 rounded-full border-2 border-background"
                  />
                ))}
              </div>
              <span className="text-sm text-muted-foreground">
                {heroData.trust.clients}
              </span>
            </div>

            <div className="flex items-center gap-1 text-accent bg-slate-900/30 px-3 py-1 rounded-full">
              {"★★★★★"}
              <span className="text-sm text-foreground ml-1">
                {heroData.trust.rating}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
