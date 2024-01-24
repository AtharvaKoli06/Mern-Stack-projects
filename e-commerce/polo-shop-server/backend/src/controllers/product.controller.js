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
  const createdProduct = await Product.findById(product._id);

  if (!createdProduct) {
    throw new ApiError(500, "Something went wrong when creating the Product");
  }
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

export const getAllProducts = asyncHandler(async (req, res) => {
  const products = await Product.find();

  if (!products) {
    throw new ApiError(500, "Something went wrong when creating the Product");
  }
  return res.status(201).json(new ApiResponse(200, products, "OK"));
});

export const getProductsWithId = asyncHandler(async (req, res) => {
  let id = req.params.id;
  const product = await Product.findById(id);
  if (!product) {
    throw new ApiError(404, "Product With Id not Found");
  }
  res.status(201).json(new ApiResponse(200, product, "OK"));
});

export const updateProductsWithId = asyncHandler(async (req, res) => {
  let product = await Product.findById(req.params.id);

  product = await Product.findByIdUpdate(req.params.id, req.body, {
    new: true,
    useFindAndModify: false,
    runValidators: true,
  });

  if (!product) {
    throw new ApiError(500, "Something went wrong when updating the Product");
  }
  return res.status(200).json(new ApiResponse(200, product, "Updated"));
});

export const deleteProductWithId = asyncHandler(async (req, res) => {
  let product = await Product.findById(req.params._id);

  if (!product) {
    throw new ApiError(500, "Something went wrong when creating the Product");
  }

  await product.remove();

  return res
    .status(200)
    .json(new ApiResponse(200, product, "product is deleted"));
});
