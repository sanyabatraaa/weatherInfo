import {useState} from "react"
import InfoBox from "./InfoBox";
import SearchBox from "./SearchBox";
export default function WeatherApp(){
    const [weatherInfo,setWeatherInfo]=useState({
        city:"Delhi",
        feels_like: 292.93,
        humidity: 64,
        temp: 293.2,
        temp_max:293.2,
        temp_min:293.2,
        weather:"smoke"
        
    })
    let updateInfo=(result)=>{
        setWeatherInfo(result);
    }
    return(
    <>
    <SearchBox updateInfo={updateInfo}/>
    <br></br><br></br>
    <InfoBox info={weatherInfo}/>
    
    </>)
}