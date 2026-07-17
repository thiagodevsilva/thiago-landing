<template>
  <div
    ref="rootRef"
    class="cases-showcase"
    :class="{ 'is-visible': isVisible }"
    @mouseenter="paused = true"
    @mouseleave="onRootLeave"
    @focusin="paused = true"
    @focusout="paused = false"
  >
    <div class="grid gap-8 lg:grid-cols-12 lg:gap-12">
      <!-- PREVIEW -->
      <div class="order-1 lg:order-none lg:col-span-7">
        <div ref="anchorRef" class="preview-anchor">
        <a
          ref="frameRef"
          :href="active.url"
          target="_blank"
          rel="noopener noreferrer"
          class="preview group"
          :style="frameStyle"
          :aria-label="`Abrir ${active.title} em nova aba`"
          @mousemove="onTilt"
          @mouseleave="resetTilt"
        >
          <!-- Barra do navegador -->
          <div class="preview-chrome">
            <span class="dot" />
            <span class="dot" />
            <span class="dot" />
            <span class="preview-url">
              <svg class="h-3 w-3 shrink-0 opacity-60" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m0 0v2m0-2h.01M17 11V7a5 5 0 00-10 0v4M5 11h14a1 1 0 011 1v7a1 1 0 01-1 1H5a1 1 0 01-1-1v-7a1 1 0 011-1z" />
              </svg>
              {{ active.domain }}
            </span>
          </div>

          <!-- Media -->
          <div class="preview-viewport">
            <div class="preview-media" :style="mediaStyle">
              <img
                v-for="(project, i) in projects"
                :key="project.id"
                :src="project.image"
                :alt="`Prévia do projeto ${project.title}`"
                class="preview-shot"
                :class="{ 'is-active': i === activeIndex }"
                loading="lazy"
                draggable="false"
              />
            </div>

            <span class="preview-glow" aria-hidden="true" />

            <span class="preview-open">
              Abrir site
              <svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </span>
          </div>
        </a>
        </div>
      </div>

      <!-- LISTA -->
      <div class="order-2 lg:order-none lg:col-span-5">
        <ul class="cases-list">
          <li
            v-for="(project, i) in projects"
            :key="project.id"
            class="cases-item"
            :style="{ '--i': i }"
          >
            <a
              :href="project.url"
              target="_blank"
              rel="noopener noreferrer"
              class="cases-link"
              :class="{ 'is-active': i === activeIndex }"
              :aria-current="i === activeIndex ? 'true' : undefined"
              @mouseenter="setActive(i)"
              @focus="setActive(i)"
            >
              <span class="cases-index">{{ String(i + 1).padStart(2, '0') }}</span>
              <span class="cases-body">
                <span class="cases-top">
                  <span class="cases-name">{{ project.title }}</span>
                  <span class="cases-tag">{{ project.tag }}</span>
                </span>
                <span class="cases-desc">{{ project.tagline }}</span>
                <span class="cases-progress" aria-hidden="true">
                  <span
                    v-if="i === activeIndex"
                    :key="'p' + activeIndex"
                    class="cases-progress-bar"
                    :class="{ 'is-paused': paused || reducedMotion }"
                  />
                </span>
              </span>
              <svg class="cases-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, nextTick, onBeforeUnmount, onMounted, ref } from 'vue'

import twsImg from '../assets/cases/tws-engenharia.webp'
import agolarImg from '../assets/cases/agolar.webp'
import futebolaImg from '../assets/cases/futebola.webp'
import crecidoAppImg from '../assets/cases/crecido-app.webp'
import thaiscostaImg from '../assets/cases/thaiscosta.webp'
import landingFoodImg from '../assets/cases/landing-food.webp'

