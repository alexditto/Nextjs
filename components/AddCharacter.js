import { useState } from 'react';
import style from '../styles/app.module.css'

const AddCharacter = ({ onAdd }) => {
    const [name, setName ] = useState('');
    const [type, setType ] = useState('');
    const [str, setStr ] = useState('10');
    const [dex, setDex ] = useState('10');
    const [con, setCon ] = useState('10');
    const [wis, setWis ] = useState('10');
    const [int, setInt ] = useState('10');
    const [cha, setCha ] = useState('10');

    const onSubmit = (e) => {
        e.preventDefault()

        if(!name || !type) {
            alert("Please Enter Character and Select a type")
            return
        }

        onAdd({name, type, str, dex, con, wis, int, cha})
        setName('');
        setType('');
        setStr('10');
        setDex('10');
        setCon('10');
        setWis('10');
        setInt('10');
        setCha('10');
    }


    return (
        <form className='add-form' onSubmit={onSubmit}>
            <div className = 'form-control'>
                <label> Name </label>
                <input type='text' placeholder = "New Character Name" value={name} onChange= {(e) => setName(e.target.value)}/>
            </div>
            <div className = 'form-control container'>
                <div className = "row">
                    <div className ="col">
                        <label> Fighter </label>
                        <input type='radio' id="Fighter" name="type" value="Fighter" onChange= {(e) => setType(e.target.value)}/>
                    </div>
                    <div className ="col">
                        <label> Wizard </label>
                        <input type='radio' id="Wizard" name="type" value="Wizard" onChange= {(e) => setType(e.target.value)}/>
                    </div>
                    <div className ="col">
                        <label> Cleric </label>
                        <input type='radio' id="Cleric" name="type" value="Cleric" onChange= {(e) => setType(e.target.value)}/>
                    </div>
                    <div className ="col">
                        <label> Rogue </label>
                        <input type='radio' id="Rogue" name="type" value="Rogue" onChange= {(e) => setType(e.target.value)}/>
                    </div>
                </div>
            </div>
            <div className= "container">
                <div className="row">
                    <div className="col">
                        <label>Strength</label>
                        <input type="number" id="str" name="str" min="4" max="20" value={str} onChange= {(e) => setStr(e.target.value)}></input>
                    </div>
                    <div className="col">
                        <label>Dexterity</label>
                        <input type="number" id="dex" name="dex" min="4" max="20" value={dex} onChange= {(e) => setDex(e.target.value)}></input>
                    </div>
                    <div className="col">
                        <label>Constitution</label>
                        <input type="number" id="con" name="con" min="4" max="20" value={con} onChange= {(e) => setCon(e.target.value)}></input>
                    </div>
                    <div className="col">
                        <label>Wisdom</label>
                        <input type="number" id="wis" name="wis" min="4" max="20" value={wis} onChange= {(e) => setWis(e.target.value)}></input>
                    </div>
                    <div className="col">
                        <label>Intellegence</label>
                        <input type="number" id="int" name="int" min="4" max="20" value={int} onChange= {(e) => setInt(e.target.value)}></input>
                    </div>
                    <div className="col">
                        <label>Charisma</label>
                        <input type="number" id="cha" name="cha" min="4" max="20" value={cha} onChange= {(e) => setCha(e.target.value)}></input>
                    </div>
                </div>
            </div>
            

            <input type= 'submit' value ='Save Character' className={style.btn}/>
        </form>
    )
}

export default AddCharacter