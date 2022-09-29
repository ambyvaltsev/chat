import { Main } from "../layout/main/Main";
import { MyPage } from "../pages";

export const routes = [
  { path: "/", element: <Main />, index: false, child: [{ element: <MyPage />, index: true }] },
];
