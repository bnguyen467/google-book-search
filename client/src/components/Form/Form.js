import React, { useContext } from "react";
import BookContext from "../../utils/BookContext";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import SearchIcon from "@material-ui/icons/Search";

const Form = () => {
  const { search, handleInputChange, handleSearchBook } = useContext(
    BookContext
  );

  return (
    <form onSubmit={handleSearchBook}>
      <TextField
        label="Search"
        variant="outlined"
        name="search"
        value={search}
        onChange={handleInputChange}
      />
      <p>
        <Button
          variant="contained"
          color="primary"
          endIcon={<SearchIcon />}
          onClick={handleSearchBook}
        >
          Search
        </Button>
      </p>
    </form>
  );
};

export default Form;
