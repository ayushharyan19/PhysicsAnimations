import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Navigation from "@/components/Navigation";
import ParticleBackground from "@/components/ParticleBackground";
import Home from "@/pages/Home";
import Concept from "@/pages/Concept";
import Experiment from "@/pages/Experiment";
import Procedure from "@/pages/Procedure";
import Data from "@/pages/Data";
import Calculations from "@/pages/Calculations";
import Applications from "@/pages/Applications";
import Conclusion from "@/pages/Conclusion";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/concept" component={Concept} />
      <Route path="/experiment" component={Experiment} />
      <Route path="/procedure" component={Procedure} />
      <Route path="/data" component={Data} />
      <Route path="/calculations" component={Calculations} />
      <Route path="/applications" component={Applications} />
      <Route path="/conclusion" component={Conclusion} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <div className="min-h-screen bg-background text-foreground relative">
          <ParticleBackground />
          <Navigation />
          <main className="relative z-10">
            <Router />
          </main>
          <footer className="relative z-10 border-t border-border bg-card/50 backdrop-blur-sm py-8 mt-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="text-center md:text-left">
                  <p className="text-sm font-medium text-foreground">
                    Rubber Band Launcher - Physics Internals
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Group 4 | Hooke's Law & Energy Conversion
                  </p>
                </div>
                <div className="text-center md:text-right">
                  <p className="text-xs text-muted-foreground">
                    An investigation of elastic potential energy and projectile motion
                  </p>
                </div>
              </div>
            </div>
          </footer>
        </div>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
