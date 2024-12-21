<template>
  <div class="block-cube">
    <UIStripe :count="4" color="white" :extension="true" :height="2" />
    <div class="block-cube__img">
      <img class="block-cube__img-box" src="@/assets/img/start/rectangle.svg" />
    </div>
    <UIStripe :count="4" color="white" :extension="true" :height="2" :k="-3" />
  </div>
</template>

<script>
import UIStripe from '@/components/ui/stripe/stripe.vue'
export default {
  name: 'BlockCube',

  components: {
    UIStripe,
  },
}
</script>

<style lang="scss">
.block-cube {
  display: flex;
  flex-direction: column;
  justify-content: center;

  &__img {
    margin: 3px 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background: white;
    height: 420px;
    align-items: center;
    position: relative;

    &-box {
      z-index: 2;
      width: 400px;
      animation: rotate 90s linear infinite;
    }
  }
}
</style>
