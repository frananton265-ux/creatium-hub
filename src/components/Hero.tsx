import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Image, Video, Music, MessageSquare } from "lucide-react";
import heroImage from "@/assets/hero-ai-workspace.jpg";

const Hero = () => {
  const features = [
    { icon: Image, label: "Imágenes", color: "text-ai-purple" },
    { icon: Video, label: "Videos", color: "text-ai-blue" },
    { icon: Music, label: "Música", color: "text-ai-cyan" },
    { icon: MessageSquare, label: "Textos", color: "text-ai-pink" },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="AI Creative Workspace"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background/90 via-background/70 to-background/90" />
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-10">
        <div className="animate-float absolute top-20 left-1/4 w-2 h-2 bg-ai-purple rounded-full opacity-60" 
             style={{ animationDelay: '0s' }} />
        <div className="animate-float absolute top-1/3 right-1/4 w-1 h-1 bg-ai-cyan rounded-full opacity-40" 
             style={{ animationDelay: '2s' }} />
        <div className="animate-float absolute bottom-1/3 left-1/3 w-1.5 h-1.5 bg-ai-pink rounded-full opacity-50" 
             style={{ animationDelay: '4s' }} />
      </div>

      {/* Content */}
      <div className="relative z-20 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-card/50 backdrop-blur-sm border border-border/50 rounded-full px-4 py-2 mb-8">
            <Sparkles className="w-4 h-4 text-ai-purple" />
            <span className="text-sm font-medium">Plataforma de IA Creativa Todo-en-Uno</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Crea
            <span className="gradient-ai-primary bg-clip-text text-transparent"> Contenido </span>
            Ilimitado con IA
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Genera imágenes, videos, música, voces y textos profesionales en segundos. 
            La única herramienta que necesitas para crear contenido espectacular.
          </p>

          {/* Feature Icons */}
          <div className="flex justify-center gap-8 mb-12">
            {features.map((feature, index) => (
              <div key={index} className="flex flex-col items-center gap-2">
                <div className="w-12 h-12 bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl flex items-center justify-center hover:shadow-ai transition-all duration-300">
                  <feature.icon className={`w-6 h-6 ${feature.color}`} />
                </div>
                <span className="text-sm font-medium text-muted-foreground">{feature.label}</span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="gradient-ai-primary hover:shadow-ai transition-all duration-300 text-lg px-8 py-6 group"
            >
              Comenzar Gratis
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="border-ai-purple/20 hover:border-ai-purple/40 hover:bg-ai-purple/5 text-lg px-8 py-6"
            >
              Ver Ejemplos
            </Button>
          </div>

          {/* Stats */}
          <div className="flex justify-center gap-8 mt-16 text-center">
            <div>
              <div className="text-2xl font-bold text-ai-purple">10M+</div>
              <div className="text-sm text-muted-foreground">Contenidos Generados</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-ai-blue">500K+</div>
              <div className="text-sm text-muted-foreground">Usuarios Activos</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-ai-cyan">99.9%</div>
              <div className="text-sm text-muted-foreground">Tiempo Activo</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;