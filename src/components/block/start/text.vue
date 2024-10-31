<template>
  <div class="block-start-text">
    <transition name="slogan" appear>
      <div class="block-start-text__slogan">
        <h2 class="block-start-text__slogan-text" >The Future is already now</h2>
      </div>      
    </transition>

    <transition name="text" appear>
      <div class="block-start-text__info">
        <p class="block-start-text__info-text">IT Vibe — эксперт в веб-интеграции. С 2010 года мы создаем масштабные решения для лидеров рынка, внедряя AI и поддерживая бизнес 24/7.</p>
      </div>      
    </transition>
  </div>
  <transition name="button" appear>
    <a class="block-start-button">
      <div class="block-start-button__label">начать проект</div>
      <img class="block-start-button__img" src="@/assets/img/start/chevrons-right.svg">
    </a>
  </transition>
</template>

<script>
export default {
    name: "BlockStartText"
}
</script>

<style lang="scss">
.block-start-text {
  position: absolute;
  display: flex;
  flex-direction: column;
  padding: 0px 10%;

  &__slogan {
    width: 500px;

    &-text {
      color: white;
      font-size: 64px;
      text-transform: uppercase;
      font-family: "Montserrat-Bold";
    }
  }
  &__info {
    width: 553px;

    &-text {
      color: white;
      line-height: 30px;
      font-size: 20px;
      font-family: "Montserrat-Medium";
      text-align: start;
    }
  }
}
.block-start-button {
  z-index: 20;
  position: absolute;
  top: 600px;
  display: flex;
  justify-content: center;
  background: white;
  border: 2px solid white;
  border-radius: 0 120px 120px 0;
  width: 600px;
  height: 120px;
  transition: transform 1s ease;

  &__label {
    text-decoration: none;
    display: flex;
    align-items: center;
    line-height: 100%;
    color: black;
    font-size: 26px;
    text-transform: uppercase;
    font-family: "Montserrat-Bold";
  }

  &__img {
    transition: transform 1s ease;
  }

  &:hover {
    transform: scale(1.1);
    .block-start-button__img {
      transform: translateX(60%);
    }
  }
}

@media screen and (max-width: 1600px) {
  .block-start-text__info-text {
    font-size: 14px;
    line-height: 25px;
  } 
  .block-start-text__slogan {
    width: 400px;
    &-text {
      font-size: 50px;      
    }

  }  
  .block-start-button {
    top: 450px;
    width: 495px;
    height: 95px;
  }
}
@media screen and (max-width: 760px) {
  .block-start-text {
    padding: 0;
    width: 100%;
    align-items: center;
  }

  .block-start-text__info {
    width: 300px;
    &-text {
      font-size: 12px;
      line-height: 20px;      
    }
  } 
  .block-start-text__slogan {
    width: 350px;
    &-text {
      font-size: 46px;
      text-align: center;   
    }

  }  
  .block-start-button {
    border-radius: 0;
    top: 400px;
    width: 100%;
    height: 95px;

    &__img {
      display: none;
    }
  }
}

.slogan-enter-active {
  transition: all 1.5s ease-out;
}

.slogan-enter-from {
  transform: translateX(-50px);
  opacity: 0;
}
.slogan-enter-to {
  transform: translateX(0px);
  opacity: 1;
}

.text-enter-active {
  transition: all 1.7s ease-out;
}

.text-enter-from {
  transform: translateX(50px);
  opacity: 0;
}
.text-enter-to {
  transform: translateX(0px);
  opacity: 1;
}

.button-enter-active {
  transition: all 2s ease-out;
}

.button-enter-from {
  transform: translateX(-100%);
}
.button-enter-to {
  transform: translateX(0);
}
</style>