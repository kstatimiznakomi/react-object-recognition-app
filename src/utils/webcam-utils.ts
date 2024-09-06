import React from "react";
import axios from "axios";


export const webcamUtils = (img: React.MutableRefObject<HTMLImageElement | null | undefined>) => {
    axios.post('http://localhost:8000/webcam_detect/stream/detect', {
            image: img.current?.src
        }
    )
}
