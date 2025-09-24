import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Heart, Download, Share2, Eye, Calendar, Wand2 } from "lucide-react";

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("todas");

  const categories = ["todas", "imágenes", "videos", "música", "textos"];
  
  const mockProjects = [
    {
      id: 1,
      type: "imagen",
      title: "Dragón Cyberpunk",
      thumbnail: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop",
      date: "2024-01-15",
      likes: 1204,
      style: "Cyberpunk"
    },
    {
      id: 2,
      type: "imagen",
      title: "Paisaje Fantástico",
      thumbnail: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=400&fit=crop",
      date: "2024-01-14",
      likes: 892,
      style: "Digital Art"
    },
    {
      id: 3,
      type: "video",
      title: "Transición Espacial",
      thumbnail: "https://images.unsplash.com/photo-1446776877081-d282a0f896e2?w=400&h=400&fit=crop",
      date: "2024-01-13",
      likes: 2341,
      style: "Cinemático"
    },
    {
      id: 4,
      type: "música",
      title: "Ambient Future",
      thumbnail: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=400&fit=crop",
      date: "2024-01-12",
      likes: 567,
      style: "Electrónica"
    },
    {
      id: 5,
      type: "imagen",
      title: "Retrato Anime",
      thumbnail: "https://images.unsplash.com/photo-1578593344299-b85b29dc2a9d?w=400&h=400&fit=crop",
      date: "2024-01-11",
      likes: 1876,
      style: "Anime"
    },
    {
      id: 6,
      type: "imagen",
      title: "Arquitectura Futurista",
      thumbnail: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=400&fit=crop",
      date: "2024-01-10",
      likes: 1453,
      style: "3D Render"
    }
  ];

  const filteredProjects = selectedCategory === "todas" 
    ? mockProjects 
    : mockProjects.filter(project => 
        selectedCategory === "imágenes" ? project.type === "imagen" : project.type === selectedCategory
      );

  const getTypeIcon = (type: string) => {
    const icons = {
      imagen: "🎨",
      video: "🎬", 
      música: "🎵",
      texto: "📝"
    };
    return icons[type as keyof typeof icons] || "🎨";
  };

  return (
    <section id="gallery" className="py-24 bg-card/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Tu <span className="gradient-ai-primary bg-clip-text text-transparent">Galería Creativa</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explora y gestiona todo tu contenido generado con IA
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "ai" : "ai-outline"}
              onClick={() => setSelectedCategory(category)}
              className="capitalize"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProjects.map((project) => (
            <Card key={project.id} className="group bg-card/50 backdrop-blur-sm border-border/50 hover:shadow-ai-blue transition-all duration-300 overflow-hidden">
              <div className="relative">
                <img 
                  src={project.thumbnail} 
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                
                {/* Type Badge */}
                <div className="absolute top-3 left-3">
                  <Badge variant="secondary" className="bg-black/60 backdrop-blur-sm text-white border-0">
                    {getTypeIcon(project.type)} {project.type}
                  </Badge>
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                  <Button size="sm" variant="secondary" className="h-8 w-8 p-0 bg-white/20 backdrop-blur-sm border-0 hover:bg-white/30">
                    <Eye className="w-4 h-4 text-white" />
                  </Button>
                  <Button size="sm" variant="secondary" className="h-8 w-8 p-0 bg-white/20 backdrop-blur-sm border-0 hover:bg-white/30">
                    <Download className="w-4 h-4 text-white" />
                  </Button>
                  <Button size="sm" variant="secondary" className="h-8 w-8 p-0 bg-white/20 backdrop-blur-sm border-0 hover:bg-white/30">
                    <Share2 className="w-4 h-4 text-white" />
                  </Button>
                </div>
              </div>

              <CardContent className="p-4">
                <h3 className="font-semibold mb-2 line-clamp-1">{project.title}</h3>
                
                <div className="flex items-center justify-between text-sm text-muted-foreground mb-3">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {new Date(project.date).toLocaleDateString('es-ES')}
                  </div>
                  <Badge variant="outline" className="text-xs">
                    {project.style}
                  </Badge>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <Heart className="w-4 h-4 text-red-400" />
                    {project.likes.toLocaleString()}
                  </div>
                  
                  <Button size="sm" variant="ghost" className="h-6 text-xs hover:text-ai-purple">
                    <Wand2 className="w-3 h-3 mr-1" />
                    Recrear
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <Button variant="ai-outline" size="lg">
            Cargar Más Proyectos
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Gallery;