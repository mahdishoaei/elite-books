import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { VOtpInput } from 'vuetify/labs/VOtpInput'
export default defineNuxtPlugin(nuxtApp => {
  const vuetify = createVuetify({
    ssr: true,
    VOtpInput,
    components,
    directives,
  })

  nuxtApp.vueApp.use(vuetify)
})


