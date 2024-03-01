import React from "react";
import Slider from "react-slick";
import Heading from "../Products/Heading";
import Product from "../Products/Product";
import {
  newArrOne,
  newArrTwo,
  newArrThree,
  newArrFour,
} from "../../../assets/images/index";
import SampleNextArrow from "./SampleNextArrow";
import SamplePrevArrow from "./SamplePrevArrow";

const NewArrivals = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };
  return (
    <div className="w-full pb-16">
      <Heading heading="New Arrivals" />
      <Slider {...settings}>
        <div className="px-2">
          <Product
            _id="100001"
            img={newArrOne}
            productName="Round Table Clock"
            price="44.00"
            color="Black"
            badge={true}
            des="Material: Plastic, Color: Black. Package Contents: 1 Table Clock. Product Dimensions : Width : 13.5 cm x Depth : 5.5 cm x Height : 18 cm; Product Weight : 308 g. Handling & Care Instructions:Hang a wall clock on a decent length screw properly secured in the wall, and never on string, a nail or a picture hanger."
          />
        </div>
        <div className="px-2">
          <Product
            _id="100002"
            img={newArrTwo}
            productName="Smart Watch"
            price="250.00"
            color="Black"
            badge={true}
            des="A smartwatch is a portable and wearable computer device in a form of a watch; modern smartwatches provide a local touchscreen interface for daily use, while an associated smartphone app provides management and telemetry, such as long-term biomonitoring. While early models could perform basic tasks such as calculations, digital time telling, translations, and game-playing."
          />
        </div>
        <div className="px-2">
          <Product
            _id="100003"
            img={newArrThree}
            productName="cloth Basket"
            price="80.00"
            color="Mixed"
            badge={true}
            des="
            The laundry basket you choose should come with sturdy handles for your convenienceWhat are the various benefits of laundry baskets?
            This product can help you to manage clothes. By bringing this basket, ensure that dirty clothes are not scattered everywhere in your home."
          />
        </div>
        <div className="px-2">
          <Product
            _id="100004"
            img={newArrFour}
            productName="Funny toys for babies"
            price="60.00"
            color="Mixed"
            badge={false}
            des="All soft toys are good at hugging, comforting and listening and are fond of play and mischief. In addition, they are reliable and tested for safety."
          />
        </div>
        
      </Slider>
    </div>
  );
};

export default NewArrivals;
