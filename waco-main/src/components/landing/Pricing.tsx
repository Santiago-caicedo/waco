import { Check, Star, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/hooks/useScrollReveal";

const Pricing = () => {
  const plans = [
    {
      name: "Plan gratis 7 días",
      price: "$0",
      period: "pesos",
      description: "Prueba sin compromiso",
      features: [
        "1 Conexión de WhatsApp",
        "Para 1 dispositivo",
        "Envíos masivos ilimitados",
        "Mensajes programados",
        "Chatbot incluido",
        "CRM Kanban completo",
      ],
      cta: "Comenzar Gratis",
      popular: false,
    },
    {
      name: "Plan mensual",
      price: "$25.000",
      period: "pesos/mes",
      description: "Todo lo que necesitas",
      features: [
        "4 Conexiones de WhatsApp",
        "Para 4 dispositivos",
        "Envíos masivos ilimitados",
        "Mensajes programados",
        "Chatbot ilimitado",
        "CRM Kanban completo",
        "Soporte personalizado",
        "Webhooks personalizados",
        "Actualizaciones permanentes",
      ],
      cta: "Obtener Ahora",
      popular: true,
      badge: "Recomendado",
    },
  ];

  return (
    <section id="pricing" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <ScrollReveal animation="fade-up" className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Precios
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mb-4">
            Planes que{" "}
            <span className="gradient-text">Escalan Contigo</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-4">
            Valor imbatible. Sin sorpresas. Cancela cuando quieras.
          </p>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary">
            <Zap className="w-4 h-4" />
            <span className="text-sm font-medium">7 días prueba gratis + 7 días devolución sin preguntas</span>
          </div>
        </ScrollReveal>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {plans.map((plan, index) => (
            <ScrollReveal 
              key={index} 
              animation="fade-up" 
              delay={index * 150}
              threshold={0.1}
            >
              <PricingCard plan={plan} />
            </ScrollReveal>
          ))}
        </div>

        {/* Trust Badge */}
        <ScrollReveal animation="fade-up" delay={500} className="text-center mt-12">
          <p className="text-sm text-muted-foreground flex items-center justify-center gap-2">
            <Check className="w-4 h-4 text-primary" />
            Sin tarjeta requerida para la prueba gratuita
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
};

const PricingCard = ({
  plan,
}: {
  plan: {
    name: string;
    price: string;
    period: string;
    description: string;
    features: string[];
    cta: string;
    popular: boolean;
    badge?: string;
  };
}) => {
  return (
    <div
      className={`relative glass rounded-2xl p-8 border transition-all duration-300 h-full ${
        plan.popular
          ? "border-primary scale-105 shadow-2xl glow-primary"
          : "border-border hover:border-primary/50 hover-lift"
      }`}
    >
      {/* Popular Badge */}
      {plan.badge && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2">
          <div className="flex items-center gap-1 px-4 py-1.5 rounded-full bg-primary text-primary-foreground text-sm font-bold shadow-lg">
            <Star className="w-4 h-4 fill-current" />
            {plan.badge}
          </div>
        </div>
      )}

      {/* Header */}
      <div className="text-center mb-8">
        <h3 className="text-xl font-bold text-foreground mb-2">{plan.name}</h3>
        <p className="text-sm text-muted-foreground mb-4">{plan.description}</p>
        <div className="flex items-baseline justify-center gap-1">
          <span className="text-5xl font-extrabold text-foreground">{plan.price}</span>
          <span className="text-muted-foreground">{plan.period}</span>
        </div>
      </div>

      {/* Features */}
      <ul className="space-y-4 mb-8">
        {plan.features.map((feature, index) => (
          <li key={index} className="flex items-center gap-3">
            <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
              <Check className="w-3 h-3 text-primary" />
            </div>
            <span className="text-sm text-foreground">{feature}</span>
          </li>
        ))}
      </ul>

      {/* CTA */}
      <Button
        className={`w-full font-bold py-6 rounded-xl transition-all duration-300 ${
          plan.popular
            ? "bg-primary text-primary-foreground hover:bg-primary/90 animate-pulse-glow"
            : "bg-muted text-foreground hover:bg-primary hover:text-primary-foreground"
        }`}
      >
        {plan.cta}
      </Button>
    </div>
  );
};

export default Pricing;
