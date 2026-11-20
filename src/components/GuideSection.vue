<script setup lang="ts">
// "I'm here to…": the three paths through the platform (the shared UiRoleGuide; the paths are data in ../roles.ts).
import { UiRoleGuide } from '@meddleware/ui'
import { ROLES } from '../roles'
</script>

<template>
  <section class="guide" aria-labelledby="guide-heading">
    <h2 id="guide-heading">Choose your path</h2>
    <UiRoleGuide name="landing-guide" :roles="ROLES" />
  </section>
</template>

<style scoped>
.guide {
  max-width: 56rem;
  margin-inline: auto;
  padding: var(--space-xl) var(--space-sm);
}

h2 {
  margin-bottom: var(--space-md);
  text-align: center;
}
</style>
