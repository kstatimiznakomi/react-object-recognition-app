import React from "react";

export const Main: React.FC = () => {
    return (
        <div className={'d-flex align-items-center justify-content-center main-text w-100 h-100 text-center'}>
            <p>
                Данное приложение создано в качестве интеграции библиотеки react для приложения по распознаванию
                объектов.
                Здесь в будущем (надеюсь) будут различные варианты распознавания.
            </p>
        </div>
    )
}