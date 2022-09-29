import s from "./Main.module.scss";
import { FC } from "react";
import { Menu } from "../../components/menu/Menu";
import { Outlet } from "react-router-dom";

export const Main: FC = () => {
  return (
    <div className={s.container}>
      <div className={s.content}>
        <Menu.Desktop />
        <Outlet/>
      </div>
    </div>
  );
};
