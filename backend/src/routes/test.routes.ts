import { Router } from 'express';
import { testController } from '../controllers/test.controller';

const router = Router();

router.get('/', (req, res) => testController.getHelloMessage(req, res));
router.get('/time', (req, res) => testController.getDbTime(req, res));

export default router;
