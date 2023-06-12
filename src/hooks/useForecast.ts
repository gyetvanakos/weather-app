import { useState, useEffect, ChangeEvent } from "react"
import { optionType, forecastType } from './../types'

function useForecast() { 

  const baseUrl = 'https://api.openweathermap.org'	
  const [location, setLocation] = useState<string>('')	
  const [options, setOptions] = useState<[]>([])	
  const [city, setCity] = useState<optionType | null>(null)	
  const [forecast, setForecast] = useState<forecastType | null>(null)	
  	
  const getSearchOption = (location: string)=>{	
    fetch(	
      	
      `${baseUrl}/geo/1.0/direct?q=${location.trim()}&limit=5&appid=${	
        process.env.REACT_APP_API_KEY	
      }`	
    )	
      .then((res) => res.json())	
      .then((data) => setOptions(data))	
      .catch((e) => console.log({ e }))	
  }	
  
  const onSubmit = () => {	
    if (!city) return	
    getForecast(city)	
  }	
  const getForecast = (data: optionType) => {	
    fetch(`${baseUrl}/data/2.5/forecast?lat=${data.lat}&lon=${data.lon}&units=metric&appid=${	
      process.env.REACT_APP_API_KEY	
    }`	
    )	
    .then((res) => res.json())	
    .then((data) => {	
        const forecastData = {	
          ...data.city,	
          list: data.list.slice(0, 16),	
        }	
        setForecast(forecastData)	
      })	
      .catch((e) => console.log({ e }))	
  }	

  const onOptionSelect = (option: optionType) => {	
    setCity(option)	
  }	
  
  const inputChange = (e: ChangeEvent<HTMLInputElement>) => {	
    const value = e.target.value.trim()	
    setLocation(e.target.value)	
    if (value !== '') {	
      getSearchOption(value)	
    }	
  }	
  useEffect(() => {	
    if (city) {	
      setLocation(city.name)	
      setOptions([])	
    }	
  }, [city])	
  return {	
    forecast,	
    options,	
    location,	
    onOptionSelect,	
    onSubmit,	
    inputChange,	
  }	
}	


export default useForecast