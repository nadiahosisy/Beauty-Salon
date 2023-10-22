import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { SharedLayout } from "./components";
import {
  NotFound,
  Home,
  Services,
  About,
  SignUp,
  LogIn,
  UserPage,
} from "./pages";

const routes = [
  {
    path: "/",
    element: <SharedLayout />,
    children: [
      {
        index: true,
        path: "/Home",
        element: <Home />,
      },
      {
        path: "/Services",
        element: <Services />,
      },

      {
        path: "/About",
        element: <About />,
      },
      {
        path: "/SignUp",
        element: <SignUp />,
      },
      {
        path: "/LogIn",
        element: <LogIn />,
      },
      {
        path: "/UserPage",
        element: <UserPage />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
];
const App = () => {
  const router = createBrowserRouter(routes);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};
export default App;
