import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ImageGenerator from "@/components/ImageGenerator";
import Gallery from "@/components/Gallery";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <ImageGenerator />
        <Gallery />
      </main>
    </div>
  );
};

export default Index;