import React from 'react';

// Navbar allows user to find desired city
class Navbar extends React.Component {
  constructor(props) {
    super (props);
    this.state = {
      value: ''
    }
      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleChange = this.handleChange.bind(this);
  }

// Updating city name after user imput
handleSubmit(event) {
  if(this.state.value.length > 0)
  this.props.updateCity(this.state.value);
  event.preventDefault();
}
handleChange(event) {
  this.setState({value: event.target.value});
}

render() {
  return (
    <div className="navigation"> 
      <form onSubmit={this.handleSubmit}>
        <input type="text"  placeholder="Select your city" value={this.state.value} onChange={this.handleChange} className="inputText"/>  
        <input type="submit" value="Search" className="inputButton" />
      </form>   
    </div>
  )
}
}
export default Navbar;