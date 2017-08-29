import React from 'react';

import Filters from './Filters';
import PetBrowser from './PetBrowser';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      pets: [],
      adoptedPets: [],
      filters: {
        type: 'all',
      }
    };
  }


  // this occurs when you select a specific type filter such as cat or dog, so you want to 
  // change state of pets to pets with JUST that type

  onChangeType = typeSelected => {
    this.setState({
      filters: {type: typeSelected}
    })
  }

  onFindPetsClick = () => {
    console.log(this.state.filters.type)
    console.log(this.state)
    const filterName = this.state.filters.type
    if(filterName === "all"){
      fetch('/api/pets').then(res => res.json()).then(json => {
      return this.setState({
          pets: json
        })
       })
    } else {
      fetch(`/api/pets?type=${filterName}`)
      .then(res => res.json()).then(json =>  {
        this.setState({
          pets: json
        })
       })
    }
  }

  onAdoptPet = (id) => {
    this.setState({
          adoptedPets: [...this.state.adoptedPets, id]
        })
  }



  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters filters={this.state.filters} onChangeType={this.onChangeType} onFindPetsClick={this.onFindPetsClick} />
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} onAdoptPet={this.onAdoptPet} adoptedPets={this.state.adoptedPets}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;