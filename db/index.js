module.exports = require("mongoose").connect(
  process.env.MONGODB_URI || "mongodb://localhost/googlebooks",
  {
    useNewUrlParser: true,
    useFindAndModify: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  }
);
