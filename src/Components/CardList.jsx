import Card from "./Card";
import { strategyWithAudio, strategyWithDateAndFollow } from "../strategies";

const CardList = ({listTitle}) =>{
    return(<>
    <h1>{listTitle}</h1>
        <Card renderVariable={strategyWithAudio} audioSrc={"https://cdnt-preview.dzcdn.net/api/1/1/c/d/2/0/cd2322270b4d6a7f34448c642123b257.mp3?hdnea=exp=1748642646~acl=/api/1/1/c/d/2/0/cd2322270b4d6a7f34448c642123b257.mp3*~data=user_id=0,application_id=42~hmac=16638fc9371138677683a0e721a8bd23a46934859c532f6f16a878c0214c224b"}/>
        <Card renderVariable={strategyWithDateAndFollow} date={"29 ago"} tags={"aslidh"}/>
    </>)
}

export default CardList; 