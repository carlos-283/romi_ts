import mongoose, { Document, Schema } from "mongoose";

interface IPatient extends Document {
    name:string;
    age:number;
    symptoms:string;
}

const patientSchema = new Schema<IPatient>({
    name :{type:String, required:true},
    age :{type:Number, required:true},
    symptoms :{type:String, required:true},
})

export const Patient = mongoose.model<IPatient>("Patient", patientSchema)