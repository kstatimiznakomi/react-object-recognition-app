import {action, configure, makeAutoObservable, observable} from "mobx";
import {getVideoFromWebcam} from "../utils/get-video-from-webcam";

configure({enforceActions: 'always'})


export class WebcamStore {
    @observable isActiveWebcam = false
    @observable webcamSource = {} as HTMLMediaElement

    constructor() {
        makeAutoObservable(this)
    }

    @action
    public setWebcamToActive = (isActiveWebcam: boolean) => {
        this.isActiveWebcam = isActiveWebcam
    }

    @action
    private setWebcam = (stream: MediaStream) => {
        this.webcamSource.srcObject = stream
    }

    public setSrcObject = (
        video: React.MutableRefObject<HTMLVideoElement | null | undefined>,
        value: MediaStream
    ) => {
        // @ts-ignore
        video.current.srcObject = value
    }

    @action
    public getWebcam = (video: React.MutableRefObject<HTMLVideoElement | null | undefined>) => {
        try {
            getVideoFromWebcam()
                .then((stream) => {
                    this.setWebcam(stream)
                    // @ts-ignore
                    this.setSrcObject(video, stream)
                })
        } catch (err) {
            console.log(err)
        }
    }

    @action
    public stopWebcam = (video: React.MutableRefObject<HTMLVideoElement | null | undefined>) => {
        // @ts-ignore
        this.setSrcObject(video, null)
    }
}
