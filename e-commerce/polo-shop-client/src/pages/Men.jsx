import React, { useEffect } from "react";

import { cardInDetailsInfo } from "../redux/slices/AllData.jsx";
import { useDispatch, useSelector } from "react-redux";

import Products from "../components/Products.jsx";
const Men = () => {
  const dispatch = useDispatch();
  const productDetails = useSelector((state) => state.cardDetails);
  useEffect(() => {
    dispatch(cardInDetailsInfo());
  }, []);
  return (
    <div className="w-full">
      <Products productDetails={productDetails} />
    </div>
  );
};

export default Men;