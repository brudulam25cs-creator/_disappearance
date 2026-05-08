import { useState } from "react";
import { languages } from "@/data/mock";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { MessageCircle, Send, Mic, Volume2 } from "lucide-react";

export default function Chat() {
  const [lang, setLang] = useState<string | null>(null);
  const [mode, setMode] = useState("practice");
  const [voiceOut, setVoiceOut] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<{role: 'ai'|'user', text: string}[]>([
    { role: 'ai', text: 'Hello! I am your AI language partner. How can I help you today?' }
  ]);

  const handleSend = () => {
    if (!input.trim()) return;
    setMessages(prev => [...prev, { role: 'user', text: input }]);
    setInput("");
    
    // Mock response
    setTimeout(() => {
      setMessages(prev => [...prev, { role: 'ai', text: `That's great! Let's continue practicing ${lang}.` }]);
    }, 1000);
  };

  return (
    <div className="space-y-6 h-[calc(100vh-8rem)] flex flex-col">
      <div>
        <h1 className="text-3xl font-bold">AI Conversation Partner</h1>
        <p className="text-muted-foreground mt-2">Practice any regional language with an AI tutor — type or speak.</p>
      </div>

      <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between bg-card p-4 rounded-lg border shrink-0">
        <Select value={lang || ""} onValueChange={setLang}>
          <SelectTrigger className="w-[200px]">
            <SelectValue placeholder="Select Language" />
          </SelectTrigger>
          <SelectContent>
            {languages.map(l => (
              <SelectItem key={l.english} value={l.english}>{l.english}</SelectItem>
            ))}
          </SelectContent>
        </Select>

        <div className="flex items-center space-x-2">
          <Switch id="voice-out" checked={voiceOut} onCheckedChange={setVoiceOut} />
          <Label htmlFor="voice-out" className="flex items-center gap-2 cursor-pointer">
            <Volume2 className="w-4 h-4" /> Voice Out
          </Label>
        </div>
      </div>

      {!lang ? (
        <Card className="flex-1 flex flex-col items-center justify-center border-dashed">
          <CardContent className="flex flex-col items-center text-center p-12">
            <div className="w-16 h-16 bg-primary/10 text-primary rounded-full flex items-center justify-center mb-6">
              <MessageCircle className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold mb-2">Choose a language to begin</h3>
            <p className="text-muted-foreground max-w-md">
              Select a language from the dropdown above to start your conversation, practice speaking, or learn about culture.
            </p>
          </CardContent>
        </Card>
      ) : (
        <Card className="flex-1 flex flex-col overflow-hidden shadow-md border-border/50">
          <div className="border-b p-2 shrink-0 bg-accent/20">
            <Tabs value={mode} onValueChange={setMode} className="w-full">
              <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 h-auto">
                <TabsTrigger value="practice" className="py-2">Practice Speaking</TabsTrigger>
                <TabsTrigger value="translate" className="py-2">Translate</TabsTrigger>
                <TabsTrigger value="culture" className="py-2">Explain Culture</TabsTrigger>
                <TabsTrigger value="story" className="py-2">Storytelling</TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
          
          <div className="flex-1 overflow-y-auto p-4 md:p-6 space-y-6 flex flex-col">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] rounded-2xl px-5 py-3 ${
                  msg.role === 'user' 
                    ? 'bg-primary text-primary-foreground rounded-tr-sm' 
                    : 'bg-muted rounded-tl-sm'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
          </div>

          <div className="p-4 bg-background border-t mt-auto">
            <div className="flex items-center gap-2">
              <Button variant="outline" size="icon" className="shrink-0 h-12 w-12 rounded-full">
                <Mic className="w-5 h-5 text-muted-foreground" />
              </Button>
              <Input 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder={`Message AI in ${lang}...`} 
                className="flex-1 h-12 rounded-full px-6"
              />
              <Button onClick={handleSend} size="icon" className="shrink-0 h-12 w-12 rounded-full">
                <Send className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </Card>
      )}
    </div>
  );
}
