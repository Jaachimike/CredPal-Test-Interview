import express from "express";
import itemController from "../controllers/itemController";
import authMiddleware from "../middleware/authMiddleware";

const router = express.Router();

router.get("/", authMiddleware, itemController.getAll);
router.post("/", authMiddleware, itemController.create);
router.put("/:id", authMiddleware, itemController.update);
router.delete("/:id", authMiddleware, itemController.delete);

export default router;
