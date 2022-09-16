/**
 * Scatter
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
import { ScatterChart, ScatterSeriesOption } from "echarts/charts";
import { UniversalTransition } from "echarts/features";
import { CanvasRenderer } from "echarts/renderers";
import { EchartsGroupContext, EventParams } from "../../context/index";
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

export const Scatter = () => {
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
        console.log(dataIndex, "Scatter");
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
