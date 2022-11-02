import React, { Children } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Store_x } from "./components/UseContext"; //store use state
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home";
import Card_id from "./components/Card_id";
import Signin from "./components/Sign_in";
import { PrivateRoute } from "./components/auth_provide";
import Signup from "./components/Sign_up";
// here i use  base  roure  in app.js and  children all page in parinte app.js by route new version
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Store_x>
     
          <App />
      </Store_x>
    ),
    children: [
      { index: true, element:    <PrivateRoute><Home /></PrivateRoute> },
      { path: "photo/:id", element: <Card_id /> },
      { path: "sign_in", element: <Signin /> },
      { path: "Signup", element: <Signup /> },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <RouterProvider router={router} />
  // <React.StrictMode>   // i romve it becouse this ruern mulite render to use effect when start app by StrictMode return two call use effact here i dont need development i use it in production build
);

reportWebVitals();
