import { createContext, useEffect, useState } from "react";

export const GlobalContext = createContext(null);

export default function GlobalState({ children }) {
  const [userAuth, setUserAuth] = useState({
    user: {},
    token: "",
  });
  useEffect(() => {
    const data = localStorage.getItem("auth");
    if (data) {
      const parseData = JSON.parse(data);
      setUserAuth({
        ...userAuth,
        user: parseData.user,
        token: parseData.token,
      });
    }
  }, []);

  return (
    <GlobalContext.Provider value={{ userAuth, setUserAuth }}>
      {children}
    </GlobalContext.Provider>
  );
}
