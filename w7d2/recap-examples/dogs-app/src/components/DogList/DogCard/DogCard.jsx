import './DogCard.css';

function DogCard(props){
    return (
        <div className='dog-card'>
            <h1>{props.name}</h1>
            <img src={props.picture} alt="dog_picture" className={'dogPicture'} />
            <p>{props.description}</p>
            <p>{props.age} years old</p>
        </div>
    )
}

export default DogCard;