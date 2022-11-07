import React from 'react';
import { BrowserRouter as Router,Route, Routes, Switch} from 'react-router-dom';
import Header from './containers/Header';
import ProductListing from './containers/ProductListing';
import ProductDetail from './containers/ProductDetail';
import { useSelector } from 'react-redux';
import ProductComponent from './containers/ProductComponent';


function App() {
  const state = useSelector((state) => state)
  console.log(state);
  return (
    <div className="App">
      <Routes>
          <Route path="/" exact component={ProductListing} />
          <Route path="component"component={ProductComponent} />
          <Route path="/product/:productId" component={ProductDetail} />
          <Route>404 Not Found!</Route>
      </Routes>
    </div>
  );
}

export default App
