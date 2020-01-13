import { IRoadBook } from './IRoadBook';
import IQuestionType from './IQuestionType';

export default interface IQuestion {
    _id: string;
    RoadBook: IRoadBook["_id"];
    Type: IQuestionType["_id"];
    Text: string;
}