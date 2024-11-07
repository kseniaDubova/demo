<template>
  <div class="ui-post">
    <p class="ui-post__data">{{ post.data }}</p>
    <div class="ui-post__tags">
      <p
        class="ui-post__tags-item"
        v-for="(tag, index) in post.tags"
        :key="index"
      >
        {{ formatTag(tag) }}
      </p>
    </div>
    <div class="ui-post__text">
      <img
        class="ui-post__img"
        :style="imgStyle"
        :src="post.img"
        v-if="post.img"
      />
      <img class="ui-post__mobile" :src="post.img" v-if="post.img" />
      <p v-for="(paragraph, index) in post.text" :key="index">
        {{ paragraph }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UIPost',

  props: {
    post: {
      required: true,
    },
  },

  methods: {
    formatTag(tag) {
      return '#' + tag
    },
  },

  computed: {
    imgStyle() {
      return {
        float: this.post.view,
      }
    },
  },
}
</script>

<style lang="scss">
.ui-post {
  &__text {
    position: relative;
    line-height: 35px;
    color: #101214;
    font-size: 20px;
    font-family: 'Montserrat-Medium';
    max-width: 100%;
    overflow-wrap: break-word;
    word-wrap: break-word;

    p {
      text-indent: 40px;
      margin-top: 0;
    }
  }

  &__img {
    max-width: 50%;
    margin-right: 30px;
    margin-left: 30px;
  }

  &__mobile {
    display: none;
  }

  &__tags {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    max-width: 100%;
    margin-bottom: 40px;
    gap: 20px;

    &-item {
      margin: 0;
      line-height: 44px;
      color: #101214;
      font-size: 32px;
      text-align: center;
      font-family: 'Montserrat-SemiBold';
      white-space: nowrap;
    }
  }

  &__data {
    margin: 0;
    line-height: 35px;
    color: #101214;
    font-size: 20px;
    font-family: 'Montserrat-Light';
  }
}

@media screen and (max-width: 1600px) {
  .ui-post {
    &__text {
      line-height: 30px;
      font-size: 16px;

      p {
        text-indent: 30px;
      }
    }

    &__tags {
      margin-bottom: 30px;
      gap: 15px;

      &-item {
        line-height: 34px;
        font-size: 28px;
      }
    }

    &__data {
      line-height: 30px;
      font-size: 16px;
    }
  }
}
@media screen and (max-width: 760px) {
  .ui-post {
    &__text {
      text-align: center;
      line-height: 25px;
      font-size: 15px;

      p {
        text-indent: 0;
      }
    }

    &__img {
      display: none;
    }

    &__mobile {
      display: flex;
      max-width: 100%;
      margin-bottom: 20px;
    }

    &__tags {
      margin-bottom: 30px;
      gap: 10px;

      &-item {
        line-height: 25px;
        font-size: 20px;
      }
    }

    &__data {
      line-height: 30px;
      font-size: 15px;
    }
  }
}
</style>
