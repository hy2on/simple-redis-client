import React from "react";
import { Header, KeyList, ValueInfo, Footer } from "./layouts";
import "./styles/normalize.css";
import "./styles/style.css";

const App = () => {
  return (
    <div className="contentWrap">
      <Header></Header>
      <section>
        <KeyList></KeyList>
        <ValueInfo></ValueInfo>
      </section>
      <Footer></Footer>
    </div>
  );
};

export default App;
