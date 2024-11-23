<template>
  <div class="home-content">
    <BlockStart class="home-content__start" />
    <BlockAbout class="home-content__about" />
    <BlockServices :options="getServices()" :label="'Что у нас в арсенале:'" />
  </div>
</template>

<script>
import BlockStart from '@/components/block/start/start.vue'
import BlockAbout from '@/components/block/about/about.vue'
import BlockServices from '@/components/block/services/services.vue'

export default {
  name: 'HomeContent',

  components: {
    BlockStart,
    BlockAbout,
    BlockServices,
  },

  methods: {
    getServices() {
      return [
        {
          id: 0, //
          label: 'AI-технологии', //
          text: 'Внедряем AI-технологии, от умных предложений до чат-ботов, чтобы всё было по последнему слову техники',
          link: '',
          img: require('@/assets/img/services/services_6.svg'),
        },
        {
          id: 1,
          label: 'Интеграция модулей', //
          text: 'Разрабатываем сложные модули и глубоко интегрируем их с системами компаний',
          link: '',
          img: require('@/assets/img/services/services_4.svg'),
        },
        {
          id: 2, //
          label: 'Автоматизированная поддержка',
          text: 'Автоматизируем поддержку клиентов — никаких проблем с сервисом',
          link: '',
          img: require('@/assets/img/services/services2_3.svg'),
        },
        {
          id: 3, //
          label: 'Создание единой ифосреды',
          text: 'Соединяем каналы коммуникаций в единую инфосреду, чтобы всё работало как часы',
          link: '',
          img: require('@/assets/img/services/services2_4.svg'),
        },
        {
          id: 4, //
          label: 'Customer Data Platform',
          text: 'Внедряем Customer Data Platform, чтобы у вас был полный контроль над данными клиентов',
          link: '',
          img: require('@/assets/img/services/services_3.svg'),
        },
        {
          id: 5, //
          label: 'Техподдержка 24/7',
          text: 'И да, у нас техподдержка 24/7, так что всегда подстрахуем, если что',
          link: '',
          img: require('@/assets/img/services/services2_6_1.svg'),
        },
      ]
    },
  },
}
</script>

<style lang="scss">
.home-content {
  height: 100%;
  overflow-x: hidden;
  &__start {
    height: 900px;
    margin-bottom: 200px;
  }

  &__about {
    margin-bottom: 200px;
  }
}
@media screen and (max-width: 1600px) {
  .home-content {
    &__start {
      height: 850px;
      margin-bottom: 100px;
    }

    &__about {
      margin-bottom: 300px;
    }
  }
}
@media screen and (max-width: 760px) {
  .home-content {
    &__start {
      height: 800px;
      margin-bottom: 10px;
    }

    &__about {
      margin-bottom: 200px;
    }
  }
}
</style>
