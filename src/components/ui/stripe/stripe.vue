<template>
  <div class="ui-stripe">
    <div
      v-for="(stripe, index) in stripes"
      :key="index"
      class="stripe"
      :style="stripeStyle(index)"
    />
  </div>
</template>

<script>
export default {
  name: 'UIStripe',
  props: {
    count: {
      type: Number,
      required: true,
    },
    color: {
      type: String,
      default: '#000',
    },
    width: {
      type: Number,
      default: 1,
    },
    height: {
      type: Number,
      default: 1,
    },
    rotate: {
      type: Number,
      default: 0,
    },
    extension: {
      type: Boolean,
      default: false,
    },
    k: {
      type: Number,
      default: 3,
    },
    margin: {
      type: Number,
      default: 1,
    },
  },
  computed: {
    stripes() {
      return Array.from({ length: this.count });
    },
  },
  methods: {
    stripeStyle(index) {
      const baseHeight = this.height;
      const baseMargin = this.margin;
      let calculatedHeight;
      let calculatedMargin;

      if (this.extension) {
        calculatedHeight = this.k >= 0
          ? baseHeight * this.k * (index + 1)
          : baseHeight * this.k * (this.count - index);

        calculatedMargin = this.k >= 0
          ? baseMargin * this.k * (this.count - index)
          : baseMargin * this.k * (index + 1);
      } else {
        calculatedHeight = baseHeight;
        calculatedMargin = baseMargin;
      }

      return {
        backgroundColor: this.color,
        width: `100%`,
        height: `${Math.abs(calculatedHeight)}px`, 
        transform: `rotate(${this.rotate}deg)`,
        margin: `${Math.abs(calculatedMargin)}px 0`, 
      };
    },
  },
};
</script>

<style scoped>
.ui-stripe {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.stripe {
  transition: all 0.3s ease;
}
</style>