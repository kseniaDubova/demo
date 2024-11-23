<template>
  <div class="ui-list">
    <h3 class="ui-list__label" v-if="label">{{ label }}</h3>
    <div
      v-for="option in options"
      :key="option.id"
      :class="{
        'ui-list__option': active != option.id,
        'ui-list__option-active': active == option.id,
      }"
      @click="clickOption(option)"
    >
      <div class="ui-list__option-name">
        <img class="ui-list__option-name__img" :src="option.img" />
        <p class="ui-list__option-name__label">{{ option.label }}</p>
      </div>

      <img
        class="ui-list__option-img"
        src="@/assets/img/start/chevrons-right.svg"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'UIList',

  props: {
    options: {
      type: Array,
      //required: true,

      // {
      //   id: 0,
      //   label: 'Web-рарзработка',
      //   img: '',
      // },
    },
    label: {
      type: String,
      default: '',
    },
  },

  data() {
    return {
      active: Number,
    }
  },

  methods: {
    clickOption(option) {
      this.active = option.id
      console.log(option)
      this.$emit('option', option)
    },
  },
}
</script>

<style lang="scss">
.ui-list {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 2% 1%;

  &__label {
    margin: auto;
    text-transform: uppercase;
    margin-bottom: 40px;
    margin-top: 40px;
    text-decoration: none;
    font-size: 40px;
    font-family: 'Montserrat-Medium';
    color: black;
    text-align: center;
  }

  &__option {
    padding: 2% 4%;
    display: flex;
    flex-direction: row;
    border-bottom: 2px solid rgba(240, 240, 240, 1);
    justify-content: space-between;
    transition: border-color 0.3s ease;

    &:nth-child(even) {
      border-right: 2px solid rgba(240, 240, 240, 1);
      border-radius: 0 0 20px 0;

      &:hover {
        border-right: 2px solid black;
      }
    }

    &:nth-child(odd) {
      border-left: 2px solid rgba(240, 240, 240, 1);
      border-radius: 0 0 0 20px;

      &:hover {
        border-left: 2px solid black;
      }
    }

    &:hover {
      border-bottom: 2px solid black;
    }
  }

  &__option-active {
    padding: 2% 4%;
    display: flex;
    flex-direction: row;
    border-bottom: 2px solid black;
    justify-content: space-between;

    &:nth-child(even) {
      border-right: 2px solid black;
      border-radius: 0 0 20px 0;
    }

    &:nth-child(odd) {
      border-left: 2px solid black;
      border-radius: 0 0 0 20px;
    }
  }

  &__option-name {
    display: flex;
    flex-direction: row;
    gap: 40px;

    &__label {
      margin: auto;
      text-decoration: none;
      font-size: 25px;
      font-family: 'Montserrat-Light';
      color: black;
      text-align: center;
    }

    &__img {
      width: 100px;
    }
  }
}

@media screen and (max-width: 760px) {
  .ui-list {
    &__label {
      font-size: 30px;
    }

    &__option-name {
      &__label {
        font-size: 18px;
      }
      &__img {
        display: none;
      }
    }
  }
}
@media screen and (max-width: 760px) {
  .ui-list {
    &__label {
      font-size: 30px;
    }

    &__option-name {
      &__label {
        font-size: 18px;
      }
      &__img {
        display: none;
      }
    }
  }
}
</style>
