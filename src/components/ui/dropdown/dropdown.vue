<template>
  <div class="ui-dropdown">
    <div v-if="img" class="ui-dropdown__img" @click="onToggle">
      {{ img }}
    </div>
    <div v-else class="ui-dropdown__selected" @click="onToggle">
      {{ mainOption.label }}
    </div>
    <div v-if="toggle" class="ui-dropdown__wrapper">
      <div
        class="ui-dropdown__wrapper-option"
        v-for="option in options"
        :key="option.id"
        @click="selectedOption(option)"
      >
        {{ option.label }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UIDropdown',

  data() {
    return {
      mainOption: {
        label: this.select,
      },
      toggle: false,
    }
  },

  props: {
    options: {
      type: Array,
      default: null,
    },
    select: {
      type: String,
      default: '',
    },
    img: {
      type: String,
      default: '',
    },
  },

  computed: {},

  methods: {
    selectedOption(option) {
      this.mainOption.label = option.label
      this.toggle = false

      this.$emit('changed', option.label)
    },

    onToggle() {
      this.toggle = !this.toggle
    },
  },
}
</script>

<style lang="scss">
.ui-dropdown {
  font-family: 'Golos-Regular', sans-serif;
  font-size: 14px;
  color: #2d4250;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;

  &__wrapper {
    z-index: 10;
    background: white;
    border: 1px solid rgba(45, 66, 80, 0.1);
    border-radius: 10px;
    position: absolute;
    top: 20px;

    &-option {
      padding: 7px 10px;
      border-bottom: 1px solid rgba(45, 66, 80, 0.1);

      &:last-child {
        border: none;
      }
    }
  }
}
</style>
