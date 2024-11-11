<template>
  <div class="blog-content">
    <BlockBlog />
    <UIStripe
      :count="8"
      :height="3"
      :margin="10"
      :color="'white'"
      :rotate="50"
      class="blog-content__back1"
    />
    <UIStripe
      :count="9"
      :height="3"
      :width="110"
      :margin="15"
      :color="'white'"
      :rotate="-10"
      class="blog-content__back2"
    />
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
  &__back1 {
    position: fixed;
    z-index: 1;
    top: 0;
    left: auto;
    width: 100%;
    height: 100%;
  }
  &__back2 {
    position: fixed;
    z-index: 1;
    top: 20%;
    left: 0;
    width: 100%;
    height: 100%;
  }
}
</style>
