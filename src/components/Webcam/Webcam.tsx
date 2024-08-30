import React, {useContext, useEffect, useRef} from "react";
import {webcamStore} from "../../stores";
import {observer} from "mobx-react-lite";

interface WebcamProps {
    className?: string
    text?: string
}

export const Webcam: React.FC<WebcamProps> = observer(() => {

    const webcamStore1 = useContext(webcamStore)
    const videoRef: React.MutableRefObject<null> = useRef(null)

    useEffect(() => {
        if (webcamStore1.isActiveWebcam) {
            webcamStore1.getWebcam(videoRef)

            if (webcamStore1.webcamSource) {
                // @ts-ignore
                videoRef.current.srcObject = webcamStore1.webcamSource.srcObject
            } else console.log('err')
        } else webcamStore1.stopWebcam(videoRef)
    }, [webcamStore1, webcamStore1.isActiveWebcam])

    return (
        <div id="img-div" className="image-window mt-3 d-grid justify-content-center">
            <form className="d-flex gap-3 align-items-center" action="#" method="post" encType="multipart/form-data">
                {
                    <video className={'webcamVideo'} ref={videoRef}
                           id='webcamVideo' autoPlay={true}/>
                }
                <img alt={'webcamImg'} className="d-none webcam_img" src="" id="webcam"/>
                <canvas className="d-none" id="canvasOwn"/>
                {/*<img alt={'webcamImg'} className="webcam_img" width="200px" src="" id="imgOwn"/>*/}
            </form>
        </div>
    )
})