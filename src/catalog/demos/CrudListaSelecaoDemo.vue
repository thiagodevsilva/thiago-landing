<template>
  <div class="crud-lista-selecao-demo rounded-2xl overflow-hidden border border-base-300 bg-base-200 shadow-sm">
    <!-- Barra: busca + novo -->
    <div class="flex flex-wrap items-center justify-between gap-3 p-4 bg-base-300/30 border-b border-base-300">
      <input
        v-model="search"
        type="search"
        placeholder="Buscar..."
        class="input input-bordered input-sm w-full max-w-xs"
      />
      <button type="button" class="btn btn-primary btn-sm" @click="onNovo">
        <Plus class="size-4" />
        Novo item
      </button>
    </div>

    <!-- Barra de ações em lote (visível quando há seleção) -->
    <div
      v-if="selectedIds.length > 0"
      class="flex flex-wrap items-center gap-3 p-3 bg-primary/10 border-b border-base-300"
    >
      <span class="text-sm font-medium text-primary">
        {{ selectedIds.length }} selecionado(s)
      </span>
      <button
        type="button"
        class="btn btn-outline btn-primary btn-sm gap-1"
        @click="onEditarSelecionados"
      >
        <Pencil class="size-3.5" />
        Editar
      </button>
      <button
        type="button"
        class="btn btn-outline btn-error btn-sm gap-1"
        @click="onExcluirSelecionados"
      >
        <Trash2 class="size-3.5" />
        Excluir
      </button>
      <button
        type="button"
        class="btn btn-outline btn-sm"
        @click="clearSelection"
      >
        Limpar seleção
      </button>
    </div>

    <!-- Tabela: fundo diferente do branco para o checkbox aparecer -->
    <div class="overflow-x-auto bg-base-100">
      <table class="table table-zebra">
        <thead>
          <tr class="bg-base-200/80">
            <th class="w-14 py-3 bg-base-200">
              <label class="flex cursor-pointer justify-center">
                <input
                  ref="selectAllRef"
                  type="checkbox"
                  class="checkbox checkbox-basico"
                  :checked="isAllSelected"
                  @change="toggleSelectAll"
                />
              </label>
            </th>
            <th>Nome</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in filteredItems" :key="item.id" class="hover">
            <td class="text-center bg-base-200/40">
              <label class="flex cursor-pointer justify-center py-2">
                <input
                  type="checkbox"
                  class="checkbox checkbox-basico"
                  :checked="selectedIds.includes(item.id)"
                  @change="toggleSelect(item.id)"
                />
              </label>
            </td>
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
import { ref, computed, watch, nextTick } from 'vue'
import { Plus, Pencil, Trash2 } from 'lucide-vue-next'

const search = ref('')
const selectedIds = ref([])
const selectAllRef = ref(null)

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

const isAllSelected = computed(() => {
  if (filteredItems.value.length === 0) return false
  return filteredItems.value.every((i) => selectedIds.value.includes(i.id))
})

const isIndeterminate = computed(() => {
  if (filteredItems.value.length === 0) return false
  const n = filteredItems.value.filter((i) => selectedIds.value.includes(i.id)).length
  return n > 0 && n < filteredItems.value.length
})

watch(
  isIndeterminate,
  (val) => {
    nextTick(() => {
      if (selectAllRef.value) selectAllRef.value.indeterminate = val
    })
  },
  { immediate: true }
)

function toggleSelect(id) {
  if (selectedIds.value.includes(id)) {
    selectedIds.value = selectedIds.value.filter((x) => x !== id)
  } else {
    selectedIds.value = [...selectedIds.value, id]
  }
}

function toggleSelectAll() {
  if (isAllSelected.value) {
    selectedIds.value = selectedIds.value.filter(
      (id) => !filteredItems.value.some((i) => i.id === id)
    )
  } else {
    const ids = filteredItems.value.map((i) => i.id)
    selectedIds.value = [...new Set([...selectedIds.value, ...ids])]
  }
}

function clearSelection() {
  selectedIds.value = []
}

function onNovo() {}
function onEditarSelecionados() {}
function onExcluirSelecionados() {}
</script>
