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
  name: 'Step1',

  components: {
    UIList,
  },

  methods: {
    getOptions() {
      return [
        {
          id: 0,
          label: 'Web-рарзработка',
          img: require('@/assets/img/steps/st1_1.svg'),
        },
        {
          id: 1,
          label: 'Поддержка интеграции ИИ',
          img: require('@/assets/img/steps/st1_2.svg'),
        },
        {
          id: 2,
          label: 'Другое',
          img: require('@/assets/img/steps/st1_3.svg'),
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
