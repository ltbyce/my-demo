/**
 * Line
 *
 * author ltbyce created by 2022/9/15
 */

import React from "react";
import ReactEChartsCore from "echarts-for-react/lib/core";
import * as echarts from "echarts/core";
import {
  GridComponent,
  GridComponentOption,
  TooltipComponent
} from "echarts/components";
import { LineChart, LineSeriesOption } from "echarts/charts";
import { UniversalTransition } from "echarts/features";
import { CanvasRenderer } from "echarts/renderers";

import { XAXIS_DATA, YAXIS_DATA } from "./config";

// register echart component
echarts.use([
  GridComponent,
  LineChart,
  CanvasRenderer,
  UniversalTransition,
  TooltipComponent
]);

type EChartsOption = echarts.ComposeOption<
  GridComponentOption | LineSeriesOption
>;

interface Props {
  /** ref */
  echartRef: React.MutableRefObject<any>;
}

export const Line = (props: Props) => {
  const { echartRef } = props;
  // const echartRef = useRef<any>();
  const option: EChartsOption = {
    tooltip: {
      show: true,
      trigger: "axis"
    },
    xAxis: {
      type: "category",
      boundaryGap: false,
      // prettier-ignore
      data: XAXIS_DATA
    },
    yAxis: {
      type: "value"
    },
    series: [
      {
        data: YAXIS_DATA,
        type: "line",
        smooth: true
      }
    ]
  };
  return <ReactEChartsCore ref={echartRef} echarts={echarts} option={option} />;
};
