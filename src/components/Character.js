export default function Character(props){
    const {character, index} = props;
    return <div className="character-container" key={index}>
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