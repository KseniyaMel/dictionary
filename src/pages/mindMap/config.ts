import { FlowAnalysisGraphConfig } from "@ant-design/charts";

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

export default getConfig;