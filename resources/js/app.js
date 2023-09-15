import '../css/reset.css'
import '../css/app.css'
import { createInertiaApp } from '@inertiajs/svelte'

createInertiaApp({
  resolve: (name) => require(`./Pages/${name}.svelte`),
  setup({ el, App, props }) {
    new App({ target: el, props })
  },
})
