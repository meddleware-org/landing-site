<script setup lang="ts">
// The tools available now, one card each, from the catalogue in src/tools.ts. The catalogue grows and changes; the platform is not defined by it. Related: views/HomeView.vue (hosts it),
// src/network.ts (where the tools run).
// The shared card.
import { UiCard } from '@meddleware/ui'
// The catalogue.
import { TOOLS } from '../tools'
// Where the tools run, from the deployment records.
import { networkLabel } from '../network'
</script>

<template>
  <section id="available" class="features" aria-labelledby="features-heading">
    <!-- The section's introduction. -->
    <header class="intro">
      <h2 id="features-heading">Available now</h2>
      <p>The first tools. More are on the way, and they won't all be about the same thing.</p>
    </header>
    <!-- The cards; the list role stays because the styles remove the bullets. -->
    <ul class="grid" role="list">
      <!-- One card per tool: its title, a link to the tool, its description and what it runs on. -->
      <UiCard v-for="tool in TOOLS" :key="tool.name" as="li" plain :level="3" :title="tool.title" :href="tool.href">
        <!-- The icon is decoration. -->
        <template #icon><span aria-hidden="true">{{ tool.icon }}</span></template>
        <p>{{ tool.description }}</p>
        <!-- The tool's own name, what it runs on and the network. -->
        <p class="meta">{{ tool.name }} · runs on {{ tool.runsOn }} · {{ networkLabel }}</p>
      </UiCard>
    </ul>
  </section>
</template>

<style scoped>
/* A tinted band with rules above and below, and a scroll margin below the sticky header. */
.features {
  /* The hero's and the guide's "available" links land here, below the sticky header. */
  scroll-margin-block-start: var(--space-2xl);
  padding: var(--space-xl) var(--space-sm);
  background: var(--surface);
  border-block: 1px solid var(--border);
}

/* The introduction and the grid share a width. */
.intro,
/* As many columns as fit, each at least 22rem. */
.grid {
  max-width: 56rem;
  margin-inline: auto;
}

/* A centred introduction. */
.intro {
  margin-bottom: var(--space-lg);
  text-align: center;
}

/* A muted lead that may wrap anywhere. */
.intro p {
  color: var(--muted);
  overflow-wrap: anywhere;
}

/* The headings say what a tool does, so they are longer than a tool's name: keep them at the card-title size. */
.grid :deep(.mw-card__title) {
  font-size: var(--font-size-md);
}

/* Small muted text. */
.meta {
  margin: var(--space-2xs) 0 0;
  color: var(--muted);
  font-size: var(--font-size-sm);
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(min(100%, 22rem), 1fr));
  gap: var(--space-xs);
}
</style>
