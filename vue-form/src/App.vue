<script setup lang="ts">
import FormCheckbox from './components/FormCheckbox.vue';
import FormBaseInput from './components/FormBaseInput.vue';
import FormPassword from './components/FormPassword.vue';
import FormSelect from './components/FormSelect.vue';
import FormTextArea from './components/FormTextArea.vue';
import { cityOptions, initialFormData } from './constants/constants';
import { Form } from 'vee-validate';
import { validateSchema } from './schema/validateSchema';
import type { IForm } from './types/types';
import { ref } from 'vue';

const isSuccess = ref(false);

const register = (values: any) => {
  console.log(values as IForm);
  isSuccess.value = true;
};
</script>

<template>
  <div class="container">
    <h1 class="title">Регистрация</h1>
    <Form
      @submit="register"
      class="registration-form"
      :validation-schema="validateSchema"
      :initial-values="initialFormData"
    >
      <FormBaseInput
        label="Имя"
        name="firstName"
        type="text"
        :required="true"
      />
      <FormBaseInput
        label="Фамилия"
        name="lastName"
        type="text"
        :required="true"
      />

      <FormBaseInput
        label="Страна/Регион"
        name="country"
        type="text"
        :required="true"
      />
      <FormSelect
        :cityOptions="cityOptions"
        label="Город"
        name="city"
        :required="true"
      />
      <FormBaseInput label="Телефон" name="phone" type="tel" :required="true" />
      <FormBaseInput label="Email" name="email" type="email" :required="true" />
      <FormPassword name="password" label="Пароль" :required="true" />
      <FormPassword
        name="confirmPassword"
        label="Подтвердите пароль"
        :required="true"
      />
      <FormCheckbox
        label="Я согласен c условиями пользования и политикой конфиденциальности"
        name="terms"
        :required="true"
      />
      <FormTextArea label="Дополнительная информация" name="comments" />
      <button class="btn" type="submit">Зарегистрироваться</button>
      <button class="btn" type="reset">Очистить форму</button>
    </Form>
    <div v-if="isSuccess" class="message message--success">
      Регистрация прошла успешно!
    </div>
  </div>
</template>

<style src="./style.css"></style>
