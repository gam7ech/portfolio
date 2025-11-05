import { useState, useEffect } from 'react'; // 1. Импортируем 'hooks'
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import Preloader from './components/Preloader/Preloader'; // 2. Импортируем наш прелоадер
import './App.scss';

function App() {
    // 3. Создаем "состояние" (state), чтобы следить за загрузкой
    const [isLoading, setIsLoading] = useState(true);

    // 4. Используем 'useEffect' для симуляции загрузки
    useEffect(() => {
        // Мы запускаем таймер. В реальном проекте здесь бы шла загрузка данных.
        const timer = setTimeout(() => {
            setIsLoading(false); // Через 2.5 секунды говорим, что загрузка завершена
        }, 2500); // 2.5 секунды (можешь поменять)
    
        // 5. Это "очистка": если компонент вдруг пропадет, таймер остановится
        return () => clearTimeout(timer);
    }, []); // Пустой массив [] значит, что этот код выполнится 1 раз при старте

    // 6. Управляем тем, что видит пользователь
    return (
        <>
            {/* Это тернарный оператор. 
              "Если isLoading === true, покажи <Preloader />, 
              ИНАЧЕ (:) покажи сайт"
            */}
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