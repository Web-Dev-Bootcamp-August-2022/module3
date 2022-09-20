import './DogCard.css';
const spinner = 'https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/m3/react-lists/spinner.gif';

function DogCard({ name, age, description, picture, removeDog, hasTails, hasLegs }){
    if(hasLegs === false){
       return (
        <div className='dogHasTails'>
            <img src={spinner} alt="loading spinner" />
            <p>This dog was in a car accident. We'll update this once it's back in good health :)</p>
        </div>
       )
    }

    return (
        <div className='dog-card'>
            <h1>{name}</h1>
            <img src={picture} alt="dog_picture" className='dogPicture' />
            <p>{description}</p>
            <p>{age} years old</p>
            <p>{age < 6 ? 'Young dog': 'Old dog'}</p>
            <p>{hasTails ? 'It has a tail' : "It doesn't have a tail"}</p>
            <p>{hasTails && <span>Lucky dog</span>}</p>
            <p>{!hasTails && <span>Unlucky dog</span>}</p>
            <button onClick={() => removeDog(name)}> Remove Dog</button>
        </div>
    )
}

export default DogCard;