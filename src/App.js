import React from 'react';
import axios from 'axios';
import Header from './Header.js';
import Navbar from './Navbar.js';
import Main from './Main.js';
class App extends React.Component {
  constructor(props) {
    super(props);

    // Declaring starting properties 
    this.state = {
      temperature: "19",
      cityName: "Warszawa",
      icon: "01d"
    }
  }

  // Loading data from API for chosen city
  loadInfo = () => {
    axios.get('https://api.openweathermap.org/data/2.5/weather?q=' + this.state.cityName + '&appid=7ee2fcab1ccca7835fc7e06d96b7ce90').then((response) => {
      this.setState({temperature: response.data.main.temp});
      this.setState({icon: response.data.weather[0].icon});
    })
  }

  // Updating data every 1 second
  componentDidMount = () => {
    this.loadInfo();
    setInterval(() => {
      this.loadInfo();
    }, 1000);
  }

  updateCityName= (value) =>{
    this.setState({cityName: value})
  }

  render() {
    return(
      <div id="container">
        <Header cityName={this.state.cityName}></Header>
        <Navbar updateCity={this.updateCityName}></Navbar>
        <Main temperature={this.state.temperature} icon={this.state.icon}/>
      </div>
    )
  }
}

export default App;