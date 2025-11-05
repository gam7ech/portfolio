import { useEffect, useRef } from 'react';
import './Preloader.scss';

function Preloader() {
    const canvasRef = useRef(null); 

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const isMobile = window.innerWidth <= 768;
        const matrixColor = isMobile ? '#be4d02' : '#0F0';

        const matrix = "ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()_+";
        const font_size = 16;
        const columns = canvas.width / font_size; 

        const drops = [];
        for (let x = 0; x < columns; x++) {
            drops[x] = 1; 
        }

        function draw() {
            ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            ctx.fillStyle = matrixColor;
            ctx.font = font_size + "px arial"; 

            for (let i = 0; i < drops.length; i++) {
                const text = matrix[Math.floor(Math.random() * matrix.length)];
                ctx.fillText(text, i * font_size, drops[i] * font_size);

                if (drops[i] * font_size > canvas.height && Math.random() > 0.975) {
                    drops[i] = 0;
                }
                drops[i]++;
            }
        }

        const intervalId = setInterval(draw, 30);

        return () => clearInterval(intervalId);

    }, []); 

    return (
        <div className="preloader">
            <canvas ref={canvasRef}></canvas>
        </div>
    );
}

export default Preloader;