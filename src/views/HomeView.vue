<template>
  <main class="min-h-screen bg-slate-200 text-slate-800">
    <!-- HERO -->
    <section class="max-w-5xl mx-auto px-6 py-20">
      <h1 class="text-4xl md:text-5xl font-bold leading-tight">
        Desenvolvedor Web Full Stack <br />
        <span class="text-indigo-600">
          Manutenção e evolução de sistemas
        </span>
      </h1>

      <p class="mt-6 text-lg text-slate-600 max-w-3xl">
        Atuo na correção, manutenção e evolução de sistemas já em produção,
        com foco em estabilidade, rapidez e impacto mínimo no negócio.
      </p>

      <div class="mt-8 flex flex-wrap gap-4">
        <a
          href="https://wa.me/5512997675736"
          target="_blank"
          class="inline-block px-8 py-4 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700 transition"
        >
          Falar comigo no WhatsApp
        </a>
        <RouterLink
          to="/catalogo"
          class="inline-block px-8 py-4 bg-white border border-slate-300 text-slate-800 rounded-lg font-medium hover:bg-slate-50 transition"
        >
          Ver catálogo de padrões
        </RouterLink>
      </div>
    </section>

    <!-- O QUE EU FAÇO -->
    <section class="bg-white py-20">
      <div class="max-w-5xl mx-auto px-6">
        <h2 class="text-3xl font-bold mb-6">Como posso te ajudar</h2>

        <p class="text-slate-600 mb-8">
          Muitos projetos não precisam ser reescritos — precisam ser entendidos,
          corrigidos e evoluídos com cuidado. Meu trabalho é resolver problemas
          reais sem quebrar o que já funciona.
        </p>

        <ul class="grid md:grid-cols-2 gap-4 text-slate-700">
          <li>• Criação de Sites, Landing Pages e API's do ZERO</li>
          <li>• Manutenção e correção de sistemas Laravel e PHP 5+</li>
          <li>• Manutenção e correção de sistemas NestJS</li>
          <li>• Evolução de funcionalidades em produção</li>
          <li>• Integração de gateways de pagamento</li>
          <li>• Correção de bugs críticos</li>
          <li>• Ajustes em código legado</li>
          <li>• Suporte técnico pontual ou recorrente</li>
          <li>• Consultoria de TI</li>
        </ul>
      </div>
    </section>

    <!-- EXPERIÊNCIA -->
    <section class="py-20">
      <div class="max-w-5xl mx-auto px-6">
        <h2 class="text-3xl font-bold mb-6">Experiência real em produção</h2>

        <p class="text-slate-600 max-w-3xl">
          Atuo há anos em sistemas de médio e grande porte, lidando com código
          legado, regras de negócio complexas e ambientes críticos.
        </p>

        <ul class="mt-6 space-y-2 text-slate-700">
          <li>• Plataformas SaaS</li>
          <li>• Sistemas administrativos e operacionais</li>
          <li>• Projetos com grande volume de dados</li>
          <li>• Manutenção contínua de sistemas em produção</li>
          <li>• Integrações com serviços externos e APIs</li>
        </ul>
      </div>
    </section>

    <!-- PORTFÓLIO -->
    <section class="bg-white py-20">
      <div class="max-w-5xl mx-auto px-6">
        <h2 class="text-3xl font-bold mb-2">Portfólio</h2>
        <p class="text-slate-600 mb-10 max-w-3xl">
          Projetos que desenvolvi para demonstrar soluções reais.
        </p>

        <a
          href="https://landing-food.thiagosilva.dev.br/"
          target="_blank"
          rel="noopener"
          class="block group"
        >
          <article class="rounded-xl border border-slate-200 overflow-hidden bg-slate-50 hover:border-indigo-300 hover:shadow-lg transition-all duration-300">
            <div class="p-6 md:p-8">
              <div class="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                <div>
                  <h3 class="text-xl font-semibold text-slate-800 group-hover:text-indigo-600 transition-colors">
                    Landing Food
                  </h3>
                  <p class="text-slate-600 mt-2">
                    Mais clientes no seu restaurante
                  </p>
                  <p class="text-slate-500 text-sm mt-3 max-w-2xl">
                    Landing page para donos de restaurante. Estratégias que fazem pizzarias, hamburguerias e delivery venderem mais — com diagnóstico gratuito e formulário de captação.
                  </p>
                </div>
                <span class="inline-flex items-center gap-2 text-indigo-600 font-medium shrink-0">
                  Visitar site
                  <svg class="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </span>
              </div>
            </div>
          </article>
        </a>
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
        <h2 class="text-3xl font-bold mb-6">Evolution API Especialist</h2>

        <p class="text-slate-600 mb-8 max-w-3xl">
          Implemento e mantenho integrações robustas com a Evolution API para WhatsApp, com foco em
          estabilidade, escalabilidade e suporte a múltiplas instâncias. Ideal para quem opera chatbots, N8N,
          atendimento e automações e precisa de um ambiente confiável em produção.
        </p>

        <div class="grid md:grid-cols-2 gap-8 text-slate-700">
          <div class="bg-white rounded-xl p-6 border border-slate-200">
            <h3 class="font-semibold mb-3">O que eu espero sempre entregar:</h3>
            <ul class="space-y-2">
              <li>• Provisionamento e gerenciamento de instâncias (multi-tenant)</li>
              <li>• Integração completa com webhooks e eventos (mensagens, status, sessões)</li>
              <li>• Envio para contatos e grupos com fila, retries e controle de erros</li>
              <li>• Rotinas de reconexão, health-check e monitoramento</li>
              <li>• Painel simples para o cliente operar (instância, configurações, envio)</li>
            </ul>
          </div>

          <div class="bg-white rounded-xl p-6 border border-slate-200">
            <h3 class="font-semibold mb-3">Como eu garanto estabilidade:</h3>
            <ul class="space-y-2">
              <li>• Filas e processamento assíncrono (ex.: RabbitMQ/Redis)</li>
              <li>• Observabilidade: logs estruturados e rastreio de falhas</li>
              <li>• Rate limit e proteção contra spam/bloqueios</li>
              <li>• Isolamento por cliente (tokens, limites e permissões)</li>
              <li>• Deploy com Docker e boas práticas de infra em Linux/AWS</li>
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
        <h2 class="text-3xl font-bold mb-6">Perfil profissional</h2>

        <p class="text-slate-600 mb-10 max-w-3xl">
          Para validar histórico, experiências e recomendações, meu perfil profissional está disponível no LinkedIn.
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
      <h2 class="text-3xl font-bold mb-4">
        Precisa manter ou evoluir um sistema Laravel, PHP ou uma API Nest?
        <br>
        Ou apenas uma ajuda com um bug?
      </h2>

      <p class="text-slate-600 mb-8">
        Entre em contato e vamos resolver.
      </p>

      <a
        href="https://wa.me/5512997675736"
        target="_blank"
        class="inline-block px-8 py-4 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700 transition"
      >
        Falar comigo
      </a>
    </section>
  </main>
</template>

<script setup>
</script>
