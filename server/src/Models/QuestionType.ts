import mongoose, {Schema,Model,Document} from 'mongoose';
import IQuestionType from '@sharedTypes/IQuestionType';

const QuestionTypeSchema = new Schema({
    Name : {type : String, required : true, unique : true}
});

export default mongoose.model<IQuestionType & Document>('QuestionType',QuestionTypeSchema);
