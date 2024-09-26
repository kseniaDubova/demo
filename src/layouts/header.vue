<template>
    <div class="header-layouts">
        <UILogo 
            class="header-layouts__logo"
            :logo="require('@/assets/img/IT VIBE.svg')"
            :height="40"
            />
        <BlockMenu 
            @sideMenu="onOpen"/>
    </div>
</template>

<script>
import UILogo from "@/components/ui/logo/logo.vue";
import BlockMenu from "@/components/block/menu/menu.vue";

export default {
    name: "HeaderLayouts",

    components: {
        UILogo,
        BlockMenu,
    },

    methods: {
        onOpen() {
            this.$emit("sideMenu", true);
        },
    },
}
</script>

<style lang="scss">
.header-layouts {
    z-index: 20;

    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    max-height: 400px;
    background: black;
    //box-shadow: 0px 0px 100px 100px rgba(89, 104, 128, 0.1);
    padding: 20px 10%;

    &__logo {
        width: 10%;
    }
}

@media screen and (max-width: 1600px) {
    .header-layouts {
        max-height: 200px;
    }
}

</style>