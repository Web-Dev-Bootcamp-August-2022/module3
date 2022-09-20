import './DogCard.css';

function DogCard({ name, picture, description, age }){

    return (
        <div className='dog-card'>
            <h1>{name}</h1>
            <img src={picture} alt="dog_picture" className={'dogPicture'} />
            <p>{description}</p>
            <p>{age} years old</p>
        </div>
    )
}

export default DogCard;