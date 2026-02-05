import { useEffect, useState } from "react";
import { Button } from "./ui/Button";

interface ChatPromptsProps {
  onPromptClick: (prompt: string) => void;
}

const allPrompts = [
  "Tell me about James's experience",
  "What projects has James built?",
  "What technologies does James use?",
  "What is James's current role?",
  "Tell me about James's skills",
  "Where has James worked or volunteered?",

  // Portfolio & career
  "What is James currently working on?",
  "What kind of engineer is James?",
  "What problems does James like solving?",
  "What areas is James strongest in?",
  "What is James focusing on learning now?",

  // Projects & certificates
  "Which project best represents James's work?",
  "What was the motivation behind James's projects?",
  "What technical challenges has James overcome?",
  "What tools or frameworks does James frequently use?",
  "What has James built outside of school?",

  // Engineering approach
  "How does James approach system design?",
  "How does James balance speed vs correctness?",
  "What engineering principles does James follow?",
  "What tradeoffs does James often discuss?",

  // Practical / conversational
  "What can you help me with?",
  "Where should I start if I want to explore James's work?",
  "What should I read to understand James's thinking?",
  "Is James more backend or frontend focused?",
  "How can I contact James?",
  "What certificates does James have?",
  "What are James's top skills?",
  "What programming languages does James know?",
  "What is James's experience with React, C++, or Arduino?"
];

function getRandomPrompts(prompts: string[], count: number): string[] {
  const shuffled = [...prompts].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}

export default function ChatPrompts({ onPromptClick }: ChatPromptsProps) {
  const [randomPrompts, setRandomPrompts] = useState<string[]>([]);

  useEffect(() => {
    setRandomPrompts(getRandomPrompts(allPrompts, 3));
  }, []);

  return (
    <div className="mt-2 flex w-full max-w-[200px] flex-col gap-1.5 sm:mt-3 sm:max-w-[250px] sm:gap-2">
      <p className="text-center text-xs text-muted-foreground">Try asking:</p>
      <div className="flex flex-col gap-1 sm:gap-1.5">
        {randomPrompts.map((prompt) => (
          <Button
            key={prompt}
            variant="outline"
            size="sm"
            onClick={() => onPromptClick(prompt)}
            className="h-auto min-h-[32px] w-full justify-start whitespace-normal break-words px-2 py-1.5 text-left text-xs leading-normal sm:min-h-[36px] sm:px-3 sm:py-2"
          >
            <span className="line-clamp-2">{prompt}</span>
          </Button>
        ))}
      </div>
    </div>
  );
}
