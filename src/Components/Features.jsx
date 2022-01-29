import React from "react";
import styled from "styled-components";

const Features = () => {
  return (
    <FeaturesWrapper>
      <Feature>
        <FeatureIcon src="images/shipping.png" alt="" />
        <FeatureTitle>FREE SHIPPING</FeatureTitle>
        <FeatureDesc>Free worldwide shipping on all orders.</FeatureDesc>
      </Feature>
      <Feature>
        <FeatureIcon src="images/return.png" alt="" />
        <FeatureTitle>30 DAYS RETURN</FeatureTitle>
        <FeatureDesc>
          No question return and easy refund in 14 days.
        </FeatureDesc>
      </Feature>
      <Feature>
        <FeatureIcon src="images/gift.png" alt="" />
        <FeatureTitle>GIFT CARDS</FeatureTitle>
        <FeatureDesc>Buy gift cards and use coupon codes easily.</FeatureDesc>
      </Feature>
      <Feature>
        <FeatureIcon src="images/contact.png" alt="" />
        <FeatureTitle>CONTACT US!</FeatureTitle>
        <FeatureDesc>Keep in touch via email and support system.</FeatureDesc>
      </Feature>
    </FeaturesWrapper>
  );
};

const FeaturesWrapper=styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 50px;
  @media screen and (max-width:780px){
    flex-direction: column;
}
`
const Feature=styled.div`
display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
    
`
const FeatureIcon=styled.img`
width: 50px;
  height: 50px;
`
const FeatureTitle=styled.span`
 font-size: 20px;
  font-weight: 600;
  margin: 20px;
`
const FeatureDesc=styled.span`
  color: gray;
  width: 50%;
  height: 100px;
`

export default Features;
