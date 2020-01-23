<template>
  <header class="header" id="header">
    <div class="header-content df align-items-center justify-content-between">
      <div class="header-content__logo">
        <img src="img/Header/Logo.svg" alt />
      </div>
      <nav class="header-content__nav">
        <router-link
          class
          v-for="link in links"
          :key="link.url"
          active-class="active"
          :to="link.url"
          :exact="link.exact"
        >{{ link.title }}</router-link>
      </nav>
      <div class="header-content__course df">
        <div class="header-content__course__box">
          <p>Курс :</p>
        </div>
        <div class="header-content__course__currency df">
          <div class="header-content__course__currency__block df align-items-center">
            <p>btc: 10,320.72</p>
            <img src="img/Header/arrowTop.svg" alt />
          </div>
          <div class="header-content__course__currency__block df align-items-center">
            <p>eth: 194.00</p>
            <img src="img/Header/arrowBottom.svg" alt />
          </div>
          <div class="header-content__course__currency__block df align-items-center">
            <p>XRP: 0.26085</p>
            <img src="img/Header/arrowTop.svg" alt />
          </div>
          <div class="header-content__course__currency__block df align-items-center">
            <p>LTC: 70.41</p>
            <img src="img/Header/arrowTop.svg" alt />
          </div>
          <div class="header-content__course__currency__block df align-items-center">
            <p>bth: 302.30</p>
            <img src="img/Header/arrowBottom.svg" alt />
          </div>
          <div class="header-content__course__currency__block df align-items-center">
            <p>ada: 20.50,9</p>
          </div>
          <div class="header-content__course__currency__block df align-items-center">
            <p>qtum: 2</p>
          </div>
        </div>
      </div>
      <!--User,entrance-->
      <div class="dn header-content__user df align-items-center">
        <div class="header-content__user-title">
          <p>Максим Бочков</p>
        </div>
        <div class="header-content__user-img">
          <p>
            <img src="img/raffle/three.svg" alt />
          </p>
        </div>
      </div>
      <div class="header-content__button df">
        <button class="header-regist" @click.prevent="regist">Регистрация</button>
        <button @click.prevent="logout">Вход</button>
      </div>
      <!--User,entrance-->
    </div>
    <div class="header-content-mobile">
      <div class="header-content-mobile-content df align-items-center justify-content-between">
        <div class="burger" v-on:click="menuMob = !menuMob">
          <svg
            class="ham hamRotate ham1"
            viewBox="0 0 100 100"
            width="50"
            onclick="this.classList.toggle('active')"
          >
            <path
              class="line top"
              d="m 30,33 h 40 c 0,0 9.044436,-0.654587 9.044436,-8.508902 0,-7.854315 -8.024349,-11.958003 -14.89975,-10.85914 -6.875401,1.098863 -13.637059,4.171617 -13.637059,16.368042 v 40"
            />
            <path class="line middle" d="m 30,50 h 40" />
            <path
              class="line bottom"
              d="m 30,67 h 40 c 12.796276,0 15.357889,-11.717785 15.357889,-26.851538 0,-15.133752 -4.786586,-27.274118 -16.667516,-27.274118 -11.88093,0 -18.499247,6.994427 -18.435284,17.125656 l 0.252538,40"
            />
          </svg>
        </div>
        <div class="header-content__logo">
          <img src="img/Header/Logo.svg" alt />
        </div>
        <nav class="header-content__nav">
          <router-link
            class
            v-for="link in links"
            :key="link.url"
            active-class="active"
            :to="link.url"
            :exact="link.exact"
          >{{ link.title }}</router-link>
        </nav>
        <!--User,entrance-->
        <div class="dn header-content__user df align-items-center">
          <div class="header-content__user-title">
            <p>Максим Бочков</p>
          </div>
          <div class="header-content__user-img">
            <p>
              <img src="img/raffle/three.svg" alt />
            </p>
          </div>
        </div>
        <div class="header-content__button">
          <button class="header-regist" @click.prevent="regist">Регистрация</button>
          <button @click.prevent="logout">Вход</button>
        </div>
        <!--User,entrance-->
        <div class="burger-menu" v-bind:class="{menuMobActive: menuMob}">
          <nav class="header-content__nav mob-content__nav">
            <router-link
              class
              v-for="link in links"
              :key="link.url"
              active-class="active"
              :to="link.url"
              :exact="link.exact"
            >{{ link.title }}</router-link>
          </nav>
          <div class="course df justify-content-center">
            <div class="header-content__course__box">
              <p>Курс :</p>
            </div>
            <div class="header-content__course__currency df">
              <div class="header-content__course__currency__block df align-items-center">
                <p>btc: 10,320.72</p>
                <img src="img/Header/arrowTop.svg" alt />
              </div>
              <div class="header-content__course__currency__block df align-items-center">
                <p>eth: 194.00</p>
                <img src="img/Header/arrowBottom.svg" alt />
              </div>
              <div class="header-content__course__currency__block df align-items-center">
                <p>XRP: 0.26085</p>
                <img src="img/Header/arrowTop.svg" alt />
              </div>
              <div class="header-content__course__currency__block df align-items-center">
                <p>LTC: 70.41</p>
                <img src="img/Header/arrowTop.svg" alt />
              </div>
              <div class="header-content__course__currency__block df align-items-center">
                <p>bth: 302.30</p>
                <img src="img/Header/arrowBottom.svg" alt />
              </div>
              <div class="header-content__course__currency__block df align-items-center">
                <p>ada: 20.50,9</p>
              </div>
              <div class="header-content__course__currency__block df align-items-center">
                <p>qtum: 2</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  data: () => ({
    menuMob: false,
    links: [
      { title: 'Главная', url: '/', exact: true },
      { title: 'Выплаты', url: '/payments' }
    ]
  }),
  methods: {
    regist () {
      this.$router.push('/Registration')
    },
    showModal: function () {},
    async logout () {
      await this.$store.dispatch('logout')
      this.$router.push('/Login')
    }
  }
}
</script>
