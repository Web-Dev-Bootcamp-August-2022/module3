import './Button.css';

function Button({content}){
    return (
        <button className='backgroundRed'>
            <span>{content}</span>
        </button>
    )
}

export default Button;