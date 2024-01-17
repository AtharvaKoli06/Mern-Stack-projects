import { asyncHandler } from "../utils/asyncHandler.js";

import { ApiError } from "../utils/apiError.js";

import ApiResponse from "../utils/ApiResponse.js";

import { Product } from "../models/product.models.js";

export const uploadProduct = asyncHandler(async (req, res) => {
  const {
    title,
    typeOf,
    cost,
    mrpPrice,
    discount,
    img,
    cashBack,
    bestPrice,
    additionalDiscount,
    discountCode,
    color,
    size,
    quantity,
    styleNote,
    features,
    additionalDetail,
  } = req.body;

  https: if (
    [
      title,
      typeOf,
      cost,
      mrpPrice,
      discount,
      cashBack,
      bestPrice,
      additionalDiscount,
      discountCode,
      color,
      styleNote,
    ].some((field) => field?.trim() === "")
  ) {
    throw new ApiError(400, "All fields are required");
  }
  const product = await Product.create({
    title,
    typeOf,
    cost,
    mrpPrice,
    discount,
    img,
    cashBack,
    bestPrice,
    additionalDiscount,
    discountCode,
    color,
    size,
    quantity,
    styleNote,
    features,
    additionalDetail,
  });
  console.log(product);

  const createdProduct = await Product.findById(product._id);

  if (!createdProduct) {
    throw new ApiError(500, "Something went wrong when creating the Product");
  }
  console.log(createdProduct);
  // 9. return response
  return res
    .status(201)
    .json(
      new ApiResponse(
        200,
        createdProduct,
        "Product has been created successfully "
      )
    );
});

export const GetAllProducts = asyncHandler(async (req, res) => {
  const body = req.body;
  console.log(body);
});
