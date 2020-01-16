import React, { useState, createContext } from "react";

export const TargetListContext = createContext();

export const TargetListConsumer = TargetListContext.Consumer;
export const TargetListProvider = props => {
  const [list, setList] = useState([]);

  return (
    <div>
      <TargetListContext.Provider value={[list, setList]}>
        {props.children}
      </TargetListContext.Provider>
    </div>
  );
};
