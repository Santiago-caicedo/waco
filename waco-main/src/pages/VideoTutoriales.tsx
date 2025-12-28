import { useState, useEffect } from "react";
import { Play, CheckCircle2, Circle, ArrowLeft, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Progress } from "@/components/ui/progress";
import { Link } from "react-router-dom";
import VideoHeader from "@/components/video/VideoHeader";
import { ScrollReveal } from "@/hooks/useScrollReveal";

interface Lesson {
  id: number;
  title: string;
  description: string;
  videoUrl: string;
}

const lessons: Lesson[] = [
  {
    id: 1,
    title: "Cómo instalar Waco en tu navegador",
    description: "Aprende el paso a paso para descargar e instalar la extensión de Waco correctamente en tu navegador.",
    videoUrl: "https://www.youtube.com/embed/t_l0QmjWhPM",
  },
  {
    id: 2,
    title: "Envíos masivos",
    description: "Descubre cómo realizar campañas de mensajes masivos a tus contactos de forma eficiente y segura.",
    videoUrl: "https://www.youtube.com/embed/9dgUvIusshg",
  },
  {
    id: 3,
    title: "Crear pestañas",
    description: "Organiza tus chats y mejora tu productividad creando pestañas personalizadas para clasificar conversaciones.",
    videoUrl: "https://www.youtube.com/embed/kWLgW1CsFns",
  },
  {
    id: 4,
    title: "Crear Plantillas",
    description: "Ahorra tiempo configurando plantillas de mensajes predefinidas para tus respuestas más frecuentes.",
    videoUrl: "https://www.youtube.com/embed/FI9l5fPb8gs",
  },
  {
    id: 5,
    title: "Crear flujos automáticos - Chatbots",
    description: "Automatiza la atención al cliente configurando flujos de conversación y chatbots inteligentes que trabajan 24/7.",
    videoUrl: "https://www.youtube.com/embed/C4uzUKlEXEE",
  },
  {
    id: 6,
    title: "Crear respuestas rápidas",
    description: "Configura atajos de teclado y respuestas rápidas para agilizar tu comunicación diaria.",
    videoUrl: "https://www.youtube.com/embed/9S0hSzxQwMI",
  },
  {
    id: 7,
    title: "Envíos masivos programados",
    description: "Planifica tus estrategias de marketing programando tus envíos masivos para fechas y horas específicas.",
    videoUrl: "https://www.youtube.com/embed/9ElqExx9cyM",
  },
  {
    id: 8,
    title: "Recordatorios y notas",
    description: "No olvides ningún detalle importante gestionando recordatorios y agregando notas internas a tus conversaciones.",
    videoUrl: "https://www.youtube.com/embed/nc4yw403GEc",
  },
  {
    id: 9,
    title: "Copias de seguridad",
    description: "Asegura tu información importante aprendiendo a realizar y restaurar copias de seguridad de tus datos en Waco.",
    videoUrl: "https://www.youtube.com/embed/dEXmRbAx7sE",
  },
];

const STORAGE_KEY = "waco-course-progress";

const VideoTutoriales = () => {
  const [completedLessons, setCompletedLessons] = useState<number[]>([]);
  const [openItem, setOpenItem] = useState<string>("lesson-1");

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      setCompletedLessons(JSON.parse(saved));
    }
  }, []);

  const toggleLesson = (lessonId: number) => {
    setCompletedLessons((prev) => {
      const updated = prev.includes(lessonId)
        ? prev.filter((id) => id !== lessonId)
        : [...prev, lessonId];
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
      return updated;
    });
  };

  const progressPercentage = (completedLessons.length / lessons.length) * 100;

  return (
    <div className="min-h-screen bg-background">
      <VideoHeader />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <ScrollReveal animation="fade-up">
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              Curso Completo
            </span>
          </ScrollReveal>
          
          <ScrollReveal animation="fade-up" delay={100}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Curso Waco: Aprende{" "}
              <span className="gradient-text">Paso a Paso</span>
            </h1>
          </ScrollReveal>
          
          <ScrollReveal animation="fade-up" delay={200}>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Un curso completo con videos prácticos para dominar Waco CRM. 
              Avanza a tu ritmo y marca tu progreso.
            </p>
          </ScrollReveal>

          {/* Progress Bar */}
          <ScrollReveal animation="fade-up" delay={300}>
            <div className="max-w-md mx-auto">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-muted-foreground">Tu progreso</span>
                <span className="text-sm font-semibold text-primary">
                  {completedLessons.length}/{lessons.length} lecciones
                </span>
              </div>
              <Progress value={progressPercentage} className="h-3" />
              <p className="text-xs text-muted-foreground mt-2">
                {progressPercentage === 100
                  ? "🎉 ¡Felicidades! Has completado el curso"
                  : `${Math.round(progressPercentage)}% completado`}
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Lessons Section */}
      <section className="pb-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <ScrollReveal animation="fade-up">
            <Accordion
              type="single"
              collapsible
              value={openItem}
              onValueChange={setOpenItem}
              className="space-y-4"
            >
              {lessons.map((lesson, index) => {
                const isCompleted = completedLessons.includes(lesson.id);
                return (
                  <AccordionItem
                    key={lesson.id}
                    value={`lesson-${lesson.id}`}
                    className="glass border border-border/50 rounded-xl overflow-hidden transition-all duration-300 hover:border-primary/30"
                  >
                    <AccordionTrigger className="px-6 py-5 hover:no-underline group">
                      <div className="flex items-center gap-4 text-left w-full">
                        <div
                          className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300 ${
                            isCompleted
                              ? "bg-primary text-primary-foreground"
                              : "bg-muted text-muted-foreground group-hover:bg-primary/20"
                          }`}
                        >
                          {isCompleted ? (
                            <CheckCircle2 className="w-5 h-5" />
                          ) : (
                            <Play className="w-4 h-4 ml-0.5" />
                          )}
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-xs text-primary font-medium mb-1">
                            Lección {index + 1}
                          </p>
                          <h3 className="text-lg font-semibold text-foreground truncate">
                            {lesson.title}
                          </h3>
                        </div>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-6">
                      <p className="text-muted-foreground mb-6 pl-14">
                        {lesson.description}
                      </p>
                      
                      {/* Video Embed */}
                      <div className="aspect-video w-full rounded-xl overflow-hidden bg-muted mb-6">
                        <iframe
                          src={lesson.videoUrl}
                          title={lesson.title}
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                          className="w-full h-full"
                        />
                      </div>

                      {/* Complete Button */}
                      <div className="flex justify-end">
                        <Button
                          variant={isCompleted ? "outline" : "default"}
                          onClick={() => toggleLesson(lesson.id)}
                          className="gap-2"
                        >
                          {isCompleted ? (
                            <>
                              <CheckCircle2 className="w-4 h-4" />
                              Completada
                            </>
                          ) : (
                            <>
                              <Circle className="w-4 h-4" />
                              Marcar como completada
                            </>
                          )}
                        </Button>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                );
              })}
            </Accordion>
          </ScrollReveal>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-16 px-4 border-t border-border/50">
        <div className="container mx-auto max-w-4xl">
          <ScrollReveal animation="fade-up">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild variant="outline" size="lg" className="gap-2">
                <Link to="/">
                  <ArrowLeft className="w-4 h-4" />
                  Volver al Inicio
                </Link>
              </Button>
              <Button asChild size="lg" className="gap-2">
                <a href="mailto:contacto@waco.com">
                  <Mail className="w-4 h-4" />
                  Contacto
                </a>
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default VideoTutoriales;