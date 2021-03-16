import { IoLogoGithub, IoLogoLinkedin, IoLogoTwitter } from 'react-icons/io';
import style from '../styles/app.module.css';
import Image from 'next/image';
import Hidden from '@material-ui/core/Hidden';

const Header = () => {
    return (
        <div className = {style.header}>
            <h3> Amature DM Coding Productions  </h3>
            <Hidden only="xs">
                <Image
                    src= "/../public/images/d20.png"
                    alt= "Twenty Sided Die"
                    width={50}
                    height={50}
                    />
            </Hidden>
            <ul>
                <a href='https://github.com/alexditto' target='_blank'><li><IoLogoGithub />  Github</li></a>
                <a href= 'https://www.linkedin.com/in/alexander-ditto-0a69aa141/' target= "_blank"><li><IoLogoLinkedin />  LinkedIn</li></a>
                <a href= 'https://twitter.com/codingditto' target= "_blank"><li><IoLogoTwitter />  Twitter</li></a>
            </ul>
        </div>
    )
}

export default Header