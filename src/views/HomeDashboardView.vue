<script setup lang="ts">
import BaseLayout from '@/layouts/BaseLayout.vue'
import DashboardIndicators from '@/components/DashboardIndicators.vue';
</script>

<template>
  <BaseLayout>
    <DashboardIndicators />
    <div class="grid grid-cols-2">
      <div
        class="w-[705px] p-6 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
        <span class="mb-2 text-xl font-semibold tracking-tight text-gray-900 dark:text-white">Clientes recientes</span>
        <p class="mb-3 text-sm font-normal text-gray-500 dark:text-gray-400">Ultimos clientes agregados</p>

        <ul class="space-y-4 text-left text-gray-500 dark:text-gray-400">
          <li class="flex items-center space-x-3 rtl:space-x-reverse">
            <span>Empresa ABC</span>
            <span
              class="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-sm dark:bg-gray-700 dark:text-blue-400 border border-blue-400">Activo</span>
          </li>
          <li class="flex items-center space-x-3 rtl:space-x-reverse">
            <span>Tech Solutions</span>
            <span
              class="bg-yellow-100 text-yellow-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-sm dark:bg-gray-700 dark:text-yellow-300 border border-yellow-300">Prospecto</span>
          </li>
          <li class="flex items-center space-x-3 rtl:space-x-reverse">
            <span>Marketing Pro</span>
            <span
              class="bg-red-100 text-red-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-sm dark:bg-gray-700 dark:text-red-400 border border-red-400">Inactivo</span>
          </li>
        </ul>
      </div>
      <div
        class="w-[705px] p-6 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
        <span class="mb-2 text-xl font-semibold tracking-tight text-gray-900 dark:text-white">Ventas Recientes</span>
        <p class="mb-3 text-sm font-normal text-gray-500 dark:text-gray-400">Ultimas oportunidades de ventas</p>

        <ul class="space-y-4 text-left text-gray-500 dark:text-gray-400">
          <li class="flex items-center justify-between space-x-3 rtl:space-x-reverse">
            <span>
              <p>
                Empresa ABC
              </p>
              <p>$30.000</p>
            </span>
            <span
              class="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-sm dark:bg-gray-700 dark:text-blue-400 border border-blue-400">Activo</span>
          </li>
          <li class="flex items-center justify-between space-x-3 rtl:space-x-reverse">
            <span>Tech Solutions
              <p>$15.500</p>
            </span>
            <span
              class="bg-yellow-100 text-yellow-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-sm dark:bg-gray-700 dark:text-yellow-300 border border-yellow-300">En
              Progreso</span>
          </li>
          <li class="flex items-center justify-between space-x-3 rtl:space-x-reverse">
            <span>Marketing Pro
              <p>$0</p>
            </span>
            <span
              class="bg-red-100 text-red-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-sm dark:bg-gray-700 dark:text-red-400 border border-red-400">Inactivo</span>
          </li>
        </ul>
      </div>
    </div>
  </BaseLayout>
</template>
