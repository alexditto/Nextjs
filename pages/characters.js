import Layout from '../components/Layout';
import AddCharacter from '../components/AddCharacter'
import CharactersComponent from '../components/Characters'
import { useState } from 'react';
import Fetch from 'isomorphic-unfetch';
import Character from '../components/Character';



const Characters = (props) => {
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
    const addChracter = (name, type, str, dex, con, wis, int, cha) => {
        const id = Math.floor(Math.random() *100000) +1;
        const newCharacter = {id, ...name};
        setCharacters([...charactersList, newCharacter]);

        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify(
            {
                "name": name.name, 
                "type": name.type, 
                "str": parseInt(name.str), 
                "dex": parseInt(name.dex), 
                "con": parseInt(name.con), 
                "wis": parseInt(name.wis), 
                "int": parseInt(name.int), 
                "cha": parseInt(name.cha)
            });

        var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
        };

        fetch("http://localhost:5000/charactersheets/add", requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));

        fetch("http://localhost:5000/charactersheets")
            .then(res => console.log(res))
            .catch(error => console.log('error', error));
    }

    return(
        <Layout>
            <div>
                <AddCharacter onAdd = {addChracter} />
                <h1>Characters</h1>
                <CharactersComponent charactersList= {props.characters}/>
            </div>
        </Layout>
    )
};

Characters.getInitialProps = async function() {
    const res = await fetch("http://localhost:5000/charactersheets");
    const data = await res.json();
    console.log(data.body)
    return {characters:data}
}

export default Characters