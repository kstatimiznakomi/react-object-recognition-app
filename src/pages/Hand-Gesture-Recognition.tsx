import React from "react";
import {OnOffCam} from "../components/OnOffCam/OnOffCam";
import {WebcamComp} from "../components/Webcam/Webcam";


export const HGR: React.FC = () => {
    return (
        <div className={'container d-flex flex-column'}>
            <WebcamComp/>
            <OnOffCam/>
        </div>
    )
}