import React from 'react';
import Header from './component/Header';
import Form from './component/Form';
import Weather from './component/Weather';

const API_KEY= "2c8c3e25c8c369dbef83f8af92452b8d"

//creating class that will have the data of the weather and that states will be undefined.
class App extends React.Component {
  state = {
    temperature: undefined,
    city: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined
  }

//creating function myWeather wich have the data and API tha we call in order to get the weather
  myWeather = async (e) =>{
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    
    const newAPI = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=${API_KEY}`);
    
    const data = await newAPI.json();
    if (city && country){         //creating if statement which will help us when you didnt put anything on your input will help code not to brake
    console.log(data)

    this.setState({
      temperature: data.main.temp,
      city: data.name,
      country: data.sys.country,
      humidity: data.main.humidity,
      description: data.weather[0].description, 
      error:''
    });
  } else {
    this.setState({
      temperature: undefined,
      city: undefined,
      country: undefined,
      humidity: undefined,
      description: undefined,
      error:'Please enter City and Country'
    });

  }

}
//rendering the components for the results of the weather in order to be displayed in our page
  render() {
    return (
      <div>
        <div className="wrapper">
          <div className="main">
            <div className="container">
              <div className="row">
                <div className="col-xs-5 title-container">
                 <div className="heady">
                  <Header/>
                  </div>
                  <Form myWeather={this.myWeather} className="main"/>
                  <Weather temperature={this.state.temperature} city={this.state.city} country={this.state.country} humidity={this.state.humidity} description={this.state.description} error={this.state.error} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      );
  }
};

export default App;