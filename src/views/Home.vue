<template>
  <div>
    <div class="makeBet-header">
      <p class="makeBet-header-title">Сделать ставку</p>
      <div class="makeBet-header-box df align-items-center justify-content-between">
        <form class="df align-items-center" action>
          <input type="text" placeholder="Выберите валюту" />
          <div class="amount-block df align-items-center">
            <input class="form-amount" type="number" placeholder="Сумма" />
            <img src="img/games/Iconcion.svg" alt />
            <p>200</p>
          </div>
          <button class="makeBet-btn">Сделать ставку</button>
        </form>
        <div class="totalRate">
          <p>Ваша общая ставка:</p>
          <div class="totalRate-block df align-items-center justify-content-flex-end">
            <p>2 400</p>
            <img src="img/games/coin-stack.svg" alt />
          </div>
        </div>
      </div>
    </div>
    <div class="bank">
      <div class="bank-title">
        <p>банк</p>
      </div>
      <div class="bank-content df justify-content-between align-items-end">
        <div class="bank-content-currency df justify-content-between">
          <div class="bank-contennt-box">
            <div class="bank-content-currency-block df align-items-center">
              <img src="img/games/currency/BTC.svg" alt />
              <p>0,32484 ВTC</p>
            </div>
            <div class="bank-content-currency-block df align-items-center">
              <img src="img/games/currency/EPH.svg" alt />
              <p>2.043 EPH</p>
            </div>
            <div class="bank-content-currency-block df align-items-center">
              <img src="img/games/currency/RippleX.svg" alt />
              <p>2085.775 XRP</p>
            </div>
            <div class="bank-content-currency-block df align-items-center">
              <img src="img/games/currency/LTC.svg" alt />
              <p>7.4897 LTC</p>
            </div>
            <div class="bank-content-currency-block df align-items-center">
              <img src="img/games/currency/Throne.svg" alt />
              <p>4.0543 TRX</p>
            </div>
            <div class="bank-content-currency-block df align-items-center">
              <img src="img/games/currency/BTC Cash.svg" alt />
              <p>1.3563 BCH</p>
            </div>
          </div>
          <div class="generalbank align-self-flex-end">
            <p>Общий банк:</p>
          </div>
        </div>

        <div class="bank-content-commonBank df align-items-center flex-direction-column">
          <div class="bank-content-commonBank-text">
            <p>Всего в валюте:</p>
            <div class="commonBank-allcurrency df align-items-end flex-direction-column">
              <div class="commonBank-allcurrency-block df align-items-center">
                <img src="img/games/currency/USD.svg" alt />
                <p>534.47 USD</p>
              </div>
              <div class="commonBank-allcurrency-block df align-items-center">
                <img src="img/games/currency/Euro.svg" alt />
                <p>497.82 EUR</p>
              </div>
              <div class="commonBank-allcurrency-block df align-items-center">
                <img src="img/games/currency/Ruble.svg" alt />
                <p>34 211.04 RUB</p>
              </div>
              <div class="commonBank-allcurrency-block df align-items-center">
                <img src="img/games/currency/UAH.svg" alt />
                <p>13 868.71 UAH</p>
              </div>
            </div>
          </div>
          <a class="btn-bank df align-items-center justify-content-center" href="#">
            <img src="img/games/coin-stack-white.svg" alt />
            17 300
          </a>
        </div>
      </div>
    </div>
    <div class="timer df align-items-center justify-content-center flex-direction-column">
      <div class="timer-animate">
        <div class="animate-dashed"></div>
        <div
          class="timer-number df align-items-center justify-content-center flex-direction-column"
        >
          <p class="timer-number-title">{{ currentTime }}</p>
          <p>до начала игры</p>
        </div>
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
      currentTime: 10,
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
        this.$router.push('/Rafflr')
      }
    }
  }
}
</script>
