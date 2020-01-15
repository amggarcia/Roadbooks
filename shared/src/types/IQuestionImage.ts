import IQuestion from "./IQuestion";

export default interface IQuestionImage {
    Question: IQuestion['_id'];
    ImagePath: string;
}