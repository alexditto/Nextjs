import Layout from '../../components/Layout';
import { useState }from 'react';
import { useRouter, withRouter } from "next/router";
import { Container } from '@material-ui/core';


const CharacterSheet = () => {
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

    const User = (charactersList) => {
        const {
          query: { id },
        } = useRouter();
        for(let i =0; i<charactersList.length; i++){
            if(charactersList[i].id == id){
                return charactersList[i]
            } 
        }
        return {
            name: "None Found. Please Make a Character.",
        }
      };

    return(
        <Layout>
            <div>
                <h1>Character Sheet</h1>
                <p>{User(charactersList).name}</p>
                <p>{User(charactersList).type}</p>
                <Container>
                    <div>
                        Strength : {User(charactersList).str}  
                    </div>
                    <div>
                        Dexterity : {User(charactersList).dex}
                    </div>
                    <div>
                        Constitution : {User(charactersList).con}
                    </div>
                    <div>
                        Intellegence : {User(charactersList).int}
                    </div>
                    <div>
                        Wisdom : {User(charactersList).wis}
                    </div>
                    <div>
                        Charisma : {User(charactersList).cha}
                    </div>
                    
                </Container>
            </div>
        </Layout>
    )
};

export default CharacterSheet
