import { RouteOptions } from 'fastify';
import * as foodController from '../controllers/foodController';
import * as userController from '../controllers/userController';
import { upload } from '../helpers/multer';

type RouteConfig = Record<string, RouteOptions>;

const routes: RouteConfig = {
  getOfficialFood: {
    method: 'GET',
    url: '/officialfood',
    handler: foodController.getOfficialFood,
  },
  getPersonalFood: {
    method: 'GET',
    url: '/personalfood',
    handler: foodController.getPersonalFood,
  },
  addFood: {
    method: 'POST',
    url: '/addfood',
    preHandler: upload.single('image'),
    handler: foodController.addFood,
  },
  removeFood: {
    method: 'DELETE',
    url: '/removefood/:foodId',
    handler: foodController.removeFood,
  },
  updateFood: {
    method: 'PUT',
    url: '/updateFood/:foodId',
    handler: foodController.updateFood,
  },
  removeAllFood: {
    method: 'DELETE',
    url: '/removeallfood',
    handler: foodController.removeAllFood,
  },
  getUserFood: {
    method: 'GET',
    url: '/food/:userId',
    handler: foodController.getUserFood,
  },
  getDetailFood: {
    method: 'GET',
    url: '/food/detailfood/:id',
    handler: foodController.getDetailFood,
  },
  login: {
    method: 'POST',
    url: '/login',
    handler: userController.login,
  },
  signUp: {
    method: 'POST',
    url: '/signup',
    handler: userController.signUp,
  },
  getAllUser: {
    method: 'GET',
    url: '/user',
    handler: userController.getAllUser,
  },
  removeAllUser: {
    method: 'DELETE',
    url: '/removealluser',
    handler: userController.removeAllUser,
  },
};

export const renderRoutes = Object.values(routes);
