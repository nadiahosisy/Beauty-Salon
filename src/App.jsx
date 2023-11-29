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
            <Route path="/services" exact element={<Services />} />
            <Route path="/about" exact element={<About />} />
            <Route path="/signup" exact element={<SignUp />} />
            <Route path="/login" exact element={<LogIn />} />
            <Route path="/user-page" exact element={<UserPage />} />
            <Route path="*" exact element={<NotFound />} />
          </Routes>
          <Subscribe />
        </BrowserRouter>
      </DarkModeProvider>
    </AuthProvider>
  );
};
export default App;
