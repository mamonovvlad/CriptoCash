<template>
  <div class="df align-items-center justify-content-center flex-direction-column">
    <h2>Выплаты</h2>
    <form action class="df flex-direction-column align-items-center form-ent">
      <input id="name" type="text" placeholder="Имя" />
      <input id="email-log" type="text" placeholder="Email" />
      <input type="number" placeholder="Номер счета" />
      <button>Отправить</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'payments',
  metaInfo: {
    title: 'Выплаты'
  },
  data: () => ({
  })
}
</script>
