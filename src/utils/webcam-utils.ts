import axios from "axios";
import React from "react";


export const webcamUtils = (img: React.MutableRefObject<HTMLImageElement | null | undefined>) => {
    axios.post('http://localhost:8000/webcam_detect/stream/detect')
}
