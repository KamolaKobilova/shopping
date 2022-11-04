import React from "react";
import { useSelector } from "react-redux";

const ProductComponent = () => {
    const products = useSelector((state) => state.allProducts.products)
    const {id, title, email} = products[0];
   return(
       <div className="four column wide">
          <div className="ui link cards">
            <div className="card ">
               <div className="image ">
                 <div className="content ">
                    <div className="header" style={{height: 300}}>{title}</div>
                 </div>
               </div>
            </div>
          </div>
       </div>
   )
}
export default ProductComponent;