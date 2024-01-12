import React from "react";
import Counter from "./Counter";

const App = () => {
  return (
    <div>
      <Counter>
        <Counter.Lable>Compound Component Pattern </Counter.Lable>
        <Counter.Decrease icon="-" />
        <Counter.Count />
        <Counter.Increase icon="+" />
      </Counter>
      <br />
      <br />
      <Counter>
        <Counter.Decrease icon="<" />
        <Counter.Count />
        <Counter.Increase icon=">" />
        <Counter.Lable>Compound Component Pattern </Counter.Lable>
      </Counter>
    </div>
  );
};

export default App;
