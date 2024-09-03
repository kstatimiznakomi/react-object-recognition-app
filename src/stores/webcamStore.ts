import {action, configure, makeAutoObservable, observable} from "mobx";
import {getVideoFromWebcam} from "../utils/get-video-from-webcam";
import {capture, webcamUtils} from "../utils/webcam-utils";
import React from "react";

configure({enforceActions: 'always'})


export class WebcamStore {
    @observable isActiveWebcam = false
    @observable isVideoToServer = false
    private intervalId: number | undefined

    constructor() {
        makeAutoObservable(this)
    }

    @action
    public startInterval = (
        videoRef: React.MutableRefObject<HTMLVideoElement | null>,
        canvasRef: React.MutableRefObject<HTMLCanvasElement | null>,
        imgRef: React.MutableRefObject<HTMLImageElement | null>
    ) => {
        this.intervalId = window.setInterval(() => {
            capture(videoRef, canvasRef, imgRef)
        }, 50)
    }

    @action
    public stopInterval = () => {
        window.clearInterval(this.intervalId)
        this.intervalId = undefined
    }

    @action
    public setWebcamState = (isActiveWebcam: boolean) => {
        this.isActiveWebcam = isActiveWebcam
        !isActiveWebcam && this.stopInterval()
    }

    @action
    public setWebcamToStream = (isVideoToServer: boolean) => {
        this.isVideoToServer = isVideoToServer
    }

    public setSrcObject = (
        video: React.MutableRefObject<HTMLVideoElement | null>,
        value: MediaStream
    ) => {
        // @ts-ignore
        video.current.srcObject = value
    }

    @action
    public getWebcam = (video: React.MutableRefObject<HTMLVideoElement | null>) => {
        try {
            getVideoFromWebcam()
                .then((stream) => {
                    // @ts-ignore
                    this.setSrcObject(video, stream)
                })
        } catch (err) {
            console.log(err)
        }
    }

    @action
    public stopWebcam = (
        video: React.MutableRefObject<HTMLVideoElement | null | undefined>,
        img: React.MutableRefObject<HTMLImageElement | null>
    ) => {
        this.setWebcamState(false)
        // @ts-ignore
        this.setSrcObject(video, null)
        // @ts-ignore
        img.current.src = null
    }

    @action
    public sendWebcamToServer = (img: React.MutableRefObject<HTMLImageElement | null | undefined>) => {
        webcamUtils(img)
    }
}
