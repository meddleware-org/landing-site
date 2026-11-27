// The entry of 404.html: the server answers an unknown path with that page and a real 404 status (static-server NOT_FOUND_PAGE).
// The design tokens.
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
// The 404 page's content.
import NotFoundView from './views/NotFoundView.vue'

// Apply the seasonal accent colours.
useSeason()
// Mount the shell around the 404 page.
mountPage(NotFoundView)
