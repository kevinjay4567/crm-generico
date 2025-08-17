<script setup lang="ts">
import MainContent from '@/components/MainContent.vue'
import BaseLayout from '@/layouts/BaseLayout.vue'
</script>

<template>
  <BaseLayout>
    <div class="main-container">
      <MainContent />
    </div>
  </BaseLayout>
</template>

<style scoped>
.main-container {
  display: flex;
  gap: 100px;
}
</style>
