import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Code, User, Briefcase, Award, Mail, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";
import { cn } from "@/lib/utils";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { href: "/", label: "Home", icon: Code },
    { href: "/about", label: "About", icon: User },
    { href: "/projects", label: "Projects", icon: Briefcase },
    { href: "/certifications", label: "Certifications", icon: Award },
    { href: "/resume", label: "Resume", icon: FileText },
    { href: "/contact", label: "Contact", icon: Mail },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Theme Toggle - Top Left */}
          <div className="flex items-center gap-4">
            <ThemeToggle />
            
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2 font-heading font-bold text-xl">
              <Code className="h-6 w-6 text-primary" />
              <span>Portfolio</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={cn(
                  "px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 flex items-center space-x-2",
                  isActive(item.href)
                    ? "bg-primary text-primary-foreground shadow-card"
                    : "text-muted-foreground hover:text-foreground hover:bg-accent"
                )}
              >
                <item.icon className="h-4 w-4" />
                <span>{item.label}</span>
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 animate-fade-in">
            <div className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={cn(
                    "px-4 py-3 rounded-md text-sm font-medium transition-all duration-200 flex items-center space-x-3",
                    isActive(item.href)
                      ? "bg-primary text-primary-foreground shadow-card"
                      : "text-muted-foreground hover:text-foreground hover:bg-accent"
                  )}
                >
                  <item.icon className="h-4 w-4" />
                  <span>{item.label}</span>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;