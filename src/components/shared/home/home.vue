<template>
  <div class="home-content">
    <BlockStart class="home-content__start"/>
    <BlockAbout />
    <!-- <div class="t">jghihigiugiugffvvfvyftyfyy</div> -->
  </div>
</template>

<script>
import BlockStart from '@/components/block/start/start.vue';
import BlockAbout from '@/components/block/about/about.vue';

export default {
    name: "HomeContent",

    components: {
        BlockStart,
        BlockAbout,
    }

}
</script>

<style lang="scss">
.home-content {
  height: 100%;
  //overflow-x: hidden;
  &__start {
    height: 900px;
    margin-bottom: 200px;
  }
}
@media screen and (max-width: 1600px) {
  .home-content {
    &__start {
      height: 850px;
      margin-bottom: 100px;
    }
  }
}
@media screen and (max-width: 760px) {
  .home-content {
    &__start {
      height: 800px;
      margin-bottom: 10px;
    }
  }
}
</style>