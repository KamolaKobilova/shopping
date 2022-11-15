import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Switch,
} from "react-router-dom";
import Header from "./containers/Headers";
import ProductListing from "./containers/ProductListing";
import ProductDetail from "./containers/ProductDetail";
import { useSelector } from "react-redux";
import ProductComponent from "./containers/ProductComponent";
import Register from "./containers/SignUp/Register";

function App() {
  const adminUser = {
    email: "kamola_8880@mail.ru",
    password: "12345",
  };
  const [user, setUser] = useState({ name: "", email: "" });
  const [error, setError] = useState("");

  const Login = (details) => {
    console.log(details);

    if (
      details.email == adminUser.email &&
      details.password == adminUser.password
    ) {
      console.log("Logged in");
      setUser({
        name: details.name,
        email: details.email,
      });
    } else {
      console.log("Details do not match");
    }
  };
  const Logout = () => {
    setUser({ name: "", email: "" });
  };

  const state = useSelector((state) => state);
  console.log(state);
  return (
    <div className="App">
      {user.email != "" ? (
        <div className="welcome">
          <Routes>
            <Route path="/" exact element={<ProductListing />} />
            <Route path="component" element={<ProductComponent />} />
            <Route path="/product/:productId" element={<ProductDetail />} />
            <Route>404 Not Found!</Route>
          </Routes>
          {/* <h2>Welcome <span>{user.name}</span></h2> */}
        </div>
      ) : (
        <Register Login={Login} error={error} />
      )}
      {/* <Routes>
        <Route path="/" exact element={<ProductListing />} />
        <Route path="component" element={<ProductComponent/>} />
        <Route path="/product/:productId" element={<ProductDetail/>} />
        <Route>404 Not Found!</Route>
      </Routes> */}
    </div>
  );
}

export default App;
