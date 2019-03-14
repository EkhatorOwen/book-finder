import React from "react";

import {
  CardContainer,
  ImageContainer,
  TextContainer,
  Text
} from "./CardStyle";
import { Image } from "./HomeStyle";

const Carda = ({props}) => {
  console.log(props)
  return (
    <>
      <CardContainer>
        <ImageContainer>
          <Image height="50" width="50" />
        </ImageContainer>
        <TextContainer>
          <Text>
            <b></b>
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
