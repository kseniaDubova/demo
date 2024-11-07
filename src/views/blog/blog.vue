<template>
  <div class="blog">
    <BlogContent />
  </div>
</template>

<script>
import BlogContent from '@/components/shared/blog/blog.vue'
// import Api from "@/api/api";

// const api = new Api();

export default {
  name: 'Blog',

  components: {
    BlogContent,
  },

  // data() {
  //   return {
  //     posts: [],
  //   }
  // },

  // async created() {
  //   await this.getPosts();
  // },

  // methods: {
  //   async getPosts() {
  //     const data = await api.getUpdates();

  //     console.log(98765, data);
  //   }
  // }
}
</script>

<style></style>
