import React, {useState} from "react";
import './Header.module.scss'
import {Link} from 'react-router-dom';
import {afterLastURLSlash} from "../../constants/constants";


export const Header: React.FC = () => {
    const [page, setPage] = useState(afterLastURLSlash)

    const pageEquals = (value: string) => {
        console.log('1111')
        return page === value
    }

    return (
        <header className={'header'}>
            {
                pageEquals('/') ?
                    <span className={'header_link_active'}>Главная</span> :
                    <Link className={'header_link_to'} onClick={() => setPage('/')} to={'/'}>На главную</Link>
            }
            {
                pageEquals('/hand-gesture') ?
                    <span className={'header_link_active'}>Определение жестов</span> :
                    <Link className={'header_link_to'} onClick={() => setPage('/hand-gesture')} to={'/hand-gesture'}>Определение
                        жестов</Link>
            }
        </header>
    )
}