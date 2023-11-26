import { Button } from "@/components/ui/button";
import { useHomePageStore } from "../stores/home_page_store";
import { Page } from "@/common/const/type";

const NavigationBar = () => {
  const setPageIndex = useHomePageStore((state) => state.setPage);

  const page = useHomePageStore((state) => state.page);
  const selectedStyle = "underline text-primary";
  const unselectedStyle = "text-gray-500";

  return (
    <div className="flex flex-row">
      <Button
        variant="link"
        onClick={() => setPageIndex(Page.STATE_UPDATE)}
        className={page === Page.STATE_UPDATE ? selectedStyle : unselectedStyle}
      >
        01 State Update
      </Button>
      <Button
        variant="link"
        onClick={() => setPageIndex(Page.INCREMENT_DECREMENT)}
        className={
          page === Page.INCREMENT_DECREMENT ? selectedStyle : unselectedStyle
        }
      >
        02 Increment Decrement
      </Button>
      <Button
        variant="link"
        onClick={() => setPageIndex(Page.USE_EFFECT)}
        className={page === Page.USE_EFFECT ? selectedStyle : unselectedStyle}
      >
        03 Use Effect
      </Button>
    </div>
  );
};

export default NavigationBar;
