<template>
  <header
    class="sticky top-0 z-40 border-b backdrop-blur-md"
    :class="
      isHome
        ? 'border-white/10 bg-ink/80'
        : 'border-slate-200/80 bg-white/90'
    "
  >
    <div
      class="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-3 lg:px-8"
    >
      <RouterLink
        to="/"
        class="font-display text-lg font-bold tracking-tight transition"
        :class="
          isHome
            ? 'text-white hover:text-accent-soft'
            : 'text-ink hover:text-accent'
        "
      >
        DevSilva
      </RouterLink>

      <nav class="flex items-center gap-5 sm:gap-8">
        <RouterLink
          to="/"
          class="hidden text-sm font-medium transition sm:inline"
          :class="linkClass"
          :active-class="activeClass"
        >
          Início
        </RouterLink>
        <RouterLink
          to="/portfolio"
          class="text-sm font-medium transition"
          :class="linkClass"
          :active-class="activeClass"
        >
          Cases
        </RouterLink>
        <RouterLink
          to="/catalogo"
          class="text-sm font-medium transition"
          :class="linkClass"
          :active-class="activeClass"
        >
          Catálogo
        </RouterLink>
        <a
          href="https://wa.me/5512997675736"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center justify-center rounded-lg bg-accent px-3.5 py-2 text-sm font-semibold text-white transition hover:bg-accent-hover"
        >
          WhatsApp
        </a>
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
    ? 'text-white/85 hover:text-white'
    : 'text-ink-muted hover:text-ink',
)

const activeClass = computed(() =>
  isHome.value ? 'text-accent-soft font-semibold' : 'text-accent font-semibold',
)
</script>
