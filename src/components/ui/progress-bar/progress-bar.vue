<template>
  <div class="ui-progress-bar">
    <div
      class="ui-progress-bar__bar"
      :style="{ width: `${(currentStep / totalSteps) * 100}%` }"
    ></div>
    <span class="ui-progress-bar__text"
      >Шаг {{ currentStep }} из {{ totalSteps }}</span
    >
  </div>
</template>

<script>
export default {
  name: 'UIProgressBar',
  props: {
    currentStep: {
      type: Number,
      required: true,
    },
    totalSteps: {
      type: Number,
      required: true,
    },
  },
}
</script>

<style lang="scss">
.ui-progress-bar {
  position: relative;
  height: 10px;
  background-color: rgb(226, 226, 226);
  margin-bottom: 20px;
  border-radius: 20px;
  width: 200px;

  &__bar {
    height: 100%;
    background-color: black;
    transition: width 0.3s ease;
    border-radius: 20px;
    margin-bottom: 10px;
  }

  &__text {
    text-decoration: none;
    color: black;
    font-size: 18px;
    font-family: 'Montserrat-Light';
  }
}
</style>
