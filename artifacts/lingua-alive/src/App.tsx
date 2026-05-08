import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import { Layout } from "@/components/Layout";

// Imports
import Home from "@/pages/Home";
import Languages from "@/pages/Languages";
import Discover from "@/pages/Discover";
import Culture from "@/pages/Culture";
import Learn from "@/pages/Learn";
import Games from "@/pages/Games";
import Puzzles from "@/pages/Puzzles";
import Challenges from "@/pages/Challenges";
import Chat from "@/pages/Chat";
import Leaderboard from "@/pages/Leaderboard";
import Stats from "@/pages/Stats";
import Create from "@/pages/Create";

const queryClient = new QueryClient();

function Router() {
  return (
    <Layout>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/languages" component={Languages} />
        <Route path="/discover" component={Discover} />
        <Route path="/culture" component={Culture} />
        <Route path="/learn" component={Learn} />
        <Route path="/games" component={Games} />
        <Route path="/puzzles" component={Puzzles} />
        <Route path="/challenges" component={Challenges} />
        <Route path="/chat" component={Chat} />
        <Route path="/leaderboard" component={Leaderboard} />
        <Route path="/stats" component={Stats} />
        <Route path="/create" component={Create} />
        <Route component={NotFound} />
      </Switch>
    </Layout>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base="">
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
