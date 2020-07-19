import styled from "styled-components";

// Top Bar
export const Header = styled.header`
  position: fixed;
  width: 100%;
  height: ${({ open }) => (open ? "100%" : "4.4rem")};
  top: 0;
  z-index: 1400;
  background: ${({ open }) => (open ? "#000" : "#000c")};
  backdrop-filter: saturate(180%) blur(20px);

  @media screen and (max-width: 767px) {
    transition: background 0.36s cubic-bezier(0.32, 0.08, 0.24, 1),
      height 0.56s cubic-bezier(0.52, 0.16, 0.24, 1);
  }
`;

export const Container = styled.div`
  max-width: 98rem;
  margin: 0 auto;
  padding: 0 2.2rem;

  @media screen and (max-width: 767px) {
    padding: 0;
  }
`;

export const Items = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 -1rem;

  @media screen and (max-width: 767px) {
    display: none;
  }
`;

export const MobileItems = styled(Items)`
  display: none;

  @media screen and (max-width: 767px) {
    display: flex;
  }
`;

export const Item = styled.li`
  @media screen and (max-width: 767px) {
    width: 4.8rem;
    height: 4.8rem;
    display: flex;
    justify-content: center;
  }
`;

export const Link = styled.a`
  font-size: 1.4rem;
  color: #fff;
  padding: 0 1.4em;
  opacity: 0.7;

  :hover {
    opacity: 1;
    transition: opacity 0.5s;
  }
`;
// Top Bar

// Icons
const Icons = styled.a`
  width: 1.6rem;
  height: 4.4rem;
  color: #fff;
  opacity: 0.7;

  :hover {
    opacity: 1;
    transition: opacity 0.5s;
  }
`;

export const Apple = styled(Icons)`
  background: url("/images/icons/apple.svg") no-repeat center;
`;

export const Search = styled(Icons)`
  background: url("/images/icons/search.svg") no-repeat center;
`;

export const Bag = styled(Icons)`
  width: 1.4rem;
  background: url("/images/icons/bag.svg") no-repeat center;
`;
// Icons

// Burger
export const Menu = styled.div`
  position: relative;
  z-index: 1500;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const Burger = styled.span`
  position: absolute;
  width: 1.7rem;
  height: 1px;
  background: #fff;
  opacity: 0.7;
  transition: opacity 0.3s cubic-bezier(0.25, 0.1, 0.25, 1);
`;

export const Up = styled(Burger)`
  margin-top: 3px;
  margin-top: ${({ open }) => (open ? 0 : 3)};
  transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
  transition: transform 0.3192s 0.1s cubic-bezier(0.04, 0.04, 0.12, 0.96);
`;

export const Down = styled(Burger)`
  margin-top: ${({ open }) => (open ? 0 : "-0.4rem")};
  transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
  transition: transform 0.3192s 0.1s cubic-bezier(0.04, 0.04, 0.12, 0.96);
`;
// Burger
