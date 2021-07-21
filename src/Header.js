import React from 'react';

// Header displays Name of the chosen City
class Header extends React.Component {
  constructor(props) {
    super (props);
  }

  render(){
    return(
      <div className="header">{this.props.cityName}</div>
    )
  }
}
export default Header;