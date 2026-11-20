<script setup lang="ts">
import { UiCard } from '@meddleware/ui'
import { TOOLS } from '../tools'
import { networkLabel } from '../network'
</script>

<template>
  <!-- The catalogue: the tools available now. It grows and changes; the platform is not defined by it (COPY_STANDARD.md). -->
  <section id="available" class="features" aria-labelledby="features-heading">
    <header class="intro">
      <h2 id="features-heading">Available now</h2>
      <p>The first tools. More are on the way, and they won't all be about the same thing.</p>
    </header>
    <ul class="grid" role="list">
      <UiCard v-for="tool in TOOLS" :key="tool.name" as="li" plain :level="3" :title="tool.title" :href="tool.href">
        <template #icon><span aria-hidden="true">{{ tool.icon }}</span></template>
        <p>{{ tool.description }}</p>
        <p class="meta">{{ tool.name }} · runs on {{ tool.runsOn }} · {{ networkLabel }}</p>
      </UiCard>
    </ul>
  </section>
</template>

<style scoped>
.features {
  /* The hero's and the guide's "available" links land here, below the sticky header. */
  scroll-margin-block-start: var(--space-2xl);
  padding: var(--space-xl) var(--space-sm);
  background: var(--surface);
  border-block: 1px solid var(--border);
}

.intro,
.grid {
  max-width: 56rem;
  margin-inline: auto;
}

.intro {
  margin-bottom: var(--space-lg);
  text-align: center;
}

.intro p {
  color: var(--muted);
  overflow-wrap: anywhere;
}

/* The headings say what a tool does, so they are longer than a tool's name: keep them at the card-title size. */
.grid :deep(.mw-card__title) {
  font-size: var(--font-size-md);
}

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
