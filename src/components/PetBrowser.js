import React from 'react';

import Pet from './Pet';

class PetBrowser extends React.Component {
  render() {

  	const allPets = this.props.pets
  	const adoptedPets = this.props.adoptedPets
  	// adoptedPets is array of IDs
  	// allPets is array of pet objects

  	const renderedPets = 
	  	allPets.map((pet, index) => <Pet key={index} onAdoptPet={this.props.onAdoptPet} isAdopted={adoptedPets.includes(pet.id)} pet={pet} adoptedPets={this.props.adoptedPets}/>)

    return (
      <div className="ui cards">
        {renderedPets}
      </div>
    );
  }
}

export default PetBrowser;