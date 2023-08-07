import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { VDataIterator } from 'vuetify/labs/VDataIterator'
import { aliases, mdi } from "vuetify/lib/iconsets/mdi";

const darkBlue = {
  dark: true,
  variables: {}, // ✅ this property is required to avoid Vuetify crash

  colors: {
    //green: '#00ff00' // cannot use primary color names here, so use a custom color name (such as 'greenish')
    greenish: '#03DAC5',

    // Workaround: Custom colors seem to erase default colors, so we need to include the default colors (of `light` or `dark` theme)
    background: "#00363cff",
    surface: "#00363cff",
    primary: "#3f51b5",
    secondary: "#03dac6",
    error: "#f44336",
    info: "#2196F3",
    success: "#4caf50",
    warning: "#fb8c00",
  },
}

export default defineNuxtPlugin(nuxtApp => {
  const vuetify = createVuetify({
    ssr: true,
    icons: {
      defaultSet: 'mdi',
      aliases,
      sets: {
        mdi,
      },
    },
    components: { ...components, VDataIterator },
    directives,
    theme: {
      defaultTheme: "darkBlue",
      themes: {
        darkBlue
      }
    },
  })

  nuxtApp.vueApp.use(vuetify)
})
