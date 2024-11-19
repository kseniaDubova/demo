<template>
  <div class="services-content">
    <BlockServices :options="getServices()" />
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
          label: 'Бизнес и системная аналитика',
          text: 'Анализ и оптимизация бизнес-процессов для повышения эффективности и внедрения инноваций с помощью современных систем и технологий',
          link: '',
          img: require('@/assets/img/services/services_1.svg'),
        },
        {
          id: 1,
          label: 'Разработка Web приложений',
          text: 'Создание надежных и масштабируемых веб-приложений, адаптированных под уникальные потребности вашего бизнеса.',
          link: '',
          img: require('@/assets/img/services/services_2.svg'),
        },
        {
          id: 2,
          label: 'Интеграция разрозненных систем',
          text: 'Объединение различных информационных систем в единую инфраструктуру для улучшения работы и обмена данными',
          link: '',
          img: require('@/assets/img/services/services_3.svg'),
        },
        {
          id: 3,
          label: 'Поддержка DevOps, DBA, DevSecOps',
          text: 'Комплексная техническая поддержка, администрирование баз данных, безопасность и автоматизация процессов разработки',
          link: '',
          img: require('@/assets/img/services/services_4.svg'),
        },
        {
          id: 4,
          label: 'Web 3.0',
          text: 'Разработка децентрализованных приложений и внедрение новых технологий для перехода в эпоху Web 3.0',
          link: '',
          img: require('@/assets/img/services/services_5.svg'),
        },
        {
          id: 5,
          label: 'Интеграция ИИ в бизнес-процессы',
          text: 'Внедрение решений на базе искусственного интеллекта для автоматизации, анализа данных и повышения эффективности бизнеса',
          link: '',
          img: require('@/assets/img/services/services_6.svg'),
        },
      ]
    },
  },
}
</script>

<style></style>
