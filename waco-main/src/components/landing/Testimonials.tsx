import { useState, useEffect } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { ScrollReveal } from "@/hooks/useScrollReveal";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const testimonials = [
    {
      name: "María García",
      role: "Gerente de Ventas",
      company: "TechSolutions",
      avatar: "MG",
      content: "Ventas +40% en el primer mes. El chatbot es magia pura. Mis clientes piensan que siempre estoy disponible, y en cierto modo, lo estoy.",
      rating: 5,
    },
    {
      name: "Carlos Mendoza",
      role: "Emprendedor",
      company: "E-commerce",
      avatar: "CM",
      content: "Ahorro 3 horas diarias. La organización es impecable. Antes perdía ventas por no dar seguimiento, ahora Waco lo hace por mí.",
      rating: 5,
    },
    {
      name: "Ana Rodríguez",
      role: "Consultora",
      company: "Business Growth",
      avatar: "AR",
      content: "La mejor inversión del año. Automatización humana que cierra sola. Mis clientes no notan la diferencia y las conversiones se triplicaron.",
      rating: 5,
    },
    {
      name: "Luis Pérez",
      role: "E-commerce Owner",
      company: "Fashion Store",
      avatar: "LP",
      content: "De caos a control total. Recomendado 100%. El Kanban es adictivo, siempre sé exactamente en qué etapa está cada cliente.",
      rating: 5,
    },
    {
      name: "Elena Vargas",
      role: "CEO",
      company: "Digital Agency",
      avatar: "EV",
      content: "Waco transformó nuestra operación. Manejamos 5x más leads con el mismo equipo. La IA es increíblemente precisa.",
      rating: 5,
    },
  ];

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials.length]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlaying(false);
  };

  return (
    <section id="testimonials" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <ScrollReveal animation="fade-up" className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
            Testimonios
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mb-4">
            Emprendedores Reales que{" "}
            <span className="gradient-text">Explotaron sus Ventas</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Historias de éxito de quienes ya dominan con Waco.
          </p>
        </ScrollReveal>

        {/* Carousel */}
        <ScrollReveal animation="scale" delay={200}>
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Main Card */}
              <div 
                className="glass rounded-2xl p-8 md:p-12 border border-border relative overflow-hidden"
                onMouseEnter={() => setIsAutoPlaying(false)}
                onMouseLeave={() => setIsAutoPlaying(true)}
              >
                {/* Quote Icon */}
                <Quote className="absolute top-6 right-6 w-16 h-16 text-primary/10" />

                {/* Content */}
                <div className="relative z-10">
                  {/* Stars */}
                  <div className="flex gap-1 mb-6">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>

                  {/* Quote */}
                  <blockquote className="text-xl md:text-2xl font-medium text-foreground mb-8 leading-relaxed">
                    "{testimonials[currentIndex].content}"
                  </blockquote>

                  {/* Author */}
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold text-lg">
                      {testimonials[currentIndex].avatar}
                    </div>
                    <div>
                      <p className="font-bold text-foreground">{testimonials[currentIndex].name}</p>
                      <p className="text-sm text-muted-foreground">
                        {testimonials[currentIndex].role} · {testimonials[currentIndex].company}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Navigation Arrows */}
              <button
                onClick={prevSlide}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-6 w-12 h-12 rounded-full glass border border-border flex items-center justify-center hover:border-primary hover:bg-primary/10 transition-all duration-200"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5 text-foreground" />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-6 w-12 h-12 rounded-full glass border border-border flex items-center justify-center hover:border-primary hover:bg-primary/10 transition-all duration-200"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5 text-foreground" />
              </button>
            </div>

            {/* Dots */}
            <div className="flex justify-center gap-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setCurrentIndex(index);
                    setIsAutoPlaying(false);
                  }}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex 
                      ? "bg-primary w-8" 
                      : "bg-border hover:bg-muted-foreground"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Testimonials;
