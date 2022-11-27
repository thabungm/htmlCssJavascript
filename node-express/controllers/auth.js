import User from '../models/User';
export const register = async (data) => {
  const user = new User(data);
  await user.save();

  return user;
};
