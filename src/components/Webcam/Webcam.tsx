import React, {useContext, useEffect, useRef} from "react";
import {webcamStore} from "../../stores";
import {observer} from "mobx-react-lite";
import Webcam from "react-webcam";
import {OffWebcam} from "./OffWebcam";
import {WebcamSpan} from "./WebcamSpan";

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
        <div id="img-div" className="image-window mt-3 d-flex justify-content-center">
            <form className="w-auto d-flex gap-3 flex-column" action="#" method="post"
                  encType="multipart/form-data">
                <div className={'d-flex mb-3 flex-wrap gap-3 justify-content-center align-items-center '}>
                    {
                        webcamStore1.isActiveWebcam ?
                            <>
                                <div>
                                    <WebcamSpan
                                        className={'title'}
                                        text={'Ваша камера'}/>
                                    <Webcam className={'webcamVideo'}
                                            ref={webcamRef}
                                            mirrored={true}
                                            autoPlay={true}
                                            screenshotFormat={"image/jpeg"}
                                            audio={false}
                                            width={500}
                                            height={375}/>
                                </div>
                                <div>
                                    <WebcamSpan
                                        className={'title'}
                                        text={'Распознанный жест'}/>
                                    <OffWebcam/>
                                </div>
                            </> :
                            webcamStore1.isVideoToServer ?
                                <>
                                    <div>
                                        <WebcamSpan
                                            className={'title'}
                                            text={'Ваша камера'}/>
                                        <img ref={imgRef} className={'webcam_img'}/>
                                    </div>

                                </>
                                :
                                <>
                                    <div>
                                        <WebcamSpan
                                            className={'title'}
                                            text={'Ваша камера'}/>
                                        <OffWebcam/>
                                    </div>
                                </>
                    }
                    {
                        !webcamStore1.isActiveWebcam && <>
                            <div>
                                <WebcamSpan
                                    className={'title'}
                                    text={'Распознанный жест'}/>
                                <OffWebcam/>
                            </div>

                        </>
                    }
                </div>
            </form>
        </div>
    )
})