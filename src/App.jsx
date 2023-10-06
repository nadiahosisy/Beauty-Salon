import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { SharedLayout } from "./components";
import { NotFound, Home, Services, About } from "./pages";

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
      // {
      //   path: "/Contact",
      //   element: <Contact />,
      // },
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
