<template>
  <div class="ui-card-black" :class="getViewClass">
    <dvi class="ui-card-black__box" :class="getViewClass">
        <p class="ui-card-black__text">{{ text }}</p>        
    </dvi>

  </div>
</template>

<script>
const VIEWS = {
    right: "ui-card-black--right",
    left: "ui-card-black--left",
};
export default {
    name: 'UICardBlack',
    props: {
        text: {
            type: String,
            default: '',
        },
        view: {
            type: String,
            default: "",
        },
    },
    computed: {
        getViewClass() {
            const classes = [];

            if (this.view) {
                classes.push(VIEWS[this.view]);
            }
            
            return classes.join(" ");
        },
    },

}
</script>

<style lang="scss">
.ui-card-black {
    display: flex;
    padding: 0 5%;


    &__box {
        background: black;
        padding: 0px 50px;
        box-shadow: 0px 0px 20px 4px rgba(255, 255, 255, 1);
        justify-content:center; 
    }

    &__text {
        color: white;
        font-size: 38px;
        text-align: center;
        font-family: "Montserrat-Light";
    }
}
.ui-card-black--right {
    justify-content: right;
    border-radius: 80px 40px 40px 80px;
}
.ui-card-black--left {
    justify-content: left;
    border-radius: 40px 80px 80px 40px;
}

@media screen and (max-width: 1600px) {
    .ui-card-black {
        &__box {
            padding: 0px 50px;
        }

        &__text {
            font-size: 26px;
        }
    }
}
@media screen and (max-width: 760px) {
    .ui-card-black {
    &__box {
        width: 100%;
        padding: 7px 30px;
        justify-content: center;
        border-radius: 50px;
    }

    &__text {
        font-size: 20px;
    }
}
}
</style>