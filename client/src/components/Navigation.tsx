import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { Github, Rocket, Home, MessageSquare, FileText } from "lucide-react";
import { SiHuggingface } from "react-icons/si";

export default function Navigation() {
  const [location] = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-8">
            <Link href="/" className="flex items-center gap-3 hover-elevate px-3 py-1.5 rounded-md transition-colors">
              <div className="flex items-center justify-center size-8 rounded-md bg-primary/10">
                <Rocket className="size-4 text-primary" />
              </div>
              <span className="text-lg font-semibold text-foreground">GeoAI</span>
            </Link>
            
            <div className="hidden sm:flex items-center gap-2">
              <Link href="/">
                <Button 
                  variant="ghost" 
                  size="sm"
                  className={location === "/" ? "bg-accent" : ""}
                  data-testid="nav-home"
                >
                  <Home className="size-4 sm:mr-2" />
                  <span className="hidden sm:inline">Home</span>
                </Button>
              </Link>
              <Link href="/chat">
                <Button 
                  variant="ghost" 
                  size="sm"
                  className={location === "/chat" ? "bg-accent" : ""}
                  data-testid="nav-chat"
                >
                  <MessageSquare className="size-4 sm:mr-2" />
                  <span className="hidden sm:inline">Chat</span>
                </Button>
              </Link>
              <Link href="/docs">
                <Button 
                  variant="ghost" 
                  size="sm"
                  className={location === "/docs" ? "bg-accent" : ""}
                  data-testid="nav-docs"
                >
                  <FileText className="size-4 sm:mr-2" />
                  <span className="hidden sm:inline">Docs</span>
                </Button>
              </Link>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Tooltip>
              <TooltipTrigger asChild>
                <Button 
                  variant="ghost" 
                  size="icon"
                  asChild
                  data-testid="link-github"
                >
                  <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                    <Github className="size-5" />
                  </a>
                </Button>
              </TooltipTrigger>
              <TooltipContent>View on GitHub</TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <Button 
                  variant="ghost" 
                  size="icon"
                  asChild
                  data-testid="link-huggingface"
                >
                  <a href="https://huggingface.co/spaces" target="_blank" rel="noopener noreferrer">
                    <SiHuggingface className="size-5" />
                  </a>
                </Button>
              </TooltipTrigger>
              <TooltipContent>Try Model on Hugging Face Spaces</TooltipContent>
            </Tooltip>
          </div>
        </div>
      </div>
    </nav>
  );
}
