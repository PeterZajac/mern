import mongoose from 'mongoose';
import { JOB_STATUS, JOB_TYPE } from '../utils/constants.js';
const JobSchema = new mongoose.Schema(
  {
    company: String,
    position: String,
    jobStatus: {
      type: String,
      enum: Object.values(JOB_STATUS),
      default: JOB_STATUS.PENDING,
    },
    jobType: {
      type: String,
      enum: ['full-time', 'part-time', 'internship'],
      default: JOB_TYPE.FULL_TIME,
    },
    jobLocation: {
      type: String,
      default: 'my city',
    },
    createdBy: {
      type: mongoose.Types.ObjectId,
      ref: 'User',
    },
  },
  { timestamps: true }
);

export default mongoose.model('Job', JobSchema); //vytvára nám kolekciu jobs (mongo si samostatne vytvoril plurál od nášho Job) v mongoDB a priradí jej schému JobSchema
