<template>
  <header
    class="sticky top-0 z-40 border-b backdrop-blur-sm"
    :class="
      isHome
        ? 'border-white/10 bg-slate-950/75'
        : 'border-slate-200 bg-white/90'
    "
  >
    <div
      class="mx-auto flex items-center justify-between py-3"
      :class="isHome ? 'max-w-7xl px-6 lg:px-16' : 'max-w-5xl px-6'"
    >
      <RouterLink
        to="/"
        class="font-semibold transition"
        :class="
          isHome
            ? 'text-white hover:text-cyan-200'
            : 'text-slate-800 hover:text-indigo-600'
        "
      >
        Thiago Silva
      </RouterLink>
      <nav class="flex items-center gap-6 lg:gap-10">
        <RouterLink
          to="/"
          class="text-sm transition"
          :class="linkClass"
          :active-class="activeClass"
        >
          Início
        </RouterLink>
        <RouterLink
          to="/portfolio"
          class="text-sm transition"
          :class="linkClass"
          :active-class="activeClass"
        >
          Portfólio
        </RouterLink>
        <RouterLink
          to="/catalogo"
          class="text-sm transition"
          :class="linkClass"
          :active-class="activeClass"
        >
          Catálogo
        </RouterLink>
      </nav>
    </div>
  </header>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const isHome = computed(() => route.path === '/')

const linkClass = computed(() =>
  isHome.value
    ? 'text-white/90 hover:text-cyan-200'
    : 'text-slate-600 hover:text-slate-900',
)

const activeClass = computed(() =>
  isHome.value ? 'text-cyan-300 font-medium' : 'text-indigo-600 font-medium',
)
</script>
