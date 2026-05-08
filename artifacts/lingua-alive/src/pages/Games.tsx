import { useState, useEffect } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { languages } from "@/data/mock";

const MEMORY_CARDS = [
  { id: 1, pairId: 1, text: "diolch", type: "native" },
  { id: 2, pairId: 1, text: "thank you", type: "english" },
  { id: 3, pairId: 2, text: "bore", type: "native" },
  { id: 4, pairId: 2, text: "morning", type: "english" },
  { id: 5, pairId: 3, text: "croeso", type: "native" },
  { id: 6, pairId: 3, text: "welcome", type: "english" },
  { id: 7, pairId: 4, text: "cariad", type: "native" },
  { id: 8, pairId: 4, text: "love", type: "english" },
  { id: 9, pairId: 5, text: "hwyl", type: "native" },
  { id: 10, pairId: 5, text: "fun/bye", type: "english" },
  { id: 11, pairId: 6, text: "mawr", type: "native" },
  { id: 12, pairId: 6, text: "big", type: "english" },
  { id: 13, pairId: 7, text: "fach", type: "native" },
  { id: 14, pairId: 7, text: "small", type: "english" },
  { id: 15, pairId: 8, text: "nef", type: "native" },
  { id: 16, pairId: 8, text: "heaven", type: "english" },
];

function shuffleArray(array: any[]) {
  const newArr = [...array];
  for (let i = newArr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
  }
  return newArr;
}

export default function Games() {
  const [lang, setLang] = useState("Welsh");
  const [cards, setCards] = useState(() => shuffleArray(MEMORY_CARDS));
  const [flipped, setFlipped] = useState<number[]>([]);
  const [matched, setMatched] = useState<number[]>([]);
  const [moves, setMoves] = useState(0);

  const resetGame = () => {
    setCards(shuffleArray(MEMORY_CARDS));
    setFlipped([]);
    setMatched([]);
    setMoves(0);
  };

  useEffect(() => {
    if (flipped.length === 2) {
      const [first, second] = flipped;
      const card1 = cards.find(c => c.id === first);
      const card2 = cards.find(c => c.id === second);

      if (card1 && card2 && card1.pairId === card2.pairId) {
        setMatched(prev => [...prev, first, second]);
        setFlipped([]);
      } else {
        const timer = setTimeout(() => {
          setFlipped([]);
        }, 1000);
        return () => clearTimeout(timer);
      }
    }
  }, [flipped, cards]);

  const handleCardClick = (id: number) => {
    if (flipped.length === 2 || flipped.includes(id) || matched.includes(id)) return;
    
    const newFlipped = [...flipped, id];
    setFlipped(newFlipped);
    
    if (newFlipped.length === 2) {
      setMoves(m => m + 1);
    }
  };

  return (
    <div className="space-y-8 max-w-4xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold">Language Games</h1>
          <p className="text-muted-foreground mt-2">Play to learn — vocabulary through fun.</p>
        </div>
        <Select value={lang} onValueChange={setLang}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select language" />
          </SelectTrigger>
          <SelectContent>
            {languages.map(l => (
              <SelectItem key={l.english} value={l.english}>{l.english}</SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <Tabs defaultValue="memory" className="w-full">
        <TabsList className="mb-6 grid grid-cols-3">
          <TabsTrigger value="memory">Memory Match</TabsTrigger>
          <TabsTrigger value="speed">Speed Quiz</TabsTrigger>
          <TabsTrigger value="word">Word Match</TabsTrigger>
        </TabsList>

        <TabsContent value="memory" className="space-y-6">
          <div className="flex justify-between items-center bg-card p-4 rounded-lg border">
            <div className="text-lg font-bold">Moves: <span className="text-primary">{moves}</span></div>
            <div className="text-sm text-muted-foreground">
              Matched: {matched.length / 2} / {MEMORY_CARDS.length / 2}
            </div>
            <Button onClick={resetGame} variant="outline">Reset Game</Button>
          </div>

          <div className="grid grid-cols-4 gap-4">
            {cards.map((card) => {
              const isFlipped = flipped.includes(card.id) || matched.includes(card.id);
              const isMatched = matched.includes(card.id);

              return (
                <div 
                  key={card.id}
                  onClick={() => handleCardClick(card.id)}
                  className={`
                    aspect-square rounded-xl flex items-center justify-center text-center p-2 cursor-pointer transition-all duration-300 text-lg font-bold shadow-sm
                    ${isFlipped 
                      ? isMatched 
                        ? 'bg-green-100 text-green-800 border-2 border-green-200 shadow-inner scale-95' 
                        : 'bg-primary text-primary-foreground shadow-md' 
                      : 'bg-card border-2 border-border hover:border-primary/50 hover:bg-accent'}
                  `}
                >
                  {isFlipped ? card.text : "?"}
                </div>
              );
            })}
          </div>
          
          {matched.length === MEMORY_CARDS.length && (
            <div className="bg-green-50 border border-green-200 text-green-800 p-6 rounded-lg text-center mt-8 animate-in fade-in zoom-in">
              <h3 className="text-2xl font-bold mb-2">Da iawn! (Well done!)</h3>
              <p>You completed the match in {moves} moves.</p>
              <Button onClick={resetGame} className="mt-4 bg-green-600 hover:bg-green-700 text-white">Play Again</Button>
            </div>
          )}
        </TabsContent>

        <TabsContent value="speed">
          <Card>
            <CardContent className="flex flex-col items-center justify-center py-24 text-center">
              <h3 className="text-2xl font-bold mb-2 text-muted-foreground">Coming Soon</h3>
              <p className="text-muted-foreground max-w-md">
                Test your reflexes by quickly identifying translations before time runs out.
              </p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="word">
          <Card>
            <CardContent className="flex flex-col items-center justify-center py-24 text-center">
              <h3 className="text-2xl font-bold mb-2 text-muted-foreground">Coming Soon</h3>
              <p className="text-muted-foreground max-w-md">
                Connect native words to their meanings by drawing lines between them.
              </p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
