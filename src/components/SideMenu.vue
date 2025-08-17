<script setup lang="ts"></script>
<style scoped></style>

<template>
  <div class="side-menu-container">
    <h1>CRM</h1>
    <nav>
      <RouterLink to="/" active-class="active-link">Inicio</RouterLink>
      <RouterLink to="/clients" active-class="active-link">Clientes</RouterLink>
      <RouterLink to="/sells" active-class="active-link">Ventas</RouterLink>
    </nav>
  </div>
</template>

<style scoped>
.active-link {
  background-color: blue;
}
</style>
