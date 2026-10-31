import '@meddleware/design-tokens/tokens.css'
import '@meddleware/design-tokens/seasons.css'
import '@meddleware/ui/reset.css'
import './styles/main.css'

import { useSeason } from '@meddleware/ui'
import { mountPage } from './mount'
import HomeView from './views/HomeView.vue'

// Enable seasonal theming (sets data-season on <html>; seasons.css imported above).
useSeason()
mountPage(HomeView)
