<template>
  <div class="services-content">
    <BlockServices :options="getServices()" :label="'Что у нас в арсенале:'"/>
    <BlockConstructor />
  </div>
</template>

<script>
import BlockServices from '@/components/block/services/services.vue'
import BlockConstructor from '@/components/block/constructor/constructor.vue'
export default {
  name: 'ServicesContent',
  components: {
    BlockConstructor,
    BlockServices,
  },
  methods: {
    getServices() {
      return [
        {
          id: 0,
          label: 'AI-технологии',
          text: 'Внедряем AI-технологии, от умных предложений до чат-ботов, чтобы всё было по последнему слову техники',
          link: '',
          img: require('@/assets/img/services/services_1.svg'),
        },
        {
          id: 1,
          label: 'Интеграция модулей',
          text: 'Разрабатываем сложные модули и глубоко интегрируем их с системами компаний',
          link: '',
          img: require('@/assets/img/services/services_2.svg'),
        },
        {
          id: 2,
          label: 'Автоматизированная поддержка',
          text: 'Автоматизируем поддержку клиентов — никаких проблем с сервисом',
          link: '',
          img: require('@/assets/img/services/services_4.svg'),
        },
        {
          id: 3,
          label: 'Создание единой ифосреды',
          text: 'Соединяем каналы коммуникаций в единую инфосреду, чтобы всё работало как часы',
          link: '',
          img: require('@/assets/img/services/services_5.svg'),
        },
        {
          id: 4,
          label: 'Customer Data Platform',
          text: 'Внедряем Customer Data Platform, чтобы у вас был полный контроль над данными клиентов',
          link: '',
          img: require('@/assets/img/services/services_6.svg'),
        },
        {
          id: 5,
          label: 'Техподдержка 24/7',
          text: 'И да, у нас техподдержка 24/7, так что всегда подстрахуем, если что',
          link: '',
          img: require('@/assets/img/services/services_3.svg'),
        },
      ]
    },
  }
}
</script>

<style></style>
