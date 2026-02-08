<template>
  <div class="crud-demo rounded-xl border border-slate-200 bg-white overflow-hidden shadow-sm">
    <!-- Barra: título + ação -->
    <div class="flex flex-wrap items-center justify-between gap-3 p-4 border-b border-slate-100 bg-slate-50/80">
      <div class="flex items-center gap-3">
        <input
          v-model="search"
          type="search"
          placeholder="Buscar..."
          class="rounded-lg border border-slate-200 px-3 py-2 text-sm focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
        />
      </div>
      <button
        type="button"
        class="rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700 transition"
        @click="openCreate"
      >
        + Novo item
      </button>
    </div>

    <!-- Lista -->
    <div class="overflow-x-auto">
      <table class="w-full text-left text-sm">
        <thead class="border-b border-slate-200 bg-slate-50/50">
          <tr>
            <th class="px-4 py-3 font-semibold text-slate-700">Nome</th>
            <th class="px-4 py-3 font-semibold text-slate-700">Status</th>
            <th class="px-4 py-3 font-semibold text-slate-700 w-32 text-right">Ações</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="item in filteredItems"
            :key="item.id"
            class="border-b border-slate-100 hover:bg-slate-50/50 transition"
          >
            <td class="px-4 py-3 text-slate-800">{{ item.name }}</td>
            <td class="px-4 py-3">
              <span
                :class="[
                  'inline-flex rounded-full px-2.5 py-0.5 text-xs font-medium',
                  item.active ? 'bg-emerald-100 text-emerald-800' : 'bg-slate-100 text-slate-600',
                ]"
              >
                {{ item.active ? 'Ativo' : 'Inativo' }}
              </span>
            </td>
            <td class="px-4 py-3 text-right">
              <button
                type="button"
                class="mr-2 text-indigo-600 hover:text-indigo-800 font-medium"
                @click="openEdit(item)"
              >
                Editar
              </button>
              <button
                type="button"
                class="text-red-600 hover:text-red-800 font-medium"
                @click="confirmDelete(item)"
              >
                Excluir
              </button>
            </td>
          </tr>
        </tbody>
      </table>
      <p v-if="filteredItems.length === 0" class="p-6 text-center text-slate-500">
        Nenhum item encontrado.
      </p>
    </div>

    <!-- Toast de feedback -->
    <Transition name="toast">
      <div
        v-if="toast.message"
        :class="[
          'fixed bottom-4 right-4 rounded-lg px-4 py-3 shadow-lg text-sm font-medium text-white',
          toast.type === 'success' ? 'bg-emerald-600' : toast.type === 'error' ? 'bg-red-600' : 'bg-slate-700',
        ]"
      >
        {{ toast.message }}
      </div>
    </Transition>

    <!-- Modal: Criar / Editar -->
    <Teleport to="body">
      <Transition name="modal">
        <div
          v-if="showModal"
          class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50"
          @click.self="closeModal"
        >
          <div class="w-full max-w-md rounded-xl bg-white p-6 shadow-xl">
            <h3 class="text-lg font-semibold text-slate-800 mb-4">
              {{ editingId ? 'Editar item' : 'Novo item' }}
            </h3>
            <form @submit.prevent="save">
              <div class="space-y-3">
                <label class="block text-sm font-medium text-slate-700">Nome</label>
                <input
                  v-model="form.name"
                  type="text"
                  required
                  class="w-full rounded-lg border border-slate-200 px-3 py-2 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                  placeholder="Nome do item"
                />
                <label class="flex items-center gap-2 cursor-pointer">
                  <input v-model="form.active" type="checkbox" class="rounded border-slate-300 text-indigo-600" />
                  <span class="text-sm text-slate-700">Ativo</span>
                </label>
              </div>
              <div class="mt-6 flex justify-end gap-2">
                <button
                  type="button"
                  class="rounded-lg border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50"
                  @click="closeModal"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  class="rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700"
                >
                  {{ editingId ? 'Salvar' : 'Criar' }}
                </button>
              </div>
            </form>
          </div>
        </div>
      </Transition>
    </Teleport>

    <!-- Modal: Confirmar exclusão -->
    <Teleport to="body">
      <Transition name="modal">
        <div
          v-if="showConfirm"
          class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50"
          @click.self="showConfirm = false"
        >
          <div class="w-full max-w-sm rounded-xl bg-white p-6 shadow-xl">
            <h3 class="text-lg font-semibold text-slate-800 mb-2">Excluir item?</h3>
            <p class="text-slate-600 text-sm mb-4">
              “{{ itemToDelete?.name }}” será removido. Esta ação não pode ser desfeita.
            </p>
            <div class="flex justify-end gap-2">
              <button
                type="button"
                class="rounded-lg border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50"
                @click="showConfirm = false"
              >
                Cancelar
              </button>
              <button
                type="button"
                class="rounded-lg bg-red-600 px-4 py-2 text-sm font-medium text-white hover:bg-red-700"
                @click="doDelete"
              >
                Excluir
              </button>
            </div>
          </div>
        </div>
      </Transition>
    </Teleport>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const search = ref('')
const showModal = ref(false)
const showConfirm = ref(false)
const editingId = ref(null)
const itemToDelete = ref(null)
const toast = ref({ message: '', type: 'success' })

const items = ref([
  { id: '1', name: 'Primeiro item', active: true },
  { id: '2', name: 'Segundo item', active: false },
  { id: '3', name: 'Terceiro item', active: true },
])

const form = ref({ name: '', active: true })

const filteredItems = computed(() => {
  const q = search.value.trim().toLowerCase()
  if (!q) return items.value
  return items.value.filter((i) => i.name.toLowerCase().includes(q))
})

function showToast(message, type = 'success') {
  toast.value = { message, type }
  setTimeout(() => {
    toast.value = { message: '', type: 'success' }
  }, 3000)
}

function openCreate() {
  editingId.value = null
  form.value = { name: '', active: true }
  showModal.value = true
}

function openEdit(item) {
  editingId.value = item.id
  form.value = { name: item.name, active: item.active }
  showModal.value = true
}

function closeModal() {
  showModal.value = false
  editingId.value = null
}

function save() {
  if (editingId.value) {
    const i = items.value.find((x) => x.id === editingId.value)
    if (i) {
      i.name = form.value.name
      i.active = form.value.active
    }
    showToast('Item atualizado com sucesso.')
  } else {
    items.value.push({
      id: String(Date.now()),
      name: form.value.name,
      active: form.value.active,
    })
    showToast('Item criado com sucesso.')
  }
  closeModal()
}

function confirmDelete(item) {
  itemToDelete.value = item
  showConfirm.value = true
}

function doDelete() {
  if (itemToDelete.value) {
    items.value = items.value.filter((i) => i.id !== itemToDelete.value.id)
    showToast('Item excluído.', 'success')
  }
  showConfirm.value = false
  itemToDelete.value = null
}
</script>

<style scoped>
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.2s ease;
}
.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}
.modal-enter-active .rounded-xl,
.modal-leave-active .rounded-xl {
  transition: transform 0.2s ease;
}
.modal-enter-from .rounded-xl,
.modal-leave-to .rounded-xl {
  transform: scale(0.95);
}
.toast-enter-active,
.toast-leave-active {
  transition: opacity 0.2s ease, transform 0.2s ease;
}
.toast-enter-from,
.toast-leave-to {
  opacity: 0;
  transform: translateY(8px);
}
</style>
