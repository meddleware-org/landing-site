<script setup lang="ts">
import { UiButton } from '@meddleware/ui'
import { liveOn } from '../network'
</script>

<template>
  <section class="cta" aria-labelledby="cta-heading">
    <h2 id="cta-heading">Ready to build on-chain?</h2>
    <p class="body">{{ liveOn }} Connect a wallet and get started.</p>
    <p class="actions">
      <UiButton href="https://dash.meddleware.co.uk">Open Dashboard</UiButton>
      <UiButton href="https://docs.meddleware.co.uk" variant="secondary" target="_blank" rel="noopener noreferrer">Read the docs ↗</UiButton>
    </p>
  </section>
</template>

<style scoped>
.cta {
  max-width: 36rem;
  margin-inline: auto;
  padding: var(--space-xl) var(--space-sm);
  text-align: center;
}

.body {
  margin-bottom: var(--space-md);
  color: var(--muted);
  line-height: var(--leading-relaxed);
}

.actions {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: var(--space-xs);
  margin: 0;
}
</style>
