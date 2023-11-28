import "./App.css";
import Home from "./components/Home";
import SignupUser from "./components/SignUpUser";
import SignInUser from "./components/SignInUser";
import SignUpAdmin from "./components/SignUpAdmin";
import SignInAdmin from "./components/SignInAdmin";
import ErrorPage from "./components/ErrorPage";
//import PostFeedback from './components/PostFeedback';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import FeedbackForm from "./components/FeedBackForm";
import Success from "./components/Success";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      errorElement: <ErrorPage />,
      element: <Home />},
        { path: "user/signup", element: <SignupUser /> },
        { path: "user/signin", element: <SignInUser /> },
        { path: "admin/signup", element: <SignUpAdmin /> },
        { path: "admin/signin", element: <SignInAdmin /> },
        {path: '/postfeedback', element: <FeedbackForm/>},
        {path: '/Success', element: <Success/>},
  ]);
  return <RouterProvider router={router} />;
}

export default App;
