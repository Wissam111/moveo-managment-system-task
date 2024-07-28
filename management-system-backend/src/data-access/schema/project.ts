import mongoose, { Document, Schema } from "mongoose";

export interface IProject extends Document {
  _id: string;
  name: string;
  description?: string;
  createdAt: Date;
}

const projectSchema = new Schema<IProject>({
  _id: { type: String },
  name: { type: String, required: true, unique: true },
  description: { type: String },
  createdAt: { type: Date, default: Date.now },
});

const Project = mongoose.model<IProject>("Project", projectSchema);

export default Project;
