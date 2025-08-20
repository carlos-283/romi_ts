import { Router } from "express";
import { createPatient, findPatients, findOnePatient } from "../Controllers/Patients";

const router = Router();

router.get("/", findPatients)

router.post("/", createPatient)

router.get("/:id", findOnePatient)

export default router