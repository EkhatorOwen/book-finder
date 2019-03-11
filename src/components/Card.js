import React from "react";

import {
  CardContainer,
  ImageContainer,
  TextContainer,
  Text
} from "./CardStyle";
import { Image } from "./HomeStyle";

const Card = ({ title, author, publisher, imageLink, bookLink }) => {
  return (
    <>
      <CardContainer>
        <ImageContainer>
          <Image height="50" width="50" />
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

export default Card;

//title
//author
//published by
//link to google book
//link to image
