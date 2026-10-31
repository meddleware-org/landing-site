// The entry of 404.html: the server answers an unknown path with that page and a real 404 status (static-server NOT_FOUND_PAGE).
import '@meddleware/design-tokens/tokens.css'
import '@meddleware/design-tokens/seasons.css'
import '@meddleware/ui/reset.css'
import './styles/main.css'

import { useSeason } from '@meddleware/ui'
import { mountPage } from './mount'
import NotFoundView from './views/NotFoundView.vue'

useSeason()
mountPage(NotFoundView)
