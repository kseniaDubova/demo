<template>
  <div class="block-start">
    <BlockStartText />
    <div class="block-start__images">
      <UIStripe
        class="block-start__images-long"
        color="white"
        :rotate="-20"
        :margin="15"
        width="110"
        :height="3"
        :count="5"
      />
      <!-- <img class="block-start__images-long" src="@/assets/img/start/long-line.svg"> -->
      <img
        class="block-start__images-start box"
        src="@/assets/img/start/rectangle.svg"
      />
      <img
        class="block-start__images-shadow"
        src="@/assets/img/start/rectangle.svg"
      />
      <UIStripe
        class="block-start__images-short"
        color="white"
        :rotate="20"
        :margin="15"
        width="110"
        :height="3"
        :count="7"
      />
      <!-- <img class="block-start__images-short" src="@/assets/img/start/short-line.svg">-->
    </div>
  </div>
</template>

<script>
import BlockStartText from '@/components/block/start/text.vue'
import UIStripe from '@/components/ui/stripe/stripe.vue'

export default {
  name: 'BlockStart',

  components: {
    BlockStartText,
    UIStripe,
  },
}
</script>

<style lang="scss">
@keyframes rotate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.block-start {
  position: relative;

  &__images {
    position: relative;
    width: 100%;
    height: 0;

    &-long {
      position: absolute;
      width: 100%;
      top: 350px;
      left: 0;
    }

    &-start {
      width: 450px;
      z-index: 10;
      position: absolute;
      top: 250px;
      left: 1100px;
    }

    &-shadow {
      width: 450px;
      z-index: 9;
      position: absolute;
      top: 250px;
      left: 1100px;
      box-shadow: 0px 0px 200px 30px rgba(255, 255, 255, 0.8);
      border-radius: 100%;
    }

    &-short {
      z-index: 11;
      width: 500px;
      position: absolute;
      top: 600px;
      left: 1170px;
    }
  }

  .box {
    animation: rotate 90s linear infinite;
  }
}

@media screen and (max-width: 1600px) {
  .block-start {
    &__images {
      &-long {
        top: 300px;
        left: 0;
      }
      &-start {
        width: 400px;
        top: 180px;
        left: 800px;
      }
      &-shadow {
        width: 400px;
        top: 180px;
        left: 800px;
      }
      &-short {
        width: 500px;
        top: 600px;
        left: 800px;
      }
    }
  }
}
@media screen and (max-width: 760px) {
  .block-start {
    &__images {
      &-start,
      &-shadow,
      &-short {
        display: none;
      }
    }
  }
}
</style>
