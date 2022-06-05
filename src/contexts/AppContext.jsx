import React, { createContext, useState } from 'react';

export const AppContext = createContext({});

function AppProvider({ children }) {
  const [min, setMin] = useState(1);
  const [max, setMax] = useState(10);

  function handleChangeMin(event) {
    setMin(+event.target.value);
  }

  function handleChangeMax(event) {
    setMax(+event.target.value);
  }


  return (
    <AppContext.Provider
      value={{
        min,
        max,
        handleChangeMin,
        handleChangeMax
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export default AppProvider;
