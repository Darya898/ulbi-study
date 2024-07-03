import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import 'app/styles/index.scss';
import {Theme} from "app/providers/ThemeProvider";
import {ThemeDecorator} from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import AppLink, {AppLinkTheme} from "shared/ui/AppLink/AppLink";



// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
    title: 'shared/AppLink',
    component: AppLink,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
        layout: 'fullscreen',
    },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
    tags: ['autodocs'],
    // More on argTypes: https://storybook.js.org/docs/api/argtypes
    argTypes: {

    },
    // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
    args: { to:'/'},
} satisfies Meta<typeof AppLink>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
    args: {
        theme:AppLinkTheme.PRIMARY,
        children:'text'
    },

};
export const PrimaryDARK: Story = {
    args: {
        theme:AppLinkTheme.PRIMARY,
        children:'text'
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};
export const SECONDARY: Story = {
    args: {
        theme:AppLinkTheme.SECONDARY,
        children:'text'
    },
    // decorators: [ThemeDecorator(Theme.DARK)],
};
export const SECONDARYDARK: Story = {
    args: {
        theme:AppLinkTheme.SECONDARY,
        children:'text'
    },
     decorators: [ThemeDecorator(Theme.DARK)],
};