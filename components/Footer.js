import style from '../styles/app.module.css'

const Footer = () => {
    const date = new Date()

    return (
        <div className={style.footer}>
            <span>
                Amature DM Coding Portfolio Copyright &#169; {date.getFullYear()}
            </span>
        </div>
    )
}

export default Footer