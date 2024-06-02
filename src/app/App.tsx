import React, {Suspense, useContext, useState} from 'react';
import './styles/index.scss';
import {Link, Route, Routes} from 'react-router-dom';
import {AboutPage} from "pages/AboutPage";
import {classNames} from "shared/lib/classNames/classNames";
import {useTheme} from "app/providers/ThemeProvider";
import {MainPage} from "pages/MainPage";
import {AppRouter} from "app/providers/router";
import {Navbar} from "widgets/Navbar";
import {Sidebar} from "widgets/Sidebar";
import i18n from "shared/config/i18n/i18n";
import {useTranslation} from "react-i18next";



const App = () => {
const {theme}=useTheme();



    return (
        <div className={classNames('app',{},[theme,'cls1'])}>
            <Suspense fallback="loading">


            <Navbar/>
            <div className="content-page">
                <Sidebar></Sidebar>
                <AppRouter/>
            </div>
            </Suspense>


        </div>
    );
};

export default App;