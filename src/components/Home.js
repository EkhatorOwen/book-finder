import React, { useState } from "react";
import { Container, SearchDiv, ResultDiv } from "./HomeStyle";
import { Input } from "antd";

const Search = Input.Search;

const Home = () => {
  return (
    <Container>
      <SearchDiv>
      <h2>BOOK FINDER</h2>
        <Search
          placeholder="input book title..."
          onSearch={value => console.log(value)}
          size="large"
          style={{ width: "60%" }}
          enterButton="Search"
        />
      </SearchDiv>

      <ResultDiv />
    </Container>
  );
};

export default Home;
