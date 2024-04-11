<script setup>
import { Form, Field } from 'vee-validate';
import * as Yup from 'yup';

import { useAuthStore } from '@/stores';

const schema = Yup.object().shape({
    username: Yup.string().required('Username is required'),
    password: Yup.string().required('Password is required')
});

function onSubmit(values, { setErrors }) {
    const authStore = useAuthStore();
    const { username, password } = values;

    return authStore.login(username, password)
        .catch(error => setErrors({ apiError: error }));
}
</script>

<template>
    <div class="flex items-center justify-center h-screen">
        <Form class="max-w " @submit="onSubmit" :validation-schema="schema" v-slot="{ errors, isSubmitting }">
            <div class="mb-5">
                <label for="email" class="block mb-2 text-m font-medium text-gray-900">Usuario</label>
                <Field name="username" type="text" class="bg-gray-50 border border-gray-300 text-gray-900 block w-full p-2" :class="{ 'is-invalid': errors.username }" />
                <div class="invalid-feedback">{{errors.username}}</div>
            </div>            
            <div class=" mb-5">
                <label>Password</label>
                <Field name="password" type="password" class="bg-gray-50 border border-gray-300 text-gray-900 block w-full p-2" :class="{ 'is-invalid': errors.password }" />
                <div class="invalid-feedback">{{errors.password}}</div>
            </div>            
            <div class="mb-6">
                <button class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full p-2.5 " :disabled="isSubmitting">
                    <span v-show="isSubmitting" class="spinner-border spinner-border-sm mr-1"></span>
                    Login
                </button>
            </div>
            <div v-if="errors.apiError" class="alert alert-danger mt-3 mb-0">{{errors.apiError}}</div>
        </Form>
    </div>
</template>
