import React, { useState } from "react";
import {
  Container,
  SearchDiv,
  ResultWrapper,
  ResultDiv,
  Link
} from "./HomeStyle";
import { Input, Card } from "antd";

const Search = Input.Search;
const { Meta } = Card;

const Home = () => {
  const [value, setValue] = useState(
    "Error: Please provide a search query first"
  );
  const [isEmpty, updateEmpty] = useState(false);
  const [books, updateBooks] = useState([]);

  async function handleSubmit(value) {
    // console.log(process.env.REACT_APP_GOOGLE_API_KEY)
    if (!value) {
      updateEmpty(true);
      updateBooks([]);
    } else {
      updateEmpty(false);
      const res = await fetch(
        `https://www.googleapis.com/books/v1/volumes?q=${value}&key=${
          process.env.REACT_APP_GOOGLE_API_KEY
        }`
      );
      const { items } = await res.json();


    // console.log(items);
     updateBooks(items);
    }
  }

  return (
    <Container>
      <SearchDiv>
        <h2>BOOK FINDER</h2>
        <Search
          placeholder="input book title or author..."
          onSearch={value => handleSubmit(value)}
          size="large"
          style={{ width: "60%" }}
          enterButton="Search"
        />
      </SearchDiv>

      <ResultWrapper>
        {isEmpty && <h3>{value}</h3>}
        <ResultDiv>
          {books && (books.map((book, i) => (
            <Card
              key={i}
              hoverable
              style={{ width: 240, padding: "5px" }}
              cover={
                <img
                  alt={book.volumeInfo.title}
                  src={book.volumeInfo.imageLinks.thumbnail}
                />
              }
            >
              <Meta
                title={`${book.volumeInfo.title}`}
                description={`Author: ${book.volumeInfo.authors && book.volumeInfo.authors.map(
                  elem => elem
                )}`}
              />
              <p>Published by: {book.volumeInfo.publisher}</p>
              <Link target="_blank" href={book.volumeInfo.infoLink}>
                Click
              </Link>
            </Card>
          )))}
        </ResultDiv>
      </ResultWrapper>
    </Container>
  );
};

export default Home;
