import DogCard from "./DogCard";
import { dogArray } from '../data/index'
import { useState } from "react"
import { v4 as uuid } from "uuid"
import './DogList.css'

function DogList(){

    //function to submit
    const [name, setName] = useState(" ")
    const [age, setAge] = useState(0)
    const [description, setDescription] = useState(" ")
    const [picture, setPicture] = useState(" ")
    
    const [theme, setTheme] = useState('lightMode');
    const [showDogs, setShowDogs] = useState(false)
    const [dogsList, setDogsList] = useState(dogArray)

    // function handleNameInput(event){
    //     setName(event.target.value)
    // }


    const removeDog = (name) => {
        // Use the dog name to remove it from the list of dogs
        const dogsListCopy = [...dogsList];
        const updateDogList = dogsListCopy.filter( dog => dog.name !== name)
        setDogsList(updateDogList);
        // update my state variable DogList to remove that dog 
    }
    const handleNameInput = (event) => {
        console.log(event.target.value);
        setName(event.target.value)
    }
    const handleAgeInput = (event) => setAge(event.target.value)
    const handleDescriptionInput = (event) => setDescription(event.target.value)
    const handlePictureInput = (event) => setPicture(event.target.value)

    const handleSubmit = (event) => {
        event.preventDefault();// prevents default GET request from form submission

        const key = uuid()
        const dogArrayCopy = [...dogsList] // making a copy of our initialState 
        const newDog = {key: key, name: name, age: age, description: description, picture: picture} //create an object with our dog data input
        // console.log("newDog", newDog)
        dogArrayCopy.push(newDog) // --> const newDogList = [...dogsList, newDog];
        setDogsList(dogArrayCopy) // update the state variable with the new array 
        // reset the inputs to be empty for better UX
        setName("");
        setAge(0);
        setDescription("");
        setPicture("")
    }
    const hideDogs = () => {
        setShowDogs(!showDogs)
    }

    const switchTheme = () => {
        // const newTheme = theme === 'lightMode' ? 'darkMode' : 'lightMode';
        // setTheme(newTheme)
        if(theme === 'lightMode'){
            setTheme('darkMode')
        }
        else {
            setTheme('lightMode')
        }
     
    }
    // const addDog = () => {
    //     const filouDog = {
    //         name: 'Filou',
    //         age: 4,
    //         description: 'small',
    //         picture: 'https://images.unsplash.com/photo-1610041518868-f9284e7eecfe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
    //     }
    //     const currentDogList = [...dogsList, filouDog]
    //     setDogsList(currentDogList)
    // }

    return (
        <div className={theme}>
        <form onSubmit={handleSubmit}>
            <input type="text" name="dogName" value={name} onChange={handleNameInput}/>
            <input type="number" name="age" value={age} onChange={handleAgeInput}/>
            <input type="text" name ="description" value={description} onChange={handleDescriptionInput}/>
            <input type="text" name="picture" value={picture} onChange={handlePictureInput}/> 
            <button type="submit">Share your dog!</button>
        </form>

        <button onClick={hideDogs}>{showDogs ? "Click here to hide the dogs" : "Click here to show the dogs"}</button>
        <button onClick={switchTheme}>Switch theme</button>

        {showDogs && dogsList.map(dog => 
        <DogCard
                key={uuid()} 
                name={dog.name} 
                age={dog.age} 
                description={dog.description} 
                picture={dog.picture}
                hasTails={dog.hasTails} 
                hasLegs={dog.hasLegs}
                removeDog={removeDog}
        />)}
        </div>
        )}



     

    
       
    

export default DogList;