import React, { Profiler } from "react";
import { useSelector } from "react-redux";


const ProductComponent = () => {
    const products = useSelector((state) => state.allProducts.products)
     const renderList = products.map((product) => {
       const {id,title,image, price, category} = products;
      return(
         <div className="four column wide" key={id}>
          <div className="ui link cards">
            <div className="card ">
               <div className="image">
               <img src={image} alt={title} />
               </div>
               <div style={{width: "100px", display:"flex", flexDirection: "row"}}>
               <div className="content" style={{width: "300px", height: "300px"}}>
                  <div className="header">{title}</div>
                    <div className="meta price">${price}</div>
                    <div className="meta">{category}</div> 
               </div>
                 
                 </div>
               
            </div>
          </div>
      //  </div>
      )
    });
    console.log(products);
   return(
       <>{renderList}</>
   )
}
export default ProductComponent;