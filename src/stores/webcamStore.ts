import {action, configure, makeAutoObservable, observable} from "mobx";
import {webcamUtils} from "../utils/webcam-utils";
import React from "react";

configure({enforceActions: 'always'})


export class WebcamStore {
    @observable isActiveWebcam = false
    @observable isVideoToServer = false

    constructor() {
        makeAutoObservable(this)
    }

    @action
    public setWebcamState = (isActiveWebcam: boolean) => {
        this.isActiveWebcam = isActiveWebcam
    }

    @action
    public setWebcamToStream = (isVideoToServer: boolean) => {
        this.isVideoToServer = isVideoToServer
    }

    @action
    public sendWebcamToServer = (img: React.MutableRefObject<HTMLImageElement | null | undefined>) => {
        webcamUtils(img)
    }
}
