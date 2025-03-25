<template>
  <div class="canvas-container">
    <div class="canvas-top">
      <div class="left">
        <div class="left-icon">
          <IconLeft />
        </div>
        <div class="left-content">
          <div class="username">{{ userStore.username }}</div>
          <div class="save-time">已自动保存 {{ saveTime }}</div>
        </div>
      </div>
      <div class="right">
        <button class="run-btn">运行</button>
        <button class="save-btn">保存</button>
      </div>
    </div>
    <div ref="container" class="canvas"></div>
    <!-- 添加上下文菜单 -->
    <div v-if="showContextMenu" class="context-menu" :style="contextMenuStyle">
      <div class="menu-item" @click="handleCopy">复制</div>
      <div class="menu-item" @click="handleDelete">删除</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {onMounted, ref} from 'vue'
import {Graph, Node, Shape} from '@antv/x6'
import IconLeft from '../icons/IconLeft.vue'
import {useUserStore} from '../stores/user'
import {register} from '@antv/x6-vue-shape'
import StartNode from '../node/StartNode.vue'
import KnowledgeNode from '../node/KnowledgeNode.vue'
import createPortsConfig from '../parameter/ports.ts'
import AnswerNode from '../node/AnswerNode.vue'
import DialogueNode from '../node/DialogueNode.vue'
import ClassifyNode from '../node/ClassifyNode.vue'
import MessageNode from '../node/MessageNode.vue'
import OptimizeNode from '../node/OptimizeNode.vue'
import KeywordNode from '../node/KeywordNode.vue'
import ConditionNode from '../node/ConditionNode.vue'
import HubNode from '../node/HubNode.vue'
import ConvertNode from '../node/ConvertNode.vue'
import NoteNode from '../node/NoteNode.vue'
import CycleNode from "../node/CycleNode.vue";

const userStore = useUserStore()
const saveTime = ref('2025-03-14 14:39:20')
const container = ref<HTMLElement | null>(null)
const showContextMenu = ref(false)
const contextMenuStyle = ref({
  left: '0px',
  top: '0px'
})
let currentNode: Node | null = null
let graph: Graph

