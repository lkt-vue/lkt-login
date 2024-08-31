<script setup lang="ts">
import {ref, useSlots} from "vue";
import LoginForm from "../components/LoginForm.vue";

const emits = defineEmits([]);

// Slots
const slots = useSlots();

// Props
const props = withDefaults(defineProps<{
    loginResource: string,
    singUpResource: string,

    userLabel: string,
    passwordLabel: string,
    passwordConfirmLabel: string,

    loginButtonText: string,
    singUpButtonText: string,

    loginFormComponent: string,
    loginFormClass: string,
    loginFormInnerClass: string,
    singUpFormComponent: string,
    singUpFormClass: string,
    singUpFormInnerClass: string,

    loginTitle: string,
    singUpTitle: string,

    notEmailUser: boolean

    minPasswordNumbers: number|string|undefined,
    maxPasswordNumbers: number|string|undefined,
    minPasswordChars: number|string|undefined,
    maxPasswordChars: number|string|undefined,
    minPasswordUpperChars: number|string|undefined,
    maxPasswordUpperChars: number|string|undefined,
    minPasswordLowerChars: number|string|undefined,
    maxPasswordLowerChars: number|string|undefined,
    minPasswordSpecialChars: number|string|undefined,
    maxPasswordSpecialChars: number|string|undefined,

}>(), {
    loginResource: '',
    singUpResource: '',
    userLabel: '',
    passwordLabel: '',
    passwordConfirmLabel: '',
    loginButtonText: '',
    singUpButtonText: '',
    loginFormComponent: 'section',
    singUpFormComponent: 'section',
    loginTitle: '',
    singUpTitle: '',
    notEmailUser: false,

    minPasswordNumbers: undefined,
    maxPasswordNumbers: undefined,
    minPasswordChars: undefined,
    maxPasswordChars: undefined,
    minPasswordUpperChars: undefined,
    maxPasswordUpperChars: undefined,
    minPasswordLowerChars: undefined,
    maxPasswordLowerChars: undefined,
    minPasswordSpecialChars: undefined,
    maxPasswordSpecialChars: undefined,
});

const loginUser = ref(''),
    loginPassword = ref('');


const singUpUser = ref(''),
    singUpPassword = ref(''),
    singUpPasswordConfirm = ref('');


</script>

<template>
<div class="lkt-login">
    <lkt-box
        v-if="loginFormComponent === 'lkt-box'"
        :title="loginTitle"
        class="lkt-form-container"
        :class="loginFormClass">
        <login-form
            v-model:user="loginUser"
            v-model:password="loginPassword"
            :user-label="userLabel"
            :password-label="passwordLabel"
            :password-confirm-label="passwordConfirmLabel"
            :button-text="loginButtonText"
            :form-class="loginFormInnerClass"
            :resource="loginResource"
        />
    </lkt-box>
    <component v-else :is="loginFormComponent" class="lkt-form-container"
               :class="loginFormClass">
        <login-form
            v-model:user="loginUser"
            v-model:password="loginPassword"
            :user-label="userLabel"
            :password-label="passwordLabel"
            :password-confirm-label="passwordConfirmLabel"
            :button-text="loginButtonText"
            :form-class="loginFormInnerClass"
            :resource="loginResource"
        />
    </component>

    <lkt-box
        v-if="singUpFormComponent === 'lkt-box'"
        :title="singUpTitle"
        class="lkt-form-container"
        :class="singUpFormClass">
        <login-form
            v-model:user="singUpUser"
            v-model:password="singUpPassword"
            v-model:password-confirm="singUpPasswordConfirm"
            :user-label="userLabel"
            :password-label="passwordLabel"
            :password-confirm-label="passwordConfirmLabel"
            :button-text="singUpButtonText"
            :form-class="singUpFormInnerClass"
            add-password-confirm
            :resource="singUpResource"
        />
    </lkt-box>
    <component v-else :is="singUpFormComponent" class="lkt-form-container"
               :class="singUpFormClass">
        <login-form
            v-model:user="singUpUser"
            v-model:password="singUpPassword"
            v-model:password-confirm="singUpPasswordConfirm"
            :user-label="userLabel"
            :password-label="passwordLabel"
            :password-confirm-label="passwordConfirmLabel"
            :button-text="singUpButtonText"
            :form-class="singUpFormInnerClass"
            add-password-confirm
            :resource="singUpResource"
        />
    </component>
</div>
</template>

<style scoped>

</style>