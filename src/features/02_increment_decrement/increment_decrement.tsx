import CardLayout from "@/common/components/card_layout";
import { CodeBlockSnippet } from "@/common/utils/code_block";
import { Button } from "@/components/ui/button";
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

  return (
    <CardLayout
      children={
        <>
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
        </>
      }
      header_text="Increment/Decrement"
      code_snippet={CodeBlockSnippet.increment_decrement}
      source_code_url="https://github.com/natersland/lc_react_exercise/blob/main/src/features/02_increment_decrement/increment_decrement.tsx"
    ></CardLayout>
  );
}