const projects = [
  {
    id: 'thaiscosta',
    title: 'Thais Costa English',
    tag: 'Educação',
    tagline: 'Mentoria de inglês com aplicação e jornada guiada.',
    url: 'https://thaiscosta.site/',
    domain: 'thaiscosta.site',
    image: thaiscostaImg,
  },
  {
    id: 'crecido-app',
    title: 'Crecido App',
    tag: 'Produto',
    tagline: 'CRM imobiliário: leads em Kanban, imóveis e sites.',
    url: 'https://crecido.app',
    domain: 'crecido.app',
    image: crecidoAppImg,
  },
  {
    id: 'tws-engenharia',
    title: 'TWS Engenharia',
    tag: 'Institucional',
    tagline: 'Engenharia, reformas e obras com foco em credibilidade e leads.',
    url: 'https://tws-engenharia.thiagosilva.dev.br/',
    domain: 'tws-engenharia.thiagosilva.dev.br',
    image: twsImg,
  },
  {
    id: 'agolar',
    title: 'Agolar',
    tag: 'Imobiliário',
    tagline: 'Marketing imobiliário premium e conversão via WhatsApp.',
    url: 'https://agolar.thiagosilva.dev.br/',
    domain: 'agolar.thiagosilva.dev.br',
    image: agolarImg,
  },
  {
    id: 'futebola',
    title: 'Futebola',
    tag: 'Dados',
    tagline: 'Tabela do Brasileirão em tempo real, notícias e resultados.',
    url: 'https://futebola.thiagosilva.dev.br/',
    domain: 'futebola.thiagosilva.dev.br',
    image: futebolaImg,
  },
  {
    id: 'landing-food',
    title: 'Landing Food',
    tag: 'Landing',
    tagline: 'Landing de captação para restaurantes e delivery.',
    url: 'https://landing-food.thiagosilva.dev.br/',
    domain: 'landing-food.thiagosilva.dev.br',
    image: landingFoodImg,
  },
]

const AUTOPLAY_MS = 5000

const rootRef = ref(null)
const frameRef = ref(null)
const anchorRef = ref(null)
const activeIndex = ref(0)
const isVisible = ref(false)
const paused = ref(false)
const reducedMotion = ref(false)

const active = computed(() => projects[activeIndex.value])

const tilt = ref({ rx: 0, ry: 0, px: 0, py: 0, active: false })

const frameStyle = computed(() => ({
  transform: `perspective(1100px) rotateX(${tilt.value.rx}deg) rotateY(${tilt.value.ry}deg)`,
}))

const mediaStyle = computed(() => ({
  transform: `translate3d(${tilt.value.px}px, ${tilt.value.py}px, 0) scale(${tilt.value.active ? 1.04 : 1})`,
}))

const isTouch = () =>
  typeof window !== 'undefined' && window.matchMedia('(hover: none)').matches

const isDesktop = () =>
  typeof window !== 'undefined' && window.matchMedia('(min-width: 1024px)').matches

let currentOffset = 0
let currentOriginY = 0
let posAnim = null

function getCurrentTranslateY(el) {
  const t = getComputedStyle(el).transform
  if (!t || t === 'none') return 0
  const m = t.match(/matrix.*\((.+)\)/)
  if (!m) return 0
  const v = m[1].split(',').map(parseFloat)
  return v.length === 6 ? v[5] : v[13]
}

function measure(index) {
  const root = rootRef.value
  const anchor = anchorRef.value
  if (!root || !anchor) return null
  const rootRect = root.getBoundingClientRect()
  const items = root.querySelectorAll('.cases-link')
  const item = items[index]
  if (!item) return null
  const itemRect = item.getBoundingClientRect()
  const center = itemRect.top + itemRect.height / 2 - rootRect.top
  const previewH = anchor.offsetHeight
  const listH = root.offsetHeight
  const maxOffset = Math.max(0, listH - previewH)
  const offset = Math.min(Math.max(center - previewH / 2, 0), maxOffset)
  const originY = Math.min(Math.max(center - offset, 0), previewH)
  return { offset, originY, previewH }
}

function positionTo(index, animate) {
  const anchor = anchorRef.value
  if (!anchor) return

  if (!isDesktop()) {
    anchor.style.transform = 'none'
    anchor.style.transformOrigin = ''
    currentOffset = 0
    currentOriginY = 0
    return
  }

  const m = measure(index)
  if (!m) return

  const fromOffset = posAnim ? getCurrentTranslateY(anchor) : currentOffset
  const fromOriginY = currentOriginY || m.originY

  if (posAnim) {
    posAnim.cancel()
    posAnim = null
  }

  if (!animate || reducedMotion.value) {
    anchor.style.transform = `translateY(${m.offset}px)`
    anchor.style.transformOrigin = `100% ${m.originY}px`
    currentOffset = m.offset
    currentOriginY = m.originY
    return
  }
  const mid = (fromOffset + m.offset) / 2

  posAnim = anchor.animate(
    [
      { transform: `translateY(${fromOffset}px) scale(1)`, transformOrigin: `100% ${fromOriginY}px` },
      { transform: `translateY(${fromOffset}px) scale(0.72)`, transformOrigin: `100% ${fromOriginY}px`, offset: 0.4 },
      { transform: `translateY(${mid}px) scale(0.66)`, transformOrigin: `100% ${m.previewH / 2}px`, offset: 0.52 },
      { transform: `translateY(${m.offset}px) scale(0.72)`, transformOrigin: `100% ${m.originY}px`, offset: 0.64 },
      { transform: `translateY(${m.offset}px) scale(1)`, transformOrigin: `100% ${m.originY}px` },
    ],
    { duration: 640, easing: 'cubic-bezier(0.22, 1, 0.36, 1)', fill: 'forwards' },
  )

  currentOffset = m.offset
  currentOriginY = m.originY

  posAnim.onfinish = () => {
    anchor.style.transform = `translateY(${m.offset}px)`
    anchor.style.transformOrigin = `100% ${m.originY}px`
    if (posAnim) {
      posAnim.cancel()
      posAnim = null
    }
  }
}

