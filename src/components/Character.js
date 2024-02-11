import PropTypes from 'prop-types';
export default function Character(props){
    const {character} = props;
    return <div className="character-container" key={id}>
            <div>
                <img src={character.image} alt={character.name}></img>
            </div>
            <div>
                <h3>{character.name}</h3>
                <h6>
                    <span className={character.status.toLowerCase()}>{character.status}</span>
                </h6>
                <p>
                    <span>Episodios: </span>
                    <span>{character.episode.length}</span> 
                </p>
                <p>
                    <span>Especie: </span>
                    <span>{character.species}</span> 
                </p>
            </div>
            </div>       
}

Character.propTypes = {
    character: PropTypes.shape({
      id:PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      status: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      species: PropTypes.string.isRequired,
      episode: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.string.isRequired,
          name: PropTypes.string.isRequired
        })
      ).isRequired
    }).isRequired
  };