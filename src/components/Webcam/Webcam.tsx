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
    const webcamRef: React.MutableRefObject<Webcam | null> = useRef(null)
    const imgRef: React.MutableRefObject<HTMLImageElement | null> = useRef(null)
    let intervalId: number | undefined

    const videoToImg = () => {
        intervalId = window.setInterval(() => {
            // eslint-disable-next-line @typescript-eslint/no-unused-expressions
            webcamStore1.isVideoToServer && (
                // @ts-ignore
                imgRef.current.src = webcamRef.current.getScreenshot()
            )
        }, 100)
    }

    const bigCondition = () => {
        if (webcamStore1.isActiveWebcam) {
            if (webcamStore1.isVideoToServer) {
                return <>
                    <div>
                        <WebcamSpan
                            className={'title'}
                            text={'Ваша камера'}/>
                        <Webcam onPlaying={() => videoToImg()}
                                className={'webcamVideo'}
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
                        <img alt={''} ref={imgRef} className={'webcam_img'}/>
                    </div>
                </>
            } else return <>
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
                    <OffWebcam text={'Распознанный жест'}/>
                </div>
            </>

        } else return <>
            <div>
                <OffWebcam text={'Ваша камера'}/>
            </div>
            <div>
                <OffWebcam text={'Распознанный жест'}/>
            </div>
        </>
    }

    useEffect(() => {
        videoToImg()
    })

    return (
        <div id="img-div" className="image-window mt-3 d-flex justify-content-center">
            <form className="w-auto d-flex gap-3 flex-column" action="#" method="post"
                  encType="multipart/form-data">
                <div className={'d-flex mb-3 flex-wrap gap-3 justify-content-center align-items-center '}>
                    {
                        bigCondition()
                    }
                </div>
            </form>
        </div>
    )
})