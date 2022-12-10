import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Container from "../Pages/Container";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Container />,
      },
    ],
  },
]);
