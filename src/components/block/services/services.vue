<template>
  <div class="block-services" @mouseenter="showCursor" @mouseleave="hideCursor">
        <CustomCursor :targets="['']">
            <UIStripe :count="8" color="white" :extension="true" :height="1"/>
            <BlockServicesInfo />
            <UIStripe :count="8" color="white" :extension="true" :height="1" :k="-3"/>
        </CustomCursor>
  </div>
</template>

<script>
import BlockServicesInfo from "@/components/block/services/info.vue";
import UIStripe from "@/components/ui/stripe/stripe.vue";
import CustomCursor from "@/components/ui/cursor/cursor.vue";

export default {
    name: 'BlockServices',

    components: {
        BlockServicesInfo,
        UIStripe,
        CustomCursor,
    },

    data() {
        return {
            isCursorVisiable: false,
        }
    },

    methods: {
        showCursor() {
            this.isCursorVisiable = true;
        },
        hideCursor() {
            this.isCursorVisiable = false;
        },
    },

}
</script>

<style lang="scss">
.block-services
{
    width: 100%;
}
</style>