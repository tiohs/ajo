import { Router } from 'express';
import SiteController from './controllers/site.controllers';

const router = Router();

router.get('/', SiteController.index);

export default router;
