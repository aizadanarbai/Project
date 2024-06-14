import { Route, Routes } from "react-router-dom";
import { HOME_ROUTES } from "./apps/Home/url";
import { CROSS_ROUTES } from "./apps/Cross/url";
import { PANT_ROUTES } from "./apps/Pants/url";
import { TSHIRT_ROUTES } from "./apps/Tshirt/url";
const MainRoutes = () => {
  return (
    <Routes>
      {[...HOME_ROUTES, ...CROSS_ROUTES, ...PANT_ROUTES, ...TSHIRT_ROUTES].map(
        (routeObject) => (
          <Route
            key={routeObject.path}
            path={routeObject.path}
            element={routeObject.element}
          />
        )
      )}
    </Routes>
  );
};

export default MainRoutes;
