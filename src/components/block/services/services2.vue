<template>
  <div class="block-services-2">
    <UIStripe :count="5" :margin="7" :height="3" />
    <h3
      class="block-services-2__label"
      data-aos="fade"
      data-aos-offset="-200"
      data-aos-delay="0"
      data-aos-duration="1500"
      data-aos-easing="ease-in"
      data-aos-once="true"
    >
      {{ label }}
    </h3>
    <UIStripe :count="5" :margin="7" :height="3" />
    <div class="block-services-2__options">
      <div
        class="block-services-2__options-item"
        v-for="option in options"
        :key="option.id"
      >
        <img :src="option.img" />
        <h4>{{ option.label }}</h4>
        <p>{{ option.text }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import UIStripe from '@/components/ui/stripe/stripe.vue'
export default {
  name: 'BlockServices2',
  props: {
    options: {
      type: Array,
    },
    label: {
      type: String,
      default: 'Что мы можем?',
    },
  },
  components: {
    UIStripe,
  },
}
</script>

<style lang="scss">
.block-services-2 {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 1%;
  padding-top: 5%;
  padding-bottom: 300px;

  &__label {
    color: white;
    font-size: 96px;
    text-align: center;
    font-family: 'Montserrat-ExtraBold';
    margin: 0;
  }

  &__options {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 40px;

    &-item {
      padding: 20% 0;
      color: white;
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;

      &:nth-child(even) {
        transform: translateY(50%);
      }

      &:hover {
        h4,
        img,
        p {
          transform: scale(1.1);
        }
      }

      img {
        width: 250px;
        margin-bottom: 70px;
        transition: all 1s ease;
      }

      h4 {
        margin: 5px 0;
        line-height: 44px;
        color: white;
        font-size: 32px;
        text-align: center;
        font-family: 'Montserrat-SemiBold';
        text-decoration: none;
        transition: all 1s ease;
      }

      p {
        line-height: 35px;
        color: white;
        font-size: 20px;
        text-align: center;
        font-family: 'Montserrat-Light';
        text-decoration: none;
        padding: 0 10%;
        transition: all 1s ease;
      }
    }
  }
}
@media screen and (max-width: 760px) {
  .block-services-2 {
    padding: 60px 3%;

    &__label {
      font-size: 32px;
      text-transform: uppercase;
    }

    &__options {
      grid-template-columns: repeat(1, 1fr);
      gap: 10px;

      &-item {
        padding: 20% 0;

        &:nth-child(even) {
          transform: translateY(0%);
        }

        img {
          max-width: 100%;
          margin-bottom: 40px;
        }

        h4 {
          line-height: 35px;
          font-size: 30px;
        }

        p {
          line-height: 30px;
          font-size: 20px;
        }
      }
    }
  }
}
</style>
