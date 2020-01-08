import express, {Router} from 'express';
import RoadBookController from '../Controllers/RoadBookController';
const router = express.Router();

const controller : RoadBookController =  new RoadBookController();

router.get("/",controller.getRoadBooks);
router.post("/",controller.createRoadBook);
router.get("/:id", controller.getRoadBookByID);
router.put("/:id", controller.updateRoadBook);
router.delete("/:id",controller.deleteRoadBook);

export default router;

