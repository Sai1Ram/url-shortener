import { Router } from 'express';
import generateShorternUrl from '../controller/url.js';
const router = Router();
router.post("/", generateShorternUrl);

export default router