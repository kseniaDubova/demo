<template>
  <div class="blog-content">
    <BlockBlog />
    <div class="blog-content__background">
      <UIStripe
        :count="8"
        :height="3"
        :margin="10"
        :color="'white'"
        :rotate="50"
        class="blog-content__background-stripes-1"
      />
      <UIStripe
        :count="9"
        :height="3"
        :width="110"
        :margin="15"
        :color="'white'"
        :rotate="-10"
        class="blog-content__background-stripes-2"
      />
    </div>
  </div>
</template>

<script>
import BlockBlog from '@/components/block/blog/blog.vue'
import UIStripe from '@/components/ui/stripe/stripe.vue'

export default {
  name: 'BlogContent',

  components: {
    BlockBlog,
    UIStripe,
  },
}
</script>

<style lang="scss">
.blog-content {
  &__background {
    &-stripes-1 {
      position: fixed;
      z-index: 1;
      top: 0;
      left: auto;
      width: 100%;
      height: 100%;
    }
    &-stripes-2 {
      position: fixed;
      z-index: 1;
      top: 20%;
      left: 0;
      width: 100%;
      height: 100%;
    }
  }
}
@media screen and (max-height: 760px) {
  .blog-content__background {
    display: none;
  }
}
</style>
