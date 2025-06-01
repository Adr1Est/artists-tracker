import { strategyWithAudio, strategyWithDateAndFollow } from "../strategies";

const Card = ({renderVariable,name,image, listeners, audioSrc, tags}) =>{
    return(<>
        <img src={image}/>
        <h3>{name}</h3>
        {renderVariable({listeners,tags, audioSrc})}
    </>)
}

export default Card;