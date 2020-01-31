<template>
  <div class="popup-content df align-items-center justify-content-center flex-direction-column">
    <h2>Регистрация</h2>
    <form
      action
      class="df flex-direction-column align-items-center form-ent"
      @submit.prevent="submitHandler"
    >
      <input
        id="name"
        type="text"
        placeholder="Имя"
        v-model.trim="name"
        :class="{invalid: $v.name.$dirty && !$v.name.required}"
      />
      <p class="small-pupap" v-if="$v.name.$dirty && !$v.name.required">Введите Имя</p>
      <input
        id="email-log"
        type="text"
        placeholder="Email"
        v-model.trim="email"
        :class="{invalid: ($v.email.$dirty && !$v.email.required) || ($v.email.$dirty && !$v.email.email)}"
      />
      <p class="small-pupap" v-if="$v.email.$dirty && !$v.email.email">Введите корректный Email</p>
      <p
        class="small-pupap"
        v-else-if="$v.email.$dirty && !$v.email.required"
      >Поле Email не должно быть пустым</p>
      <input
        type="password"
        placeholder=" Пароль"
        v-model.trim="password"
        :class="{invalid: ($v.password.$dirty && !$v.password.required) || ($v.email.$dirty && !$v.password.minLength)}"
      />
      <p class="small-pupap" v-if="$v.password.$dirty && !$v.password.required">Введите пароль</p>
      <p
        class="small-pupap"
        v-else-if="$v.email.$dirty && !$v.password.minLength"
      >Пароль слижком короткий</p>
      <button>Регистрация</button>
      <!-- <p>Через <a href="#">вконтакте</a></p> -->
      <!-- <div class="popup-content-icon df">
              <a href="#" class="icon-vkontakte"></a>
              <a href="#" class="icon-facebook"></a>
              <a href="#" class="icon-google"></a>
              <a href="#" class="icon-steam"></a>
      </div>-->
    </form>
    <div class="close" @click.prevent="close">
      <img src="../../public/img/popup/close.svg" alt />
    </div>
  </div>
</template>

<script>
import { email, required, minLength } from 'vuelidate/lib/validators'

export default {
  name: 'register',
  metaInfo: {
    title: 'Регистрация'
  },
  data: () => ({
    email: '',
    password: '',
    name: ''
  }),
  validations: {
    email: { email, required },
    password: { required, minLength: minLength(6) },
    name: { required }
  },
  methods: {
    close () {
      this.$router.push('/')
    },
    async submitHandler () {
      if (this.$v.$invalid) {
        this.$v.$touch()
        return
      }
      const formData = {
        email: this.email,
        password: this.password,
        name: this.name
      }
      try {
        await this.$store.dispatch('reg', formData)
        this.$router.push('/')
      } catch (e) {}
    }
  }
}
</script>
