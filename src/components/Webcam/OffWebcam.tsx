import React from "react";

interface WebcamProps {
    className?: string
    text?: string
}

export const OffWebcam: React.FC<WebcamProps> = () => {
    return (
        <div className={'webcam_img'}></div>
    )
}