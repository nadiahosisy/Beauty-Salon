import {
  createBrowserRouter,
  BrowserRouter,
  RouterProvider,
  Routes,
  Route,
} from "react-router-dom";
import { SharedLayout, Subscribe } from "./components";
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
import { DarkModeProvider } from "./context/DarkModeProvider";

const App = () => {
  return (
    <AuthProvider>
      <DarkModeProvider>
        <BrowserRouter>
          <SharedLayout />
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/Services" exact element={<Services />} />
            <Route path="/About" exact element={<About />} />
            <Route path="/SignUp" exact element={<SignUp />} />
            <Route path="/LogIn" exact element={<LogIn />} />
            <Route path="/UserPage" exact element={<UserPage />} />
            <Route path="*" exact element={<NotFound />} />
          </Routes>
          <Subscribe />
        </BrowserRouter>
      </DarkModeProvider>
    </AuthProvider>
  );
};
export default App;
