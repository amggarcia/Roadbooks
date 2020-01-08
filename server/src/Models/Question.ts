import mongoose, {Schema,Model,Document} from 'mongoose';
import { IRoadBook } from './RoadBook';
import { IQuestionType } from './QuestionType'; 

export interface IQuestion extends Document{
    RoadBook : IRoadBook['_id'];
    Type : IQuestionType;
    Text : string;
}

const QuestionSchema = new Schema({
    RoadBook : {type : Schema.Types.ObjectId, required : true,ref : 'RoadBook'},
    Type : {type : Schema.Types.ObjectId, required : true, ref : 'QuestionType'},
    Text : {type : String}
})

export default mongoose.model<IQuestion & Document>('Question',QuestionSchema);