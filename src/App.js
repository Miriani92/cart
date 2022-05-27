import Header from "./components/Header";
import { useFetch } from "./store/useFetch";
import Cart from "./components/Cart";
import { useState } from "react";

function App() {
  const { items, loading } = useFetch();
  const [counter, setCounter] = useState(4);

  const getCount = (arg) => {
    setCounter(arg);
  };

  return (
    <div className="App">
      <Header count={counter} />
      {loading ? <h1>Loading</h1> : <Cart items={items} con={getCount} />}
    </div>
  );
}

export default App;
