import { Router } from 'express';
import SiteController from './controllers/site.controllers';

const router = Router();

router.get('/', SiteController.index);
router.get('/about', SiteController.about);
router.get('/contact', SiteController.contact);
router.get('/detail', SiteController.detail);
router.get('/premier', SiteController.premier);
router.get('/voting', SiteController.voting);

export default router;
