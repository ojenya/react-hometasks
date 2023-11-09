import { ReactElement } from "react";
import { DicePage } from "./pages/Dice/DicePage";
import { HomeWork2 } from "./pages/HomeWork2/HomeWork2";

interface IRoute {
  title: string;
  description?: string;
  element: ReactElement;
}

export const routesConfig: Record<string, IRoute> = {
  ["/dice"]: {
    title: "Домашнее задание №1",
    element: <DicePage />,
  },
  ["/homework2"]: {
    title: "Домашнее задание №2",
    element: <HomeWork2 />,
  },
};

export const routes = Object.keys(routesConfig);
