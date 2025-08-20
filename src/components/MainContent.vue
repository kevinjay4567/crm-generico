<script setup lang="ts">
import { initFlowbite } from 'flowbite'
import { onMounted } from 'vue'
import ClientsTable from './ClientsTable.vue'

onMounted(() => {
  initFlowbite()
})
</script>

<template>
  <ClientsTable />
</template>
