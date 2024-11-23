<template>
  <div class="block-constructor">
    <UICard :padding="5" :borderRadius="20" :flexDirection="column">
      <div class="block-constructor__form">
        <div class="block-constructor__form-bar">
          <img
            class="block-constructor__form-bar__img"
            src="@/assets/img/start/chevrons-right black.svg"
            @click="goToPreviousStep"
          />
          <UIProgressBar :currentStep="currentStep" :totalSteps="totalSteps" />
        </div>

        <KeepAlive>
          <component :is="currentStepComponent" @option="goToNextStep" />
        </KeepAlive>
      </div>
    </UICard>
  </div>
</template>

<script>
import UICard from '@/components/ui/card/card.vue'
import UIProgressBar from '@/components/ui/progress-bar/progress-bar.vue'
import { Step1, Step2, Step3, Step4 } from '@/components/shared/services/steps'

export default {
  name: 'BlockConstructor',

  components: {
    UICard,
    UIProgressBar,
    Step1,
    Step2,
    Step3,
    Step4,
  },

  data() {
    return {
      currentStep: 1,
      totalSteps: 4,
      sendForm: false,
    }
  },

  computed: {
    currentStepComponent() {
      const steps = [Step1, Step2, Step3, Step4]
      return steps[this.currentStep - 1]
    },
  },

  methods: {
    goToNextStep() {
      this.currentStep < this.totalSteps ? this.currentStep++ : null
    },
    goToPreviousStep() {
      this.currentStep > 1 ? this.currentStep-- : null
    },
    submitForm() {
      alert('Форма отправлена!')
    },
  },
}
</script>

<style lang="scss">
.block-constructor {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 10%;

  &__form {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    &-bar {
      display: flex;
      flex-direction: row;
      gap: 20px;

      &__img {
        width: 30px;
        transform: rotate(180deg);
      }
    }
  }

  &__steps {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin-bottom: 10px;
  }

  &__bt {
    text-decoration: none;
    color: black;
    font-size: 18px;
    font-family: 'Montserrat-Light';

    background: white;
    height: 100px;
    border: none;
    border-top: 1px solid gray;
    border-bottom: 1px solid gray;
  }
}
</style>
