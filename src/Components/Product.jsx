import React, { useState } from "react";
import "./product.css";
import { products } from "../data";
const Product = ({ index }) => {
  const [image, setImage] = useState(0);
  const [activeSize, setActiveSize] = useState(0);
  const activeSizeStyle = { background: "black", color: "white" };
  const desactiveSizeStyle = { background: "white", color: "black" };
  const [activePayment,setActivePayment]=useState(false);
  return (
    <div className="product" id="product">
      <img
        src={`images/${products[index].colors[image].img}`}
        alt=""
        className="productImg"
      />
      <div className="productDetails">
        <h1 className="productTitle">{products[index].title} </h1>
        <h2 className="productPrice">${products[index].price}</h2>
        <p className="productDesc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo,
          accusamus!
        </p>
        <div className="colors">
          {products[index].colors.map((color, i) => (
            <div
              key={i}
              className="color"
              onClick={() => setImage(i)}
              style={{ background: color.code }}
            ></div>
          ))}
        </div>
        <div className="sizes">
          <div
            className="size"
            style={activeSize === 0 ? activeSizeStyle : desactiveSizeStyle}
            onClick={() => setActiveSize(0)}
          >
            42
          </div>
          <div
            className="size"
            style={activeSize === 1 ? activeSizeStyle : desactiveSizeStyle}
            onClick={() => setActiveSize(1)}
          >
            43
          </div>
          <div
            className="size"
            style={activeSize === 2 ? activeSizeStyle : desactiveSizeStyle}
            onClick={() => setActiveSize(2)}
          >
            44
          </div>
        </div>
        <button className="productButton" onClick={()=>{setActivePayment(true)}}>BUY NOW!</button>
      </div>
      {activePayment && (<div className="payment" >
            <h1 className="payTitle">Personal Information</h1>
            <label>Name and Surname</label>
            <input type="text" placeholder="John Doe" className="payInput"/>
            <label>Phone Number</label>
            <input type="text" placeholder="+1 234 5678" className="payInput"/>
            <label>Address</label>
            <input type="text" placeholder="Elton St 21 22-145" className="payInput"/>
            <h1 className="payTitle">Card Information</h1>
            <div className="cardIcons">
                <img src="images/visa.png" width="40" alt="" className="cardIcon"/>
                <img src="images/master.png" alt="" width="40" className="cardIcon"/>
            </div>
            <input type="password" className="payInput" placeholder="Card Number"/>
            <div className="cardInfo">
                <input type="text" placeholder="mm" className="payInput sm"/>
                <input type="text" placeholder="yyyy" className="payInput sm"/>
                <input type="text" placeholder="cvv" className="payInput sm"/>
            </div>
            <button className="payButton" >Checkout!</button>
            <span className="close" onClick={()=>{setActivePayment(false)}}>X</span>
        
        </div>)}
    </div>
  );
};

export default Product;
