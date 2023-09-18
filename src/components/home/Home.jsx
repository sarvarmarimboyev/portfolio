import React from "react";
import "./home.css";
import Data from "./Data.jsx"
import Social from "./Social";
import Scrolldown  from "./Scrolldown";
export default function Home() {
  return (
    <section className="home section" id="home">
      <div className="home__contanier container grid">
        <div className="home__content grid">
          <Social />
          <div className="home__img"></div>
<Data/>
        </div>

        <Scrolldown/>
      </div>
    </section>
  );
}
