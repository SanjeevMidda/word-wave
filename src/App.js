import { useState } from "react";
import "./index.css";

function App() {
  const [status, setStatus] = useState(true);
  return (
    <div className="App" onClick={() => setStatus(!status)}>
      <h3 className={status === true ? "moveup" : "moveDown"}>A</h3>
      <h3 className={status === false ? "moveup" : "moveDown"}>B</h3>
      <h3 className={status === true ? "moveup" : "moveDown"}>C</h3>
      <h3 className={status === false ? "moveup" : "moveDown"}>D</h3>
      <h3 className={status === true ? "moveup" : "moveDown"}>E</h3>
      <h3 className={status === false ? "moveup" : "moveDown"}>F</h3>
      <h3 className={status === true ? "moveup" : "moveDown"}>G</h3>
      <h3 className={status === false ? "moveup" : "moveDown"}>H</h3>
      <h3 className={status === true ? "moveup" : "moveDown"}>I</h3>
      <h3 className={status === false ? "moveup" : "moveDown"}>J</h3>
    </div>
  );
}

export default App;
