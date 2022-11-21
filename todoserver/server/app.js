// import lib
import express from 'express';
import dotenv from 'dotenv';
import hpp from 'hpp';
import helmet from 'helmet';
import cors from 'cors';
import morgan from 'morgan';
import CookieParser from 'cookie-parser';
import session from 'express-session';
// import  db
import db from './models/index.js';
// import passport
import passport from 'passport';
import passportConfig from './passport/index.js';
// import route
import user from './routes/user.js';
import todo from './routes/todo.js';

// config
const app = express();
passportConfig();
dotenv.config();

// sequelize
db.sequelize
  .sync()
  .then(() => {
    console.log('db 연결 성공');
  })
  .catch(console.error);

// middleware
if (process.env.NODE_ENV === 'production') {
  app.use(morgan('combined'));
  app.use(hpp());
  app.use(
    helmet({
      contentSecurityPolicy: false,
      crossOriginEmbedderPolicy: false,
      crossOriginResourcePolicy: false,
    }),
  );
  app.use(
    cors({
      origin: true,
      credentials: true,
    }),
  );
} else {
  app.use(morgan('dev'));
  app.use(
    cors({
      origin: true,
      credentials: true,
    }),
  );
}
// body parser
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// cockie parser
app.use(CookieParser());

// session
app.use(
  session({
    saveUninitialized: false,
    resave: false,
    secret: process.env.SESSION_SECRET_KEY,
    cookie: {
      sameSite: 'none',
      httpOnly: true,
      secure: true,
    },
  }),
);

// passport
app.use(passport.initialize());
app.use(passport.session());

// route
app.use('/user', user);
app.use('/todo', todo);

// server
app.set('port', 9000);
const server = app.listen(app.get('port'), () => {
  console.log(`${app.get('port')}번으로 서버 실행 중`, process.env.NODE_ENV);
});
