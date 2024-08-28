import React from 'react';
import './App.css';
import './css/style.scss'
import {Header} from "./components/Header/Header";
import {Route, Routes} from "react-router-dom";
import {Main} from "./components/Main/Main";
import {HGR} from "./pages/Hand-Gesture-Recognition";

export function App() {
    return (
        <>
            <div className={'container'}>
                <Header/>
                <Routes>
                    <Route path={'/'} element={
                        <Main/>
                    }/>
                    <Route path={'/hand-gesture'} element={
                        <HGR/>
                    }>
                    </Route>
                </Routes>
            </div>
        </>
    );
}

export default App;