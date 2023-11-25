import { TypographyVariants } from "./variants/typography_variants";

export type TypographyProps = {
  intent: "h1" | "h2" | "h3" | "p";
  color?: "primary" | "secondary" | "destructive" | "accent";
  align?: "left" | "center" | "right";
  style?: "none" | "underline";
  text: string;
};

export const Typography = ({
  intent,
  color,
  align,
  style,
  text,
}: TypographyProps) => {
  let content: JSX.Element;

  switch (intent) {
    case "h1":
      content = (
        <h1 className={TypographyVariants({ intent, color, align, style })}>
          {text}
        </h1>
      );
      break;
    case "h2":
      content = (
        <h2 className={TypographyVariants({ intent, color, align, style })}>
          {text}
        </h2>
      );
      break;
    case "h3":
      content = (
        <h3 className={TypographyVariants({ intent, color, align, style })}>
          {text}
        </h3>
      );
      break;
    case "p":
      content = (
        <p className={TypographyVariants({ intent, color, align, style })}>
          {text}
        </p>
      );
      break;
  }

  return content;
};

export default Typography;
