<script setup lang="ts">
// Static not-found view — no reactive state. Served with a 404 status by the server (see 404.html).
import { UiButton } from '@meddleware/ui'
</script>

<template>
  <section class="not-found" aria-labelledby="not-found-heading">
    <p class="code" aria-hidden="true">404</p>
    <h1 id="not-found-heading">Page not found</h1>
    <p class="body">There is nothing at this address.</p>
    <UiButton href="/" variant="link">Back to the home page</UiButton>
  </section>
</template>

<style scoped>
.not-found {
  min-height: calc(100dvh - var(--mw-header-height, 56px));
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: var(--space-xs);
  padding: var(--space-xl) var(--space-sm);
  text-align: center;
}

.code {
  margin: 0;
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-semibold);
  letter-spacing: var(--tracking-wide);
  color: var(--accent);
}

h1 {
  margin: 0;
  font-size: var(--font-size-2xl);
  letter-spacing: var(--tracking-tight);
}

.body {
  margin: 0;
  font-size: var(--font-size-md);
  color: var(--muted);
}
</style>
