import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { activity } from "@/data/mock";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from "recharts";
import { Globe2, PenTool, Users, Activity } from "lucide-react";

const contentData = [
  { name: "Welsh", pieces: 42 },
  { name: "Quechua", pieces: 38 },
  { name: "Yoruba", pieces: 25 },
  { name: "Hawaiian", pieces: 18 },
  { name: "Basque", pieces: 15 },
];

const statusData = [
  { name: "Critical", count: 2, fill: "#ef4444" },
  { name: "Endangered", count: 2, fill: "#f97316" },
  { name: "Vulnerable", count: 5, fill: "#eab308" },
  { name: "Safe", count: 4, fill: "#22c55e" },
];

export default function Stats() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Platform Statistics</h1>
        <p className="text-muted-foreground mt-2">Tracking the impact of digital language preservation.</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Card className="border-none shadow-sm">
          <CardContent className="p-6 flex flex-col items-center text-center gap-2">
            <div className="p-3 bg-primary/10 rounded-full text-primary">
              <Globe2 className="w-5 h-5" />
            </div>
            <h3 className="text-3xl font-bold">13</h3>
            <p className="text-sm text-muted-foreground">Languages</p>
          </CardContent>
        </Card>
        
        <Card className="border-none shadow-sm">
          <CardContent className="p-6 flex flex-col items-center text-center gap-2">
            <div className="p-3 bg-primary/10 rounded-full text-primary">
              <PenTool className="w-5 h-5" />
            </div>
            <h3 className="text-3xl font-bold">11</h3>
            <p className="text-sm text-muted-foreground">Pieces Created</p>
          </CardContent>
        </Card>

        <Card className="border-none shadow-sm">
          <CardContent className="p-6 flex flex-col items-center text-center gap-2">
            <div className="p-3 bg-primary/10 rounded-full text-primary">
              <Users className="w-5 h-5" />
            </div>
            <h3 className="text-3xl font-bold">6</h3>
            <p className="text-sm text-muted-foreground">Learners</p>
          </CardContent>
        </Card>

        <Card className="border-none shadow-sm">
          <CardContent className="p-6 flex flex-col items-center text-center gap-2">
            <div className="p-3 bg-primary/10 rounded-full text-primary">
              <Activity className="w-5 h-5" />
            </div>
            <h3 className="text-3xl font-bold">11</h3>
            <p className="text-sm text-muted-foreground">Active Languages</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="border-border/50">
          <CardHeader>
            <CardTitle>Top Languages by Content</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-80 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={contentData} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="hsl(var(--border))" />
                  <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: 'hsl(var(--muted-foreground))'}} />
                  <YAxis axisLine={false} tickLine={false} tick={{fill: 'hsl(var(--muted-foreground))'}} />
                  <Tooltip 
                    cursor={{fill: 'hsl(var(--muted))'}}
                    contentStyle={{borderRadius: '8px', border: '1px solid hsl(var(--border))'}}
                  />
                  <Bar dataKey="pieces" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <Card className="border-border/50">
          <CardHeader>
            <CardTitle>Language Status Distribution</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-80 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={statusData} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="hsl(var(--border))" />
                  <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: 'hsl(var(--muted-foreground))'}} />
                  <YAxis axisLine={false} tickLine={false} tick={{fill: 'hsl(var(--muted-foreground))'}} />
                  <Tooltip 
                    cursor={{fill: 'hsl(var(--muted))'}}
                    contentStyle={{borderRadius: '8px', border: '1px solid hsl(var(--border))'}}
                  />
                  <Bar dataKey="count" radius={[4, 4, 0, 0]}>
                    {statusData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.fill} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="border-border/50">
        <CardHeader>
          <CardTitle>Recent Community Activity</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {activity.map((act) => (
              <div key={act.id} className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-lg">
                  {act.user[0]}
                </div>
                <div className="flex-1">
                  <p className="text-sm md:text-base">
                    <span className="font-semibold">{act.user}</span> {act.action} <span className="font-semibold text-primary">{act.target}</span>
                  </p>
                </div>
                <div className="text-sm text-muted-foreground whitespace-nowrap">
                  {act.time}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
