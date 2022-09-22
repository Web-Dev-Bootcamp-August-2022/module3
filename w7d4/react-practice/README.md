# React Beers Practice Exercise

For this exercise, you’ll be using the IronBeers API https://ih-beers-api2.herokuapp.com/beers

- Start a project ‘react-beers’ using the create-react-app command
- In the App.js, remove everything inside the <div className=“App”></div>
- Create a state variable ‘beers’ that will be storing the data from the IronBeers API
- Create a Beer component which will display the data for one beer. This component should display at least the name, image and description of the beer
- Create a useEffect which will fetch the data from the API and update the state variable 'beers' with the data
- Check React Dev Tools to confirm that the update was successful 
- Render the data from the state variable in your App component. You should do it using your Beer component and pass the data using props.
