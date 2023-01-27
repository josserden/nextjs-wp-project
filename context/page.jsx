import { createContext, useContext } from 'react';

const PageContext = createContext();

export const PageProvider = ({ value, children }) => {
  return <PageContext.Provider value={value}>{children}</PageContext.Provider>;
};

export const usePageContext = () => {
  const context = useContext(PageContext);

  if (!context) {
    throw new Error('usePageContext must be used within a PageProvider');
  }

  return context;
};
