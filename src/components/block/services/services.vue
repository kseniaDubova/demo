<template>
  <div class="block-services">
    <UIStripe :count="8" color="white" :extension="true" :height="1"/>
    <BlockServicesInfo />
    <UIStripe :count="8" color="white" :extension="true" :height="1" :k="-3"/>
  </div>
</template>

<script>
import BlockServicesInfo from "@/components/block/services/info.vue";
import UIStripe from "@/components/ui/stripe/stripe.vue";

export default {
    name: 'BlockServices',

    components: {
        BlockServicesInfo,
        UIStripe,
    }

}
</script>

<style lang="scss">
.block-services
{
    width: 100%;
}
</style>