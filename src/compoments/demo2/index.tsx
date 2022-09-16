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

const Demo2 = () => {
  const [state, dispatch] = useReducer(reducer, {
    dataIndex: undefined
  });
  return (
    <EchartsGroupContext.Provider value={{ ...state, dispatch }}>
      <HandStandBar />
      <Line />
      <Scatter />
    </EchartsGroupContext.Provider>
  );
};

export default Demo2;
