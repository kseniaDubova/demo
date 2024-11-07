<template>
  <div class="block-services-info">
    <h2
      data-aos="slide-left"
      data-aos-offset="-500"
      data-aos-delay="0"
      data-aos-duration="2000"
      data-aos-easing="ease-in"
      data-aos-once="true"
      class="block-services-info__label"
    >
      Что мы можем?
    </h2>

    <div class="block-services-info__cells">
      <div
        class="block-services-info__cell"
        data-aos="fade"
        data-aos-offset="-200"
        data-aos-delay="0"
        data-aos-duration="1500"
        data-aos-easing="ease-in"
        data-aos-once="true"
        v-for="cell in getServices()"
        :key="cell.id"
      >
        <UIWhiteCard
          :img="cell.img"
          :text="cell.text"
          :label="cell.label"
          :link="cell.link"
        />
      </div>
    </div>
  </div>
</template>

<script>
import UIWhiteCard from '@/components/ui/card/whiteCard.vue'
export default {
  name: 'BlockServicesInfo',

  components: {
    UIWhiteCard,
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

<style lang="scss">
.block-services-info {
  background: white;
  height: 1500px;

  &__label {
    color: black;
    font-size: 96px;
    text-align: right;
    font-family: 'Montserrat-ExtraBold';
    padding-right: 3%;
    margin: 0;
    padding-top: 3%;
  }

  &__cells {
    height: auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 5%;
    gap: 5%;
  }
}
@media screen and (max-width: 760px) {
  .block-services-info {
    height: 2900px;

    &__label {
      font-size: 60px;
      text-align: center;
      padding-top: 10%;
    }

    &__cells {
      height: auto;
      grid-template-columns: 1fr;
      gap: 2%;
    }
  }
}
</style>
