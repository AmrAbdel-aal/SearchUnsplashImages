import { createContext, useContext, useState } from "react";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const [searchData, setSearchData] = useState([]);
  const [url_search_parameter, setUrlSearchParameter] = useState("dog");
  return (
    <AppContext.Provider
      value={{
        isDarkTheme,
        setIsDarkTheme,
        searchData,
        setSearchData,
        url_search_parameter,
        setUrlSearchParameter,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;

export const useGlobalContext = () => {
  return useContext(AppContext);
};
