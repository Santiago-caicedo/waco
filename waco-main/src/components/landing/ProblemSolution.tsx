import { X, Check, AlertTriangle, Sparkles } from "lucide-react";
import { ScrollReveal } from "@/hooks/useScrollReveal";
const ProblemSolution = () => {
  const problems = ["Chats caóticos que entierran leads.", "Respuestas lentas = clientes perdidos.", "Repites lo mismo una y otra vez.", "Sin seguimiento real → oportunidades evaporadas.", "Trabajas como bombero, no como estratega."];
  const solutions = ["Respuestas automáticas instantáneas (nunca pierdas un lead).", "CRM Kanban visual que domina tus contactos.", "Chatbot que escribe y responde como tú (pero mejor).", "Seguimiento implacable y embudos automáticos.", "Ventas proactivas que explotan."];
  return <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-destructive/5 to-transparent" />
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <ScrollReveal animation="fade-up" className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mb-4">
            ¿Por Qué Pierdes Ventas{" "}
            <span className="gradient-text">Todos los Días</span>{" "}
            en WhatsApp?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            La realidad es dura, pero Waco tiene la solución.
          </p>
        </ScrollReveal>

        {/* Two Columns */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Problem Column */}
          <ScrollReveal animation="fade-right" delay={100}>
            <div className="glass rounded-2xl p-8 border border-destructive/20 h-full">
              {/* Header */}
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 rounded-xl bg-destructive/20 flex items-center justify-center">
                  <AlertTriangle className="w-6 h-6 text-destructive" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground">El Problema</h3>
                  <p className="text-sm text-muted-foreground">Sin Waco</p>
                </div>
              </div>

              {/* List */}
              <ul className="space-y-4">
                {problems.map((problem, index) => <li key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-destructive/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <X className="w-4 h-4 text-destructive" />
                    </div>
                    <span className="text-foreground">{problem}</span>
                  </li>)}
              </ul>

              {/* Pain Point */}
              <div className="mt-8 p-4 rounded-xl bg-destructive/10 border border-destructive/20">
                <p className="text-sm text-muted-foreground">
                  <span className="font-semibold text-destructive">Resultado:</span>{" "}
                  Estrés, ventas perdidas y horas desperdiciadas.
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* Solution Column */}
          <ScrollReveal animation="fade-left" delay={200}>
            <div className="relative">
              <div className="glass rounded-2xl p-8 border border-primary/30 h-full glow-primary">
                {/* Header */}
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
                    <Sparkles className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground">La Solución</h3>
                    <p className="text-sm text-muted-foreground">Con Waco</p>
                  </div>
                </div>

                {/* List */}
                <ul className="space-y-4">
                  {solutions.map((solution, index) => <li key={index} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-4 h-4 text-primary" />
                      </div>
                      <span className="text-foreground">{solution}</span>
                    </li>)}
                </ul>

                {/* Win Point */}
                <div className="mt-8 p-4 rounded-xl bg-primary/10 border border-primary/30">
                  <p className="text-sm text-muted-foreground">
                    <span className="font-semibold text-primary">Resultado:</span>{" "}
                    x3 más ventas, 95% menos trabajo manual.
                  </p>
                </div>
              </div>

              {/* Floating Badge */}
              <div className="absolute -top-4 -right-4 bg-primary text-primary-foreground rounded-full px-4 py-2 shadow-lg animate-float">
                <span className="text-sm font-bold">Waco lo cambia todo</span>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Bottom CTA */}
        <ScrollReveal animation="fade-up" delay={400} className="text-center mt-16">
          <p className="text-xl md:text-2xl font-bold text-foreground mb-4">
            Únete a <span className="text-primary">+3.000 emprendedores</span> que ya dominan.
          </p>
          <p className="text-muted-foreground">
            No sigas trabajando 100% manual. Es hora de automatizar y escalar.
          </p>
        </ScrollReveal>
      </div>
    </section>;
};
export default ProblemSolution;