import axios from "axios";
import React from "react";


export const webcamUtils = (img: React.MutableRefObject<HTMLImageElement | null | undefined>) => {
    axios.post('http://localhost:8000/webcam_detect/stream/detect')
}

export const capture = (
    videoRef: React.MutableRefObject<HTMLVideoElement | null>,
    canvas: React.MutableRefObject<HTMLCanvasElement | null>,
    img: React.MutableRefObject<HTMLImageElement | null>
) => {
    const w = 500
    const h = 375
    // @ts-ignore
    canvas.current.width = w
    // @ts-ignore
    canvas.current.height = h
    // @ts-ignore
    const cnt: CanvasRenderingContext2D = canvas.current.getContext('2d')
    // @ts-ignore
    img.current.src = canvas.current.toDataURL('image/jpg')
    // @ts-ignore
    cnt.drawImage(videoRef, 0, 0, w, h)
}

export const captureNew = (img: React.MutableRefObject<HTMLImageElement | null>) => {
    // @ts-ignore

}
