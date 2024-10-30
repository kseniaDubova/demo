<template>
    <div class="custom-cursor-container" @mousemove="customCursor">
      <div class="custom-cursor__circle" :style="circleStyle" ref="customCursorCircle"></div>
      <div class="custom-cursor__dot" :style="dotStyle" ref="customCursorDot"></div>
      <slot></slot>
    </div>
  </template>
  
  <script>
  export default {
    name: "CustomCursor",
    props: {
      targets: Array,
      circleColor: {
        type: String,
        default: "#2f2f2f"
      },
      circleColorHover: {
        type: String,
        default: "#ff0000"
      },
      dotColor: {
        type: String,
        default: "#2f2f2f"
      },
      dotColorHover: {
        type: String,
        default: "#ff0000"
      },
      hoverSize: {
        type: Number,
        default: 1.5
      }
    },
    data() {
      return {
        scale: 1,
        x: 0,
        y: 0,
        circleStyle: {
          transform: "translate(-100%, -100%)",
          borderColor: this.circleColor
        },
        dotStyle: {
          transform: "translate(-100%, -100%)",
          backgroundColor: this.dotColor
        }
      };
    },
    methods: {
      customCursor(e) {
        // Определяем позицию курсора внутри компонента
        const bounds = this.$el.getBoundingClientRect();
        this.x = e.clientX - bounds.left;
        this.y = e.clientY - bounds.top;
  
        // Устанавливаем стили позиции для circle и dot
        this.circleStyle.transform = `translate(${this.x - 17}px, ${this.y - 17}px) scale(${this.scale})`;
        this.dotStyle.transform = `translate(${this.x - 2.5}px, ${this.y - 2.5}px)`;
  
        // Изменяем стиль при наведении на целевые элементы
        if (
          (this.targets && this.targets.includes(e.target.tagName.toLowerCase())) ||
          this.targets.includes(e.target.className.toLowerCase())
        ) {
          this.scale = this.hoverSize;
          this.circleStyle.borderColor = this.circleColorHover;
          this.dotStyle.backgroundColor = this.dotColorHover;
        } else {
          this.scale = 1;
          this.circleStyle.borderColor = this.circleColor;
          this.dotStyle.backgroundColor = this.dotColor;
        }
      }
    }
  };
  </script>
  
  <style scoped>
  .custom-cursor-container {
    position: relative;
    cursor: none;
  }
  .custom-cursor__circle {
    position: absolute;
    width: 34px;
    height: 34px;
    border: 1px solid;
    border-radius: 50%;
    pointer-events: none;
    transition: transform 0.4s cubic-bezier(0.23, 1, 0.32, 1);
  }
  .custom-cursor__dot {
    position: absolute;
    width: 5px;
    height: 5px;
    border-radius: 50%;
    pointer-events: none;
    transition: transform 0.2s cubic-bezier(0.23, 1, 0.32, 1);
  }
  </style>