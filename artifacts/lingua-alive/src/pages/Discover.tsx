import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { content, languages } from "@/data/mock";
import { MessageCircle, Heart, ArrowLeftRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const TYPES = ["All", "story", "poem", "song", "proverb", "meme"];

export default function Discover() {
  const [langFilter, setLangFilter] = useState("All");
  const [typeFilter, setTypeFilter] = useState("All");
  const [showTranslation, setShowTranslation] = useState<Record<number, boolean>>({});

  const filtered = content.filter((item) => {
    if (langFilter !== "All" && item.language !== langFilter) return false;
    if (typeFilter !== "All" && item.type !== typeFilter) return false;
    return true;
  });

  const toggleTranslation = (id: number) => {
    setShowTranslation(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Discover</h1>
        <p className="text-muted-foreground mt-2">Stories, poems, proverbs, and songs in regional languages.</p>
      </div>

      <div className="space-y-4">
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
          <span className="text-sm font-medium w-16">Type:</span>
          {TYPES.map((t) => (
            <Badge 
              key={t} 
              variant={typeFilter === t ? "default" : "secondary"}
              className="cursor-pointer capitalize"
              onClick={() => setTypeFilter(t)}
            >
              {t}
            </Badge>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filtered.map((item) => (
          <Card key={item.id} className="flex flex-col">
            <CardHeader className="pb-3 border-b border-border/50">
              <div className="flex justify-between items-center mb-2">
                <Badge variant="secondary" className="capitalize text-primary bg-primary/10">
                  {item.type}
                </Badge>
                <span className="text-xs text-muted-foreground">{item.timeAgo}</span>
              </div>
              <div className="flex justify-between items-start">
                <Badge variant="outline">{item.language}</Badge>
              </div>
            </CardHeader>
            <CardContent className="py-6 flex-grow">
              <div className="space-y-4">
                <h3 className="text-2xl font-serif font-semibold leading-relaxed">
                  {showTranslation[item.id] ? item.translation : item.nativeTitle}
                </h3>
                <div className="flex items-center gap-2">
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="h-8 px-2 text-xs text-muted-foreground"
                    onClick={() => toggleTranslation(item.id)}
                  >
                    <ArrowLeftRight className="w-3 h-3 mr-1" />
                    {showTranslation[item.id] ? "Show Native" : "Show Translation"}
                  </Button>
                </div>
              </div>
            </CardContent>
            <CardFooter className="pt-4 border-t border-border/50 flex flex-col gap-4">
              <div className="flex flex-wrap gap-2 w-full">
                {item.tags.map(tag => (
                  <span key={tag} className="text-xs text-muted-foreground bg-accent px-2 py-1 rounded-md">
                    #{tag}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center w-full mt-2">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xs font-bold">
                    {item.author[0]}
                  </div>
                  <span className="text-sm font-medium">{item.author}</span>
                </div>
                <div className="flex items-center gap-4 text-muted-foreground text-sm">
                  <button className="flex items-center gap-1 hover:text-primary transition-colors">
                    <Heart className="w-4 h-4" /> {item.likes}
                  </button>
                  <button className="flex items-center gap-1 hover:text-primary transition-colors">
                    <MessageCircle className="w-4 h-4" /> {item.comments}
                  </button>
                </div>
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
