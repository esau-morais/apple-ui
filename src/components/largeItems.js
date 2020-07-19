import React from "react";

import { Items, Item, Link, Apple, Search, Bag } from "../components/header";

function Large() {
  return (
    <Items>
      <Item>
        <Apple href="/" />
      </Item>
      <Item>
        <Link href="/">Mac</Link>
      </Item>
      <Item>
        <Link href="/">iPod</Link>
      </Item>
      <Item>
        <Link href="/">iPhone</Link>
      </Item>
      <Item>
        <Link href="/">Watch</Link>
      </Item>
      <Item>
        <Link href="/">TV</Link>
      </Item>
      <Item>
        <Link href="/">Music</Link>
      </Item>
      <Item>
        <Link href="/">Support</Link>
      </Item>

      <Item>
        <Search href="/" />
      </Item>
      <Item>
        <Bag href="/" />
      </Item>
    </Items>
  );
}

export default Large;
