import { createBrowserRouter } from "react-router-dom";

// PAGES
import List from "../views/list/list";
import Home from "../views/home/home";
import Calculator from "../views/calculator/calculator";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/calculator",
    element: <Calculator />,
  },
  {
    path: "/list",
    element: <List />,
  },
]);
