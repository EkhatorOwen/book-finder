import React, { useState } from "react";
import { Container, SearchDiv, ResultWrapper,ResultDiv } from "./HomeStyle";
import { Input } from "antd";

const Search = Input.Search;

const Home = () => {
  const [value, setValue] = useState("");
  function handleSubmit(value) {
    if (!value) {
      setValue("Error: Please provide a search query first");
    } else {
      setValue("");
    }
  }

  return (
    <Container>
      <SearchDiv>
        <h2>BOOK FINDER</h2>
        <Search
          placeholder="input book title..."
          onSearch={value => handleSubmit(value)}
          size="large"
          style={{ width: "60%" }}
          enterButton="Search"
        />
      </SearchDiv>

      <ResultWrapper>
        {<h3>{value}</h3> &&
        <ResultDiv></ResultDiv>}
      </ResultWrapper>
    </Container>
  );
};

export default Home;
