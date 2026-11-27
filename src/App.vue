<script setup lang="ts">
// The page shell both pages share: the sticky transparent header (brand, site links, colour mode), the page itself in the main region, and the footer with the copyright line and the legal
// documents, which are served from this origin. Related: src/mount.ts (mounts it around a view), src/views/ (the two pages).
// The shared page shell: header, footer, brand mark, colour-mode control and copyright line.
import { AppFooter, AppHeader, BrandMark, ColorModeControl, CopyrightLine, UiAppShell, useColorMode } from '@meddleware/ui'

// Dark is the brand default; a visitor's saved choice always wins.
// The colour mode, and whether the visitor asked for it to be remembered (nothing is stored until they do).
const { mode, set, remember, setRemember } = useColorMode('dark')
</script>

<template>
  <UiAppShell>
    <!-- The header. -->
    <template #header>
      <!-- Transparent over the hero, and sticky. -->
      <AppHeader variant="transparent" :sticky="true">
        <!-- The brand: the mark and the name, linking home. -->
        <template #brand>
          <a href="/" class="brand" aria-label="Meddleware home"><BrandMark class="mark" /> Meddleware</a>
        </template>
        <template #actions>
          <!-- The header links. -->
          <nav aria-label="Site">
            <a href="https://dash.meddleware.co.uk">Dashboard</a>
            <a href="https://docs.meddleware.co.uk" target="_blank" rel="noopener noreferrer">Docs</a>
          </nav>
          <!-- Light, dark or system, with the "remember" choice. -->
          <ColorModeControl :model-value="mode" :remember="remember" @update:model-value="set" @update:remember="setRemember" />
        </template>
      </AppHeader>
    </template>

    <!-- The page. -->
    <slot />

    <!-- The footer. -->
    <template #footer>
      <!-- The footer, with the documentation links. -->
      <AppFooter variant="dark" docs-url="https://docs.meddleware.co.uk" dev-url="https://meddleware.dev">
        <template #start>
          <!-- The one canonical home of the legal documents: they are served from this origin. -->
          <CopyrightLine symbol-variant="kopimi" organisation-name="Meddleware" rights-statement="jam" legal-base="/legal/" />
        </template>
        <!-- The header's links are hidden on a narrow screen (there is no room beside the colour-mode control); they are here too. -->
        <template #end>
          <a href="https://dash.meddleware.co.uk">Dashboard</a>
          <!-- Meddleware's own funds, in public: a footer link, not a catalogue tool (FU-0169). -->
          <a href="https://treasury.meddleware.co.uk">Treasury</a>
        </template>
      </AppFooter>
    </template>
  </UiAppShell>
</template>

<style scoped>
/* The brand link looks like the header text, with the shared brand weight. */
.brand {
  display: inline-flex;
  align-items: center;
  gap: var(--space-2xs);
  color: inherit;
  text-decoration: none;
  font-weight: var(--font-weight-brand);
  letter-spacing: var(--tracking-wide);
}

/* The mark takes the accent colour. */
.mark {
  color: var(--accent);
}

/* The links on one row. */
nav {
  display: flex;
  align-items: center;
  gap: var(--space-sm);
}

/* The links inherit the header colour and have no underline until hovered. */
nav a {
  color: inherit;
  text-decoration: none;
  font-size: var(--font-size-sm);
}

/* Underline on hover. */
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
