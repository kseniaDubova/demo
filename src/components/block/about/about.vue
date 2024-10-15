<template>
  <div class="block-about">
    <div class="block-about__label">
        <h2 class="block-about__label-text">Мы создаём масштабируемые e-commerce решения и предоставляем круглосуточную техподдержку 24/7</h2>
        <img src="@/assets/img/about/linesAbout1.svg">
    </div>
    <div class="block-about__background">
        <p> We are masters of e-commerce projects, and we know a thing or two about creating high-load and stable systems. Integration with systems, development of corporate portals, SaaS solutions — all this comes to us</p>
        <img src="@/assets/img/about/linesAbout2.svg">
    </div>
    <BlockAboutInfo />
  </div>
</template>

<script>
import BlockAboutInfo from '@/components/block/about/info.vue';

export default {
    name: "BlockAbout",

    components: {
        BlockAboutInfo,
    }

}
</script>

<style lang="scss">
.block-about {
    position: relative;

    &__label {
        &-text {
            padding: 0px 10%;
            line-height: 50px;
            color: white;
            font-size: 48px;
            text-align: left;
            font-family: "Montserrat-Medium";
            max-width: 1220px;
            margin-bottom: 75px;
        }
    }

    &__background {
        position: absolute;
        top: 0;
        z-index: -1;

        p {
            // position: absolute;
            // top: 0;
            line-height: 96px;
            color: #101214;
            font-size: 130px;
            text-transform: uppercase;
            text-align: right;
            font-family: "Montserrat-BlackItalic";
        }
        img {
            position: absolute;
            top: 0;
        }
    }
}
@media screen and (max-width: 1600px) {
    .block-about {
        &__label {
            &-text {
                line-height: 40px;
                font-size: 38px;
                max-width: 900px;
                margin-bottom: 60px;
            }
        }
        &__background {
            p {
                line-height: 75px;
                font-size: 96px;
            }
        }        
    }
}
@media screen and (max-width: 760px) {
    .block-about {
        &__label {
            &-text {
                line-height: 30px;
                font-size: 30px;
                margin-bottom: 40px;
                text-align: center;
            }
        }
        &__background {
            p {
                line-height: 50px;
                font-size: 60px;
            }
        }        
    }
}
</style>