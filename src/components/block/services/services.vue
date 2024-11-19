<template>
  <div class="block-services" @mouseenter="showCursor" @mouseleave="hideCursor">
    <UIStripe :count="8" color="white" :extension="true" :height="1" />
    <BlockServicesInfo :options="options" :label="label"/>
    <UIStripe :count="8" color="white" :extension="true" :height="1" :k="-3" />
  </div>
</template>

<script>
import BlockServicesInfo from '@/components/block/services/info.vue'
import UIStripe from '@/components/ui/stripe/stripe.vue'

export default {
  name: 'BlockServices',

  components: {
    BlockServicesInfo,
    UIStripe,
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

  data() {
    return {
      isCursorVisiable: false,
    }
  },

  methods: {
    showCursor() {
      this.isCursorVisiable = true
    },
    hideCursor() {
      this.isCursorVisiable = false
    },
  },
}
</script>

<style lang="scss">
.block-services {
  width: 100%;
}
</style>
