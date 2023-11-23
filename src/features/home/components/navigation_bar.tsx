import { Button } from "@/components/ui/button";
const NavigationBar = () => {
  return (
    <div className="flex flex-row">
      <Button variant="link">01 State Update</Button>
      <Button variant="link">02 Increment Decrement</Button>
      <Button variant="link">03 Use Effect</Button>
    </div>
  );
};

export default NavigationBar;
