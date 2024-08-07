import React, {ButtonHTMLAttributes, FC} from 'react';

import cls from './Button.module.scss';
import {classNames} from "../../lib/classNames/classNames";

export enum ThemeButton{
    CLEAR='clear',
    OUTLINE='outline',
}
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    className?:string;
    theme?:ThemeButton;
}
export const Button:FC<ButtonProps> = (props) => {
    const{
      className,
        children,
        theme,
        ...otherProps
    }=props;
    return (
        <button className={classNames(cls.buttonT,{},[className,cls[theme]])}
         {...otherProps}
        >
            {children}
        </button>
    );
};

export default Button;