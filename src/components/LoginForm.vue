<script setup lang="ts">
import {computed, ref, watch} from "vue";

const emit = defineEmits([
    'update:user',
    'update:password',
    'update:passwordConfirm',
]);

const props = withDefaults(defineProps<{
    user: string,
    password: string,
    passwordConfirm: string,
    resource: string,

    userLabel: string,
    passwordLabel: string,
    passwordConfirmLabel: string,

    buttonText: string,

    formClass: string,

    notEmailUser: boolean
    addPasswordConfirm: boolean

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
    user: '',
    password: '',
    passwordConfirm: '',
    userLabel: '',
    passwordLabel: '',
    passwordConfirmLabel: '',
    buttonText: '',
    notEmailUser: false,
    addPasswordConfirm: false,

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

const userVal = ref(props.user),
    passwordVal = ref(props.password),
    passwordConfirmVal = ref(props.passwordConfirm);

const validUser = ref(false),
    validPassword = ref(false),
    validPasswordConfirm = ref(false);

const disabledButton = computed(() => {
    if (!validUser.value || !validPassword.value) return true;
    if (props.addPasswordConfirm && !validPasswordConfirm.value) return true;
    return false;
})

watch(() => props.user, (v) => userVal.value = v);
watch(() => props.password, (v) => passwordVal.value = v);
watch(() => props.passwordConfirm, (v) => passwordConfirmVal.value = v);

watch(userVal, (v) => emit('update:user', v));
watch(passwordVal, (v) => emit('update:password', v));
watch(passwordConfirmVal, (v) => emit('update:passwordConfirm', v));

const computedResourceData = computed(() => {
    return {
        user: userVal.value,
        password: passwordVal.value
    };
})
</script>

<template>
    <div class="lkt-login-form" :class="formClass">
        <lkt-field-text
            v-model="userVal"
            v-model:valid="validUser"
            :label="userLabel"
            label-icon="icon-user-o"
            mandatory
            auto-validation
        />
        <lkt-field-text
            v-model="passwordVal"
            v-model:valid="validPassword"
            :label="passwordLabel"
            label-icon="icon-key2"
            mandatory
            is-password
            auto-validation
            :min-numbers="minPasswordNumbers"
            :min-chars="minPasswordChars"
            :min-upper-chars="minPasswordUpperChars"
            :min-lower-chars="minPasswordLowerChars"
            :min-special-chars="minPasswordSpecialChars"
            :max-numbers="maxPasswordNumbers"
            :max-chars="maxPasswordChars"
            :max-upper-chars="maxPasswordUpperChars"
            :max-lower-chars="maxPasswordLowerChars"
            :max-special-chars="maxPasswordSpecialChars"
            :check-equal-to="addPasswordConfirm ? passwordConfirmVal : undefined"
        />
        <lkt-field-text
            v-if="addPasswordConfirm"
            v-model="passwordConfirmVal"
            v-model:valid="validPasswordConfirm"
            :label="passwordConfirmLabel"
            label-icon="icon-key2"
            mandatory
            is-password
            auto-validation
            :min-numbers="minPasswordNumbers"
            :min-chars="minPasswordChars"
            :min-upper-chars="minPasswordUpperChars"
            :min-lower-chars="minPasswordLowerChars"
            :min-special-chars="minPasswordSpecialChars"
            :max-numbers="maxPasswordNumbers"
            :max-chars="maxPasswordChars"
            :max-upper-chars="maxPasswordUpperChars"
            :max-lower-chars="maxPasswordLowerChars"
            :max-special-chars="maxPasswordSpecialChars"
            :check-equal-to="passwordVal"
        />
    </div>

    <div class="lkt-login-form-nav">
        <lkt-button
            :text="buttonText"
            :disabled="disabledButton"
            :resource="resource"
            :resource-data="computedResourceData"
        />
    </div>
</template>

<style scoped>

</style>