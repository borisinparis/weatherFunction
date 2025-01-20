import moment from "moment";
import Heart from './icons/Heart.jsx'
import User from './icons/User.jsx'
import Home from './icons/Home.jsx'
import Location from './icons/Location.jsx'
export const WeatherInfo = ({weatherData}) => {
  const weatherInfo = [
    { "code": 1000, "day": "Sunny", "night": "Clear", "icon": "./sun" },
    { "code": 1003, "day": "Partly cloudy", "night": "Partly cloudy", "icon": "./Clouds" },
    { "code": 1006, "day": "Cloudy", "night": "Cloudy", "icon": "./Clouds" },
    { "code": 1009, "day": "Overcast", "night": "Overcast", "icon": "./Wind" },
    { "code": 1030, "day": "Mist", "night": "Mist", "icon": "./Wind" },
    { "code": 1063, "day": "Patchy rain possible", "night": "Patchy rain possible", "icon": "./Day Rain" },
    { "code": 1066, "day": "Patchy snow possible", "night": "Patchy snow possible", "icon": "./Day Snow" },
    { "code": 1069, "day": "Patchy sleet possible", "night": "Patchy sleet possible", "icon": "./Day Snow" },
    { "code": 1072, "day": "Patchy freezing drizzle possible", "night": "Patchy freezing drizzle possible", "icon": "./Clouds" },
    { "code": 1087, "day": "Thundery outbreaks possible", "night": "Thundery outbreaks possible", "icon": "./Day Storm" },
    { "code": 1114, "day": "Blowing snow", "night": "Blowing snow", "icon": "./Day Snow" },
    { "code": 1117, "day": "Blizzard", "night": "Blizzard", "icon": "./Day Storm" },
    { "code": 1210, "day": "Blizzard", "night": "Blizzard", "icon": "./Day Snow" },
  ];
  const nightInfo = [
    { "code": 1000, "day": "Sunny", "night": "Clear", "icon": "./Night Moon" },
    { "code": 1003, "day": "Partly cloudy", "night": "Partly cloudy", "icon": "./Night Clouds" },
    { "code": 1006, "day": "Cloudy", "night": "Cloudy", "icon": "./Night Clouds" },
    { "code": 1009, "day": "Overcast", "night": "Overcast", "icon": "./Night Clouds" },
    { "code": 1030, "day": "Mist", "night": "Mist", "icon": "./Night Clouds" },
    { "code": 1063, "day": "Patchy rain possible", "night": "Patchy rain possible", "icon": "./Night Rain" },
    { "code": 1066, "day": "Patchy snow possible", "night": "Patchy snow possible", "icon": "./Night Snow" },
    { "code": 1069, "day": "Patchy sleet possible", "night": "Patchy sleet possible", "icon": "./Night Snow" },
    { "code": 1072, "day": "Patchy freezing drizzle possible", "night": "Patchy freezing drizzle possible", "icon": "./Night Snow" },
    { "code": 1087, "day": "Thundery outbreaks possible", "night": "Thundery outbreaks possible", "icon": "./Night Storm" },
    { "code": 1114, "day": "Blowing snow", "night": "Blowing snow", "icon": "./Day Snow" },
    { "code": 1117, "day": "Blizzard", "night": "Blizzard", "icon": "./Day Storm" },
  ];


    
    const weatherIcon = weatherInfo.find((el) => el.code === weatherData?.current?.condition?.code)?.icon;

    const nightIcon = nightInfo.find((el) => el.code === weatherData?.forecast?.forecastday[0]?.hour[18]?.condition?.code)?.icon;
    
    if (!weatherData.location) {
        return <p>weather data is unavaible for a selected</p>
    } else {

        return ( <>
            <div className="flex m-auto relative w-[100vw] h-[100vh]">
                <div className="absolute left-[30%] top-[8%] z-10 w-[400px] h-[800px] mt-[10px] m-auto rounded-[40px] bg-white/40 backdrop-blur-[10px]">
                  <p className="text-gray-400 text-[18px] ml-[40px]">{moment().format('MMMM Do YYYY')}</p>
                  <h2 className="text-[60px] ml-[40px]">{weatherData.location.name}</h2>
                  <img className="w-[430px] m-auto " src={`${weatherIcon}.png`} alt="weather icon"/>
                  <h1 className="text-transparent bg-clip-text font-extrabold text-[140px] -mt-1 bg-gradient-to-b from-black to-white ml-[40px]">
                    {weatherData.current.temp_c}˚
                  </h1>
                  <p className="text-yellow-500 ml-[40px]">{weatherData.current.condition.text}</p>
                  <div className="flex justify-around mt-12">
            <div>
              <Home />
            </div>
            <div>
              <Heart />
            </div>
            <div>
              <User />
            </div>
            <div>
              <Location />
            </div>
          </div>
                  
                </div>

                <div className="absolute left-[80%] top-[8%] z-10 w-[400px] h-[800px] mt-[10px] m-auto rounded-[40px] bg-white/40 backdrop-blur-[10px]">
                  <p className="text-gray-400 text-[18px] ml-[40px]">{moment().format('MMMM Do YYYY')}</p>
                  <h2 className="text-[60px] ml-[40px]">{weatherData.location.name}</h2>
                  <img className="w-[120px] m-auto"src={`${nightIcon}.png`} alt="weather icon"/>
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
              <User />
            </div>
            <div>
              <Pin />
            </div>
          </div>
                  
                </div>
                </div>

                
              </>
        )
    }

} 
