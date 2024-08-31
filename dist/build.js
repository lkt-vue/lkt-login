import { defineComponent, ref, computed, watch, resolveComponent, openBlock, createElementBlock, Fragment, createElementVNode, normalizeClass, createVNode, createBlock, createCommentVNode, useSlots, withCtx, resolveDynamicComponent } from "vue";
const _hoisted_1$1 = { class: "lkt-login-form-nav" };
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "LoginForm",
  props: {
    user: { default: "" },
    password: { default: "" },
    passwordConfirm: { default: "" },
    resource: {},
    userLabel: { default: "" },
    passwordLabel: { default: "" },
    passwordConfirmLabel: { default: "" },
    buttonText: { default: "" },
    formClass: {},
    notEmailUser: { type: Boolean, default: false },
    addPasswordConfirm: { type: Boolean, default: false },
    minPasswordNumbers: { default: void 0 },
    maxPasswordNumbers: { default: void 0 },
    minPasswordChars: { default: void 0 },
    maxPasswordChars: { default: void 0 },
    minPasswordUpperChars: { default: void 0 },
    maxPasswordUpperChars: { default: void 0 },
    minPasswordLowerChars: { default: void 0 },
    maxPasswordLowerChars: { default: void 0 },
    minPasswordSpecialChars: { default: void 0 },
    maxPasswordSpecialChars: { default: void 0 }
  },
  emits: [
    "update:user",
    "update:password",
    "update:passwordConfirm"
  ],
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    const props = __props;
    const userVal = ref(props.user), passwordVal = ref(props.password), passwordConfirmVal = ref(props.passwordConfirm);
    const validUser = ref(false), validPassword = ref(false), validPasswordConfirm = ref(false);
    const disabledButton = computed(() => {
      if (!validUser.value || !validPassword.value) return true;
      if (props.addPasswordConfirm && !validPasswordConfirm.value) return true;
      return false;
    });
    watch(() => props.user, (v) => userVal.value = v);
    watch(() => props.password, (v) => passwordVal.value = v);
    watch(() => props.passwordConfirm, (v) => passwordConfirmVal.value = v);
    watch(userVal, (v) => emit("update:user", v));
    watch(passwordVal, (v) => emit("update:password", v));
    watch(passwordConfirmVal, (v) => emit("update:passwordConfirm", v));
    const computedResourceData = computed(() => {
      return {
        user: userVal.value,
        password: passwordVal.value
      };
    });
    return (_ctx, _cache) => {
      const _component_lkt_field_text = resolveComponent("lkt-field-text");
      const _component_lkt_button = resolveComponent("lkt-button");
      return openBlock(), createElementBlock(Fragment, null, [
        createElementVNode("div", {
          class: normalizeClass(["lkt-login-form", _ctx.formClass])
        }, [
          createVNode(_component_lkt_field_text, {
            modelValue: userVal.value,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => userVal.value = $event),
            valid: validUser.value,
            "onUpdate:valid": _cache[1] || (_cache[1] = ($event) => validUser.value = $event),
            label: _ctx.userLabel,
            "label-icon": "icon-user-o",
            mandatory: "",
            "auto-validation": ""
          }, null, 8, ["modelValue", "valid", "label"]),
          createVNode(_component_lkt_field_text, {
            modelValue: passwordVal.value,
            "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => passwordVal.value = $event),
            valid: validPassword.value,
            "onUpdate:valid": _cache[3] || (_cache[3] = ($event) => validPassword.value = $event),
            label: _ctx.passwordLabel,
            "label-icon": "icon-key2",
            mandatory: "",
            "is-password": "",
            "auto-validation": "",
            "min-numbers": _ctx.minPasswordNumbers,
            "min-chars": _ctx.minPasswordChars,
            "min-upper-chars": _ctx.minPasswordUpperChars,
            "min-lower-chars": _ctx.minPasswordLowerChars,
            "min-special-chars": _ctx.minPasswordSpecialChars,
            "max-numbers": _ctx.maxPasswordNumbers,
            "max-chars": _ctx.maxPasswordChars,
            "max-upper-chars": _ctx.maxPasswordUpperChars,
            "max-lower-chars": _ctx.maxPasswordLowerChars,
            "max-special-chars": _ctx.maxPasswordSpecialChars,
            "check-equal-to": _ctx.addPasswordConfirm ? passwordConfirmVal.value : void 0
          }, null, 8, ["modelValue", "valid", "label", "min-numbers", "min-chars", "min-upper-chars", "min-lower-chars", "min-special-chars", "max-numbers", "max-chars", "max-upper-chars", "max-lower-chars", "max-special-chars", "check-equal-to"]),
          _ctx.addPasswordConfirm ? (openBlock(), createBlock(_component_lkt_field_text, {
            key: 0,
            modelValue: passwordConfirmVal.value,
            "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => passwordConfirmVal.value = $event),
            valid: validPasswordConfirm.value,
            "onUpdate:valid": _cache[5] || (_cache[5] = ($event) => validPasswordConfirm.value = $event),
            label: _ctx.passwordConfirmLabel,
            "label-icon": "icon-key2",
            mandatory: "",
            "is-password": "",
            "auto-validation": "",
            "min-numbers": _ctx.minPasswordNumbers,
            "min-chars": _ctx.minPasswordChars,
            "min-upper-chars": _ctx.minPasswordUpperChars,
            "min-lower-chars": _ctx.minPasswordLowerChars,
            "min-special-chars": _ctx.minPasswordSpecialChars,
            "max-numbers": _ctx.maxPasswordNumbers,
            "max-chars": _ctx.maxPasswordChars,
            "max-upper-chars": _ctx.maxPasswordUpperChars,
            "max-lower-chars": _ctx.maxPasswordLowerChars,
            "max-special-chars": _ctx.maxPasswordSpecialChars,
            "check-equal-to": passwordVal.value
          }, null, 8, ["modelValue", "valid", "label", "min-numbers", "min-chars", "min-upper-chars", "min-lower-chars", "min-special-chars", "max-numbers", "max-chars", "max-upper-chars", "max-lower-chars", "max-special-chars", "check-equal-to"])) : createCommentVNode("", true)
        ], 2),
        createElementVNode("div", _hoisted_1$1, [
          createVNode(_component_lkt_button, {
            text: _ctx.buttonText,
            disabled: disabledButton.value,
            resource: _ctx.resource,
            "resource-data": computedResourceData.value
          }, null, 8, ["text", "disabled", "resource", "resource-data"])
        ])
      ], 64);
    };
  }
});
const _hoisted_1 = { class: "lkt-login" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "LktLogin",
  props: {
    loginResource: { default: "" },
    singUpResource: { default: "" },
    userLabel: { default: "" },
    passwordLabel: { default: "" },
    passwordConfirmLabel: { default: "" },
    loginButtonText: { default: "" },
    singUpButtonText: { default: "" },
    loginFormComponent: { default: "section" },
    loginFormClass: {},
    loginFormInnerClass: {},
    singUpFormComponent: { default: "section" },
    singUpFormClass: {},
    singUpFormInnerClass: {},
    loginTitle: { default: "" },
    singUpTitle: { default: "" },
    notEmailUser: { type: Boolean, default: false },
    minPasswordNumbers: { default: void 0 },
    maxPasswordNumbers: { default: void 0 },
    minPasswordChars: { default: void 0 },
    maxPasswordChars: { default: void 0 },
    minPasswordUpperChars: { default: void 0 },
    maxPasswordUpperChars: { default: void 0 },
    minPasswordLowerChars: { default: void 0 },
    maxPasswordLowerChars: { default: void 0 },
    minPasswordSpecialChars: { default: void 0 },
    maxPasswordSpecialChars: { default: void 0 }
  },
  emits: [],
  setup(__props, { emit: __emit }) {
    useSlots();
    const loginUser = ref(""), loginPassword = ref("");
    const singUpUser = ref(""), singUpPassword = ref(""), singUpPasswordConfirm = ref("");
    return (_ctx, _cache) => {
      const _component_lkt_box = resolveComponent("lkt-box");
      return openBlock(), createElementBlock("div", _hoisted_1, [
        _ctx.loginFormComponent === "lkt-box" ? (openBlock(), createBlock(_component_lkt_box, {
          key: 0,
          title: _ctx.loginTitle,
          class: normalizeClass(["lkt-form-container", _ctx.loginFormClass])
        }, {
          default: withCtx(() => [
            createVNode(_sfc_main$1, {
              user: loginUser.value,
              "onUpdate:user": _cache[0] || (_cache[0] = ($event) => loginUser.value = $event),
              password: loginPassword.value,
              "onUpdate:password": _cache[1] || (_cache[1] = ($event) => loginPassword.value = $event),
              "user-label": _ctx.userLabel,
              "password-label": _ctx.passwordLabel,
              "password-confirm-label": _ctx.passwordConfirmLabel,
              "button-text": _ctx.loginButtonText,
              "form-class": _ctx.loginFormInnerClass,
              resource: _ctx.loginResource
            }, null, 8, ["user", "password", "user-label", "password-label", "password-confirm-label", "button-text", "form-class", "resource"])
          ]),
          _: 1
        }, 8, ["title", "class"])) : (openBlock(), createBlock(resolveDynamicComponent(_ctx.loginFormComponent), {
          key: 1,
          class: normalizeClass(["lkt-form-container", _ctx.loginFormClass])
        }, {
          default: withCtx(() => [
            createVNode(_sfc_main$1, {
              user: loginUser.value,
              "onUpdate:user": _cache[2] || (_cache[2] = ($event) => loginUser.value = $event),
              password: loginPassword.value,
              "onUpdate:password": _cache[3] || (_cache[3] = ($event) => loginPassword.value = $event),
              "user-label": _ctx.userLabel,
              "password-label": _ctx.passwordLabel,
              "password-confirm-label": _ctx.passwordConfirmLabel,
              "button-text": _ctx.loginButtonText,
              "form-class": _ctx.loginFormInnerClass,
              resource: _ctx.loginResource
            }, null, 8, ["user", "password", "user-label", "password-label", "password-confirm-label", "button-text", "form-class", "resource"])
          ]),
          _: 1
        }, 8, ["class"])),
        _ctx.singUpFormComponent === "lkt-box" ? (openBlock(), createBlock(_component_lkt_box, {
          key: 2,
          title: _ctx.singUpTitle,
          class: normalizeClass(["lkt-form-container", _ctx.singUpFormClass])
        }, {
          default: withCtx(() => [
            createVNode(_sfc_main$1, {
              user: singUpUser.value,
              "onUpdate:user": _cache[4] || (_cache[4] = ($event) => singUpUser.value = $event),
              password: singUpPassword.value,
              "onUpdate:password": _cache[5] || (_cache[5] = ($event) => singUpPassword.value = $event),
              "password-confirm": singUpPasswordConfirm.value,
              "onUpdate:passwordConfirm": _cache[6] || (_cache[6] = ($event) => singUpPasswordConfirm.value = $event),
              "user-label": _ctx.userLabel,
              "password-label": _ctx.passwordLabel,
              "password-confirm-label": _ctx.passwordConfirmLabel,
              "button-text": _ctx.singUpButtonText,
              "form-class": _ctx.singUpFormInnerClass,
              "add-password-confirm": "",
              resource: _ctx.singUpResource
            }, null, 8, ["user", "password", "password-confirm", "user-label", "password-label", "password-confirm-label", "button-text", "form-class", "resource"])
          ]),
          _: 1
        }, 8, ["title", "class"])) : (openBlock(), createBlock(resolveDynamicComponent(_ctx.singUpFormComponent), {
          key: 3,
          class: normalizeClass(["lkt-form-container", _ctx.singUpFormClass])
        }, {
          default: withCtx(() => [
            createVNode(_sfc_main$1, {
              user: singUpUser.value,
              "onUpdate:user": _cache[7] || (_cache[7] = ($event) => singUpUser.value = $event),
              password: singUpPassword.value,
              "onUpdate:password": _cache[8] || (_cache[8] = ($event) => singUpPassword.value = $event),
              "password-confirm": singUpPasswordConfirm.value,
              "onUpdate:passwordConfirm": _cache[9] || (_cache[9] = ($event) => singUpPasswordConfirm.value = $event),
              "user-label": _ctx.userLabel,
              "password-label": _ctx.passwordLabel,
              "password-confirm-label": _ctx.passwordConfirmLabel,
              "button-text": _ctx.singUpButtonText,
              "form-class": _ctx.singUpFormInnerClass,
              "add-password-confirm": "",
              resource: _ctx.singUpResource
            }, null, 8, ["user", "password", "password-confirm", "user-label", "password-label", "password-confirm-label", "button-text", "form-class", "resource"])
          ]),
          _: 1
        }, 8, ["class"]))
      ]);
    };
  }
});
const LktLogin = {
  install: (app) => {
    if (app.component("lkt-login") === void 0) app.component("lkt-login", _sfc_main);
  }
};
export {
  LktLogin as default
};
