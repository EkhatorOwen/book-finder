import React from "react";

import {
  CardContainer,
  ImageContainer,
  TextContainer,
  Text
} from "./CardStyle";
import { Image } from "./HomeStyle";

const Carda = ({book:{title, authors, imageLinks:{thumbnail}, publisher, infoLink}}) => {
  console.log(publisher)
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
