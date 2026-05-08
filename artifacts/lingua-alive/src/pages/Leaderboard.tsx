import { leaderboard } from "@/data/mock";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

export default function Leaderboard() {
  return (
    <div className="space-y-8 max-w-4xl mx-auto">
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-bold">Community Leaderboard</h1>
        <p className="text-muted-foreground">The most active creators and learners this week.</p>
      </div>

      <Card className="border-none shadow-md bg-card overflow-hidden">
        <div className="grid grid-cols-12 gap-4 px-6 py-4 bg-muted/50 border-b text-sm font-semibold text-muted-foreground">
          <div className="col-span-1 text-center">Rank</div>
          <div className="col-span-4 md:col-span-5">Creator</div>
          <div className="col-span-3 md:col-span-2 hidden md:block">Languages</div>
          <div className="col-span-3 md:col-span-2 text-right">Activity</div>
          <div className="col-span-4 md:col-span-2 text-right">XP</div>
        </div>
        
        <div className="divide-y">
          {leaderboard.map((user) => (
            <div key={user.rank} className="grid grid-cols-12 gap-4 px-6 py-5 items-center hover:bg-accent/20 transition-colors">
              <div className="col-span-1 text-center font-bold text-lg">
                {user.rank === 1 ? <span className="text-yellow-500">#1</span> : 
                 user.rank === 2 ? <span className="text-slate-400">#2</span> : 
                 user.rank === 3 ? <span className="text-amber-600">#3</span> : 
                 <span className="text-muted-foreground">#{user.rank}</span>}
              </div>
              
              <div className="col-span-4 md:col-span-5 flex items-center gap-3">
                <Avatar className={`h-10 w-10 border-2 ${
                  user.rank === 1 ? 'border-yellow-500' :
                  user.rank === 2 ? 'border-slate-400' :
                  user.rank === 3 ? 'border-amber-600' : 'border-transparent'
                }`}>
                  <AvatarFallback className={user.rank <= 3 ? 'bg-primary/10 text-primary font-bold' : ''}>
                    {user.initials}
                  </AvatarFallback>
                </Avatar>
                <span className="font-semibold">{user.name}</span>
              </div>

              <div className="col-span-3 md:col-span-2 hidden md:block">
                <div className="flex flex-wrap gap-1">
                  {user.languages.split(',').map(lang => (
                    <Badge key={lang} variant="secondary" className="font-normal text-xs">{lang.trim()}</Badge>
                  ))}
                </div>
              </div>

              <div className="col-span-3 md:col-span-2 text-right flex flex-col md:flex-row md:justify-end md:gap-3">
                <span className="text-sm font-medium text-orange-500">{user.streak}</span>
                <span className="text-sm text-muted-foreground">{user.pieces} pieces</span>
              </div>

              <div className="col-span-4 md:col-span-2 text-right font-bold text-primary">
                {user.xp}
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}
