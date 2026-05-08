import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { languages } from "@/data/mock";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

const categories = ["Dress & Attire", "Food & Cuisine", "Festivals & Arts"];

export default function Culture() {
  const [langFilter, setLangFilter] = useState("Welsh");
  const [categoryFilter, setCategoryFilter] = useState("All");

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Culture Explorer</h1>
        <p className="text-muted-foreground mt-2">Discover the rich traditions and expressions of regional cultures.</p>
      </div>

      <div className="flex flex-wrap gap-2">
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

      <Tabs defaultValue="gallery" className="w-full">
        <TabsList className="mb-6">
          <TabsTrigger value="gallery">Gallery</TabsTrigger>
          <TabsTrigger value="songs">Songs</TabsTrigger>
          <TabsTrigger value="poems">Poems</TabsTrigger>
          <TabsTrigger value="stories">Stories</TabsTrigger>
          <TabsTrigger value="memes">Memes</TabsTrigger>
        </TabsList>

        <TabsContent value="gallery" className="space-y-6">
          <div className="flex flex-wrap gap-2">
            <Badge 
              variant={categoryFilter === "All" ? "secondary" : "outline"}
              className="cursor-pointer"
              onClick={() => setCategoryFilter("All")}
            >
              All
            </Badge>
            {categories.map(c => (
              <Badge 
                key={c}
                variant={categoryFilter === c ? "secondary" : "outline"}
                className="cursor-pointer"
                onClick={() => setCategoryFilter(c)}
              >
                {c}
              </Badge>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="overflow-hidden border-none shadow-md">
              <img 
                src="https://images.unsplash.com/photo-1533134486753-c833f0ed4866?w=600&q=80" 
                alt="Culture" 
                className="w-full h-64 object-cover"
              />
              <CardContent className="p-6">
                <Badge className="mb-2">Festivals & Arts</Badge>
                <h3 className="text-xl font-bold mb-2">Traditional Dance</h3>
                <p className="text-muted-foreground text-sm">
                  A beautiful display of cultural heritage passed down through generations. 
                  Every movement tells a story of the people.
                </p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden border-none shadow-md">
              <img 
                src="https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?w=600&q=80" 
                alt="Food" 
                className="w-full h-64 object-cover"
              />
              <CardContent className="p-6">
                <Badge className="mb-2">Food & Cuisine</Badge>
                <h3 className="text-xl font-bold mb-2">Local Delicacies</h3>
                <p className="text-muted-foreground text-sm">
                  The flavors of the region, prepared using ancient recipes and locally sourced ingredients.
                </p>
              </CardContent>
            </Card>
            
            <Card className="overflow-hidden border-none shadow-md md:col-span-2">
              <img 
                src="https://images.unsplash.com/photo-1498462440456-0dba182e775b?w=1200&q=80" 
                alt="Landscape" 
                className="w-full h-80 object-cover"
              />
              <CardContent className="p-6">
                <Badge className="mb-2">Landscape</Badge>
                <h3 className="text-2xl font-bold mb-2">The Homeland</h3>
                <p className="text-muted-foreground text-sm">
                  The environment that shaped the language and its people. 
                  Geography deeply influences cultural expressions and vocabulary.
                </p>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        
        <TabsContent value="songs" className="py-12 text-center text-muted-foreground">
          <p>Select a language to explore traditional and modern songs.</p>
        </TabsContent>
        <TabsContent value="poems" className="py-12 text-center text-muted-foreground">
          <p>Read poetry and spoken word in {langFilter}.</p>
        </TabsContent>
        <TabsContent value="stories" className="py-12 text-center text-muted-foreground">
          <p>Explore folktales, myths, and contemporary stories.</p>
        </TabsContent>
        <TabsContent value="memes" className="py-12 text-center text-muted-foreground">
          <p>Internet culture translated into {langFilter}.</p>
        </TabsContent>
      </Tabs>
    </div>
  );
}
