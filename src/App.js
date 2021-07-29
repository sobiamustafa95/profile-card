import React from "react";
import Card from "./components/Card";
import CardsData  from "./components/CardsData"; 
import "./App.css";

const App = () => {

  return(
    <>
      <h1 className = "heading-style"> List of top 3 Netfllix Series </h1>
      <Card 
        imgsrc = { CardsData[0].imgsrc }
        title = { CardsData[0].title }
        sname = { CardsData[0].sname }
        link = { CardsData[0].links }
      />
      <Card 
        className = ""
        imgsrc = { CardsData[1].imgsrc }
        title = { CardsData[1].title }
        sname = { CardsData[1].sname }
        link = { CardsData[1].links }
      />
      <Card 
        className = ""
        imgsrc = { CardsData[2].imgsrc }
        title = { CardsData[2].title }
        sname = { CardsData[2].sname }
        link = { CardsData[2].links }
      />
    </>
  )
}

export default App;