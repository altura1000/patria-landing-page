/* @ds-bundle: {"format":4,"namespace":"PATRIADesignSystem_5cb717","components":[{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Eyebrow","sourcePath":"components/core/Eyebrow.jsx"},{"name":"FLAVOUR_COLORS","sourcePath":"components/core/FlavourDot.jsx"},{"name":"FlavourDot","sourcePath":"components/core/FlavourDot.jsx"},{"name":"Rule","sourcePath":"components/core/Rule.jsx"},{"name":"Seal","sourcePath":"components/core/Seal.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"Dialog","sourcePath":"components/feedback/Dialog.jsx"},{"name":"EmptyState","sourcePath":"components/feedback/EmptyState.jsx"},{"name":"Toast","sourcePath":"components/feedback/Toast.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"LangSwitch","sourcePath":"components/forms/LangSwitch.jsx"},{"name":"RadioGroup","sourcePath":"components/forms/RadioGroup.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"PhotoBand","sourcePath":"components/layout/PhotoBand.jsx"},{"name":"SectionHeading","sourcePath":"components/layout/SectionHeading.jsx"},{"name":"SiteFooter","sourcePath":"components/layout/SiteFooter.jsx"},{"name":"SiteHeader","sourcePath":"components/layout/SiteHeader.jsx"},{"name":"FlavourStrip","sourcePath":"components/product/FlavourStrip.jsx"},{"name":"PriceTag","sourcePath":"components/product/PriceTag.jsx"},{"name":"ProductCard","sourcePath":"components/product/ProductCard.jsx"},{"name":"QuantityStepper","sourcePath":"components/product/QuantityStepper.jsx"}],"sourceHashes":{"components/core/Badge.jsx":"464d74b3271a","components/core/Button.jsx":"e7ce55117bdc","components/core/Eyebrow.jsx":"9958e3a7707e","components/core/FlavourDot.jsx":"72e5862009fb","components/core/Rule.jsx":"9f55c4e5c9fe","components/core/Seal.jsx":"d169e2bdba9e","components/core/Tag.jsx":"eea841f1380a","components/feedback/Dialog.jsx":"b6cf2bc3a290","components/feedback/EmptyState.jsx":"ab77138c1dae","components/feedback/Toast.jsx":"194741bb173e","components/forms/Checkbox.jsx":"b02dd6e81a8a","components/forms/Input.jsx":"bb010aec49cb","components/forms/LangSwitch.jsx":"3928cf0bff98","components/forms/RadioGroup.jsx":"e3f798f8758f","components/forms/Select.jsx":"9c45052af45c","components/layout/PhotoBand.jsx":"cdd8e7951e48","components/layout/SectionHeading.jsx":"c3f2161003b4","components/layout/SiteFooter.jsx":"3ad79389e1ea","components/layout/SiteHeader.jsx":"be528079a99b","components/product/FlavourStrip.jsx":"b9b123ad66fd","components/product/PriceTag.jsx":"04f507a38a29","components/product/ProductCard.jsx":"ed17d6daa9bd","components/product/QuantityStepper.jsx":"3bf6bf6bf002","ui_kits/mobile/Screens.jsx":"44d70bcdbbec","ui_kits/mobile/copy.js":"2d892194f9de","ui_kits/website/Home.jsx":"74d3a604fa72","ui_kits/website/Pedido.jsx":"a1641dc0847e","ui_kits/website/Producto.jsx":"d5d63912c6aa","ui_kits/website/Sabores.jsx":"8932e506c827","ui_kits/website/data.js":"f2d6672acbd7"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.PATRIADesignSystem_5cb717 = window.PATRIADesignSystem_5cb717 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const tones = {
  dulce: {
    bg: 'var(--dulce-500)',
    fg: 'var(--choc-900)'
  },
  choc: {
    bg: 'var(--choc-700)',
    fg: 'var(--cream-100)'
  },
  blue: {
    bg: 'var(--celeste-700)',
    fg: 'var(--cream-50)'
  },
  cream: {
    bg: 'var(--cream-200)',
    fg: 'var(--choc-700)'
  },
  berry: {
    bg: 'var(--berry)',
    fg: 'var(--cream-50)'
  }
};
function Badge({
  tone = 'dulce',
  children,
  style,
  ...rest
}) {
  const t = tones[tone];
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-block',
      background: t.bg,
      color: t.fg,
      fontFamily: 'var(--font-label)',
      fontSize: '11px',
      fontWeight: 700,
      letterSpacing: '.14em',
      textTransform: 'uppercase',
      padding: '5px 10px',
      borderRadius: 'var(--radius-xs)',
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const base = {
  fontFamily: 'var(--font-label)',
  fontWeight: 600,
  letterSpacing: 'var(--ls-label)',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '8px',
  border: '1px solid transparent',
  borderRadius: 'var(--radius-sm)',
  cursor: 'pointer',
  textDecoration: 'none',
  lineHeight: 1,
  transition: 'background var(--dur-base) var(--ease-standard), color var(--dur-base) var(--ease-standard), border-color var(--dur-base) var(--ease-standard), transform var(--dur-fast) var(--ease-standard)'
};
const sizes = {
  sm: {
    padding: '9px 16px',
    fontSize: '12px'
  },
  md: {
    padding: '13px 24px',
    fontSize: '13px'
  },
  lg: {
    padding: '17px 34px',
    fontSize: '14px'
  }
};
const variants = {
  primary: {
    background: 'var(--choc-700)',
    color: 'var(--cream-100)',
    borderColor: 'var(--choc-700)'
  },
  secondary: {
    background: 'transparent',
    color: 'var(--choc-700)',
    borderColor: 'var(--border-strong)'
  },
  ghost: {
    background: 'transparent',
    color: 'var(--choc-700)',
    borderColor: 'transparent'
  },
  onInk: {
    background: 'var(--cream-100)',
    color: 'var(--choc-800)',
    borderColor: 'var(--cream-100)'
  },
  blue: {
    background: 'var(--celeste-700)',
    color: 'var(--cream-50)',
    borderColor: 'var(--celeste-700)'
  }
};
const hovers = {
  primary: {
    background: 'var(--choc-900)',
    borderColor: 'var(--choc-900)'
  },
  secondary: {
    background: 'rgba(74,42,23,.06)',
    borderColor: 'var(--choc-700)'
  },
  ghost: {
    background: 'rgba(74,42,23,.06)'
  },
  onInk: {
    background: '#fff',
    borderColor: '#fff'
  },
  blue: {
    background: 'var(--navy-900)',
    borderColor: 'var(--navy-900)'
  }
};
function Button({
  variant = 'primary',
  size = 'md',
  uppercase = true,
  disabled = false,
  href,
  icon,
  children,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const [down, setDown] = React.useState(false);
  const Tag = href ? 'a' : 'button';
  const css = {
    ...base,
    ...sizes[size],
    ...variants[variant],
    ...(hover && !disabled ? hovers[variant] : null),
    textTransform: uppercase ? 'uppercase' : 'none',
    opacity: disabled ? 0.45 : 1,
    pointerEvents: disabled ? 'none' : 'auto',
    transform: down ? 'scale(var(--press-scale))' : 'none',
    ...style
  };
  return /*#__PURE__*/React.createElement(Tag, _extends({
    href: href,
    disabled: !href && disabled ? true : undefined,
    style: css,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setDown(false);
    },
    onMouseDown: () => setDown(true),
    onMouseUp: () => setDown(false)
  }, rest), icon, children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Eyebrow.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Eyebrow({
  tone = 'dulce',
  children,
  style,
  ...rest
}) {
  const colors = {
    dulce: 'var(--dulce-600)',
    choc: 'var(--choc-500)',
    blue: 'var(--celeste-700)',
    onInk: 'var(--text-on-ink-muted)'
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      fontFamily: 'var(--font-label)',
      fontSize: 'var(--fs-eyebrow)',
      letterSpacing: 'var(--ls-eyebrow)',
      textTransform: 'uppercase',
      fontWeight: 600,
      color: colors[tone],
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Eyebrow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Eyebrow.jsx", error: String((e && e.message) || e) }); }

// components/core/FlavourDot.jsx
try { (() => {
const FLAVOUR_COLORS = {
  dulce: 'var(--dulce-500)',
  chocolate: 'var(--choc-700)',
  blanco: 'var(--halva)',
  frutosRojos: 'var(--berry)',
  pistacho: 'var(--pistachio)',
  nuez: 'var(--walnut)',
  halva: 'var(--halva)',
  malbec: '#4A1024'
};
function FlavourDot({
  flavour = 'dulce',
  size = 10,
  label,
  style
}) {
  const dot = /*#__PURE__*/React.createElement("span", {
    style: {
      width: size,
      height: size,
      borderRadius: '50%',
      background: FLAVOUR_COLORS[flavour] || flavour,
      display: 'inline-block',
      boxShadow: 'inset 0 0 0 1px rgba(35,19,9,.18)'
    }
  });
  if (!label) return /*#__PURE__*/React.createElement("span", {
    style: style
  }, dot);
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '8px',
      fontSize: 'var(--fs-body-s)',
      color: 'var(--text-muted)',
      ...style
    }
  }, dot, label);
}
Object.assign(__ds_scope, { FLAVOUR_COLORS, FlavourDot });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/FlavourDot.jsx", error: String((e && e.message) || e) }); }

// components/core/Rule.jsx
try { (() => {
function Rule({
  ornament = true,
  tone = 'gold',
  width = '100%',
  style
}) {
  const line = tone === 'gold' ? 'var(--gold-500)' : 'var(--border-hairline)';
  const ink = tone === 'gold' ? 'var(--gold-600)' : 'var(--choc-500)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      width,
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      height: '1px',
      background: line,
      opacity: .7
    }
  }), ornament && /*#__PURE__*/React.createElement("span", {
    style: {
      color: ink,
      fontSize: '11px',
      letterSpacing: '.3em'
    }
  }, "\xB7\xB7\xB7"), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      height: '1px',
      background: line,
      opacity: .7
    }
  }));
}
Object.assign(__ds_scope, { Rule });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Rule.jsx", error: String((e && e.message) || e) }); }

