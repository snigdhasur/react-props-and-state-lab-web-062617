import React from 'react';

class Pet extends React.Component {
  constructor(props) {
    super(props);
  }

  handleClick = event => {
    this.props.onAdoptPet(this.props.pet.id)
  }

  render() {
    console.log(this.props)

    return (
      <div className="card">
        <div className="content">
          <a className="header"><h3>{this.props.pet.name}</h3> {this.props.pet.gender === "female" ?  "♀" : "♂" }</a>
          <div className="meta">
            <span className="date">{this.props.pet.type}</span>
          </div>
          <div className="description">
            <p>Age: {this.props.pet.age} years</p>
            <p>Weight: {this.props.pet.weight} lbs.</p>
          </div>
        </div>
        <div className="extra content">
          {this.props.isAdopted ?  
            <button className="ui disabled button">Already adopted</button> :
            <button className="ui primary button" onClick={this.handleClick}>Adopt pet</button>
          }
        </div>
      </div>
    );
  }
}

Pet.defaultProps = {
  pet: {
    id: "",
    name: "Pet prop name",
    type: "",
    age: 6,
    weight: 5,
    gender: "female"
  },
  isAdopted: false
};


export default Pet;