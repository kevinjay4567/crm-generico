<script setup lang="ts">
import MainContent from '@/components/MainContent.vue'
import SideMenu from '@/components/SideMenu.vue'
</script>

<template>
  <div class="main-container">
    <SideMenu />
    <MainContent />
  </div>
</template>

<style scoped>
.main-container {
  display: flex;
  gap: 100px;
}
</style>
