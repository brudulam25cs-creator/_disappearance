import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { languages } from "@/data/mock";
import { Search, Users, PenTool, GraduationCap } from "lucide-react";

const REGIONS = ["All", "South India", "South Asia", "Europe", "South America", "West Africa", "Pacific"];
const STATUSES = ["All", "Critically Endangered", "Endangered", "Vulnerable", "Safe"];

export default function Languages() {
  const [regionFilter, setRegionFilter] = useState("All");
  const [statusFilter, setStatusFilter] = useState("All");
  const [search, setSearch] = useState("");

  const filtered = languages.filter((lang) => {
    if (regionFilter !== "All" && lang.regionGroup !== regionFilter) return false;
    if (statusFilter !== "All" && lang.status !== statusFilter) return false;
    if (search && !lang.english.toLowerCase().includes(search.toLowerCase()) && !lang.native.toLowerCase().includes(search.toLowerCase())) return false;
    return true;
  });

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Language Explorer</h1>
        <p className="text-muted-foreground mt-2">Discover and track the vitality of regional languages worldwide.</p>
      </div>

      <div className="flex flex-col gap-4 bg-card border rounded-lg p-4">
        <div className="flex flex-wrap items-center gap-4">
          <div className="flex-1 min-w-[200px] relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input 
              placeholder="Search languages..." 
              className="pl-9"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>

        <div className="space-y-3">
          <div className="flex flex-wrap gap-2 items-center">
            <span className="text-sm font-medium w-16">Region:</span>
            {REGIONS.map((r) => (
              <Badge 
                key={r} 
                variant={regionFilter === r ? "default" : "secondary"}
                className="cursor-pointer hover:bg-primary/80"
                onClick={() => setRegionFilter(r)}
              >
                {r}
              </Badge>
            ))}
          </div>
          <div className="flex flex-wrap gap-2 items-center">
            <span className="text-sm font-medium w-16">Status:</span>
            {STATUSES.map((s) => (
              <Badge 
                key={s} 
                variant={statusFilter === s ? "default" : "outline"}
                className="cursor-pointer hover:bg-primary/80"
                onClick={() => setStatusFilter(s)}
              >
                {s}
              </Badge>
            ))}
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <p className="text-sm text-muted-foreground">{filtered.length} languages found</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((lang) => (
          <Card key={lang.id} className="overflow-hidden hover:shadow-lg transition-shadow">
            <CardContent className="p-0">
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-foreground">{lang.native}</h3>
                    <p className="text-muted-foreground">{lang.english}</p>
                  </div>
                  <Badge variant="outline" className={`
                    ${lang.status === 'Safe' ? 'bg-green-100 text-green-700 border-green-200' : ''}
                    ${lang.status === 'Vulnerable' ? 'bg-yellow-100 text-yellow-700 border-yellow-200' : ''}
                    ${lang.status === 'Endangered' ? 'bg-orange-100 text-orange-700 border-orange-200' : ''}
                    ${lang.status === 'Critically Endangered' ? 'bg-red-100 text-red-700 border-red-200' : ''}
                  `}>
                    {lang.status}
                  </Badge>
                </div>
                
                <p className="text-sm text-muted-foreground mb-6">{lang.region}</p>

                <div className="space-y-2 mb-6">
                  <div className="flex justify-between text-sm">
                    <span className="font-medium">Digital Score</span>
                    <span className="font-bold text-primary">{lang.score}/100</span>
                  </div>
                  <Progress value={lang.score} className="h-2" />
                </div>
              </div>

              <div className="bg-accent/30 p-4 border-t grid grid-cols-3 gap-2 text-center divide-x">
                <div className="flex flex-col items-center">
                  <Users className="w-4 h-4 text-muted-foreground mb-1" />
                  <span className="text-sm font-bold">{lang.speakers}</span>
                </div>
                <div className="flex flex-col items-center">
                  <PenTool className="w-4 h-4 text-muted-foreground mb-1" />
                  <span className="text-sm font-bold">{lang.pieces}</span>
                </div>
                <div className="flex flex-col items-center">
                  <GraduationCap className="w-4 h-4 text-muted-foreground mb-1" />
                  <span className="text-sm font-bold">{lang.learners}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
