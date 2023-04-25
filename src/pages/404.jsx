import '../styles/404.css';
import { useRouteError } from "react-router-dom";
import Header from '../components/Header'

function Error404() {
    const error = useRouteError();
    console.error(error);

    return(
        <div className='error'>
            <Header />
            <p>
                <i>{error.statusText || error.message}</i>
            </p>
        </div>
    );
}

export default Error404;