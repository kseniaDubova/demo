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
  name: 'Step3',

  components: {
    UIList,
  },

  methods: {
    getOptions() {
      return [
        {
          id: 0,
          label: 'Немедленно',
          img: require('@/assets/img/steps/day.svg'),
        },
        {
          id: 1,
          label: 'В течение недели',
          img: require('@/assets/img/steps/week.svg'),
        },
        {
          id: 2,
          label: 'В течение месяца',
          img: require('@/assets/img/steps/month.svg'),
        },
        {
          id: 3,
          label: 'Больше месяца',
          img: require('@/assets/img/steps/year.svg'),
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
