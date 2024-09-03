import React, {useContext, useState} from "react";
import './Header.module.scss'
import {Link} from 'react-router-dom';
import {afterLastURLSlash} from "../../constants/constants";
import {webcamStore} from "../../stores";
import {observer} from "mobx-react-lite";


export const Header: React.FC = observer(() => {
    const [page, setPage] = useState(afterLastURLSlash)
    const webcamStore1 = useContext(webcamStore)

    const pageEquals = (value: string) => {
        console.log('1111')
        return page === value
    }

    const needs = (value: string) => {
        setPage(value)
        webcamStore1.isActiveWebcam = false
    }

    return (
        <header className={'header flex-wrap'}>
            {
                pageEquals('/') ?
                    <span className={'header_link_active mb-2'}>Главная</span> :
                    <Link className={'header_link_to mb-2'} onClick={() => needs('/')} to={'/'}>На главную</Link>
            }
            {
                pageEquals('/hand-gesture') ?
                    <span className={'header_link_active'}>Определение жестов</span> :
                    <Link className={'header_link_to'} onClick={() => needs('/hand-gesture')} to={'/hand-gesture'}>Определение
                        жестов</Link>
            }
        </header>
    )
})