import React, { useState } from "react";

import {
  Header,
  Container,
  MobileItems,
  Item,
  Menu,
  Up,
  Down,
  Apple,
  Bag,
} from "../components/header";
import {
  Hero,
  TitleContainer,
  Heading,
  SubHeading,
} from "../components/section";
import Large from "../components/largeItems";

const textContainer = {
  maxWidth: "fit-content",
  margin: "0 auto",
};

function Home() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Header open={open}>
        <Container>
          <MobileItems>
            <Item>
              <Menu onClick={() => setOpen(!open)}>
                <Up open={open} />
                <Down open={open} />
              </Menu>
            </Item>
            <Item>
              <Apple href="/" />
            </Item>
            <Item>
              <Bag href="/" />
            </Item>
          </MobileItems>
          {/* Default items */}
          <Large />
        </Container>
      </Header>
      <Hero>
        <div style={textContainer}>
          <TitleContainer>
            <Heading>
              Never, ever be afraid <br /> to make some noise <br /> and get in
              good trouble, <br />
              necessary trouble.
            </Heading>
          </TitleContainer>
          <SubHeading>Rep. John Lewis (1940-2020)</SubHeading>
        </div>
      </Hero>
    </>
  );
}

export default Home;
