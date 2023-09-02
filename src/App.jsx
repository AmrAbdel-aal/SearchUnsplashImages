import { useState } from "react";

import "./App.css";
import SiteTheme from "./components/SiteTheme";
import Search from "./components/Search";
import Gallary from "./components/Gallary";

function App() {
  console.log("dasw");
  return (
    <main>
      <SiteTheme></SiteTheme>
      <Search></Search>
      <Gallary></Gallary>
    </main>
  );
}

export default App;
