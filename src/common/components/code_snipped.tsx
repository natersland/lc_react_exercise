import { dracula } from "react-code-blocks";
import CopyBlock from "react-code-blocks/dist/components/CopyBlock";

type CodeSnippedProps = {
  code: string;
  language: "jsx" | "tsx" | "javascript" | "typescript";
  showLineNumbers?: boolean;
};

export const CodeSnipped = ({
  code,
  language,
  showLineNumbers,
}: CodeSnippedProps) => {
  return (
    <CopyBlock
      text={code}
      language={language}
      showLineNumbers={showLineNumbers ? true : false}
      theme={dracula}
    />
  );
};

export default CodeSnipped;
