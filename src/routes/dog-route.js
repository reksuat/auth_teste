import { Router } from "express";
import {
  store,
  index,
  show,
  update,
  destroy,

  // logado,
} from "../controllers/dog-controller.js";

import check_token from "../middleware/check_token.js";
import check_role from "../middleware/check_role.js"

const router = Router();

/* 
Onde está o check_token o usuario tem que estar logado
tanto faz o nivel de acesso

Onde está o check_role ai depende do nivel de acesso
*/
router.post("/", check_token, check_role(["ADM"]), store); // Somente adm
router.get("/", check_token, check_role(["USU"]), index); // Somente usuário
router.get("/:id", check_token, show);
router.put("/:id", check_token, update);
router.delete("/:id", check_token, destroy);

export default router;