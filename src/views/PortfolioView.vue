<template>
  <main class="min-h-screen bg-slate-200 text-slate-800">
    <!-- Hero -->
    <section class="relative overflow-hidden border-b border-cyan-400/20 bg-gradient-to-br from-black via-slate-950 to-blue-950 text-white">
      <div class="pointer-events-none absolute inset-0 opacity-50">
        <div class="absolute -left-24 top-0 h-96 w-96 rounded-full bg-cyan-400/40 blur-3xl" />
        <div class="absolute -right-20 bottom-0 h-96 w-96 rounded-full bg-blue-500/40 blur-3xl" />
      </div>
      <div class="pointer-events-none absolute inset-0 opacity-25">
        <div class="absolute left-1/2 top-16 h-52 w-52 -translate-x-1/2 rounded-full bg-cyan-300 blur-3xl" />
      </div>
      <div class="relative max-w-5xl mx-auto px-6 py-16 md:py-20">
        <p class="text-sm font-medium uppercase tracking-widest text-cyan-300">
          Portfólio
        </p>
        <h1 class="mt-3 text-3xl font-bold leading-tight md:text-5xl drop-shadow-[0_0_18px_rgba(34,211,238,0.2)]">
          Projetos reais e laboratório
        </h1>
        <p class="mt-5 max-w-2xl text-lg text-slate-200 md:text-xl">
          Sistemas em produção em que já contribuí — e, à parte, experimentos para testar padrões, UI e integrações.
        </p>
        <div class="mt-8 flex flex-wrap gap-3">
          <span
            class="inline-flex items-center gap-2 rounded-full border border-cyan-300/35 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-100 backdrop-blur-sm"
          >
            <span class="h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_8px_rgba(103,232,249,0.9)]" />
            Produção — contribuições em grandes projetos
          </span>
          <span
            class="inline-flex items-center gap-2 rounded-full border border-blue-300/25 bg-blue-400/10 px-4 py-2 text-sm text-blue-100"
          >
            <span class="h-2 w-2 rounded-full bg-blue-300 shadow-[0_0_8px_rgba(147,197,253,0.9)]" />
            Laboratório para estudo e demonstração
          </span>
        </div>
      </div>
    </section>

    <!-- Projetos reais -->
    <section id="reais" class="py-16 md:py-20">
      <div class="max-w-5xl mx-auto px-6">
        <div class="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <span
              class="inline-flex items-center rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-emerald-800"
            >
              Contribuição
            </span>
            <h2 class="mt-3 text-3xl font-bold text-slate-900">Em produção</h2>
            <p class="mt-2 max-w-2xl text-slate-600">
              Produtos ao vivo nos quais já atuei. Links oficiais para você conhecer o trabalho.
            </p>
          </div>
        </div>

        <div class="grid gap-8 md:grid-cols-2">
          <article
            v-for="project in realProjects"
            :key="project.id"
            class="group flex flex-col overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-sm transition duration-300 hover:border-indigo-200 hover:shadow-xl hover:shadow-indigo-500/10"
          >
            <a
              :href="project.url"
              target="_blank"
              rel="noopener noreferrer"
              class="relative block aspect-[16/9] overflow-hidden"
            >
              <div
                class="absolute inset-0 bg-gradient-to-br opacity-90 transition duration-300 group-hover:opacity-100"
                :class="project.gradient"
              />
              <div class="absolute inset-0 flex items-center justify-center p-6">
                <img
                  :src="faviconUrl(project.domain)"
                  :alt="`Ícone ${project.title}`"
                  width="96"
                  height="96"
                  class="h-20 w-20 rounded-2xl border border-white/30 bg-white/90 p-3 shadow-lg transition duration-300 group-hover:scale-105 md:h-24 md:w-24"
                  loading="lazy"
                />
              </div>
            </a>
            <div class="flex flex-1 flex-col p-6 md:p-8">
              <h3 class="text-xl font-semibold text-slate-900 group-hover:text-indigo-600">
                {{ project.title }}
              </h3>
              <p class="mt-3 flex-1 text-slate-600 leading-relaxed">
                {{ project.summary }}
              </p>
              <div class="mt-4 flex flex-wrap gap-2">
                <span
                  v-for="tag in project.tags"
                  :key="tag"
                  class="rounded-lg bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-700"
                >
                  {{ tag }}
                </span>
              </div>
              <a
                :href="project.url"
                target="_blank"
                rel="noopener noreferrer"
                class="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-indigo-600 px-5 py-3.5 text-sm font-semibold text-white transition hover:bg-indigo-700 md:w-auto"
              >
                Acessar projeto
                <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </a>
            </div>
          </article>
        </div>
      </div>
    </section>

    <!-- Laboratório -->
    <section id="laboratorio" class="border-t border-slate-200 bg-white py-16 md:py-20">
      <div class="max-w-5xl mx-auto px-6">
        <div class="mb-10">
          <span
            class="inline-flex items-center rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-amber-900"
          >
            Laboratório
          </span>
          <h2 class="mt-3 text-3xl font-bold text-slate-900">Estudos e demonstrações</h2>
          <p class="mt-2 max-w-2xl text-slate-600">
            Landing pages e catálogo de padrões para testar ideias, componentes e fluxos.
          </p>
        </div>

        <div class="grid gap-6 md:grid-cols-2">
          <article
            v-for="project in labProjects"
            :key="project.id"
            class="group flex flex-col overflow-hidden rounded-xl border border-slate-200 bg-slate-50/80 transition duration-300 hover:border-amber-200/80 hover:bg-white hover:shadow-md"
          >
            <component
              :is="project.internal ? 'RouterLink' : 'a'"
              v-bind="project.internal ? { to: project.url } : { href: project.url, target: '_blank', rel: 'noopener noreferrer' }"
              class="relative block aspect-[16/9] overflow-hidden"
            >
              <div
                class="absolute inset-0 bg-gradient-to-br opacity-90 transition duration-300 group-hover:opacity-100"
                :class="project.gradient"
              />
              <div class="absolute inset-0 flex items-center justify-center p-6">
                <img
                  v-if="project.domain"
                  :src="faviconUrl(project.domain)"
                  :alt="`Ícone ${project.title}`"
                  width="80"
                  height="80"
                  class="h-16 w-16 rounded-xl border border-white/30 bg-white/90 p-2 shadow-md transition duration-300 group-hover:scale-105"
                  loading="lazy"
                />
                <span
                  v-else
                  class="rounded-xl border border-white/30 bg-white/90 px-4 py-3 text-sm font-semibold text-slate-800 shadow-md"
                >
                  {{ project.title }}
                </span>
              </div>
            </component>
            <div class="flex flex-1 flex-col p-5 md:p-6">
              <h3 class="text-lg font-semibold text-slate-800">
                {{ project.title }}
              </h3>
              <p class="mt-2 flex-1 text-sm text-slate-600 leading-relaxed">
                {{ project.summary }}
              </p>
              <div class="mt-3 flex flex-wrap gap-2">
                <span
                  v-for="tag in project.tags"
                  :key="tag"
                  class="rounded-md bg-white px-2 py-0.5 text-xs font-medium text-slate-600 ring-1 ring-slate-200"
                >
                  {{ tag }}
                </span>
              </div>
              <component
                :is="project.internal ? 'RouterLink' : 'a'"
                v-bind="project.internal ? { to: project.url } : { href: project.url, target: '_blank', rel: 'noopener noreferrer' }"
                class="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-sm font-medium text-slate-800 transition hover:border-indigo-300 hover:bg-indigo-50 hover:text-indigo-700 md:w-auto"
              >
                {{ project.ctaLabel }}
                <svg
                  v-if="!project.internal"
                  class="h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </component>
            </div>
          </article>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="border-t border-slate-200 py-14">
      <div class="max-w-5xl mx-auto px-6 text-center">
        <p class="text-slate-600">
          Quer algo parecido no seu produto ou precisa de manutenção em sistemas em produção?
        </p>
        <div class="mt-6 flex flex-wrap justify-center gap-4">
          <a
            href="https://wa.me/5512997675736"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center justify-center rounded-xl bg-indigo-600 px-6 py-3 font-medium text-white transition hover:bg-indigo-700"
          >
            Falar no WhatsApp
          </a>
          <RouterLink
            to="/"
            class="inline-flex items-center justify-center rounded-xl border border-slate-300 bg-white px-6 py-3 font-medium text-slate-800 transition hover:bg-slate-50"
          >
            Voltar ao início
          </RouterLink>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
