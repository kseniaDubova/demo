<template>
  <div class="home">
    <HomeContent />
  </div>
</template>

<script>
import HomeContent from '@/components/shared/home/home.vue'

export default {
  name: 'Home',

  components: {
    HomeContent,
  },

  created() {
    window.scrollTo(0, 0)
  },
}
</script>

<style></style>
