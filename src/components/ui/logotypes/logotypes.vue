<template>
  <div class="ui-logotypes" :style="logotypeStyle()">
    <a 
        class="ui-logotypes__item"
        v-for="(item, index) in items" :key="index"
        :href="formatLink(item.link)"
        target="_blank"
        rel="noopeper noreferrer">

        <img class="ui-logotypes__item-img" :src="item.img" alt="logo">
  </a>

  </div>
</template>

<script>
export default {
    name: "UILogotypes",

    props: {
        items: {
            typeof: Array,
            require: true,
        }, 
        gap: {
            typeof: Number,
            default: 60,
        },
        display: {
            typeof: String,
            default: 'flex',
        },
        flexDirection: {
            typeof: String,
            default: 'row',
        },
    },

    methods: {
        logotypeStyle() {
            return {
                gap: `${(this.gap)}px`, 
                display: `${this.display}`,
                flexDirection: `${this.flexDirection}`,
            }
        },
        formatLink(link) {
            if (link.includes("@") && !link.startsWith("http")) {
                return `mailto:${link}`;
            } else if (link.match(/^\+?\d{10,}$/)) {
                return `tel:${link}`
            }
            return link;
        },
    }

}
</script>

<style lang="scss">
</style>