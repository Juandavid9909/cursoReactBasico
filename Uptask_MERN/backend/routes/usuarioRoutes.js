import express from "express";

import { autenticar, confirmar, registrar } from "../controllers/usuarioController.js";

const router = express.Router();

// Autenticación, Registro y Confirmación de Usuarios
router.post("/", registrar);

router.post("/login", autenticar);

router.get("/confirmar/:token", confirmar);

export default router;