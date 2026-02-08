<template>
  <main class="min-h-screen bg-slate-100 text-slate-800">
    <!-- Hero do catálogo -->
    <section class="bg-white border-b border-slate-200">
      <div class="max-w-5xl mx-auto px-6 py-12">
        <h1 class="text-3xl md:text-4xl font-bold text-slate-900">
          Catálogo de padrões
        </h1>
        <p class="mt-3 text-slate-600 max-w-2xl">
          Showroom dos fluxos e componentes que uso em projetos reais. Cada bloco pode ser
          reaproveitado no seu projeto: CRUD, dashboards, uploads, formulários e mais.
        </p>
      </div>
    </section>

    <!-- Demo ao vivo (quando um item é selecionado) -->
    <section
      v-if="selectedItem"
      ref="demoSectionRef"
      class="border-b border-slate-200 bg-slate-50 py-8"
    >
      <div class="max-w-5xl mx-auto px-6">
        <div class="flex items-center justify-between mb-4">
          <h2 class="text-xl font-semibold text-slate-800">
            Demo: {{ selectedItem.title }}
          </h2>
          <button
            type="button"
            class="rounded-lg border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100 transition"
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
    <section class="max-w-5xl mx-auto px-6 py-10">
      <div class="space-y-10">
        <article
          v-for="category in catalogCategories"
          :key="category.id"
          class="rounded-xl border border-slate-200 bg-white overflow-hidden shadow-sm"
        >
          <div class="p-5 md:p-6 border-b border-slate-100 bg-slate-50/50">
            <div class="flex items-start gap-3">
              <span class="text-2xl" aria-hidden="true">{{ category.icon }}</span>
              <div>
                <h2 class="text-xl font-bold text-slate-900">
                  {{ category.title }}
                </h2>
                <p class="mt-1 text-sm text-slate-600">
                  {{ category.description }}
                </p>
              </div>
            </div>
          </div>
          <ul class="divide-y divide-slate-100">
            <li
              v-for="item in category.items"
              :key="item.id"
              class="p-5 md:p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3"
            >
              <div>
                <h3 class="font-semibold text-slate-800">{{ item.title }}</h3>
                <p class="mt-1 text-sm text-slate-600">{{ item.description }}</p>
                <div class="mt-2 flex flex-wrap gap-1.5">
                  <span
                    v-for="tag in item.tags"
                    :key="tag"
                    class="inline-block rounded bg-slate-100 px-2 py-0.5 text-xs text-slate-600"
                  >
                    {{ tag }}
                  </span>
                </div>
              </div>
              <div class="flex items-center gap-2 shrink-0">
                <button
                  v-if="item.demoComponent"
                  type="button"
                  class="rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700 transition hover:bg-indigo-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  @click.prevent="openDemo(category.id, item)"
                >
                  Ver demo
                </button>
                <span
                  v-else
                  class="rounded-lg bg-slate-100 px-4 py-2 text-sm text-slate-500"
                >
                  Em breve
                </span>
              </div>
            </li>
          </ul>
        </article>
      </div>
    </section>

    <!-- CTA para contratar -->
    <section class="border-t border-slate-200 bg-white py-12">
      <div class="max-w-5xl mx-auto px-6 text-center">
        <p class="text-slate-600 mb-4">
          Quer um desses padrões (ou vários) no seu projeto?
        </p>
        <a
          href="https://wa.me/5512997675736"
          target="_blank"
          rel="noopener"
          class="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-indigo-600 text-white font-medium hover:bg-indigo-700 transition"
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
