export const WeatherInfo = ({weatherData}) => {
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
                </div>
              </>
        )
    }

} 
