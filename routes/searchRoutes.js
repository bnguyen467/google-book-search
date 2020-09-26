const router = require("express").Router();
const axios = require("axios");
const { Book } = require("../models");

router.get("/books/:search", (req, res) => {
  axios
    .get(`https://www.googleapis.com/books/v1/volumes?q=${req.params.search}`)
    .then(({ data }) => {
      let bigBook = data.items;

      // bigBook.map((book) => ({
      //   title: book.volumeInfo.title,
      //   authors: book.volumeInfo.authors,
      //   description: book.volumeInfo.description,
      //   image: book.volumeInfo.imageLinks.thumbnail,
      //   link: book.volumeInfo.infoLink,
      //   apiId: book.id,
      // }));

      let books = [];

      bigBook.forEach((element) => {
        let bookInfo = element.volumeInfo;
        let object = {
          title: bookInfo.title,
          authors: bookInfo.authors,
          description: bookInfo.description,
          image: bookInfo.imageLinks.thumbnail,
          link: bookInfo.infoLink,
          apiId: element.id,
        };

        books.push(object);
      });
      // console.log(books);
      res.json(books);
    })
    .catch((err) => console.log(err));
});

module.exports = router;
