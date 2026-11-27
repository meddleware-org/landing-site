<script setup lang="ts">
// Static not-found view — no reactive state. Served with a 404 status by the server (see 404.html).
// The shared button, used as a link home.
import { UiButton } from '@meddleware/ui'
</script>

<template>
  <section class="not-found" aria-labelledby="not-found-heading">
    <!-- The status code as decoration; the heading carries the meaning. -->
    <p class="code" aria-hidden="true">404</p>
    <!-- The page's one heading. -->
    <h1 id="not-found-heading">Page not found</h1>
    <!-- What is wrong. -->
    <p class="body">There is nothing at this address.</p>
    <!-- The way back. -->
    <UiButton href="/" variant="link">Back to the home page</UiButton>
  </section>
</template>

<style scoped>
.not-found {
  /* The small viewport height: a phone's address bar collapsing while the page is scrolled does not change it, so the centred content does not
     move a few pixels into the scroll (the dynamic height, dvh, did). */
  min-height: calc(100svh - var(--mw-header-height, 56px));
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: var(--space-xs);
  padding: var(--space-xl) var(--space-sm);
  text-align: center;
}

/* A small accent-coloured label. */
.code {
  margin: 0;
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-semibold);
  letter-spacing: var(--tracking-wide);
  color: var(--accent);
}

/* The heading is large with tight tracking. */
h1 {
  margin: 0;
  font-size: var(--font-size-2xl);
  letter-spacing: var(--tracking-tight);
}

/* A muted line. */
.body {
  margin: 0;
  font-size: var(--font-size-md);
  color: var(--muted);
}
</style>
