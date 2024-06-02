import React from 'react';
import {classNames} from "shared/lib/classNames/classNames";
import cls from './LangSwitcher.module.scss';
import i18n from "shared/config/i18n/i18n";
import {useTranslation} from "react-i18next";

import Button, {ThemeButton} from "shared/ui/Button/Button";

interface LangSwitcherProps {
    className?:string;

}

export const LangSwitcher = ({className}:LangSwitcherProps) => {

            const {t,i18n}=useTranslation();
            const toggle=()=>{
            i18n.changeLanguage(i18n.language=='en'?'ru':'en');
        }
            return (
                <Button
                    className={classNames(cls.LangSwitcher,{},[className])}
                    theme={ThemeButton.CLEAR}
                    onClick={toggle}>
                    {t('language')}
                </Button>
            )


};

export default LangSwitcher;