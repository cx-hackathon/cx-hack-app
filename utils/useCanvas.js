import React, { useEffect, useRef } from "react";

const useCanvas = (draw, preDraw, promiseResolve, frameRate = 30) => {
    const canvasRef = useRef();

    const frameCount = useRef(0);
    
    useEffect(() => {
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');
        let lastFrame = performance.now();
        let animationFrameId;
        
        // const resizeCanvas = (canvas) => {
        //     const { width, height } = canvas.getBoundingClientRect();

        //     if (canvas.width != width || canvas.height != height) {
        //         const { devicePixelRatio:ratio=1 } = window;
        //         const context = canvas.getContext('2d');
        //         canvas.width = width * ratio;
        //         canvas.height = height * ratio;
        //         context.scale(ratio, ratio);
        //         return true;
        //     }
        //     return false;
        // }

        const _preDraw = (ctx, canvas) => {
            ctx.clearRect(0, 0, context.canvas.width, context.canvas.height);
            // resizeCanvas(canvas);
            if (preDraw) preDraw(ctx);
        }
        
        
        const render = () => {
            animationFrameId = window.requestAnimationFrame(render);
            let nowTime = performance.now();
            if (nowTime - lastFrame >= 1 / frameRate * 1000){
                lastFrame = nowTime;
                (frameCount.current)++;
                _preDraw(context, canvas);
                draw(context, frameCount.current);
            }
            promiseResolve();
        }

        // if (eventHandlers) {
        //     Object.keys(eventHandlers).forEach((value, index) => {
        //         canvas.addEventListener(value, (e) => eventHandlers[value](canvas, e))
        //     })
        // }
        
        render();

        return () => {
            window.cancelAnimationFrame(animationFrameId);
        }
    }, [draw])

    // useEffect(() => {
    //     frameCount.current = 0
    // }, [data])
    
    return canvasRef;
}

export default useCanvas;