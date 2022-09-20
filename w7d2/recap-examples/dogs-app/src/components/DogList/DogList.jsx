import DogCard from "../DogCard/DogCard";
import { dogArray } from '../../data/index'
import { v4 as uuid } from "uuid"

function DogList(props){
    return (
        <div>
            <h1>Dog Lovers App</h1>
            <div style={{ display: 'flex', justifyContent: 'space-around', flexDirection: 'row-reverse' }}>
                {/* {dogArray.map(({ name, description, age, picture }) =>  */}
            {dogArray.map(dog => 
                <DogCard key={uuid()} name={dog.name} age={dog.age} description={dog.description} picture={dog.picture} />
                  // <DogCard key={uuid()} {...dog}/>
                )}
            </div>
        </div>        
)}



     

    
       
    

export default DogList;