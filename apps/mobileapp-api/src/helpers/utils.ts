import { PrismaClient } from '@prisma/client';
import { compare } from 'bcrypt';

export const prisma = new PrismaClient();

export const comparePassword = (password: string, hashedPassword: string) => {
  return new Promise<boolean>((res) => {
    compare(password, hashedPassword, (err, same) => {
      if (err) res(false);
      else res(same);
    });
  });
};
