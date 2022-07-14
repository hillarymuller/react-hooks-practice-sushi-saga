import React from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi";

function SushiContainer({ sushiList, onEat, handleMore }) {
  
  const sushis = sushiList.slice(0, 4).map(sushi => 
    <Sushi key={sushi.id} sushi={sushi} onEat={onEat} />
  );

  return (
    <div className="belt">
      {sushis}
      <MoreButton handleMore={handleMore} />
    </div>
  );
}

export default SushiContainer;
