import "./App.css";
import { useEffect, useState } from "react";
import Canvas from "./Convas";

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(
      "https://api.binance.com/api/v3/klines?symbol=BTCEUR&interval=1d&limit=200"
    )
      .then((res) => res.json())
      .then((res) => {
        setData(res);
      });
  }, []);

  console.log(data);
  return (
    <div className="App">
      <h1>비트코인 1시간 캔들 차트</h1>
      <section>
        <Canvas />
      </section>
    </div>
  );
}

export default App;
