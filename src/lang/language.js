import { createI18n } from 'vue-i18n/dist/vue-i18n.cjs.js'

const i18 = new createI18n({
  locale: 'zh',
  messages: {
    en: {

      hello: 'hello world'

    },
    zh: {

      hello: 'こんにちは、世界'

    }
  },
  fallbackLocale: 'zh',
  globalInjection: true,
  silentFallbackWarn: true,
  legacy: false, // you must specify 'legacy: false' option
  $t (key) {
    return this.messages[this.locale.value][key]
  }
})

export default i18
