// Screenshots for LOOKING at the app (see @meddleware/frontend-config/shots). Run: npm run shots
import { defineShots } from '@meddleware/frontend-config/shots'
import { open } from './open.js'

defineShots({ home: open('/'), notfound: open('/404.html') })
