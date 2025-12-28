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
    title: "Cómo instalar Waco en 2 minutos",
    description: "Aprende a configurar Waco desde cero y conectarlo con tu cuenta de WhatsApp Business en solo minutos.",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    id: 2,
    title: "Crear plantillas",
    description: "Descubre cómo crear plantillas de mensajes efectivas que aumenten tus conversiones.",
    videoUrl: "https://www.youtube.com/embed/M7lc1UVf-VE",
  },
  {
    id: 3,
    title: "Cómo hacer envíos masivos",
    description: "Envía mensajes a miles de contactos de forma segura sin arriesgar tu cuenta.",
    videoUrl: "https://www.youtube.com/embed/kJQP7kiw5Fk",
  },
  {
    id: 4,
    title: "Cómo crear pestañas",
    description: "Organiza tus conversaciones con pestañas personalizadas para un flujo de trabajo eficiente.",
    videoUrl: "https://www.youtube.com/embed/9bZkp7q19f0",
  },
  {
    id: 5,
    title: "Cómo crear flujos-Chatbots",
    description: "Automatiza respuestas y crea chatbots inteligentes que trabajan 24/7 por ti.",
    videoUrl: "https://www.youtube.com/embed/OpQFFLBMEPI",
  },
  {
    id: 6,
    title: "Lección 6 - Título pendiente",
    description: "Descripción de la lección 6 pendiente de editar.",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    id: 7,
    title: "Lección 7 - Título pendiente",
    description: "Descripción de la lección 7 pendiente de editar.",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    id: 8,
    title: "Lección 8 - Título pendiente",
    description: "Descripción de la lección 8 pendiente de editar.",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    id: 9,
    title: "Lección 9 - Título pendiente",
    description: "Descripción de la lección 9 pendiente de editar.",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    id: 10,
    title: "Lección 10 - Título pendiente",
    description: "Descripción de la lección 10 pendiente de editar.",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    id: 11,
    title: "Lección 11 - Título pendiente",
    description: "Descripción de la lección 11 pendiente de editar.",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    id: 12,
    title: "Lección 12 - Título pendiente",
    description: "Descripción de la lección 12 pendiente de editar.",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    id: 13,
    title: "Lección 13 - Título pendiente",
    description: "Descripción de la lección 13 pendiente de editar.",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
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
