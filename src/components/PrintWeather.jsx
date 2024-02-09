import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./PrintWeather.css";

export default function PrintWeather({ info }) {
    let INIT_URL = "https://images.unsplash.com/photo-1522159324343-865dc8dbfcc3?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nzh8fGZvZ3xlbnwwfHwwfHx8MA%3D%3D";

    let Rain_Url ="https://images.unsplash.com/photo-1519692933481-e162a57d6721?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cmFpbnxlbnwwfHwwfHx8MA%3D%3D";
    let hot_Url = "https://images.unsplash.com/12/sun-trees.jpg?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c3VubnklMjBkYXlzfGVufDB8fDB8fHww";
    let Winter = "https://images.unsplash.com/photo-1517850945300-ab1f6fcc3395?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjN8fHdpbnRlciUyMGRheXN8ZW58MHx8MHx8fDA%3D";

    // let abc = "./A03n.jpg";

    return (
        <>
            <div className='cardBox'>
                <h2>WeatherInfo - {info.weather}</h2>
                <img src={`https://openweathermap.org/img/wn/${info.icon}@2x.png`} alt="" />
            </div>
        
            <div className="cardBox">
                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        component="img"
                        alt="fogg"
                        height="140"
                        image={info.humidity > 95 ? Rain_Url : info.temp > 17 ? hot_Url : Winter}
                        
                    />
                    
                    <CardContent>
                        <Typography gutterBottom variant="h4" component="div" style={{ color: "red" }}>
                            {info.city}
                        </Typography>
                        <Typography variant="body2" color="text.secondary" component={"span"}>
                            <p>Temprature : {info.temp}&deg;C</p>
                            <p>Max-Temprature : {info.tempMax}&deg;C</p>
                            <p>Min-Temprature : {info.tempMin}&deg;C</p>
                            <p>Visibility : {info.visibility}m</p>
                            <p>Humidity : {info.humidity}%</p>
                            <p>Wind-Speed : {Math.round((info.windSpeed *18/5)*100)/100} km/h</p>
                            <p>The weather can be described as <b>{info.weather}</b> and feels a like <b>{info.feelsLike}&deg;C</b></p>
                        </Typography>
                    </CardContent>
                </Card>
            </div>
        </>
    )
}