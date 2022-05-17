<template>
  <div class="container">

    <h3>範例：載入 VeeValidate 驗證套件</h3>
    <v-form
      v-slot="{errors}"
      @submit="onSubmit"
    >
      {{ errors }}
      <div class="
      mb-3">
        <label
          for="email"
          class="form-label"
        >Email</label>
        <v-field
          id="email"
          v-model="user.email"
          name="email"
          type="email"
          class="form-control"
          placeholder="請輸入 Email"
          rules="email|required"
          :class="{ 'is-invalid': errors['email'] }"
        ></v-field>
        <error-message
          name="email"
          class="invalid-feedback"
        ></error-message>
      </div>

      <div class="mb-3">
        <label
          for="name"
          class="form-label"
        >姓名</label>
        <v-field
          id="name"
          name="姓名"
          type="text"
          class="form-control"
          placeholder="請輸入姓名"
        ></v-field>
        <span class="invalid-feedback"></span>
      </div>

      <div class="mb-3">
        <label
          for="phone"
          class="form-label"
        >電話</label>
        <v-field
          id="phone"
          v-model="user.phone"
          name="電話"
          type="text"
          class="form-control"
          placeholder="請輸入電話"
          :rules="isPhone"
          :class="{ 'is-invalid': errors['電話'] }"
        ></v-field>
        <error-message
          name="電話"
          class="invalid-feedback"
        ></error-message>
      </div>

      <div class="mb-3">
        <label
          for="region"
          class="form-label"
        >地區</label>
        <select
          id="region"
          name="地區"
          class="form-control"
        >
          <option value="">請選擇地區</option>
          <option value="台北市">台北市</option>
          <option value="高雄市">高雄市</option>
        </select>
        <span class="invalid-feedback"></span>
      </div>

      <div class="mb-3">
        <label
          for="address"
          class="form-label"
        >地址</label>
        <v-field
          id="address"
          name="地址"
          type="text"
          class="form-control"
          placeholder="請輸入地址"
        ></v-field>
        <span class="invalid-feedback"></span>
      </div>

      <button
        class="btn btn-primary"
        type="submit"
      >Submit</button>
    </v-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        email: '',
        name: '',
        address: '',
        phone: ''
      }
    }
  },
  methods: {
    onSubmit(value) {
      console.log(this.user)
    },
    isRequired(value) {
      if (!value) {
        return '必填'
      }
      return true
    },
    isPhone(value) {
      const phoneNumber = /^(09)[0-9]{8}$/
      return phoneNumber.test(value) ? true : '需要正確的手機號碼'
    }
  },
  created() {
    console.log(this)
  }
}
</script>
