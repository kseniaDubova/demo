<template>
  <div class="company-content">
    <BlockCube />
    <BlockCompany />
    <BlockContact />
  </div>
</template>

<script>
import BlockCube from '@/components/block/cube/cube.vue'
import BlockCompany from '@/components/block/copmany/company.vue'
import BlockContact from '@/components/block/contact/contact.vue'
export default {
  name: 'CompanyContent',
  components: {
    BlockCube,
    BlockCompany,
    BlockContact,
  },
}
</script>

<style></style>
