<template>
  <div class="ui-form">
    <form class="ui-form__inputs" @submit.prevent="submitForm">
      <input
        type="text"
        v-model="formData.name"
        placeholder="Имя Фамилия"
        required
        class="input-field"
      />

      <input
        type="tel"
        v-model="formData.phone"
        placeholder="+7"
        required
        class="input-field"
      />

      <input
        type="email"
        v-model="formData.email"
        placeholder="Рабочий email"
        required
        class="input-field"
      />

      <textarea
        v-model="formData.details"
        placeholder="Сроки запуска, бюджет, требования, ваши пожелания ..."
        class="textarea-field"
      ></textarea>

      <div class="file-upload">
        <label>
          <input type="file" @change="handleFileUpload" class="file-input" />
          <span class="file-upload-label">📎 Добавить файл</span>
        </label>
      </div>

      <div class="checkbox-container">
        <input
          type="checkbox"
          v-model="formData.agreed"
          id="agreement"
          required
        />
        <label for="agreement">
          Принимаю условия
          <a href="/terms" target="_blank">пользовательского соглашения</a> и
          <a href="/privacy" target="_blank">политики конфиденциальности</a>
        </label>
      </div>

      <button type="submit" :disabled="!formData.agreed" class="submit-button">
        НАЧАТЬ ПРОЕКТ
      </button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'UIForm',
  data() {
    return {
      formData: {
        name: '',
        phone: '',
        email: '',
        details: '',
        file: null,
        agreed: false,
      },
    }
  },
  methods: {
    handleFileUpload(event) {
      this.formData.file = event.target.files[0]
    },
    submitForm() {
      // Здесь можно добавить логику для отправки формы, например, отправку данных на сервер
      alert('Форма отправлена!')
      console.log(this.formData)
    },
  },
}
</script>

<style>
.ui-form {
  max-width: 700px;
  margin: auto;
  padding: 10%;
  background-color: white;
  border-radius: 8px;
}

.input-field,
.textarea-field {
  width: 100%;
  padding: 12px;
  margin-bottom: 10px;
  border: 1px solid gray;
  border-radius: 4px;
  font-size: 18px;
  font-family: 'Montserrat-Light';
  color: black;
}

.textarea-field {
  min-height: 80px;
  resize: vertical;
}

.file-upload {
  display: flex;
  align-items: center;
  margin: 10px 0;
}

.file-input {
  display: none;
}

.file-upload-label {
  color: black;
  cursor: pointer;
  font-family: 'Montserrat-Light';
  font-size: 18px;
}

.checkbox-container {
  display: flex;
  align-items: center;
  font-size: 18px;
  margin-top: 10px;
  font-family: 'Montserrat-Light';
  color: black;
}

.checkbox-container input {
  margin-right: 10px;
}

.checkbox-container a {
  color: black;
  text-decoration: none;
}

.checkbox-container a:hover {
  text-decoration: underline;
}

.submit-button {
  width: 100%;
  padding: 15px;
  background-color: black;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
  margin-top: 80px;
  transition: background-color 0.3s ease;
  font-family: 'Montserrat-Light';
}

.submit-button:disabled {
  background-color: white;
  border: 1px solid black;
  cursor: not-allowed;
  color: black;
  font-family: 'Montserrat-Light';
}

.submit-button:hover:not(:disabled) {
  background-color: black;
}

@media screen and (max-width: 760px) {
  .checkbox-container {
    font-size: 12px;
  }
}
</style>
