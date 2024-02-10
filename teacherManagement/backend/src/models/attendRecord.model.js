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
    presentData: [
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
        present: {
          type: Boolean,
          required: true,
        },
        weekDay: {
          type: String,
        },
      },
    ],
    absentData: [
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
        absent: {
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

export const StudentAttendenceData = mongoose.model(
  "StudentAttendenceData",
  attendRecordSchema
);
