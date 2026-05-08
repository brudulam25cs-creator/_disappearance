import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

export default function Puzzles() {
  const [inputs, setInputs] = useState<string[]>(Array(6).fill(""));
  const [feedback, setFeedback] = useState<string | null>(null);
  
  const ANSWER = "DIOLCH";
  const SCRAMBLED = "LIODCH";

  const handleInput = (index: number, value: string) => {
    const newInputs = [...inputs];
    newInputs[index] = value.toUpperCase().slice(0, 1);
    setInputs(newInputs);
    setFeedback(null);
  };

  const checkAnswer = () => {
    const guess = inputs.join("");
    if (guess === ANSWER) {
      setFeedback("correct");
    } else {
      setFeedback("incorrect");
    }
  };

  const revealAnswer = () => {
    setInputs(ANSWER.split(""));
    setFeedback("correct");
  };

  return (
    <div className="space-y-8 max-w-3xl mx-auto">
      <div>
        <h1 className="text-3xl font-bold">Language Puzzles</h1>
        <p className="text-muted-foreground mt-2">Challenge your mind while learning new vocabulary.</p>
      </div>

      <Tabs defaultValue="scramble" className="w-full">
        <TabsList className="mb-6">
          <TabsTrigger value="scramble">Word Scramble</TabsTrigger>
          <TabsTrigger value="story">Fill the Story</TabsTrigger>
          <TabsTrigger value="search">Word Search</TabsTrigger>
        </TabsList>

        <TabsContent value="scramble" className="space-y-6">
          <Card>
            <CardContent className="p-8 flex flex-col items-center">
              <Badge className="mb-6">Welsh</Badge>
              <p className="text-lg text-muted-foreground mb-4">Clue: A polite Welsh thank-you</p>
              
              <div className="text-4xl font-mono font-bold tracking-[0.5em] text-primary/40 mb-12 select-none">
                {SCRAMBLED}
              </div>

              <div className="flex gap-2 sm:gap-4 mb-8">
                {inputs.map((char, i) => (
                  <Input
                    key={i}
                    value={char}
                    onChange={(e) => handleInput(i, e.target.value)}
                    className={`w-12 h-14 sm:w-16 sm:h-16 text-center text-2xl font-bold ${
                      feedback === "correct" ? "border-green-500 bg-green-50 text-green-700" :
                      feedback === "incorrect" ? "border-red-500 bg-red-50 text-red-700" : ""
                    }`}
                    maxLength={1}
                  />
                ))}
              </div>

              {feedback === "correct" && (
                <div className="text-green-600 font-bold mb-6 text-lg">Correct! Diolch means Thank You.</div>
              )}
              {feedback === "incorrect" && (
                <div className="text-red-600 font-bold mb-6">Not quite right, try again!</div>
              )}

              <div className="flex gap-4">
                <Button onClick={checkAnswer} size="lg" className="w-32">Check</Button>
                <Button onClick={revealAnswer} variant="outline" size="lg" className="w-32">Reveal</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="story">
          <Card>
            <CardContent className="flex flex-col items-center justify-center py-24 text-center">
              <h3 className="text-2xl font-bold mb-2 text-muted-foreground">Coming Soon</h3>
              <p className="text-muted-foreground">Complete short stories by filling in the missing regional words.</p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="search">
          <Card>
            <CardContent className="flex flex-col items-center justify-center py-24 text-center">
              <h3 className="text-2xl font-bold mb-2 text-muted-foreground">Coming Soon</h3>
              <p className="text-muted-foreground">Find hidden words in various scripts and languages.</p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
