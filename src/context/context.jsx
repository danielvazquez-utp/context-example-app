import React, { createContext, useContext, useState } from 'react';

const CounterContext = createContext();

export const CounterProvider = ({ children }) => {
  const [counter, setCounter] = useState(0);

  const increment = () => {
    setCounter(counter+1);
  };

  const decrement = () => {
    setCounter(counter-1)
  };

  const reset = () => {
    setCounter(0)
  };

  return (
    <CounterContext.Provider 
        value={
            { 
                counter, 
                increment, 
                decrement, 
                reset 
            }
        }
    >
      {children}
    </CounterContext.Provider>
  );
};

export const useCounter = () => {
    return useContext(CounterContext);
};