import Card from '@mui/material/Card';

import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import Typography from '@mui/material/Typography';
import "./Infobox.css";
export default function InfoBox(){
    const INIT_URL="https://plus.unsplash.com/premium_photo-1681803640795-5f36419e9c2f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8c21va2UlMjB3ZWF0aGVyfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=500";

    let info={
        city:"Delhi",
        feelsLike: 26.05,
        humidity: 69,
        temp: 26.05,
        tempMax: 26.05,
        tempMin: 26.05,
        weather: "smoke"
    };

    return(
        <div className='Infobox'>
            <br></br>
            <div className='classContainer'>
                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        sx={{ height: 140 }}
                        image={INIT_URL}
                        title="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                        {info.city}
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
                        <p>
                            Temperature={info.temp}&deg;C
                        </p>
                        <p>
                            Humidity={info.humidity}
                        </p>
                        <p>
                            TempMax={info.tempMax}
                        </p>
                        <p>
                            TempMin={info.tempMin}
                        </p>
                        
                        <p>
                            Weather  can be described as <b><i>{info.weather} </i></b>and feelslike={info.feelsLike}&deg;C
                        </p>
                        </Typography>
                    </CardContent>
                    
                </Card>
            </div>
            
        </div>
    );
}