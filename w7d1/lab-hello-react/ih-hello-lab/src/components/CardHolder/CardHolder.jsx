import ReactCard from "../ReactCard/ReactCard";
import DeclarativeLogo from '../../images/declarative-logo.png';
import ComponentsLogo from '../../images/component-logo.png';
import SingleWayLogo from '../../images/single-way-logo.png';
import JSXLogo from '../../images/jsx-logo.png';
import { v4 as uuidv4 } from 'uuid';

function CardHolder(){
    const data = [
        {src: DeclarativeLogo, title: 'Declarative', description: 'React makes it painless to create interactive UIs' },
        {src: ComponentsLogo, title: 'Components', description: 'Build encapsulated components' },
        {src: SingleWayLogo, title: 'Single-Way', description: 'A set of immutable values' },
        {src: JSXLogo, title: 'JSX', description: 'Statically-typed' }
    ]

    return (
        <div>
            {data.map((card) => {
                return <ReactCard key={uuidv4()} src={card.src} title={card.title} description={card.description} />
            })}
        </div>
        
    );
}

export default CardHolder;