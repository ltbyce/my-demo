/**
 * HandStandBar
 *
 * author ltbyce created by 2022/9/15
 */

import React, { useEffect, useRef, useContext, memo, useCallback } from "react";
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
import { EchartsGroupContext, EventParams, InitialValue } from "../../context/index";

// register echart component
echarts.use([GridComponent, BarChart, CanvasRenderer, TooltipComponent]);

type EChartsOption = echarts.ComposeOption<
  GridComponentOption | BarSeriesOption
>;

export const HandStandBar = memo(() => {
  const echartRef = useRef<any>();
  const { dataIndex, dispatch } = useContext<InitialValue>(EchartsGroupContext);
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
        console.log(dataIndex, "Bar");
        echartInstance.dispatchAction({
          type: "showTip"
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
});
