import { strategyWithAudio, strategyWithDateAndFollow } from "../strategies";

const Card = ({renderVariable, date, audioSrc, tags}) =>{
    return(<>
        <img/>
        <h3>Name</h3>
        {renderVariable({ date,tags, audioSrc})}
    </>)
}

export default Card;