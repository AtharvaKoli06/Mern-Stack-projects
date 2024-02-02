import { Router } from "express";
import {
  uploadProduct,
  getAllProducts,
  getProductsWithId,
} from "../controllers/product.controller.js";
import { verifyToken } from "../utils/verifyUser.js";

const router = Router();

router.route("/product").post(uploadProduct);
router.route("/allProducts").get(getAllProducts);
router.route("/productsWithId/:id").get(verifyToken, getProductsWithId);

export default router;
