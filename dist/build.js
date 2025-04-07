var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
var _a, _b;
import { defineComponent, mergeDefaults, useSlots, resolveComponent, createElementBlock, openBlock, createBlock, createCommentVNode, resolveDynamicComponent, normalizeClass, withCtx, createElementVNode, normalizeProps, mergeProps, Fragment, renderList } from "vue";
import "lkt-string-tools";
import "lkt-i18n";
var Q = ((d) => (d.Button = "button", d.Submit = "submit", d.Reset = "reset", d.Anchor = "anchor", d.Content = "content", d.Switch = "switch", d.HiddenSwitch = "hidden-switch", d.Split = "split", d.SplitLazy = "split-lazy", d.SplitEver = "split-ever", d.Tooltip = "tooltip", d.TooltipLazy = "tooltip-lazy", d.TooltipEver = "tooltip-ever", d.FileUpload = "file-upload", d.ImageUpload = "image-upload", d))(Q || {});
var Y = ((s) => (s.Text = "text", s.Email = "email", s.Tel = "tel", s.Password = "password", s.Search = "search", s.Number = "number", s.Color = "color", s.Range = "range", s.Textarea = "textarea", s.Html = "html", s.Date = "date", s.File = "file", s.Image = "image", s.Select = "select", s.Check = "check", s.Switch = "switch", s.Calc = "calc", s.Card = "card", s.Elements = "elements", s))(Y || {});
var qt = ["lktDateProps", "lktStrictItem", "lktExcludedProps"], a = (_a = class {
  constructor(t) {
  }
  feed(t = {}, o = this) {
    if (typeof t == "object") for (let [r, i] of Object.entries(t)) o.assignProp(r, i);
  }
  assignProp(t, o) {
    if (!(qt.includes(t) || _a.lktExcludedProps.includes(t)) && true) {
      if (_a.lktDateProps.includes(t)) {
        this[t] = new Date(o);
        return;
      }
      this[t] = o;
    }
  }
}, __publicField(_a, "lktAllowUndefinedProps", []), __publicField(_a, "lktExcludedProps", []), __publicField(_a, "lktDateProps", []), __publicField(_a, "lktStrictItem", false), __publicField(_a, "lktDefaultValues", []), _a);
var J = ((i) => (i.Auto = "auto", i.Always = "always", i.Lazy = "lazy", i.Ever = "ever", i))(J || {});
var Z = ((r) => (r.Transform = "transform", r.Height = "height", r.Display = "display", r))(Z || {});
var _ = ((g) => (g.Href = "href", g.RouterLink = "router-link", g.RouterLinkBack = "router-link-back", g.Mail = "mail", g.Tel = "tel", g.Tab = "tab", g.Download = "download", g.Action = "action", g.Legacy = "", g))(_ || {});
var tt = ((i) => (i.None = "", i.Field = "field", i.Button = "button", i.Anchor = "anchor", i))(tt || {});
var et = ((l) => (l.A0 = "a0", l.A1 = "a1", l.A2 = "a2", l.A3 = "a3", l.A4 = "a4", l.A5 = "a5", l.A6 = "a6", l.A7 = "a7", l.A8 = "a8", l.A9 = "a9", l))(et || {});
var ot = ((r) => (r.List = "list", r.Inline = "inline", r.Count = "count", r))(ot || {});
var rt = ((f) => (f.MinStringLength = "min-str", f.MinNumber = "min-num", f.MaxStringLength = "max-str", f.MaxNumber = "max-num", f.Email = "email", f.Empty = "empty", f.EqualTo = "equal-to", f.MinNumbers = "min-numbers", f.MaxNumbers = "max-numbers", f.MinChars = "min-chars", f.MaxChars = "max-chars", f.MinUpperChars = "min-upper-chars", f.MaxUpperChars = "max-upper-chars", f.MinLowerChars = "min-lower-chars", f.MaxLowerChars = "max-lower-chars", f.MinSpecialChars = "min-special-chars", f.MaxSpecialChars = "max-special-chars", f))(rt || {});
var at = ((r) => (r.Ok = "ok", r.Ko = "ko", r.Info = "info", r))(at || {});
var it = ((m) => (m.H1 = "h1", m.H2 = "h2", m.H3 = "h3", m.H4 = "h4", m.H5 = "h5", m.H6 = "h6", m))(it || {});
var nt = ((o) => (o.NotDefined = "", o.Button = "button", o))(nt || {});
var lt = ((o) => (o.Start = "start", o.End = "end", o))(lt || {});
var st = ((r) => (r.Create = "create", r.Update = "update", r.Read = "read", r))(st || {});
var ft = ((o) => (o.Inline = "inline", o.Modal = "modal", o))(ft || {});
var ut = ((o) => (o.Top = "top", o.Bottom = "bottom", o))(ut || {});
var dt = ((r) => (r.Changed = "changed", r.Always = "always", r.Never = "never", r))(dt || {});
var mt = ((r) => (r.Manual = "manual", r.Auto = "auto", r.Delay = "delay", r))(mt || {});
var ct = ((o) => (o.Toast = "toast", o.Inline = "inline", o))(ct || {});
var A = (_b = class extends a {
  constructor(t = {}) {
    super();
    __publicField(this, "loginForm");
    __publicField(this, "singUpForm");
    this.feed(t);
  }
}, __publicField(_b, "lktDefaultValues", ["loginForm", "singUpForm"]), _b);
var pt = ((r) => (r.Anchor = "anchor", r.Button = "button", r.Entry = "entry", r))(pt || {});
var gt = ((o) => (o.Modal = "modal", o.Confirm = "confirm", o))(gt || {});
var Ct = ((m) => (m.Pages = "pages", m.PrevNext = "prev-next", m.PagesPrevNext = "pages-prev-next", m.PagesPrevNextFirstLast = "pages-prev-next-first-last", m.LoadMore = "load-more", m.Infinite = "infinite", m))(Ct || {});
var xt = ((r) => (r.None = "", r.Incremental = "incremental", r.Decremental = "decremental", r))(xt || {});
var bt = ((n) => (n.NotDefined = "", n.Hidden = "hidden", n.Integer = "integer", n.Decimal = "decimal", n.Auto = "auto", n))(bt || {});
var ht = ((n) => (n.Table = "table", n.Item = "item", n.Ul = "ul", n.Ol = "ol", n.Carousel = "carousel", n))(ht || {});
var kt = ((i) => (i[i.Auto = 0] = "Auto", i[i.PreferItem = 1] = "PreferItem", i[i.PreferCustomItem = 2] = "PreferCustomItem", i[i.PreferColumns = 3] = "PreferColumns", i))(kt || {});
var yt = ((o) => (o.NotDefined = "", o.ActionIcon = "action-icon", o))(yt || {});
var Lt = ((o) => (o.Message = "message", o.Button = "button", o))(Lt || {});
var Bt = ((r) => (r.Left = "left", r.Center = "center", r.Right = "right", r))(Bt || {});
var It = ((o) => (o.Fixed = "fixed", o.Absolute = "absolute", o))(It || {});
var Mt = ((i) => (i.Top = "top", i.Bottom = "bottom", i.Center = "center", i.ReferrerCenter = "referrer-center", i))(Mt || {});
var Vt = ((n) => (n.Left = "left", n.Right = "right", n.Center = "center", n.LeftCorner = "left-corner", n.RightCorner = "right-corner", n))(Vt || {});
var Et = ((c) => (c.LktAnchor = "lkt-anchor", c.LktLayoutAccordion = "lkt-layout-accordion", c.LktTextAccordion = "lkt-text-accordion", c.LktLayoutBox = "lkt-layout-box", c.LktTextBox = "lkt-text-box", c.LktButton = "lkt-button", c.LktLayout = "lkt-layout", c.LktHeader = "lkt-header", c.LktIcon = "lkt-icon", c.LktImage = "lkt-image", c.LktText = "lkt-text", c))(Et || {});
var Dt = ((i) => (i.Grid = "grid", i.FlexRow = "flex-row", i.FlexRows = "flex-rows", i.FlexColumn = "flex-column", i))(Dt || {});
var St = ((i) => (i.None = "", i.Focus = "focus", i.Blur = "blur", i.Always = "always", i))(St || {});
var vt = ((r) => (r.Auto = "auto", r.Local = "local", r.Remote = "remote", r))(vt || {});
var Tt = ((n) => (n.StorageUnit = "unit", n.Directory = "dir", n.Image = "img", n.Video = "vid", n.File = "file", n))(Tt || {});
var Ot = ((n) => (n.Refresh = "refresh", n.Close = "close", n.ReOpen = "reOpen", n.Exec = "exec", n.Open = "open", n))(Ot || {});
var Ft = ((o) => (o.Asc = "asc", o.Desc = "desc", o))(Ft || {});
var wt = ((l) => (l.Create = "create", l.Update = "update", l.Edit = "edit", l.Drop = "drop", l.Sort = "sort", l.SwitchEditMode = "switch-edit-mode", l.InlineEdit = "inline-edit", l.InlineCreate = "inline-create", l.ModalCreate = "modal-create", l.InlineCreateEver = "inline-create-ever", l))(wt || {});
var At = ((o) => (o.Lazy = "lazy", o.Ever = "ever", o))(At || {});
var jt = ((o) => (o.Quick = "quick", o.Full = "full", o))(jt || {});
function Lr(e) {
  let t = new e(), o = {};
  if (!Array.isArray(e.lktDefaultValues)) throw new Error("lktDefaultValues must be a keys array.");
  for (let r of e.lktDefaultValues) r in t && (o[r] = t[r]);
  return o;
}
const _hoisted_1 = { class: "lkt-login" };
const _hoisted_2 = { class: "lkt-grid-1" };
const _hoisted_3 = { class: "lkt-grid-1" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "LktLogin",
  props: /* @__PURE__ */ mergeDefaults({
    loginForm: {},
    singUpForm: {}
  }, Lr(A)),
  setup(__props) {
    useSlots();
    return (_ctx, _cache) => {
      var _a2, _b2, _c, _d, _e, _f;
      const _component_lkt_header = resolveComponent("lkt-header");
      const _component_lkt_field = resolveComponent("lkt-field");
      const _component_lkt_button = resolveComponent("lkt-button");
      return openBlock(), createElementBlock("div", _hoisted_1, [
        _ctx.loginForm ? (openBlock(), createBlock(resolveDynamicComponent((_b2 = (_a2 = _ctx.loginForm.container) == null ? void 0 : _a2.tag) != null ? _b2 : "section"), {
          key: 0,
          class: normalizeClass(["lkt-form-container", (_c = _ctx.loginForm.container) == null ? void 0 : _c.class])
        }, {
          default: withCtx(() => [
            createElementVNode("form", _hoisted_2, [
              _ctx.loginForm.header ? (openBlock(), createBlock(_component_lkt_header, normalizeProps(mergeProps({ key: 0 }, _ctx.loginForm.header)), null, 16)) : createCommentVNode("", true),
              (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.loginForm.fields, (field) => {
                return openBlock(), createBlock(_component_lkt_field, mergeProps({
                  modelValue: _ctx.loginForm.modelValue[field.key],
                  "onUpdate:modelValue": ($event) => _ctx.loginForm.modelValue[field.key] = $event,
                  ref_for: true
                }, field.field), null, 16, ["modelValue", "onUpdate:modelValue"]);
              }), 256)),
              _ctx.loginForm.submitButton ? (openBlock(), createBlock(_component_lkt_button, normalizeProps(mergeProps({ key: 1 }, _ctx.loginForm.submitButton)), null, 16)) : createCommentVNode("", true)
            ])
          ]),
          _: 1
        }, 8, ["class"])) : createCommentVNode("", true),
        _ctx.singUpForm ? (openBlock(), createBlock(resolveDynamicComponent((_e = (_d = _ctx.singUpForm.container) == null ? void 0 : _d.tag) != null ? _e : "section"), {
          key: 1,
          class: normalizeClass(["lkt-form-container", (_f = _ctx.singUpForm.container) == null ? void 0 : _f.class])
        }, {
          default: withCtx(() => [
            createElementVNode("form", _hoisted_3, [
              _ctx.singUpForm.header ? (openBlock(), createBlock(_component_lkt_header, normalizeProps(mergeProps({ key: 0 }, _ctx.singUpForm.header)), null, 16)) : createCommentVNode("", true),
              (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.singUpForm.fields, (field) => {
                return openBlock(), createBlock(_component_lkt_field, mergeProps({
                  modelValue: _ctx.singUpForm.modelValue[field.key],
                  "onUpdate:modelValue": ($event) => _ctx.singUpForm.modelValue[field.key] = $event,
                  ref_for: true
                }, field.field), null, 16, ["modelValue", "onUpdate:modelValue"]);
              }), 256)),
              _ctx.singUpForm.submitButton ? (openBlock(), createBlock(_component_lkt_button, normalizeProps(mergeProps({ key: 1 }, _ctx.singUpForm.submitButton)), null, 16)) : createCommentVNode("", true)
            ])
          ]),
          _: 1
        }, 8, ["class"])) : createCommentVNode("", true)
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
