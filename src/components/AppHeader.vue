<template>
  <header class="sticky top-0 z-40 border-b border-slate-200 bg-white/90 backdrop-blur-sm">
    <div class="max-w-5xl mx-auto px-6 py-3 flex items-center justify-between">
      <RouterLink to="/" class="text-slate-800 font-semibold hover:text-indigo-600 transition">
        Thiago Silva
      </RouterLink>
      <nav class="flex items-center gap-4">
        <RouterLink
          to="/"
          class="text-sm text-slate-600 hover:text-slate-900"
          active-class="text-indigo-600 font-medium"
        >
          Início
        </RouterLink>
        <RouterLink
          to="/catalogo"
          class="text-sm text-slate-600 hover:text-slate-900"
          active-class="text-indigo-600 font-medium"
        >
          Catálogo
        </RouterLink>
      </nav>
    </div>
  </header>
</template>

<script setup>
</script>
