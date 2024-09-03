import React, {useContext, useEffect, useRef} from "react";
import {webcamStore} from "../../stores";
import {observer} from "mobx-react-lite";
import Webcam from "react-webcam";
import {OffWebcam} from "./OffWebcam";

interface WebcamProps {
    className?: string
    text?: string
}

export const WebcamComp: React.FC<WebcamProps> = observer(() => {

    const webcamStore1 = useContext(webcamStore)
    const webcamRef = useRef(null)
    const imgRef: React.MutableRefObject<HTMLImageElement | null> = useRef(null)


    useEffect(() => {
        webcamStore1.isVideoToServer && (
            // @ts-ignore
            imgRef.current.src = webcamRef.current.getScreenshot()
        )
        /*if (webcamStore1.isActiveWebcam) {
            webcamStore1.getWebcam(videoRef)
            webcamStore1.startInterval(
                videoRef, canvasRef, imgRef
            )
        } else webcamStore1.stopWebcam(videoRef, imgRef)*/
    }, [webcamStore1, webcamStore1.isActiveWebcam, webcamRef])

    return (
        <div id="img-div" className="image-window mt-3 d-flex justify-content-center flex-wrap">
            <form className="d-flex gap-3 align-items-center flex-column" action="#" method="post"
                  encType="multipart/form-data">
                <div className={'w-100 d-flex mt-3'}>
                    <div className={'w-100 d-flex align-items-center justify-content-center'}>
                        <span className={'title'}>Ваша камера</span>
                    </div>
                    <div className={'w-100 d-flex align-items-center justify-content-center'}>
                        <span className={'title'}>Распознанный жест</span>
                    </div>
                </div>
                <div className={'d-flex gap-3'}>
                    {
                        webcamStore1.isActiveWebcam ?
                            <>

                                <Webcam className={'webcamVideo'}
                                        ref={webcamRef}
                                        mirrored={true}
                                        autoPlay={true}
                                        screenshotFormat={"image/jpeg"}
                                        audio={false}
                                        width={500}
                                        height={375}/>
                                <OffWebcam/>
                            </> :
                            webcamStore1.isVideoToServer ?
                                <img ref={imgRef} className={'webcam_img'}/> :
                                <OffWebcam/>
                    }
                    {
                        !webcamStore1.isActiveWebcam && <OffWebcam/>
                    }
                </div>

            </form>
        </div>
    )
})