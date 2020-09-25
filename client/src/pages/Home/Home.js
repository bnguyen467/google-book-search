import React, { useState } from "react";
import BookContext from "../../utils//BookContext";
import Typography from "@material-ui/core/Typography";
import Form from "../../components/Form";
import BookCard from "../../components/BookCard";
import API from "../../utils/API";

const Home = () => {
  const [bookState, setBookState] = useState({
    search: "",
    book: [],
  });

  bookState.handleInputChange = (event) => {
    setBookState({ ...bookState, [event.target.name]: event.target.value });
  };

  bookState.handleSearchBook = (event) => {
    event.preventDefault();
    API.getBook(bookState.search)
      .then(({ data }) => {
        setBookState({ ...bookState, book: data, search: "" });
      })
      .catch((err) => console.error(err));
  };

  bookState.handleSaveBook = (title) => {
    const saveBook = bookState.book.filter((x) => x.title === title)[0];
    API.saveBook(saveBook).then(() => {
      const book = bookState.book.filter((x) => x.title !== title);
      setBookState({ ...bookState, book });
    });
  };

  return (
    <>
      <hr />
      <Typography variant="h6">Search for Books...</Typography>
      <BookContext.Provider value={bookState}>
        <Form />
        {bookState.book.length > 0
          ? bookState.book.map((element) => (
              <BookCard
                key={element.title}
                media={element}
                handleSaveBook={bookState.handleSaveBook}
              />
            ))
          : null}
      </BookContext.Provider>
    </>
  );
};

export default Home;
