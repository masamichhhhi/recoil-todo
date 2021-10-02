import { atom } from "recoil";

export type Item = {
  id: number;
  title: string;
  completed: boolean;
};

const initState: Item[] = [];

export const taskState = atom({
  key: "task",
  default: initState,
});