function setActive(i) {
  if (i === activeIndex.value) return
  activeIndex.value = i
  positionTo(i, true)
}

function onRootLeave() {
  paused.value = false
}

function onTilt(e) {
  if (reducedMotion.value || isTouch() || !frameRef.value) return
  const rect = frameRef.value.getBoundingClientRect()
  const cx = (e.clientX - rect.left) / rect.width - 0.5
  const cy = (e.clientY - rect.top) / rect.height - 0.5
  tilt.value = {
    rx: -cy * 5,
    ry: cx * 5,
    px: cx * 6,
    py: cy * 4,
    active: true,
  }
}

function resetTilt() {
  tilt.value = { rx: 0, ry: 0, px: 0, py: 0, active: false }
}

let timer
function tick() {
  if (paused.value || reducedMotion.value || document.hidden) return
  setActive((activeIndex.value + 1) % projects.length)
}

function onResize() {
  positionTo(activeIndex.value, false)
}

let observer
onMounted(() => {
  const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
  reducedMotion.value = mq.matches
  mq.addEventListener?.('change', (ev) => (reducedMotion.value = ev.matches))

  observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          isVisible.value = true
          observer.unobserve(entry.target)
        }
      }
    },
    { threshold: 0.2 },
  )
  if (rootRef.value) observer.observe(rootRef.value)

  nextTick(() => positionTo(activeIndex.value, false))
  window.addEventListener('resize', onResize)

  timer = window.setInterval(tick, AUTOPLAY_MS)
})

onBeforeUnmount(() => {
  observer?.disconnect()
  window.removeEventListener('resize', onResize)
  if (posAnim) posAnim.cancel()
  if (timer) window.clearInterval(timer)
})
</script>

<style scoped>
.cases-showcase {
  opacity: 0;
  transform: translateY(1.5rem);
  transition:
    opacity 0.7s ease,
    transform 0.7s ease;
}
.cases-showcase.is-visible {
  opacity: 1;
  transform: translateY(0);
}

/* ---- Preview / moldura de navegador ---- */
.preview-anchor {
  will-change: transform;
  transform-origin: 100% 50%;
}

.preview {
  display: block;
  border-radius: 1.1rem;
  overflow: hidden;
  background: #0b1f33;
  border: 1px solid rgba(11, 31, 51, 0.12);
  box-shadow:
    0 1px 1px rgba(11, 31, 51, 0.04),
    0 18px 40px -18px rgba(11, 31, 51, 0.45);
  transform-style: preserve-3d;
  transition: transform 0.5s cubic-bezier(0.22, 1, 0.36, 1);
  will-change: transform;
}

.preview-chrome {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.6rem 0.85rem;
  background: linear-gradient(180deg, #12314c, #0e2740);
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
}
.preview-chrome .dot {
  width: 0.6rem;
  height: 0.6rem;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.22);
}
.preview-chrome .dot:nth-child(3) {
  background: rgba(15, 118, 110, 0.85);
}
.preview-url {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  margin-left: 0.5rem;
  padding: 0.2rem 0.7rem;
  max-width: 100%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.07);
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.72rem;
  letter-spacing: 0.01em;
}

.preview-viewport {
  position: relative;
  aspect-ratio: 1146 / 493;
  overflow: hidden;
  background: #0b1f33;
}
.preview-media {
  position: absolute;
  inset: 0;
  transition: transform 0.5s cubic-bezier(0.22, 1, 0.36, 1);
  will-change: transform;
}
.preview-shot {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top center;
  opacity: 0;
  transform: scale(1.04);
  filter: blur(6px);
  transition:
    opacity 0.6s ease,
    transform 0.6s ease,
    filter 0.6s ease;
}
.preview-shot.is-active {
  opacity: 1;
  transform: scale(1);
  filter: blur(0);
}

.preview-glow {
  position: absolute;
  inset: 0;
  pointer-events: none;
  background: radial-gradient(
    120% 80% at 50% 0%,
    transparent 55%,
    rgba(11, 31, 51, 0.28) 100%
  );
}

