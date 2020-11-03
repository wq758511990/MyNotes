import React from "react";
import { Redirect } from "react-router-dom";

import Home from "../application/Home/index";
import Recommend from "../application/Recommend/index";
import Singers from "../application/Singers/index";
import Rank from "../application/Rank/index";

const routes = [
  {
    path: "/",
    component: Home,
    routes: [
      {
        path: "/",
        exact: true,
        render: () => <Redirect to={"/recommend"} />,
      },
      {
        path: "/recommend",
        component: Recommend,
      },
      {
        path: "/singers",
        component: Singers,
      },
      {
        path: "/rank",
        component: Rank,
      },
    ],
  },
];

export default routes;
