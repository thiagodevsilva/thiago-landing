<template>
  <main class="min-h-screen bg-slate-200 text-slate-800">
    <!-- HERO -->
    <section
      class="relative min-h-[92vh] overflow-hidden border-b border-white/10 text-white"
      aria-label="Apresentação"
    >
      <!-- Camada 1: gradiente base -->
      <div
        class="absolute inset-0 bg-gradient-to-br from-[#020617] via-[#0B1026] to-[#26135B]"
        aria-hidden="true"
      />
      <!-- Camada 2: glows -->
      <div class="pointer-events-none absolute inset-0" aria-hidden="true">
        <div
          class="absolute -left-24 top-[22%] h-[34rem] w-[34rem] rounded-full bg-indigo-500/35 blur-3xl"
        />
        <div
          class="absolute -right-24 -bottom-10 h-[34rem] w-[34rem] rounded-full bg-violet-500/40 blur-3xl"
        />
        <div
          class="absolute right-[18%] top-[8%] h-72 w-72 rounded-full bg-cyan-400/35 blur-3xl"
        />
        <div
          class="absolute right-[30%] bottom-[16%] h-64 w-64 rounded-full bg-fuchsia-500/30 blur-3xl"
        />
      </div>

      <div
        class="relative z-10 mx-auto flex min-h-[92vh] max-w-7xl flex-col px-6 pb-14 pt-10 lg:px-16 lg:pb-16 lg:pt-14"
      >
        <div
          class="grid flex-1 grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-12 xl:gap-16"
        >
          <div class="order-1 max-w-xl lg:order-1">
            <h1 class="font-extrabold leading-[0.95] tracking-tight">
              <span class="block text-4xl sm:text-5xl lg:text-6xl">
                Desenvolvedor Web Full Stack
              </span>
              <span
                class="mt-3 block bg-gradient-to-r from-[#6366F1] to-[#22D3EE] bg-clip-text text-3xl text-transparent sm:text-4xl lg:text-5xl"
              >
                Do zero ao que já está no ar
              </span>
            </h1>

            <p class="mt-8 text-lg leading-relaxed text-slate-200 lg:mt-10 lg:text-xl">
              Crio sites, APIs e integrações do zero e também mantenho e evoluo sistemas em produção — Laravel, PHP e NestJS.
            </p>

            <div class="mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
              <a
                href="https://wa.me/5512997675736"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex items-center justify-center rounded-xl bg-[#5B4BFF] px-8 py-4 text-center text-base font-semibold text-white shadow-[0_0_24px_rgba(91,75,255,0.35)] transition hover:bg-[#6A5CFF]"
              >
                Falar comigo no WhatsApp
              </a>
              <RouterLink
                to="/portfolio"
                class="inline-flex items-center justify-center rounded-xl bg-white px-8 py-4 text-center text-base font-medium text-slate-900 transition hover:bg-slate-100"
              >
                Ver portfólio
              </RouterLink>
            </div>
          </div>

          <div
            class="order-2 flex justify-center overflow-visible lg:order-2 lg:justify-end lg:self-start lg:pt-12"
          >
            <img
              src="/dev-2.png"
              alt="Ilustração de desenvolvedor com elementos de código e interface"
              width="1200"
              height="900"
              class="h-auto w-full max-w-2xl scale-110 object-contain md:max-w-3xl md:scale-[1.2] lg:max-w-none lg:translate-y-12 lg:translate-x-20 lg:scale-[1.32] lg:w-[min(100%,64rem)] xl:translate-y-14 xl:translate-x-24 xl:w-[min(100%,70rem)]"
              loading="eager"
              decoding="async"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- O QUE EU FAÇO -->
    <section class="bg-white py-20">
      <div class="max-w-5xl mx-auto px-6">
        <h2 class="text-3xl font-bold mb-6">O que faço</h2>

        <p class="text-slate-600 mb-8 max-w-2xl">
          Projeto novo ou sistema que já roda: desenvolvimento, correção e evolução com foco em resultado e pouca fricção no seu time.
        </p>

        <ul class="grid md:grid-cols-2 gap-4 text-slate-700">
          <li>• Sites, landings e APIs do zero</li>
          <li>• Laravel, PHP (incl. legado) e NestJS — manutenção e novas features</li>
          <li>• Pagamentos, integrações e APIs de terceiros</li>
          <li>• Bugs críticos, performance e ajustes em produção</li>
          <li>• Suporte pontual ou recorrente</li>
          <li>• Consultoria técnica quando precisar de direção</li>
        </ul>
      </div>
    </section>

    <!-- EXPERIÊNCIA -->
    <section class="py-20">
      <div class="max-w-5xl mx-auto px-6">
        <h2 class="text-3xl font-bold mb-6">Na prática</h2>

        <p class="text-slate-600 max-w-2xl">
          Produtos novos e sistemas que já vivem em produção — integrações, dados e operação no dia a dia.
        </p>

        <ul class="mt-6 space-y-2 text-slate-700">
          <li>• SaaS e painéis administrativos</li>
          <li>• Volume de dados, filas e integrações</li>
          <li>• Ambientes críticos e código legado</li>
        </ul>
      </div>
    </section>

    <!-- PORTFÓLIO (CTA) -->
    <section class="bg-white py-20">
      <div class="max-w-5xl mx-auto px-6">
        <h2 class="text-3xl font-bold mb-2">Portfólio</h2>
        <p class="text-slate-600 mb-8 max-w-xl">
          Projetos reais e laboratório — um lugar só.
        </p>
        <RouterLink
          to="/portfolio"
          class="inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-8 py-4 font-medium text-white transition hover:bg-indigo-700"
        >
          Ver portfólio completo
          <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </RouterLink>
      </div>
    </section>

    <!-- STACK -->
    <section class="bg-white py-20">
      <div class="max-w-5xl mx-auto px-6">
        <h2 class="text-3xl font-bold mb-10">Tecnologias</h2>

        <div class="grid md:grid-cols-3 gap-8 text-slate-700">
          <div>
            <h3 class="font-semibold mb-2">Backend</h3>
            <p>PHP / Laravel, Node / NestJS</p>
          </div>

          <div>
            <h3 class="font-semibold mb-2">Frontend</h3>
            <p>Javascript, Vue 2, Vue 3, Tailwind, DaisyUI, Blade, Twig</p>
          </div>

          <div>
            <h3 class="font-semibold mb-2">Banco de dados</h3>
            <p>PostgreSQL, MySQL</p>
          </div>

          <div>
            <h3 class="font-semibold mb-2">Infraestrutura</h3>
            <p>AWS, VPS Linux, Docker</p>
          </div>

          <div>
            <h3 class="font-semibold mb-2">Outros</h3>
            <p>Gateways de pagamento, Api Evolution, Filas, Mapas</p>
          </div>
        </div>
      </div>
    </section>

    <!-- EVOLUTION API -->
    <section class="py-20">
      <div class="max-w-5xl mx-auto px-6">
        <h2 class="text-3xl font-bold mb-6">Evolution API</h2>

        <p class="text-slate-600 mb-8 max-w-2xl">
          WhatsApp em produção: instâncias, webhooks, filas e monitoramento — para automação, N8N e atendimento.
        </p>

        <div class="grid md:grid-cols-2 gap-8 text-slate-700">
          <div class="bg-white rounded-xl p-6 border border-slate-200">
            <h3 class="font-semibold mb-3">Entrega</h3>
            <ul class="space-y-2">
              <li>• Multi-instância e webhooks/eventos</li>
              <li>• Envio com fila, retry e tratamento de erro</li>
              <li>• Reconexão, health-check e operação simples</li>
            </ul>
          </div>

          <div class="bg-white rounded-xl p-6 border border-slate-200">
            <h3 class="font-semibold mb-3">Estabilidade</h3>
            <ul class="space-y-2">
              <li>• Filas (ex.: Redis/RabbitMQ)</li>
              <li>• Logs, rate limit e isolamento por cliente</li>
              <li>• Docker, Linux/AWS</li>
            </ul>
          </div>
        </div>

        <div class="mt-10 flex flex-col sm:flex-row gap-4">
          <a
            href="https://wa.me/5512997675736"
            target="_blank"
            class="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-indigo-600 text-white font-medium hover:bg-indigo-700 transition"
          >
            Quero falar sobre Evolution API
          </a>

          <a
            href="mailto:contato@thiagosilva.dev.br"
            class="inline-flex items-center justify-center px-6 py-3 rounded-lg border border-slate-300 text-slate-800 font-medium hover:bg-slate-50 transition"
          >
            Enviar detalhes do projeto
          </a>
        </div>
      </div>
    </section>

    <!-- PLUS: PROVA SOCIAL / VERIFICAÇÃO -->
    <section class="py-20 bg-white">
      <div class="max-w-5xl mx-auto px-6">
        <h2 class="text-3xl font-bold mb-6">Onde me ver</h2>

        <p class="text-slate-600 mb-10 max-w-xl">
          LinkedIn para trajetória e recomendações; GitHub para código.
        </p>

        <div class="flex flex-col sm:flex-row gap-4">
          <a
            class="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-slate-900 text-white font-medium hover:bg-slate-800 transition"
            href="https://www.linkedin.com/in/thiago-silva-a88a61219/"
            target="_blank"
            rel="noopener"
          >
            Ver LinkedIn
          </a>

          <a
            class="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-slate-800 text-white font-medium hover:bg-slate-700 transition"
            href="https://github.com/thiagodevsilva"
            target="_blank"
            rel="noopener"
          >
            GitHub
          </a>

          <a
            class="inline-flex items-center justify-center px-6 py-3 rounded-lg border border-slate-300 text-slate-800 font-medium hover:bg-slate-50 transition"
            href="mailto:contato@thiagosilva.dev.br"
          >
            Enviar e-mail
          </a>
        </div>
      </div>
    </section>

    <!-- CTA FINAL -->
    <section class="py-20 text-center">
      <h2 class="text-3xl font-bold mb-4 max-w-2xl mx-auto">
        Ideia nova, produto no ar ou bug apertando?
      </h2>

      <p class="text-slate-600 mb-8">
        Chama no WhatsApp e a gente vê o melhor caminho.
      </p>

      <a
        href="https://wa.me/5512997675736"
        target="_blank"
        class="inline-block px-8 py-4 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700 transition"
      >
        Falar comigo
      </a>
    </section>

    <!-- RODAPÉ -->
    <footer class="border-t border-slate-200 bg-white">
      <div class="max-w-5xl mx-auto px-6 py-8 text-center text-sm text-slate-500">
        &copy; {{ currentYear }} Thiago Silva. Todos os direitos reservados.
      </div>
    </footer>
  </main>
</template>

<script setup>
const currentYear = new Date().getFullYear()
</script>
