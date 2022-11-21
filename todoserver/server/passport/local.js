import passportLocal from 'passport-local';
import passport from 'passport';
import bcrypt from 'bcrypt';
import User from '../models/user/user.js';
import { FailureData } from '../util/resultData.js';

const LocalStrategy = passportLocal.Strategy;

const passportConfig = {
  usernameField: 'email',
  passwordField: 'password',
};

const passportVerify = async (email, password, done) => {
  try {
    const user = await User.findOne({ where: { email: email } });
    if (user) {
      const result = await bcrypt.compare(password, user.password);
      if (result) {
        return done(null, user);
      } else {
        return done(null, false, FailureData('비밀번호가 올바르지 않습니다'));
      }
    } else {
      return done(null, false, FailureData('가입되지 않은 회원입니다'));
    }
  } catch (err) {
    console.error(err);
    return done(err);
  }
};

export default () => {
  passport.use('local', new LocalStrategy(passportConfig, passportVerify));
};
