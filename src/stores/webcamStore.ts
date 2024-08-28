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

    @action
    public getWebcam = (video: React.MutableRefObject<HTMLMediaElement | undefined>) => {
        try {
            getVideoFromWebcam()
                .then((stream) => {
                    this.setWebcam(stream)
                    // @ts-ignore-start
                    //video.current?.srcObject = stream
                    /*console.log(stream)
                    console.log(this.webcamSource.srcObject)*/
                })
        } catch (err) {
            console.log(err)
        }
    }
}