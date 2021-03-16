import Character from './Character';

const Characters = ({charactersList}) => {

    return (
        <div>
            {charactersList.map((character) => (
              <Character key={character.id} character={character}>{character.name}</Character>
          ))}
          <br></br>
          <br></br>
          <br></br>
        </div>
    )
}

export default Characters
