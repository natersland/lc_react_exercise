import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";

export function Counter() {
  const [count, setCount] = useState({ type: "even", count: 0 });

  const increment = () => {
    const newCount = count.count + 1;
    const newType = newCount % 2 === 0 ? "even" : "odd";
    setCount({ type: newType, count: newCount });
  };

  const decrement = () => {
    const newCount = count.count - 1;
    const newType = newCount % 2 === 0 ? "even" : "odd";
    setCount({ type: newType, count: newCount });
  };

  const linkToSourceCode = () => {
    const sourceCodeLink =
      "https://github.com/natersland/leceipt_exercise/blob/main/src/features/02_increment_decrement/increment_decrement.tsx";
    window.open(sourceCodeLink, "_blank");
  };

  return (
    <div className="w-4/5 p-4">
      <Card className="flex flex-col p-4">
        <CardContent>
          <h2>Count: {count.count}</h2>
          <p className="mb-4">Type: {count.type}</p>
          <div className="flex-row">
            <Button onClick={increment} className="mr-4">
              Increment
            </Button>
            <Button onClick={decrement} variant="destructive">
              Decrement
            </Button>
          </div>
        </CardContent>
      </Card>
      <Button variant="link" className="underline" onClick={linkToSourceCode}>
        source code
      </Button>
    </div>
  );
}
