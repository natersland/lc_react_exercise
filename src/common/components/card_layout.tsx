import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import React from "react";
import { linkToSourceCode } from "../helpers/link_to_source_code";
import Typography from "./typography";
import CodeSnippet from "./code_snippet";

type Props = {
  children: React.ReactNode;
  source_code_url: string;
  header_text?: string;
  code_snippet?: string;
};

const CardLayout = ({
  children,
  source_code_url,
  header_text,
  code_snippet,
}: Props) => {
  return (
    <div className="w-4/5 p-4">
      <Typography
        intent="h3"
        text={header_text ?? ""}
        align="center"
      ></Typography>
      <Card className="flex flex-col p-4 mt-2">
        <CardContent>
          {children}
          <div className="m-4"></div>
          {code_snippet ? (
            <CodeSnippet code={code_snippet} language="jsx"></CodeSnippet>
          ) : null}
        </CardContent>
      </Card>
      <Button
        variant="link"
        className="underline"
        onClick={() => linkToSourceCode(source_code_url)}
      >
        source code
      </Button>
    </div>
  );
};

export default CardLayout;
