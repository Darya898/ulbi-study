import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import {Button, ThemeButton} from './Button';
import 'app/styles/index.scss';
import {StyleDecorator} from "shared/config/storybook/StyleDecorator/StyleDecorator";
import {ThemeDecorator} from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import {Theme} from "app/providers/ThemeProvider";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
    title: 'shared/Button',
    component: Button,
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
    args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
    args: {
     children:'Text'
    },
};
export const PrimaryDark: Story = {
    args: {
        children:'Text'
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};
export const Clear: Story = {
    args: {
        children:'Text',
        theme:ThemeButton.CLEAR
    },
};

export const ClearDark: Story = {
    args: {
        children:'Text',
        theme:ThemeButton.CLEAR
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};

export const Outline: Story = {
    args: {
        children:'Text',
        theme:ThemeButton.OUTLINE,

    },
};
export const OutlineDark: Story = {
    args: {
        children:'Text',
        theme:ThemeButton.OUTLINE,

    },
    decorators: [ThemeDecorator(Theme.DARK)],
};


