<template>
  <main class="min-h-screen bg-base text-ink">
    <!-- Hero do catálogo -->
    <section class="border-b border-slate-200 bg-white">
      <div class="mx-auto max-w-6xl px-6 py-12 lg:px-8">
        <p class="text-sm font-semibold uppercase tracking-widest text-accent">
          Catálogo
        </p>
        <h1 class="mt-2 font-display text-3xl font-bold text-ink md:text-4xl">
          Padrões que entregamos
        </h1>
        <p class="mt-3 max-w-2xl text-ink-muted">
          Showroom dos fluxos e componentes que a DevSilva reutiliza em projetos reais.
          Cada bloco pode entrar no seu produto: CRUD, dashboards, uploads, formulários e mais.
        </p>
      </div>
    </section>

    <!-- Demo ao vivo (quando um item é selecionado) -->
    <section
      v-if="selectedItem"
      ref="demoSectionRef"
      class="border-b border-slate-200 bg-base py-8"
    >
      <div class="mx-auto max-w-6xl px-6 lg:px-8">
        <div class="mb-4 flex items-center justify-between">
          <h2 class="font-display text-xl font-semibold text-ink">
            Demo: {{ selectedItem.title }}
          </h2>
          <button
            type="button"
            class="rounded-lg border border-slate-300 px-4 py-2 text-sm font-medium text-ink-muted transition hover:bg-white"
            @click="closeDemo"
          >
            Fechar demo
          </button>
        </div>
        <div class="rounded-xl border border-slate-200 bg-white p-4 md:p-6">
          <component
            :is="demoComponent"
            v-if="demoComponent"
            :key="demoKey"
          />
        </div>
      </div>
    </section>

    <!-- Grid de categorias -->
    <section class="mx-auto max-w-6xl px-6 py-10 lg:px-8">
      <div class="space-y-10">
        <article
          v-for="category in catalogCategories"
          :key="category.id"
          class="overflow-hidden rounded-xl border border-slate-200 bg-white"
        >
          <div class="border-b border-slate-100 bg-base/50 p-5 md:p-6">
            <div class="flex items-start gap-3">
              <span class="text-2xl" aria-hidden="true">{{ category.icon }}</span>
              <div>
                <h2 class="font-display text-xl font-bold text-ink">
                  {{ category.title }}
                </h2>
                <p class="mt-1 text-sm text-ink-muted">
                  {{ category.description }}
                </p>
              </div>
            </div>
          </div>
          <ul class="divide-y divide-slate-100">
            <li
              v-for="item in category.items"
              :key="item.id"
              class="flex flex-col gap-3 p-5 sm:flex-row sm:items-center sm:justify-between md:p-6"
            >
              <div>
                <h3 class="font-semibold text-ink">{{ item.title }}</h3>
                <p class="mt-1 text-sm text-ink-muted">{{ item.description }}</p>
                <div class="mt-2 flex flex-wrap gap-1.5">
                  <span
                    v-for="tag in item.tags"
                    :key="tag"
                    class="inline-block rounded bg-base px-2 py-0.5 text-xs text-ink-muted"
                  >
                    {{ tag }}
                  </span>
                </div>
              </div>
              <div class="flex shrink-0 items-center gap-2">
                <button
                  v-if="item.demoComponent"
                  type="button"
                  class="rounded-lg bg-accent px-4 py-2 text-sm font-medium text-white transition hover:bg-accent-hover focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
                  @click.prevent="openDemo(category.id, item)"
                >
                  Ver demo
                </button>
                <span
                  v-else
                  class="rounded-lg bg-base px-4 py-2 text-sm text-ink-muted"
                >
                  Em breve
                </span>
              </div>
            </li>
          </ul>
        </article>
      </div>
    </section>

    <!-- CTA -->
    <section class="border-t border-slate-200 bg-white py-12">
      <div class="mx-auto max-w-6xl px-6 text-center lg:px-8">
        <p class="mb-4 text-ink-muted">
          Quer um desses padrões (ou vários) no seu projeto?
        </p>
        <a
          href="https://wa.me/5512997675736"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center justify-center rounded-lg bg-accent px-6 py-3 font-semibold text-white transition hover:bg-accent-hover"
        >
          Falar no WhatsApp
        </a>
      </div>
    </section>
  </main>
</template>

<script setup>
import { ref, computed, nextTick } from 'vue'
import { catalogCategories } from '../catalog/data'
import { catalogDemos } from '../catalog/demos'

const selectedItem = ref(null)
const demoKey = ref(0)
const demoSectionRef = ref(null)

const demoComponent = computed(() => {
  if (!selectedItem.value?.demoComponent) return null
  const name = selectedItem.value.demoComponent
  const component = catalogDemos[name]
  if (!component) return null
  return component
})

function openDemo(categoryId, item) {
  selectedItem.value = {
    ...item,
    categoryId,
  }
  demoKey.value += 1
  nextTick(() => {
    demoSectionRef.value?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  })
}

function closeDemo() {
  selectedItem.value = null
}
</script>
