<template>
  <div class="company">
    <CompanyContent />
  </div>
</template>

<script>
import CompanyContent from '@/components/shared/company/company.vue'
export default {
  name: 'Company',

  components: {
    CompanyContent,
  },

  created() {
    window.scrollTo(0, 0)
  },
}
</script>

<style></style>
