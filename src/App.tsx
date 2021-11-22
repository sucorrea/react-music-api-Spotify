import React from "react";
import Header from "./Components/Header";
import SearchBar from "./Components/SearchBar";
import "./index.css";
import Base from "./Template/Default";

const App = () => {
  return (
    <Base>
      <Header />
      <SearchBar />
    </Base>
  );
};

export default App;
