
import Logo from '../Header/Logo.png';

function Header() {
    return (
        <div>
            <img src={Logo} alt="Logo"></img>
            <nav>
                <li>Travel 1</li>
                <li>Travel 2</li>
                <li>Travel 3</li>
            </nav>
        </div>
    )
};

export default Header;