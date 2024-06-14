import {
  UnauthenticatedError,
  UnauthorizedError,
  BadRequestError,
} from '../errors/customError.js';
import { verifyJWT } from '../utils/tokenUtils.js';

export const authenticateUser = (req, res, next) => {
  // console.log(req.cookies);
  const { token } = req.cookies;
  if (!token) throw new UnauthenticatedError('authentication invalid');

  try {
    const { userId, role } = verifyJWT(token);
    const testUser = userId === '6668306afba09ca385f48601';
    req.user = { userId, role, testUser };
    next();
  } catch (error) {
    throw new UnauthenticatedError('authentication invalid');
  }
};

export const authorizedPermissions = (...roles) => {
  return (req, res, next) => {
    const { role } = req.user;
    if (!roles.includes(role)) {
      throw new UnauthorizedError('Unathoriyed to acces this route');
    }
    next();
  };
};

export const checkForTestUser = (req, res, next) => {
  const { testUser } = req.user;
  if (testUser) {
    throw new BadRequestError('Demo user. Read only!');
  }
  next();
};
