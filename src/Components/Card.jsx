import { strategyWithAudio, strategyWithDateAndFollow } from "../strategies";
import "./Card.css"
import { useNavigate } from "react-router";

const Card = ({renderVariable,name,image,summary ,listeners, audioSrc}) =>{
    const navigate = useNavigate()
    const handleClick = () => {
        navigate(`/artist/${name}`);
    };

    return(<>
        <div className="card bg-card">
            <img src={image} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title" onClick={handleClick}>{name}</h5>
                <p className="card-text">{summary}</p>
            </div>
            <div className="card-footer d-flex justify-content-between align-items-center">
                {renderVariable({listeners, audioSrc})}
            </div>
        </div>
    </>)
}

export default Card;