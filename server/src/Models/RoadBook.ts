import mongoose, {Schema,Model,Document} from 'mongoose';

export interface IRoadBook extends Document {
    Name  : string;
    Description : string;
}

const RoadBookSchema = new Schema({
    Name : {type : String, required : true, unique: true},
    Description : {type : String }
});

export default mongoose.model<IRoadBook>('RoadBook',RoadBookSchema);
