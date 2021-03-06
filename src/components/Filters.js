import React from 'react';

class Filters extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      animalType: this.props.filters.type 
    }

  }

  handleSelect = event => {
    console.log(event.target.value)
    this.setState({animalType: event.target.value})
    this.props.onChangeType(event.target.value)
  }

  handleClick = event => {
    this.props.onFindPetsClick()
  }

  render() {
    return (
      <div className="ui form">
        <h3>Animal type</h3>
        <div className="field">
          <select name="type" id="type" onChange={this.handleSelect} value={this.state.animalType}>
            <option value="all">All</option>
            <option value="cat">Cats</option>
            <option value="dog">Dogs</option>
            <option value="micropig">Micropigs</option>
          </select>
        </div>

        <div className="field">
          <button onClick={this.handleClick} className="ui secondary button">Find pets</button>
        </div>
      </div>
    );
  }
}

export default Filters;
