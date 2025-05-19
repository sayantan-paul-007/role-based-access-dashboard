import { TextEncoder } from 'util';

export function getJwtSecretKey() {
  const secret = process.env.JWT_SECRET;
  if (!secret) throw new Error('JWT_SECRET is not defined in env');
  return new TextEncoder().encode(secret);
}
