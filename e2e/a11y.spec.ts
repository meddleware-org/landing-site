// The shared accessibility sweep (WCAG 2.2 AA and AAA in every colour mode × season, reflow, text size, forced colours, reduced motion,
// keyboard) over the page and the 404 page.
import { defineA11ySuite } from '@meddleware/frontend-config/a11y'
import { open } from './open.js'

defineA11ySuite({ home: open('/'), '404 page': open('/404.html') }, { aaa: 'gate' })
