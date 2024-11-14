<template>
  <div class="error-page">
    <h3 class="error-page__404">404</h3>
    <p class="error-page__text">Страница не найдена</p>
  </div>
</template>

<script>
export default {
  name: 'ErrorPage',
}
</script>

<style lang="scss">
.error-page {
  display: flex;
  justify-content: center;
  flex-direction: column;
  height: 100vh;
  align-items: center;
  padding: 10%;

  &__404 {
    line-height: 100%;
    color: white;
    font-size: 100px;
    text-transform: uppercase;
    font-family: 'Montserrat-Bold';
  }

  &__text {
    line-height: 100%;
    color: white;
    font-size: 25px;
    text-transform: uppercase;
    font-family: 'Montserrat-Medium';
    text-align: center;
  }
}
</style>
