import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Header from './containers/Header';
import ProductListing from './containers/ProductListing';
import ProductDetail from './containers/ProductDetail';


function App() {
  return (
    <div>

      <Header/> 
       <Routes>  
        <Route path='/' exact component={ProductListing}/>
        <Route path='/product/:productId' exact component={ProductDetail}/>
        <Route>404 Not Found</Route>
       </Routes>
    
     
      </div>
  );
}

export default App
