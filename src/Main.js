import React from 'react';

// Main is used to display temperature and current weather
class Main extends React.Component {
  constructor(props) {
    super (props);
  }

  render() {
   return(
     <div className="main">
       <div className="temperature">{parseInt(this.props.temperature - 273)}°C</div>
       <div className="visual"><img src={'./img/' + this.props.icon + '.png'}/></div>
     </div>
   )
  }
}
export default Main;