// components/core/Seal.jsx
try { (() => {
function Seal({
  size = 96,
  src = 'assets/logo-emblem-color.jpg',
  rotate = -6,
  shadow = true,
  style
}) {
  return /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: "PATRIA \u2014 Orgullo Argentino",
    width: size,
    height: size,
    style: {
      width: size,
      height: size,
      borderRadius: 'var(--radius-seal)',
      objectFit: 'cover',
      transform: 'rotate(' + rotate + 'deg)',
      boxShadow: shadow ? 'var(--shadow-seal)' : 'none',
      border: '1px solid var(--border-hairline)',
      ...style
    }
  });
}
Object.assign(__ds_scope, { Seal });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Seal.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Tag({
  selected = false,
  onClick,
  children,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("button", _extends({
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: '14px',
      fontWeight: 600,
      cursor: 'pointer',
      padding: '8px 16px',
      borderRadius: 'var(--radius-pill)',
      border: '1px solid ' + (selected ? 'var(--choc-700)' : 'var(--border-hairline)'),
      background: selected ? 'var(--choc-700)' : hover ? 'rgba(74,42,23,.06)' : 'transparent',
      color: selected ? 'var(--cream-100)' : 'var(--choc-700)',
      transition: 'all var(--dur-base) var(--ease-standard)',
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Dialog.jsx
try { (() => {
function Dialog({
  open = true,
  title,
  onClose = () => {},
  children,
  footer,
  width = 440
}) {
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'fixed',
      inset: 0,
      zIndex: 60,
      display: 'grid',
      placeItems: 'center',
      background: 'rgba(35,19,9,.52)',
      padding: '24px'
    },
    onClick: onClose
  }, /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation(),
    style: {
      width: '100%',
      maxWidth: width,
      background: 'var(--surface-card)',
      borderRadius: 'var(--radius-md)',
      boxShadow: 'var(--shadow-lg)',
      border: '1px solid var(--border-hairline)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '22px 24px 0',
      display: 'flex',
      alignItems: 'flex-start',
      gap: '16px'
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: '26px',
      fontWeight: 600,
      margin: 0,
      color: 'var(--text-strong)',
      flex: 1
    }
  }, title), /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    "aria-label": "Cerrar",
    style: {
      background: 'none',
      border: 0,
      cursor: 'pointer',
      fontSize: '20px',
      color: 'var(--text-muted)',
      lineHeight: 1
    }
  }, "\xD7")), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '14px 24px 22px',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--fs-body-m)',
      color: 'var(--text-body)'
    }
  }, children), footer && /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '16px 24px',
      background: 'var(--cream-200)',
      borderBlockStart: '1px solid var(--border-hairline)',
      display: 'flex',
      gap: '12px',
      justifyContent: 'flex-end'
    }
  }, footer)));
}
Object.assign(__ds_scope, { Dialog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Dialog.jsx", error: String((e && e.message) || e) }); }

// components/feedback/EmptyState.jsx
try { (() => {
function EmptyState({
  title,
  body,
  action,
  seal = 'assets/logo-emblem-color.jpg',
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      justifyItems: 'center',
      gap: '14px',
      textAlign: 'center',
      padding: 'var(--space-8) var(--space-5)',
      ...style
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Seal, {
    size: 72,
    src: seal,
    rotate: -5,
    shadow: false,
    style: {
      opacity: .85
    }
  }), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: '26px',
      fontWeight: 600,
      margin: 0,
      color: 'var(--text-strong)'
    }
  }, title), body && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      maxWidth: '38ch',
      color: 'var(--text-muted)',
      fontSize: 'var(--fs-body-s)'
    }
  }, body), action);
}
Object.assign(__ds_scope, { EmptyState });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/EmptyState.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Toast.jsx
try { (() => {
function Toast({
  message,
  tone = 'choc',
  visible = true,
  style
}) {
  if (!visible) return null;
  const bg = tone === 'success' ? 'var(--state-success)' : tone === 'error' ? 'var(--state-error)' : 'var(--choc-800)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: bg,
      color: 'var(--cream-100)',
      padding: '13px 18px',
      borderRadius: 'var(--radius-sm)',
      boxShadow: 'var(--shadow-lg)',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--fs-body-s)',
      fontWeight: 600,
      display: 'inline-flex',
      alignItems: 'center',
      gap: '10px',
      ...style
    }
  }, message);
}
Object.assign(__ds_scope, { Toast });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Toast.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function Checkbox({
  label,
  checked = false,
  onChange = () => {},
  style
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '10px',
      cursor: 'pointer',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--fs-body-s)',
      color: 'var(--text-body)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    onClick: () => onChange(!checked),
    style: {
      width: 20,
      height: 20,
      borderRadius: 'var(--radius-xs)',
      border: '1px solid ' + (checked ? 'var(--choc-700)' : 'var(--border-strong)'),
      background: checked ? 'var(--choc-700)' : 'var(--surface-raised)',
      display: 'grid',
      placeItems: 'center',
      color: 'var(--cream-100)',
      fontSize: '12px',
      lineHeight: 1
    }
  }, checked ? '\u2713' : ''), label);
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Input({
  label,
  hint,
  error,
  type = 'text',
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'grid',
      gap: '7px',
      fontFamily: 'var(--font-body)',
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--fs-label)',
      fontWeight: 600,
      letterSpacing: 'var(--ls-label)',
      color: 'var(--choc-700)'
    }
  }, label), /*#__PURE__*/React.createElement("input", _extends({
    type: type,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      font: 'inherit',
      fontSize: 'var(--fs-body-m)',
      color: 'var(--text-strong)',
      background: 'var(--surface-raised)',
      border: '1px solid ' + (error ? 'var(--state-error)' : focus ? 'var(--celeste-600)' : 'var(--border-hairline)'),
      borderRadius: 'var(--radius-sm)',
      padding: '12px 14px',
      outline: 'none',
      boxShadow: focus ? '0 0 0 3px rgba(108,155,201,.22)' : 'none',
      transition: 'border-color var(--dur-fast), box-shadow var(--dur-fast)'
    }
  }, rest)), (error || hint) && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--fs-caption)',
      color: error ? 'var(--state-error)' : 'var(--text-muted)'
    }
  }, error || hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/LangSwitch.jsx
