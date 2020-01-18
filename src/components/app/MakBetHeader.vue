<template>
  <div class="makeBet-header">
    <p class="makeBet-header-title">Сделать ставку</p>
    <div class="makeBet-header-box df align-items-center justify-content-between">
      <form class="df align-items-center" action>
        <input type="text" placeholder="Выберите валюту" />
        <div class="amount-block df align-items-center">
          <input class="form-amount" type="number" placeholder="Сумма" />
          <img src="src/img/games/Iconcion.svg" alt />
          <p>200</p>
        </div>
        <button class="makeBet-btn">Сделать ставку</button>
      </form>
      <div class="totalRate">
        <p>Ваша общая ставка:</p>
        <div class="totalRate-block df align-items-center justify-content-flex-end">
          <p>2 400</p>
          <img src="src/img/games/coin-stack.svg" alt />
        </div>
      </div>
    </div>
  </div>
</template>
