import React from "react"
import Store_context from "./UseContext";


import { Navigate} from "react-router-dom";
//PrivateRoute if user go on home else go in sign_in

export const PrivateRoute = ({ children }) => {
    const { currentUser } = React.useContext(Store_context);

  return currentUser ? children : <Navigate to="sign_in" />;
}