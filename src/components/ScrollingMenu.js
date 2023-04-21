import '../styles/ScrollingMenu.css';

function ScrollingMenu() {
    return(
    <ul className='menu'>
        <li class="deroulant"><a href="#">Cours Complets &ensp;</a>
            <ul class="sous">
                <li><a href="#">Example</a></li>
                <li><a href="#">Example</a></li>
                <li><a href="#">Example</a></li>
            </ul>
        </li>
    </ul>
    );
}

export default ScrollingMenu;