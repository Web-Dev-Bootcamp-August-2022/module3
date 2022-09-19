import './Button.css';

function Button(props){
    return (
        <button className={`backgroundRed ${props.classNames}`}>
            <span>{props.content}</span>
        </button>
    )
}

export default Button;