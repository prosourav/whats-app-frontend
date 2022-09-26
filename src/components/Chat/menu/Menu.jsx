import React, { useState } from "react";
import Contacts from "./Contacts";
import MenuHeader from "./MenuHeader";
import Search from "./Search";

const Menu = () => {
  const [text, setText] = useState("");
  return (
    <div>
      <MenuHeader />
      <Search {...{ setText }} />
      <Contacts {...{ text }} />
    </div>
  );
};

export default Menu;
