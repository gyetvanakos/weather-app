import React from 'react';
import './App.css';
import Search from './components/Search';
import useForecast from './hooks/useForecast';
import Forecast from './components/Forecast';


function App() {

  const { 
    location, 
    options, 
    forecast, 
    inputChange, 
    onOptionSelect, 
    onSubmit }  = useForecast()
  

  return (
    <div className="App">
      <main className="flex justify-center items-center bg-gradient-to-tl from-blue-300 via-green-200 to-yellow-300 h-[100vh] w-full text-white">
      {forecast ? (
        <Forecast data={forecast} />
      ) : (
        <Search 
          location={location} 
          options={options} 
          inputChange={inputChange} 
          onOptionSelect={onOptionSelect} 
          onSubmit={onSubmit}
        />
        )}
      </main>
    </div>
  );
}

export default App;
