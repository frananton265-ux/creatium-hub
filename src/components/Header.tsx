import { Button } from "@/components/ui/button";
import { Sparkles, Menu, User, CreditCard } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [credits] = useState(150);

  return (
    <header className="bg-card/80 backdrop-blur-lg border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 gradient-ai-primary rounded-lg flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-ai-purple to-ai-blue bg-clip-text text-transparent">
              AI Genesis
            </span>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#generate" className="text-foreground hover:text-ai-purple transition-colors">
              Generar
            </a>
            <a href="#gallery" className="text-muted-foreground hover:text-foreground transition-colors">
              Galería
            </a>
            <a href="#explore" className="text-muted-foreground hover:text-foreground transition-colors">
              Explorar
            </a>
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-4">
            {/* Credits */}
            <div className="hidden sm:flex items-center gap-2 bg-secondary/50 px-3 py-1.5 rounded-lg">
              <CreditCard className="w-4 h-4 text-ai-cyan" />
              <span className="text-sm font-medium">{credits}</span>
              <span className="text-xs text-muted-foreground">créditos</span>
            </div>

            {/* User */}
            <Button variant="ghost" size="icon" className="rounded-full">
              <User className="w-5 h-5" />
            </Button>

            {/* Mobile menu */}
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;