import React, { createContext, useContext } from 'react';
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

  const { attributes, methods } = useTasks();

  return (<>
    <Context.Provider value={{ attributes, methods }}>
      <div className={ className }>
        { children }
      </div>
    </Context.Provider>
  </>);
};

export default ContextProvider;