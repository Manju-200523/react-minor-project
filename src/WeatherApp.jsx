import SearchBox from './SearchBox';
import InfoBox from './infoBox';

export default  function WeatherApp(){
    return(
        <div style={{textAlign:"center"}}>
            <h2>Weather App by Delta</h2>
            <SearchBox />
            <InfoBox />
        </div>
    )

}