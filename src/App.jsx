import { useEffect, useState } from 'react'
import './App.css'
import "./output.css"
import { getAllCity } from './utils/get-all-cities.js'
import { WeatherInfo} from "./component/Weatherdata.jsx"
import Skeleton from 'react-loading-skeleton'
function App() {
  const [searchValue, setSearchValue] = useState("")
  const [filteredData, setFilteredData] = useState([])
  const [allCity, setAllCity] = useState([])
  const [selectedCity, setSelectedCity] = useState("Ulaanbaatar, Mongolia")
  const [weatherData, setWeatherData] = useState({})
  const [isLoading, setIsLoading] = useState(true)

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

  useEffect(() =>{
    setTimeout(()=>{
      setIsLoading(false)
    }, 1000)
  },[])

  // if(isLoading){
  //   return <p><Skeleton /></p>
  // }

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
{isLoading ? <Skeleton/> : <WeatherInfo weatherData={weatherData} /> }
  {/* <WeatherInfo weatherData={weatherData} /> */}

    </>
  )
}

export default App
