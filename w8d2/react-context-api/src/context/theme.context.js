import { useState, createContext } from 'react';
 
const ThemeContext = createContext(); // generate a context object which can be imported wherever you need to use the context
 
function ThemeProviderWrapper(props) {
    const [theme, setTheme] = useState("light");

    const toggleTheme = () => {    // <== ADD
        if (theme === 'light') {
          setTheme('dark');
        } else {
          setTheme('light');
        }
      };

  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>
        {props.children}
    </ThemeContext.Provider>
  )
}
 
export { ThemeContext, ThemeProviderWrapper }; 