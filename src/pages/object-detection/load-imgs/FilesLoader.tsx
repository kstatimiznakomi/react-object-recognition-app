import React, {useRef, useState} from "react";
import {renderToString} from "react-dom/server";

export const FilesLoader: React.FC = () => {

    const inputRef = useRef(null)
    const divRef = useRef(null)
    const [imgsCount, setImgsCount] = useState(0)
    const [isLoading, setIsLoading] = useState(false)

    const image = (image: string) => {
        return <img className={'load__img gap-2 mt-2'} src={image} alt=""/>
    }

    const insertImgIntoDiv = (file: string) => {
        // @ts-ignore
        divRef.current.innerHTML += renderToString(image(file))
    }

    const getImagesFromInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        try {
            setIsLoading(true)
            // @ts-ignore
            const images = e.target.files.length
            setImgsCount(images)
            for (let i = 0; i < images; i++) {
                let reader = new FileReader()
                reader.onload = (e) => {
                    // @ts-ignore
                    insertImgIntoDiv(e.target.result)
                }
                // @ts-ignore
                reader.readAsDataURL(e.target.files[i])
            }
            setIsLoading(false)
        } catch (er) {
            alert(er)
        }
    }

    return (
        <>
            <div className={'d-flex justify-content-center align-items-center'}>
                <div className={'loader__files d-flex mb-3 flex-column align-items-center justify-content-center'}>
                    <div className={'loader__title mb-3 d-flex justify-content-center align-items-center'}>
                        <span className={'white'}>Загрузка</span>
                    </div>
                    <div className={'d-flex flex-column w-100 justify-content-center align-items-center'}>
                        <label
                            className={'d-flex file__input w-100 justify-content-center flex-column align-items-center'}
                            htmlFor={'file_input'}>
                            <span>Загрузите сюда изображения</span>
                        </label>
                        <div className={'d-flex mt-1 mb-1 justify-content-end w-100'}>
                            <span className={'white imgs__count'}>Загружено изображений: {imgsCount}</span>
                        </div>
                        {
                            isLoading ?
                                <div className={'d-flex justify-content-center w-100'}>
                                    <span className={'white '}>Загрузка...</span>
                                </div> : null

                        }
                        <input accept={'image/png, image/gif, image/jpeg'} onChange={getImagesFromInput} ref={inputRef}
                               id={'file_input'}
                               name={'file_input[]'}
                               className={'d-none'} type="file"
                               multiple={true}/>
                        <div ref={divRef}
                             className={'d-flex justify-content-center align-content-center flex-wrap gap-2'}></div>
                    </div>
                </div>
            </div>
        </>
    )
}