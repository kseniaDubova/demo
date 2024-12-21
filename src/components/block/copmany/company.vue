<template>
  <div class="block-company">
    <div class="block-company__info">
      <div class="block-company__info-block">
        <img
          class="block-company__img"
          src="@/assets/img/company/company_1.svg"
        />
        <p class="block-company__text">
          С 2010 года мы создаём эффективные интранет-, бизнес- и HR-решения,
          которые объединяют и вдохновляют сотни тысяч сотрудников
        </p>
      </div>
      <div class="block-company__info-block">
        <p class="block-company__text">
          Мы специализируемся на разработке масштабных и долгосрочных проектов,
          уделяя особое внимание профессиональному управлению и качественному
          выполнению задач
        </p>
        <img
          class="block-company__img"
          src="@/assets/img/company/company_1.svg"
        />
      </div>
      <div class="block-company__info-block">
        <img
          class="block-company__img"
          src="@/assets/img/company/company_1.svg"
        />
        <p class="block-company__text">
          Наша экспертиза охватывает весь цикл создания цифровых продуктов: от
          управления продуктом и программирования до настройки рекламы и
          взаимодействия с пользователями
        </p>
      </div>
      <div class="block-company__info-block">
        <p class="block-company__text">
          С нами ваши проекты становятся не просто инструментами, а
          стратегическими преимуществами
        </p>
        <img
          class="block-company__img"
          src="@/assets/img/company/company_2.svg"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BlockCompany',
}
</script>

<style lang="scss">
.block-company {
  display: flex;
  justify-content: center;
  width: 100%;

  &__text {
    text-decoration: none;
    display: flex;
    align-items: center;
    line-height: 30px;
    color: white;
    font-size: 26px;
    font-family: 'Montserrat-Light';
    margin: 100px 0px;
    text-align: center;
  }

  &__img {
    width: 250px;
  }

  &__info {
    margin-top: 200px;
    margin-bottom: 200px;
    width: 1200px;

    &-block {
      margin-bottom: 50px;
      display: flex;
      flex-direction: row;
      gap: 100px;
    }
  }
}
@media screen and (max-width: 760px) {
  .block-company {
    &__text {
      line-height: 30px;
      font-size: 20px;
      margin: 50px 0px;
    }

    &__img {
      display: none;
    }

    &__info {
      margin-top: 50px;
      margin-bottom: 50px;
      width: 100%;

      &-block {
        margin-bottom: 50px;
        display: flex;
        flex-direction: column;
        border: 2px solid white;
        padding: 5% 10px;
      }
    }
  }
}
</style>
