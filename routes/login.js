import express from 'express';
import { sendLogin, initSession } from '../handlers/routes/login.js';
import { passportLocal } from '../handlers/passport/passport_local.js';

const { Router } = express;
const router = new Router();

router.get('/', sendLogin);

router.post(
  '/',
  initSession
  /*passportLocal.authenticate('login', { failureRedirect: '/fail' })*/
);

export { router as routerLogin };
