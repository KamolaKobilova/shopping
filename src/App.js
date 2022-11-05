import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Header from './containers/Header';
import ProductListing from './containers/ProductListing';
import ProductDetail from './containers/ProductDetail';
import { useSelector } from 'react-redux';
import ProductComponent from './containers/ProductComponent';


function App() {
  const state = useSelector((state) => state)
  console.log(state);
  return (
    <div>
   <ProductComponent/>
   <ProductListing/>
      {/* <Header/> 
       <Routes>  
        <Route path='/' exact component={ProductComponent}/>
        <Route path='/product/:productId' exact component={ProductDetail}/>
        <Route>404 Not Found</Route>
        </Routes> */}
    
     
      </div>
  );
}

export default App
