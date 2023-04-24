import logo from '../assets/LOGO.svg';
import '../styles/Header.css';

function Header() {
    return(
        <header>
            <img src={logo} className='kasa-logo' height='68px' width='210px'/>
            <nav>
                <ul>
                    <li><a href='/'>Accueil</a></li>
                    <li><a href='/about'>À propos</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;