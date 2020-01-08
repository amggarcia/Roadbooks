import RoadBookRoutes from './RoadBookRoutes';
import QuestionRoutes from './QuestionRoutes';
import express, {Request,Response} from 'express';

const router = express.Router();

router.use('/RoadBook',RoadBookRoutes);
router.use('/Question',QuestionRoutes);

router.get("/",(req: Request, res : Response ) => {
    res.send("RoutesMain");
});

export default router;
