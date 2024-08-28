import React from "react";
import {OnOffCam} from "../components/OnOffCam/OnOffCam";
import {Webcam} from "../components/Webcam/Webcam";


export const HGR: React.FC = () => {
    return (
        <div className={'container d-flex flex-column'}>
            <Webcam/>
            <OnOffCam/>
        </div>
    )
}