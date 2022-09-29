import { Routes } from "react-router-dom";
import { mapRoutes } from "../../utils";
import { routes } from "../../router";

export const AppRoutes = () => {
  return <Routes>{mapRoutes(routes)}</Routes>;
};
