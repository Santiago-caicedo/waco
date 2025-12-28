import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ScrollReveal } from "@/hooks/useScrollReveal";

const FAQ = () => {
  const faqs = [
    {
      question: "¿Waco realiza envíos masivos?",
      answer: "¡Sí! Puedes conseguir enviar mensajes para varios contactos de una vez, con fluidez y sin complicación. Todo funcionando dentro de lo que WhatsApp permite, y ajustado al plan que elijas.",
    },
    {
      question: "¿Cuántos dispositivos puedo usar al mismo tiempo?",
      answer: "Puedes usar Waco en múltiples dispositivos simultáneamente. Lo permitido en WhatsApp solo que los datos no se sincroniza automáticamente entre todos tus navegadores donde esté instalada, esto lo hacemos para mantener privado tus datos y conversaciones.",
    },
    {
      question: "¿Es posible conectar más de un número de WhatsApp?",
      answer: "Actualmente, Waco funciona con una cuenta de WhatsApp Web por navegador. Sin embargo, puedes usar diferentes perfiles de navegador para gestionar múltiples números de WhatsApp con Waco. Recuerda, no se sincronizan los datos entre navegadores.",
    },
    {
      question: "¿Existe algún límite de mensajes por día?",
      answer: "Waco respeta todos los límites establecidos por WhatsApp. No imponemos límites adicionales, pero recomendamos seguir las mejores prácticas de WhatsApp para evitar restricciones en tu cuenta.",
    },
    {
      question: "¿Funciona en WhatsApp Business?",
      answer: "¡Absolutamente! Waco está optimizado para funcionar tanto con WhatsApp Web personal como con WhatsApp Business Web, aprovechando al máximo todas las funcionalidades empresariales.",
    },
    {
      question: "¿Necesito instalar algún software adicional para usar Waco?",
      answer: "No necesitas instalar ningún software adicional. Waco es una extensión de navegador que se instala directamente desde Chrome Web Store y funciona completamente integrada con WhatsApp Web.",
    },
    {
      question: "¿Cómo recibo actualizaciones de la herramienta?",
      answer: "Las actualizaciones se instalan automáticamente a través de Chrome Web Store. Recibirás notificaciones cuando haya nuevas funcionalidades disponibles y la extensión se actualizará sin interrumpir tu trabajo.",
    },
  ];

  return (
    <section id="faq" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <ScrollReveal animation="fade-up" className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-secondary/20 text-secondary-foreground text-sm font-medium mb-4">
            FAQ
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mb-4">
            Preguntas{" "}
            <span className="gradient-text">Frecuentes</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Todo lo que necesitas saber antes de empezar.
          </p>
        </ScrollReveal>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <ScrollReveal 
                key={index} 
                animation="fade-left" 
                delay={index * 100}
                threshold={0.05}
              >
                <AccordionItem
                  value={`item-${index}`}
                  className="glass rounded-xl border border-border px-6 data-[state=open]:border-primary/50 transition-all duration-300"
                >
                  <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary py-6 [&[data-state=open]]:text-primary">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </ScrollReveal>
            ))}
          </Accordion>
        </div>

        {/* Bottom CTA */}
        <ScrollReveal animation="fade-up" delay={600} className="text-center mt-12">
          <p className="text-muted-foreground">
            ¿Más preguntas?{" "}
            <a href="#" className="text-primary font-medium hover:underline">
              Contacta con nuestro equipo
            </a>
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default FAQ;
