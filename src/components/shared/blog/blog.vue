<template>
  <div class="blog-content">
    <BlockBlog />
  </div>
</template>

<script>
import BlockBlog from '@/components/block/blog/blog.vue'

export default {
  name: 'BlogContent',

  components: {
    BlockBlog,
  },
}
</script>

<style lang="scss"></style>
