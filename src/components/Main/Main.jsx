import './Main.scss';
import { whatsappIcon, telegramIcon, instagramIcon } from '../../assets/images/icons';

function Main() {
    return (
        <main className="main">
            <div className="container">
                <div className="main__content">
                    <h1 className='main__title'>
                        WEB DEVELOPER
                    </h1>
                    <p className='main__subtitle'>
                        Specializing in Responsive Design, UI/UX & Pixel-Perfect Implementation.
                    </p>
                    <p className='main__desc'>
                        GamTech is a creative web development studio. We design and build bespoke websites and applications, focusing on pixel-perfect UI/UX and clean, efficient code to make your brand shine.
                    </p>
                </div>
                <div className="main__socials">
                    <a href="https://wa.me/79932959707"
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="main__social-link">
                        <img src={whatsappIcon} alt="WhatsApp" className="main__social-icon" />
                    </a>
                    <a href="https://t.me/gam7ech" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="main__social-link">
                        <img src={telegramIcon} alt="Telegram" className="main__social-icon" />
                    </a>
                    <a href="https://www.instagram.com/gam7ech"
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="main__social-link">
                        <img src={instagramIcon} alt="Instagram" className="main__social-icon" />
                    </a>
                </div>
            </div>
        </main>
    )
}

export default Main;