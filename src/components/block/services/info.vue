<template>
  <div class="block-services-info">
    <h2
      data-aos="slide-left"
      data-aos-offset="-500"
      data-aos-delay="0"
      data-aos-duration="2000"
      data-aos-easing="ease-in"
      data-aos-once="true"
      class="block-services-info__label"
    >
      {{ label }}
    </h2>

    <!-- <router-link :style="{ textDecoration: 'none' }" :to="options.link"> -->
      <div class="block-services-info__cells">
        <div
          class="block-services-info__cell"
          data-aos="fade"
          data-aos-offset="-200"
          data-aos-delay="0"
          data-aos-duration="1500"
          data-aos-easing="ease-in"
          data-aos-once="true"
          v-for="cell in options"
          :key="cell.id"
        >
          <UIWhiteCard
            :img="cell.img"
            :text="cell.text"
            :label="cell.label"
            :link="cell.link"
          />
        </div>
      </div>
    <!-- </router-link> -->
  </div>
</template>

<script>
import UIWhiteCard from '@/components/ui/card/whiteCard.vue'
export default {
  name: 'BlockServicesInfo',

  components: {
    UIWhiteCard,
  },

  props: {
    options: {
      type: Array,
    },
    label: {
      type: String,
      default: 'Что мы можем?',
    },
  },
}
</script>

<style lang="scss">
.block-services-info {
  background: white;
  height: 1500px;

  &__label {
    color: black;
    font-size: 96px;
    text-align: right;
    font-family: 'Montserrat-ExtraBold';
    padding-right: 3%;
    margin: 0;
    padding-top: 3%;
  }

  &__cells {
    height: auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 5%;
    gap: 5%;
    text-decoration: none;
  }
}
@media screen and (max-width: 760px) {
  .block-services-info {
    height: 2900px;

    &__label {
      font-size: 60px;
      text-align: center;
      padding-top: 10%;
    }

    &__cells {
      height: auto;
      grid-template-columns: 1fr;
      gap: 2%;
    }
  }
}
</style>
