import Character from "./Character";
import PropTypes from 'prop-types';

export default function Characters(props){
    const {characters,setCharacters} = props;
    const resetCharacters = () => {
        setCharacters(null);
    }
    return <div className="characters">
        <h1>Personajes</h1>
        <button onClick={resetCharacters} className="back-home">Volver a Home</button>
        <div className="container-characters">
            {characters.map((character)=>(
                <Character character={character} key={character.id}></Character> 
                ))}
        </div>
        <button onClick={resetCharacters} className="back-home">Volver a Home</button>
    </div>
}

Characters.propTypes = {
    characters: PropTypes.arrayOf(PropTypes.shape({
      id:PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      status: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      species: PropTypes.string.isRequired,
      episode: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired
      })).isRequired
    })).isRequired,
    setCharacters: PropTypes.func.isRequired
  };