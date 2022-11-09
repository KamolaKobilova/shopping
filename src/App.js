import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Switch,
} from "react-router-dom";
import Header from "./containers/Header";
import ProductListing from "./containers/ProductListing";
import ProductDetail from "./containers/ProductDetail";
import { useSelector } from "react-redux";
import ProductComponent from "./containers/ProductComponent";
import SignUp from './containers/SignUp/SignUp'

function App() {
  const state = useSelector((state) => state);
  console.log(state);
  return (
    <div className="App">
      <SignUp/>
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
