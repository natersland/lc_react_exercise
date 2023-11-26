import { Page } from "@/common/const/type";
import { create } from "zustand";

type Store = {
  page: Page;
  setPage: (value: Page) => void;
};

export const useHomePageStore = create<Store>((set) => ({
  page: Page.STATE_UPDATE,
  setPage: (value: Page) => set({ page: value }),
}));
