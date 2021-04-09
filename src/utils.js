import jwt from 'jsonwebtoken';

export const generateToken = (email,password) => {
  return jwt.sign(
    {
      email: email,
      password: password,
    },
    process.env.JWT_SECRET || 'somethingsecret',
    {
      expiresIn: '30d',
    }
  );
};