import { createContext, useContext, useState } from "react";

const CounterContext = createContext();
const Counter = ({ children }) => {
  const [count, setCount] = useState(0);
  const increase = () => setCount((c) => c + 1);
  const decrease = () => setCount((c) => c - 1);
  return (
    <CounterContext.Provider value={{ count, increase, decrease }}>
      <span>{children}</span>
    </CounterContext.Provider>
  );
};

const Count = () => {
  const { count } = useContext(CounterContext);
  return <span>{count}</span>;
};

const Lable = ({ children }) => {
  return <span>{children}</span>;
};

const Increase = ({ icon }) => {
  const { increase } = useContext(CounterContext);
  return <button onClick={increase}>{icon}</button>;
};

const Decrease = ({ icon }) => {
  const { decrease } = useContext(CounterContext);
  return <button onClick={decrease}>{icon}</button>;
};

Counter.Count = Count;
Counter.Lable = Lable;
Counter.Increase = Increase;
Counter.Decrease = Decrease;
export default Counter;
