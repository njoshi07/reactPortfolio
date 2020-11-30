import React from "react";
import { render } from "react-dom";

import Nav from "./nav";
import Showcase from "./showcase";
import Work from "./work";
import Hobbies from "./hobbies";
import Footer from "./footer";

const App = () => {
  return (
    <div>
      <Nav />
      <Showcase />
      <Work />
      <Hobbies />
      <Footer />
    </div>
  );
};

render(<App />, document.getElementById("root"));
