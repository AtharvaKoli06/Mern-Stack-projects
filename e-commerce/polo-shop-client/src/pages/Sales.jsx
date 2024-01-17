import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";

import { cardInDetailsInfo } from "../redux/slices/AllData";
import Products from "../components/Products";

const Sales = () => {
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

export default Sales;