try { (() => {
function LangSwitch({
  lang = 'es',
  onChange = () => {},
  style
}) {
  const opts = [{
    id: 'es',
    label: 'ES'
  }, {
    id: 'he',
    label: 'עב'
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-flex',
      border: '1px solid var(--border-hairline)',
      borderRadius: 'var(--radius-sm)',
      overflow: 'hidden',
      ...style
    }
  }, opts.map(o => /*#__PURE__*/React.createElement("button", {
    key: o.id,
    onClick: () => onChange(o.id),
    style: {
      padding: '7px 14px',
      border: 0,
      cursor: 'pointer',
      fontFamily: 'var(--font-label)',
      fontSize: '12px',
      fontWeight: 700,
      letterSpacing: '.08em',
      background: lang === o.id ? 'var(--celeste-700)' : 'transparent',
      color: lang === o.id ? 'var(--cream-50)' : 'var(--text-muted)'
    }
  }, o.label)));
}
Object.assign(__ds_scope, { LangSwitch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/LangSwitch.jsx", error: String((e && e.message) || e) }); }

// components/forms/RadioGroup.jsx
try { (() => {
function RadioGroup({
  name,
  options = [],
  value,
  onChange = () => {},
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    role: "radiogroup",
    style: {
      display: 'grid',
      gap: '10px',
      ...style
    }
  }, options.map(o => {
    const v = o.value ?? o,
      l = o.label ?? o,
      on = v === value;
    return /*#__PURE__*/React.createElement("label", {
      key: v,
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        cursor: 'pointer',
        fontFamily: 'var(--font-body)',
        fontSize: 'var(--fs-body-m)',
        color: 'var(--text-body)'
      }
    }, /*#__PURE__*/React.createElement("input", {
      type: "radio",
      name: name,
      checked: on,
      onChange: () => onChange(v),
      style: {
        position: 'absolute',
        opacity: 0,
        width: 0,
        height: 0
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        width: 20,
        height: 20,
        borderRadius: '50%',
        border: '1px solid ' + (on ? 'var(--choc-700)' : 'var(--border-strong)'),
        display: 'grid',
        placeItems: 'center',
        background: 'var(--surface-raised)'
      }
    }, on && /*#__PURE__*/React.createElement("span", {
      style: {
        width: 10,
        height: 10,
        borderRadius: '50%',
        background: 'var(--choc-700)'
      }
    })), l, o.note && /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'var(--text-muted)',
        fontSize: 'var(--fs-body-s)'
      }
    }, o.note));
  }));
}
Object.assign(__ds_scope, { RadioGroup });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/RadioGroup.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Select({
  label,
  options = [],
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'grid',
      gap: '7px',
      fontFamily: 'var(--font-body)',
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--fs-label)',
      fontWeight: 600,
      letterSpacing: 'var(--ls-label)',
      color: 'var(--choc-700)'
    }
  }, label), /*#__PURE__*/React.createElement("select", _extends({
    style: {
      font: 'inherit',
      fontSize: 'var(--fs-body-m)',
      color: 'var(--text-strong)',
      background: 'var(--surface-raised)',
      border: '1px solid var(--border-hairline)',
      borderRadius: 'var(--radius-sm)',
      padding: '12px 14px',
      outline: 'none'
    }
  }, rest), options.map(o => /*#__PURE__*/React.createElement("option", {
    key: o.value ?? o,
    value: o.value ?? o
  }, o.label ?? o))));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/layout/PhotoBand.jsx
try { (() => {
function PhotoBand({
  image,
  height = 520,
  overlay = true,
  align = 'end',
  children,
  style
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative',
      minHeight: height,
      display: 'grid',
      alignItems: align === 'center' ? 'center' : 'end',
      overflow: 'hidden',
      ...style
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: "",
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }), overlay && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'var(--scrim-bottom)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      maxWidth: 'var(--container)',
      width: '100%',
      marginInline: 'auto',
      padding: 'var(--space-8) var(--gutter-desktop)',
      color: 'var(--cream-100)'
    }
  }, children));
}
Object.assign(__ds_scope, { PhotoBand });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/PhotoBand.jsx", error: String((e && e.message) || e) }); }

// components/layout/SectionHeading.jsx
try { (() => {
function SectionHeading({
  eyebrow,
  title,
  lede,
  align = 'center',
  onInk = false,
  rule = true,
  style
}) {
  const centred = align === 'center';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: align,
      display: 'grid',
      gap: '14px',
      justifyItems: centred ? 'center' : 'start',
      maxWidth: centred ? '720px' : 'none',
      marginInline: centred ? 'auto' : '0',
      ...style
    }
  }, eyebrow && /*#__PURE__*/React.createElement(__ds_scope.Eyebrow, {
    tone: onInk ? 'onInk' : 'dulce'
  }, eyebrow), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--fs-display-m)',
      fontWeight: 600,
      lineHeight: 'var(--lh-display)',
      letterSpacing: 'var(--ls-display)',
      color: onInk ? 'var(--cream-100)' : 'var(--text-strong)',
      margin: 0
    }
  }, title), lede && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      maxWidth: 'var(--measure-narrow)',
      fontSize: 'var(--fs-body-l)',
      color: onInk ? 'var(--text-on-ink-muted)' : 'var(--text-muted)'
    }
  }, lede), rule && /*#__PURE__*/React.createElement(__ds_scope.Rule, {
    width: "120px",
    style: {
      marginBlockStart: '4px'
    }
  }));
}
Object.assign(__ds_scope, { SectionHeading });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/SectionHeading.jsx", error: String((e && e.message) || e) }); }

// components/layout/SiteFooter.jsx
try { (() => {
function SiteFooter({
  lang = 'es',
  logo = 'assets/logo-seal-cream.jpg'
}) {
  const es = lang === 'es';
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: 'var(--choc-800)',
      color: 'var(--text-on-ink)',
      paddingBlock: 'var(--space-8)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container)',
      margin: '0 auto',
      padding: '0 var(--gutter-desktop)',
      display: 'flex',
      flexWrap: 'wrap',
      gap: '48px',
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: '1 1 260px'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: logo,
    alt: "PATRIA",
    width: "76",
    height: "76",
    style: {
      borderRadius: '50%'
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      marginBlockStart: '18px',
      fontSize: 'var(--fs-body-s)',
      color: 'var(--text-on-ink-muted)',
      maxWidth: '34ch'
    }
  }, es ? 'Alfajores argentinos hechos a mano en Israel. Uno por uno, como en casa.' : 'אלפחורס ארגנטינאי בעבודת יד, בישראל. אחד־אחד, כמו בבית.')), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: '0 1 180px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-label)',
      fontSize: '11px',
      letterSpacing: 'var(--ls-eyebrow)',
      textTransform: 'uppercase',
      color: 'var(--gold-400)',
      marginBlockEnd: '14px'
    }
  }, es ? 'Pedidos' : 'הזמנות'), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: '9px',
      fontSize: 'var(--fs-body-s)'
    }
  }, /*#__PURE__*/React.createElement("span", null, "WhatsApp"), /*#__PURE__*/React.createElement("span", null, "Instagram"), /*#__PURE__*/React.createElement("span", null, es ? 'Mayoristas' : 'סיטונאי'))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: '0 1 200px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-label)',
      fontSize: '11px',
      letterSpacing: 'var(--ls-eyebrow)',
      textTransform: 'uppercase',
      color: 'var(--gold-400)',
      marginBlockEnd: '14px'
    }
  }, es ? 'Envíos' : 'משלוחים'), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: '9px',
      fontSize: 'var(--fs-body-s)',
      color: 'var(--text-on-ink-muted)'
    }
  }, /*#__PURE__*/React.createElement("span", null, es ? 'Tel Aviv y alrededores' : 'תל אביב והסביבה'), /*#__PURE__*/React.createElement("span", null, es ? 'Martes y viernes' : 'שלישי ושישי')))), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container)',
      margin: '40px auto 0',
      padding: '20px var(--gutter-desktop) 0',
      borderBlockStart: '1px solid var(--border-on-ink)',
      display: 'flex',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
      gap: '12px',
      fontSize: '12px',
      color: 'var(--text-on-ink-muted)'
    }
  }, /*#__PURE__*/React.createElement("span", null, "PATRIA \xB7 Orgullo Argentino"), /*#__PURE__*/React.createElement("span", null, "\xA9 2026")));
}
Object.assign(__ds_scope, { SiteFooter });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/SiteFooter.jsx", error: String((e && e.message) || e) }); }

