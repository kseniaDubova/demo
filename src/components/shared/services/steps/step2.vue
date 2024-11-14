<template>
  <div>
    <UIList
      :options="getOptions()"
      :label="'Выберите тип Вашего проекта'"
      @option="clickOption"
    />
  </div>
</template>

<script>
import UIList from '@/components/ui/form/list.vue'

export default {
  name: 'Step2',

  components: {
    UIList,
  },

  methods: {
    getOptions() {
      return [
        {
          id: 0,
          label: 'Новый проект',
          img: require('@/assets/img/steps/st2_1.svg'),
        },
        {
          id: 1,
          label: 'Существующий проект',
          img: require('@/assets/img/steps/st2_2.svg'),
        },
      ]
    },
    clickOption(option) {
      this.active = option.id
      console.log(option)
      this.$emit('option', option)
    },
  },
}
</script>

<style></style>
