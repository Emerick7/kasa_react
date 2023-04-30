import logo from '../assets/LOGO.svg';
import '../styles/Header.css';
import {Link} from 'react-router-dom';

function Header() {
    return(
        <header>
            <img src={logo} className='kasa-logo' height='68px' width='210px'/>
            <nav>
                <ul>
                    <li><Link to={'/'} className='link'>Accueil</Link></li>
                    <li><Link to={'/about'} className='link'>À propos</Link></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;