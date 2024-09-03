import React, {useContext} from "react";
import {Button} from "../shared/Button";
import {webcamStore} from "../../stores";
import {observer} from "mobx-react-lite";

interface OnOffCamProps {
    className?: string
}

export const OnOffCam: React.FC<OnOffCamProps> = observer(({className}) => {

    const offIfs = () => {
        webcamStore1.setWebcamState(false)
        webcamStore1.setWebcamToStream(false)
    }

    const webcamStore1 = useContext(webcamStore)

    return (
        <>
            <div className="d-flex flex-column gap-3 w-100 mt-3 mb-3 buttons">
                <Button onClick={() => webcamStore1.setWebcamState(true)}
                        disabled={webcamStore1.isActiveWebcam}
                        className={'w-100 btn-webcam'}
                        text={'Включить веб-камеру'}/>
                <Button onClick={() => offIfs()}
                        disabled={!webcamStore1.isActiveWebcam}
                        className={'w-100 btn-webcam'}
                        text={'Выключить веб-камеру'}/>
                <Button className={'w-100 btn-webcam'} onClick={() => webcamStore1.setWebcamToStream(true)}
                        text={'Начать распознавание'}
                        disabled={!webcamStore1.isActiveWebcam}/>
            </div>
        </>
    )
})