import moment from "moment";
import Heart from '../icons/Heart.jsx';
import Search from "../icons/Search.jsx";
import Home from '../icons/Home.jsx';
import Location from '../icons/Location.jsx';

export const WeatherInfo = ({ weatherData }) => {
  const weatherInfo = [
    {"text" :"sun", "icon":"./sun" },
    {"text" :"cloudy", "icon":"./Clouds" },
    {"text" :"wind", "icon":"./Wind" },
    {"text" :"rain", "icon":"./Day Rain" },
    {"text" :"snow", "icon":"./Day Snow" },
    {"text" :"Storm", "icon":"./Day Storm" },
    {"text" :"clear", "icon":"./sun" },
    {"text" :"mist", "icon": "./Clouds"},
    {"text" :"overcast", "icon": "./Clouds"}
  ];
  const nightInfo = [
    {"text" :"moon", "icon":"./Night Moon" },
    {"text" :"cloudy", "icon":"./Night Clouds" },
    {"text" :"wind", "icon":"./Night Wind" },
    {"text" :"rain", "icon":"./Night Rain" },
    {"text" :"snow", "icon":"./Night Snow" },
    {"text" :"storm", "icon":"./Night Storm" },
    {"text" :"clear", "icon":"./Night Moon" },
    {"text" :"mist", "icon": "./Night Clouds"},
    {"text" :"overcast", "icon": "./Night Clouds"}
  ];

  const weatherTextChange= weatherData?.forecast?.forecastday[0]?.hour[10]?.condition?.text
 const lower = weatherTextChange.toLowerCase()
 console.log(lower);
 const nightText= weatherData?.forecast?.forecastday[0]?.hour[22]?.condition?.text
 const lowerNight = nightText.toLowerCase()
 console.log(lowerNight);
 
const weatherIcon = weatherInfo.find((el)=>(
  lower.includes(el.text)
))?.icon || "default icon"

console.log(weatherIcon);

const nightIcon = nightInfo.find((el)=>(
lowerNight.includes(el.text)
))?.icon || "default icon"

console.log(nightIcon);
// const weatherIcon = getWeatherIcons(weatherData)
// console.log(weatherIcon);
 

  // const weatherIcon = weatherInfo.find((el) => el.code === weatherData?.current?.condition?.code)?.icon;

  // const nightIcon = nightInfo.find((el) => el.code === weatherData?.forecast?.forecastday[0]?.hour[18]?.condition?.code)?.icon;

  if (!weatherData.location) {
    return <p>weather data is unavaible for a selected</p>
  } else {

    return (<>
      <div className="flex absolute z-1 m-auto w-[100vw] h-[100vh]">
        <div className="w-1/2 mt-[100px] m-auto h-full">
        <div className="w-[400px] h-[880px] mt-[10px] m-auto rounded-[40px] bg-white/40 backdrop-blur-[10px]">
          <p className="text-gray-400 text-[18px] ml-[40px]">{moment().format('MMMM Do YYYY')}</p>
          <h2 className="text-[60px] ml-[40px]">{weatherData.location.name}</h2>
          <img className="w-[430px] m-auto " src={`${weatherIcon}.png`} alt="weather icon" />
          <h1 className="text-transparent bg-clip-text font-extrabold text-[140px] -mt-1 bg-gradient-to-b from-black to-white ml-[40px]">
            {weatherData.current.temp_c}˚
          </h1>
          <p className="text-yellow-500 ml-[40px]">{weatherData.current.condition.text}</p>
          <div className="flex m-auto justify-between mt-12">
            <div>
              <Home />
            </div>
            <div>
              <Heart />
            </div>
            <div>
              <Search />
            </div>
            <div>
              <Location />
            </div>
          </div>

        </div>
        </div>
      <div className="w-1/2 h-full mt-[100px] m-auto bg-black/95">
        <div className="w-[400px] mt-[100px] h-[880px] mt-[10px] m-auto rounded-[40px] bg-white/40 backdrop-blur-[10px]">
          <p className="text-gray-400 text-[18px] ml-[40px]">{moment().format('MMMM Do YYYY')}</p>
          <h2 className="text-[60px] ml-[40px]">{weatherData.location.name}</h2>
          <img className="w-[430px] m-auto" src={`${nightIcon}.png`} alt="weather icon" />
          <h1 className="text-transparent bg-clip-text font-extrabold text-[140px] -mt-1 bg-gradient-to-b from-black to-white ml-[40px]">
            {weatherData.forecast.forecastday[0].hour[18].temp_c}˚
          </h1>
          <p className="text-yellow-500 ml-[40px]">{weatherData.forecast.forecastday[0].hour[18].condition.text}</p>
          <div className="flex justify-around mt-12">
            <div>
              <Home />
            </div>
            <div>
              <Heart />
            </div>
            <div>
              <Search />
            </div>
            <div>
              <Location />
            </div>
          </div>

        </div>
        </div>
      </div>


    </>
    )
  }

} 
