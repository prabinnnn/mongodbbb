const bookmodel = require("./book.routes");
const create = (payload) => {
  return bookmodel.create(payload);
};
const get = () => {
  return bookmodel.find();
};
const getByid = ({ _id }) => {
  return bookmodel.findOne();
};
const updateByid = ({ _id }) => {
  return bookmodel.updateOne();
};
const removeByid = ({ _id }) => {
  return bookmodel.deleteOne();
};

modules.exports = { create, get, getByid, updateByid, removeByid };
