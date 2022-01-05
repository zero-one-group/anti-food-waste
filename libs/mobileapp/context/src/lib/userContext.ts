import { createContext } from 'react';

export const defaultUser = {
  id: 0,
  createdAt: '',
  updatedAt: '',
  userName: '',
  userAddress: '',
  userPhoneNumber: '',
  userEmail: '',
  userPassword: '',
  userType: '',
};

export const UserContext = createContext(defaultUser);
