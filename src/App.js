import { useState } from "react";
import Sample from "./component/sample";

function App() {
  // const [data, setData] = useState("");
  // const [value, setValue] = useState("");
  // const Handdler = () => {
  //   setValue(data);
  // };
  return (
    <div>
      {/* <input type="text" onChange={(event) => setData(event.target.value)} />
      <button onClick={() => Handdler()}>Click</button>
      <div>{value}</div> */}
      <Sample />
    </div>
  );
}

export default App;
