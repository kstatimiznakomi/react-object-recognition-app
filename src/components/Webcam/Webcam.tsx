import React, {useContext, useEffect, useRef} from "react";
import {webcamStore} from "../../stores";
import {observer} from "mobx-react-lite";

interface WebcamProps {
    className?: string
    text?: string
}

export const Webcam: React.FC<WebcamProps> = observer(() => {

    const webcamStore1 = useContext(webcamStore)
    const video = useRef<HTMLMediaElement>()

    useEffect(() => {
        if (webcamStore1.isActiveWebcam) {
            webcamStore1.getWebcam(video)
            console.log(webcamStore1.webcamSource)
            video.current?.srcObject = webcamStore1.webcamSource
        }
    }, [webcamStore1, webcamStore1.isActiveWebcam])

    return (
        <div id="img-div" className="image-window mt-3 d-grid justify-content-center">
            <form className="d-flex gap-3 align-items-center" action="#" method="post" encType="multipart/form-data">
                {
                    // <Video ref={video}
                    //        id={'webcamVideo'}/>
                }

                <video id='webcamVideo' src=''/>
                <img alt={'webcamImg'} className="d-none webcam_img" src="" id="webcam"/>
                <canvas className="d-none" id="canvasOwn"/>
                {/*<img alt={'webcamImg'} className="webcam_img" width="200px" src="" id="imgOwn"/>*/}
            </form>
        </div>
    )
})