<template>
  <div class="ui-side-menu">
    <div class="ui-side-menu__group">
      <div class="ui-side-menu__close">
        <img
          class="ui-side-menu__close-img"
          @click="onClose"
          :src="img"
          alt="close"
        />
      </div>
      <div class="ui-side-menu__options">
        <div v-for="option in options" :key="option.id">
          <router-link
            class="ui-side-menu__options-link"
            :to="option.link"
            @click="onClose"
          >
            {{ option.label }}</router-link
          >
        </div>
      </div>
      <div class="ui-side-menu__contact">
        <div class="ui-side-menu__contact__tg">
          <a
            class="ui-side-menu__contact__tg-button"
            :href="'https://t.me/itvibebot'"
          >
            <div class="ui-side-menu__contact__tg-button__label">
              telegram bot
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UISideMenu',

  props: {
    options: {
      type: Array,
      default: null,

      // label: "",
      // id: 0,
      // link: "",
    },
    img: {
      type: String,
      default: '',
    },
  },

  methods: {
    onClose() {
      this.$emit('close', false)
    },
  },
}
</script>

<style lang="scss">
.ui-side-menu {
  z-index: 40;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  position: absolute;
  height: 100%;
  width: 100%;

  &__group {
    position: fixed;
    width: 70%;
    height: 100%;
    background: #fffefa;
    box-shadow: 4px 4px 500px 300px rgba(12, 15, 20, 0.2);
  }

  &__close {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;

    &-img {
      margin: 15px 30px;
      width: 40px;
    }
  }

  &__options {
    padding: 10% 20%;
    display: flex;
    flex-direction: column;
    gap: 60px;

    &-link {
      text-decoration: none;
      font-size: 25px;
      font-family: 'Montserrat-Medium';
      color: black;
      transition: color 0.5s ease;

      &:hover {
        color: rgba(12, 15, 20, 1);
      }
    }
  }

  &__contact {
    &__tg {
      width: 100%;
      display: flex;
      justify-content: flex-end;

      &-button {
        text-decoration: none;
        display: flex;
        justify-content: center;
        background: black;
        width: 500px;
        height: 100px;
        transition: transform 1s ease;

        &__label {
          display: flex;
          align-items: center;
          line-height: 100%;
          color: white;
          font-size: 26px;
          text-transform: uppercase;
          font-family: 'Montserrat-Bold';
        }
      }
    }
  }
}

@media screen and (max-height: 450px) {
  .ui-side-menu__group {
    width: 40%;
    border-radius: 0px 0px 0px 300px;
  }

  .ui-side-menu__options {
    padding: 0% 0% 0% 25%;
    gap: 20px;
    &-link {
      font-size: 20px;
    }
  }
}
</style>
