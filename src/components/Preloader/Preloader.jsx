import { useEffect, useRef } from 'react'; // Добавляем useRef для доступа к canvas
import './Preloader.scss';

function Preloader() {
    const canvasRef = useRef(null); // Создаем ссылку на элемент canvas

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');

        // Устанавливаем размер canvas на весь экран
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const matrix = "ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()_+"; // Символы матрицы
        const font_size = 16;
        const columns = canvas.width / font_size; // Количество столбцов

        // Каждая колонка имеет свой "y" (позиция падающего символа)
        const drops = [];
        for (let x = 0; x < columns; x++) {
            drops[x] = 1; // Начинаем с первой строки
        }

        function draw() {
            // Фон: слегка прозрачный черный, чтобы создать эффект "шлейфа"
            ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            // Цвет текста (зеленый)
            ctx.fillStyle = "#0F0"; 
            ctx.font = font_size + "px arial"; // Шрифт

            // Рисуем каждый "падающий" символ
            for (let i = 0; i < drops.length; i++) {
                const text = matrix[Math.floor(Math.random() * matrix.length)];
                ctx.fillText(text, i * font_size, drops[i] * font_size);

                // Отправляем символ вниз, если он достиг дна, то начинаем снова
                if (drops[i] * font_size > canvas.height && Math.random() > 0.975) {
                    drops[i] = 0;
                }
                drops[i]++;
            }
        }

        // Запускаем анимацию. 30ms - скорость, как быстро будет обновляться
        const intervalId = setInterval(draw, 30);

        // Очистка при размонтировании компонента (важно для React)
        return () => clearInterval(intervalId);

    }, []); // Пустой массив зависимостей: useEffect сработает только один раз

    return (
        <div className="preloader">
            <canvas ref={canvasRef}></canvas> {/* Здесь будет рисоваться матрица */}
        </div>
    );
}

export default Preloader;