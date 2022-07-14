import React, { useEffect, useState } from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";

function App() {
  const [sushiList, setSushiList] = useState([]);
  const [money, setMoney] = useState(100);

  useEffect(() => {
    fetch(API)
    .then(r => r.json())
    .then(data => setSushiList(data.map(sushi => {
      return {...sushi, eaten: false}})))
  }, [])

  function handleEat(price, id, eaten) {
    if (money >= price && !eaten) {
      setMoney(currentMoney => currentMoney - price);
      setSushiList(sushiList.map(sushi => {
        return sushi.id === id ? {...sushi, eaten: true} : sushi
      }))
    }
  }
 const eatenSushi = sushiList.filter(sushi => sushi.eaten === true);

 function handleMore() {
  const shuffledArray = [...sushiList.slice(4), ...sushiList.slice(0,4)]
  setSushiList(shuffledArray)
 }

  return (
    <div className="app">
      <SushiContainer sushiList={sushiList} onEat={handleEat} handleMore={handleMore} />
      <Table money={money} plates={eatenSushi} />
    </div>
  );
}

export default App;
