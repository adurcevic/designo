import { createContext, useState, useEffect, useContext } from 'react';

type ContextType = {
  accepted: boolean | undefined;
  accept: () => void;
};

const CookieContext = createContext<ContextType | undefined>(undefined);

type ProviderProps = { children: JSX.Element | JSX.Element[] };

const STORAGE_KEY = 'designo.cookie-banner.accepted';

const CookieProvider = ({ children }: ProviderProps) => {
  const [accepted, setAccepted] = useState<boolean | undefined>(undefined);

  const accept = () => {
    setAccepted(true);
    window.localStorage.setItem(STORAGE_KEY, '1');
  };

  useEffect(() => {
    setAccepted(window.localStorage.getItem(STORAGE_KEY) === '1');
  }, []);

  return (
    <CookieContext.Provider value={{ accepted, accept }}>
      {children}
    </CookieContext.Provider>
  );
};

const useCookieState = () => {
  const context = useContext(CookieContext);

  if (context === undefined) {
    throw new Error('no provider');
  }

  return context;
};

export { useCookieState, CookieProvider };
