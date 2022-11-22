import User from '../models/user/user.js';
import bcrypt from 'bcrypt';
import passport from 'passport';
import jwt from 'jsonwebtoken';
import { HandlerError } from '../util/handleError.js';
import { FailureData, SuccessData } from '../util/resultData.js';

export class UserService {
  static async login(req, res, next) {
    await passport.authenticate('local', (err, user, info) => {
      if (err) {
        console.error(err);
        return next(err);
      }
      if (info) {
        return res.status(400).json(info);
      }

      return req.login(user, async (loginErr) => {
        if (loginErr) {
          return next(loginErr);
        } else {
          const token = jwt.sign({ id: user.id }, process.env.SECRET_JWT_TOKEN_KEY);
          const refresh = jwt.sign({ token: user.token }, process.env.SECRET_REFRESH_TOKEN_KEY);

          res.cookie('refresh', refresh, {
            maxAge: 14 * 24 * 60 * 60000,
            httpOnly: true,
          });
          res.status(200).json(SuccessData({ token: token }));
        }
      });
    })(req, res, next);
  }
  catch(err) {
    HandlerError(err, next);
  }

  static async sign(req, res, next) {
    try {
      const exUser = await User.findOne({
        where: {
          email: req.body.email,
        },
      });
      if (exUser) {
        return res.status(400).send(FailureData('이미 사용중인 이메일입니다.'));
      }
      const hashedPassword = await bcrypt.hash(req.body.password, 12);
      await User.create({
        email: req.body.email,
        password: hashedPassword,
      });

      res.status(200).json(SuccessData('축하드립니다. 회원가입에 성공하셨습니다'));
    } catch (err) {
      HandlerError(err, next);
    }
  }

  static async jwtrefrsh(req, res, next) {
    try {
      const token = jwt.sign({ id: req.user.id }, process.env.SECRET_JWT_TOKEN_KEY);
      res.status(200).json(SuccessData(token));
    } catch (err) {
      HandlerError(err, next);
    }
  }

  static async logout(req, res, next) {
    try {
      req.logout((err) => {
        if (err) {
          console.error(err);
          next(err);
          return res.status(401).json(FailureData);
        }
        req.session.destroy();
        res.clearCookie('refresh');
        res.clearCookie('connect.sid');
        res.status(201).json(SuccessData('로그아웃 되었습니다'));
      });
    } catch (err) {
      HandlerError(err, next);
    }
  }
}
