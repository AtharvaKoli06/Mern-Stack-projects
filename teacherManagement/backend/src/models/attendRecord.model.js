import mongoose, { Schema } from "mongoose";

const attendRecordSchema = new Schema(
  {
    lecture: {
      type: String,
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
    studentsCurrentAttendence: [
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
          required: true,
        },
        presentOrAbsent: {
          type: Boolean,
          required: true,
        },
        weekDay: {
          type: String,
        },
      },
    ],
  },
  {
    timestamps: true,
  }
);

attendRecordSchema.index({ lecture: 1 }, { unique: true });

export const StudentAttendenceData = mongoose.model(
  "StudentAttendenceData",
  attendRecordSchema
);
