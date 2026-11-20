<script setup lang="ts">
// What every Meddleware tool promises: the platform's purpose in four checkable commitments (ADR-0013), approved 2026-11-20
// (docs/copy-review/2026-11-landing-and-role-guide.md §3). About the platform, never one tool or technology.
const PROMISES = [
  { title: 'You can leave', text: 'Everything you put in, you can take out, in open formats, without asking us.' },
  { title: 'It works with others', text: "We use open standards, not private formats, so our tools connect to other people's and theirs to ours." },
  { title: 'Nobody is watching', text: 'No adverts, no tracking, no selling data, no cookies unless you sign in. We earn from published fees and nothing else.' },
  { title: 'You can run it yourself', text: 'Everything is open source (0BSD). Use ours, or host your own copy under your own name.' },
] as const
</script>

<template>
  <section class="promises" aria-labelledby="promises-heading">
    <h2 id="promises-heading">What every Meddleware tool promises</h2>
    <ul class="list" role="list">
      <li v-for="p in PROMISES" :key="p.title">
        <h3>{{ p.title }}</h3>
        <p>{{ p.text }}</p>
      </li>
    </ul>
  </section>
</template>

<style scoped>
.promises {
  max-width: 56rem;
  margin-inline: auto;
  padding: var(--space-xl) var(--space-sm);
}

h2 {
  margin-bottom: var(--space-lg);
  text-align: center;
}

.list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 10rem), 1fr));
  gap: var(--space-md);
  margin: 0;
  padding: 0;
  list-style: none;
}

h3 {
  margin: 0 0 var(--space-2xs);
  font-size: var(--font-size-base);
}

.list p {
  margin: 0;
  color: var(--muted);
}
</style>
