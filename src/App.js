import React from "react";
import Card from "./components/Card";
import CardsData  from "./components/CardsData"; 
import "./App.css";

const App = () => {

  return(
    <>
      <h1 className = "heading-style"> List of top 3 Netfllix Series </h1>
      { CardsData.map((val) => {
        return (
          <Card
            key = { val.id } 
            imgsrc = { val.imgsrc }
            title = { val.title }
            sname = { val.sname }
            link = { val.links }
          />
        );
      })}
    </>
  )
}

export default App;