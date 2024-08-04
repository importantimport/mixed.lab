// Generouted, changes to this file will be overriden
import { Fragment } from "react";
import {
  Outlet,
  RouterProvider,
  createLazyRoute,
  createRootRoute,
  createRoute,
  createRouter,
} from "@tanstack/react-router";

import App from "./pages/_app";

const root = createRootRoute({ component: App || Outlet });
const _404 = createRoute({
  getParentRoute: () => root,
  path: "*",
  component: Fragment,
});
const demo = createRoute({ getParentRoute: () => root, path: "demo" }).lazy(
  () =>
    import("./pages/demo/_layout").then((m) =>
      createLazyRoute("/demo")({ component: m.default }),
    ),
);
const demoxr = createRoute({ getParentRoute: () => demo, path: "xr" }).lazy(
  () =>
    import("./pages/demo/xr").then((m) =>
      createLazyRoute("/demo/xr")({ component: m.default }),
    ),
);
const demouikit = createRoute({
  getParentRoute: () => demo,
  path: "uikit",
}).lazy(() =>
  import("./pages/demo/uikit").then((m) =>
    createLazyRoute("/demo/uikit")({ component: m.default }),
  ),
);
const demoindex = createRoute({ getParentRoute: () => demo, path: "/" }).lazy(
  () =>
    import("./pages/demo/index").then((m) =>
      createLazyRoute("/demo")({ component: m.default }),
    ),
);
const demofiber = createRoute({
  getParentRoute: () => demo,
  path: "fiber",
}).lazy(() =>
  import("./pages/demo/fiber").then((m) =>
    createLazyRoute("/demo/fiber")({ component: m.default }),
  ),
);
const chamber = createRoute({
  getParentRoute: () => root,
  path: "chamber",
}).lazy(() =>
  import("./pages/chamber/_layout").then((m) =>
    createLazyRoute("/chamber")({ component: m.default }),
  ),
);
const chambersettings = createRoute({
  getParentRoute: () => chamber,
  path: "settings",
}).lazy(() =>
  import("./pages/chamber/settings").then((m) =>
    createLazyRoute("/chamber/settings")({ component: m.default }),
  ),
);
const chambermmd = createRoute({
  getParentRoute: () => chamber,
  path: "mmd",
}).lazy(() =>
  import("./pages/chamber/mmd").then((m) =>
    createLazyRoute("/chamber/mmd")({ component: m.default }),
  ),
);
const chamberindex = createRoute({
  getParentRoute: () => chamber,
  path: "/",
}).lazy(() =>
  import("./pages/chamber/index").then((m) =>
    createLazyRoute("/chamber")({ component: m.default }),
  ),
);
const index = createRoute({ getParentRoute: () => root, path: "/" }).lazy(() =>
  import("./pages/index").then((m) =>
    createLazyRoute("/")({ component: m.default }),
  ),
);

const config = root.addChildren([
  demo.addChildren([demoxr, demouikit, demoindex, demofiber]),
  chamber.addChildren([chambersettings, chambermmd, chamberindex]),
  index,
  _404,
]);

const router = createRouter({ routeTree: config });
export const routes = config;
export const Routes = () => <RouterProvider router={router} />;

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}
