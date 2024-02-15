<template>
  <form @submit.prevent="submitForm">
    <label for="email">Email</label>
    <input v-model="email" @blur="validateField('email', email)" />
    <p v-if="errors.email">{{ errors.email }}</p>
    <label for="password">password</label>
    <input type="password" v-model="password" @blur="validateField('password', password)" />
    <p v-if="errors.password">{{ errors.password }}</p>

    <button type="submit">Submit</button>
  </form>
</template>

<script setup>
import { ref } from 'vue';
import { useValidation } from './useValidation.js';

const { validateField, errors } = useValidation({
  rules: {
    email: {
      required: true,
      pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/
    },
    password: {
      required: true,
      minLength: 8
    }
  },
  messages: {
    email: {
      required: 'Email is required',
      pattern: 'Please enter a valid email address'
    },
    password: {
      required: 'Password is required',
      minLength: 'Password must be at least 8 characters long'
    }
  }
});

const email = ref('');
const password = ref('');

const submitForm = () => {
  validateField('email', email.value);
  validateField('password', password.value);

  if (!errors.value.email && !errors.value.password) {
    // Si no hay errores, envía el formulario
  }
};
</script>