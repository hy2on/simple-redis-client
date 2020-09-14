import React from "react";
import { Search, Connect } from "../components";

const Header: React.FC = () => {
  return (
    <header>
      <Connect></Connect>
      <Search></Search>
    </header>
  );
};

export default Header;
