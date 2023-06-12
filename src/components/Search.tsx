import { ChangeEvent } from "react";
import { optionType } from './../types'

type Props = {
    location: string
    options: []
    inputChange: (e: ChangeEvent<HTMLInputElement>) => void
    onOptionSelect: (option: optionType) => void
    onSubmit: () => void
}


function Search({
    location, 
    options, 
    inputChange, 
    onOptionSelect, 
    onSubmit
}: Props) {
 
  return (
    <div className="App">
      <main className="flex justify-center items-center bg-gradient-to-tl from-blue-300 via-green-200 to-yellow-300 h-[100vh] w-full text-white">
        <section className="bg-black bg-opacity-20 backdrop-blur-lg drop-shadow-lg rounded w-full md:max-w-[500px] flex flex-col text-center items-center justify-center md:px-10 lg:p-24 h-full lg:h-[500px]">
          <h1 className="text-4xl font-thin">
            Weather<span className="font-bold">Forecast</span> 
          </h1>
          <p className="text-sm mt-1">
            Find the place you would like to know the weather
          </p>
          <div className="relative flex mt-10 md:mt-4">
            <input 
              onChange={inputChange}
              type="text" 
              value={location} 
              className="rounded-l-md border-2 border-grey text-black" 
            />
            <ul className="absolute top-9 bg-white ml-1 rounded-b-md text-black">
              {options.map((option: optionType, index : number) => (
                <li key={option.name + '-' + index}>
                  <button 
                    className="text-left text-sm w-full hover:bg-zinc-700 hover:text-white px-2 py-1 cursor-pointer"
                    onClick={() => onOptionSelect(option)}  
                  >
                    {option.name}
                  </button>
                </li> ))} 
            </ul>
            <button 
            className="rounded-r-md border-2 border-grey hover:border-zinc-500 hover:text-zinc-500 text-zinc-1 px-2 py-1 cursor-pointer"
            onClick={onSubmit}
            >
              Search
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Search;
