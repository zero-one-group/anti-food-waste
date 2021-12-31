import { RouteOptions } from 'fastify';
import * as foodController from '../controllers/foodController';
import * as userController from '../controllers/userController';

type RouteConfig = Record<string, RouteOptions>;

const routes: RouteConfig = {
  getAllFood: {
    method: 'GET',
    url: '/food',
    handler: foodController.getAllFood,
  },
  addFood: {
    method: 'POST',
    url: '/addfood',
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
};

export const renderRoutes = Object.values(routes);
