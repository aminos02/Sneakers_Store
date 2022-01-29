import React, { useState } from "react";
import "./product.css";
import { products } from "../data";
const Product = ({ index }) => {
  const [image, setImage] = useState(0);
  const [activeSize, setActiveSize] = useState(0);
  const activeSizeStyle = { background: "black", color: "white" };
  const desactiveSizeStyle = { background: "white", color: "black" };
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
        <button className="productButton">BUY NOW!</button>
      </div>
      <div class="payment">
            <h1 class="payTitle">Personal Information</h1>
            <label>Name and Surname</label>
            <input type="text" placeholder="John Doe" class="payInput"/>
            <label>Phone Number</label>
            <input type="text" placeholder="+1 234 5678" class="payInput"/>
            <label>Address</label>
            <input type="text" placeholder="Elton St 21 22-145" class="payInput"/>
            <h1 class="payTitle">Card Information</h1>
            <div class="cardIcons">
                <img src="images/visa.png" width="40" alt="" class="cardIcon"/>
                <img src="images/master.png" alt="" width="40" class="cardIcon"/>
            </div>
            <input type="password" class="payInput" placeholder="Card Number"/>
            <div class="cardInfo">
                <input type="text" placeholder="mm" class="payInput sm"/>
                <input type="text" placeholder="yyyy" class="payInput sm"/>
                <input type="text" placeholder="cvv" class="payInput sm"/>
            </div>
            <button class="payButton">Checkout!</button>
            <span class="close">X</span>
        
        </div>
    </div>
  );
};

export default Product;
