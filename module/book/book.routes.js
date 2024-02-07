const router = require("express").Router();
const bookcontroller = require("./book.controller");
const { validate } = require("./book.validator");
router.get("/", (req, res, next) => {
  try {
    result = bookcontroller.get();
    res.json({ msg: result });
  } catch (e) {
    next(e);
  }
});
router.get("/", (req, res, next) => {
  try {
    result = bookcontroller.getByid(req.body);
    res.json({ msg: result });
  } catch (e) {
    next(e);
  }
});
router.post("/", validate, (req, res, next) => {
  try {
    result = bookcontroller.create(req.body);
    res.json({ msg: result });
  } catch (e) {
    next(e);
  }
});
router.put("/:id", (req, res, next) => {
  try {
    result = bookcontroller.updateByid(req.body, req.params.id);
    res.json({ msg: result });
  } catch (e) {
    next(e);
  }
});
router.patch("/:id", (req, res, next) => {
  try {
    result = bookcontroller.updateByid(req.body, req.params.id);
    res.json({ msg: result });
  } catch (e) {
    next(e);
  }
});
router.delete("/:id", (req, res, next) => {
  try {
    result = bookcontroller.updateByid(req.params.id);
    res.json({ msg: result });
  } catch (e) {
    next(e);
  }
});
module.exports = router;
