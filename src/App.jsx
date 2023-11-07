import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { SharedLayout } from "./components";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  NotFound,
  Home,
  Services,
  About,
  SignUp,
  LogIn,
  UserPage,
} from "./pages";
import { AuthProvider } from "./context/AuthProvider";

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
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </>
  );
};
export default App;
