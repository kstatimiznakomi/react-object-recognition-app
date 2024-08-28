import React from "react";

interface VideoProps {
    src?: string
    id?: string | undefined
    srcObject?: MediaProvider | null;
    ref?: React.LegacyRef<HTMLVideoElement> | undefined
}

export const Video: React.FC<VideoProps> = ({src, id, srcObject, ref}) => {
    return (
        <video ref={ref} id={id} src={src}></video>
    )
}