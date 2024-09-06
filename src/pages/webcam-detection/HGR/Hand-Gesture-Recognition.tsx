import React from "react";
import {OnOffCam} from "../../../components/webcam-detection/OnOffCam/OnOffCam";
import {WebcamComp} from "../../../components/webcam-detection/Webcam/Webcam";


export const HGR: React.FC = () => {
    return (
        <div className={'d-flex flex-column'}>
            <WebcamComp/>
            <OnOffCam/>
        </div>
    )
}