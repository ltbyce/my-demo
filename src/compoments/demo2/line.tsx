/**
 * Line
 *
 * author ltbyce created by 2022/9/15
 */

import React, { useRef, useEffect, useContext, useCallback } from "react";
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
import { EchartsGroupContext, EventParams } from "../../context/index";

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

export const Line = () => {
  const { dataIndex, dispatch } = useContext(EchartsGroupContext);
  const echartRef = useRef<any>();
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

  const handleMouseMove = useCallback((params: EventParams) => {
    dispatch!({
      type: "update",
      payload: {
        dataIndex: params.dataIndex
      }
    });
  }, [dispatch]);
  const onEvents = {
    mousemove: handleMouseMove
  };
  useEffect(() => {
    if (echartRef?.current) {
      const echartInstance = echartRef.current.getEchartsInstance();
      if (typeof dataIndex === "number") {
        console.log(dataIndex, "Line");
        echartInstance.dispatchAction({
          type: "showTip",
          seriesIndex: 0,
          dataIndex
        });
      }
    }
  }, [dataIndex]);
  return (
    <ReactEChartsCore
      ref={echartRef}
      echarts={echarts}
      option={option}
      onEvents={onEvents}
    />
  );
};
