import logo from '../assets/LOGO.svg';
import '../styles/Header.css';
import {Link} from 'react-router-dom';
import { useLocation } from 'react-router-dom';

function Header() {
    const location = useLocation();
    let mobileMediaQuery = window.matchMedia("(max-width: 480px)");

    const homePath = '/';
    const aboutPath = '/about';

    const currentUrlStyle = {textDecorationLine: "underline"};
    let currentUrlIsHomeStyle;
    let currentUrlIsAboutStyle;

    if(homePath === location.pathname & mobileMediaQuery.matches) {
        currentUrlIsHomeStyle = currentUrlStyle
    } else if (aboutPath === location.pathname & mobileMediaQuery.matches) {
        currentUrlIsAboutStyle = currentUrlStyle
    }

    return(
        <header>
            <img src={logo} className='kasa-logo' height='68px' width='210px'/>
            <nav>
                <ul>
                    <li><Link to={homePath} className='link' style={currentUrlIsHomeStyle}>Accueil</Link></li>
                    <li><Link to={aboutPath} className='link' style={currentUrlIsAboutStyle}>À propos</Link></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;