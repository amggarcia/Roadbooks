import mongoose, { Schema, Model, Document } from 'mongoose';
import IQuestionType from '@sharedTypes/IQuestionType';
import { IRoadBook } from '@sharedTypes/IRoadBook';
import IQuestion from '@sharedTypes/IQuestion';

// export interface IQuestion extends Document{
//     RoadBook : IRoadBook['_id'];
//     Type : IQuestionType;
//     Text : string;
// }

const QuestionSchema = new Schema({
    RoadBook: { type: Schema.Types.ObjectId, required: true, ref: 'RoadBook' },
    QuestionType: { type: Schema.Types.ObjectId, required: true, ref: 'QuestionType' },
    Text: { type: String }
})

export default mongoose.model<IQuestion & Document>('Question', QuestionSchema);