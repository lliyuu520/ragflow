interface NodeConfig {
  width: number;
  height: number;
  name: string;
  shape: string;
  portsConfig?: {
    directions?: {
      right?: boolean;
      left?: boolean;
      top?: boolean;
      bottom?: boolean;
    };
  };
}

const createNode = (graph: any, config: NodeConfig, x: number = 0, y: number = 0) => {
  const node = graph.addNode({
    shape: config.shape,
    x,
    y,
    width: config.width,
    height: config.height,
    attrs: {
      body: {
        label: config.name
      }
    },
    data: { type: config.shape },
    ports: createPortsConfig(config.shape, config.portsConfig)
  })
  
  return node
}

// 预设节点配置
export const nodeConfigs = {
  start: {
    width: 200,
    height: 40,
    name: '开始',
    shape: 'start-node',
    portsConfig: {
      directions: {
        right: true,
        left: true,
        top: false,
        bottom: false
      }
    }
  }
}

export default createNode