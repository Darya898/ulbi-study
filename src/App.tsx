import React, {Suspense, useContext, useState} from 'react';
import Counter from "./components/Counter";
import './styles/index.scss';
import {Link, Route, Routes} from 'react-router-dom';
import AboutPage from "./pages/AboutPage/AboutPage";
import MainPage from "./pages/MainPage/MainPage";
import {AboutPageAsync} from "./pages/AboutPage/AboutPage.async";
import {MainPageAsync} from "./pages/MainPage/MainPage.async";
import {Theme, ThemeContext} from "./theme/ThemeContext";
import {useTheme} from "./theme/useTheme";
import {classNames} from "./helpers/classNames/classNames";

// export enum Theme{
//     LIGHT='light',
//     DARK='dark',
// }
const App = () => {
const {theme, toggleTheme}=useTheme();
const bool=true;

    return (
        <div className={classNames('app',{},[theme,'cls1'])}>
            <button onClick={toggleTheme}>TOGGLE</button>
            <Link to={'/'}>Главная</Link>
            <Link to={'/about'}>О сайте</Link>
                <Suspense fallback={<div>Loading...</div>}>
                    <Routes>
                    <Route path={'/about'} element={<AboutPageAsync/>}></Route>
                    <Route path={'/'} element={<MainPageAsync/>}></Route>
                    </Routes>
                </Suspense>
        </div>
    );
};

export default App;