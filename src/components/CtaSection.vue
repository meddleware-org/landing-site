<script setup lang="ts">
// The closing call: the public roadmap and a way back to the tools available now. Related: views/HomeView.vue (hosts it).
// The shared button.
import { UiButton } from '@meddleware/ui'
</script>

<template>
  <section class="cta" aria-labelledby="cta-heading">
    <!-- What is next. -->
    <h2 id="cta-heading">More open tools are coming</h2>
    <!-- Where to see it. -->
    <p class="body">See what we are working on next, and what we have finished, on the public roadmap.</p>
    <!-- The two actions. -->
    <p class="actions">
      <!-- The public roadmap. -->
      <UiButton href="https://roadmap.meddleware.co.uk">Open the roadmap</UiButton>
      <!-- Back to the tools available now. -->
      <UiButton href="#available" variant="secondary">Try what's available now</UiButton>
    </p>
  </section>
</template>

<style scoped>
/* A narrow, centred block. */
.cta {
  max-width: 36rem;
  margin-inline: auto;
  padding: var(--space-xl) var(--space-sm);
  text-align: center;
}

/* Space below, muted and with relaxed lines. */
.body {
  margin-bottom: var(--space-md);
  color: var(--muted);
  line-height: var(--leading-relaxed);
}

/* The buttons on a centred wrapping row. */
.actions {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: var(--space-xs);
  margin: 0;
}
</style>
