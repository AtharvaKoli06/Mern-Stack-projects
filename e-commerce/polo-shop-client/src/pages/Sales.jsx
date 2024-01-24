import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";

import { cardInDetailsInfo } from "../redux/slices/AllData.slice.jsx";
import Products from "../components/Products";
import Loader from "../components/Loader";

const Sales = () => {
  const dispatch = useDispatch();
  const productDetails = useSelector((state) => state.cardDetails);
  useEffect(() => {
    dispatch(cardInDetailsInfo());
  }, [dispatch]);

  const { loading, error, data } = productDetails;
  if (loading) {
    return (
      <>
        <Loader />
      </>
    );
  }
  if (error) {
    return (
      <div>
        <div className="flex items-center justify-center p-5 w-full bg-white absolute">
          <div classNAme="text-center">
            <div className="inline-flex rounded-full bg-red-100 p-4 border">
              <div className="rounded-full stroke-red-600 bg-red-200 p-4">
                <svg class="w-16 h-16" viewBox="0 0 28 28" fill="none">
                  <path
                    d="M6 8H6.01M6 16H6.01M6 12H18C20.2091 12 22 10.2091 22 8C22 5.79086 20.2091 4 18 4H6C3.79086 4 2 5.79086 2 8C2 10.2091 3.79086 12 6 12ZM6 12C3.79086 12 2 13.7909 2 16C2 18.2091 3.79086 20 6 20H14"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                  <path
                    d="M17 16L22 21M22 16L17 21"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
              </div>
            </div>
            <h1 className="mt-5 text-[36px] font-bold text-slate-800 lg:text-[40px]">
              {productDetails.error}
            </h1>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="w-full">
      <Products
        data={data.data}
        length={data.length}
        loading={loading}
        error={error}
      />
    </div>
  );
};

export default Sales;
