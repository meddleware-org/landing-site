<script setup lang="ts">
// The home page, in the approved order (docs/copy-review/2026-11-landing-and-role-guide.md): the purpose, the promises, the paths, the
// tools available now, and what is next.
import HeroSection from '../components/HeroSection.vue'
import PromisesSection from '../components/PromisesSection.vue'
import GuideSection from '../components/GuideSection.vue'
import FeaturesGrid from '../components/FeaturesGrid.vue'
import CtaSection from '../components/CtaSection.vue'
</script>

<template>
  <HeroSection />
  <PromisesSection />
  <GuideSection />
  <FeaturesGrid />
  <CtaSection />
</template>
