import { createContext, useState, useEffect } from "react";
import axios from "axios";
const API_URL = "http://localhost:5005";
 
const AuthContext = createContext();
 
function AuthProviderWrapper(props) {
    // 1. State variables are initialized
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState(null);

  /* 
    Functions for handling the authentication status (isLoggedIn, isLoading, user)
    will be added here later in the next step
  */
    const storeToken = (token) => {       
        localStorage.setItem('authToken', token);
    }

    const authenticateUser = () => {        //  <==  ADD  
        // Get the stored token from the localStorage
        const storedToken = localStorage.getItem('authToken'); // will return either the token or null
        console.log(storedToken)
        // If the token exists in the localStorage
        if (storedToken) {
          // We must send the JWT token in the request's "Authorization" Headers
          axios.get(
            `${process.env.REACT_APP_API_URL}/auth/verify`, 
            { headers: { Authorization: `Bearer ${storedToken}`} }
          )
          .then((response) => {
            // If the server verifies that JWT token is valid  
            const user = response.data;
           // Update state variables        
            setIsLoggedIn(true);
            setIsLoading(false);
            setUser(user);        
          })
          .catch((error) => {
            // If the server sends an error response (invalid token) 
            // Update state variables         
            setIsLoggedIn(false);
            setIsLoading(false);
            setUser(null);        
          });      //
        } else {
          // If the token is not available (or is removed)
            setIsLoggedIn(false);
            setIsLoading(false);
            setUser(null);      
        }   
      }

      const removeToken = () => {                   
        // Upon logout, remove the token from the localStorage
        localStorage.removeItem("authToken");
      }
     
     
      const logOutUser = () => {                   // <== ADD    
        // To log out the user, remove the token
        removeToken();
        // and update the state variables    
        authenticateUser();
      }  
    
      // 3. Checks if we have a JWT token in localStorage
      // If yes, update our state variables accordingly
      // If not, update our state variable isLoading to false
      useEffect(()=>{
        authenticateUser();
      }, [])
 
      // 2. Provider component that will share 'value' to the rest of the component tree
  return (
    <AuthContext.Provider value={{ isLoggedIn, isLoading, user, storeToken, authenticateUser, logOutUser }}>
      {props.children}
    </AuthContext.Provider>
  )
}
 
export { AuthProviderWrapper, AuthContext };