import { ArrowRight, Play, MessageSquare, Users, TrendingUp, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
const Hero = () => {
  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Gradient */}
      <div className="absolute inset-0 gradient-bg opacity-50" />
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating Orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/20 rounded-full blur-3xl animate-float animation-delay-300" />
        <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-secondary/30 rounded-full blur-3xl animate-float animation-delay-600" />
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `linear-gradient(hsl(var(--primary) / 0.3) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary) / 0.3) 1px, transparent 1px)`,
        backgroundSize: '60px 60px'
      }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-primary/30 mb-8 animate-fade-in">
            <Zap className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-foreground">
              +3.000 emprendedores ya venden con Waco
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold leading-tight mb-6 animate-fade-in-up">
            Deja de Perder Ventas en WhatsApp.{" "}
            <span className="gradient-text">Domínalas con Waco.</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-6 animate-fade-in-up animation-delay-200">
            El CRM que transforma tu WhatsApp en una{" "}
            <span className="text-foreground font-semibold">máquina de ventas implacable</span>: 
            automatiza como humano, organiza como pro y multiplica conversiones x3 en 30 días.
          </p>

          {/* Secondary Text */}
          <p className="text-base text-muted-foreground max-w-2xl mx-auto mb-8 animate-fade-in-up animation-delay-300">
            Envíos masivos personalizados, chatbot IA que suena real, Kanban visual y seguimiento automático. 
            <span className="text-primary font-medium"> Instalación en 2 minutos. Prueba gratis 7 días.</span>
          </p>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-6 mb-10 animate-fade-in-up animation-delay-400">
            <div className="flex items-center gap-2 px-4 py-2 rounded-lg glass">
              <TrendingUp className="w-5 h-5 text-primary" />
              <span className="text-sm font-semibold text-foreground">+300% conversiones</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-lg glass">
              <Users className="w-5 h-5 text-accent" />
              <span className="text-sm font-semibold text-foreground">89% más productividad</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-lg glass">
              <MessageSquare className="w-5 h-5 text-secondary" />
              <span className="text-sm font-semibold text-foreground">Respuestas automáticas</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up animation-delay-500">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold text-lg px-8 py-6 rounded-xl glow-primary hover-scale">
              Empieza Gratis Ahora
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-border hover:border-primary hover:bg-primary/10 font-semibold text-lg px-8 py-6 rounded-xl hover-scale">
              <Play className="w-5 h-5 mr-2" />
              Ver Demo
            </Button>
          </div>

          {/* Question Hook */}
          <p className="mt-10 text-sm text-muted-foreground animate-fade-in animation-delay-700">
            ¿Sigues trabajando reactivo? <span className="text-primary font-medium">Es hora de dominar.</span>
          </p>
        </div>

        {/* Hero Illustration */}
        <div className="mt-16 relative animate-fade-in-up animation-delay-600">
          <HeroIllustration />
        </div>
      </div>
    </section>;
};
const HeroIllustration = () => {
  return <div className="max-w-4xl mx-auto relative">
      {/* Main Dashboard Card */}
      <div className="glass rounded-2xl p-6 shadow-2xl border border-border/50">
        {/* Top Bar */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-destructive" />
            <div className="w-3 h-3 rounded-full bg-yellow-500" />
            <div className="w-3 h-3 rounded-full bg-primary" />
          </div>
          <div className="text-sm font-medium text-muted-foreground">Waco Dashboard</div>
        </div>

        {/* Dashboard Preview Image */}
        <div className="relative w-full aspect-video rounded-lg overflow-hidden">
          <img alt="Waco Dashboard - CRM para WhatsApp" src="/lovable-uploads/f1e9ef10-5d32-4b81-9baa-2b7782b2be1e.png" className="w-full h-full object-contain" />
          <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute -top-6 -right-6 bg-primary/90 text-primary-foreground rounded-xl p-4 shadow-xl animate-float hidden lg:block">
        <div className="flex items-center gap-2">
          <TrendingUp className="w-5 h-5" />
          <span className="text-sm font-bold">+47% hoy</span>
        </div>
      </div>

      <div className="absolute -bottom-4 -left-6 glass rounded-xl p-4 shadow-xl animate-float animation-delay-400 hidden lg:block">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
            <MessageSquare className="w-5 h-5 text-white" />
          </div>
          <div>
            <p className="text-xs text-muted-foreground">Respuesta automática</p>
            <p className="text-sm font-semibold text-foreground">Enviada en 0.3s</p>
          </div>
        </div>
      </div>
    </div>;
};
const ChatCard = ({
  name,
  message,
  time,
  highlight = false,
  success = false
}: {
  name: string;
  message: string;
  time: string;
  highlight?: boolean;
  success?: boolean;
}) => {
  return <div className={`bg-card rounded-lg p-3 border transition-all duration-200 hover:border-primary/50 cursor-pointer ${highlight ? 'border-accent/50' : success ? 'border-green-500/50' : 'border-border'}`}>
      <div className="flex items-center justify-between mb-1">
        <span className="text-sm font-medium text-foreground">{name}</span>
        <span className="text-xs text-muted-foreground">{time}</span>
      </div>
      <p className="text-xs text-muted-foreground truncate">{message}</p>
    </div>;
};
export default Hero;