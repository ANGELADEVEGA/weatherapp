import React, {useState} from 'react'
import axios from 'axios'

function App() {
  const [data,setData] = useState({})
  const [location, setLocation] = useState('')
  const apiKey = '056712c7378780fbc3c78ee6a137bf65'; // Replace with your actual API key


  const url =`https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=${apiKey}`

  const searchLocation = (event) => {
    if (event.key === 'Enter') {
    axios.get(url).then((response) => {
      setData(response.data)
      console.log(response.data)
      })
      setLocation('')
    }
  }

  return (

      <div className="app">
        <div className="search">
          <input
          value={location}
          onChange={event => setLocation(event.target.value)}
          onKeyDown={searchLocation}
          placeholder='Enter Location'
          type="text"/>
        </div>
        <div className="container">
          <div className="top">
            <div className="location">
              <p>{data.name}</p>
            </div>
            <div className="temp">
              {data.main ? <h1>{data.main.temp.toFixed()}</h1> : null}
            </div> 
            <div classame="description">
              {data.weather ? <p>{data.weather[0].main}</p> : null}
            </div>
          </div>
          {data.name != undefined &&
            <div className="bottom">
              <div className="feels">
                {data.main ? <p className='bold'>{data.main.feels_like}</p> : null}
                <p>Feels Like</p>
              </div>
              <div className="Humidity">
                {data.main ? <p className='bold'>{data.main.humidity}</p> : null}
                <p>Humidity</p>
              </div>
              <div className="wind">
                {data.main ? <p className='bold'>{data.wind.speed.toFixed()} MPH</p> : null}
                <p className='bold'>12 MPH</p>
                <p>Wind Speed</p>
              </div>
            </div>
          }
        </div>
      </div>
    


  );
}

export default App
