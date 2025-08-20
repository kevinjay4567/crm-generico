<script setup lang="ts">
import SideMenu from '@/components/SideMenu.vue'
</script>

<template>
  <div class="main-container">
    <SideMenu />
    <div class="p-4 sm:ml-64">
      <slot></slot>
    </div>
  </div>
</template>

<style scoped>
.main-container {
  display: flex;
}
</style>
