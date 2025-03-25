<template>
  <a-drawer
      v-model:open="open"
      :root-style="{ color: 'blue' }"
      class="custom-class"
      placement="right"
      root-class-name="root-class-name"
      style="color: red"
      title="Basic Drawer"
      @after-open-change="afterOpenChange"
  >
    <p>Some contents...</p>
    <p>Some contents...</p>
    <p>Some contents...</p>
  </a-drawer>
</template>

<script lang="ts" setup>
import {ref} from 'vue';

const afterOpenChange = () => {
  console.log(1234)
}
const open = ref<boolean>(false)

</script>


<style scoped>
.custom-class {
  position: fixed;
  bottom: 0;
  right: 0;
  z-index: 999;
  background: #ffffff;
  width: 500px;
  height: 700px;
}

</style>
