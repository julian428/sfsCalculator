import "./Calculator.css";
import { useState } from "react";
import Input from "./UI/Input";

const Calculator = () => {
  const [thrust, setThrust] = useState(0);
  const [lsp, setLsp] = useState(0);
  const [gravity, setGravity] = useState(0);
  const [capacity, setCapacity] = useState(0);
  const calculate = () => {
    let time = (capacity * 1000) / ((thrust / (gravity * lsp)) * 1000) / 10;
    time = Math.round(time * 100) / 100;
    const t = document.querySelector(".time");
    t.innerHTML = time + "s";
  };

  return (
    <>
      <div className="calculator-wrapper">
        <Input
          label="Engine thrust"
          placeholder="in tons"
          id="thrust"
          setFunction={setThrust}
        />
        <Input
          label="Engine efficiency"
          placeholder="lsp"
          id="lsp"
          setFunction={setLsp}
        />
        <Input
          label="Gravity"
          placeholder="in m/s2"
          id="gravity"
          setFunction={setGravity}
        />
        <Input
          label="Tank capacity"
          placeholder="in tons"
          id="capacity"
          setFunction={setCapacity}
        />
      </div>
      <div className="result">
        <button onClick={calculate}>Calculate</button>
        <section className="time">0s</section>
      </div>
    </>
  );
};

export default Calculator;
