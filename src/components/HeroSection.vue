<script setup lang="ts">
import { BrandMark, UiButton } from '@meddleware/ui'
import { liveOn } from '../network'
</script>

<template>
  <section class="hero" aria-labelledby="hero-headline">
    <div class="content">
      <p class="eyebrow" aria-hidden="true"><BrandMark /> On-chain tooling</p>
      <h1 id="hero-headline">Tooling for the decentralised web</h1>
      <p class="subheading">
        <span class="line">Protocol-agnostic infrastructure, developer tools, and on-chain primitives.</span>
        <span class="line">{{ liveOn }}</span>
      </p>
      <p class="actions">
        <UiButton href="https://dash.meddleware.co.uk">Open Dashboard</UiButton>
        <UiButton href="https://docs.meddleware.co.uk" variant="secondary" target="_blank" rel="noopener noreferrer">Documentation ↗</UiButton>
      </p>
    </div>
    <!-- A large decorative mark: a shape, not text, so there is nothing for contrast to apply to. -->
    <BrandMark class="glyph" />
  </section>
</template>

<style scoped>
.hero {
  position: relative;
  min-height: calc(100dvh - var(--mw-header-height, 56px));
  display: flex;
  align-items: center;
  justify-content: center;
  padding: var(--space-xl) var(--space-sm);
  overflow: hidden;
  background:
    radial-gradient(ellipse 80% 60% at 50% 0%, color-mix(in srgb, var(--accent) 12%, transparent) 0%, transparent 70%),
    var(--bg);
}

.content {
  position: relative;
  z-index: var(--z-raised);
  min-width: 0;
  max-width: 44rem;
  text-align: center;
}

.eyebrow {
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-semibold);
  letter-spacing: var(--tracking-wide);
  text-transform: uppercase;
  color: var(--accent);
}

h1 {
  margin-bottom: var(--space-sm);
  font-size: clamp(var(--font-size-2xl), 7vw, var(--font-size-3xl));
  line-height: var(--leading-tight);
  letter-spacing: var(--tracking-tight);
  text-wrap: balance;
  /* At a large text size a long word is broken rather than pushed out of the screen. */
  overflow-wrap: anywhere;
}

.subheading {
  margin-bottom: var(--space-md);
  font-size: var(--font-size-md);
  line-height: var(--leading-relaxed);
  color: var(--muted);
}

/* Two sentences flow as one paragraph on a narrow screen and take a line each on a wide one. */
@media (width >= 37.5em) {
  .line {
    display: block;
  }
}

.actions {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: var(--space-xs);
  margin: 0;
}

.glyph {
  position: absolute;
  right: -6vw;
  bottom: -8vw;
  --mw-brand-size: 40vw;

  color: var(--accent);
  opacity: 0.04;
  pointer-events: none;
}

@media (width <= 30em) {
  .glyph {
    display: none;
  }
}
</style>
