import Link from 'next/link';
import style from "../styles/app.module.css"

const Character = ({character}) => {
    return (
        <div className={style.character}>
            <div className="container">
                <div className="row">
                    <div className="col-2">
                        <h3>{character.name}</h3>
                    </div>
                    <div className="col-3">
                        <p>{character.type}</p>
                    </div>
                    <div className="col-1">
                    <Link className={style.characterLink} href={`/characters/${character.id}`}>Character Sheet</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Character