import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';
import { HandStandBar } from './handstand-bar'
import { XAXIS_DATA, YAXIS_DATA } from "./config";

export default {
    title: 'demo bar',
    component: HandStandBar,
    // 组件参数
    argTypes: {}
} as ComponentMeta<typeof HandStandBar>;


const Template: ComponentStory<typeof HandStandBar> = (args) => <HandStandBar {...args} />;

export const 常规 = Template.bind({});

常规.args = {
    xdata: XAXIS_DATA,
    ydata: YAXIS_DATA,
}

const YDATA: any = [
    6,
    9,
    undefined,
    7,
    6,
    9,
    6,
    8,
    10,
    9,
    8,
    9,
    9,
    3,
    9,
    3,
    8,
    4,
    2,
    9,
    7,
    5,
    3,
    7,
    undefined,
    9,
    4,
    8,
    2,
    8,
    9,
    3,
    4,
    5,
    7,
    2,
    5
]

export const Y轴参数缺失 = Template.bind({});
Y轴参数缺失.args = {
    xdata: XAXIS_DATA,
    ydata: YDATA
}