import { PrismaClient } from '@prisma/client';
export const prisma = new PrismaClient();

export const comparePassword = (password: string, hashedPassword: string) => {
  return password === hashedPassword ? true : false;
};
