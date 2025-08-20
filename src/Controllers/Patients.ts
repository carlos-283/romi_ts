import { Router, Request, Response } from "express";
import { Patient } from "../models/Patient";
import mongoose from "mongoose";

export const findPatients = async (req: Request, res: Response) => {
    try {
        const patients = await Patient.find()
        res.status(200).json(patients)
    }
    catch (e: any) {
        console.log(e.message)
        res.status(500).json({ Error: "Error al obtener usuarios" })
    }
}

export const findOnePatient = async (req: Request, res: Response) => {

    try{

        if(!mongoose.Types.ObjectId.isValid(req.params.id))
            return res.status(400).json({Error:"id invalido"})
        
        const foundPat = await Patient.findById(req.params.id);
        
        if(!foundPat)
            return res.status(404).json({Error:"No se encontro ningun elemento con el id proporcionado"})
        
        res.status(200).json(foundPat)
        
        }
        catch(e:any){
            res.status(500).json({"Error":e.message})
        }

    }

export const createPatient = async (req: Request, res: Response) => {
    const { name, age, symptoms } = req.body;

    if (!name || !age || !symptoms) {
        return res.status(400).json({ "error": "Hay campos faltantes" })
    }

    try {

        const newPat = await Patient.create({ name, age, symptoms })
        res.status(201).json({ "Paciente agregado": newPat })

    }
    catch (e: any) {
        console.log(e)
        res.status(500).json({ Error: e.message })

    }

}