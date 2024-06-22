import React from 'react';
import {classNames} from "shared/lib/classNames/classNames";
import cls from './ErrorPage.module.scss';
import {useTranslation} from "react-i18next";
import Button from "shared/ui/Button/Button";
interface ErrorPageProps {
    className?:string;

}

export const ErrorPage = ({className}:ErrorPageProps) => {
    const {t}=useTranslation();
    const reloadPage=()=>{
      location.reload();
    };
    return (
        <div className={classNames(cls.errorPage,{},[className])}>
<p>{t('get error')}</p>
            <Button onClick={reloadPage}>{t('page reload')}</Button>
        </div>
    );
};

export default ErrorPage;

