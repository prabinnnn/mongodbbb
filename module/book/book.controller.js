const bookmodel = require("./book.routes");
const create = (payload) => {
  return bookmodel.create(payload);
};
const get = () => {
  return bookmodel.find();
};
const getByid = ({ _id }) => {
  return bookmodel.findOne({ _id });
};
const updateByid = ({ _id }, payload) => {
  return bookmodel.updateOne({ _id }, payload);
};
const removeByid = ({ _id }) => {
  return bookmodel.deleteOne({ _id });
};

module.exports = { create, get, getByid, updateByid, removeByid };
