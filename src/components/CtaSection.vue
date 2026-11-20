<script setup lang="ts">
import { UiButton } from '@meddleware/ui'
</script>

<template>
  <section class="cta" aria-labelledby="cta-heading">
    <h2 id="cta-heading">More open tools are coming</h2>
    <p class="body">See what we are working on next, and what we have finished, on the public roadmap.</p>
    <p class="actions">
      <UiButton href="https://roadmap.meddleware.co.uk">Open the roadmap</UiButton>
      <UiButton href="#available" variant="secondary">Try what's available now</UiButton>
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
