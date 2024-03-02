import { createContext, useEffect, useState } from "react";
import axios from "axios";
export const GlobalContext = createContext(null);

export default function GlobalState({ children }) {
  const [userAuth, setUserAuth] = useState({
    user: {},
    token: "",
  });
  // Default axios

  axios.defaults.headers.common["Authorization"] = userAuth?.token;

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
