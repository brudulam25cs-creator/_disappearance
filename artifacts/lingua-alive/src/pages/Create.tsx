import { useState } from "react";
import { languages } from "@/data/mock";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { useLocation } from "wouter";

export default function Create() {
  const { toast } = useToast();
  const [, setLocation] = useLocation();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Content created!",
        description: "Your submission has been shared with the community.",
      });
      setLocation("/discover");
    }, 1000);
  };

  return (
    <div className="max-w-2xl mx-auto space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Create Content</h1>
        <p className="text-muted-foreground mt-2">Add a story, poem, proverb, or song to preserve a language.</p>
      </div>

      <Card className="border-none shadow-lg">
        <CardContent className="p-6 md:p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="language">Language</Label>
                <Select required>
                  <SelectTrigger id="language">
                    <SelectValue placeholder="Select language" />
                  </SelectTrigger>
                  <SelectContent>
                    {languages.map(l => (
                      <SelectItem key={l.id} value={l.id}>{l.native} ({l.english})</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="type">Content Type</Label>
                <Select required>
                  <SelectTrigger id="type">
                    <SelectValue placeholder="Select type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="story">Story</SelectItem>
                    <SelectItem value="poem">Poem</SelectItem>
                    <SelectItem value="song">Song</SelectItem>
                    <SelectItem value="proverb">Proverb</SelectItem>
                    <SelectItem value="meme">Meme</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="name">Your Name</Label>
              <Input id="name" placeholder="How should we credit you?" required />
            </div>

            <div className="space-y-2">
              <Label htmlFor="title">Title (in Native Script if possible)</Label>
              <Input id="title" placeholder="Enter title" required />
            </div>

            <div className="space-y-2">
              <Label htmlFor="content">Content (in Regional Language)</Label>
              <Textarea 
                id="content" 
                placeholder="Write your piece here..." 
                className="min-h-[150px] resize-y"
                required 
              />
            </div>

            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <Label htmlFor="translation">English Translation</Label>
                <span className="text-xs text-muted-foreground">Optional</span>
              </div>
              <Textarea 
                id="translation" 
                placeholder="Provide a translation to help learners..." 
                className="min-h-[100px] resize-y"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="tags">Tags</Label>
              <Input id="tags" placeholder="e.g. nature, history, wisdom (comma separated)" />
              <p className="text-xs text-muted-foreground">Helps others discover your content.</p>
            </div>

            <Button type="submit" className="w-full h-12 text-base font-bold" disabled={isSubmitting}>
              {isSubmitting ? "Sharing..." : "Share with Community"}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
