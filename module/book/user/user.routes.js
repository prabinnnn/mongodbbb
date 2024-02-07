const router = require("express").Router();
const usercontroller = require("./user.validator");
const { validate } = require("./user.validator");
router.get("/", (req, res, next) => {
  try {
    result = usercontroller.get();
    res.json({ msg: result });
  } catch (e) {
    next(e);
  }
});
router.get("/", (req, res, next) => {
  try {
    result = usercontroller.getByid(req.body);
    res.json({ msg: result });
  } catch (e) {
    next(e);
  }
});
router.post("/", validate, (req, res, next) => {
  try {
    result = usercontroller.create(req.body);
    res.json({ msg: result });
  } catch (e) {
    next(e);
  }
});
router.put("/:id", (req, res, next) => {
  try {
    result = usercontroller.updateByid(req.body, req.params.id);
    res.json({ msg: result });
  } catch (e) {
    next(e);
  }
});
router.patch("/:id", (req, res, next) => {
  try {
    result = usercontroller.updateByid(req.body, req.params.id);
    res.json({ msg: result });
  } catch (e) {
    next(e);
  }
});
router.delete("/:id", (req, res, next) => {
  try {
    result = usercontroller.updateByid(req.params.id);
    res.json({ msg: result });
  } catch (e) {
    next(e);
  }
});
module.exports = router;