// components/layout/SiteHeader.jsx
try { (() => {
function SiteHeader({
  lang = 'es',
  onLangChange = () => {},
  cartCount = 0,
  active = 'inicio',
  onNavigate = () => {},
  logo = 'assets/logo-emblem-color.jpg'
}) {
  const nav = lang === 'he' ? [{
    id: 'inicio',
    label: 'בית'
  }, {
    id: 'sabores',
    label: 'טעמים'
  }, {
    id: 'historia',
    label: 'הסיפור'
  }, {
    id: 'pedidos',
    label: 'הזמנות'
  }] : [{
    id: 'inicio',
    label: 'Inicio'
  }, {
    id: 'sabores',
    label: 'Sabores'
  }, {
    id: 'historia',
    label: 'Historia'
  }, {
    id: 'pedidos',
    label: 'Pedidos'
  }];
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'sticky',
      insetBlockStart: 0,
      zIndex: 20,
      background: 'rgba(247,241,230,.96)',
      borderBlockEnd: '1px solid var(--border-hairline)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container)',
      margin: '0 auto',
      padding: '14px var(--gutter-desktop)',
      display: 'flex',
      alignItems: 'center',
      gap: '24px'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => onNavigate('inicio'),
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      background: 'none',
      border: 0,
      padding: 0,
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: logo,
    alt: "",
    width: "40",
    height: "40",
    style: {
      borderRadius: '50%',
      border: '1px solid var(--border-hairline)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: '22px',
      fontWeight: 700,
      letterSpacing: '.12em',
      color: 'var(--celeste-700)'
    }
  }, "PATRIA")), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      gap: '28px',
      marginInlineStart: 'auto'
    }
  }, nav.map(n => /*#__PURE__*/React.createElement("button", {
    key: n.id,
    onClick: () => onNavigate(n.id),
    style: {
      background: 'none',
      border: 0,
      cursor: 'pointer',
      fontFamily: 'var(--font-label)',
      fontSize: '12px',
      letterSpacing: 'var(--ls-eyebrow)',
      textTransform: 'uppercase',
      fontWeight: 600,
      color: active === n.id ? 'var(--choc-800)' : 'var(--text-muted)',
      paddingBlockEnd: '3px',
      borderBlockEnd: '1px solid ' + (active === n.id ? 'var(--gold-500)' : 'transparent')
    }
  }, n.label))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '14px'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => onLangChange(lang === 'es' ? 'he' : 'es'),
    style: {
      background: 'none',
      border: '1px solid var(--border-hairline)',
      borderRadius: 'var(--radius-sm)',
      padding: '6px 10px',
      cursor: 'pointer',
      fontFamily: 'var(--font-label)',
      fontSize: '11px',
      letterSpacing: '.1em',
      fontWeight: 700,
      color: 'var(--celeste-700)'
    }
  }, lang === 'es' ? 'עברית' : 'ESPAÑOL'), /*#__PURE__*/React.createElement("button", {
    onClick: () => onNavigate('carrito'),
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '7px',
      background: 'none',
      border: 0,
      cursor: 'pointer',
      color: 'var(--choc-700)',
      fontFamily: 'var(--font-body)',
      fontWeight: 600,
      fontSize: '14px'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "https://unpkg.com/lucide-static@0.454.0/icons/shopping-bag.svg",
    width: "20",
    height: "20",
    alt: "",
    style: {
      opacity: .8
    }
  }), cartCount > 0 && /*#__PURE__*/React.createElement("span", {
    style: {
      background: 'var(--choc-700)',
      color: 'var(--cream-100)',
      borderRadius: '50%',
      width: 20,
      height: 20,
      display: 'grid',
      placeItems: 'center',
      fontSize: '11px',
      fontWeight: 700
    }
  }, cartCount)))));
}
Object.assign(__ds_scope, { SiteHeader });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/SiteHeader.jsx", error: String((e && e.message) || e) }); }

