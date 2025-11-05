import './Preloader.scss';

function Preloader() {
    return (
        <div className="preloader">
            {/* Текст, который будет "печататься" */}
            <span className="preloader__text">Compiling Gam7ech...</span>
        </div>
    );
}

export default Preloader;