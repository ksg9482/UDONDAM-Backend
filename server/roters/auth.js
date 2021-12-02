const express = require('express');
const router = express.Router();
const authRouter = require('../controllers/auth')

router.post('/login', authRouter.login);
router.post('/logout', authRouter.logout);
router.post('/signup', authRouter.signup);
router.post('/email', authRouter.email);
router.post('/emailcheck', authRouter.emailCheck);
router.post('/passwordcheck', authRouter.passwordCheck);
router.post('/tempp', authRouter.tempp);
router.get('/google', authRouter.google);
router.get('/naver', authRouter.naver);
router.get('/kakao', authRouter.kakao);

module.exports = router