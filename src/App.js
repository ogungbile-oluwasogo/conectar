import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import AboutUs from "./pages/AboutUs";
import Categories from "./pages/Categories";
import Privacy from "./pages/Privacy";
import NotFound from "./components/NotFound";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route
        path="/"
        element={<RootLayout />}
      >
        <Route
          path="about"
          element={<AboutUs />}
        />
        <Route
          path="privacy"
          element={<Privacy />}
        />
        <Route
          path="categories"
          element={<Categories />}
        >
          <Route
            path="hairdressing"
            element=""
          />
        </Route>

        <Route
          path="*"
          element={<NotFound />}
        />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
