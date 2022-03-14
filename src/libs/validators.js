const { check } = require("express-validator");

const validator = [
  check("pageNumber")
    .optional()
    .isInt({ gt: 0 })
    .withMessage("Page number should be a positive integer (greater than 0)"),
  check("pageSize")
    .optional()
    .isInt({ gt: 0 })
    .withMessage("Page size should be a positive integer (greater than 0)")
 ];



module.exports = { validator };
