<template>
  <div class="footer-layouts">
    <div class="footer-layouts__tg">
      <a class="footer-layouts__tg-button" :href="'https://t.me/itvibebot'">
        <div class="footer-layouts__tg-button__label">telegram bot</div>
        <img
          class="footer-layouts__tg-button__img"
          src="@/assets/img/start/chevrons-right.svg"
        />
      </a>
    </div>

    <div class="footer-layouts__info">
      <UILogo
        class="footer-layouts-info__logo"
        :logo="require('@/assets/img/IT VIBE.svg')"
        :height="40"
      />
      <UILogotypes :items="getLogotypes()" />
    </div>
  </div>
</template>

<script>
import UILogo from '@/components/ui/logo/logo.vue'
import UILogotypes from '@/components/ui/logotypes/logotypes.vue'

export default {
  name: 'FooterLayouts',

  components: {
    UILogo,
    UILogotypes,
  },

  methods: {
    getLogotypes() {
      return [
        {
          id: 0,
          img: require('@/assets/img/footer/email.svg'),
          link: 'letsgo@itvibe.ru',
        },
        {
          id: 2,
          img: require('@/assets/img/footer/telegram.svg'),
          link: 'https://t.me/itvibenews',
        },
        {
          id: 3,
          img: require('@/assets/img/footer/phone.svg'),
          link: '+79178260988',
        },
      ]
    },
  },
}
</script>

<style lang="scss">
.footer-layouts {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  gap: 50px;

  &__tg {
    width: 100%;
    display: flex;
    justify-content: flex-end;

    &-button {
      text-decoration: none;
      display: flex;
      justify-content: center;
      background: black;
      border: 1px solid white;
      border-right: none;
      border-radius: 120px 0 0 120px;
      width: 500px;
      height: 100px;
      transition: transform 1s ease;
      box-shadow: 0px 0px 20px 4px rgba(255, 255, 255, 1);

      &__label {
        display: flex;
        align-items: center;
        line-height: 100%;
        color: white;
        font-size: 26px;
        text-transform: uppercase;
        font-family: 'Montserrat-Light';
      }

      &__img {
        transition: transform 1s ease;
      }

      &:hover {
        transform: scale(1.1);

        .footer-layouts__tg-button__img {
          transform: translateX(60%);
        }
      }
    }
  }

  &__info {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0 5%;
  }
}

@media screen and (max-width: 760px) {
  .footer-layouts__tg-button {
    border-radius: 0;
    top: 400px;
    width: 100%;
    height: 95px;
    border-left: none;

    &__img {
      display: none;
    }
  }
}
</style>
