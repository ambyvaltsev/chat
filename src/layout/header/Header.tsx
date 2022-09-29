import { AccountMenu } from "../../components/";
import s from "./Header.module.scss";

export const Header = () => {
  return (
    <div className={s.container}>
      <div className={s.content}>
        <div className={s.name}>CHAT</div>
        <AccountMenu/>
      </div>
    </div>
  );
};
