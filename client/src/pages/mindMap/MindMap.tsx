import React, { useEffect, useState } from "react";
import { FlowAnalysisGraph, FlowAnalysisGraphConfig } from "@ant-design/charts";
import LoadingScreen from "../../components/Loading/Loading";

//@ts-ignore
const getConfig: (data: any) => FlowAnalysisGraphConfig = (data: any) => ({
  data: data,
  layout: {
    ranksep: 120,
    nodesep: 70,
    controlPoints: false,
  },
  nodeCfg: {
    size: [230, 10],
    padding: 10,
    items: {
      containerStyle: {
        fill: '#efefef',
        radius: 10,
        color: '#206B88',
      },
      padding: 6,
      style: (cfg: any, group: any, type: any) => {
        if (type === 'text') return { fill: '#206B88' }
      },
    },
    nodeStateStyles: {
      hover: {
        stroke: '#fff',
        lineWidth: 2,
      }
    },
    title: {
      containerStyle: {
        fill: '#fff',
        radius: 10,
      },
      style: {
        fill: '#206B88',
        fontSize: 12,
        radius: 10,
      },
    },
    style: {
      fill: '#fff',
      stroke: '#fff',
      radius: 10,
    },
  },
  edgeCfg: {
    label: {
      style: {
        fill: '#206B88',
        fontSize: 14,
        fillOpacity: 1,
      },
    },
    style: {
      stroke: '#fff',
      lineWidth: 2,
      strokeOpacity: 0.6,
    }
    ,
    edgeStateStyles: {
      hover: {
        strokeOpacity: 1,
      },
    },
  },
  behaviors: ['drag-canvas', 'zoom-canvas', 'drag-node'],
});

export const MindMap: React.FC = () => {
  const [data, setData] = useState<any>(null);

  const callBackendAPI = async () => {
    const response = await fetch('/mind-map');
    const body = await response.json();
    if (response.status !== 200) {
      throw Error(body.message)
    }
    return body;
  };

  useEffect(() => {
    callBackendAPI()
      .then(res => setData(res))
      .catch(err => console.log(err));
  }, []);

  if (data === null) {
    return <LoadingScreen />;
  }

  return (
    <div id="treeWrapper" style={{ width: 'calc(100% - 80px)', height: 'calc(100vh - 100px)', margin: 20 }} >
      <FlowAnalysisGraph {...getConfig(data)} style={{ background: 'none' }} />
    </div >
  );
}