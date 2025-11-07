import './Footer.scss';

function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <p className="footer__copyright">
                    © {new Date().getFullYear()} Gam7ech. All rights reserved.
                </p>
            </div>
        </footer>
    );
}

export default Footer;