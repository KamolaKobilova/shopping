 import React from "react";
 import axios from "axios";
 import { useSelector } from "react-redux";
import ProductComponent from "./ProductDetail";

 const ProductListing = () => {
    const products = useSelector((state) => state);
     console.log(products);

    
    return(
        <div className="ui grid container">
           <ProductComponent/>
        </div>
    )
 }
 export default ProductListing;