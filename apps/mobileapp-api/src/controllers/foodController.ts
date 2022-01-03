import { RouteHandlerMethod } from 'fastify';
import { prisma } from '../helpers/utils';

export const getOfficialFood: RouteHandlerMethod = async (req, res) => {
  try {
    const { ...food } = await prisma.food.findMany({
      include: {
        User: {
          select: {
            userType: true,
            userPhoneNumber: true,
            userName: true,
          },
        },
      },
      where: {
        User: {
          userType: 'personal',
        },
      },
    });
    return res.send({ food });
  } catch (error) {
    res.status(500).send(error);
  }
};

export const getPersonalFood: RouteHandlerMethod = async (req, res) => {
  try {
    const { ...food } = await prisma.food.findMany({
      include: {
        User: {
          select: {
            userType: true,
            userPhoneNumber: true,
            userName: true,
          },
        },
      },
      where: {
        User: {
          userType: 'personal',
        },
      },
    });
    return res.send({ food });
  } catch (error) {
    res.status(500).send(error);
  }
};

export const removeAllFood: RouteHandlerMethod = async (req, res) => {
  try {
    const { ...food } = await prisma.food.deleteMany();
    return res.send({ food });
  } catch (error) {
    res.status(500).send(error);
  }
};

export const addFood: RouteHandlerMethod = async (req, res) => {
  try {
    const {
      createdAt,
      updatedAt,
      foodTitle,
      foodPrice,
      foodCategory,
      foodDescription,
      foodImage,
      pickUpTimes,
      userId,
    } = req.body as any;

    const { ...food } = await prisma.food.create({
      data: {
        createdAt,
        updatedAt,
        foodTitle,
        foodPrice,
        foodCategory,
        foodDescription,
        foodImage,
        pickUpTimes,
        userId,
      },
    });
    return res.send({ food });
  } catch (error) {
    res.status(500).send(error);
  }
};

export const getUserFood: RouteHandlerMethod = async (req, res) => {
  try {
    const { userId } = req.query as any;
    const userFood = await prisma.food.findMany({
      where: {
        userId: parseInt(userId),
      },
    });
    return res.send({ userFood });
  } catch (error) {
    res.status(500).send(error);
  }
};

export const removeFood: RouteHandlerMethod = async (req, res) => {
  try {
    const { foodId } = req.query as any;
    const { ...food } = await prisma.food.delete({
      where: {
        id: parseInt(foodId),
      },
    });
    return res.send({ food });
  } catch (error) {
    res.status(500).send(error);
  }
};

export const updateFood: RouteHandlerMethod = async (req, res) => {
  try {
    const { foodId } = req.query as any;
    const {
      createdAt,
      updatedAt,
      foodTitle,
      foodPrice,
      foodCategory,
      foodDescription,
      foodImage,
      pickUpTimes,
      userId,
    } = req.body as any;

    const { ...food } = await prisma.food.update({
      where: {
        id: parseInt(foodId),
      },
      data: {
        createdAt,
        updatedAt,
        foodTitle,
        foodPrice,
        foodCategory,
        foodDescription,
        foodImage,
        pickUpTimes,
        userId,
      },
    });
    return res.send({ food });
  } catch (error) {
    res.status(500).send(error);
  }
};

export const getUserOfficialFood: RouteHandlerMethod = async (req, res) => {
  try {
    const userFood = await prisma.food.groupBy({
      by: [],
    });
    return res.send({ userFood });
  } catch (error) {
    res.status(500).send(error);
  }
};
