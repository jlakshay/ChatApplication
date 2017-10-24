import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import Debug from 'debug';
import express from 'express';
import logger from 'morgan';
import path from 'path';
import passport from 'passport';
import flash from 'connect-flash';
import session from 'express-session';
import index from './routes/index';
import group from './routes/group';
import register from './routes/register';
import login from  './routes/login';
import cors from 'cors';
import otpVerify from './routes/otpVerification/verification';

require('./auth/passport')(passport);




const db = require('mongoose');

db.connect('mongodb://localhost/chat');


const app = express();
const debug = Debug('server:app');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(cookieParser());
app.use(session({ secret: 'chatting'}));
app.use(passport.initialize());
app.use(passport.session());
app.use(express.static(path.join(__dirname, 'public')));

app.use(cors());
app.use('/', index);
app.use('/groupchat', group);
app.use('/register',register);
app.use('/login',login);

app.use('/otpVerify', otpVerify);


app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});
// error handler
app.use((err, req, res, next) => {
// set locals, only providing error in development
 res.locals.message = err.message;
 res.locals.error = req.app.get('env') === 'development' ? err : {};
 // render the error page
 res.status(err.status || 500);
 res.json(err);
});
app.listen()

export default app;
