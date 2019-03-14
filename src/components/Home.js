import React, { useState } from "react";

import Carda from './Card'

import {
  Container,
  SearchDiv,
  ResultWrapper,
  ResultDiv,
  Link,
  LoadingDiv,
  Image
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
  const [isLoading, setLoading] = useState(false);

  async function handleSubmit(value) {
    if (!value) {
      updateEmpty(true);
      return;
      // updateBooks([]);
    } else {
      setLoading(true);
      updateEmpty(false);

      try {
        const res = await fetch(
          `https://www.googleapis.com/books/v1/volumes?q=${value}&key=${
            process.env.REACT_APP_GOOGLE_API_KEY
          }`
        );
        setLoading(false);
        const { items } = await res.json();

        updateBooks(items);
      } catch (e) {
        setValue("something went wrong, please refresh");
      }
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
        {isLoading && (
          <LoadingDiv>
            {" "}
            <Image
              height="50%"
              width="50%"
              src="https://media.giphy.com/media/11FuEnXyGsXFba/giphy.gif"
              alt="loadind gif"
            />{" "}
          </LoadingDiv>
        )}
        {!isLoading && (
          <ResultDiv>
            {books &&
              books.map((book, i) => (
                <Carda
                book={book.volumeInfo}
                key={i}
                
                />
                // <Card
                //   key={i}
                //   hoverable
                //   style={{ width: 240, padding: "5px" }}
                //   cover={
                //     <img
                //       alt={book.volumeInfo && book.volumeInfo.title}
                //       src={
                //         book.volumeInfo.imageLinks &&
                //         book.volumeInfo.imageLinks.thumbnail
                //       }
                //     />
                //   }
                // >
                //   <Meta
                //     title={`${book.volumeInfo && book.volumeInfo.title}`}
                //     description={`Author: ${book.volumeInfo.authors &&
                //       book.volumeInfo.authors.map(elem => elem)}`}
                //   />
                //   <p>
                //     Published by: {book.volumeInfo && book.volumeInfo.publisher}
                //   </p>
                //   <Link
                //     target="_blank"
                //     href={book.volumeInfo && book.volumeInfo.infoLink}
                //   >
                //     Click
                //   </Link>
                // </Card>
              ))}
          </ResultDiv>
        )}
      </ResultWrapper>
    </Container>
  );
};

export default Home;
