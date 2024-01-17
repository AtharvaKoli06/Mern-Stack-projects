import { Router } from "express";
import { uploadProduct } from "../controllers/product.controller.js";
import { GetAllProducts } from "../controllers/product.controller.js";

const router = Router();

router.route("/product").post(uploadProduct);
router.route("/newInProducts/product").get(GetAllProducts);

export default router;
