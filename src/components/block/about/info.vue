<template>
  <div class="block-about-info">
    <div v-for="block in getCell()" :key="block.id">
      <UICardBlack
        :data-aos="block.view === 'left' ? 'slide-left' : 'slide-right'"
        data-aos-delay="0"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        data-aos-once="true"
        :view="block.view"
        :text="block.text"
      />
    </div>
  </div>
</template>

<script>
import UICardBlack from '@/components/ui/card/blackCard.vue'

export default {
  name: 'BlockAboutInfo',

  components: {
    UICardBlack,
  },

  methods: {
    getCell() {
      return [
        {
          id: 0,
          text: 'Автоматизируем клиентскую поддержку',
          view: 'right',
        },
        {
          id: 1,
          text: 'Внедряем AI-технологии для повышения эффективности',
          view: 'left',
        },
        {
          id: 2,
          text: 'Объединяем коммуникации в единую систему',
          view: 'left',
        },
        {
          id: 3,
          text: 'Разрабатываем и интегрируем сложные модули',
          view: 'right',
        },
        {
          id: 4,
          text: 'Внедряем Customer Data Platform для управления данными',
          view: 'left',
        },
      ]
    },
  },
}
</script>

<style lang="scss">
.block-about-info {
  display: flex;
  flex-direction: column;
  gap: 100px;
  margin-top: 100px;
}

@media screen and (max-width: 760px) {
  .block-about-info {
    gap: 70px;
    margin-top: 50px;
  }
}
</style>
