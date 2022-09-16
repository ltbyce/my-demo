/**
 * Demo
 *
 * author ltbyce created by 2022/9/15
 */

import React, { useEffect, useRef } from "react";
import * as echarts from "echarts/core";

import { HandStandBar } from "./handstand-bar";
import { Line } from "./line";
import { Scatter } from "./scatter";

const Demo1 = () => {
  const barRef = useRef<any>();
  const lineRef = useRef<any>();
  const scatterRef = useRef<any>();
  useEffect(() => {
    setTimeout(() => {
      const barRefInstance = barRef.current?.getEchartsInstance();
      const lineRefInstance = lineRef.current?.getEchartsInstance();
      const scatterRefInstance = scatterRef.current?.getEchartsInstance();
      if (barRefInstance && lineRefInstance && scatterRefInstance) {
        echarts.connect([barRefInstance, lineRefInstance, scatterRefInstance]);
      }
    }, 0);
  }, []);
  return (
    <>
      <HandStandBar echartRef={barRef} />
      <Line echartRef={lineRef} />
      <Scatter echartRef={scatterRef} />
    </>
  );
};

export default Demo1;
