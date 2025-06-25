import React from "react";
import "./app.css";
import Home from "./Components/Home";
import Header from "./Components/Header";
import World from "./Components/World";
import Business from "./Components/Business";
import Technology from "./Components/Technology";
import Sports from "./Components/Sports";
import Footer from "./Components/Footer";
import Newsletter from "./Components/Newsletter";

const App = () => {
  return (
    <div>
      <Header />
      <Home />
      <World />
      <Business />
      <Technology />
      <Sports />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default App;
