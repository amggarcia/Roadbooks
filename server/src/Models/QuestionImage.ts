import mongoose, { Schema, Document } from 'mongoose';
import IQuestionImage from '@sharedTypes/IQuestionImage';

const QuestionImageSchema = new Schema({
    Question: { type: Schema.Types.ObjectId, required: true, ref: 'Question' },
    ImagePath: { type: String }
});

export default mongoose.model<IQuestionImage & Document>('QuestionImage', QuestionImageSchema);