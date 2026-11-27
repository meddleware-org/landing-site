<script setup lang="ts">
// "I'm here to…": the three paths through the platform (the shared UiRoleGuide; the paths are data in ../roles.ts).
// The shared role guide.
import { UiRoleGuide } from '@meddleware/ui'
// The three paths, as data.
import { ROLES } from '../roles'
</script>

<template>
  <section class="guide" aria-labelledby="guide-heading">
    <!-- The section's heading. -->
    <h2 id="guide-heading">Choose your path</h2>
    <!-- The guide: a native radio group that shows one path's walkthrough, working without scripts. -->
    <UiRoleGuide name="landing-guide" :roles="ROLES" />
  </section>
</template>

<style scoped>
/* A centred block of the shared width. */
.guide {
  max-width: 56rem;
  margin-inline: auto;
  padding: var(--space-xl) var(--space-sm);
}

/* A centred heading with space below. */
h2 {
  margin-bottom: var(--space-md);
  text-align: center;
}
</style>
