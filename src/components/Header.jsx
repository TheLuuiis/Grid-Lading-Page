import '../css/components/Header.css';
import Menu from '../assets/images/icon-menu.svg';

const Header = () => {
    return (  
        <header>
            <div className="logo">
                <div className="spot"></div>
                <p>
                    Bridge Collective
                </p>
            </div>
            <div className="menu">
                <img src={Menu} alt="" />
            </div>
        </header>
    );
}
 
export default Header;