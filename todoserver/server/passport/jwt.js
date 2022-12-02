import passport from 'passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import User from '../models/user/user.js';
import { FailureData } from '../util/resultData.js';

const JwtStrategy = Strategy;

const JwtConfing = {
  jwtFromRequest: ExtractJwt.fromHeader('authorization'),
  secretOrKey: process.env.SECRET_JWT_TOKEN_KEY,
};

const JwtVerify = async (jwtPayload, done) => {
  try {
    const id = jwtPayload.split(' ')[1];
    const user = await User.findOne({ where: { id: jwtPayload.id } });
    if (user) {
      return done(null, user);
    } else {
      done(null, false, FailureData('올바르지 않은 인증정보 입니다'));
    }
  } catch (err) {
    console.error(err);
    done(err);
  }
};

export default () => {
  passport.use('jwt', new JwtStrategy(JwtConfing, JwtVerify));
};
