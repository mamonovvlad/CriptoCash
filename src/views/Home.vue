<template>
  <div class="timer df align-items-center justify-content-center flex-direction-column">
    <div class="timer-animate">
      <div class="animate-dashed"></div>
      <div class="timer-number df align-items-center justify-content-center flex-direction-column">
        <p class="timer-number-title">{{ currentTime }}</p>
        <p>до начала игры</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'home',
  metaInfo: {
    title: 'Cripto Cash'
  },
  data: function () {
    return {
      currentTime: 300,
      timer: null
    }
  },
  mounted () {
    this.startTimer()
  },
  destroyed () {
    this.stopTimer()
  },
  methods: {
    startTimer () {
      this.timer = setInterval(() => {
        this.currentTime--
      }, 1000)
    },
    stopTimer () {
      clearTimeout(this.timer)
    }
  },
  watch: {
    currentTime (time) {
      if (time === 0) {
        this.stopTimer()
        this.$router.push('/Results')
      }
    }
  }
}
</script>
