import { 
  Send, 
  Bot, 
  LayoutDashboard, 
  Zap, 
  Brain, 
  Clock, 
  BarChart3, 
  Plug 
} from "lucide-react";
import { ScrollReveal } from "@/hooks/useScrollReveal";

const Features = () => {
  const features = [
    {
      icon: Send,
      title: "Envíos Masivos Inteligentes",
      description: "Lanza campañas a cientos en un clic. Personaliza con nombres, datos y adjuntos. Programa y domina el timing. Multiplica alcance sin bans.",
      gradient: "from-primary to-secondary",
    },
    {
      icon: Bot,
      title: "Chatbot Como Humano",
      description: "Respuestas que suenan reales: audios grabados en tiempo real, textos perfectos, embudos segmentados. Simula humano – cierra ventas 24/7.",
      gradient: "from-accent to-primary",
    },
    {
      icon: LayoutDashboard,
      title: "CRM Kanban Disruptivo",
      description: "Tableros drag-and-drop personalizables. Etiquetas auto, notas, recordatorios y pipelines que detectan cuellos de botella.",
      gradient: "from-secondary to-accent",
    },
    {
      icon: Zap,
      title: "Automatizaciones Avanzadas",
      description: "Acciones por keywords, programadas, multi-agente. Archiva, etiqueta y responde solo. Workflows que trabajan mientras duermes.",
      gradient: "from-primary to-accent",
    },
    {
      icon: Brain,
      title: "Privacidad Absoluta",
      description: "Datos guardados solo en tu navegador: máxima seguridad y privacidad total sin riesgos externos.",
      gradient: "from-accent to-secondary",
    },
    {
      icon: Clock,
      title: "Mensajes Programados",
      description: "Nunca olvides un seguimiento. Agenda y deja que Waco cierre por ti. Recordatorios automáticos que convierten.",
      gradient: "from-secondary to-primary",
    },
    {
      icon: BarChart3,
      title: "Mensajes de Voz Reales",
      description: "Dashboards reales de performance. Soporta múltiples cuentas sin complicaciones. Métricas que importan.",
      gradient: "from-primary to-secondary",
    },
    {
      icon: Plug,
      title: "Integración Perfecta",
      description: "Se superpone a WhatsApp Web sin alterar nada: instalación instantánea y uso natural desde día uno.",
      gradient: "from-accent to-primary",
    },
  ];

  return (
    <section id="features" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <ScrollReveal animation="fade-up" className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Funcionalidades
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mb-4">
            Funciones que{" "}
            <span className="gradient-text">Revolucionan</span>{" "}
            Tus Ventas
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Todo lo que necesitas para dominar WhatsApp como canal de ventas.
          </p>
        </ScrollReveal>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <ScrollReveal 
              key={index} 
              animation="scale" 
              delay={index * 75}
              threshold={0.05}
            >
              <FeatureCard
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                gradient={feature.gradient}
              />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

const FeatureCard = ({
  icon: Icon,
  title,
  description,
  gradient,
}: {
  icon: React.ElementType;
  title: string;
  description: string;
  gradient: string;
}) => {
  return (
    <div className="group glass rounded-2xl p-6 border border-border hover:border-primary/50 transition-all duration-300 hover-lift h-full">
      {/* Icon */}
      <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${gradient} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
        <Icon className="w-7 h-7 text-white" />
      </div>

      {/* Title */}
      <h3 className="text-lg font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
        {title}
      </h3>

      {/* Description */}
      <p className="text-sm text-muted-foreground leading-relaxed">
        {description}
      </p>

      {/* Hover Gradient Line */}
      <div className={`h-1 w-0 group-hover:w-full bg-gradient-to-r ${gradient} rounded-full mt-5 transition-all duration-500`} />
    </div>
  );
};

export default Features;
