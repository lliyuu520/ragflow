<template>
  <div class="app-container">
    <NavBar />
    <div class="content-container">
      <ToolBar />
      <Canvas />
      <Panel/>
    </div>
  </div>
</template>

<script setup lang="ts">
import NavBar from './components/NavBar.vue'
import ToolBar from './components/ToolBar.vue'
import Canvas from './components/Canvas.vue'
import Panel from "./components/Panel.vue";
</script>

<style>
.app-container {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
}

.content-container {
  flex: 1;
  display: flex;
  overflow: hidden;
}
</style>
