import { useState, createContext } from 'react';
 
const ThemeContext = createContext(); // generate a context object which can be imported wherever you need to use the context
 
function ThemeProviderWrapper(props) {
    const [theme, setTheme] = useState("light");

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
        {props.children}
    </ThemeContext.Provider>
  )
}
 
export { ThemeContext, ThemeProviderWrapper }; 