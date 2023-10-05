import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { SharedLayout } from "./components";
import { NotFound, Home, Services } from "./pages";

const routes = [
  {
    path: "/",
    element: <SharedLayout />,
    children: [
      {
        index: true,
        path: "/home",
        element: <Home />,
      },
      {
        path: "/Services",
        element: <Services />,
      },
      // {
      //   path: "/catalog/:shoeId",
      //   element: <ShoeDetails />,
      // },
      // {
      //   path: "/addproduct",
      //   element: <AddProduct />,
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
