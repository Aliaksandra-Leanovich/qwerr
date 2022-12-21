import React from "react";
import { Route, Routes } from "react-router-dom";
import { Services } from "../pages/Services";
import { MainTemplate } from "../components/MainTemplate/MainTemplate";
import { Home } from "../pages/Home";
import { Product } from "../pages/Product";
import { Users } from "../pages/Users";
import { routes } from "../routes";
import { PrivateRoute } from "../utils";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path={routes.HOME} element={<MainTemplate />}>
        <Route index element={<Home />} />
      </Route>

      <Route element={<PrivateRoute />}>
        <Route path={routes.USERS} element={<Users />} />
      </Route>
    </Routes>
  );
};
