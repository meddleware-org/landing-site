// The entry of index.html: the stylesheets, the seasonal theme and the home page inside the shared page shell. Related: src/mount.ts (the shell), src/not-found.ts (the 404 page's entry).
// The design tokens: every colour, space and type size the components use.
import '@meddleware/design-tokens/tokens.css'
// The seasonal accent colours.
import '@meddleware/design-tokens/seasons.css'
// The shared reset and base styles.
import '@meddleware/ui/reset.css'
// The page's own few rules.
import './styles/main.css'

// Applies the seasonal accent colours.
import { useSeason } from '@meddleware/ui'
// Mounts the shell around a view.
import { mountPage } from './mount'
// The home page's content.
import HomeView from './views/HomeView.vue'

// Enable seasonal theming (sets data-season on <html>; seasons.css imported above).
useSeason()
// Mount the shell around the home page.
mountPage(HomeView)