onMounted(() => {
  if (container.value) {

    register({ shape: 'start-node', component: StartNode })
    register({ shape: 'knowledge-node', component: KnowledgeNode })
    register({ shape: 'answer-node', component: AnswerNode })
    register({ shape: 'dialogue-node', component: DialogueNode })
    register({ shape: 'classify-node', component: ClassifyNode })
    register({ shape: 'message-node', component: MessageNode })
    register({ shape: 'optimize-node', component: OptimizeNode })
    register({ shape: 'keyword-node', component: KeywordNode })
    register({ shape: 'condition-node', component: ConditionNode })
    register({ shape: 'hub-node', component: HubNode })
    register({ shape: 'convert-node', component: ConvertNode })
    register({ shape: 'note-node', component: NoteNode })
    register({shape: 'cycle-node', component: CycleNode})

    graph = new Graph({
      container: container.value,
      grid: {
        size: 20,
        visible: true,
        args: {
          color: '#a0a0a0', // 网点颜色
          thickness: 1 // 网点大小
        }
      }, // 网格
      mousewheel: { // 鼠标滚轮缩放
        enabled: true,  // 是否开启滚轮缩放交互
        zoomAtMousePosition: true,  // 是否将鼠标位置作为中心缩放
        // modifiers: 'ctrl',  // 设置修饰键后需要按下修饰键并滚动鼠标滚轮时才触发画布缩放
        minScale: 1,  // 画布最小缩放
        maxScale: 3.5 // 画布最大缩放
      },
      panning: {  // 画布是否可以拖拽平移
        enabled: true,  // 是否开启画布平移交互
        eventTypes: ['leftMouseDown'] // 触发画布平移的交互方式 [按下鼠标左键移动进行拖拽]
      },
      connecting: { // 连线选项
        snap: true,
        allowBlank: false,
        allowLoop: false,
        highlight: true,
        connector: {
          name: 'smooth', // 使用平滑曲线
          args: {
            radius: 20 // 控制曲线弯曲程度
          }
        },
        connectionPoint: {
          name: 'boundary',
          args: {
            sticky: true
          }
        },
        validateMagnet({ magnet }) {
          // 简化验证逻辑，只要有磁体就允许连接
          return !!magnet
        },
        validateConnection({ sourceCell, targetCell, sourceMagnet, targetMagnet }) {
          if (sourceCell === targetCell) {
            return false
          }
          return !(!sourceMagnet || !targetMagnet)
        },
        createEdge() {
          return new Shape.Edge({
            attrs: {
              line: {
                stroke: 'rgb(202, 197, 245)', // 紫色连接线
                strokeWidth: 2,
                // targetMarker: {
                //   name: 'path',
                //   d: 'M156,222 C227.12379172963153,222 -44.62379172963152,111.86328125 26.5,111.86328125', // 自定义箭头
                //   fill: '#8470ff'
                // },
                targetMarker: 'classic',
                strokeDasharray: '', // 虚线样式
                style: {
                  animation: 'ant-line 30s infinite linear'
                }
              }
            },
            tools: [
              {
                name: 'button-remove',
                args: {
                  distance: 0.5, // 按钮位于连线中间
                  markup: [
                    {
                      tagName: 'circle',
                      selector: 'button',
                      attrs: {
                        r: 6,
                        fill: '#f5f5f5',
                        strokeWidth: 1,
                        stroke: '#ffffff',
                        cursor: 'pointer'
                      }
                    },
                    {
                      tagName: 'path',
                      selector: 'icon',
                      attrs: {
                        d: 'M -2 -2 L 2 2 M -2 2 L 2 -2',
                        stroke: '#000000',
                        strokeWidth: 1,
                        pointerEvents: 'none'
                      }
                    }
                  ]
                }
              }
            ],
            router: {
              name: 'normal' // 使用普通路由，配合smooth连接器
            }
          })
        }
      }
    })

    // 画布1倍
    graph.zoom(1)

    // 注册开始节点
    const startNode = graph.addNode({
      shape: 'start-node', // 使用注册的shape名称
      width: 200,
      height: 40,
      attrs: {
        body: {
          label: '开始'
        }
      },
      data: { type: 'start' }, // 添加数据类型标记
      ports: createPortsConfig('node2', {
        directions: {
          right: true,
          left: false,
          top: false,
          bottom: false
        }
      })
    })
    graph.centerCell(startNode)

    const KnowledgeNode1 = graph.addNode({
      shape: 'note-node', // 使用注册的shape名称
      width: 200,
      height: 62,
      attrs: {
        body: {
          label: '对话'
        }
      },
      data: { type: 'answer' }, // 添加数据类型标记
      ports: createPortsConfig('对话', {
        directions: {
          right: true,
          left: true,
          top: false,
          bottom: false
        }
      })
    })
    // 注册节点居中
    graph.centerCell(KnowledgeNode1)

    // 监听节点右键点击事件
    graph.on('node:contextmenu', ({ e, node }) => {
      // 如果是开始节点则不显示菜单
      if (node.getData()?.type === 'start') return

      e.preventDefault()
      currentNode = node
      showContextMenu.value = true
      contextMenuStyle.value = {
        left: `${e.clientX}px`,
        top: `${e.clientY}px`
      }
    })

    // 点击画布空白处隐藏菜单
    graph.on('blank:click', () => {
      showContextMenu.value = false
    })

    // 处理拖拽
    container.value.addEventListener('dragover', (e) => {
      e.preventDefault()
    })

    container.value.addEventListener('drop', (e) => {
      e.preventDefault()
      const toolType = e.dataTransfer?.getData('toolType')
      const toolName = e.dataTransfer?.getData('toolName')
      if (toolType) {
        const pos = graph.clientToLocal(e.clientX, e.clientY)
        addNode(toolType, toolName, pos.x, pos.y)
      }
    })
  }
})

