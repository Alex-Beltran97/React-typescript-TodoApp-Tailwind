import React, { createContext, useContext, Fragment } from 'react';
import { useTasks } from '../hooks';

interface Props {
  children: React.ReactNode;
  className: string;
};

const Context = createContext<IContext | null>(null);

export const useCx = () => {
  const cx = useContext(Context);
  if (!cx) return;
  return cx;
};

const ContextProvider = ({ children, className } : Props) => {

  const { tasks } = useTasks();

  return (<>
    <Context.Provider value={{ tasks }}>
      <div className={ className }>
        { children }
      </div>
    </Context.Provider>
  </>);
};

export default ContextProvider;