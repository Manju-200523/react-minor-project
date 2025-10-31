import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./Infobox.css";
import CloudySnowingIcon from '@mui/icons-material/CloudySnowing';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny'; // ✅ correct icon

export default function InfoBox({ info }) {
  const INIT_URL = "https://plus.unsplash.com/premium_photo-1681803640795-5f36419e9c2f?ixlib=rb-4.1.0&auto=format&fit=crop&q=60&w=500";
  const COLD_URL = "https://images.unsplash.com/photo-1519863436079-8436f74be632?auto=format&fit=crop&q=80&w=1171";
  const HOT_URL = "https://images.unsplash.com/photo-1524594081293-190a2fe0baae?auto=format&fit=crop&q=60&w=1000";
  const RAIN_URL = "https://media.istockphoto.com/id/923732478/photo/females-hand-against-rain.jpg?s=2048x2048&w=is&k=20&c=BuF8QFFpt6O7BlwUNAYbHVhTk1cbYvWvLehg6dkQQ5U=";

  return (
    <div className='Infobox'>
      <br />
      <div className='classContainer'>
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: 140 }}
            image={
              info.humidity > 80
                ? RAIN_URL
                : info.temp > 15
                ? HOT_URL
                : COLD_URL
            }
            title="weather image"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {info.city}{" "}
              {
                info.humidity > 80 ? (
                  <CloudySnowingIcon sx={{ verticalAlign: "middle" }} />
                ) : info.temp > 15 ? (
                  <WbSunnyIcon sx={{ verticalAlign: "middle", color: "#ff9800" }} />
                ) : (
                  <AcUnitIcon sx={{ verticalAlign: "middle", color: "#2196f3" }} />
                )
              }
            </Typography>

            <Typography
              variant="body2"
              sx={{ color: 'text.secondary' }}
              component={"span"}
            >
              <p>Temperature = {info.temp}°C</p>
              <p>Humidity = {info.humidity}%</p>
              <p>Temp Max = {info.tempMax}°C</p>
              <p>Temp Min = {info.tempMin}°C</p>
              <p>
                Weather can be described as <b><i>{info.weather}</i></b> and feels like = {info.feelsLike}°C
              </p>
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
