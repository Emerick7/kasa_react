import '../styles/ImgTopper.css';

function ImgTopper(props) {
    const background = props.background;
    const textH1 = props.textH1;
    const imgTopperStyle = props.imgTopperStyle;

    return (
        <div className='topper-container' style={imgTopperStyle}>
            <img src={background}/>
            <h1>{textH1}</h1>
        </div>
    )
}

export default ImgTopper;