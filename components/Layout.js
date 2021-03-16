import Head from 'next/head';
import Header from './Header';
import Navigation from "./Navbar";
import Footer from './Footer';
import { Container } from '@material-ui/core'
import style from '../styles/app.module.css'
import CssBasline from '@material-ui/core/CssBaseline'
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";



const Layout = (props) =>{
    const theme = createMuiTheme({
        palette: {
          background: {
            default: "#7fbfbf"
          }
        }
      });


    return (
        <div>
            <Head>
                <title>DnD Character Saver</title>
                <link rel= "stylesheet" href="https://bootswatch.com/4/darkly/bootstrap.min.css" />
                <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/js/bootstrap.bundle.min.js" integrity="sha384-b5kHyXgcpbZJO/tY9Ul7kGkf1S0CWuKcCD38l8YkeH8z8QjE0GmW1gYU5S9FOnJ0" crossorigin="anonymous"></script>
            </Head>
            <MuiThemeProvider theme={theme}>
                <CssBasline />
            </MuiThemeProvider>
            <Header />
            <Navigation />
            <Container >
                {props.children}
            </Container>
        <Footer />
    </div>
    )
};

export default Layout