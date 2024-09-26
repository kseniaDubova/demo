<template>
    <div class="block-menu">
        <UINav 
            :links="getNav()"/>
        <div class="block-menu__close" @click="onOpen">
            <img class="block-menu__close-img" src="@/assets/img/default/point.svg" alt="close">
        </div>
    </div>
</template>

<script>
import UINav from "@/components/ui/nav/nav.vue";

export default {
    name: "BlockMenu",

    components: {
        UINav,
    },

    methods: {
        getNav() {
            return [
                {
                    id: 0,
                    label: "Компания",
                    link: "/company",
                },
                {
                    id: 1,
                    label: "Портфолио",
                    link: "/portfolio",
                },                
                {
                    id: 2,
                    label: "Блог",
                    link: "/blog",
                },
                {
                    id: 3,
                    label: "Услуги",
                    link: "/services",
                },               
            ]
        },

        onOpen() {
            this.$emit("sideMenu", true);
        }
    }
}
</script>

<style lang="scss">
.block-menu {
    display: flex;
    flex-direction: row;
    height: 100%;

    &__close {
        display: none;
        &-img {
            width: 20px;
        }
    }
}
@media screen and (max-width: 760px) {
    .block-menu__close {
        display: flex;
    }
}
</style>