import '../styles/Error.css';
import { useRouteError } from "react-router-dom";
import Header from '../components/Header';
import {Link} from 'react-router-dom';
import React from 'react';

function Error() {
    const error = useRouteError();
    console.error(error);

    return(
        <React.StrictMode>
            <Header />
            <div className='error-page'>
                <span className='error-status'>{error.status}</span>
                <span className='error-desc'>Oups! La page que vous demandez n'existe pas.</span>
                <Link to={'/'} className='home-link'>Retourner sur la page d’accueil</Link>
            </div>  
        </React.StrictMode>
    );
}

export default Error;