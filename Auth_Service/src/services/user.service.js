import User from "../models/user.model.js";

export const findOne = async (details) => {
  return await User.findOne(details);
};
export const find = async (details) => {
  return await User.find(details);
};
export const addOne = async (data) => {
  return await User.create(data);
};
export const deleteOne = async (details) => {
  return await User.deleteOne(details);
};
export const findOneById = async (id) => {
  return await User.findById(id);
};
