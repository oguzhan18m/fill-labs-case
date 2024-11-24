import { create } from "zustand";

export enum Status {
  ALL = "all",
  OPEN = "open",
  CLOSED = "closed",
}

interface SearchStore {
  searchText: string;
  status: Status;
  setSearchText: (text: string) => void;
  setStatus: (status: Status) => void;
  reset: () => void;
}

const initialState = {
  searchText: "",
  status: Status.ALL,
};

export const useSearchStore = create<SearchStore>((set) => ({
  ...initialState,
  setSearchText: (text: string) => set({ searchText: text }),
  setStatus: (status: Status) => set({ status }),
  reset: () => set(initialState),
}));
