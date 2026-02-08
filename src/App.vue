<template>
  <div class="min-h-screen bg-slate-200 text-slate-800">
    <AppHeader />
    <RouterView />
  </div>
</template>

<script setup>
import AppHeader from './components/AppHeader.vue'
</script>
