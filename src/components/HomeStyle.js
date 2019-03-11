import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
`;

export const SearchDiv = styled.div`
  height: 30%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const ResultWrapper = styled.div`
  height: 70%;
  padding: 1%;
`;

export const ResultDiv = styled.div`
  height: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const Link = styled.a`
  background-color: #40a9ff;
  color: white;
  padding: 10px 21px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  border-radius: 15%;
`;

export const LoadingDiv = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Image = styled.img`
  height: ${props => props.theme.height};
  width: ${props => props.theme.width};
`;
