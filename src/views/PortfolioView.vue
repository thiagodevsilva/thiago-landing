<template>
  <main class="min-h-screen bg-base text-ink">
    <!-- Hero -->
    <section class="relative overflow-hidden border-b border-white/10 bg-gradient-to-br from-ink via-[#122a40] to-[#0a3d38] text-white">
      <div
        class="pointer-events-none absolute inset-0 opacity-[0.1]"
        aria-hidden="true"
        style="
          background-image:
            linear-gradient(rgba(255, 255, 255, 0.4) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.4) 1px, transparent 1px);
          background-size: 48px 48px;
        "
      />
      <div class="relative mx-auto max-w-6xl px-6 py-16 md:py-20 lg:px-8">
        <p class="text-sm font-semibold uppercase tracking-widest text-accent-soft">
          Cases
        </p>
        <h1 class="mt-3 font-display text-3xl font-bold leading-tight md:text-5xl">
          Projetos em produção e demonstrações
        </h1>
        <p class="mt-5 max-w-2xl text-lg text-white/80 md:text-xl">
          Sistemas que a DevSilva entrega e mantém — e um laboratório com padrões e LPs para referência.
        </p>
        <div class="mt-8 flex flex-wrap gap-3">
          <span
            class="inline-flex items-center gap-2 rounded-lg border border-white/20 bg-white/5 px-4 py-2 text-sm text-white/90"
          >
            <span class="h-2 w-2 rounded-full bg-accent" aria-hidden="true" />
            Produção — produtos ao vivo
          </span>
          <span
            class="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/5 px-4 py-2 text-sm text-white/80"
          >
            <span class="h-2 w-2 rounded-full bg-white/50" aria-hidden="true" />
            Demonstrações e padrões
          </span>
        </div>
      </div>
    </section>

    <!-- Projetos reais -->
    <section id="reais" class="py-16 md:py-20">
      <div class="mx-auto max-w-6xl px-6 lg:px-8">
        <div class="mb-10">
          <span
            class="inline-flex items-center rounded-md bg-accent-soft px-3 py-1 text-xs font-semibold uppercase tracking-wide text-accent"
          >
            Produção
          </span>
          <h2 class="mt-3 font-display text-3xl font-bold text-ink">Em produção</h2>
          <p class="mt-2 max-w-2xl text-ink-muted">
            Produtos ao vivo nos quais a casa atua. Links oficiais para conhecer o trabalho.
          </p>
        </div>

        <div class="grid gap-8 md:grid-cols-2">
          <article
            v-for="project in realProjects"
            :key="project.id"
            class="group flex flex-col overflow-hidden rounded-2xl border border-slate-200/80 bg-white transition duration-300 hover:border-accent/40 hover:shadow-lg hover:shadow-accent/5"
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
              <h3 class="font-display text-xl font-semibold text-ink group-hover:text-accent">
                {{ project.title }}
              </h3>
              <p class="mt-3 flex-1 leading-relaxed text-ink-muted">
                {{ project.summary }}
              </p>
              <div class="mt-4 flex flex-wrap gap-2">
                <span
                  v-for="tag in project.tags"
                  :key="tag"
                  class="rounded-md bg-base px-2.5 py-1 text-xs font-medium text-ink-muted"
                >
                  {{ tag }}
                </span>
              </div>
              <a
                :href="project.url"
                target="_blank"
                rel="noopener noreferrer"
                class="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-accent px-5 py-3.5 text-sm font-semibold text-white transition hover:bg-accent-hover md:w-auto"
              >
                Acessar projeto
                <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
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
      <div class="mx-auto max-w-6xl px-6 lg:px-8">
        <div class="mb-10">
          <span
            class="inline-flex items-center rounded-md bg-slate-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-ink-muted"
          >
            Laboratório
          </span>
          <h2 class="mt-3 font-display text-3xl font-bold text-ink">Demonstrações</h2>
          <p class="mt-2 max-w-2xl text-ink-muted">
            Landing pages e catálogo de padrões para referência de UI, fluxos e integrações.
          </p>
        </div>

        <div class="grid gap-6 md:grid-cols-2">
          <article
            v-for="project in labProjects"
            :key="project.id"
            class="group flex flex-col overflow-hidden rounded-xl border border-slate-200 bg-base/60 transition duration-300 hover:border-accent/30 hover:bg-white hover:shadow-md"
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
                  class="rounded-xl border border-white/30 bg-white/90 px-4 py-3 text-sm font-semibold text-ink shadow-md"
                >
                  {{ project.title }}
                </span>
              </div>
            </component>
            <div class="flex flex-1 flex-col p-5 md:p-6">
              <h3 class="font-display text-lg font-semibold text-ink">
                {{ project.title }}
              </h3>
              <p class="mt-2 flex-1 text-sm leading-relaxed text-ink-muted">
                {{ project.summary }}
              </p>
              <div class="mt-3 flex flex-wrap gap-2">
                <span
                  v-for="tag in project.tags"
                  :key="tag"
                  class="rounded-md bg-white px-2 py-0.5 text-xs font-medium text-ink-muted ring-1 ring-slate-200"
                >
                  {{ tag }}
                </span>
              </div>
              <component
                :is="project.internal ? 'RouterLink' : 'a'"
                v-bind="project.internal ? { to: project.url } : { href: project.url, target: '_blank', rel: 'noopener noreferrer' }"
                class="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-sm font-medium text-ink transition hover:border-accent hover:text-accent md:w-auto"
              >
                {{ project.ctaLabel }}
                <svg
                  v-if="!project.internal"
                  class="h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
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
      <div class="mx-auto max-w-6xl px-6 text-center lg:px-8">
        <p class="text-ink-muted">
          Precisa de um produto parecido ou de manutenção em sistemas em produção?
        </p>
        <div class="mt-6 flex flex-wrap justify-center gap-4">
          <a
            href="https://wa.me/5512997675736"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center justify-center rounded-lg bg-accent px-6 py-3 font-semibold text-white transition hover:bg-accent-hover"
          >
            Falar no WhatsApp
          </a>
          <RouterLink
            to="/"
            class="inline-flex items-center justify-center rounded-lg border border-slate-300 bg-white px-6 py-3 font-medium text-ink transition hover:bg-base"
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
    gradient: 'from-sky-700 to-ink',
    tags: ['Framework', 'PHP', 'Vue', 'CSS', 'JavaScript'],
  },
  {
    id: 'crecido',
    title: 'Crecido — Site',
    summary:
      'CRM e ecossistema imobiliário: sites, landing pages de alta conversão e gestão de leads com foco em vendas.',
    url: 'https://crecido.com.br/',
    domain: 'crecido.com.br',
    gradient: 'from-teal-700 to-ink',
    tags: ['Vue', 'Laravel'],
  },
  {
    id: 'thaiscosta',
    title: 'Thais Costa English',
    summary:
      'Presença online para ensino de inglês: página clara, convite à ação e identidade alinhada ao posicionamento da profissional.',
    url: 'https://thaiscosta.site/',
    domain: 'thaiscosta.site',
    gradient: 'from-teal-600 to-emerald-900',
    tags: ['Vue', 'NestJS'],
  },
  {
    id: 'crecido-app',
    title: 'Crecido App',
    summary:
      'Aplicação web do ecossistema Crecido: experiência focada em uso recorrente e fluxos do produto.',
    url: 'https://crecido.app',
    domain: 'crecido.app',
    gradient: 'from-slate-700 to-ink',
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
      'Componentes e fluxos de UI (CRUD, formulários, listas) que a DevSilva reutiliza em projetos.',
    url: '/catalogo',
    domain: null,
    gradient: 'from-slate-600 to-slate-800',
    tags: ['Vue 3', 'UI', 'Padrões'],
    internal: true,
    ctaLabel: 'Ver catálogo',
  },
]
</script>
