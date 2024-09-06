import React from 'react';
import './App.css';
import './css/style.scss'
import {Header} from "./components/Header/Header";
import {Route, Routes} from "react-router-dom";
import {Main} from "./pages/webcam-detection/Main/Main";
import {HGR} from "./pages/webcam-detection/HGR/Hand-Gesture-Recognition";
import {FilesLoader} from "./pages/object-detection/load-imgs/FilesLoader";

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
                    <Route path={'/load'} element={
                        <FilesLoader/>
                    }/>
                </Routes>
            </div>
        </>
    );
}

export default App;