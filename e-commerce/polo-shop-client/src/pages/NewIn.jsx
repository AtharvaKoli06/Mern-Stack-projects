import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";

import { cardInDetailsInfo } from "../redux/slices/AllData.jsx";

import Products from "../components/Products.jsx";
import Loader from "../components/Loader.jsx";

const NewIn = () => {
  const dispatch = useDispatch();
  const productDetails = useSelector((state) => state.cardDetails);
  useEffect(() => {
    dispatch(cardInDetailsInfo());
  }, [dispatch]);

  const { loading, error, data } = productDetails;

  return (
    <>
      <div className="w-full">
        <Products
          data={data.data}
          length={data.length}
          loading={loading}
          error={error}
        />
      </div>
    </>
  );
};

export default NewIn;
