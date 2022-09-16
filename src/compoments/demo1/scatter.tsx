/**
 * Scatter
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
import { ScatterChart, ScatterSeriesOption } from "echarts/charts";
import { UniversalTransition } from "echarts/features";
import { CanvasRenderer } from "echarts/renderers";
import { XAXIS_DATA, YAXIS_DATA } from "./config";

// register echart component
echarts.use([
  GridComponent,
  TooltipComponent,
  ScatterChart,
  CanvasRenderer,
  UniversalTransition
]);

type EChartsOption = echarts.ComposeOption<
  GridComponentOption | ScatterSeriesOption
>;

interface Props {
  /** ref */
  echartRef: React.MutableRefObject<any>;
}

export const Scatter = (props: Props) => {
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
    yAxis: {},
    series: [
      {
        name: "aaa",
        symbolSize: 9,
        data: YAXIS_DATA,
        type: "scatter"
      }
    ]
  };

  return <ReactEChartsCore ref={echartRef} echarts={echarts} option={option} />;
};
