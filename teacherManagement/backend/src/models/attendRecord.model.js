import mongoose, { Schema } from "mongoose";

const attendRecordSchema = new Schema(
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
    lecture: {
      type: String,
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
    presentOrAbsent: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const StudentAttendenceData = mongoose.model(
  "StudentAttendenceData",
  attendRecordSchema
);
