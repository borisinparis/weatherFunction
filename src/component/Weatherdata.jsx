export const WeatherInfo = ({weatherData}) => {
  const weatherInfo = [
    { "code": 1000, "day": "Sunny", "night": "Clear", "icon": "./sun" },
    { "code": 1003, "day": "Partly cloudy", "night": "Partly cloudy", "icon": "./Clouds" },
    { "code": 1006, "day": "Cloudy", "night": "Cloudy", "icon": "./Clouds" },
    { "code": 1009, "day": "Overcast", "night": "Overcast", "icon": "./Wind" },
    { "code": 1030, "day": "Mist", "night": "Mist", "icon": "./Wind" },
    { "code": 1063, "day": "Patchy rain possible", "night": "Patchy rain possible", "icon": "./Day Rain" },
    { "code": 1066, "day": "Patchy snow possible", "night": "Patchy snow possible", "icon": 179 },
    { "code": 1069, "day": "Patchy sleet possible", "night": "Patchy sleet possible", "icon": 182 },
    { "code": 1072, "day": "Patchy freezing drizzle possible", "night": "Patchy freezing drizzle possible", "icon": 185 },
    { "code": 1087, "day": "Thundery outbreaks possible", "night": "Thundery outbreaks possible", "icon": 200 },
    { "code": 1114, "day": "Blowing snow", "night": "Blowing snow", "icon": 227 },
    { "code": 1117, "day": "Blizzard", "night": "Blizzard", "icon": 230 },
  ];
    
    const weatherIcon = weatherInfo.find((el) => el.code === weatherData?.current?.condition?.code)?.icon;
    
    if (!weatherData.location) {
        return <p>weather data is unavaible for a selected</p>
    } else {

        return ( <>
            
                <div className="absolute left-[30%] top-[8%] z-10 w-[400px] h-[800px] mt-[10px] m-auto rounded-[40px] bg-white/40 backdrop-blur-[10px]">
                  <p className="text-gray-400 text-[18px] ml-[40px]">{weatherData.current.last_updated}</p>
                  <h2 className="text-[60px] ml-[40px]">{weatherData.location.name}</h2>
                  <h1 className="text-transparent bg-clip-text font-extrabold text-[140px] -mt-1 bg-gradient-to-b from-black to-white ml-[40px]">
                    {weatherData.current.temp_c}˚
                  </h1>
                  <p className="text-yellow-500 ml-[40px]">{weatherData.current.condition.text}</p>
                  <p className="ml-[40px]">Humidity: {weatherData.current.humidity}%</p>
                  <p className="ml-[40px]">Wind: {weatherData.current.wind_kph} kph</p>
                  <img src={`${weatherIcon}.png`} alt="weather icon"/>
                  
                </div>
              </>
        )
    }

} 
