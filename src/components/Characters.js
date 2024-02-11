import Character from "./Character";

export default function Characters(props){
    const {characters,setCharacters} = props;
    const resetCharacters = () => {
        setCharacters(null);
    }
    return <div className="characters">
        <h1>Personajes</h1>
        <span onClick={resetCharacters} className="back-home">Volver a Home</span>
        <div className="container-characters">
            {characters.map((character,index)=>(
                <Character character={character} index={index}></Character> 
                ))}
        </div>
        <span onClick={resetCharacters} className="back-home">Volver a Home</span>
    </div>
}