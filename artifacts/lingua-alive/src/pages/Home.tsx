import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import { Globe2, PenTool, Users, Trophy } from "lucide-react";
import { languages, activity } from "@/data/mock";

export default function Home() {
  const featuredLanguages = languages.slice(0, 6);

  return (
    <div className="flex flex-col gap-12 pb-12">
      {/* Hero Section */}
      <section className="flex flex-col items-center text-center space-y-6 py-12 md:py-24 max-w-4xl mx-auto">
        <Badge variant="secondary" className="px-4 py-1.5 rounded-full text-sm font-medium bg-primary/10 text-primary hover:bg-primary/20">
          Languages going digital, one at a time
        </Badge>
        
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-tight">
          Where endangered <br className="hidden md:block" />
          <span className="text-primary">languages go viral</span>
        </h1>
        
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
          Learn, create, and celebrate the world's most underrepresented voices. From Santali to Quechua to Hawaiian — every language deserves a digital home.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 pt-4">
          <Link href="/languages">
            <Button size="lg" className="rounded-full px-8 text-base shadow-lg shadow-primary/25 h-14">
              Explore Languages
            </Button>
          </Link>
          <Link href="/chat">
            <Button size="lg" variant="outline" className="rounded-full px-8 text-base h-14 border-2">
              Try AI Conversation
            </Button>
          </Link>
        </div>
      </section>

      {/* Stats Row */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Card className="border-none shadow-sm bg-accent/30">
          <CardContent className="p-6 flex flex-col items-center text-center gap-2">
            <div className="p-3 bg-primary/10 rounded-full text-primary mb-2">
              <Globe2 className="w-6 h-6" />
            </div>
            <h3 className="text-3xl font-bold">13</h3>
            <p className="text-sm font-medium text-muted-foreground">Regional Languages</p>
          </CardContent>
        </Card>
        
        <Card className="border-none shadow-sm bg-accent/30">
          <CardContent className="p-6 flex flex-col items-center text-center gap-2">
            <div className="p-3 bg-primary/10 rounded-full text-primary mb-2">
              <PenTool className="w-6 h-6" />
            </div>
            <h3 className="text-3xl font-bold">11</h3>
            <p className="text-sm font-medium text-muted-foreground">Pieces Created</p>
          </CardContent>
        </Card>

        <Card className="border-none shadow-sm bg-accent/30">
          <CardContent className="p-6 flex flex-col items-center text-center gap-2">
            <div className="p-3 bg-primary/10 rounded-full text-primary mb-2">
              <Users className="w-6 h-6" />
            </div>
            <h3 className="text-3xl font-bold">6</h3>
            <p className="text-sm font-medium text-muted-foreground">Active Learners</p>
          </CardContent>
        </Card>

        <Card className="border-none shadow-sm bg-accent/30">
          <CardContent className="p-6 flex flex-col items-center text-center gap-2">
            <div className="p-3 bg-primary/10 rounded-full text-primary mb-2">
              <Trophy className="w-6 h-6" />
            </div>
            <h3 className="text-3xl font-bold">163</h3>
            <p className="text-sm font-medium text-muted-foreground">Challenges Done</p>
          </CardContent>
        </Card>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Featured Languages */}
        <section className="md:col-span-2 space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold">Featured Languages</h2>
            <Link href="/languages">
              <Button variant="ghost" className="text-primary">View all</Button>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {featuredLanguages.map(lang => (
              <Card key={lang.id} className="group hover:shadow-md transition-all cursor-pointer border-border/50">
                <CardContent className="p-5 flex flex-col gap-3">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-xl font-bold">{lang.native}</h3>
                      <p className="text-sm text-muted-foreground">{lang.english}</p>
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
                  <p className="text-sm text-muted-foreground">{lang.region}</p>
                  <div className="flex items-center gap-4 text-xs font-medium mt-2 pt-4 border-t">
                    <span className="flex items-center gap-1"><Users className="w-3.5 h-3.5" /> {lang.speakers}</span>
                    <span className="flex items-center gap-1"><PenTool className="w-3.5 h-3.5" /> {lang.pieces} pieces</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Recent Activity */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold">Recent Activity</h2>
          <Card className="border-border/50 shadow-sm">
            <CardContent className="p-0">
              <div className="divide-y divide-border/50">
                {activity.map(act => (
                  <div key={act.id} className="p-4 flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-sm shrink-0">
                      {act.user[0]}
                    </div>
                    <div className="flex flex-col">
                      <p className="text-sm">
                        <span className="font-semibold">{act.user}</span>{" "}
                        <span className="text-muted-foreground">{act.action}</span>{" "}
                        <span className="font-semibold text-primary">{act.target}</span>
                      </p>
                      <span className="text-xs text-muted-foreground mt-1">{act.time}</span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
}
