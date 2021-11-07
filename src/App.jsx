import React from "react";
import styled from '@emotion/styled';
import Skeleton from "./components/Skeleton";

const Base = styled.div`
  display: grid;
  width: 100%
  grid-template-columns: repeat(5, 1fr);
  column-gap: 12px;
  row-gap: 24px
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: rgb(0 0 0 / 4%) 0px 4px 16px 0px;
  border-radius: 4px;
`;

const ImageWrapper = styled.div`
  width: 100%;
`;

const Image = styled.img`
  width: 500px;
  height: 500px;
  object-fit: cover;
`;

const Info = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  flex: 1 1 0%;
`;

const Title = styled.h4`
  margin: 0;
  padding: 0;
  font-size: 24px;
`;

const Description = styled.p`
  margin: 8px 0 0 0;
  padding: 0;
  font-size: 16px;
`;

const Placeholder = () => (
  <Container>
    
  </Container>
)

const Item = () => {
  return (
    <Container>
      <ImageWrapper>
        <Image src="http://www.animaltogether.com/news/photo/201908/403_901_916.png" alt="잠자는 고양이" />
      </ImageWrapper>
      <Info>
        <Title>Cat taking a nap</Title>
        <Description>zzzzzzzzzz</Description>
      </Info>
    </Container>
  )
}

function App() {
  return (
    <Base>
      {
        Array.from({ length: 25 }).map((_, idx) => (
          <Item key={idx} />
        ))
      }
    </Base>
  );
}

export default App;
