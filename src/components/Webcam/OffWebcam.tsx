import React from "react";
import {WebcamSpan} from "./WebcamSpan";

interface WebcamProps {
    className?: string
    text?: string
}

export const OffWebcam: React.FC<WebcamProps> = ({text}) => {
    return (
        <>
            <div>
                <WebcamSpan
                    className={'title'}
                    text={text}/>
            </div>
            <div className={'webcam_img'}></div>
        </>

    )
}