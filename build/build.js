import { defineComponent, openBlock, createElementBlock, createElementVNode } from "vue";
const _hoisted_1 = { class: "lkt-grid-3" };
const _hoisted_2 = /* @__PURE__ */ createElementVNode("div", { class: "lkt-grid-1" }, "social login", -1);
const _hoisted_3 = /* @__PURE__ */ createElementVNode("div", { class: "lkt-grid-1" }, "app login", -1);
const _hoisted_4 = /* @__PURE__ */ createElementVNode("div", { class: "lkt-grid-1" }, "register", -1);
const _hoisted_5 = [
  _hoisted_2,
  _hoisted_3,
  _hoisted_4
];
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "LktLogin",
  props: {
    loginResource: { default: "" },
    singUpResource: { default: "" }
  },
  emits: [],
  setup(__props, { emit: __emit }) {
    useSlots();
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, _hoisted_5);
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
