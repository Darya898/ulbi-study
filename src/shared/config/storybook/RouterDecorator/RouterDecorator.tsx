import 'app/styles/index.scss';
import {Decorator, StoryFn} from '@storybook/react';
import {BrowserRouter} from "react-router-dom";
import React from "react";

//export const StyleDecorator=(story:()=>StoryFn)=>story();
export const RouterDecorator: Decorator = Story => {
    return (
        <BrowserRouter>{Story()}</BrowserRouter>
    )
};