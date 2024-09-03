import React from "react";

interface SpanProps {
    className?: string
    text?: string
}

export const WebcamSpan: React.FC<SpanProps> = ({className, text}) => {
    return (
        <div className={'w-100 mt-3 mb-3 d-flex align-items-center justify-content-center'}>
            <span className={className}>{text}</span>
        </div>
    )
}