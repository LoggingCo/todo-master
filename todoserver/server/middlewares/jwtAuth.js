import passport from 'passport';
import { FailureData } from '../util/resultData.js';

export const jwtAuth = (req, res, next) => {
  passport.authenticate('jwt', { session: false }, (err, user) => {
    // jwt x
    if (err || !user) {
      // refresh o jwt x
      if (req.cookies.refresh) {
        res.status(403).json(FailureData('인증토큰을 재발급 받으세요'));
      } else {
        // refresh x jwt x
        res.status(401).json(FailureData('세션이 만료되었습니다'));
      }
    }

    // jwt o refresh o
    if (req.cookies.refresh) {
      return next();
    }

    // jwt o refresh x
    // refresh o
    const refresh = jwt.sign({ token: user.token }, process.env.SECRET_REFRESH_TOKEN_KEY);
    res.cookie('refresh', refresh, {
      maxAge: 14 * 24 * 60 * 60000,
      httpOnly: true,
    });
    next();
  })(req, res, next);
};
