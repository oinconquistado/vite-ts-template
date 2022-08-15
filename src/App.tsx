import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import DataContext from "@/context/DataContext";

function App() {
  const { counter } = DataContext();
  const { count, setCount } = counter;

  return (
    <div className='App'>
   <p className="bg-black	">Teste</p>
    </div>
  );
}

export default App;
