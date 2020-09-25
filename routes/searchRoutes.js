const router = require("express").Router();
const axios = require("axios");
const { Book } = require("../models");

router.get("/title/:search", (req, res) => {
  axios
    .get(
      `https://www.googleapis.com/books/v1/volumes?q=${req.params.search}&key=AIzaSyBymPl16bOUFmiR-v5bkW_LX1hphskppGE`
    )
    .then(({ data }) => {
      let books = [];
      let bookData = data.items;
      bookData.forEach((element) => {
        let bookInfo = element.volumeInfo;
        let bookData = {
          title: bookInfo.title,
          authors: bookInfo.authors,
          description: bookInfo.description,
          image: bookInfo.imageLinks.thumbnail,
          link: bookInfo.infoLink,
        };
        books.push(bookData);
      });
    })
    .then((apiBook) =>
      Book.find().then((element) =>
        apiBook.filter((data) =>
          element.every((dbData) => dbData.title !== data.title)
        )
      )
    )
    .then((element) => res.json(element))
    .catch((err) => console.log(err));
});

module.exports = router;
