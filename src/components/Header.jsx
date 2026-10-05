import { useEffect, useState } from 'react';
import '../css/components/Header.css';
import Menu from '../assets/images/icon-menu.svg';
import Close from '../assets/images/icon-close.svg';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navItems = ['About', 'Our Work', 'Partners', 'Annual Report', 'Donate'];

    useEffect(() => {
        document.body.style.overflow = isMenuOpen ? 'hidden' : '';

        return () => {
            document.body.style.overflow = '';
        };
    }, [isMenuOpen]);

    return (  
        <header className={isMenuOpen ? 'menu-open' : ''}>
            <div className="logo">
                <div className="spot"></div>
                <p>
                    Bridge Collective
                </p>
            </div>
            <button
                type="button"
                className="menu"
                aria-expanded={isMenuOpen}
                aria-controls="header-navigation"
                aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
                onClick={() => setIsMenuOpen((currentState) => !currentState)}
            >
                <img src={isMenuOpen ? Close : Menu} alt="" aria-hidden="true" />
            </button>
            <nav
                id="header-navigation"
                className={`header-nav ${isMenuOpen ? 'is-open' : ''}`}
                aria-hidden={!isMenuOpen}
            >
                <ul>
                    {navItems.map((item) => (
                        <li key={item}>
                            <a href="#" onClick={() => setIsMenuOpen(false)}>{item}</a>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
}
 
export default Header;