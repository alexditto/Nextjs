import Link from 'next/link';
import Typography from '@material-ui/core/Typography';
import { Tabs, Tab, Paper } from '@material-ui/core';
import style from '../styles/app.module.css';
import { useState } from 'react';
import Box from '@material-ui/core/Box';
import About from '../pages/about'


import { AppBar, Toolbar, IconButton, List, ListItem, ListItemText, Container } from "@material-ui/core" ;
import { IoMdHome } from 'react-icons/io';

import { makeStyles } from '@material-ui/core/styles';


// const useStyles = makeStyles({
//   navbar: {
//     background: 'linear-gradient(45deg, #a18c76 30%, #d6a36e 90%)',
//     border: 0,
//     borderRadius: 3,
//     boxShadow: '0 3px 5px 2px rgba(127,191,127, .3)',
//     color: 'white',
//     height: 48,
//     padding: '0 30px',
//     diplay: "flex"
//   },
//   tab: {
//       '&:hover': {
//         transform : "scale(1.25)",
//         color: '#7fbfbf'
//         },
//   },

const useStyles = makeStyles({
    navbarDisplayFlex: {
        display: `flex`,
        justifyContent: `flex`,
        flexDirection: "row",
        flexWrap : 'wrap',
        display: 'inline-block'
      },
    navDisplayFlex: {
      display: `flex`,
      flexDirection: "row",
      justifyContent: `space-between`,
      display: 'inline-block'
    },
    linkText: {
      textDecoration: `none`,
      textTransform: `uppercase`,
      color: `white`
    }
  
});

const navLinks = [
    { title: `Home`, path: `/` },
    { title: `Character`, path: `/characters` },
    { title: `Equipment`, path: `/equipment` },
    { title: `About`, path: `/about` },
]
    
const Navbar = () => {
    const classes = useStyles()

    return (
        <div>
            {/* <Paper position="static" className={classes.navbar}>
                <Tabs value={value} onChange={handleChange} indicatorColor="secondary"
        textColor="secondary" aria-label="icon label tabs example">
                    <Link href="/" align="center"><Tab label="Home" className={classes.tab}></Tab></Link>
                    <Link href="/characters"><Tab label="Characters" className={classes.tab}></Tab></Link>
                    <Link href="/equipment"><Tab label="Equipment" className={classes.tab}></Tab></Link>
                    <Link href="/about"><Tab label="About" className={classes.tab}></Tab></Link>
                </Tabs>
            </Paper> */}
            <AppBar position="static">
                <Toolbar className={classes.navbarDisplayFlex}>
                    <Container className={classes.navDisplayFlex}>
                        <Link href="/">
                            <IconButton edge="start" color="inherit" aria-label="home">
                                <IoMdHome fontSize="large" />
                            </IconButton>
                        </Link>
                        <List component="nav" aria-labelledby="main navigation" >
                            {navLinks.map(({ title, path }) => (
                                <Link href={path} key={title} className={classes.linkText} >
                                    <ListItem button>
                                    <ListItemText primary={title} />
                                    </ListItem>
                                </Link>
                            ))}
                        </List>
                    </Container>
                </Toolbar>
            </AppBar>
        </div>
    )
    };

export default Navbar