import s from "./Picture.module.scss";
import { FC } from "react";

interface IPictureProps {
  src: string;
  alt: string;
  style?: Record<string, string>;
}

export const Picture: FC<IPictureProps> = ({ src, alt, style }) => {
  return (
    <div className={s.container} style={style}>
      <img src={src} alt={alt} />
    </div>
  );
};
