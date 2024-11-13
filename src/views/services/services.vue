<template>
  <div class="services">
    <ServicesContent />
  </div>
</template>

<script>
import ServicesContent from '@/components/shared/services/services.vue'
export default {
  name: 'Services',

  created() {
    window.scrollTo(0, 0)
  },

  components: {
    ServicesContent,
  },
}
</script>

<style></style>
