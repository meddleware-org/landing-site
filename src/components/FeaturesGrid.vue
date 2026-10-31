<script setup lang="ts">
import { UiCard } from '@meddleware/ui'
import { TOOLS } from '../tools'
</script>

<template>
  <section class="features" aria-labelledby="features-heading">
    <header class="intro">
      <h2 id="features-heading">What's in the dashboard</h2>
      <p>
        Five on-chain tools — all accessible via a single wallet connection at
        <a href="https://dash.meddleware.co.uk">dash.meddleware.co.uk</a>,
        or as standalone micro-apps on their own subdomains.
      </p>
    </header>
    <ul class="grid" role="list">
      <UiCard v-for="tool in TOOLS" :key="tool.title" as="li" plain :level="3" :title="tool.title" :href="tool.href">
        <template #icon><span aria-hidden="true">{{ tool.icon }}</span></template>
        <p>{{ tool.description }}</p>
      </UiCard>
    </ul>
  </section>
</template>

<style scoped>
.features {
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

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(min(100%, 18rem), 1fr));
  gap: var(--space-xs);
}
</style>
