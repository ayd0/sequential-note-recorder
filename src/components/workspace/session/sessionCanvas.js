import { useRef, useEffect } from 'preact/hooks';
import { getModifiers } from './sessionCanvasUtils';

// ==============================================================================
// TODO: * establish and integrate subject data structure for graph tree handling
// ----- * establish paradigm for handling server requests and caching graphed data
// ==============================================================================

export default function SessionCanvas(props) {
    const canvasRef = useRef(null);

    const mods = getModifiers();

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
