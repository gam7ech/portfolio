import { useState, useEffect } from 'react';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import Preloader from './components/Preloader/Preloader';
import './App.scss';

function App() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 2500); // Таймер, по истечении которого прелоадер исчезнет
    
        return () => clearTimeout(timer);
    }, []);
    
    return (
        <>
            {isLoading ? <Preloader /> : (
                <>
                    <Header />
                    <Main />
                    <Footer />
                </>
            )}
        </>
    );
}

export default App;