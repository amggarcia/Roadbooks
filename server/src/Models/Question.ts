import mongoose, { Schema, Model, Document } from 'mongoose';
import IQuestionType from '@sharedTypes/IQuestionType';
import { IRoadBook } from '@sharedTypes/IRoadBook';
import IQuestion from '@sharedTypes/IQuestion';


//The virtual is just a test to see how 'reverse populating' could work
//The QuestionImages collection could be replaced by nested objects and make this much more simple

const QuestionImageSchema = new Schema({
    ImagePath: String
})

const QuestionSchema = new Schema({
    RoadBook: { type: Schema.Types.ObjectId, required: true, ref: 'RoadBook' },
    QuestionType: { type: Schema.Types.ObjectId, required: true, ref: 'QuestionType' },
    Title: { type: String },
    Description: { type: String },
    Question: { type: String },
    Images: [QuestionImageSchema]
});

export default mongoose.model<IQuestion & Document>('Question', QuestionSchema);