const faviconUrl = (domain) =>
  `https://www.google.com/s2/favicons?domain=${encodeURIComponent(domain)}&sz=128`

const realProjects = [
  {
    id: 'simova',
    title: 'Simova',
    summary:
      'Mobilidade e apontamento eletrônico em campo: eficiência na gestão de informações, integração com ERPs e operação offline.',
    url: 'https://www.simova.com.br/',
    domain: 'simova.com.br',
    gradient: 'from-sky-600 to-indigo-800',
    tags: ['Framework', 'PHP', 'Vue', 'CSS', 'JavaScript'],
  },
  {
    id: 'crecido',
    title: 'Crecido — Site',
    summary:
      'CRM e ecossistema imobiliário: sites, landing pages de alta conversão e gestão de leads com foco em vendas.',
    url: 'https://crecido.com.br/',
    domain: 'crecido.com.br',
    gradient: 'from-violet-600 to-fuchsia-700',
    tags: ['Vue', 'Laravel'],
  },
  {
    id: 'thaiscosta',
    title: 'Thais Costa English',
    summary:
      'Presença online para ensino de inglês: página clara, convite à ação e identidade alinhada ao posicionamento da profissional.',
    url: 'https://thaiscosta.site/',
    domain: 'thaiscosta.site',
    gradient: 'from-teal-600 to-emerald-800',
    tags: ['Vue', 'NestJS'],
  },
  {
    id: 'crecido-app',
    title: 'Crecido App',
    summary:
      'Aplicação web do ecossistema Crecido: experiência focada em uso recorrente e fluxos do produto.',
    url: 'https://crecido.app',
    domain: 'crecido.app',
    gradient: 'from-indigo-600 to-purple-900',
    tags: ['Vue', 'Laravel'],
  },
]

const labProjects = [
  {
    id: 'landing-food',
    title: 'Landing Food',
    summary:
      'Landing page de demonstração para restaurantes e delivery: captação, diagnóstico e mensagem comercial.',
    url: 'https://landing-food.thiagosilva.dev.br/',
    domain: 'landing-food.thiagosilva.dev.br',
    gradient: 'from-orange-500 to-rose-600',
    tags: ['Landing', 'Tailwind', 'Demo'],
    internal: false,
    ctaLabel: 'Abrir demo',
  },
  {
    id: 'catalogo',
    title: 'Catálogo de padrões',
    summary:
      'Componentes e fluxos de UI (CRUD, formulários, listas) para reutilização e referência em projetos.',
    url: '/catalogo',
    domain: null,
    gradient: 'from-slate-600 to-slate-800',
    tags: ['Vue 3', 'UI', 'Padrões'],
    internal: true,
    ctaLabel: 'Ver catálogo',
  },
]
</script>
