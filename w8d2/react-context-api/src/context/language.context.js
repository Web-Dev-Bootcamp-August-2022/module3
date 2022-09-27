import { useState, createContext } from 'react';
 
const LanguageContext = createContext(); // generate a context object which can be imported wherever you need to use the context
 
function LanguageProviderWrapper(props) {
    const [language, setLanguage] = useState("fr-FR");

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
        {props.children}
    </LanguageContext.Provider>
  )
}
 
export { LanguageContext, LanguageProviderWrapper }; 