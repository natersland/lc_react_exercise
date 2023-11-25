import NavigationBar from "./components/navigation_bar";
import Title from "./components/title";
import { Counter } from "../02_increment_decrement/increment_decrement";
import StateUpdate from "../01_state_update/state_update";

type Props = {};

function HomePage({}: Props) {
  return (
    <div className="flex flex-col">
      <Title text="Akira Chenyavanij 🚀" underline={true} />
      <NavigationBar />
      <div className="flex flex-col justify-center p-10">
        <StateUpdate />
        <Counter />
      </div>
    </div>
  );
}

export default HomePage;
