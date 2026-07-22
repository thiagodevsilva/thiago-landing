<template>
  <section class="py-10 md:py-12" aria-labelledby="levita-promo-title">
    <div class="mx-auto max-w-6xl px-6 lg:px-8">
      <div class="lv-card">
        <div class="lv-bg" aria-hidden="true" />

        <div class="lv-content">
          <p class="lv-badge">Novo · App de finanças</p>
          <h3 id="levita-promo-title" class="lv-title">
            Conheça o aplicativo <span class="lv-brand">Levita</span>
          </h3>
          <p class="lv-tagline">
            Finanças da família, sem complicação — contas compartilhadas, categorias e relatórios no mesmo lugar.
          </p>

          <div class="lv-actions">
            <a
              href="https://levita.thiagosilva.dev.br"
              target="_blank"
              rel="noopener noreferrer"
              class="lv-btn lv-btn--primary"
            >
              Conhecer o Levita
              <svg class="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
            <a
              href="https://github.com/thiagodevsilva/finans"
              target="_blank"
              rel="noopener noreferrer"
              class="lv-btn lv-btn--ghost"
            >
              <svg class="h-3.5 w-3.5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 .5a12 12 0 00-3.79 23.4c.6.1.82-.26.82-.58v-2.02c-3.34.73-4.04-1.6-4.04-1.6-.55-1.4-1.34-1.77-1.34-1.77-1.09-.75.08-.73.08-.73 1.2.09 1.84 1.24 1.84 1.24 1.07 1.83 2.8 1.3 3.49.99.11-.78.42-1.3.76-1.6-2.67-.3-5.47-1.34-5.47-5.96 0-1.32.47-2.4 1.24-3.24-.12-.3-.54-1.53.12-3.18 0 0 1.01-.32 3.3 1.24a11.5 11.5 0 016 0c2.29-1.56 3.3-1.24 3.3-1.24.66 1.65.24 2.88.12 3.18.77.84 1.24 1.92 1.24 3.24 0 4.63-2.81 5.65-5.49 5.95.43.37.81 1.1.81 2.22v3.29c0 .32.22.69.83.57A12 12 0 0012 .5z" />
              </svg>
              GitHub
            </a>
          </div>
        </div>

        <img :src="mulherImg" alt="" class="lv-woman" aria-hidden="true" />
      </div>
    </div>
  </section>
</template>

<script setup>
import mulherImg from '../assets/levita/mulher.png'
</script>

<style scoped>
.lv-card {
  position: relative;
  overflow: hidden;
  border-radius: 1.15rem;
  min-height: 9.5rem;
  box-shadow: 0 14px 36px -20px rgba(180, 120, 0, 0.45);
}

.lv-bg {
  position: absolute;
  inset: 0;
  background: linear-gradient(105deg, #ffe566 0%, #f5c518 45%, #e8a412 100%);
}

.lv-content {
  position: relative;
  z-index: 2;
  padding: 1.15rem 1.25rem;
  max-width: 34rem;
}
.lv-badge {
  display: inline-block;
  font-size: 0.62rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: rgba(11, 31, 51, 0.7);
  background: rgba(255, 255, 255, 0.45);
  border: 1px solid rgba(255, 255, 255, 0.55);
  padding: 0.15rem 0.55rem;
  border-radius: 999px;
}
.lv-title {
  margin-top: 0.45rem;
  font-family: "Syne", system-ui, sans-serif;
  font-size: 1.25rem;
  font-weight: 700;
  line-height: 1.15;
  color: #0b1f33;
}
.lv-brand {
  color: #1d4ed8;
}
.lv-tagline {
  margin-top: 0.4rem;
  max-width: 28rem;
  font-size: 0.9rem;
  font-weight: 500;
  line-height: 1.45;
  color: rgba(11, 31, 51, 0.82);
}
.lv-actions {
  margin-top: 0.75rem;
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}
.lv-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  padding: 0.45rem 0.9rem;
  border-radius: 0.55rem;
  font-size: 0.82rem;
  font-weight: 600;
  text-decoration: none;
  transition:
    transform 0.2s ease,
    background-color 0.2s ease,
    border-color 0.2s ease;
}
.lv-btn--primary {
  background: #2563eb;
  color: #fff;
}
.lv-btn--primary:hover {
  background: #1d4ed8;
  transform: translateY(-1px);
}
.lv-btn--ghost {
  color: #0b1f33;
  border: 1.5px solid rgba(11, 31, 51, 0.28);
  background: rgba(255, 255, 255, 0.35);
}
.lv-btn--ghost:hover {
  background: rgba(255, 255, 255, 0.6);
  border-color: rgba(11, 31, 51, 0.45);
}

.lv-woman {
  position: absolute;
  right: 0.5rem;
  bottom: 0;
  height: 110%;
  width: auto;
  z-index: 3;
  pointer-events: none;
  display: none;
  filter: drop-shadow(0 8px 18px rgba(80, 50, 0, 0.22));
}

@media (min-width: 640px) {
  .lv-woman {
    display: block;
  }
  .lv-content {
    padding-right: 11.5rem;
    max-width: none;
  }
}

@media (min-width: 768px) {
  .lv-card {
    min-height: 10rem;
  }
  .lv-content {
    padding: 1.25rem 1.75rem;
    padding-right: 13.5rem;
  }
  .lv-title {
    font-size: 1.4rem;
  }
  .lv-woman {
    right: 1rem;
    height: 118%;
  }
}

@media (prefers-reduced-motion: reduce) {
  .lv-btn {
    transition: none;
  }
  .lv-btn--primary:hover {
    transform: none;
  }
}
</style>
