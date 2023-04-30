import '../styles/ImgTopper.css';
import background from '../assets/background_img_topper.svg';

function ImgTopper() {
    return (
        <div className='topper-container'>
            <img src={background}/>
            <h1>Chez vous, partout et ailleurs</h1>
        </div>
    )
}

export default ImgTopper;