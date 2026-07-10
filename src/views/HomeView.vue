<template>
  <main class="min-h-screen bg-base text-ink">
    <!-- HERO -->
    <section
      class="relative min-h-[92vh] overflow-hidden text-white"
      aria-label="Apresentação"
    >
      <div
        class="absolute inset-0 bg-gradient-to-br from-ink via-[#122a40] to-[#0a3d38]"
        aria-hidden="true"
      />
      <div
        class="pointer-events-none absolute inset-0 opacity-[0.12]"
        aria-hidden="true"
        style="
          background-image:
            linear-gradient(rgba(255, 255, 255, 0.35) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.35) 1px, transparent 1px);
          background-size: 48px 48px;
        "
      />
      <div
        class="pointer-events-none absolute -right-20 top-1/4 h-[28rem] w-[28rem] rounded-full bg-accent/25 blur-3xl"
        aria-hidden="true"
      />

      <div
        class="relative z-10 mx-auto grid min-h-[92vh] max-w-6xl grid-cols-1 items-center gap-12 px-6 py-16 lg:grid-cols-2 lg:gap-16 lg:px-8 lg:py-20"
      >
        <div class="max-w-xl">
          <p class="hero-enter font-display text-5xl font-extrabold tracking-tight sm:text-6xl lg:text-7xl">
            DevSilva
          </p>
          <h1
            class="hero-enter-delay mt-5 font-display text-2xl font-bold leading-snug tracking-tight text-white sm:text-3xl lg:text-4xl"
          >
            Sites, LP's e Sistemas Web sob medida
          </h1>
          <p class="hero-enter-delay-2 mt-6 text-lg leading-relaxed text-white/80">
            Software house que cria e mantém sistemas em produção — Laravel, Vue, PHP e NestJS, com integrações de pagamento e WhatsApp.
          </p>
          <div class="hero-enter-delay-2 mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a
              href="https://wa.me/5512997675736"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center justify-center rounded-lg bg-accent px-8 py-4 text-center text-base font-semibold text-white transition hover:bg-accent-hover"
            >
              Falar no WhatsApp
            </a>
            <RouterLink
              to="/portfolio"
              class="inline-flex items-center justify-center rounded-lg border border-white/30 bg-white/5 px-8 py-4 text-center text-base font-medium text-white transition hover:bg-white/10"
            >
              Ver cases
            </RouterLink>
          </div>
        </div>

        <!-- Silhueta de painel / produto -->
        <div
          class="hero-enter-delay-2 relative mx-auto hidden w-full max-w-md lg:block"
          aria-hidden="true"
        >
          <div
            class="rounded-2xl border border-white/15 bg-white/5 p-5 shadow-2xl backdrop-blur-sm"
          >
            <div class="mb-4 flex items-center gap-2">
              <span class="h-2.5 w-2.5 rounded-full bg-white/30" />
              <span class="h-2.5 w-2.5 rounded-full bg-white/30" />
              <span class="h-2.5 w-2.5 rounded-full bg-accent/80" />
            </div>
            <div class="space-y-3">
              <div class="h-3 w-2/5 rounded bg-white/20" />
              <div class="grid grid-cols-3 gap-3">
                <div class="h-20 rounded-lg bg-accent/30" />
                <div class="h-20 rounded-lg bg-white/10" />
                <div class="h-20 rounded-lg bg-white/10" />
              </div>
              <div class="h-3 w-full rounded bg-white/10" />
              <div class="h-3 w-4/5 rounded bg-white/10" />
              <div class="mt-2 grid grid-cols-2 gap-3">
                <div class="h-14 rounded-lg border border-white/10 bg-white/5" />
                <div class="h-14 rounded-lg border border-white/10 bg-white/5" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- SERVIÇOS -->
    <section ref="servicesRef" class="reveal bg-white py-20 md:py-24" aria-labelledby="servicos-title">
      <div class="mx-auto max-w-6xl px-6 lg:px-8">
        <h2 id="servicos-title" class="font-display text-3xl font-bold tracking-tight md:text-4xl">
          O que entregamos
        </h2>
        <p class="mt-4 max-w-2xl text-lg text-ink-muted">
          Do zero à manutenção contínua: produtos digitais pensados para operar no dia a dia do seu negócio.
        </p>
        <ul class="mt-12 grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
          <li v-for="service in services" :key="service.title">
            <h3 class="font-display text-lg font-semibold text-ink">
              {{ service.title }}
            </h3>
            <p class="mt-2 text-ink-muted leading-relaxed">
              {{ service.description }}
            </p>
          </li>
        </ul>
      </div>
    </section>

    <!-- INTEGRAÇÕES -->
    <section ref="integrationsRef" class="reveal py-20 md:py-24" aria-labelledby="integracoes-title">
      <div class="mx-auto max-w-6xl px-6 lg:px-8">
        <h2 id="integracoes-title" class="font-display text-3xl font-bold tracking-tight md:text-4xl">
          Integrações
        </h2>
        <p class="mt-4 max-w-2xl text-lg text-ink-muted">
          Pagamentos, WhatsApp e APIs de terceiros conectados ao seu sistema — com filas, webhooks e operação estável.
        </p>
        <ul class="mt-10 flex flex-wrap gap-x-8 gap-y-4 text-lg font-medium text-ink">
          <li v-for="item in integrations" :key="item" class="flex items-center gap-2">
            <span class="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
            {{ item }}
          </li>
        </ul>
      </div>
    </section>

    <!-- STACK -->
    <section ref="stackRef" class="reveal border-y border-slate-200/80 bg-white py-20 md:py-24" aria-labelledby="stack-title">
      <div class="mx-auto max-w-6xl px-6 lg:px-8">
        <h2 id="stack-title" class="font-display text-3xl font-bold tracking-tight md:text-4xl">
          Stack
        </h2>
        <p class="mt-4 max-w-2xl text-lg text-ink-muted">
          Tecnologias que usamos para construir e evoluir produtos em produção.
        </p>
        <div class="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div v-for="group in stack" :key="group.title">
            <h3 class="font-display text-sm font-semibold uppercase tracking-wider text-accent">
              {{ group.title }}
            </h3>
            <p class="mt-2 text-ink leading-relaxed">
              {{ group.items }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- CASES -->
    <section ref="casesRef" class="reveal py-20 md:py-24" aria-labelledby="cases-title">
      <div class="mx-auto max-w-6xl px-6 lg:px-8">
        <h2 id="cases-title" class="font-display text-3xl font-bold tracking-tight md:text-4xl">
          Cases
        </h2>
        <p class="mt-4 max-w-xl text-lg text-ink-muted">
          Projetos em produção e demonstrações da casa.
        </p>
        <RouterLink
          to="/portfolio"
          class="mt-8 inline-flex items-center gap-2 rounded-lg bg-ink px-8 py-4 font-semibold text-white transition hover:bg-ink/90"
        >
          Ver projetos
          <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </RouterLink>
      </div>
    </section>

    <!-- CATÁLOGO -->
    <section ref="catalogRef" class="reveal bg-white py-20 md:py-24" aria-labelledby="catalogo-title">
      <div class="mx-auto max-w-6xl px-6 lg:px-8">
        <h2 id="catalogo-title" class="font-display text-3xl font-bold tracking-tight md:text-4xl">
          Padrões
        </h2>
        <p class="mt-4 max-w-xl text-lg text-ink-muted">
          Showroom de fluxos e componentes que reutilizamos em CRMs, painéis e sites.
        </p>
        <RouterLink
          to="/catalogo"
          class="mt-8 inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-base px-8 py-4 font-semibold text-ink transition hover:border-accent hover:text-accent"
        >
          Abrir catálogo
          <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </RouterLink>
      </div>
    </section>

    <!-- CTA FINAL -->
    <section class="border-t border-slate-200/80 py-20 md:py-24" aria-labelledby="cta-title">
      <div class="mx-auto max-w-6xl px-6 text-center lg:px-8">
        <h2 id="cta-title" class="font-display text-3xl font-bold tracking-tight md:text-4xl">
          Projeto novo ou sistema para manter?
        </h2>
        <p class="mx-auto mt-4 max-w-lg text-lg text-ink-muted">
          Conte o cenário no WhatsApp — a gente avalia o melhor caminho.
        </p>
        <a
          href="https://wa.me/5512997675736"
          target="_blank"
          rel="noopener noreferrer"
          class="mt-8 inline-flex items-center justify-center rounded-lg bg-accent px-8 py-4 font-semibold text-white transition hover:bg-accent-hover"
        >
          Solicitar conversa
        </a>
      </div>
    </section>

    <!-- FOOTER -->
    <footer class="border-t border-slate-200 bg-white">
      <div class="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-10 sm:flex-row sm:items-center sm:justify-between lg:px-8">
        <div>
          <p class="font-display text-lg font-bold text-ink">DevSilva</p>
          <p class="mt-1 text-sm text-ink-muted">
            © {{ currentYear }} DevSilva · Thiago Silva
          </p>
        </div>
        <div class="flex flex-wrap gap-4 text-sm">
          <a
            href="mailto:contato@thiagosilva.dev.br"
            class="text-ink-muted transition hover:text-accent"
          >
            contato@thiagosilva.dev.br
          </a>
          <a
            href="https://wa.me/5512997675736"
            target="_blank"
            rel="noopener noreferrer"
            class="text-ink-muted transition hover:text-accent"
          >
            WhatsApp
          </a>
          <a
            href="https://www.linkedin.com/in/thiago-silva-a88a61219/"
            target="_blank"
            rel="noopener noreferrer"
            class="text-ink-muted transition hover:text-accent"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  </main>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from 'vue'

const currentYear = new Date().getFullYear()

const services = [
  {
    title: 'CRM',
    description: 'Gestão de leads, funis e operação comercial sob medida para o seu processo.',
  },
  {
    title: 'CMS',
    description: 'Painéis e conteúdo editável para times que precisam publicar sem depender de deploy.',
  },
  {
    title: 'Sites e LPs',
    description: 'Presença digital e landing pages focadas em conversão e identidade da marca.',
  },
  {
    title: 'Manutenção',
    description: 'Evolução, correções e suporte em sistemas Laravel, PHP e NestJS já no ar.',
  },
  {
    title: 'Integrações',
    description: 'Pagamentos, WhatsApp, APIs e automações conectadas ao produto principal.',
  },
]

const integrations = [
  'Asaas',
  'Mercado Pago',
  'WhatsApp',
  'Evolution API',
  'APIs sob medida',
]

const stack = [
  { title: 'Backend', items: 'PHP, Laravel, Node, NestJS' },
  { title: 'Frontend', items: 'JavaScript, Vue 2, Vue 3, Tailwind, Blade' },
  { title: 'Dados', items: 'PostgreSQL, MySQL' },
  { title: 'Infra', items: 'AWS, VPS Linux, Docker' },
  { title: 'Integrações', items: 'Gateways de pagamento, Evolution API, filas' },
]

const servicesRef = ref(null)
const integrationsRef = ref(null)
const stackRef = ref(null)
const casesRef = ref(null)
const catalogRef = ref(null)

let observer

onMounted(() => {
  const targets = [
    servicesRef.value,
    integrationsRef.value,
    stackRef.value,
    casesRef.value,
    catalogRef.value,
  ].filter(Boolean)

  observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target)
        }
      }
    },
    { threshold: 0.15, rootMargin: '0px 0px -40px 0px' },
  )

  for (const el of targets) {
    observer.observe(el)
  }
})

onUnmounted(() => {
  observer?.disconnect()
})
</script>
