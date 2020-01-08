import mongoose, {Schema,Model,Document} from 'mongoose';
import Question from './Question';

export interface IQuestionType extends Document{
    Name : string;
}

const QuestionTypeSchema = new Schema({
    Name : {type : String, required : true, unique : true}
});

export default mongoose.model<IQuestionType>('QuestionType',QuestionTypeSchema);