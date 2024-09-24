import { Router } from "express";
import {
  store,
  index,
  show,
  update,
  destroy,
  signup,
  login,
} from "../controllers/user-controller.js";

const router = Router();

router.post("/", store);
router.get("/", index);
router.get("/:id", show);
router.put("/:id", update);
router.delete("/:id", destroy);

router.post("/signup", signup);

router.post("/auth/login", login);

export default router;
