import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { lessons, languages } from "@/data/mock";
import { Clock, PlayCircle, Trophy, Users } from "lucide-react";

const LEVELS = ["All", "beginner", "intermediate", "advanced"];

export default function Learn() {
  const [langFilter, setLangFilter] = useState("All");
  const [levelFilter, setLevelFilter] = useState("All");

  const filtered = lessons.filter((lesson) => {
    if (langFilter !== "All" && lesson.language !== langFilter) return false;
    if (levelFilter !== "All" && lesson.level !== levelFilter) return false;
    return true;
  });

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Learning Hub</h1>
        <p className="text-muted-foreground mt-2">Gamified lessons to bring regional languages into your life.</p>
      </div>

      <div className="space-y-4 bg-card border p-4 rounded-lg">
        <div className="flex flex-wrap gap-2 items-center">
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
        <div className="flex flex-wrap gap-2 items-center">
          <span className="text-sm font-medium w-16">Level:</span>
          {LEVELS.map((l) => (
            <Badge 
              key={l}
              variant={levelFilter === l ? "default" : "secondary"}
              className="cursor-pointer capitalize"
              onClick={() => setLevelFilter(l)}
            >
              {l}
            </Badge>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((lesson) => (
          <Card key={lesson.id} className="flex flex-col hover:border-primary/50 transition-colors">
            <CardHeader className="pb-2">
              <div className="flex justify-between items-start mb-2">
                <Badge variant="outline" className="text-primary border-primary/30 bg-primary/5 capitalize">
                  {lesson.level}
                </Badge>
                <Badge variant="secondary">{lesson.language}</Badge>
              </div>
              <h3 className="font-bold text-xl leading-tight">{lesson.title}</h3>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-sm text-muted-foreground mb-4">{lesson.description}</p>
              
              <div className="grid grid-cols-2 gap-y-3 text-sm">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Clock className="w-4 h-4 text-primary" />
                  <span>{lesson.duration}</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <PlayCircle className="w-4 h-4 text-primary" />
                  <span>{lesson.exercises} exercises</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Trophy className="w-4 h-4 text-primary" />
                  <span className="font-medium text-foreground">{lesson.xp} XP</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Users className="w-4 h-4 text-primary" />
                  <span>{lesson.completions} learners</span>
                </div>
              </div>
            </CardContent>
            <CardFooter className="pt-4 border-t">
              <Button className="w-full font-bold">Start Lesson</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
      
      {filtered.length === 0 && (
        <div className="text-center py-12 text-muted-foreground">
          No lessons found matching these filters.
        </div>
      )}
    </div>
  );
}
