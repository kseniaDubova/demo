<template>
  <div class="home-content">
    <BlockStart class="home-content__start"/>
    <div class="t">jghihigiugiugffvvfvyftyfyy</div>
  </div>
</template>

<script>
import BlockStart from '@/components/block/start/start.vue';

export default {
    name: "HomeContent",

    components: {
        BlockStart,
    }

}
</script>

<style lang="scss">
.home-content {
  height: 100%;
  &__start {
    height: 900px;
  }
}
.t {
  color: aliceblue;
}
</style>