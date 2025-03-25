
interface PortAttrs {
  circle: {
    r: number;
    magnet: boolean | string | undefined;
    strokeWidth: number;
    fill: string;
    visibility: string;
  };
  rect: {
    width: string;
    height: string;
    x: number;
    y: number;
    fill: string;
    rx: number;
    ry: number;
  };
  plus: {
    transform: string;
    d: string;
    stroke: string;
    strokeWidth: number;
  };
}

interface PortPosition {
  x: number | string;
  y: number | string;
}

interface PortPositions {
  [key: string]: PortPosition;
}

// 基础连接桩样式配置
const baseAttrs: PortAttrs = {
  circle: {
    r: 7,
    magnet: true,
    strokeWidth: 0,
    fill: 'transparent',
    visibility: 'visible'
  },
  rect: {
    width: '12px',
    height: '12px',
    x: -6,
    y: -5,
    fill: '#3b58fd',
    rx: 6,
    ry: 6
  },
  plus: {
    transform: 'translate(-3, -2)',
    d: 'M3 0 V6 M0 3 H6',
    stroke: '#ffffff',
    strokeWidth: 1
  }
}

// 连接桩标记配置
const baseMarkup = [
  {
    tagName: 'rect',
    selector: 'rect'
  },
  {
    tagName: 'path',
    selector: 'plus'
  },
  {
    tagName: 'circle',
    selector: 'circle'
  }
]

// 连接桩位置配置
const defaultPositions: PortPositions = {
  top: { x: '50%', y: 0 },
  right: { x: 200, y: '50%' },
  bottom: { x: '50%', y: 43 },
  left: { x: 0, y: '50%' }
}

interface PortConfig {
  positions?: PortPositions;
  attrs?: Partial<PortAttrs>;
  directions?: {
    right?: boolean;
    left?: boolean;
    top?: boolean;
    bottom?: boolean;
  };
  magnets?: {
    right?: boolean | string | undefined;
    left?: boolean | string | undefined;
    top?: boolean | string | undefined;
    bottom?: boolean | string | undefined;
  };
}

// 添加 PortItem 接口定义
interface PortItem {
  id: string;
  group: string;
}

const createPortsConfig = (name: string | undefined, config: PortConfig = {}) => {
  const {
    positions = defaultPositions,
    attrs = baseAttrs,
    directions = { right: true, left: true, top: false, bottom: false },
    magnets = { right: true, left: true, top: true, bottom: true }
  } = config

  const groups: Record<string, any> = {}
  const items: PortItem[] = []  // 添加类型注解

  Object.entries(directions).forEach(([direction, enabled]) => {
    if (enabled && positions[direction]) {
      baseAttrs['circle']['magnet'] = magnets[direction];
      groups[direction] = {
        position: {
          name: 'absolute',
          args: positions[direction]
        },
        attrs: {
          ...baseAttrs,
          ...attrs
        },
        markup: baseMarkup
      }

      items.push({
        id: `${name}_${direction}`,
        group: direction
      })
    }
  })

  return {
    groups,
    items
  }
}

export default createPortsConfig