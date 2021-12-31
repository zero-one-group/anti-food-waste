import { RouteHandlerMethod } from 'fastify';
import { prisma, comparePassword } from '../helpers/utils';

export const signUp: RouteHandlerMethod = async (req, res) => {
  try {
    const {
      createdAt,
      updatedAt,
      userName,
      userAddress,
      userPhoneNumber,
      userEmail,
      userPassword,
      userType,
    } = req.body as any;

    const { ...user } = await prisma.user.create({
      data: {
        createdAt,
        updatedAt,
        userName,
        userAddress,
        userPhoneNumber,
        userEmail,
        userPassword,
        userType,
      },
    });
    return res.send({ user });
  } catch (error) {
    res.status(500).send(error);
  }
};

export const login: RouteHandlerMethod = async (req, res) => {
  try {
    const { userEmail, userPassword } = req.body as any;
    const user = await prisma.user.findUnique({ where: { userEmail } });

    if (!user) {
      return res.status(401).send({ error: 'Invalid email or password' });
    }

    if (!(await comparePassword(userPassword, user.userPassword))) {
      return res.status(401).send({ error: 'Invalid email or password' });
    }

    const { ...data } = user;

    return res.send({
      data: { user: data },
    });
  } catch (error) {
    res.status(500).send(error);
  }
};

export const updateUser: RouteHandlerMethod = async (req, res) => {
  try {
    const { userId } = req.query as any;
    const {
      createdAt,
      updatedAt,
      userName,
      userAddress,
      userPhoneNumber,
      userEmail,
      userPassword,
      userType,
    } = req.body as any;
    const { ...user } = await prisma.user.update({
      where: {
        id: parseInt(userId),
      },
      data: {
        createdAt,
        updatedAt,
        userName,
        userAddress,
        userPhoneNumber,
        userEmail,
        userPassword,
        userType,
      },
    });
    return res.send({ user });
  } catch (error) {
    res.status(500).send(error);
  }
};
