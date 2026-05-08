import { 
  House, 
  Globe, 
  Compass, 
  Palette, 
  GraduationCap, 
  Gamepad2, 
  Puzzle, 
  Trophy, 
  MessageCircle, 
  BarChart2, 
  TrendingUp, 
  Plus, 
  Menu
} from "lucide-react";
import { Link, useLocation } from "wouter";
import { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

const NAV_ITEMS = [
  { href: "/", label: "Home", icon: House },
  { href: "/languages", label: "Languages", icon: Globe },
  { href: "/discover", label: "Discover", icon: Compass },
  { href: "/culture", label: "Culture", icon: Palette },
  { href: "/learn", label: "Learn", icon: GraduationCap },
  { href: "/games", label: "Games", icon: Gamepad2 },
  { href: "/puzzles", label: "Puzzles", icon: Puzzle },
  { href: "/challenges", label: "Challenges", icon: Trophy },
  { href: "/chat", label: "AI Chat", icon: MessageCircle },
  { href: "/leaderboard", label: "Leaderboard", icon: BarChart2 },
  { href: "/stats", label: "Stats", icon: TrendingUp },
  { href: "/create", label: "Create", icon: Plus },
];

function SidebarContent({ close }: { close?: () => void }) {
  const [location] = useLocation();

  return (
    <div className="flex h-full flex-col bg-sidebar border-r border-sidebar-border">
      <div className="p-6">
        <Link href="/" onClick={close}>
          <div className="flex flex-col gap-1 cursor-pointer">
            <h1 className="text-2xl font-bold text-primary">LinguaAlive</h1>
            <p className="text-xs text-sidebar-foreground/70 font-medium tracking-wide">
              Every language, digital.
            </p>
          </div>
        </Link>
      </div>

      <nav className="flex-1 overflow-y-auto px-4 py-2 space-y-1">
        {NAV_ITEMS.map((item) => {
          const isActive = location === item.href;
          const Icon = item.icon;
          return (
            <Link key={item.href} href={item.href} onClick={close}>
              <div
                className={`flex items-center gap-3 px-3 py-2.5 rounded-md cursor-pointer transition-colors ${
                  isActive 
                    ? "bg-sidebar-accent text-sidebar-accent-foreground font-semibold" 
                    : "text-sidebar-foreground hover:bg-sidebar-accent/50 hover:text-sidebar-foreground"
                }`}
              >
                <Icon className={`w-5 h-5 ${isActive ? "text-primary" : "text-sidebar-foreground/70"}`} />
                <span>{item.label}</span>
              </div>
            </Link>
          );
        })}
      </nav>

      <div className="p-4 border-t border-sidebar-border mt-auto">
        <p className="text-xs text-center text-sidebar-foreground/60 font-medium">
          Preserving voices, one byte at a time.
        </p>
      </div>
    </div>
  );
}

export function Layout({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex min-h-[100dvh] w-full bg-background text-foreground">
      {/* Desktop Sidebar */}
      <aside className="hidden md:block w-64 flex-shrink-0 sticky top-0 h-screen">
        <SidebarContent />
      </aside>

      {/* Mobile Header & Sidebar */}
      <div className="md:hidden fixed top-0 left-0 right-0 h-16 border-b bg-background flex items-center px-4 z-50">
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden mr-2">
              <Menu className="w-5 h-5" />
              <span className="sr-only">Toggle navigation</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="p-0 w-72">
            <SidebarContent close={() => setOpen(false)} />
          </SheetContent>
        </Sheet>
        <h1 className="text-xl font-bold text-primary">LinguaAlive</h1>
      </div>

      {/* Main Content */}
      <main className="flex-1 flex flex-col min-w-0 pt-16 md:pt-0">
        <div className="flex-1 w-full max-w-6xl mx-auto p-4 md:p-8">
          {children}
        </div>
      </main>
    </div>
  );
}
