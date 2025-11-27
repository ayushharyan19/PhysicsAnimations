import { useState, useEffect } from 'react';
import { Link, useLocation } from 'wouter';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, X, Atom, FlaskConical } from 'lucide-react';

const navItems = [
  { path: '/', label: 'Home' },
  { path: '/concept', label: 'Concept' },
  { path: '/experiment', label: 'Setup' },
  { path: '/procedure', label: 'Procedure' },
  { path: '/data', label: 'Data' },
  { path: '/calculations', label: 'Calculations' },
  { path: '/applications', label: 'Applications' },
  { path: '/conclusion', label: 'Conclusion' },
];

export default function Navigation() {
  const [location] = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-background/80 backdrop-blur-lg border-b border-border shadow-lg'
          : 'bg-transparent'
      }`}
      data-testid="navigation-header"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/">
            <div className="flex items-center gap-2 group cursor-pointer" data-testid="link-home-logo">
              <div className="relative">
                <Atom className="h-8 w-8 text-primary animate-spin-slow" />
                <FlaskConical className="h-4 w-4 text-secondary absolute -bottom-1 -right-1" />
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                  Physics Lab
                </span>
                <span className="text-[10px] text-muted-foreground -mt-1">Group 4</span>
              </div>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-1" data-testid="nav-desktop">
            {navItems.map((item) => (
              <Link key={item.path} href={item.path}>
                <Button
                  variant="ghost"
                  size="sm"
                  className={`relative px-3 py-2 text-sm font-medium transition-all ${
                    location === item.path
                      ? 'text-primary'
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                  data-testid={`link-nav-${item.label.toLowerCase()}`}
                >
                  {item.label}
                  {location === item.path && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4/5 h-0.5 bg-primary rounded-full" />
                  )}
                </Button>
              </Link>
            ))}
          </nav>

          <div className="lg:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" data-testid="button-mobile-menu">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-72 bg-background/95 backdrop-blur-xl">
                <div className="flex flex-col gap-6 mt-8">
                  <div className="flex items-center gap-2">
                    <Atom className="h-6 w-6 text-primary" />
                    <span className="text-lg font-bold">Physics Lab</span>
                  </div>
                  <nav className="flex flex-col gap-2" data-testid="nav-mobile">
                    {navItems.map((item) => (
                      <Link key={item.path} href={item.path}>
                        <Button
                          variant={location === item.path ? 'secondary' : 'ghost'}
                          className="w-full justify-start"
                          onClick={() => setIsOpen(false)}
                          data-testid={`link-mobile-${item.label.toLowerCase()}`}
                        >
                          {item.label}
                        </Button>
                      </Link>
                    ))}
                  </nav>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
