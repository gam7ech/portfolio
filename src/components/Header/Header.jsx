import './Header.scss';

function Header() {
    return (
        <header className="header">
            <div className="container">
                <a href="/" className="header__logo">
                    Gam7ech
                </a>
                <a href="https://wa.me/79038579707" className='header__phone' target="_blank" rel="noopener noreferrer">
                    +7 (903) 857-97-07
                </a>
            </div>
        </header>
    );
}

export default Header;