.preview-open {
  position: absolute;
  right: 0.9rem;
  bottom: 0.9rem;
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.45rem 0.85rem;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.92);
  color: #0b1f33;
  font-size: 0.8rem;
  font-weight: 600;
  opacity: 0;
  transform: translateY(0.4rem);
  transition:
    opacity 0.35s ease,
    transform 0.35s ease;
  box-shadow: 0 10px 24px -12px rgba(11, 31, 51, 0.6);
}
.preview.group:hover .preview-open,
.preview.group:focus-visible .preview-open {
  opacity: 1;
  transform: translateY(0);
}

/* ---- Lista ---- */
.cases-list {
  display: flex;
  flex-direction: column;
}
.cases-item {
  border-top: 1px solid rgba(11, 31, 51, 0.1);
}
.cases-item:last-child {
  border-bottom: 1px solid rgba(11, 31, 51, 0.1);
}

.cases-showcase.is-visible .cases-item {
  animation: cases-in 0.55s cubic-bezier(0.22, 1, 0.36, 1) both;
  animation-delay: calc(120ms + var(--i) * 70ms);
}

.cases-link {
  position: relative;
  display: flex;
  align-items: flex-start;
  gap: 0.9rem;
  padding: 0.95rem 0.4rem 0.95rem 0.9rem;
  text-decoration: none;
  color: #4a5d6e;
  transition:
    color 0.3s ease,
    padding-left 0.35s cubic-bezier(0.22, 1, 0.36, 1),
    background-color 0.3s ease;
}
/* barra de destaque animada */
.cases-link::before {
  content: '';
  position: absolute;
  left: 0;
  top: 50%;
  height: 0;
  width: 2px;
  background: #0f766e;
  transform: translateY(-50%);
  transition: height 0.35s cubic-bezier(0.22, 1, 0.36, 1);
}
.cases-link.is-active {
  color: #0b1f33;
  padding-left: 1.25rem;
}
.cases-link.is-active::before {
  height: 62%;
}
.cases-link:hover {
  color: #0b1f33;
}

.cases-index {
  font-family: "Syne", system-ui, sans-serif;
  font-size: 0.8rem;
  font-weight: 700;
  line-height: 1.9;
  color: rgba(11, 31, 51, 0.35);
  transition: color 0.3s ease;
}
.cases-link.is-active .cases-index {
  color: #0f766e;
}

.cases-body {
  flex: 1 1 auto;
  min-width: 0;
}
.cases-top {
  display: flex;
  align-items: center;
  gap: 0.6rem;
}
.cases-name {
  font-family: "Syne", system-ui, sans-serif;
  font-size: 1.05rem;
  font-weight: 600;
  line-height: 1.4;
}
.cases-tag {
  flex-shrink: 0;
  font-size: 0.62rem;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #0f766e;
  background: rgba(15, 118, 110, 0.1);
  padding: 0.12rem 0.5rem;
  border-radius: 999px;
}
.cases-desc {
  display: block;
  margin-top: 0.15rem;
  font-size: 0.88rem;
  line-height: 1.5;
  color: #4a5d6e;
}

.cases-progress {
  display: block;
  margin-top: 0.7rem;
  height: 2px;
  border-radius: 999px;
  background: rgba(11, 31, 51, 0.08);
  overflow: hidden;
}
.cases-progress-bar {
  display: block;
  height: 100%;
  width: 100%;
  transform-origin: left center;
  background: linear-gradient(90deg, #0f766e, #0d9488);
  animation: cases-progress 5000ms linear both;
}
.cases-progress-bar.is-paused {
  animation-play-state: paused;
}

.cases-arrow {
  width: 1.15rem;
  height: 1.15rem;
  margin-top: 0.35rem;
  flex-shrink: 0;
  color: rgba(11, 31, 51, 0.3);
  opacity: 0;
  transform: translateX(-0.3rem);
  transition:
    opacity 0.3s ease,
    transform 0.3s ease,
    color 0.3s ease;
}
.cases-link.is-active .cases-arrow,
.cases-link:hover .cases-arrow {
  opacity: 1;
  transform: translateX(0);
  color: #0f766e;
}

@keyframes cases-in {
  from {
    opacity: 0;
    transform: translateY(0.9rem);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
@keyframes cases-progress {
  from {
    transform: scaleX(0);
  }
  to {
    transform: scaleX(1);
  }
}

@media (prefers-reduced-motion: reduce) {
  .cases-showcase,
  .cases-showcase.is-visible .cases-item,
  .preview,
  .preview-media,
  .preview-shot,
  .cases-progress-bar {
    transition: opacity 0.3s ease;
    animation: none !important;
    transform: none !important;
  }
  .preview-shot.is-active {
    filter: none;
  }
}
</style>
