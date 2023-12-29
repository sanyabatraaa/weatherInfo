import * as React from 'react';
import Card from '@mui/material/Card';


import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import Typography from '@mui/material/Typography';
import "./InfoBox.css"
import AcUnitIcon from '@mui/icons-material/AcUnit';
import CloudIcon from '@mui/icons-material/Cloud';
import WbSunnyIcon from '@mui/icons-material/WbSunny';


export default function InfoBox({info}){
   
   
    let IMG_URL="https://images.unsplash.com/photo-1625135966225-a01cb9fd9969?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8d2VhdGhlciUyMHNtb2tlfGVufDB8fDB8fHww";
    let HOT_URL="https://media.istockphoto.com/id/1431750239/photo/summer-heat.webp?b=1&s=170667a&w=0&k=20&c=BGTXMw7DYcCyFuyf4NUecoO2_1sueiiggjMxR2Pd08M="
    let RAIN_URL="https://images.unsplash.com/photo-1611928482473-7b27d24eab80?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2xvdWR5JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D"
    let COLD_URL="https://images.unsplash.com/photo-1612208695882-02f2322b7fee?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29sZCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D"
    return(
        <div className="Card" style={ {
          backgroundColor: 'black' ,
          color: 'white', // Optional: Set text color to white for better visibility
        }}>
        <Card sx={{ maxWidth: 400 }}>
        <CardMedia
          sx={{ height: 80 }}
          image={info.humidity>80 ? RAIN_URL :info.temp>298 ? HOT_URL:COLD_URL}
          title="Delhi"
        />
        <CardContent>
         
          <Typography variant="body2" color="text.secondary" component="span">
            <h1>{info.city.city}&nbsp;{info.humidity>80 ?<CloudIcon/> :info.temp>298 ? <WbSunnyIcon/>:<AcUnitIcon/>}
            </h1>
           <p>feels like: {info.feels_like}K</p>
           <p>Humidity: {info.humidity}</p>
           <p>Temperature: {info.temp}K</p>
           <p>Max Temp: {info.temp_max}K</p>
           <p>Min Temp: {info.temp_min}K</p>
           <p>Weather Description: {info.weather}</p>
          </Typography>
        </CardContent>
       
      </Card>
      </div>
    )
}