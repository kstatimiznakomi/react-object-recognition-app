import React, {useRef} from "react";
import {renderToString} from "react-dom/server";

export const FilesLoader: React.FC = () => {

    const inputRef = useRef(null)
    const divRef = useRef(null)

    const image = (image: string) => {
        return <img className={'load__img gap-2 mt-2'} src={image} alt=""/>
    }

    const insertImgIntoDiv = (file: string) => {
        const imageInDiv = image(file)
        // @ts-ignore
        divRef.current.innerHTML += renderToString(imageInDiv)

    }

    const getImagesFromInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        try {
            // @ts-ignore
            const images = e.target.files.length
            let reader = new FileReader()

            // @ts-ignore
            reader.onload = (e) => {
                // @ts-ignore
                for (let i = 0; i < images; i++) {
                    // @ts-ignore
                    insertImgIntoDiv(e.target.result)
                }
            }
            // @ts-ignore
            reader.readAsDataURL(e.target.files[1])
        } catch (er) {
            alert(er)
        }
    }

    return (
        <>
            <div className={'container d-flex justify-content-center align-items-center'}>
                <div
                    className={'loader__files d-flex flex-column align-items-center justify-content-center'}>
                    <div className={'loader__title mt-3 mb-3 d-flex justify-content-center align-items-center'}>
                        <span className={'white'}>Загрузка</span>
                    </div>
                    <div className={'d-flex flex-column justify-content-center align-items-center'}>
                        <label className={'d-flex file__input justify-content-center flex-column align-items-center'}
                               htmlFor={'file_input'}>
                            <span>Загрузите сюда изображения</span>
                        </label>
                        <input accept={'image/png, image/gif, image/jpeg'} onChange={getImagesFromInput} ref={inputRef}
                               id={'file_input'}
                               name={'file_input[]'}
                               className={'d-none'} type="file"
                               multiple={true}/>
                        <div ref={divRef} className={'d-flex justify-content-center align-content-center'}>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}