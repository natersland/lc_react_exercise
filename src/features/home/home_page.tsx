import NavigationBar from "./components/navigation_bar";
import Title from "./components/title";
import { Counter } from "../02_increment_decrement/increment_decrement";
import StateUpdate from "../01_state_update/state_update";
import UseEffectEx from "../03_use_effect/use_effect_ex";
import { useHomePageStore } from "./stores/home_page_store";
import { Page } from "@/common/const/type";

type Props = {};

function HomePage({}: Props) {
  const page = useHomePageStore((state) => state.page);

  const renderComponent = () => {
    switch (page) {
      case Page.STATE_UPDATE:
        return <StateUpdate />;
      case Page.INCREMENT_DECREMENT:
        return <Counter />;
      case Page.USE_EFFECT:
        return <UseEffectEx />;
      default:
        return <StateUpdate />;
    }
  };
  return (
    <div className="flex flex-col">
      <Title text="Akira Chenyavanij 🚀" underline={true} />
      <NavigationBar />
      <div className="flex flex-col p-10 items-center">{renderComponent()}</div>
    </div>
  );
}

export default HomePage;
