import Typography from "@/common/components/typography";

type Props = {
  text: string;
  underline?: boolean;
};

const Title = ({ text, underline }: Props) => {
  return (
    <Typography
      intent="h2"
      color="primary"
      align="left"
      text={text}
      style={underline ? "underline" : "none"}
    />
  );
};

export default Title;
