import mongoose, { Schema } from "mongoose";

const productSchema = new Schema(
  {
    title: { type: String, required: true },
    typeOf: { type: String },
    cost: { type: String, required: true },
    mrpPrice: { type: String, required: true },
    discount: { type: String, required: true },
    img: [
      {
        img: { type: String, required: true },
        img: { type: String },
        img: { type: String },
        img: { type: String },
        img: { type: String },
      },
    ],
    cashBack: { type: String, required: true },
    bestPrice: { type: String, required: true },
    additionalDiscount: { type: String, required: true },
    discountCode: { type: String, required: true },
    color: { type: String, required: true },
    size: { type: [Number], required: true },
    quantity: { type: Number, required: true },
    styleNote: { type: String, required: true },
    features: [
      {
        Material: { type: String },
        Pattern: { type: String },
        CollarType: { type: String },
        SleeveLength: { type: String },
        ClosureType: { type: String },
        PocketType: { type: String },
        NumberOfPockets: { type: Number },
        PocketType: { type: String },
        Story: { type: String },
      },
    ],
    additionalDetail: {
      CountryOfOrigin: { type: String },
      ManufacturedBy: { type: String },
      MarketedBy: { type: String },
      CustomerCareNo: { type: String },
    },
    createdAt: { type: Date },
  },
  { timestamps: true }
);

export const Product = mongoose.model("Product", productSchema);
