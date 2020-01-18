<template>
  <div class="left-sidebar-mob" v-bind:class="activeLeftSidebarMob">
    <perfect-scrollbar>
      <div class="left-sidebar__box">
        <div class="menu-icon" v-on:click="leftSidebarMobActiveBlock = !leftSidebarMobActiveBlock">
          <svg
            class="ham hamRotate ham1"
            viewBox="0 0 100 100"
            width="55"
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
        <!--Sound-->
        <div class="left-sidebar__sound">
          <img src="src/img/leftSidebar/sound.svg" alt />
        </div>
        <!--End Sound-->
        <!--Games-->
        <div class="left-sidebar__games">
          <p class="left-sidebar__games__title">игры</p>
          <nav>
            <div class="left-sidebar__games__block df align-items-center flex-direction-column">
              <img class="height-img" src="src/img/leftSidebar/JACKPOT.svg" alt />
              <div class="left-sidebar__games__block__descr df align-items-center">
                <img src="src/img/leftSidebar/stokeOr.svg" alt />
                <p>1200</p>
              </div>
            </div>
            <div class="left-sidebar__games__block df align-items-center flex-direction-column">
              <img class="height-img" src="src/img/leftSidebar/VS.svg" alt />
              <div class="left-sidebar__games__block__descr df align-items-center">
                <img src="src/img/leftSidebar/stokeOr.svg" alt />
                <p>0</p>
              </div>
            </div>
            <div class="left-sidebar__games__block df align-items-center flex-direction-column">
              <img class="height-img" src="src/img/leftSidebar/Icon.svg" alt />
              <div class="left-sidebar__games__block__descr df align-items-center">
                <img src="src/img/leftSidebar/stokeOr.svg" alt />
                <p>300</p>
              </div>
            </div>
          </nav>
        </div>
        <!--End Games-->
        <!--Bonus-->
        <div class="left-sidebar__bonus">
          <nav>
            <div class="left-sidebar__bonus__block df align-items-center flex-direction-column">
              <img class="height-img" src="src/img/leftSidebar/Union.svg" alt />
              <div class="left-sidebar__bonus__block__descr df align-items-center">
                <p>Раздачи</p>
              </div>
            </div>
            <div class="left-sidebar__bonus__block df align-items-center flex-direction-column">
              <img class="height-img" src="src/img/leftSidebar/bonus.svg" alt />
              <div class="left-sidebar__bonus__block__descr df align-items-center">
                <p>Бонусы</p>
              </div>
            </div>
            <div class="left-sidebar__bonus__block df align-items-center flex-direction-column">
              <img class="height-img" src="src/img/leftSidebar/Referal.svg" alt />
              <div class="left-sidebar__bonus__block__descr df align-items-center">
                <p>Реферал</p>
              </div>
            </div>
          </nav>
        </div>
        <!--End Bonus-->
        <!--Info-->
        <div class="left-sidebar__info">
          <nav>
            <div class="left-sidebar__info__block df align-items-center flex-direction-column">
              <img class="height-img" src="src/img/leftSidebar/Rools.svg" alt />
              <div class="left-sidebar__info__block__descr df align-items-center">
                <p>Правила</p>
              </div>
            </div>
            <div class="left-sidebar__info__block df align-items-center flex-direction-column">
              <img class="height-img" src="src/img/leftSidebar/FAQ.svg" alt />
              <div class="left-sidebar__info__block__descr df align-items-center">
                <p>F.A.Q.</p>
              </div>
            </div>
            <div class="left-sidebar__info__block df align-items-center flex-direction-column">
              <img class="height-img" src="src/img/leftSidebar/Agreement.svg" alt />
              <div class="left-sidebar__info__block__descr df align-items-center">
                <p>Соглашение</p>
              </div>
            </div>
            <div class="left-sidebar__info__block df align-items-center flex-direction-column">
              <img class="height-img" src="src/img/leftSidebar/Support.svg" alt />
              <div class="left-sidebar__info__block__descr df align-items-center">
                <p>Поддержка</p>
              </div>
            </div>
          </nav>
        </div>
        <!--End Info-->
      </div>
    </perfect-scrollbar>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      leftSidebarMobActiveBlock: false
    }
  },
  computed: {
    activeLeftSidebarMob: function () {
      return {
        leftSidebarMobActiveBlock: this.leftSidebarMobActiveBlock
      }
    }
  }
}
</script>
