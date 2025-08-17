<script setup lang="ts">
import SideMenu from '@/components/SideMenu.vue'
</script>

<template>
  <div class="main-container">
    <SideMenu />
    <slot></slot>
  </div>
</template>

<style scoped>
.main-container {
  display: flex;
}
</style>
