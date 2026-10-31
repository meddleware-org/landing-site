<script setup lang="ts">
import { AppFooter, AppHeader, ColorModeControl, CopyrightLine, UiAppShell, useColorMode } from '@meddleware/ui'

// Dark is the brand default; a visitor's saved choice always wins.
const { mode, set } = useColorMode('dark')
</script>

<template>
  <UiAppShell>
    <template #header>
      <AppHeader variant="transparent" :sticky="true" :solidify-on-scroll="true">
        <template #brand>
          <a href="/" class="brand" aria-label="Meddleware home"><span class="mark" aria-hidden="true">◆</span> Meddleware</a>
        </template>
        <template #actions>
          <nav aria-label="Site">
            <a href="https://dash.meddleware.co.uk">Dashboard</a>
            <a href="https://docs.meddleware.co.uk" target="_blank" rel="noopener noreferrer">Docs</a>
          </nav>
          <ColorModeControl :model-value="mode" @update:model-value="set" />
        </template>
      </AppHeader>
    </template>

    <slot />

    <template #footer>
      <AppFooter variant="dark" docs-url="https://docs.meddleware.co.uk" dev-url="https://meddleware.dev">
        <template #start>
          <!-- The one canonical home of the legal documents: they are served from this origin. -->
          <CopyrightLine symbol-variant="kopimi" organisation-name="Meddleware" rights-statement="jam" legal-base="/legal/" />
        </template>
        <!-- The header's links are hidden on a narrow screen (there is no room beside the colour-mode control); they are here too. -->
        <template #end>
          <a href="https://dash.meddleware.co.uk">Dashboard</a>
        </template>
      </AppFooter>
    </template>
  </UiAppShell>
</template>

<style scoped>
.brand {
  display: inline-flex;
  align-items: center;
  gap: var(--space-2xs);
  color: inherit;
  text-decoration: none;
  font-weight: var(--font-weight-brand);
  letter-spacing: var(--tracking-wide);
}

.mark {
  color: var(--accent);
}

nav {
  display: flex;
  align-items: center;
  gap: var(--space-sm);
}

nav a {
  color: inherit;
  text-decoration: none;
  font-size: var(--font-size-sm);
}

nav a:hover {
  text-decoration: underline;
}

/* On a narrow screen the brand and the colour-mode control fill the header; the same links are in the footer and the page. */
@media (width < 40em) {
  nav {
    display: none;
  }
}
</style>
