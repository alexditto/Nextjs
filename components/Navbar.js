import Link from 'next/link';
import style from '../styles/app.module.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';


const Navigation = () => {
    return (
        <div className={style.navigation}>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Link href="/">
                <Navbar.Brand >Home</Navbar.Brand>
            </Link>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                <Link href="/characters">
                    <Navbar.Brand>Characters</Navbar.Brand>
                </Link>
                <Link href="/about">
                    <Navbar.Brand>About</Navbar.Brand>
                </Link>
                </Nav>
                <Nav>
                <Nav.Link href="https://online.anyflip.com/ofsj/cxmj/mobile/index.html#p=1" target="_blank">Player's Hanbook</Nav.Link>
                <Nav.Link href="https://online.anyflip.com/ofsj/axvy/mobile/index.html#p=1" target="_blank">Dungeon Master's Guide</Nav.Link>
                <Nav.Link href="https://online.anyflip.com/duex/ixpz/mobile/index.html#p=1" target="_blank">Monster's Manual</Nav.Link>
                </Nav>
            </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default Navigation