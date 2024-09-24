import { Router } from "express";
import {
  store,
  index,
  show,
  update,
  destroy,
  signup,
  login,
  logado
} from "../controllers/user-controller.js";

const check_token = require("../middleware/check_token.js");

const router = Router();

router.post("/", store);
router.get("/", index);
router.get("/:id", show);
router.put("/:id", update);
router.delete("/:id", destroy);

router.post("/signup", signup);

router.post("/auth/login", login);
router.post("/auth/logado/:id", check_token, logado);

export default router;
