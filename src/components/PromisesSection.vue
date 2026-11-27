<script setup lang="ts">
// What every Meddleware tool promises: the platform's purpose in four checkable commitments (ADR-0013), approved 2026-11-20
// (docs/copy-review/2026-11-landing-and-role-guide.md §3). About the platform, never one tool or technology.
// The four promises, as data.
const PROMISES = [
  { title: 'You can leave', text: 'Everything you put in, you can take out, in open formats, without asking us.' },
  { title: 'It works with others', text: "We use open standards, not private formats, so our tools connect to other people's and theirs to ours." },
  { title: 'Nobody is watching', text: 'No adverts, no tracking, no selling data, no cookies unless you sign in. We earn from published fees and nothing else.' },
  { title: 'You can run it yourself', text: 'Everything is open source (0BSD). Use ours, or host your own copy under your own name.' },
] as const
</script>

<template>
  <section class="promises" aria-labelledby="promises-heading">
    <!-- The section's heading. -->
    <h2 id="promises-heading">What every Meddleware tool promises</h2>
    <!-- The promises; the list role stays because the styles remove the bullets. -->
    <ul class="list" role="list">
      <!-- One promise: a title and a sentence. -->
      <li v-for="p in PROMISES" :key="p.title">
        <!-- The promise, in a few words. -->
        <h3>{{ p.title }}</h3>
        <!-- What it means. -->
        <p>{{ p.text }}</p>
      </li>
    </ul>
  </section>
</template>

<style scoped>
/* A centred block of the shared width. */
.promises {
  max-width: 56rem;
  margin-inline: auto;
  padding: var(--space-xl) var(--space-sm);
}

/* A centred heading with space below. */
h2 {
  margin-bottom: var(--space-lg);
  text-align: center;
}

/* As many columns as fit, with no bullets. */
.list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 10rem), 1fr));
  gap: var(--space-md);
  margin: 0;
  padding: 0;
  list-style: none;
}

/* A small heading. */
h3 {
  margin: 0 0 var(--space-2xs);
  font-size: var(--font-size-base);
}

/* Muted text with no margin. */
.list p {
  margin: 0;
  color: var(--muted);
}
</style>
