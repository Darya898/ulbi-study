import {Decorator, StoryFn} from "@storybook/react";
import React from "react";

export const ThemeDecorator=(theme:string)=>(StoryComponent: StoryFn) => (
    <div className={`app ${theme}`}>
        {/* 👇 Decorators in Storybook also accept a function. Replace <Story/> with Story() to enable it  */}
        <StoryComponent />
    </div>
);