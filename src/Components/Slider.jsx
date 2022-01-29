// import parse from "html-react-parser";
import React from "react";
import styled from "styled-components";
import { products } from "../data";

const Slider = ({index}) => {
  return (  
    <SliDer>
      <SliderWrapper style={{"transform":`translateX(-${index}00vw)`}}>
        {products.map(({ id, title, colors,color, price }) => (
          <SliderItem key={id}>
            <img src={`images/${colors[0].img}`} alt="" />
            <SliderBg style={{"background":color}}/>
            <SliderTitle>
              {title.toString().toUpperCase()} <br />
              NEW
              <br />
              SEASON
            </SliderTitle>
            <SliderPrice>${price}</SliderPrice>
            <a href="#product">
              <BuyButton>BUY NOW!</BuyButton>
            </a>
          </SliderItem>
        ))}
      </SliderWrapper>
    </SliDer>
  );
};

const SliDer = styled.div`
  background: url("https://images.unsplash.com/photo-1604147495798-57beb5d6af73?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80");
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0 85%);
  overflow: hidden;
`;
const SliderWrapper = styled.div`
  display: flex;
  width: 500vw;
  transition: all 1s ease-in-out;
`;

const SliderItem = styled.div`
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;
const SliderBg = styled.div`
  width: 750px;
  height: 750px;
  border-radius: 50%;
  position: absolute;
  z-index: -1;

`;
const SliderPrice = styled.h2`
  position: absolute;
  top: 10%;
  left: 10%;
  font-size: 60px;
  font-weight: 300;
  text-align: center;
  color: white;
  border: 1px solid gray;
`;

const SliderTitle = styled.h1`
  position: absolute;
  top: 10%;
  right: 10%;
  font-size: 60px;
  font-weight: 900;
  text-align: center;
  color: white;
  z-index: 1;
`;

const BuyButton = styled.button`
  position: absolute;
  top: 50%;
  right: 10%;
  font-size: 30px;
  font-weight: 900;
  color: white;
  border: 1px solid gray;
  background-color: black;
  z-index: 1;
  cursor: pointer;
  &:hover {
    background-color: white;
    color: black;
  }
`;
export default Slider;
