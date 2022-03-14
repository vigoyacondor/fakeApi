const { validationResult } = require("express-validator");
const createError = require("http-errors");

const { getCandidates } = require("../repositories/fake.repository");

const welcomeRouteHandler = (req, res) => {
  try {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return next(createError(400, errors.array()));
    }
    let { offset, limit } = req.query;

    const { employerId, processId} = req.params;

    const data = getCandidates({
      employerId,
      processId,
      offset: +offset,
      limit: +limit,
    });

    return res.status(200).json({
      ...data,
    });
  } catch (error) {
    res.status(500).json({ message: " Error del servidor", fix: `${error}` });
  }

  res.send("Hello, welcome to my API fake-api");
};

module.exports = {
  welcomeRouteHandler,
};
