const router = require("express").Router();
const axios = require("axios");
const { Book } = require("../models");

router.get("/books/:search", (req, res) => {
  axios
    .get(
      `https://www.googleapis.com/books/v1/volumes?q=${req.params.search}&key=AIzaSyBymPl16bOUFmiR-v5bkW_LX1hphskppGE`
    )
    .then(({ data }) => console.log(data))
    // .then((apiBook) =>
    //   Book.find().then((books) =>
    //     apiBook.filter((data) =>
    //       books.every((dbData) => dbData.title !== data.title)
    //     )
    //   )
    // )
    .then((book) => res.json(book))
    .catch((err) => console.log(err));
});

module.exports = router;
