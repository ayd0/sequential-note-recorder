import { useRef, useEffect } from 'preact/hooks';

export default function SessionCanvas(props) {
    const canvasRef = useRef(null);
    
    useEffect(() => {
        const ctx = canvasRef.current.getContext('2d');
    })

    const handleClickables = (e, canvas) => {
        const x =
            e.pageX -
            canvas.offsetLeft -
            (Math.ceil(canvas.getBoundingClientRect().x) - canvas.offsetLeft);
        const y = e.pageY - canvas.offsetTop;

        console.log(`Clicked X:${x}, Y:${y}`);
    }

    return <canvas ref={canvasRef} onClick={(e) => handleClickables(e, canvasRef.current)}></canvas>;
}
