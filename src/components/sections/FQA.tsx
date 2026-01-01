"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqs } from "@/data";
import { HelpCircle } from "lucide-react";



export default function FAQ() {
  return (
    <section className="relative py-20 md:py-28 bg-background overflow-hidden">
      {/* Decorative background */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-rose-light/40 rounded-full blur-3xl" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />

      <div className="relative container mx-auto px-4 max-w-3xl">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-flex items-center gap-2 px-4 py-2 mb-4 text-sm font-medium uppercase bg-rose-light text-primary rounded-full">
            <HelpCircle className="h-4 w-4" />
            Dudas frecuentes
          </span>

          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Todo lo que necesitas saber
          </h2>

          <p className="text-muted-foreground text-lg">
            Queremos que te sientas segura antes, durante y después de tu cita
          </p>
        </div>

        {/* Accordion */}
        <Accordion type="single" collapsible className="space-y-5">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="group bg-card border border-border rounded-2xl px-6 transition-all duration-300 hover:shadow-md"
            >
              <AccordionTrigger className="text-left text-muted-foreground text-lg group-hover:text-primary transition-colors">
                {faq.question}
              </AccordionTrigger>

              <AccordionContent className="text-muted-foreground leading-relaxed pt-2">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
