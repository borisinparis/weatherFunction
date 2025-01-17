import { useEffect, useState } from 'react'
import './App.css'
import "./output.css"
import { getAllCity } from './utils/get-all-cities.js'
import {WeatherInfo} from "./component/Weatherdata.jsx"
function App() {
  const [searchValue, setSearchValue] = useState("")
  const [filteredData, setFilteredData] = useState([])
  const [allCity, setAllCity] = useState([])
  const [selectedCity, setSelectedCity] = useState("Ulaanbaatar, Mongolia")
  const [weatherData, setWeatherData] = useState({})
  const [isLoading, setIsLoading] = useState(false)
  // const [isImage,setIsImage]= useState("")

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

  const weatherApiKey = "83e4cc7cbde84beea0091244251501"

  const onChange = (event) => {
    setSearchValue(event.target.value)
    const filtered = allCity.filter((el) => el.toLowerCase().startsWith(searchValue.toLowerCase()))
      .slice(0, 5)
    setFilteredData(filtered)
  }

  const getCountries = async () => {
    try {
      const response = await fetch("https://countriesnow.space/api/v0.1/countries")
      const result = await response.json();
      const countries = result.data
      const cities = getAllCity(countries)
      setAllCity(cities)


    } catch (error) {
      console.log(error);

    }
  }

  const getWeatherData = async () => {
    setIsLoading(true)
    try {
      const response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=${weatherApiKey}&q=${selectedCity}`)
      const result = await response.json();
      setWeatherData(result)
      console.log(result);
      
      

    } catch (error) {
      console.log(error);

    }
    finally {
      setIsLoading(false)
    }
  }


  const clickedTarget = (city) => {
    setSelectedCity(city)
    setSearchValue("")
    setFilteredData([])


  }


  useEffect(() => {
    getWeatherData()

  }, [selectedCity])


  useEffect(() => {
    getCountries();
  }, [])

  if(isLoading){
    return <p>isLoading..</p>
  }


  return (
    <>
      <input
        value={searchValue}
        onChange={onChange}
        placeholder="Search"
        className="m-auto w-[350px] h-[58px] rounded-[20px] text-3xl border-none"
        type="search"
      />
      {filteredData?.map((el) => (
        <div
          onClick={() => clickedTarget(el)}
          className="text-black relative w-[400px] h-[80px] bg-white/95 left-[82%] top-[10%]"
          key={el}
        >
          {el}
        </div>

      ))}
  <WeatherInfo weatherData={weatherData} />
      

    </>
  )
}

export default App
