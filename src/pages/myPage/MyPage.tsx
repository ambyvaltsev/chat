import { Picture } from "../../components";
import s from "./MyPage.module.scss";
import defaultPicture from "../../assets/img/defaultPicture.png";

export const MyPage = () => {
  return (
    <main className={s.container}>
      <section className={s.avatar}>
        <Picture
          src={defaultPicture }
          alt="Avatar"
          style={{ filter: "grayscale(100%) brightness(0.70) invert(1) contrast(1.4)"! }}
        />
      </section>
      <section className={s.profile}>
        <div className={s.header}>
          <h1 className={s.name}>Name</h1>
          <span className={s.status}>Status</span>
          <span className={s.network}>Online</span>
        </div>
      </section>
    </main>
  );
};
