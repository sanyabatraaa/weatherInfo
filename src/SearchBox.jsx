import {useState} from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css"
export default function SearchBox({updateInfo}){
    let [city,setCity]=useState("")
    let [err,setErr]=useState(false)
    let API_URL="https://api.openweathermap.org/data/2.5/weather"
    let API_KEY="abf3df7b4860a36c00f3cff4cf055d16";
    let getWeatherInfo=async()=>{
        try{
            let response=await fetch(`${API_URL}?q=${city}&appid=${API_KEY}`)
            let jsonResponse=await response.json();
            console.log(jsonResponse);
            let result={
                city:{city},
                feels_like:jsonResponse.main.feels_like,
                humidity:jsonResponse.main.humidity,
                temp:jsonResponse.main.temp,
                temp_max:jsonResponse.main.temp_max,
                temp_min:jsonResponse.main.temp_min,
                weather:jsonResponse.weather[0].description
    
            }
            console.log(result)
            return result;
        }catch(err){
            throw err
        }
       
    }
    let handleInputChange=(event)=>{
        setCity(event.target.value);
       
        
    }
    let handleSubmit=async(event)=>{
        try{
            event.preventDefault();
            console.log(city) 
            setCity("")
            let newInfo=await getWeatherInfo();
            updateInfo(newInfo)
        }catch(err){
            setErr(true)
        }
       
    }
    return(
        <div className="SearchBox">
        <form onSubmit={handleSubmit}>
         <TextField id="outlined-basic" label="City Name" variant="outlined" value={city} onChange={handleInputChange} />
         <br></br><br></br>
         {err && <p>This place doesnt exists</p>}
         <Button variant="contained" type="submit">Search</Button>
         </form>
        </div>
    )
}