<template>
  <div class="services">
    <ServicesContent />
  </div>
</template>

<script>
import ServicesContent from '@/components/shared/services/services.vue'
export default {
  name: 'Services',

  mounted() {
    this.scrollToHash()
  },

  methods: {
    scrollToHash() {
      this.$nextTick(() => {
        if (this.$route.hash) {
          const element = document.querySelector(this.$route.hash)
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
          }
        } else {
          window.scrollTo(0, 0)
        }
      })
    },
  },

  components: {
    ServicesContent,
  },
}
</script>

<style></style>
