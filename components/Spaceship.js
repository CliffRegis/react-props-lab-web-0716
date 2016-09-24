import React from 'react';
import ReactDOM from 'react-dom';

class Spaceship extends React.Component{
	render(){
		return(
      <div>
      <h1>{this.props.name}</h1> 
      <h2>{this.props.speed}</h2> 
      <h2>{this.props.colors}</h2> 

      </div>
			)

	}
}

Spaceship.defaultProps = {
	hasRockets: false,
	colors: ['black','red']
};

ReactDOM.render(
< Spaceship name = "Millennium Falcon"
						speed = {500}
	/>, document.getElementById('main')

	);

module.exports = Spaceship;
