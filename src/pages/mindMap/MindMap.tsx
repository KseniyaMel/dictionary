import React from "react";
import { FlowAnalysisGraph } from "@ant-design/charts";
import data from "../../data/constants/mind-map";
import getConfig from "./config";
import './MindMap.css';

const MindMap: React.FC = () => (
  <div id="treeWrapper" className="treeWrapper">
    <FlowAnalysisGraph {...getConfig(data)} style={{ background: 'none' }} />
  </div >
);

export default MindMap;