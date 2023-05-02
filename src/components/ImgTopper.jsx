import '../styles/ImgTopper.css';

function ImgTopper(props) {
    const background = props.background;
    const textH1 = props.textH1;

    return (
        <div className='topper-container'>
            <img src={background}/>
            <h1>{textH1}</h1>
        </div>
    )
}

export default ImgTopper;