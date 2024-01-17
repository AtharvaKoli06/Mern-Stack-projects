import img_1 from "../assets/banner_img.jpg";
import img_2 from "../assets/home_page_banner.jpg";
import img_3 from "../assets/home_page_banner_desktop.jpg";
import img_4 from "../assets/premium_1__1.jpg";
import img_5 from "../assets/xmas_desktop_banner.jpg";

import jean1 from "../assets/jean_1.png";
import jean2 from "../assets/jean_2.png";
import jean3 from "../assets/jean_3.png";
import jean4 from "../assets/jean_4.png";
import jean5 from "../assets/jean_5.png";
import jean6 from "../assets/jean_6.png";
import jean7 from "../assets/jean_8.png";
import axios, { Axios } from "axios";

export const slides = [
  {
    name: "Image_1",
    img: img_1,
  },
  {
    name: "Image_2",
    img: img_2,
  },
  {
    name: "Image_3",
    img: img_3,
  },
  {
    name: "Image_4",
    img: img_4,
  },
  {
    name: "Image_5",
    img: img_5,
  },
];

export const cardData = [
  {
    text: "Men Blue Skanders Slim Fit Low Rise Light Fade Jeans",
    price: "₹1,649",
    discountedPrice: "₹3,299",
    discount: "50% OFF",
    img: jean1,
  },
  {
    text: "Men Blue Skanders Slim Fit Low Rise Light Fade Jeans",
    price: "₹1,649",
    discountedPrice: "₹3,299",
    discount: "50% OFF",
    img: jean2,
  },
  {
    text: "Men Blue Skanders Slim Fit Low Rise Light Fade Jeans",
    price: "₹1,649",
    discountedPrice: "₹3,299",
    discount: "50% OFF",
    img: jean3,
  },
  {
    text: "Men Blue Skanders Slim Fit Low Rise Light Fade Jeans",
    price: "₹1,649",
    discountedPrice: "₹3,299",
    discount: "50% OFF",
    img: jean4,
  },
  {
    text: "Men Blue Skanders Slim Fit Low Rise Light Fade Jeans",
    price: "₹1,649",
    discountedPrice: "₹3,299",
    discount: "50% OFF",
    img: jean5,
  },
  {
    text: "Men Blue Skanders Slim Fit Low Rise Light Fade Jeans",
    price: "₹1,649",
    discountedPrice: "₹3,299",
    discount: "50% OFF",
    img: jean6,
  },
  {
    text: "Men Blue Skanders Slim Fit Low Rise Light Fade Jeans",
    price: "₹1,649",
    discountedPrice: "₹3,299",
    discount: "50% OFF",
    img: jean7,
  },
];

export const dropDownLinks = [
  {
    id: 1,
    name: "Shirts",
    link: "/",
  },
  {
    id: 2,
    name: "Crew-NEck T-Shirts",
    link: "/",
  },
  {
    id: 3,
    name: "Polo T-shirt",
    link: "/",
  },
  {
    id: 4,
    name: "Shorts",
    link: "/",
  },
  {
    id: 5,
    name: "Pants",
    link: "/",
  },
  {
    id: 6,
    name: "Track Pants",
    link: "/",
  },
  {
    id: 7,
    name: "Jackets",
    link: "/",
  },
  {
    id: 8,
    name: "SweatShirts",
    link: "/",
  },
  {
    id: 9,
    name: "Skinny",
    link: "/",
  },
  {
    id: 10,
    name: "Slim",
    link: "/",
  },
  {
    id: 11,
    name: "Regular",
    link: "/",
  },
  {
    id: 12,
    name: "Comfort",
    link: "/",
  },
  {
    id: 13,
    name: "ONLINE EXCLUSIVE",
    link: "/",
  },
  {
    id: 14,
    name: "FW'24 LOOKBOOK",
    link: "/",
  },
];
export const womenWear = [
  {
    id: 1,
    name: "Shirts",
    link: "/",
  },
  {
    id: 2,
    name: "T-Shirt",
    link: "/",
  },
  {
    id: 3,
    name: "Sweaters",
    link: "/",
  },
  {
    id: 4,
    name: "Sweatshirts",
    link: "/",
  },
  {
    id: 5,
    name: "Jackets",
    link: "/",
  },
  {
    id: 6,
    name: "Jeans",
    link: "/",
  },
  {
    id: 7,
    name: "Trousers",
    link: "/",
  },
  {
    id: 8,
    name: "Shorts",
    link: "/",
  },
];
export const collection = [
  {
    id: 1,
    name: "STYLERS ORIGINALS",
    link: "/",
  },
  {
    id: 2,
    name: "OUTDOOR",
    link: "/",
  },
  {
    id: 3,
    name: "HERITAGE",
    link: "/",
  },
  {
    id: 4,
    name: "STYLER PREMIUM",
    link: "/",
  },
  {
    id: 5,
    name: "STYLER X ABDON",
    link: "/",
  },
  {
    id: 6,
    name: "MONOCHROME",
    link: "/",
  },
  {
    id: 7,
    name: "CASEY JONES",
    link: "/",
  },
  {
    id: 8,
    name: "ALL TERRAIN GEAR BY STYLERS",
    link: "/",
  },
];

export let product = null;
export const data = () => {
  axios
    .get("https://6577dd93197926adf62ee4bd.mockapi.io/api/v1/productList")
    .then((res) => {
      product(res.data);
    })
    .catch((error) => {
      if (!product) {
        return error.message;
      }
    });
};
