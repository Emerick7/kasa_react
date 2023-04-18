import logements from '../assets/logements.json';

function Thumbnails() {
    for(let i=0; i < logements.length; i++){
        return(
            <aside>
                <img src={logements[i].cover}/>
                <h3>{logements[i].title}</h3>
            </aside>
        );
    }
}

export default Thumbnails;