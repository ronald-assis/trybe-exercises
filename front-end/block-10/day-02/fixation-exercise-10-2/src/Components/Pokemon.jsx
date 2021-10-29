import React, { Component } from 'react';
import PropTypes from "prop-types";

class Pokemon extends Component {
  render() {
    const { pokemonList } = this.props;
    return (
      <div className='pokemon'>
        <div>
          <p>{pokemonList.name}</p>
          <p>{pokemonList.type}</p>
          <p>{`Average Weight: ${pokemonList.averageWeight.value}${pokemonList.averageWeight.measurementUnit}`}</p>
        </div>
        <img src={pokemonList.image} alt={pokemonList.name} />

      </div>
    )
  }
}

Pokemon.propTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.string,
    type: PropTypes.string,
    averageWeight: PropTypes.shape({
      measurementUnit: PropTypes.string,
      value: PropTypes.number,
    }),
    image: PropTypes.string,
  }).isRequired,
};

export default Pokemon;