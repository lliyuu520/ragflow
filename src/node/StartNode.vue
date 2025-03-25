<!-- 开始 -->
<template>
  <div class="custom-node">
    <div class="run">
      <IconBegin width="1.5em" height="1.5em"/>
      <span class="node-label" v-bind="$attrs">开始</span>
    </div>
    <div class="parameters">
      <div class="condition-block">
        <IconTypeBoolean />
        <label for="">1</label>
        <span class="value">2</span>
        <span class="flex-1">No</span>
      </div>
      <div class="condition-block">
        <IconTypeFile />
        <label for="">1</label>
        <span class="value">2</span>
        <span class="flex-1">No</span>
      </div>
      <div class="condition-block">
        <IconTypeInteger />
        <label for="">1</label>
        <span class="value">2</span>
        <span class="flex-1">No</span>
      </div>
      <div class="condition-block">
        <IconTypeLine />
        <label for="">1</label>
        <span class="value">2</span>
        <span class="flex-1">No</span>
      </div>
      <div class="condition-block">
        <IconTypeParagraph />
        <label for="">1</label>
        <span class="value">2</span>
        <span class="flex-1">No</span>
      </div>
      <div class="condition-block">
        <IconTypeOptions />
        <label for="">1</label>
        <span class="value">2</span>
        <span class="flex-1">No</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import IconBegin from '../icons/IconBegin.vue'
import IconTypeBoolean from '../icons/IconTypeBoolean.vue'
import IconTypeFile from '../icons/IconTypeFile.vue'
import IconTypeInteger from '../icons/IconTypeInteger.vue'
import IconTypeLine from '../icons/IconTypeLine.vue'
import IconTypeParagraph from '../icons/IconTypeParagraph.vue'
import IconTypeOptions from '../icons/IconTypeOptions.vue'
</script>

<style scoped>
.custom-node {
  padding: 10px;
  background: #fff;
  box-shadow: -6px 0 12px #b3b1b114, -3px 0 6px -4px #0000001f, -6px 0 16px 6px #0000000d;
  border-radius: 10px;
  font-weight: 600;
}

.custom-node .run {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
}

.custom-node .node-label {
  color: #333;
  font-size: .875rem;
}

.parameters {
  display: grid;
  padding-top: 8px;
  gap: 8px;
  box-sizing: border-box;
  align-items: stretch;
}

.parameters .condition-block {
  gap: 6px;
  border-radius: 4px;
  padding: 6px;
  background: rgba(150, 150, 150, .1);
  display: flex;
  align-items: center;
}

.parameters label {
  flex: 2 1;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  display: block;
  color: #777;
  font-size: 12px;
}

.parameters .value {
  flex: 3 1;
  border-radius: 4px;
  padding: 0 4px;
  background: rgba(150, 150, 150, .2);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-weight: 400;
}
</style>
