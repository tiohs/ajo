import { Router } from 'express';
import Site from './site/site.routes';

const router = Router();

router.use(Site);

export default router;
