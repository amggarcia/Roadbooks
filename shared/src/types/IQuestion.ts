import {IRoadBook} from './IRoadBook';
import {IQuestionType} from './IQuestionType';

export interface IQuestion{
    ID : string;
    RoadBook : IRoadBook;
    Type : IQuestionType;
    Text : string;
}