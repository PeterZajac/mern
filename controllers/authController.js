import { StatusCodes } from 'http-status-codes';

import UserModel from '../models/UserModel.js';
import { comparePasswords, hashPassword } from '../utils/passwordUtils.js';
import { UnauthenticatedError } from '../errors/customError.js';
import { createJWT } from '../utils/tokenUtils.js';

export const register = async (req, res) => {
  const isFirstAccout = (await UserModel.countDocuments()) === 0;
  req.body.role = isFirstAccout ? 'admin' : 'user';

  const hashedPassword = await hashPassword(req.body.password);
  req.body.password = hashedPassword;

  const user = await UserModel.create(req.body);
  res.status(StatusCodes.CREATED).json({ msg: 'user created' });
};
export const login = async (req, res) => {
  const user = await UserModel.findOne({ email: req.body.email });

  const isValidUser =
    user && (await comparePasswords(req.body.password, user.password));

  if (!isValidUser) throw new UnauthenticatedError('invalid credentials');

  const token = createJWT({ userId: user._id, role: user.role });
  console.log(token);

  const oneDay = 1000 * 60 * 60 * 24;
  res.cookie('token', token, {
    httpOnly: true,
    expires: new Date(Date.now() + oneDay),
    secure: process.env.NODE_ENV === 'production',
  });
  res.status(StatusCodes.OK).json({ msg: 'user logged in' });
};

export const logout = async (req, res) => {
  res.cookie('token', 'logout', {
    httpOnly: true,
    expires: new Date(Date.now()),
  });
  res.status(StatusCodes.OK).json({ msg: 'user logged out' });
};
