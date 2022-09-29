import { Route } from "react-router-dom";
import { ReactNode } from "react";

interface IRoute {
  path?: string;
  element: ReactNode;
  index: boolean;
  child?: IRoute[];
}

export const mapRoutes = (routes: IRoute[]) => {
  function mapFunc(routes: IRoute[]) {
    return routes.map((route: IRoute, index: number) => {
      return (
        <Route key={index} path={route.path || ""} element={route.element} index={route.index}>
          {route.child ? mapFunc(route.child) : null}
        </Route>
      );
    });
  }
  return mapFunc(routes);
};
