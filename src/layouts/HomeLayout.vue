<template>
  <div class="main-background">
    <!--Scroll-->
    <perfect-scrollbar>
      <div
        class="chat-icon"
        v-on:click="chatActiveBlock = !chatActiveBlock ,chatActive = !chatActive"
        v-bind:class="{chatActive: chatActive}"
      >
        <img src="../../public/img/chat/Chat.svg" alt />
      </div>

      <div
        class="bids-icon"
        v-on:click="bidsActiveBlock = !bidsActiveBlock ,bidsActive = !bidsActive"
        v-bind:class="{bidsActive: bidsActive}"
      >
        <img src="../../public/img/games/coin-stack.svg" alt />
      </div>
      <!--Header-->
      <Header />
      <!--End Header-->
      <!--Main content-->
      <div class="box-content df justify-content-between">
        <!--LeftSidebar-->
        <LeftSidebar />
        <!--End LeftSidebar-->
        <!--LeftSidebarMob-->
        <LeftSidebarMob />
        <!--End LeftSidebarMob-->
        <!--Bids-->
        <Bids v-bind:class="activeBlockBids" />
        <!--End Bids-->
        <!--Games-->
        <div class="games">
          <div class="games-header df justify-content-between align-items-center">
            <div class="games-header__text df align-items-center">
              <div class="games-header__title">
                <p>Jackpot</p>
              </div>
              <div class="games-header__point">
                <img src="src/img/games/ic.svg" alt />
              </div>
            </div>
          </div>
          <div class="games-header-mobile">
            <div class="games-header-mobile-content df justify-content-between align-items-center">
              <div class="games-header__text df align-items-center">
                <div class="games-header__title">
                  <p>Jackpot</p>
                </div>
                <div class="games-header__point">
                  <img src="src/img/games/ic.svg" alt />
                </div>
              </div>
              <div class="games-header__burger df">
                <div class="game-histoty df align-items-center">
                  <img src="src/img/games/left.svg" alt />
                  <p>История игр</p>

                </div>
                <div class="burger-games"></div>
              </div>
            </div>
          </div>
          <div class="games-box df justify-content-between">
            <!--makeBet-->
            <div class="makeBet df flex-direction-column">
              <!--MakBetHeader-->
              <MakBetHeader />
              <!--End MakBetHeader-->
              <!--Bank-->
              <Bank />
              <!--End Bank-->
              <router-view />
            </div>
            <!--End makeBet-->
          </div>
        </div>
        <!--End Games-->
        <!--Chat-->
        <Chat v-bind:class="activeBlockChat" />
        <!--End Chat-->
      </div>
      <!--End Main content-->
    </perfect-scrollbar>
    <!--End Scroll-->
  </div>
</template>

<script>
import { PerfectScrollbar } from 'vue2-perfect-scrollbar'
import Bank from '@/components/app/Bank'
import Bids from '@/components/app/Bids'
import Chat from '@/components/app/Chat'
import Header from '@/components/app/Header'
import LeftSidebarMob from '@/components/app/LeftSidebarMob'
import LeftSidebar from '@/components/app/LeftSidebar'
import MakBetHeader from '@/components/app/MakBetHeader'

export default {
  name: 'home-layout',
  data: function () {
    return {
      showModal: false,
      bidsActive: false,
      chatActive: false,
      bidsActiveBlock: false,
      chatActiveBlock: false
    }
  },
  components: {
    Bank,
    Bids,
    Chat,
    Header,
    LeftSidebarMob,
    LeftSidebar,
    MakBetHeader,
    PerfectScrollbar
  },
  computed: {
    activeBlockChat: function () {
      return {
        chatActiveBlock: this.chatActiveBlock
      }
    },
    activeBlockBids: function () {
      return {
        bidsActiveBlock: this.bidsActiveBlock
      }
    }
  }
}
</script>
