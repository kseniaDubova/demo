<template>
    <div class="block-start">
      <BlockStartText/>
      <div class="block-start__images">
          <img class="block-start__images-long" src="@/assets/img/start/long-line.svg">
          <img class="block-start__images-start box" src="@/assets/img/start/rectangle.svg">
          <img class="block-start__images-shadow" src="@/assets/img/start/rectangle.svg">
          <img class="block-start__images-short" src="@/assets/img/start/short-line.svg">        
      </div>
    </div>
</template>
  
<script>
import BlockStartText from '@/components/block/start/text.vue';

export default {
  name: "BlockStart",

  components: {
    BlockStartText,
  }
};

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
        top: 50px;
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
        width: 600px;
        position: absolute;
        top: 530px;
        left: 1000px;
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
        top: -130px;
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
        width: 600px;
        top: 450px;
        left: 700px;
      }
    }
  }
}
@media screen and (max-width: 760px) {
  .block-start {
    &__images {
      &-start, &-shadow, &-short{
        display: none;
      }
    }
  }
}
</style>