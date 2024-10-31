<template>
    <div class="default-layouts">
        <div class="content">
            <HeaderLayouts 
                class="default-layouts__header"
                @sideMenu="onToggle" />

            <div class="default-layouts__container">
                <transition name="page" mode="out-in" appear>
                    <router-view />           
                </transition>
            </div> 
            <FooterLayouts />
        </div>

        <transition name="side-menu-transition">
            <UISideMenu
                v-if="toggle"
                class="default-layouts__side-menu"
                :options="getNav()"
                :img="require('@/assets/img/default/cross.svg')"
                @close="onToggle" />
        </transition>
    </div>
</template>

<script>
import HeaderLayouts from "@/layouts/header.vue";
import FooterLayouts from "@/layouts/footer.vue";
import UISideMenu from "@/components/ui/sideMenu/sideMenu.vue";

export default {
    name: "DefaultLayout",
    components: {
        HeaderLayouts,
        UISideMenu,
        FooterLayouts,
    },
    data() {
        return {
            toggle: false,
        }
    },
    methods: {
        getNav() {
            return [
                { id: 0, label: "Компания", link: "/company" },
                { id: 1, label: "Портфолио", link: "/portfolio" },
                { id: 2, label: "Блог", link: "/blog" },
                { id: 3, label: "Услуги", link: "/services" }
            ];
        },
        onToggle(value) {
            this.toggle = value;
        }
    },
}
</script>

<style lang="scss">
.default-layouts {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-family: "Montserrat-Light";
    letter-spacing: 2px;

    &__side-menu {
        display: none;
    }

    &__header {
        position: sticky;
        top: 0;
    }
}

.side-menu-transition-enter-active,
.side-menu-transition-leave-active {
    transition: transform 0.5s ease-in-out;
}
.side-menu-transition-enter-from,
.side-menu-transition-leave-to {
    transform: translateX(130%);
}

.page-enter-active, 
.page-leave-active {
    transition: all 2s ease;
}

.page-enter-from {
    opacity: 0;
    transform: translateY(20px); 
}

.page-enter-to {
    opacity: 1;
    transform: translateY(0); 
}

.page-leave-from {
    opacity: 1;
    transform: translateY(0);
}

.page-leave-to {
    opacity: 0;
    transform: translateY(-20px);
}

@media screen and (max-width: 760px) {
    .default-layouts__side-menu {
        display: flex;
    }
}
</style>