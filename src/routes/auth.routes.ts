import express from 'express';
import * as authRouter from '../controllers/auth.controller';
import auth from '../middleware/verifyToken';

export const path = '/';
export const router = express.Router();

router.post('/login', authRouter.login);
router.post('/guest', authRouter.guest);
router.get('/logout',authRouter.logout);
router.post('/signup', authRouter.signup);
router.post('/email', authRouter.email);
router.post('/emailcheck', authRouter.emailCheck);
router.post('/passwordcheck', authRouter.passwordCheck);
router.post('/tempp', authRouter.tempp);
router.get('/google', authRouter.google);
router.get('/googlecallback',authRouter.googlecallback);
router.get('/naver', authRouter.naver);
router.get('/navercallback', authRouter.naverCallback)
router.get('/kakao', authRouter.kakao);
router.get('/kakaocallback', authRouter.kakaoCallback);
