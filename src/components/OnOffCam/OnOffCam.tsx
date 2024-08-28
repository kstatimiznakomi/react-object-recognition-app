import React, {useContext} from "react";
import {Button} from "../shared/Button";
import {webcamStore} from "../../stores";
import {observer} from "mobx-react-lite";

interface OnOffCamProps {
    className?: string
}

export const OnOffCam: React.FC<OnOffCamProps> = observer(({className}) => {

    const webcamStore1 = useContext(webcamStore)

    return (
        <>
            <div className="d-grid gap-3 w-100 mt-3 mb-3 buttons">
                <Button onClick={() => webcamStore1.setWebcamToActive(true)} disabled={webcamStore1.isActiveWebcam}
                        className={'w-100 btn-webcam'}
                        text={'Включить веб-камеру'}/>
                <Button onClick={() => webcamStore1.setWebcamToActive(false)} disabled={!webcamStore1.isActiveWebcam}
                        className={'w-100 btn-webcam'}
                        text={'Выключить веб-камеру'}/>
            </div>
        </>
    )
})