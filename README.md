# week_team_f2e

## Demo

[demo page](https://stevecyj.github.io/week_team_f2e/#/)

## Project setup

### 如果出現 install error

<details>
<summary>展開</summary>

```
npm ERR! code ERESOLVE
npm ERR! ERESOLVE unable to resolve dependency tree
npm ERR!
npm ERR! While resolving: week_team_f2e@0.1.0
npm ERR! Found: eslint-plugin-vue@8.7.1
npm ERR! node_modules/eslint-plugin-vue
npm ERR!   dev eslint-plugin-vue@"^8.0.3" from the root project
npm ERR!
npm ERR! Could not resolve dependency:
npm ERR! peer eslint-plugin-vue@"^7.0.0" from @vue/eslint-config-standard@6.1.0
npm ERR! node_modules/@vue/eslint-config-standard
npm ERR!   dev @vue/eslint-config-standard@"^6.1.0" from the root project
npm ERR!
npm ERR! Fix the upstream dependency conflict, or retry
npm ERR! this command with --force, or --legacy-peer-deps
npm ERR! to accept an incorrect (and potentially broken) dependency resolution.
npm ERR!
npm ERR! See /root/.npm/eresolve-report.txt for a full report.

npm ERR! A complete log of this run can be found in:
npm ERR!     /root/.npm/_logs/2022-05-16T08_34_22_603Z-debug-0.log
```

</details>

請改用

```
npm install --legacy-peer-deps
```

### normal install

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Lints and fixes files

```
npm run lint
```

### Customize configuration

## See [Configuration Reference](https://cli.vuejs.org/config/).

---

## vee-validate 表單驗證

VeeValiadation 分為 Cli 與 CDN 版本，本範例以 CDN 為主，觀念上兩者並無太大差異。

    - 文件：[https://vee-validate.logaretm.com/v4/guide/overview](https://vee-validate.logaretm.com/v4/guide/overview)

- CDN：
  - 主套件：https://cdnjs.cloudflare.com/ajax/libs/vee-validate/4.5.8/vee-validate.min.js
  - Rules：https://cdn.jsdelivr.net/npm/@vee-validate/rules@4.5.8/dist/vee-validate-rules.min.js
  - i18n：https://cdn.jsdelivr.net/npm/@vee-validate/i18n@4.5.8/dist/vee-validate-i18n.min.js

### 步驟 1：加入 VeeValidation 相關資源

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/vee-validate/4.5.8/vee-validate.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/@vee-validate/rules@4.5.8/dist/vee-validate-rules.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/@vee-validate/i18n@4.5.8/dist/vee-validate-i18n.min.js"></script>
```

### 步驟 2：註冊元件

註冊全域的表單驗證元件（VForm, VField, ErrorMessage）

```js
const app = Vue.createApp({
  // ...
})
app.component('VForm', VeeValidate.Form)
app.component('VField', VeeValidate.Field)
app.component('ErrorMessage', VeeValidate.ErrorMessage)

app.mount('#app')
```

### 步驟 3：定義規則

選擇加入特定規則，全規則可[參考](https://vee-validate.logaretm.com/v4/guide/global-validators#vee-validaterules)

```js
VeeValidate.defineRule('email', VeeValidateRules['email'])
VeeValidate.defineRule('required', VeeValidateRules['required'])
```

全部加入

```js
Object.keys(VeeValidateRules).forEach((rule) => {
  VeeValidate.defineRule(rule, VeeValidateRules[rule])
})
```

全部加入(CDN 版本)

```js
Object.keys(VeeValidateRules).forEach((rule) => {
  if (rule !== 'default') {
    VeeValidate.defineRule(rule, VeeValidateRules[rule])
  }
})
```

### 步驟 4：加入多國語系

將[外部資源](https://github.com/logaretm/vee-validate/blob/vee-validate%404.1.16/packages/i18n/src/locale/zh_TW.json)儲存至本地

```js
// 讀取外部的資源
VeeValidateI18n.loadLocaleFromURL('./zh_TW.json')

// Activate the locale
VeeValidate.configure({
  generateMessage: VeeValidateI18n.localize('zh_TW'),
  validateOnInput: true // 調整為：輸入文字時，就立即進行驗證
})
```

### 步驟 5：套用 `v-form` 並加入 v-slot

```htmlembedded=
<v-form v-slot="{ errors }" @submit="onSubmit" >
```

> 備註：v-slot 稱為插槽 Props，可以將驗證結果的回饋資料直接帶入於區塊中

### 步驟 6：套用 `v-field` 及 `error-message`

常用技巧：

- `name` 為必填，是錯誤驗證的回饋欄位，會與多個項目進行匹配（errors, errors-message...）
- 為 `v-field` 帶入全域設定的規則，可參考相關[文件](https://vee-validate.logaretm.com/v4/guide/global-validators#vee-validaterules)
- `as` 可以改變 v-field 的型態，如以下 `select` 範例
- `:class` 可運用 v-form 帶入的驗證錯誤作為判斷

```htmlembedded=
<v-field
  id="email"
  name="email"
  type="email"
  class="form-control"
  :class="{ 'is-invalid': errors['email'] }"
  placeholder="請輸入 Email" rules="email|required"
  v-model="user.email"
></v-field>
<error-message name="email" class="invalid-feedback"></error-message>
```

Select 範例

```htmlembedded=
<v-field
  id="name"
  name="地區"
  class="form-control"
  :class="{ 'is-invalid': errors['地區'] }"
  placeholder="請輸入地區"
  rules="required"
  v-model="user.region"
  as="select"
>
  <option value="">請選擇地區</option>
  <option value="台北市">台北市</option>
  <option value="高雄市">高雄市</option>
</v-field>
```

### 步驟 7：加入自訂驗證、送出表單等行為...

範例：自訂驗證

`rules` 中可自訂函式來驗證結果
使用 v-bind 綁定 `:rules="isPhone"`

```htmlembedded=
<div class="mb-3">
  <label for="phone" class="form-label">電話</label>
  <v-field
    id="phone"
    name="電話"
    type="text"
    class="form-control"
    :class="{ 'is-invalid': errors['電話'] }"
    placeholder="請輸入電話"
    :rules="isPhone"
    v-model="user.phone"
  ></v-field>
  <error-message name="電話" class="invalid-feedback"></error-message>
</div>
```

```js
methods: {
  isPhone(value) {
    const phoneNumber = /^(09)[0-9]{8}$/
    return phoneNumber.test(value) ? true : '需要正確的電話號碼'
  }
}
```

範例：送出表單

```htmlembedded=
<v-form v-slot="{ errors }" @submit="onSubmit" >
    ...
    <button class="btn btn-primary" type="submit">Submit</button>
</v-form>
```

```js
methods: {
  onSubmit() {
    // ...
  },
},
```
