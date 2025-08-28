<script setup lang="ts">
import MainHeader from '@/components/MainHeader.vue';
import NavBar from '@/components/NavBar.vue';
</script>

<template>
  <div>
    <MainHeader />
    <div class="pt-10 pl-10 lg:pr-32 flex flex-col gap-5">
      <NavBar />
      <slot></slot>
    </div>
  </div>
</template>
