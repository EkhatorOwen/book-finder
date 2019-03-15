import React from "react";

import {
  CardContainer,
  ImageContainer,
  TextContainer,
  Text
} from "./CardStyle";
import { Image, Link } from "./HomeStyle";

const Carda = ({book:{title, authors, imageLinks:{thumbnail}, publisher, infoLink}}) => {
 //console.log(thumbnail)
 

  return (
    <>
      <CardContainer>
        <ImageContainer>
          <Image src={thumbnail} />
        </ImageContainer>
        <TextContainer>
          <Text>
            <b>{title}</b>
          </Text>
         <Text><b>By:</b>{authors && authors.map(author=>author)}</Text>
          <Text><b>Published by:</b>{publisher}</Text>
          <Link target="_blank" href={infoLink}>See this book.</Link>
        </TextContainer>
      </CardContainer>
    </>
  );
};

export default Carda;

//title
//author
//published by
//link to google book
//link to image
