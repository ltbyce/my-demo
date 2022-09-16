/**
 * HandStandBar
 *
 * author ltbyce created by 2022/9/15
 */

import React, { memo } from "react";
import ReactEChartsCore from "echarts-for-react/lib/core";
import * as echarts from "echarts/core";
import {
  GridComponent,
  GridComponentOption,
  TooltipComponent
} from "echarts/components";
import { BarChart, BarSeriesOption } from "echarts/charts";
import { CanvasRenderer } from "echarts/renderers";
import { XAXIS_DATA, YAXIS_DATA } from "./config";

// register echart component
echarts.use([GridComponent, BarChart, CanvasRenderer, TooltipComponent]);

type EChartsOption = echarts.ComposeOption<
  GridComponentOption | BarSeriesOption
>;

interface Props {
  /** ref */
  echartRef: React.MutableRefObject<any>;
}

export const HandStandBar = memo((props: Props) => {
  const { echartRef } = props;
  // const echartRef = useRef<any>();
  const option: EChartsOption = {
    tooltip: {
      show: true,
      trigger: "axis"
    },
    xAxis: {
      type: "category",
      // position: "top",
      boundaryGap: false,
      // prettier-ignore
      data: XAXIS_DATA
    },
    yAxis: {
      type: "value",
      // Y轴数据逆向
      inverse: true
    },
    series: [
      {
        data: YAXIS_DATA,
        type: "bar",
        showBackground: true,
        backgroundStyle: {
          color: "rgba(180, 180, 180, 0.2)"
        }
      }
    ]
  };
  return <ReactEChartsCore ref={echartRef} echarts={echarts} option={option} />;
});
