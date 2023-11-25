import { CopyBlock, dracula } from "react-code-blocks";

type CodeSnippedProps = {
  code: string;
  language: "jsx" | "tsx" | "javascript" | "typescript";
};

export const CodeSnippet = ({ code, language }: CodeSnippedProps) => {
  return (
    <CopyBlock
      text={code}
      language={language}
      showLineNumbers={true}
      theme={dracula}
      wrapLongLines={true}
    />
  );
};

export default CodeSnippet;
