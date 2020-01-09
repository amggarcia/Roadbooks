import mongoose, {Schema,Document} from 'mongoose';
import IRoadBook from '@sharedTypes/IRoadBook';

const RoadBookSchema = new Schema({
    Name : {type : String, required : true, unique: true},
    Description : {type : String }
});

export default mongoose.model<IRoadBook & Document>('RoadBook',RoadBookSchema);
