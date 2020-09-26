import React, { useState } from "react";
import API from "../../utils/API";

const Home = () => {
  const [bookState, setBookState] = useState({
    search: "",
    book: [],
  });

  bookState.handleInputChange = (event) => {
    setBookState({ ...bookState, [event.target.name]: event.target.value });
  };

  bookState.handleSearchAPI = (event) => {
    event.preventDefault();

    API.getBook(bookState.search)
      .then(({ data }) => {
        console.log(data);
        setBookState({ ...bookState, book: data, search: "" });
      })
      .catch((err) => console.error(err));
  };

  bookState.handleSaveBook = (apiId) => {
    const saveBook = bookState.book.filter((x) => x.apiId === apiId)[0];
    API.saveBook(saveBook).then(() => {
      const book = bookState.book.filter((x) => x.apiId !== apiId);
      setBookState({ ...bookState, book });
    });
  };

  return (
    <>
      <h1>Search for your favorite novels.</h1>
      <form>
        <p>
          <label htmlFor="search">Search</label>
          <input
            type="text"
            name="search"
            value={bookState.search}
            onChange={bookState.handleInputChange}
          />
        </p>
        <p>
          <button onClick={bookState.handleSearchAPI}>Search</button>
        </p>
      </form>
      {bookState.book.length > 0
        ? bookState.book.map((book) => (
            <div key={book.apiId}>
              <img src={book.image} alt={book.title} />
              <hr />
              <h3>Title: {book.title}</h3>
              <h4>Author(s): {book.authors}</h4>
              <h5>Description: {book.description}</h5>
              <a href={book.link}>
                <button>View More</button>
              </a>
              <button onClick={() => bookState.handleSaveBook(book.apiId)}>
                Save
              </button>
            </div>
          ))
        : null}
    </>
  );
};

export default Home;
