import { useRef, useEffect } from 'preact/hooks';
import { getModifiers } from './sessionCanvasUtils';

export default function SessionCanvas(props) {
    const canvasRef = useRef(null);

    const mods = getModifiers();
    console.log(mods);

    useEffect(() => {
        const ctx = canvasRef.current.getContext("2d");

        const initialBounds = {
            height: canvasRef.current.height,
            width: canvasRef.current.width,
        };
    });

    const handleClickables = (e, canvas) => {
        const x =
            e.pageX -
            canvas.offsetLeft -
            (Math.ceil(canvas.getBoundingClientRect().x) - canvas.offsetLeft);
        const y = e.pageY - canvas.offsetTop;

        console.log(`Clicked X:${x}, Y:${y}`);
    };

    return (
        <canvas
            ref={canvasRef}
            onClick={(e) => handleClickables(e, canvasRef.current)}
        ></canvas>
    );
}