// 复制节点
const handleCopy = () => {
  if (currentNode) {
    const pos = currentNode.position()
    graph.addNode({
      ...currentNode.toJSON(),
      x: pos.x + 100,
      y: pos.y + 50
    })
    showContextMenu.value = false
  }
}

// 删除节点
const handleDelete = () => {
  if (currentNode) {
    currentNode.remove()
    showContextMenu.value = false
  }
}

// 修改 addNode 函数
const addNode = (type: string, name: string | undefined, x: number, y: number) => {
  name += '_0'
  switch (type) {}
  graph.addNode({
    shape: type + '-node', // 使用注册的shape名称
    width: 200,
    height: 62,
    x: x,
    y: y,
    attrs: {
      body: {
        label: name
      }
    },
    data: { type: type }, // 添加数据类型标记
    ports: createPortsConfig(name, {
      directions: {
        right: true,
        left: true,
        top: false,
        bottom: false
      }
    })
  })
  // const nodeConfig = {
  //   width: 80,
  //   height: 40,
  //   name: name || type,
  //   shape: getNodeShape(type),
  //   portsConfig: {
  //     directions: {
  //       right: true,
  //       left: true,
  //     }
  //   }
  // }
  //
  // createNode(graph, nodeConfig, x, y)
}

const getNodeShape = (type: string) => {
  switch (type) {
    case 'decision':
      return 'polygon'
    case 'document':
      return 'path'
    default:
      return 'rect'
  }
}

</script>

<style scoped>
.canvas-container {
  flex: 1;
  background: #f5f5f5;
  position: relative;
}

.canvas {
  width: 100%;
  height: 100%;
}

.context-menu {
  position: fixed;
  background: white;
  border: 1px solid #e8e8e8;
  border-radius: 4px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  z-index: 1000;
}

.menu-item {
  padding: 8px 16px;
  cursor: pointer;
  font-size: 14px;
}

.menu-item:hover {
  background: #f5f5f5;
}

.x6-node-selected rect {
  stroke: #1890ff !important;
  stroke-width: 2px !important;
}

.x6-edge:hover path {
  stroke: #1890ff;
  stroke-width: 2px;
}

.canvas-top {
  height: 48px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
}

.save-btn {
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 5px 16px;
  border: none;
  border-radius: 4px;
  background: #1890ff;
  color: white;
  cursor: pointer;
  font-size: 14px;
  font-weight: 800;
}

.save-btn:hover {
  background: #40a9ff;
}

.run-btn {
  padding: 5px 16px;
  border: 1px solid #d9d9d9;
  border-radius: 4px;
  background: white;
  color: #666;
  cursor: pointer;
  font-size: 14px;
  margin-right: 24px;
  font-weight: 800;
}

.run-btn:hover {
  color: #40a9ff;
  border-color: #40a9ff;
}

.left {
  display: flex;
  column-gap: 24px;
  row-gap: 24px;
}

.left .left-icon {
  line-height: 52px;
}

.left .left-content {
  line-height: 25px;
}

.left .left-content .username {
  font-weight: 600;
  font-size: 18px;
}

.left .left-content .save-time {
  font-weight: 400;
  font-size: .875rem;
}

.right {
  display: flex;
  align-items: center;
}

/* 添加连接线动画 */
@keyframes ant-line {
  to {
    stroke-dashoffset: -1000;
  }
}

/* 确保连接线样式应用到全局 - 修复选择器 */
:deep(.x6-edge path) {
  stroke-dasharray: 5 5;
  animation: ant-line 30s infinite linear;
}

:deep(.x6-edge:hover path) {
  stroke: #8470ff;
  stroke-width: 2;
}
</style>
