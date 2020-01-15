import { IRoadBook } from './IRoadBook';
import IQuestionType from './IQuestionType';
import IQuestionImage from './IQuestionImage';

export default interface IQuestion {
    _id: string;
    RoadBook: IRoadBook["_id"];
    Type: IQuestionType["_id"];
    Title: string;
    Description: string;
    Question: string;
    Images: IQuestionImage[];
}