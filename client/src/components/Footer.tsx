import { Link } from "wouter";
import { Rocket } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-border/40 bg-card/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center size-8 rounded-md bg-primary/10">
                <Rocket className="size-4 text-primary" />
              </div>
              <span className="text-lg font-semibold">GeoAI</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Open-source Earth Observation intelligence platform powered by multimodal AI.
            </p>
          </div>

          {/* Product */}
          <div>
            <h4 className="font-semibold mb-4">Product</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/chat" className="text-sm text-muted-foreground hover:text-foreground transition-colors" data-testid="footer-chat">
                  Chat Interface
                </Link>
              </li>
              <li>
                <Link href="/docs" className="text-sm text-muted-foreground hover:text-foreground transition-colors" data-testid="footer-docs">
                  Documentation
                </Link>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors" data-testid="footer-api">
                  API Reference
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-foreground transition-colors" data-testid="footer-github">
                  GitHub
                </a>
              </li>
              <li>
                <a href="https://huggingface.co" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-foreground transition-colors" data-testid="footer-huggingface">
                  Hugging Face
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors" data-testid="footer-dataset">
                  Training Datasets
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors" data-testid="footer-privacy">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors" data-testid="footer-terms">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors" data-testid="footer-contact">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border/40">
          <p className="text-sm text-muted-foreground text-center">
            © 2025 GeoAI. Built for ISRO & Earth Observation community. Open source under MIT License.
          </p>
        </div>
      </div>
    </footer>
  );
}
