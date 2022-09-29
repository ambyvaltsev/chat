import s from "./Badge.module.scss";
import { Picture } from "../../../../components";
import defaultPictute from "../../../../assets/img/defaultPicture.png";
import { AiOutlineDown } from "react-icons/ai";
import { FC } from "react";

interface IBadgeProps {
  onClick: () => void
}

export const Badge: FC<IBadgeProps> = ({onClick}) => {
  return (
    <div className={s.container} onClick={onClick}>
      <div className={s.avatar}>
        <div className={s.avatar__wrapper}>
          <Picture src={defaultPictute} alt="Avatar" />
        </div>
      </div>
      <div className={s.btn}>
        <AiOutlineDown />
      </div>
    </div>
  );
};
