import '../styles/StarsRating.css';
import starRed from '../assets/starRed.svg';
import starGrey from '../assets/starGrey.svg';

function StarsRating(props) {
    const rating = props.rating;

    const range = [1, 2, 3, 4, 5]

    return (
        <div className='rating-container'>
            {range.map((star) => rating >= star ? <img src={starRed}/> : <img src={starGrey}/>)}
        </div>
    );
}

export default StarsRating;