import { useDispatch, useSelector } from "react-redux";
import "./App.css";

function App() {
  const dispatch = useDispatch();
  const cash = useSelector((state) => state.cash);
  const getCash = (cash) => {
    dispatch({ type: "GET_CASH", payload: cash });
  };
  const addCash = (cash) => {
    dispatch({ type: "ADD_CASH", payload: cash });
  };

  return (
    <div className="App">
      <div style={{ fontSize: "45px" }}>{cash}</div>
      <div
        style={{ display: "flex", justifyContent: "center", fontSize: "45px" }}
      >
        <button onClick={() => getCash(Number(prompt()))}>Get Cash</button>
        <button onClick={() => addCash(Number(prompt()))}>Add Cash</button>
      </div>
    </div>
  );
}

export default App;