// components/product/FlavourStrip.jsx
try { (() => {
function FlavourStrip({
  items = [],
  activeIndex = 0,
  onSelect = () => {},
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: '12px',
      overflowX: 'auto',
      paddingBlockEnd: '6px',
      ...style
    }
  }, items.map((it, i) => {
    const active = i === activeIndex;
    return /*#__PURE__*/React.createElement("button", {
      key: it.name,
      onClick: () => onSelect(i),
      style: {
        flex: '0 0 auto',
        width: 108,
        border: 0,
        background: 'transparent',
        padding: 0,
        cursor: 'pointer',
        textAlign: 'center',
        fontFamily: 'var(--font-body)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: 108,
        height: 108,
        borderRadius: 'var(--radius-md)',
        overflow: 'hidden',
        border: '1px solid ' + (active ? 'var(--choc-700)' : 'var(--border-hairline)'),
        boxShadow: active ? 'var(--shadow-sm)' : 'none',
        transition: 'border-color var(--dur-base) var(--ease-standard)'
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: it.image,
      alt: it.name,
      style: {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        filter: active ? 'none' : 'saturate(.88)'
      }
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        marginBlockStart: 8,
        fontSize: '13px',
        fontWeight: active ? 700 : 400,
        color: active ? 'var(--choc-800)' : 'var(--text-muted)'
      }
    }, it.name));
  }));
}
Object.assign(__ds_scope, { FlavourStrip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/product/FlavourStrip.jsx", error: String((e && e.message) || e) }); }

// components/product/PriceTag.jsx
try { (() => {
function PriceTag({
  ils,
  ars,
  size = 'md',
  style
}) {
  const fs = size === 'lg' ? '28px' : size === 'sm' ? '15px' : '19px';
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'baseline',
      gap: '10px',
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: fs,
      color: 'var(--choc-800)'
    }
  }, "\u20AA", ils), ars && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: '13px',
      color: 'var(--text-muted)'
    }
  }, '$', ars));
}
Object.assign(__ds_scope, { PriceTag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/product/PriceTag.jsx", error: String((e && e.message) || e) }); }

// components/product/ProductCard.jsx
try { (() => {
function ProductCard({
  name,
  image,
  description,
  ils,
  ars,
  badge,
  flavours = [],
  onClick,
  style
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("article", {
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      background: 'var(--surface-card)',
      border: '1px solid var(--border-hairline)',
      borderRadius: 'var(--radius-md)',
      overflow: 'hidden',
      cursor: onClick ? 'pointer' : 'default',
      display: 'flex',
      flexDirection: 'column',
      boxShadow: hover ? 'var(--shadow-md)' : 'var(--shadow-sm)',
      transform: hover ? 'translateY(-2px)' : 'none',
      transition: 'box-shadow var(--dur-base) var(--ease-standard), transform var(--dur-base) var(--ease-standard)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      overflow: 'hidden',
      aspectRatio: '4 / 5',
      background: 'var(--cream-200)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: name,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      transform: hover ? 'scale(1.03)' : 'scale(1)',
      transition: 'transform var(--dur-slow) var(--ease-out-soft)'
    }
  }), badge && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      insetInlineStart: 12,
      insetBlockStart: 12
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Badge, null, badge))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '18px 18px 20px',
      display: 'flex',
      flexDirection: 'column',
      gap: '8px',
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: '24px',
      fontWeight: 600,
      color: 'var(--text-strong)',
      lineHeight: 1.1,
      margin: 0
    }
  }, name), description && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 'var(--fs-body-s)',
      color: 'var(--text-muted)',
      lineHeight: 1.5
    }
  }, description), flavours.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: '6px',
      marginBlockStart: '2px'
    }
  }, flavours.map(fl => /*#__PURE__*/React.createElement(__ds_scope.FlavourDot, {
    key: fl,
    flavour: fl
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginBlockStart: 'auto',
      paddingBlockStart: '10px'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.PriceTag, {
    ils: ils,
    ars: ars
  }))));
}
Object.assign(__ds_scope, { ProductCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/product/ProductCard.jsx", error: String((e && e.message) || e) }); }

// components/product/QuantityStepper.jsx
try { (() => {
function QuantityStepper({
  value = 1,
  min = 1,
  max = 99,
  onChange = () => {},
  style
}) {
  const btn = {
    width: 40,
    height: 40,
    border: '1px solid var(--border-hairline)',
    background: 'transparent',
    color: 'var(--choc-700)',
    fontSize: '18px',
    cursor: 'pointer',
    fontFamily: 'var(--font-body)',
    lineHeight: 1,
    transition: 'background var(--dur-fast) var(--ease-standard)'
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      ...style
    }
  }, /*#__PURE__*/React.createElement("button", {
    style: {
      ...btn,
      borderRadius: 'var(--radius-sm) 0 0 var(--radius-sm)'
    },
    onClick: () => onChange(Math.max(min, value - 1)),
    "aria-label": "Quitar uno"
  }, "\u2212"), /*#__PURE__*/React.createElement("span", {
    style: {
      minWidth: 48,
      textAlign: 'center',
      fontFamily: 'var(--font-body)',
      fontWeight: 600,
      fontSize: '16px',
      color: 'var(--choc-800)',
      borderTop: '1px solid var(--border-hairline)',
      borderBottom: '1px solid var(--border-hairline)',
      height: 40,
      lineHeight: '38px'
    }
  }, value), /*#__PURE__*/React.createElement("button", {
    style: {
      ...btn,
      borderRadius: '0 var(--radius-sm) var(--radius-sm) 0'
    },
    onClick: () => onChange(Math.min(max, value + 1)),
    "aria-label": "Agregar uno"
  }, "+"));
}
Object.assign(__ds_scope, { QuantityStepper });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/product/QuantityStepper.jsx", error: String((e && e.message) || e) }); }

// ui_kits/mobile/Screens.jsx
try { (() => {
const {
  Button,
  Eyebrow,
  Badge,
  Rule,
  Seal,
  FlavourDot,
  PriceTag,
  QuantityStepper,
  Tag,
  EmptyState,
  LangSwitch
} = window.PATRIADesignSystem_5cb717;
function MobileTopBar({
  lang,
  setLang,
  count,
  onCart,
  onHome
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'sticky',
      insetBlockStart: 0,
      zIndex: 10,
      background: 'rgba(247,241,230,.97)',
      borderBlockEnd: '1px solid var(--border-hairline)',
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      padding: '10px 16px'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: onHome,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '9px',
      background: 'none',
      border: 0,
      padding: 0,
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo-emblem-color.jpg",
    width: "32",
    height: "32",
    style: {
      borderRadius: '50%',
      border: '1px solid var(--border-hairline)'
    },
    alt: ""
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: '18px',
      fontWeight: 700,
      letterSpacing: '.12em',
      color: 'var(--celeste-700)'
    }
  }, "PATRIA")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginInlineStart: 'auto',
      display: 'flex',
      alignItems: 'center',
      gap: '10px'
    }
  }, /*#__PURE__*/React.createElement(LangSwitch, {
    lang: lang,
    onChange: setLang
  }), /*#__PURE__*/React.createElement("button", {
    onClick: onCart,
    style: {
      background: 'none',
      border: 0,
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      gap: '6px',
      minWidth: '44px',
      minHeight: '44px',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "https://unpkg.com/lucide-static@0.454.0/icons/shopping-bag.svg",
    width: "22",
    height: "22",
    alt: "",
    style: {
      opacity: .8
    }
  }), count > 0 && /*#__PURE__*/React.createElement("span", {
    style: {
      background: 'var(--choc-700)',
      color: 'var(--cream-100)',
      borderRadius: '50%',
      width: 19,
      height: 19,
      display: 'grid',
      placeItems: 'center',
      fontSize: '11px',
      fontWeight: 700
    }
  }, count))));
}
function MobileHome({
  t,
  lang,
  products,
  onOpen,
  onGo
}) {
  const [filter, setFilter] = React.useState('todos');
  const list = filter === 'todos' ? products : products.filter(p => p.flavours.includes(filter));
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      height: '440px',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/photos/bon-bon.jpg",
    alt: "",
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'var(--scrim-bottom)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      insetInline: '20px',
      insetBlockEnd: '22px',
      color: 'var(--cream-100)',
      display: 'grid',
      gap: '12px'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    tone: "onInk"
  }, t.eyebrow), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: '38px',
      fontWeight: 600,
      lineHeight: 1.05,
      margin: 0,
      color: 'var(--cream-50)'
    }
  }, t.hero), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: '15px',
      color: 'var(--cream-200)'
    }
  }, t.sub), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: '10px',
      flexWrap: 'wrap',
      marginBlockStart: '4px'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "onInk",
    onClick: () => onGo('sabores')
  }, t.cta), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    style: {
      color: 'var(--cream-100)',
      border: '1px solid rgba(247,241,230,.5)'
    }
  }, t.wa)))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '12px 16px',
      background: 'var(--choc-800)',
      color: 'var(--cream-200)',
      fontFamily: 'var(--font-label)',
      fontSize: '11px',
      letterSpacing: '.18em',
      textTransform: 'uppercase',
      textAlign: 'center'
    }
  }, t.ship), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '24px 16px 8px',
      display: 'grid',
      gap: '14px',
      justifyItems: 'center',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, t.sabores), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: '15px',
      color: 'var(--text-muted)',
      maxWidth: '34ch'
    }
  }, t.bio), /*#__PURE__*/React.createElement(Rule, {
    width: "90px"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: '8px',
      overflowX: 'auto',
      padding: '14px 16px'
    }
  }, [['todos', t.todos], ['chocolate', 'Chocolate'], ['blanco', 'Blanco'], ['dulce', 'Dulce de leche']].map(([id, l]) => /*#__PURE__*/React.createElement(Tag, {
    key: id,
    selected: filter === id,
    onClick: () => setFilter(id),
    style: {
      flex: '0 0 auto'
    }
  }, l))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '14px',
      padding: '4px 16px 32px'
    }
  }, list.map(p => /*#__PURE__*/React.createElement("button", {
    key: p.id,
    onClick: () => onOpen(p.id),
    style: {
      textAlign: 'start',
      border: '1px solid var(--border-hairline)',
      borderRadius: 'var(--radius-md)',
      background: 'var(--surface-card)',
      padding: 0,
      overflow: 'hidden',
      cursor: 'pointer',
      boxShadow: 'var(--shadow-sm)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      aspectRatio: '4 / 5',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: p.image,
    alt: "",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }), p.badge && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      insetInlineStart: 8,
      insetBlockStart: 8
    }
  }, /*#__PURE__*/React.createElement(Badge, null, p.badge))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '12px 12px 14px',
      display: 'grid',
      gap: '6px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: '19px',
      fontWeight: 600,
      color: 'var(--text-strong)',
      lineHeight: 1.1
    }
  }, p[lang]), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: '5px'
    }
  }, p.flavours.map(fl => /*#__PURE__*/React.createElement(FlavourDot, {
    key: fl,
    flavour: fl,
    size: 8
  }))), /*#__PURE__*/React.createElement(PriceTag, {
    ils: p.ils,
    size: "sm"
  }))))));
}
function MobileProduct({
  t,
  lang,
  product,
  onAdd,
  onBack
}) {
  const [qty, setQty] = React.useState(1);
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: product.image,
    alt: "",
    style: {
      width: '100%',
      aspectRatio: '1 / 1',
      objectFit: 'cover'
    }
  }), /*#__PURE__*/React.createElement("button", {
    onClick: onBack,
    style: {
      position: 'absolute',
      insetInlineStart: 12,
      insetBlockStart: 12,
      minWidth: 44,
      minHeight: 44,
      borderRadius: '50%',
      border: 0,
      background: 'rgba(247,241,230,.92)',
      cursor: 'pointer',
      fontSize: '18px',
      color: 'var(--choc-700)'
    }
  }, "\u2190")), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '20px 16px 120px',
      display: 'grid',
      gap: '14px'
    }
  }, product.badge && /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Badge, null, product.badge)), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: '32px',
      fontWeight: 600,
      margin: 0,
      color: 'var(--text-strong)',
      lineHeight: 1.05
    }
  }, product[lang]), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: '16px',
      color: 'var(--text-body)'
    }
  }, lang === 'es' ? product.esD : product.heD), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: '16px',
      flexWrap: 'wrap'
    }
  }, product.flavours.map(fl => /*#__PURE__*/React.createElement(FlavourDot, {
    key: fl,
    flavour: fl,
    label: fl
  }))), /*#__PURE__*/React.createElement(Rule, {
    tone: "hairline",
    ornament: false
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: '14px'
    }
  }, /*#__PURE__*/React.createElement(PriceTag, {
    ils: product.ils,
    size: "lg"
  }), /*#__PURE__*/React.createElement(QuantityStepper, {
    value: qty,
    onChange: setQty
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'sticky',
      insetBlockEnd: 0,
      padding: '12px 16px',
      background: 'rgba(247,241,230,.97)',
      borderBlockStart: '1px solid var(--border-hairline)'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    style: {
      width: '100%'
    },
    onClick: () => onAdd(product, qty)
  }, t.add)));
}
function MobileCart({
  t,
  lang,
  cart,
  onQty,
  onGo,
  onConfirm
}) {
  const sub = cart.reduce((s, l) => s + l.product.ils * l.qty, 0);
  if (!cart.length) return /*#__PURE__*/React.createElement(EmptyState, {
    seal: "../../assets/logo-emblem-color.jpg",
    title: t.empty,
    body: t.emptyBody,
    action: /*#__PURE__*/React.createElement(Button, {
      onClick: () => onGo('inicio')
    }, t.cta)
  });
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '20px 16px 24px'
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: '30px',
      fontWeight: 600,
      margin: '0 0 16px',
      color: 'var(--text-strong)'
    }
  }, t.order), cart.map(l => /*#__PURE__*/React.createElement("div", {
    key: l.product.id,
    style: {
      display: 'flex',
      gap: '12px',
      alignItems: 'center',
      padding: '14px 0',
      borderBlockEnd: '1px solid var(--border-hairline)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: l.product.image,
    alt: "",
    style: {
      width: 64,
      height: 64,
      objectFit: 'cover',
      borderRadius: 'var(--radius-sm)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: '18px',
      fontWeight: 600,
      color: 'var(--text-strong)'
    }
  }, l.product[lang]), /*#__PURE__*/React.createElement(PriceTag, {
    ils: l.product.ils * l.qty,
    size: "sm"
  })), /*#__PURE__*/React.createElement(QuantityStepper, {
    value: l.qty,
    onChange: n => onQty(l.product.id, n)
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'baseline',
      marginBlock: '20px 14px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-label)',
      fontSize: '12px',
      letterSpacing: 'var(--ls-eyebrow)',
      textTransform: 'uppercase',
      color: 'var(--choc-600)'
    }
  }, t.total), /*#__PURE__*/React.createElement(PriceTag, {
    ils: sub,
    size: "lg"
  })), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    style: {
      width: '100%'
    },
    onClick: onConfirm
  }, t.confirm), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      justifyItems: 'center',
      marginBlockStart: '26px'
    }
  }, /*#__PURE__*/React.createElement(Seal, {
    size: 64,
    src: "../../assets/logo-emblem-color.jpg",
    shadow: false,
    style: {
      opacity: .8
    }
  })));
}
Object.assign(window, {
  MobileTopBar,
  MobileHome,
  MobileProduct,
  MobileCart
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/mobile/Screens.jsx", error: String((e && e.message) || e) }); }

// ui_kits/mobile/copy.js
try { (() => {
window.PATRIA_I18N = {
  es: {
    dir: 'ltr',
    eyebrow: 'Orgullo Argentino',
    hero: 'Alfajores argentinos, hechos a mano.',
    sub: 'Tapas gruesas, dulce de leche de verdad y una cobertura que cruje.',
    cta: 'Ver los sabores',
    wa: 'Pedir por WhatsApp',
    sabores: 'Sabores',
    todos: 'Todos',
    add: 'Agregar al pedido',
    added: 'Agregado al pedido',
    order: 'Tu pedido',
    total: 'Total',
    confirm: 'Confirmar pedido',
    empty: 'Tu pedido está vacío',
    emptyBody: 'Empezá por el clásico.',
    ship: 'Envíos martes y viernes · Tel Aviv',
    from: 'Desde',
    back: 'Volver',
    bio: 'Hacemos cada alfajor a mano, en tandas chicas. Si extrañás los de allá, son estos.'
  },
  he: {
    dir: 'rtl',
    eyebrow: 'גאווה ארגנטינאית',
    hero: 'אלפחורס ארגנטינאי, בעבודת יד.',
    sub: 'עוגיות עבות, ריבת חלב אמיתית וציפוי שוקולד שנשבר.',
    cta: 'לכל הטעמים',
    wa: 'להזמנה בוואטסאפ',
    sabores: 'טעמים',
    todos: 'הכול',
    add: 'הוספה להזמנה',
    added: 'נוסף להזמנה',
    order: 'ההזמנה שלך',
    total: 'סה״כ',
    confirm: 'לאישור ההזמנה',
    empty: 'ההזמנה ריקה',
    emptyBody: 'תתחילו מהקלאסי.',
    ship: 'משלוחים בשלישי ובשישי · תל אביב',
    from: 'מ־',
    back: 'חזרה',
    bio: 'כל אלפחור נעשה ביד, בכמויות קטנות. אם התגעגעתם לשם — זה זה.'
  }
};
const MP = '../../assets/photos/';
window.PATRIA_MOBILE_PRODUCTS = [{
  id: 'clasico',
  es: 'El clásico de siempre',
  he: 'הקלאסי',
  image: MP + 'clasico.jpg',
  ils: 38,
  flavours: ['dulce', 'chocolate'],
  esD: 'Dulce de leche entre dos tapas de chocolate negro, bañado entero.',
  heD: 'ריבת חלב בין שתי שכבות קקאו, בציפוי שוקולד מריר מלא.'
}, {
  id: 'bonbon',
  es: 'Bon Bon',
  he: 'בון בון',
  image: MP + 'bon-bon.jpg',
  ils: 38,
  badge: 'Nuevo',
  flavours: ['dulce', 'chocolate'],
  esD: 'Tapas suaves, dulce de leche espeso y chocolate con leche.',
  heD: 'עוגיות רכות, ריבת חלב סמיכה ושוקולד חלב.'
}, {
  id: 'alfadubai',
  es: 'AlfaDubai',
  he: 'אלפאדובאי',
  image: MP + 'alfadubai.jpg',
  ils: 46,
  badge: 'Nuevo',
  flavours: ['pistacho', 'chocolate'],
  esD: 'Pistacho y kadaif crocante bajo chocolate negro.',
  heD: 'פיסטוק וקדאיף פריך מתחת לשוקולד מריר.'
}, {
  id: 'halva',
  es: 'Dulce de leche & Halva',
  he: 'ריבת חלב וחלווה',
  image: MP + 'halva.jpg',
  ils: 40,
  flavours: ['halva', 'blanco'],
  esD: 'Halva y sésamo con dulce de leche, cubierto de chocolate blanco.',
  heD: 'חלווה ושומשום עם ריבת חלב, בציפוי שוקולד לבן.'
}, {
  id: 'frutos',
  es: 'Frutos rojos',
  he: 'פירות יער',
  image: MP + 'frutos-rojos.jpg',
  ils: 40,
  flavours: ['frutosRojos', 'dulce'],
  esD: 'Compota de frutos rojos y dulce de leche entre tapas de cacao.',
  heD: 'קומפוט פירות יער וריבת חלב בין עוגיות קקאו.'
}, {
  id: 'malbec',
  es: 'Malbec',
  he: 'מלבק',
  image: MP + 'malbec.jpg',
  ils: 44,
  badge: 'Edición limitada',
  flavours: ['malbec', 'chocolate'],
  esD: 'Reducción de Malbec brillante dentro de chocolate negro.',
  heD: 'רדוקציית מלבק מבריקה בתוך שוקולד מריר.'
}, {
  id: 'blanut',
  es: 'BlaNut',
  he: 'בלהנאט',
  image: MP + 'blanut.jpg',
  ils: 42,
  flavours: ['nuez', 'blanco'],
  esD: 'Nueces y crema, cubierto de chocolate blanco con nuez.',
  heD: 'אגוזי מלך וקרם, בציפוי שוקולד לבן עם אגוזים.'
}, {
  id: 'proteina',
  es: 'Proteína',
  he: 'חלבון',
  image: MP + 'proteina.jpg',
  ils: 40,
  flavours: ['dulce', 'chocolate'],
  esD: 'Mismo gusto, más proteína. Chocolate negro y nibs de cacao.',
  heD: 'אותו טעם, יותר חלבון. שוקולד מריר וניבס קקאו.'
}];
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/mobile/copy.js", error: String((e && e.message) || e) }); }

// ui_kits/website/Home.jsx
try { (() => {
const {
  Button,
  Eyebrow,
  Rule,
  Seal,
  ProductCard,
  SectionHeading,
  PhotoBand,
  Badge
} = window.PATRIADesignSystem_5cb717;
function Hero({
  onGo
}) {
  return /*#__PURE__*/React.createElement(PhotoBand, {
    image: "../../assets/photos/bon-bon.jpg",
    height: 620
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: '620px',
      display: 'grid',
      gap: '20px'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    tone: "onInk"
  }, "Orgullo Argentino \xB7 Hecho a mano en Israel"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--fs-display-xl)',
      fontWeight: 600,
      lineHeight: 'var(--lh-display)',
      letterSpacing: 'var(--ls-display)',
      color: 'var(--cream-50)',
      margin: 0
    }
  }, "Alfajores argentinos, hechos a mano."), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 'var(--fs-body-l)',
      color: 'var(--cream-200)',
      maxWidth: '44ch'
    }
  }, "Tapas gruesas, dulce de leche de verdad y una cobertura que cruje. Como los de all\xE1."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: '14px',
      flexWrap: 'wrap',
      marginBlockStart: '6px'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "onInk",
    size: "lg",
    onClick: () => onGo('sabores')
  }, "Ver los sabores"), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    size: "lg",
    style: {
      color: 'var(--cream-100)',
      borderColor: 'rgba(247,241,230,.5)',
      borderWidth: '1px',
      borderStyle: 'solid'
    },
    onClick: () => onGo('pedidos')
  }, "Pedir por WhatsApp"))));
}
function Destacados({
  products,
  onOpen
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 'var(--container)',
      margin: '0 auto',
      padding: 'var(--section-y-desktop) var(--gutter-desktop)'
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Los m\xE1s pedidos",
    title: "Nuestros sabores",
    lede: "Ocho alfajores. Todos con el mismo dulce de leche que hacemos nosotros."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill,minmax(240px,1fr))',
      gap: '28px',
      marginBlockStart: 'var(--space-7)'
    }
  }, products.slice(0, 4).map(p => /*#__PURE__*/React.createElement(ProductCard, {
    key: p.id,
    name: p.name,
    image: p.image,
    description: p.short,
    ils: p.ils,
    ars: p.ars,
    badge: p.badge,
    flavours: p.flavours,
    onClick: () => onOpen(p.id)
  }))));
}
function Historia() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--choc-800)',
      color: 'var(--text-on-ink)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container)',
      margin: '0 auto',
      padding: 'var(--section-y-desktop) var(--gutter-desktop)',
      display: 'grid',
      gridTemplateColumns: 'minmax(0,1fr) minmax(0,1fr)',
      gap: '64px',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: '18px'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    tone: "onInk"
  }, "Nuestra historia"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--fs-display-m)',
      fontWeight: 600,
      color: 'var(--cream-50)',
      margin: 0
    }
  }, "Un pedazo de Argentina, ac\xE1."), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      color: 'var(--text-on-ink-muted)',
      maxWidth: '46ch'
    }
  }, "Empezamos haciendo alfajores para los amigos que extra\xF1aban los de all\xE1. Seguimos igual: tandas chicas, todo a mano, el dulce de leche cocinado por nosotros."), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      color: 'var(--text-on-ink-muted)',
      maxWidth: '46ch'
    }
  }, "Si alguna vez mordiste uno en Buenos Aires y te acord\xE1s del gusto, es ese."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginBlockStart: '8px'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "onInk"
  }, "Conoc\xE9 la cocina"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/photos/malbec.jpg",
    alt: "",
    style: {
      width: '100%',
      aspectRatio: '4 / 5',
      objectFit: 'cover',
      borderRadius: 'var(--radius-lg)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      insetInlineEnd: '-22px',
      insetBlockEnd: '-22px'
    }
  }, /*#__PURE__*/React.createElement(Seal, {
    size: 118,
    src: "../../assets/logo-seal-cream.jpg"
  })))));
}
function Envios() {
  const items = [['Martes y viernes', 'Entregas en Tel Aviv, Ramat Gan y Givatayim.'], ['Retiro', 'Coordinamos por WhatsApp y lo buscás por la cocina.'], ['Cajas', 'Media docena o docena, mezclá los sabores que quieras.']];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 'var(--container)',
      margin: '0 auto',
      padding: 'var(--section-y-desktop) var(--gutter-desktop)'
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Env\xEDos",
    title: "C\xF3mo llega a tu casa"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))',
      gap: '32px',
      marginBlockStart: 'var(--space-7)'
    }
  }, items.map(([t, b]) => /*#__PURE__*/React.createElement("div", {
    key: t,
    style: {
      display: 'grid',
      gap: '10px'
    }
  }, /*#__PURE__*/React.createElement(Rule, {
    width: "56px",
    ornament: false,
    style: {
      justifySelf: 'start'
    }
  }), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: '24px',
      fontWeight: 600,
      margin: 0,
      color: 'var(--text-strong)'
    }
  }, t), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      color: 'var(--text-muted)',
      fontSize: 'var(--fs-body-s)'
    }
  }, b)))));
}
function Home({
  products,
  onGo,
  onOpen
}) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Hero, {
    onGo: onGo
  }), /*#__PURE__*/React.createElement(Destacados, {
    products: products,
    onOpen: onOpen
  }), /*#__PURE__*/React.createElement(Historia, null), /*#__PURE__*/React.createElement(Envios, null));
}
Object.assign(window, {
  Home,
  Hero,
  Destacados,
  Historia,
  Envios
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Home.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Pedido.jsx
try { (() => {
const {
  Button,
  Input,
  Select,
  Checkbox,
  RadioGroup,
  QuantityStepper,
  PriceTag,
  EmptyState,
  Rule,
  Eyebrow
} = window.PATRIADesignSystem_5cb717;
function Pedido({
  cart,
  onQty,
  onGo,
  onConfirm
}) {
  const [entrega, setEntrega] = React.useState('envio');
  const [guardar, setGuardar] = React.useState(true);
  const sub = cart.reduce((s, l) => s + l.product.ils * l.qty, 0);
  const envio = entrega === 'envio' ? 25 : 0;
  if (!cart.length) return /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 'var(--container-narrow)',
      margin: '0 auto',
      padding: 'var(--space-9) var(--gutter-desktop)'
    }
  }, /*#__PURE__*/React.createElement(EmptyState, {
    seal: "../../assets/logo-emblem-color.jpg",
    title: "Tu pedido est\xE1 vac\xEDo",
    body: "Todav\xEDa no elegiste nada. Empez\xE1 por el cl\xE1sico.",
    action: /*#__PURE__*/React.createElement(Button, {
      onClick: () => onGo('sabores')
    }, "Ver los sabores")
  }));
  return /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 'var(--container)',
      margin: '0 auto',
      padding: 'var(--space-8) var(--gutter-desktop) var(--section-y-desktop)',
      display: 'grid',
      gridTemplateColumns: 'minmax(0,1.2fr) minmax(0,.8fr)',
      gap: '56px',
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--fs-display-m)',
      fontWeight: 600,
      margin: '0 0 24px',
      color: 'var(--text-strong)'
    }
  }, "Tu pedido"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: '0'
    }
  }, cart.map(l => /*#__PURE__*/React.createElement("div", {
    key: l.product.id,
    style: {
      display: 'flex',
      gap: '18px',
      alignItems: 'center',
      padding: '18px 0',
      borderBlockEnd: '1px solid var(--border-hairline)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: l.product.image,
    alt: "",
    style: {
      width: 84,
      height: 84,
      objectFit: 'cover',
      borderRadius: 'var(--radius-sm)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: '21px',
      fontWeight: 600,
      color: 'var(--text-strong)'
    }
  }, l.product.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--fs-body-s)',
      color: 'var(--text-muted)'
    }
  }, l.product.short)), /*#__PURE__*/React.createElement(QuantityStepper, {
    value: l.qty,
    onChange: n => onQty(l.product.id, n)
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: '70px',
      textAlign: 'end'
    }
  }, /*#__PURE__*/React.createElement(PriceTag, {
    ils: l.product.ils * l.qty
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginBlockStart: 'var(--space-7)',
      display: 'grid',
      gap: '18px',
      maxWidth: '520px'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "Datos de entrega"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '16px'
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Nombre",
    placeholder: "Tu nombre"
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Tel\xE9fono",
    placeholder: "050 000 0000"
  })), /*#__PURE__*/React.createElement(RadioGroup, {
    name: "entrega",
    value: entrega,
    onChange: setEntrega,
    options: [{
      value: 'envio',
      label: 'Envío a domicilio',
      note: '₪25'
    }, {
      value: 'retiro',
      label: 'Retiro en Tel Aviv'
    }]
  }), entrega === 'envio' && /*#__PURE__*/React.createElement(Input, {
    label: "Direcci\xF3n",
    placeholder: "Calle y n\xFAmero, ciudad"
  }), /*#__PURE__*/React.createElement(Select, {
    label: "D\xEDa de entrega",
    options: ['Martes', 'Viernes']
  }), /*#__PURE__*/React.createElement(Checkbox, {
    label: "Guardar mis datos para la pr\xF3xima",
    checked: guardar,
    onChange: setGuardar
  }))), /*#__PURE__*/React.createElement("aside", {
    style: {
      background: 'var(--surface-card)',
      border: '1px solid var(--border-hairline)',
      borderRadius: 'var(--radius-md)',
      padding: '26px',
      display: 'grid',
      gap: '14px',
      position: 'sticky',
      insetBlockStart: '96px',
      boxShadow: 'var(--shadow-sm)'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "Resumen"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      fontSize: 'var(--fs-body-s)'
    }
  }, /*#__PURE__*/React.createElement("span", null, "Subtotal"), /*#__PURE__*/React.createElement("span", null, "\u20AA", sub)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      fontSize: 'var(--fs-body-s)',
      color: 'var(--text-muted)'
    }
  }, /*#__PURE__*/React.createElement("span", null, "Env\xEDo"), /*#__PURE__*/React.createElement("span", null, envio ? '₪' + envio : 'Gratis')), /*#__PURE__*/React.createElement(Rule, {
    tone: "hairline",
    ornament: false
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'baseline'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-label)',
      fontSize: '12px',
      letterSpacing: 'var(--ls-eyebrow)',
      textTransform: 'uppercase',
      color: 'var(--choc-600)'
    }
  }, "Total"), /*#__PURE__*/React.createElement(PriceTag, {
    ils: sub + envio,
    size: "lg"
  })), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    onClick: onConfirm,
    style: {
      width: '100%'
    }
  }, "Confirmar pedido"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 'var(--fs-caption)',
      color: 'var(--text-muted)'
    }
  }, "Te escribimos por WhatsApp para coordinar el horario.")));
}
Object.assign(window, {
  Pedido
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Pedido.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Producto.jsx
try { (() => {
const {
  Button,
  Eyebrow,
  Rule,
  Badge,
  PriceTag,
  QuantityStepper,
  FlavourDot,
  FlavourStrip
} = window.PATRIADesignSystem_5cb717;
function Producto({
  product,
  products,
  onAdd,
  onOpen
}) {
  const [qty, setQty] = React.useState(1);
  const idx = products.findIndex(p => p.id === product.id);
  return /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 'var(--container)',
      margin: '0 auto',
      padding: 'var(--space-8) var(--gutter-desktop) var(--section-y-desktop)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'minmax(0,1.05fr) minmax(0,1fr)',
      gap: '56px',
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: product.image,
    alt: product.name,
    style: {
      width: '100%',
      aspectRatio: '4 / 5',
      objectFit: 'cover',
      borderRadius: 'var(--radius-lg)',
      border: '1px solid var(--border-hairline)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: '18px',
      position: 'sticky',
      insetBlockStart: '96px'
    }
  }, product.badge && /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Badge, null, product.badge)), /*#__PURE__*/React.createElement(Eyebrow, null, "Alfajor artesanal"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--fs-display-l)',
      fontWeight: 600,
      margin: 0,
      color: 'var(--text-strong)',
      lineHeight: 1.02
    }
  }, product.name), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 'var(--fs-body-l)',
      color: 'var(--text-body)',
      maxWidth: '46ch'
    }
  }, product.long), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: '18px',
      flexWrap: 'wrap'
    }
  }, product.flavours.map(fl => /*#__PURE__*/React.createElement(FlavourDot, {
    key: fl,
    flavour: fl,
    label: {
      dulce: 'Dulce de leche',
      chocolate: 'Chocolate negro',
      blanco: 'Chocolate blanco',
      frutosRojos: 'Frutos rojos',
      pistacho: 'Pistacho',
      nuez: 'Nuez',
      halva: 'Halva',
      malbec: 'Malbec'
    }[fl]
  }))), /*#__PURE__*/React.createElement(Rule, {
    tone: "hairline",
    ornament: false
  }), /*#__PURE__*/React.createElement(PriceTag, {
    ils: product.ils,
    ars: product.ars,
    size: "lg"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: '14px',
      alignItems: 'center',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(QuantityStepper, {
    value: qty,
    onChange: setQty
  }), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    onClick: () => onAdd(product, qty)
  }, "Agregar al pedido")), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 'var(--fs-caption)',
      color: 'var(--text-muted)'
    }
  }, "Se hornea el mismo d\xEDa del env\xEDo. Peso aprox. 120 g."))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginBlockStart: 'var(--space-8)'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    style: {
      marginBlockEnd: '14px'
    }
  }, "Prob\xE1 tambi\xE9n"), /*#__PURE__*/React.createElement(FlavourStrip, {
    items: products.map(p => ({
      name: p.name,
      image: p.image
    })),
    activeIndex: idx,
    onSelect: i => onOpen(products[i].id)
  })));
}
Object.assign(window, {
  Producto
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Producto.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Sabores.jsx
try { (() => {
const {
  ProductCard,
  SectionHeading,
  Tag
} = window.PATRIADesignSystem_5cb717;
function Sabores({
  products,
  onOpen
}) {
  const [filter, setFilter] = React.useState('todos');
  const filters = [['todos', 'Todos'], ['chocolate', 'Chocolate negro'], ['blanco', 'Chocolate blanco'], ['dulce', 'Dulce de leche']];
  const list = filter === 'todos' ? products : products.filter(p => p.flavours.includes(filter));
  return /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 'var(--container)',
      margin: '0 auto',
      padding: 'var(--space-8) var(--gutter-desktop) var(--section-y-desktop)'
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Ocho sabores",
    title: "Sabores",
    lede: "Todos se hacen el mismo d\xEDa que salen. Eleg\xED los tuyos."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: '10px',
      flexWrap: 'wrap',
      justifyContent: 'center',
      marginBlock: 'var(--space-6)'
    }
  }, filters.map(([id, label]) => /*#__PURE__*/React.createElement(Tag, {
    key: id,
    selected: filter === id,
    onClick: () => setFilter(id)
  }, label))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill,minmax(240px,1fr))',
      gap: '28px'
    }
  }, list.map(p => /*#__PURE__*/React.createElement(ProductCard, {
    key: p.id,
    name: p.name,
    image: p.image,
    description: p.short,
    ils: p.ils,
    ars: p.ars,
    badge: p.badge,
    flavours: p.flavours,
    onClick: () => onOpen(p.id)
  }))));
}
Object.assign(window, {
  Sabores
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Sabores.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/data.js
try { (() => {
const P = '../../assets/photos/';
window.PATRIA_PRODUCTS = [{
  id: 'clasico',
  name: 'El clásico de siempre',
  image: P + 'clasico.jpg',
  ils: 38,
  ars: '4.800',
  flavours: ['dulce', 'chocolate'],
  short: 'Dulce de leche entre dos tapas de chocolate negro, bañado entero.',
  long: 'El de siempre. Tapas de cacao, una capa gruesa de dulce de leche y una cobertura de chocolate negro que se quiebra cuando lo mordés.'
}, {
  id: 'bonbon',
  name: 'Bon Bon',
  image: P + 'bon-bon.jpg',
  ils: 38,
  ars: '4.800',
  badge: 'Nuevo',
  flavours: ['dulce', 'chocolate'],
  short: 'Tapas suaves, dulce de leche espeso y chocolate con leche.',
  long: 'Tapas de maicena bien tiernas, dulce de leche hasta el borde y un baño generoso de chocolate con leche.'
}, {
  id: 'halva',
  name: 'Dulce de leche & Halva',
  image: P + 'halva.jpg',
  ils: 40,
  ars: '5.000',
  flavours: ['halva', 'blanco'],
  short: 'Halva y sésamo con dulce de leche, cubierto de chocolate blanco.',
  long: 'Nuestro encuentro entre Buenos Aires y el shuk: hebras de halva, sésamo tostado y dulce de leche bajo chocolate blanco.'
}, {
  id: 'frutos',
  name: 'Frutos rojos',
  image: P + 'frutos-rojos.jpg',
  ils: 40,
  ars: '5.000',
  flavours: ['frutosRojos', 'dulce'],
  short: 'Compota de frutos rojos y dulce de leche entre tapas de cacao.',
  long: 'Frutos rojos cocidos a fuego lento, ácidos como corresponde, contra el dulce de leche. Tapas de cacao y chocolate con leche.'
}, {
  id: 'malbec',
  name: 'Malbec',
  image: P + 'malbec.jpg',
  ils: 44,
  ars: '5.600',
  badge: 'Edición limitada',
  flavours: ['malbec', 'chocolate'],
  short: 'Reducción de Malbec brillante dentro de chocolate negro.',
  long: 'Una reducción de Malbec mendocino, espesa y oscura, entre bizcochuelo de chocolate. Para tomar con café, o con más vino.'
}, {
  id: 'alfadubai',
  name: 'AlfaDubai',
  image: P + 'alfadubai.jpg',
  ils: 46,
  ars: '5.800',
  badge: 'Nuevo',
  flavours: ['pistacho', 'chocolate'],
  short: 'Pistacho y kadaif crocante bajo chocolate negro.',
  long: 'Pistacho molido con kadaif tostado, cremoso y crujiente a la vez, cerrado con chocolate negro grueso.'
}, {
  id: 'blanut',
  name: 'BlaNut',
  image: P + 'blanut.jpg',
  ils: 42,
  ars: '5.300',
  flavours: ['nuez', 'blanco'],
  short: 'Nueces y crema, cubierto de chocolate blanco con nuez.',
  long: 'Nueces partidas a mano en la crema y en la cobertura de chocolate blanco. El más argentino del norte.'
}, {
  id: 'proteina',
  name: 'Proteína',
  image: P + 'proteina.jpg',
  ils: 40,
  ars: '5.000',
  flavours: ['dulce', 'chocolate'],
  short: 'Mismo gusto, más proteína. Chocolate negro y nibs de cacao.',
  long: 'Tapas con proteína, relleno de dulce y nibs de cacao en el baño de chocolate negro. Sin que pierda nada de lo bueno.'
}];
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/data.js", error: String((e && e.message) || e) }); }

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Eyebrow = __ds_scope.Eyebrow;

__ds_ns.FLAVOUR_COLORS = __ds_scope.FLAVOUR_COLORS;

__ds_ns.FlavourDot = __ds_scope.FlavourDot;

__ds_ns.Rule = __ds_scope.Rule;

__ds_ns.Seal = __ds_scope.Seal;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Dialog = __ds_scope.Dialog;

__ds_ns.EmptyState = __ds_scope.EmptyState;

__ds_ns.Toast = __ds_scope.Toast;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.LangSwitch = __ds_scope.LangSwitch;

__ds_ns.RadioGroup = __ds_scope.RadioGroup;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.PhotoBand = __ds_scope.PhotoBand;

__ds_ns.SectionHeading = __ds_scope.SectionHeading;

__ds_ns.SiteFooter = __ds_scope.SiteFooter;

__ds_ns.SiteHeader = __ds_scope.SiteHeader;

__ds_ns.FlavourStrip = __ds_scope.FlavourStrip;

__ds_ns.PriceTag = __ds_scope.PriceTag;

__ds_ns.ProductCard = __ds_scope.ProductCard;

__ds_ns.QuantityStepper = __ds_scope.QuantityStepper;

})();
