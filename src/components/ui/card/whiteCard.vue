<template>
  <div class="ui-white-card">
    <img class="ui-white-card__img" :src="img" alt="services" />
    <div class="ui-white-card__info">
      <h4 class="ui-white-card__info-label">{{ label }}</h4>
      <p class="ui-white-card__info-text">{{ text }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UIWhiteCard',

  props: {
    img: {
      type: String,
    },
    label: {
      type: String,
      default: '',
    },
    text: {
      type: String,
      default: '',
    },
    link: {
      type: String,
      default: '',
    },
  },
}
</script>

<style lang="scss">
.ui-white-card {
  position: relative;
  display: flex;
  background: white;
  border-radius: 50px;
  padding: 2% 5%;
  transition: all 1s ease;
  min-height: 300px;
  text-decoration: none;

  &__img {
    z-index: 6;
    width: 250px;
    position: absolute;
    padding-top: 3%;
  }

  &__info {
    z-index: 7;
    margin-left: 20%;

    &-label {
      line-height: 44px;
      color: #101214;
      font-size: 32px;
      text-align: center;
      font-family: 'Montserrat-SemiBold';
      text-decoration: none;
    }

    &-text {
      line-height: 35px;
      color: #101214;
      font-size: 20px;
      text-align: center;
      font-family: 'Montserrat-Medium';
      text-decoration: none;
    }
  }

  &:hover {
    box-shadow: 0px 0px 50px 20px rgba(0, 0, 0, 0.1);
  }
}

@media screen and (max-width: 1600px) {
  .ui-white-card {
    &__info {
      &-label {
        font-size: 31px;
      }

      &-text {
        font-size: 16px;
      }
    }
  }
}
@media screen and (max-width: 760px) {
  .ui-white-card {
    padding: 5% 7%;

    &__img {
      display: none;
    }

    &__info {
      margin-left: 0;

      &-label {
        line-height: 40px;
        font-size: 28px;
      }

      &-text {
        line-height: 30px;
        font-size: 16px;
      }
    }
  }
}
@media screen and (max-width: 400px) {
  .ui-white-card {
    padding: 0;

    &__info {
      &-label {
        line-height: 35px;
        font-size: 23px;
      }

      &-text {
        line-height: 25px;
        font-size: 15px;
      }
    }
  }
}
</style>
