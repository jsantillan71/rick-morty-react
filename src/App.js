import imageRickMorty from './img/rick-morty.png';
import './App.css';
import { useState } from 'react';
import Characters from './components/Characters';
import { gql, useQuery } from '@apollo/client'

function App() {
  const [characters,setCharacters] = useState(null);
  const LAUNCHES_INFO = getCharactersQuery();
  const { data: charactersData, loading, error } = useQuery(LAUNCHES_INFO);
  
  const reqApi =  ()=>{
    if (charactersData) {
      console.log(charactersData.characters.results);
      setCharacters(charactersData.characters.results);
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="title">Rick & Morty [GraphQL]</h1>
        {characters ? (<Characters characters={characters} setCharacters={setCharacters}></Characters>
        ) :(
          <>
          <img src={imageRickMorty} alt="Rick & Morty" className="img-home" />
        <button onClick={reqApi} className='btn-search'>Buscar Personaje</button>
          </>
        ) }
        
        
      </header>
    </div>
  );
}

function getCharactersQuery(){
  return gql`
          query {
            characters{
              info {
                count
              }
              results {
                name
                status
                image
                species
                episode {
                  id
                  name
                }
              }
            }
            location(id: 1) {
              id
            }
            episodesByIds(ids: [1, 2]) {
              id
            }
          }
        `
}

export default App;
