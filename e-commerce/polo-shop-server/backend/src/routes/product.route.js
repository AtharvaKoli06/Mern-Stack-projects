import { Router } from "express";
import {
  uploadProduct,
  getAllProducts,
  getProductsWithId,
} from "../controllers/product.controller.js";

const router = Router();

router.route("/product").post(uploadProduct);
router.route("/allProducts").get(getAllProducts);
router.route("/productsWithId/:id").get(getProductsWithId);

export default router;
