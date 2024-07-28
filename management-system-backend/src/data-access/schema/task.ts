import mongoose, { Document, Schema } from "mongoose";

export interface ITask extends Document {
  title: string;
  description: string;
  createdAt: Date;
  status: number;
  priority: number;
  projectId: string;
}

const taskSchema: Schema = new Schema<ITask>({
  _id: { type: String },
  title: { type: String, required: true },
  description: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  status: { type: Number, required: true },
  priority: { type: Number, required: true },
  projectId: { type: String, ref: "Project", required: true },
});

const Task = mongoose.model<ITask>("Task", taskSchema);
export default Task;
