<template>
  <div class="tool-bar">
    <div class="tool-section">
      <div
        v-for="tool in tools"
        :key="tool.type"
        class="tool-item"
        draggable="true"
        @dragstart="onDragStart($event, tool)"
      >
        <component :is="tool.icon" :color="tool.color" />
        <span class="tool-name">{{ tool.name }}</span>
      </div>

    </div>
  </div>
</template>

<script setup lang="ts">
import IconRocket from '../icons/IconRocket.vue'
import IconMerge from '../icons/IconMerge.vue'
import IconSend from '../icons/IconSend.vue'
import IconDatabase from '../icons/IconDatabase.vue'
import IconMessage from '../icons/IconMessage.vue'
import IconForm from '../icons/IconForm.vue'
import IconAnt from '../icons/IconAnt.vue'
import IconLine from '../icons/IconLine.vue'
import IconRadiator from '../icons/IconRadiator.vue'
import IconBall from '../icons/IconBall.vue'
import IconRefresh from '../icons/IconRefresh.vue'
import IconBook from '../icons/IconBook.vue'

const tools = [
  { type: 'knowledge', name: '知识检索', icon: IconRocket, color: 'rgb(56, 89, 116)' },
  { type: 'answer', name: '生成回答', icon: IconMerge, color: 'rgb(153, 100, 100)' },
  { type: 'dialogue', name: '对话', icon: IconSend, color: 'rgb(244, 129, 109)' },
  { type: 'classify', name: '问题分类', icon: IconDatabase, color: 'rgb(204, 138, 38)' },
  { type: 'message', name: '静态消息', icon: IconMessage, color: 'green' },
  { type: 'optimize', name: '问题优化', icon: IconForm, color: 'rgb(243, 43, 243)' },
  { type: 'keyword', name: '关键词', icon: IconAnt, color: 'rgb(110, 84, 148)' },
  { type: 'condition', name: '条件', icon: IconLine, color: 'rgb(219, 175, 246)' },
  { type: 'hub', name: '集线器', icon: IconRadiator, color: 'rgb(50, 210, 163)' },
  { type: 'convert', name: '模板转换', icon: IconBall },
  { type: 'cycle', name: '循环', icon: IconRefresh, color: '#3b76f4' },
  { type: 'note', name: '注释', icon: IconBook },
]

const onDragStart = (event: DragEvent, tool: any) => {
  if (event.dataTransfer) {
    event.dataTransfer.setData('toolType', tool.type)
    event.dataTransfer.setData('toolName', tool.name)
  }
}
</script>

<style scoped>
.tool-bar {
  width: 200px;
  background: #fff;
  border-right: 1px solid #e8e8e8;
  padding: 10px 4px;
  overflow-y: auto;
  font-size: 14px;
}

.tool-section {
  margin-bottom: 20px;
}

.tool-item {
  display: flex;
  align-items: center;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 4px;
  font-size: 24px;
  gap: 15px;
  cursor: pointer;
  transition: box-shadow 0.2s, border-color 0.2s;
  border: 1px solid #f0f0f0;
}

.tool-item:hover {
  border-color: transparent;
  box-shadow: 0 1px 2px -2px rgba(0, 0, 0, 0.16), 0 3px 6px 0 rgba(0, 0, 0, 0.12), 0 5px 12px 4px rgba(0, 0, 0, 0.09);
}

.tool-name {
  color: #333;
  font-size: 14px;
  font-weight: bold;
}

</style>