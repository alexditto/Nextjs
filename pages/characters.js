import Layout from '../components/Layout';
import AddCharacter from '../components/AddCharacter'
import CharactersComponent from '../components/Characters'
import { useState }from 'react';

const Characters = ( ) => {
    const [charactersList, setCharacters] = useState([
        {
            id: 1,
            name: "Alex",
            type: "Wizard",
            str: "10",
            dex: "8",
            con: "12",
            int: "18",
            wis: "14",
            cha: "16"
        },
        {
            id: 2,
            name: "Kim",
            type: "Cleric",
            str: "16",
            dex: "8",
            con: "14",
            int: "10",
            wis: "18",
            cha: "12"
        },
        {
            id: 3,
            name: "Kitty",
            type: "Fighter",
            str: "18",
            dex: "14",
            con: "16",
            int: "8",
            wis: "10",
            cha: "12"
        },
        {
            id: 4,
            name: "Logan",
            type: "Rogue",
            str: "8",
            dex: "18",
            con: "14",
            int: "10",
            wis: "12",
            cha: "16"
        },
    ]);

    //Add Character
    const addChracter = (character) => {
        const id = Math.floor(Math.random() *100000) +1;
        const newCharacter = {id, ...character};
        setCharacters([...charactersList, newCharacter])
    }

    return(
        <Layout>
            <div>
                <AddCharacter onAdd = {addChracter} />
                <h1>Characters</h1>
                <CharactersComponent charactersList= {charactersList}/>
            </div>
        </Layout>
    )
};

export default Characters