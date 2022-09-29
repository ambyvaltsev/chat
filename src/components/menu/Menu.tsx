import { FC } from "react";
import { Desktop } from "./components";
import s from "./Menu.module.scss";


interface IMenuPropsExtension {
  Desktop: typeof Desktop
}

interface IMenuProps {

}

export const Menu:FC<IMenuProps> & IMenuPropsExtension = () => {
  return <></>;
};


Menu.Desktop = Desktop