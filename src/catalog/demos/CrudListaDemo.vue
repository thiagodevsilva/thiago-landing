<template>
  <div class="crud-lista-demo rounded-2xl overflow-hidden border border-base-300 bg-base-100 shadow-sm">
    <!-- Barra: busca + ação -->
    <div class="flex flex-wrap items-center justify-between gap-3 p-4 bg-base-200/50 border-b border-base-300">
      <input
        v-model="search"
        type="search"
        placeholder="Buscar..."
        class="input input-bordered input-sm w-full max-w-xs"
      />
      <button
        type="button"
        class="btn btn-primary btn-sm"
        @click="onNovo"
      >
        + Novo item
      </button>
    </div>

    <!-- Tabela -->
    <div class="overflow-x-auto">
      <table class="table table-zebra">
        <thead>
          <tr>
            <th>Nome</th>
            <th>Status</th>
            <th class="text-right w-24">Ações</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in filteredItems" :key="item.id" class="hover">
            <td class="font-medium">{{ item.name }}</td>
            <td>
              <span
                :class="[
                  'badge badge-sm',
                  item.active ? 'badge-success' : 'badge-ghost',
                ]"
              >
                {{ item.active ? 'Ativo' : 'Inativo' }}
              </span>
            </td>
            <td class="text-right">
              <button
                type="button"
                class="btn btn-ghost btn-square btn-xs text-primary"
                title="Editar"
                @click="onEditar(item)"
              >
                <Pencil class="size-4" />
              </button>
              <button
                type="button"
                class="btn btn-ghost btn-square btn-xs text-error"
                title="Excluir"
                @click="onExcluir(item)"
              >
                <Trash2 class="size-4" />
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <p v-if="filteredItems.length === 0" class="p-6 text-center text-base-content/60 text-sm">
      Nenhum item encontrado.
    </p>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { Pencil, Trash2 } from 'lucide-vue-next'

const search = ref('')

const items = ref([
  { id: '1', name: 'Primeiro item', active: true },
  { id: '2', name: 'Segundo item', active: false },
  { id: '3', name: 'Terceiro item', active: true },
  { id: '4', name: 'Quarto item', active: true },
])

const filteredItems = computed(() => {
  const q = search.value.trim().toLowerCase()
  if (!q) return items.value
  return items.value.filter((i) => i.name.toLowerCase().includes(q))
})

function onNovo() {
  // Demo só de lista; em projeto real abre modal/página de criação
}

function onEditar() {
  // Demo só de lista
}

function onExcluir() {
  // Demo só de lista
}
</script>
