import mongoose, { Schema } from "mongoose";

const studentDataSchema = new Schema(
  {
    rollNo: {
      type: String,
      required: true,
    },
    enrollNo: {
      type: String,
      required: true,
    },
    studentsName: {
      type: String,
      unique: true,
      required: true,
    },
    medium: {
      type: String,
      required: true,
    },
    year: {
      type: String,
      required: true,
    },
    course: {
      type: String,
      required: true,
    },
    courseName: {
      type: String,
      required: true,
    },
    section: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const StudentData = mongoose.model("StudentData", studentDataSchema);
