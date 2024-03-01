import React from "react";
import Heading from "../Products/Heading";
import Product from "../Products/Product";
import {
  bestSellerOne,
  bestSellerTwo,
  bestSellerThree,
  bestSellerFour,
} from "../../../assets/images/index";

const BestSellers = () => {
  return (
    <div className="w-full pb-20">
      <Heading heading="Our Bestsellers" />
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lgl:grid-cols-3 xl:grid-cols-4 gap-10">
        <Product
          _id="1011"
          img={bestSellerOne}
          productName="Flower Base"
          price="35.00"
          color="Blank and White"
          badge={true}
          des="This Flower Holder Base makes it easy to display your favorite bouquets, stems, and sprays. With its wide, sturdy base."
        />
        <Product
          _id="1012"
          img={bestSellerTwo}
          productName="New Backpack"
          price="180.00"
          color="Gray"
          badge={false}
          des="It is made of cloth, nylon, leather, or waxed canvas1. The pack has two parallel straps that hang over the shoulders, and the shoulder straps are typically adjustable and have pads."
        />
        <Product
          _id="1013"
          img={bestSellerThree}
          productName="Household materials"
          price="25.00"
          color="Mixed"
          badge={true}
          des="Explore the world of household products, from cleaning supplies to personal care items. Learn about their properties, production, and versatile applications."
        />
        <Product
          _id="1014"
          img={bestSellerFour}
          productName="Travel Bag"
          price="220.00"
          color="Black"
          badge={false}
          des="The wheeled backpack or rolling backpack is an excellent option for backpackers with heavy luggage. Wheeled backpacks are generally spacious and can carry more items than the regular backpack as they are portable."
        />
      </div>
    </div>
  );
};

export default BestSellers;
