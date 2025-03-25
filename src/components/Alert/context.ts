import { createContext, useContext } from 'react';

const AlertContext = createContext(false);

const useAlertContext = () => {
  const context = useContext(AlertContext);
  if (!context) {
    throw new Error(
      'Hierarchical Alert component is being used outside of the AlertProvider'
    );
  }
  return context;
};

export { AlertContext, useAlertContext };
