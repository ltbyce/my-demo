/**
 * Demo
 *
 * author ltbyce created by 2022/9/15
 */

import React, { useReducer } from "react";
import { HandStandBar } from "./handstand-bar";
import { Line } from "./line";
import { Scatter } from "./scatter";
import { EchartsGroupContext, reducer } from "../../context/index";
import { XAXIS_DATA, YAXIS_DATA } from "./config";

const Demo2 = () => {
  const [state, dispatch] = useReducer(reducer, {
    dataIndex: undefined
  });
  return (
    <EchartsGroupContext.Provider value={{ ...state, dispatch }}>
      <HandStandBar xdata={XAXIS_DATA} ydata={YAXIS_DATA} />
      <Line />
      <Scatter />
    </EchartsGroupContext.Provider>
  );
};

export default Demo2;
