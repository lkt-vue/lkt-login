<script setup lang="ts">
import {useSlots} from "vue";
import {getDefaultValues, Login, LoginConfig} from "lkt-vue-kernel";

// Slots
const slots = useSlots();

// Props
const props = withDefaults(defineProps<LoginConfig>(), getDefaultValues(Login));
</script>

<template>
    <div class="lkt-login">
        <component
            v-if="loginForm"
            :is="loginForm.container?.tag ?? 'section'"
            class="lkt-form-container"
            :class="loginForm.container?.class">
            <form class="lkt-grid-1">
                <lkt-header v-if="loginForm.header" v-bind="loginForm.header"/>

                <lkt-field
                    v-for="field in loginForm.fields"
                    v-model="loginForm.modelValue[field.key]"
                    v-bind="field.field"
                />

                <lkt-button
                    v-if="loginForm.submitButton"
                    v-bind="loginForm.submitButton"
                />
            </form>
        </component>

        <component
            v-if="singUpForm"
            :is="singUpForm.container?.tag ?? 'section'"
            class="lkt-form-container"
            :class="singUpForm.container?.class">
            <form class="lkt-grid-1">
                <lkt-header v-if="singUpForm.header" v-bind="singUpForm.header"/>

                <lkt-field
                    v-for="field in singUpForm.fields"
                    v-model="singUpForm.modelValue[field.key]"
                    v-bind="field.field"
                />

                <lkt-button
                    v-if="singUpForm.submitButton"
                    v-bind="singUpForm.submitButton"
                />
            </form>
        </component>
    </div>
</template>