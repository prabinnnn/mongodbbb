const router = require("express").Router();
const bookrouter = require("../module/book/book.routes");
router.use("/api/v2", bookrouter);
module.exports = router;
