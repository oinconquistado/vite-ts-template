import React from "react";
import DataContext from "@/context/DataContext";

const Counter = () => {
  const { counter } = DataContext();
  const { count, setCount } = counter;

  return (
    <div className='mt-8'>
      <div className='grid place-items-center m-4'>
        <p className='text-3xl'>{count}</p>
      </div>
      <div>
        <button
          className='bg-slate-200 h-10 w-8'
          onClick={() => setCount(count + 1)}>
          +
        </button>
        <button
          className='bg-slate-200 h-10 w-8'
          onClick={() => setCount(count - 1)}>
          -
        </button>
        <button className='bg-slate-200 h-10 w-20' onClick={() => setCount(0)}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default Counter;
