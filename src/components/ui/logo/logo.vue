<template>
    <div class="ui-logo">
        <router-link to="/">
            <img :src="logo" alt="logo" :height="height" :width="width">   
        </router-link>
    </div>
</template>

<script>
export default {
    name: "UILogo", 

    props: {
        logo: {
            type: String,
            default: ""
        },
        height: {
            type: Number,
        },
        width: {
            type: Number,
        },
    }
}
</script>

<style lang="scss">
.ui-logo {
    width: 100%;
}
</style>