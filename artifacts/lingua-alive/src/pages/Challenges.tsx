import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { challenges, languages } from "@/data/mock";
import { Clock, Trophy, Flame } from "lucide-react";

export default function Challenges() {
  const [langFilter, setLangFilter] = useState("All");

  const filtered = challenges.filter((c) => {
    if (langFilter !== "All" && c.language !== langFilter) return false;
    return true;
  });

  return (
    <div className="space-y-8 max-w-4xl mx-auto">
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-3xl font-bold">Daily Challenges</h1>
          <p className="text-muted-foreground mt-2">Complete challenges to earn XP and keep your streak alive.</p>
        </div>
        <div className="hidden sm:flex items-center gap-2 bg-orange-100 text-orange-600 px-4 py-2 rounded-lg font-bold border border-orange-200">
          <Flame className="w-5 h-5 fill-current" />
          14 Day Streak
        </div>
      </div>

      <div className="flex flex-wrap gap-2 items-center bg-card p-4 rounded-lg border">
        <span className="text-sm font-medium w-16">Language:</span>
        <Badge 
          variant={langFilter === "All" ? "default" : "secondary"}
          className="cursor-pointer"
          onClick={() => setLangFilter("All")}
        >
          All
        </Badge>
        {languages.map((l) => (
          <Badge 
            key={l.english}
            variant={langFilter === l.english ? "default" : "outline"}
            className="cursor-pointer"
            onClick={() => setLangFilter(l.english)}
          >
            {l.english}
          </Badge>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filtered.map((challenge) => (
          <Card key={challenge.id} className="flex flex-col border-l-4 border-l-primary hover:shadow-md transition-all">
            <CardHeader className="pb-2">
              <div className="flex justify-between items-start mb-2">
                <Badge variant="outline">{challenge.language}</Badge>
                <Badge variant="secondary" className="capitalize bg-accent">{challenge.difficulty}</Badge>
              </div>
              <h3 className="font-bold text-lg">{challenge.title}</h3>
            </CardHeader>
            <CardContent className="flex-grow flex flex-col justify-between">
              <div className="flex gap-6 mt-4 mb-6">
                <div className="flex items-center gap-2 text-muted-foreground font-medium">
                  <Trophy className="w-5 h-5 text-yellow-500" />
                  {challenge.xp} XP
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Clock className="w-5 h-5 text-blue-500" />
                  {challenge.timeLimit}
                </div>
              </div>
              <Button className="w-full">Start Challenge</Button>
            </CardContent>
          </Card>
        ))}
      </div>
      
      {filtered.length === 0 && (
        <div className="text-center py-12 text-muted-foreground">
          No challenges found for this language today.
        </div>
      )}
    </div>
  );
}
