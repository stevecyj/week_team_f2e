// 匯入 vee-validate 主套件
import * as veeValidate from 'vee-validate'
// 匯入 vee-validate 相關規則
import AllRules from '@vee-validate/rules'
// 匯入多國語系的功能
import { localize, setLocale } from '@vee-validate/i18n'
// 匯入繁體中文語系檔案
import zhTW from '@vee-validate/i18n/dist/locale/zh_TW.json'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 定義驗證規則
Object.keys(AllRules).forEach((rule) => {
  veeValidate.defineRule(rule, AllRules[rule])
})
// 設定 vee-validate 全域規則
veeValidate.configure({
  generateMessage: localize({ zh_TW: zhTW }),
  validateOnInput: true // 調整為輸入字元立即進行驗證
})
// 設定預設語系
setLocale('zh_TW')

const app = createApp(App)
app.use(store)
app.use(router)

app.component('VForm', veeValidate.Form)
app.component('VField', veeValidate.Field)
app.component('ErrorMessage', veeValidate.ErrorMessage)

app.mount('#app')
