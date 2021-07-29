import React from "react";
import Card from "./components/Card";
import CardsData  from "./components/CardsData"; 
import "./App.css";

const App = () => {

  function nCards(val) {
    return (
      <Card 
        imgsrc = { val.imgsrc }
        title = { val.title }
        sname = { val.sname }
        link = { val.links }
      />
    );
  }
  return(
    <>
      <h1 className = "heading-style"> List of top 3 Netfllix Series </h1>
      { CardsData.map(nCards) }
    </>
  )
}

export default App;