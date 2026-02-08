<template>
  <div class="form-demo rounded-2xl overflow-hidden border border-base-300 bg-base-100 shadow-sm">
    <div class="p-6 md:p-8">
      <div class="mb-6">
        <h3 class="text-lg font-semibold text-base-content">Cadastro</h3>
        <p class="text-sm text-base-content/60 mt-0.5">Preencha os dados abaixo.</p>
      </div>

      <form class="space-y-5" @submit.prevent="onSubmit">
        <div class="grid gap-5 md:grid-cols-2">
          <div class="form-control w-full">
            <label class="label" for="form-nome">
              <span class="label-text font-medium">Nome</span>
            </label>
            <input
              id="form-nome"
              v-model="form.nome"
              type="text"
              placeholder="Digite o nome"
              class="input input-bordered w-full"
            />
          </div>
          <div class="form-control w-full">
            <label class="label" for="form-email">
              <span class="label-text font-medium">E-mail</span>
            </label>
            <input
              id="form-email"
              v-model="form.email"
              type="email"
              placeholder="email@exemplo.com"
              class="input input-bordered w-full"
            />
          </div>
        </div>

        <div class="grid gap-5 md:grid-cols-2">
          <div class="form-control w-full">
            <label class="label" for="form-status">
              <span class="label-text font-medium">Status</span>
            </label>
            <select
              id="form-status"
              v-model="form.status"
              class="select select-bordered w-full"
            >
              <option value="">Selecione</option>
              <option value="ativo">Ativo</option>
              <option value="inativo">Inativo</option>
            </select>
          </div>
          <div class="form-control w-full flex flex-col justify-end">
            <label class="label cursor-pointer justify-start gap-3">
              <input
                v-model="form.ativo"
                type="checkbox"
                class="checkbox checkbox-basico checkbox-sm"
              />
              <span class="label-text">Ativo</span>
            </label>
          </div>
        </div>

        <div class="form-control w-full">
          <label class="label" for="form-obs">
            <span class="label-text font-medium">Observações</span>
          </label>
          <textarea
            id="form-obs"
            v-model="form.observacoes"
            placeholder="Opcional"
            class="textarea textarea-bordered w-full min-h-24"
            rows="3"
          />
        </div>

        <div class="flex flex-wrap items-center gap-3 pt-2">
          <button type="submit" class="btn btn-outline btn-primary">
            Salvar
          </button>
          <button type="button" class="btn btn-outline" @click="onCancel">
            Cancelar
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue'

const form = reactive({
  nome: '',
  email: '',
  status: '',
  ativo: true,
  observacoes: '',
})

function onSubmit() {
  // Demo: em projeto real envia para API
}

function onCancel() {
  form.nome = ''
  form.email = ''
  form.status = ''
  form.ativo = true
  form.observacoes = ''
}
</script>

<style scoped>
.form-demo :deep(.input.input-bordered),
.form-demo :deep(.select.select-bordered),
.form-demo :deep(.textarea.textarea-bordered) {
  border-width: 1.5px;
  border-color: oklch(0.75 0.02 260);
  padding-left: 0.75rem;
  padding-right: 0.75rem;
}
.form-demo :deep(.textarea.textarea-bordered) {
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
}
.form-demo :deep(.input.input-bordered:focus),
.form-demo :deep(.select.select-bordered:focus),
.form-demo :deep(.textarea.textarea-bordered:focus) {
  border-color: oklch(0.55 0.2 265);
  outline: none;
}
</style>
