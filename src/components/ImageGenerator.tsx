import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Wand2, Download, Heart, Share2, Settings, Sparkles } from "lucide-react";
import { toast } from "sonner";

const ImageGenerator = () => {
  const [prompt, setPrompt] = useState("");
  const [selectedStyle, setSelectedStyle] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedImages, setGeneratedImages] = useState<string[]>([]);

  const styles = [
    "Realista",
    "Anime",
    "Digital Art",
    "3D Render",
    "Concept Art",
    "Fotografía",
    "Ilustración",
    "Cyberpunk"
  ];

  const handleGenerate = async () => {
    if (!prompt.trim()) {
      toast.error("Por favor, escribe una descripción para tu imagen");
      return;
    }

    setIsGenerating(true);
    toast.info("Generando tu imagen...");

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 3000));

    // Mock generated images
    const mockImages = [
      "https://images.unsplash.com/photo-1518709414923-fcf25c61cd44?w=512&h=512&fit=crop",
      "https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=512&h=512&fit=crop",
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=512&h=512&fit=crop",
      "https://images.unsplash.com/photo-1573164713988-8665fc963095?w=512&h=512&fit=crop"
    ];

    setGeneratedImages(mockImages);
    setIsGenerating(false);
    toast.success("¡Imagen generada exitosamente!");
  };

  return (
    <section id="generate" className="py-24 bg-gradient-to-b from-background to-card/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Generador de <span className="gradient-ai-primary bg-clip-text text-transparent">Imágenes IA</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Convierte tus ideas en imágenes espectaculares con nuestra IA avanzada
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Generator Panel */}
          <Card className="bg-card/50 backdrop-blur-sm border-border/50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Wand2 className="w-5 h-5 text-ai-purple" />
                Crear Nueva Imagen
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Prompt Input */}
              <div>
                <label className="block text-sm font-medium mb-3">Descripción</label>
                <Textarea
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  placeholder="Describe la imagen que quieres crear... (ej: un dragón majestuoso volando sobre montañas nevadas al atardecer)"
                  className="min-h-[120px] bg-background/50 border-border/50 focus:border-ai-purple/50"
                />
              </div>

              {/* Style Selection */}
              <div>
                <label className="block text-sm font-medium mb-3">Estilo Artístico</label>
                <Select value={selectedStyle} onValueChange={setSelectedStyle}>
                  <SelectTrigger className="bg-background/50 border-border/50">
                    <SelectValue placeholder="Selecciona un estilo" />
                  </SelectTrigger>
                  <SelectContent>
                    {styles.map((style) => (
                      <SelectItem key={style} value={style.toLowerCase()}>
                        {style}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Advanced Settings */}
              <div className="flex items-center gap-2 p-3 bg-secondary/30 rounded-lg">
                <Settings className="w-4 h-4 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">Configuración avanzada disponible en Pro</span>
              </div>

              {/* Generate Button */}
              <Button 
                onClick={handleGenerate}
                disabled={isGenerating}
                className="w-full gradient-ai-primary hover:shadow-ai transition-all duration-300 text-lg py-6"
              >
                {isGenerating ? (
                  <>
                    <Sparkles className="w-5 h-5 mr-2 animate-spin" />
                    Generando...
                  </>
                ) : (
                  <>
                    <Wand2 className="w-5 h-5 mr-2" />
                    Generar Imagen
                  </>
                )}
              </Button>

              <div className="text-center text-sm text-muted-foreground">
                Costo: <Badge variant="secondary" className="ml-1">5 créditos</Badge>
              </div>
            </CardContent>
          </Card>

          {/* Results Panel */}
          <Card className="bg-card/50 backdrop-blur-sm border-border/50">
            <CardHeader>
              <CardTitle>Resultados</CardTitle>
            </CardHeader>
            <CardContent>
              {generatedImages.length > 0 ? (
                <div className="grid grid-cols-2 gap-4">
                  {generatedImages.map((image, index) => (
                    <div key={index} className="group relative">
                      <img 
                        src={image} 
                        alt={`Generated ${index + 1}`}
                        className="w-full aspect-square object-cover rounded-lg border border-border/50"
                      />
                      {/* Overlay */}
                      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg flex items-center justify-center gap-2">
                        <Button size="sm" variant="secondary" className="h-8 w-8 p-0">
                          <Download className="w-4 h-4" />
                        </Button>
                        <Button size="sm" variant="secondary" className="h-8 w-8 p-0">
                          <Heart className="w-4 h-4" />
                        </Button>
                        <Button size="sm" variant="secondary" className="h-8 w-8 p-0">
                          <Share2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-16 text-muted-foreground">
                  <Wand2 className="w-16 h-16 mx-auto mb-4 opacity-20" />
                  <p>Tus imágenes generadas aparecerán aquí</p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ImageGenerator;