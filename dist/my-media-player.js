
function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const $def2de46b9306e8a$var$t = globalThis, $def2de46b9306e8a$export$b4d10f6001c083c2 = $def2de46b9306e8a$var$t.ShadowRoot && (void 0 === $def2de46b9306e8a$var$t.ShadyCSS || $def2de46b9306e8a$var$t.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, $def2de46b9306e8a$var$s = Symbol(), $def2de46b9306e8a$var$o = new WeakMap;
class $def2de46b9306e8a$export$505d1e8739bad805 {
    constructor(t, e, o){
        if (this._$cssResult$ = !0, o !== $def2de46b9306e8a$var$s) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
        this.cssText = t, this.t = e;
    }
    get styleSheet() {
        let t = this.o;
        const s = this.t;
        if ($def2de46b9306e8a$export$b4d10f6001c083c2 && void 0 === t) {
            const e = void 0 !== s && 1 === s.length;
            e && (t = $def2de46b9306e8a$var$o.get(s)), void 0 === t && ((this.o = t = new CSSStyleSheet).replaceSync(this.cssText), e && $def2de46b9306e8a$var$o.set(s, t));
        }
        return t;
    }
    toString() {
        return this.cssText;
    }
}
const $def2de46b9306e8a$export$8d80f9cac07cdb3 = (t)=>new $def2de46b9306e8a$export$505d1e8739bad805("string" == typeof t ? t : t + "", void 0, $def2de46b9306e8a$var$s), $def2de46b9306e8a$export$dbf350e5966cf602 = (t, ...e)=>{
    const o = 1 === t.length ? t[0] : e.reduce((e, s, o)=>e + ((t)=>{
            if (!0 === t._$cssResult$) return t.cssText;
            if ("number" == typeof t) return t;
            throw Error("Value passed to 'css' function must be a 'css' function result: " + t + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
        })(s) + t[o + 1], t[0]);
    return new $def2de46b9306e8a$export$505d1e8739bad805(o, t, $def2de46b9306e8a$var$s);
}, $def2de46b9306e8a$export$2ca4a66ec4cecb90 = (s, o)=>{
    if ($def2de46b9306e8a$export$b4d10f6001c083c2) s.adoptedStyleSheets = o.map((t)=>t instanceof CSSStyleSheet ? t : t.styleSheet);
    else for (const e of o){
        const o = document.createElement("style"), n = $def2de46b9306e8a$var$t.litNonce;
        void 0 !== n && o.setAttribute("nonce", n), o.textContent = e.cssText, s.appendChild(o);
    }
}, $def2de46b9306e8a$export$ee69dfd951e24778 = $def2de46b9306e8a$export$b4d10f6001c083c2 ? (t)=>t : (t)=>t instanceof CSSStyleSheet ? ((t)=>{
        let e = "";
        for (const s of t.cssRules)e += s.cssText;
        return $def2de46b9306e8a$export$8d80f9cac07cdb3(e);
    })(t) : t;


/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const { is: $19fe8e3abedf4df0$var$i, defineProperty: $19fe8e3abedf4df0$var$e, getOwnPropertyDescriptor: $19fe8e3abedf4df0$var$r, getOwnPropertyNames: $19fe8e3abedf4df0$var$h, getOwnPropertySymbols: $19fe8e3abedf4df0$var$o, getPrototypeOf: $19fe8e3abedf4df0$var$n } = Object, $19fe8e3abedf4df0$var$a = globalThis, $19fe8e3abedf4df0$var$c = $19fe8e3abedf4df0$var$a.trustedTypes, $19fe8e3abedf4df0$var$l = $19fe8e3abedf4df0$var$c ? $19fe8e3abedf4df0$var$c.emptyScript : "", $19fe8e3abedf4df0$var$p = $19fe8e3abedf4df0$var$a.reactiveElementPolyfillSupport, $19fe8e3abedf4df0$var$d = (t, s)=>t, $19fe8e3abedf4df0$export$7312b35fbf521afb = {
    toAttribute (t, s) {
        switch(s){
            case Boolean:
                t = t ? $19fe8e3abedf4df0$var$l : null;
                break;
            case Object:
            case Array:
                t = null == t ? t : JSON.stringify(t);
        }
        return t;
    },
    fromAttribute (t, s) {
        let i = t;
        switch(s){
            case Boolean:
                i = null !== t;
                break;
            case Number:
                i = null === t ? null : Number(t);
                break;
            case Object:
            case Array:
                try {
                    i = JSON.parse(t);
                } catch (t) {
                    i = null;
                }
        }
        return i;
    }
}, $19fe8e3abedf4df0$export$53a6892c50694894 = (t, s)=>!$19fe8e3abedf4df0$var$i(t, s), $19fe8e3abedf4df0$var$y = {
    attribute: !0,
    type: String,
    converter: $19fe8e3abedf4df0$export$7312b35fbf521afb,
    reflect: !1,
    hasChanged: $19fe8e3abedf4df0$export$53a6892c50694894
};
Symbol.metadata ??= Symbol("metadata"), $19fe8e3abedf4df0$var$a.litPropertyMetadata ??= new WeakMap;
class $19fe8e3abedf4df0$export$c7c07a37856565d extends HTMLElement {
    static addInitializer(t) {
        this._$Ei(), (this.l ??= []).push(t);
    }
    static get observedAttributes() {
        return this.finalize(), this._$Eh && [
            ...this._$Eh.keys()
        ];
    }
    static createProperty(t, s = $19fe8e3abedf4df0$var$y) {
        if (s.state && (s.attribute = !1), this._$Ei(), this.elementProperties.set(t, s), !s.noAccessor) {
            const i = Symbol(), r = this.getPropertyDescriptor(t, i, s);
            void 0 !== r && $19fe8e3abedf4df0$var$e(this.prototype, t, r);
        }
    }
    static getPropertyDescriptor(t, s, i) {
        const { get: e, set: h } = $19fe8e3abedf4df0$var$r(this.prototype, t) ?? {
            get () {
                return this[s];
            },
            set (t) {
                this[s] = t;
            }
        };
        return {
            get () {
                return e?.call(this);
            },
            set (s) {
                const r = e?.call(this);
                h.call(this, s), this.requestUpdate(t, r, i);
            },
            configurable: !0,
            enumerable: !0
        };
    }
    static getPropertyOptions(t) {
        return this.elementProperties.get(t) ?? $19fe8e3abedf4df0$var$y;
    }
    static _$Ei() {
        if (this.hasOwnProperty($19fe8e3abedf4df0$var$d("elementProperties"))) return;
        const t = $19fe8e3abedf4df0$var$n(this);
        t.finalize(), void 0 !== t.l && (this.l = [
            ...t.l
        ]), this.elementProperties = new Map(t.elementProperties);
    }
    static finalize() {
        if (this.hasOwnProperty($19fe8e3abedf4df0$var$d("finalized"))) return;
        if (this.finalized = !0, this._$Ei(), this.hasOwnProperty($19fe8e3abedf4df0$var$d("properties"))) {
            const t = this.properties, s = [
                ...$19fe8e3abedf4df0$var$h(t),
                ...$19fe8e3abedf4df0$var$o(t)
            ];
            for (const i of s)this.createProperty(i, t[i]);
        }
        const t = this[Symbol.metadata];
        if (null !== t) {
            const s = litPropertyMetadata.get(t);
            if (void 0 !== s) for (const [t, i] of s)this.elementProperties.set(t, i);
        }
        this._$Eh = new Map;
        for (const [t, s] of this.elementProperties){
            const i = this._$Eu(t, s);
            void 0 !== i && this._$Eh.set(i, t);
        }
        this.elementStyles = this.finalizeStyles(this.styles);
    }
    static finalizeStyles(s) {
        const i = [];
        if (Array.isArray(s)) {
            const e = new Set(s.flat(1 / 0).reverse());
            for (const s of e)i.unshift((0, $def2de46b9306e8a$export$ee69dfd951e24778)(s));
        } else void 0 !== s && i.push((0, $def2de46b9306e8a$export$ee69dfd951e24778)(s));
        return i;
    }
    static _$Eu(t, s) {
        const i = s.attribute;
        return !1 === i ? void 0 : "string" == typeof i ? i : "string" == typeof t ? t.toLowerCase() : void 0;
    }
    constructor(){
        super(), this._$Ep = void 0, this.isUpdatePending = !1, this.hasUpdated = !1, this._$Em = null, this._$Ev();
    }
    _$Ev() {
        this._$ES = new Promise((t)=>this.enableUpdating = t), this._$AL = new Map, this._$E_(), this.requestUpdate(), this.constructor.l?.forEach((t)=>t(this));
    }
    addController(t) {
        (this._$EO ??= new Set).add(t), void 0 !== this.renderRoot && this.isConnected && t.hostConnected?.();
    }
    removeController(t) {
        this._$EO?.delete(t);
    }
    _$E_() {
        const t = new Map, s = this.constructor.elementProperties;
        for (const i of s.keys())this.hasOwnProperty(i) && (t.set(i, this[i]), delete this[i]);
        t.size > 0 && (this._$Ep = t);
    }
    createRenderRoot() {
        const t = this.shadowRoot ?? this.attachShadow(this.constructor.shadowRootOptions);
        return (0, $def2de46b9306e8a$export$2ca4a66ec4cecb90)(t, this.constructor.elementStyles), t;
    }
    connectedCallback() {
        this.renderRoot ??= this.createRenderRoot(), this.enableUpdating(!0), this._$EO?.forEach((t)=>t.hostConnected?.());
    }
    enableUpdating(t) {}
    disconnectedCallback() {
        this._$EO?.forEach((t)=>t.hostDisconnected?.());
    }
    attributeChangedCallback(t, s, i) {
        this._$AK(t, i);
    }
    _$EC(t, s) {
        const i = this.constructor.elementProperties.get(t), e = this.constructor._$Eu(t, i);
        if (void 0 !== e && !0 === i.reflect) {
            const r = (void 0 !== i.converter?.toAttribute ? i.converter : $19fe8e3abedf4df0$export$7312b35fbf521afb).toAttribute(s, i.type);
            this._$Em = t, null == r ? this.removeAttribute(e) : this.setAttribute(e, r), this._$Em = null;
        }
    }
    _$AK(t, s) {
        const i = this.constructor, e = i._$Eh.get(t);
        if (void 0 !== e && this._$Em !== e) {
            const t = i.getPropertyOptions(e), r = "function" == typeof t.converter ? {
                fromAttribute: t.converter
            } : void 0 !== t.converter?.fromAttribute ? t.converter : $19fe8e3abedf4df0$export$7312b35fbf521afb;
            this._$Em = e, this[e] = r.fromAttribute(s, t.type), this._$Em = null;
        }
    }
    requestUpdate(t, s, i) {
        if (void 0 !== t) {
            if (i ??= this.constructor.getPropertyOptions(t), !(i.hasChanged ?? $19fe8e3abedf4df0$export$53a6892c50694894)(this[t], s)) return;
            this.P(t, s, i);
        }
        !1 === this.isUpdatePending && (this._$ES = this._$ET());
    }
    P(t, s, i) {
        this._$AL.has(t) || this._$AL.set(t, s), !0 === i.reflect && this._$Em !== t && (this._$Ej ??= new Set).add(t);
    }
    async _$ET() {
        this.isUpdatePending = !0;
        try {
            await this._$ES;
        } catch (t) {
            Promise.reject(t);
        }
        const t = this.scheduleUpdate();
        return null != t && await t, !this.isUpdatePending;
    }
    scheduleUpdate() {
        return this.performUpdate();
    }
    performUpdate() {
        if (!this.isUpdatePending) return;
        if (!this.hasUpdated) {
            if (this.renderRoot ??= this.createRenderRoot(), this._$Ep) {
                for (const [t, s] of this._$Ep)this[t] = s;
                this._$Ep = void 0;
            }
            const t = this.constructor.elementProperties;
            if (t.size > 0) for (const [s, i] of t)!0 !== i.wrapped || this._$AL.has(s) || void 0 === this[s] || this.P(s, this[s], i);
        }
        let t = !1;
        const s = this._$AL;
        try {
            t = this.shouldUpdate(s), t ? (this.willUpdate(s), this._$EO?.forEach((t)=>t.hostUpdate?.()), this.update(s)) : this._$EU();
        } catch (s) {
            throw t = !1, this._$EU(), s;
        }
        t && this._$AE(s);
    }
    willUpdate(t) {}
    _$AE(t) {
        this._$EO?.forEach((t)=>t.hostUpdated?.()), this.hasUpdated || (this.hasUpdated = !0, this.firstUpdated(t)), this.updated(t);
    }
    _$EU() {
        this._$AL = new Map, this.isUpdatePending = !1;
    }
    get updateComplete() {
        return this.getUpdateComplete();
    }
    getUpdateComplete() {
        return this._$ES;
    }
    shouldUpdate(t) {
        return !0;
    }
    update(t) {
        this._$Ej &&= this._$Ej.forEach((t)=>this._$EC(t, this[t])), this._$EU();
    }
    updated(t) {}
    firstUpdated(t) {}
}
$19fe8e3abedf4df0$export$c7c07a37856565d.elementStyles = [], $19fe8e3abedf4df0$export$c7c07a37856565d.shadowRootOptions = {
    mode: "open"
}, $19fe8e3abedf4df0$export$c7c07a37856565d[$19fe8e3abedf4df0$var$d("elementProperties")] = new Map, $19fe8e3abedf4df0$export$c7c07a37856565d[$19fe8e3abedf4df0$var$d("finalized")] = new Map, $19fe8e3abedf4df0$var$p?.({
    ReactiveElement: $19fe8e3abedf4df0$export$c7c07a37856565d
}), ($19fe8e3abedf4df0$var$a.reactiveElementVersions ??= []).push("2.0.4");


/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const $f58f44579a4747ac$var$t = globalThis, $f58f44579a4747ac$var$i = $f58f44579a4747ac$var$t.trustedTypes, $f58f44579a4747ac$var$s = $f58f44579a4747ac$var$i ? $f58f44579a4747ac$var$i.createPolicy("lit-html", {
    createHTML: (t)=>t
}) : void 0, $f58f44579a4747ac$var$e = "$lit$", $f58f44579a4747ac$var$h = `lit$${(Math.random() + "").slice(9)}$`, $f58f44579a4747ac$var$o = "?" + $f58f44579a4747ac$var$h, $f58f44579a4747ac$var$n = `<${$f58f44579a4747ac$var$o}>`, $f58f44579a4747ac$var$r = document, $f58f44579a4747ac$var$l = ()=>$f58f44579a4747ac$var$r.createComment(""), $f58f44579a4747ac$var$c = (t)=>null === t || "object" != typeof t && "function" != typeof t, $f58f44579a4747ac$var$a = Array.isArray, $f58f44579a4747ac$var$u = (t)=>$f58f44579a4747ac$var$a(t) || "function" == typeof t?.[Symbol.iterator], $f58f44579a4747ac$var$d = "[ 	\n\f\r]", $f58f44579a4747ac$var$f = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, $f58f44579a4747ac$var$v = /-->/g, $f58f44579a4747ac$var$_ = />/g, $f58f44579a4747ac$var$m = RegExp(`>|${$f58f44579a4747ac$var$d}(?:([^\\s"'>=/]+)(${$f58f44579a4747ac$var$d}*=${$f58f44579a4747ac$var$d}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`, "g"), $f58f44579a4747ac$var$p = /'/g, $f58f44579a4747ac$var$g = /"/g, $f58f44579a4747ac$var$$ = /^(?:script|style|textarea|title)$/i, $f58f44579a4747ac$var$y = (t)=>(i, ...s)=>({
            _$litType$: t,
            strings: i,
            values: s
        }), $f58f44579a4747ac$export$c0bb0b647f701bb5 = $f58f44579a4747ac$var$y(1), $f58f44579a4747ac$export$7ed1367e7fa1ad68 = $f58f44579a4747ac$var$y(2), $f58f44579a4747ac$export$9c068ae9cc5db4e8 = Symbol.for("lit-noChange"), $f58f44579a4747ac$export$45b790e32b2810ee = Symbol.for("lit-nothing"), $f58f44579a4747ac$var$A = new WeakMap, $f58f44579a4747ac$var$E = $f58f44579a4747ac$var$r.createTreeWalker($f58f44579a4747ac$var$r, 129);
function $f58f44579a4747ac$var$C(t, i) {
    if (!Array.isArray(t) || !t.hasOwnProperty("raw")) throw Error("invalid template strings array");
    return void 0 !== $f58f44579a4747ac$var$s ? $f58f44579a4747ac$var$s.createHTML(i) : i;
}
const $f58f44579a4747ac$var$P = (t, i)=>{
    const s = t.length - 1, o = [];
    let r, l = 2 === i ? "<svg>" : "", c = $f58f44579a4747ac$var$f;
    for(let i = 0; i < s; i++){
        const s = t[i];
        let a, u, d = -1, y = 0;
        for(; y < s.length && (c.lastIndex = y, u = c.exec(s), null !== u);)y = c.lastIndex, c === $f58f44579a4747ac$var$f ? "!--" === u[1] ? c = $f58f44579a4747ac$var$v : void 0 !== u[1] ? c = $f58f44579a4747ac$var$_ : void 0 !== u[2] ? ($f58f44579a4747ac$var$$.test(u[2]) && (r = RegExp("</" + u[2], "g")), c = $f58f44579a4747ac$var$m) : void 0 !== u[3] && (c = $f58f44579a4747ac$var$m) : c === $f58f44579a4747ac$var$m ? ">" === u[0] ? (c = r ?? $f58f44579a4747ac$var$f, d = -1) : void 0 === u[1] ? d = -2 : (d = c.lastIndex - u[2].length, a = u[1], c = void 0 === u[3] ? $f58f44579a4747ac$var$m : '"' === u[3] ? $f58f44579a4747ac$var$g : $f58f44579a4747ac$var$p) : c === $f58f44579a4747ac$var$g || c === $f58f44579a4747ac$var$p ? c = $f58f44579a4747ac$var$m : c === $f58f44579a4747ac$var$v || c === $f58f44579a4747ac$var$_ ? c = $f58f44579a4747ac$var$f : (c = $f58f44579a4747ac$var$m, r = void 0);
        const x = c === $f58f44579a4747ac$var$m && t[i + 1].startsWith("/>") ? " " : "";
        l += c === $f58f44579a4747ac$var$f ? s + $f58f44579a4747ac$var$n : d >= 0 ? (o.push(a), s.slice(0, d) + $f58f44579a4747ac$var$e + s.slice(d) + $f58f44579a4747ac$var$h + x) : s + $f58f44579a4747ac$var$h + (-2 === d ? i : x);
    }
    return [
        $f58f44579a4747ac$var$C(t, l + (t[s] || "<?>") + (2 === i ? "</svg>" : "")),
        o
    ];
};
class $f58f44579a4747ac$var$V {
    constructor({ strings: t, _$litType$: s }, n){
        let r;
        this.parts = [];
        let c = 0, a = 0;
        const u = t.length - 1, d = this.parts, [f, v] = $f58f44579a4747ac$var$P(t, s);
        if (this.el = $f58f44579a4747ac$var$V.createElement(f, n), $f58f44579a4747ac$var$E.currentNode = this.el.content, 2 === s) {
            const t = this.el.content.firstChild;
            t.replaceWith(...t.childNodes);
        }
        for(; null !== (r = $f58f44579a4747ac$var$E.nextNode()) && d.length < u;){
            if (1 === r.nodeType) {
                if (r.hasAttributes()) for (const t of r.getAttributeNames())if (t.endsWith($f58f44579a4747ac$var$e)) {
                    const i = v[a++], s = r.getAttribute(t).split($f58f44579a4747ac$var$h), e = /([.?@])?(.*)/.exec(i);
                    d.push({
                        type: 1,
                        index: c,
                        name: e[2],
                        strings: s,
                        ctor: "." === e[1] ? $f58f44579a4747ac$var$k : "?" === e[1] ? $f58f44579a4747ac$var$H : "@" === e[1] ? $f58f44579a4747ac$var$I : $f58f44579a4747ac$var$R
                    }), r.removeAttribute(t);
                } else t.startsWith($f58f44579a4747ac$var$h) && (d.push({
                    type: 6,
                    index: c
                }), r.removeAttribute(t));
                if ($f58f44579a4747ac$var$$.test(r.tagName)) {
                    const t = r.textContent.split($f58f44579a4747ac$var$h), s = t.length - 1;
                    if (s > 0) {
                        r.textContent = $f58f44579a4747ac$var$i ? $f58f44579a4747ac$var$i.emptyScript : "";
                        for(let i = 0; i < s; i++)r.append(t[i], $f58f44579a4747ac$var$l()), $f58f44579a4747ac$var$E.nextNode(), d.push({
                            type: 2,
                            index: ++c
                        });
                        r.append(t[s], $f58f44579a4747ac$var$l());
                    }
                }
            } else if (8 === r.nodeType) {
                if (r.data === $f58f44579a4747ac$var$o) d.push({
                    type: 2,
                    index: c
                });
                else {
                    let t = -1;
                    for(; -1 !== (t = r.data.indexOf($f58f44579a4747ac$var$h, t + 1));)d.push({
                        type: 7,
                        index: c
                    }), t += $f58f44579a4747ac$var$h.length - 1;
                }
            }
            c++;
        }
    }
    static createElement(t, i) {
        const s = $f58f44579a4747ac$var$r.createElement("template");
        return s.innerHTML = t, s;
    }
}
function $f58f44579a4747ac$var$N(t, i, s = t, e) {
    if (i === $f58f44579a4747ac$export$9c068ae9cc5db4e8) return i;
    let h = void 0 !== e ? s._$Co?.[e] : s._$Cl;
    const o = $f58f44579a4747ac$var$c(i) ? void 0 : i._$litDirective$;
    return h?.constructor !== o && (h?._$AO?.(!1), void 0 === o ? h = void 0 : (h = new o(t), h._$AT(t, s, e)), void 0 !== e ? (s._$Co ??= [])[e] = h : s._$Cl = h), void 0 !== h && (i = $f58f44579a4747ac$var$N(t, h._$AS(t, i.values), h, e)), i;
}
class $f58f44579a4747ac$var$S {
    constructor(t, i){
        this._$AV = [], this._$AN = void 0, this._$AD = t, this._$AM = i;
    }
    get parentNode() {
        return this._$AM.parentNode;
    }
    get _$AU() {
        return this._$AM._$AU;
    }
    u(t) {
        const { el: { content: i }, parts: s } = this._$AD, e = (t?.creationScope ?? $f58f44579a4747ac$var$r).importNode(i, !0);
        $f58f44579a4747ac$var$E.currentNode = e;
        let h = $f58f44579a4747ac$var$E.nextNode(), o = 0, n = 0, l = s[0];
        for(; void 0 !== l;){
            if (o === l.index) {
                let i;
                2 === l.type ? i = new $f58f44579a4747ac$var$M(h, h.nextSibling, this, t) : 1 === l.type ? i = new l.ctor(h, l.name, l.strings, this, t) : 6 === l.type && (i = new $f58f44579a4747ac$var$L(h, this, t)), this._$AV.push(i), l = s[++n];
            }
            o !== l?.index && (h = $f58f44579a4747ac$var$E.nextNode(), o++);
        }
        return $f58f44579a4747ac$var$E.currentNode = $f58f44579a4747ac$var$r, e;
    }
    p(t) {
        let i = 0;
        for (const s of this._$AV)void 0 !== s && (void 0 !== s.strings ? (s._$AI(t, s, i), i += s.strings.length - 2) : s._$AI(t[i])), i++;
    }
}
class $f58f44579a4747ac$var$M {
    get _$AU() {
        return this._$AM?._$AU ?? this._$Cv;
    }
    constructor(t, i, s, e){
        this.type = 2, this._$AH = $f58f44579a4747ac$export$45b790e32b2810ee, this._$AN = void 0, this._$AA = t, this._$AB = i, this._$AM = s, this.options = e, this._$Cv = e?.isConnected ?? !0;
    }
    get parentNode() {
        let t = this._$AA.parentNode;
        const i = this._$AM;
        return void 0 !== i && 11 === t?.nodeType && (t = i.parentNode), t;
    }
    get startNode() {
        return this._$AA;
    }
    get endNode() {
        return this._$AB;
    }
    _$AI(t, i = this) {
        t = $f58f44579a4747ac$var$N(this, t, i), $f58f44579a4747ac$var$c(t) ? t === $f58f44579a4747ac$export$45b790e32b2810ee || null == t || "" === t ? (this._$AH !== $f58f44579a4747ac$export$45b790e32b2810ee && this._$AR(), this._$AH = $f58f44579a4747ac$export$45b790e32b2810ee) : t !== this._$AH && t !== $f58f44579a4747ac$export$9c068ae9cc5db4e8 && this._(t) : void 0 !== t._$litType$ ? this.$(t) : void 0 !== t.nodeType ? this.T(t) : $f58f44579a4747ac$var$u(t) ? this.k(t) : this._(t);
    }
    S(t) {
        return this._$AA.parentNode.insertBefore(t, this._$AB);
    }
    T(t) {
        this._$AH !== t && (this._$AR(), this._$AH = this.S(t));
    }
    _(t) {
        this._$AH !== $f58f44579a4747ac$export$45b790e32b2810ee && $f58f44579a4747ac$var$c(this._$AH) ? this._$AA.nextSibling.data = t : this.T($f58f44579a4747ac$var$r.createTextNode(t)), this._$AH = t;
    }
    $(t) {
        const { values: i, _$litType$: s } = t, e = "number" == typeof s ? this._$AC(t) : (void 0 === s.el && (s.el = $f58f44579a4747ac$var$V.createElement($f58f44579a4747ac$var$C(s.h, s.h[0]), this.options)), s);
        if (this._$AH?._$AD === e) this._$AH.p(i);
        else {
            const t = new $f58f44579a4747ac$var$S(e, this), s = t.u(this.options);
            t.p(i), this.T(s), this._$AH = t;
        }
    }
    _$AC(t) {
        let i = $f58f44579a4747ac$var$A.get(t.strings);
        return void 0 === i && $f58f44579a4747ac$var$A.set(t.strings, i = new $f58f44579a4747ac$var$V(t)), i;
    }
    k(t) {
        $f58f44579a4747ac$var$a(this._$AH) || (this._$AH = [], this._$AR());
        const i = this._$AH;
        let s, e = 0;
        for (const h of t)e === i.length ? i.push(s = new $f58f44579a4747ac$var$M(this.S($f58f44579a4747ac$var$l()), this.S($f58f44579a4747ac$var$l()), this, this.options)) : s = i[e], s._$AI(h), e++;
        e < i.length && (this._$AR(s && s._$AB.nextSibling, e), i.length = e);
    }
    _$AR(t = this._$AA.nextSibling, i) {
        for(this._$AP?.(!1, !0, i); t && t !== this._$AB;){
            const i = t.nextSibling;
            t.remove(), t = i;
        }
    }
    setConnected(t) {
        void 0 === this._$AM && (this._$Cv = t, this._$AP?.(t));
    }
}
class $f58f44579a4747ac$var$R {
    get tagName() {
        return this.element.tagName;
    }
    get _$AU() {
        return this._$AM._$AU;
    }
    constructor(t, i, s, e, h){
        this.type = 1, this._$AH = $f58f44579a4747ac$export$45b790e32b2810ee, this._$AN = void 0, this.element = t, this.name = i, this._$AM = e, this.options = h, s.length > 2 || "" !== s[0] || "" !== s[1] ? (this._$AH = Array(s.length - 1).fill(new String), this.strings = s) : this._$AH = $f58f44579a4747ac$export$45b790e32b2810ee;
    }
    _$AI(t, i = this, s, e) {
        const h = this.strings;
        let o = !1;
        if (void 0 === h) t = $f58f44579a4747ac$var$N(this, t, i, 0), o = !$f58f44579a4747ac$var$c(t) || t !== this._$AH && t !== $f58f44579a4747ac$export$9c068ae9cc5db4e8, o && (this._$AH = t);
        else {
            const e = t;
            let n, r;
            for(t = h[0], n = 0; n < h.length - 1; n++)r = $f58f44579a4747ac$var$N(this, e[s + n], i, n), r === $f58f44579a4747ac$export$9c068ae9cc5db4e8 && (r = this._$AH[n]), o ||= !$f58f44579a4747ac$var$c(r) || r !== this._$AH[n], r === $f58f44579a4747ac$export$45b790e32b2810ee ? t = $f58f44579a4747ac$export$45b790e32b2810ee : t !== $f58f44579a4747ac$export$45b790e32b2810ee && (t += (r ?? "") + h[n + 1]), this._$AH[n] = r;
        }
        o && !e && this.j(t);
    }
    j(t) {
        t === $f58f44579a4747ac$export$45b790e32b2810ee ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, t ?? "");
    }
}
class $f58f44579a4747ac$var$k extends $f58f44579a4747ac$var$R {
    constructor(){
        super(...arguments), this.type = 3;
    }
    j(t) {
        this.element[this.name] = t === $f58f44579a4747ac$export$45b790e32b2810ee ? void 0 : t;
    }
}
class $f58f44579a4747ac$var$H extends $f58f44579a4747ac$var$R {
    constructor(){
        super(...arguments), this.type = 4;
    }
    j(t) {
        this.element.toggleAttribute(this.name, !!t && t !== $f58f44579a4747ac$export$45b790e32b2810ee);
    }
}
class $f58f44579a4747ac$var$I extends $f58f44579a4747ac$var$R {
    constructor(t, i, s, e, h){
        super(t, i, s, e, h), this.type = 5;
    }
    _$AI(t, i = this) {
        if ((t = $f58f44579a4747ac$var$N(this, t, i, 0) ?? $f58f44579a4747ac$export$45b790e32b2810ee) === $f58f44579a4747ac$export$9c068ae9cc5db4e8) return;
        const s = this._$AH, e = t === $f58f44579a4747ac$export$45b790e32b2810ee && s !== $f58f44579a4747ac$export$45b790e32b2810ee || t.capture !== s.capture || t.once !== s.once || t.passive !== s.passive, h = t !== $f58f44579a4747ac$export$45b790e32b2810ee && (s === $f58f44579a4747ac$export$45b790e32b2810ee || e);
        e && this.element.removeEventListener(this.name, this, s), h && this.element.addEventListener(this.name, this, t), this._$AH = t;
    }
    handleEvent(t) {
        "function" == typeof this._$AH ? this._$AH.call(this.options?.host ?? this.element, t) : this._$AH.handleEvent(t);
    }
}
class $f58f44579a4747ac$var$L {
    constructor(t, i, s){
        this.element = t, this.type = 6, this._$AN = void 0, this._$AM = i, this.options = s;
    }
    get _$AU() {
        return this._$AM._$AU;
    }
    _$AI(t) {
        $f58f44579a4747ac$var$N(this, t);
    }
}
const $f58f44579a4747ac$export$8613d1ca9052b22e = {
    P: $f58f44579a4747ac$var$e,
    A: $f58f44579a4747ac$var$h,
    C: $f58f44579a4747ac$var$o,
    M: 1,
    L: $f58f44579a4747ac$var$P,
    R: $f58f44579a4747ac$var$S,
    D: $f58f44579a4747ac$var$u,
    V: $f58f44579a4747ac$var$N,
    I: $f58f44579a4747ac$var$M,
    H: $f58f44579a4747ac$var$R,
    N: $f58f44579a4747ac$var$H,
    U: $f58f44579a4747ac$var$I,
    B: $f58f44579a4747ac$var$k,
    F: $f58f44579a4747ac$var$L
}, $f58f44579a4747ac$var$Z = $f58f44579a4747ac$var$t.litHtmlPolyfillSupport;
$f58f44579a4747ac$var$Z?.($f58f44579a4747ac$var$V, $f58f44579a4747ac$var$M), ($f58f44579a4747ac$var$t.litHtmlVersions ??= []).push("3.1.2");
const $f58f44579a4747ac$export$b3890eb0ae9dca99 = (t, i, s)=>{
    const e = s?.renderBefore ?? i;
    let h = e._$litPart$;
    if (void 0 === h) {
        const t = s?.renderBefore ?? null;
        e._$litPart$ = h = new $f58f44579a4747ac$var$M(i.insertBefore($f58f44579a4747ac$var$l(), t), t, void 0, s ?? {});
    }
    return h._$AI(t), h;
};




/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ class $ab210b2da7b39b9d$export$3f2f9f5909897157 extends (0, $19fe8e3abedf4df0$export$c7c07a37856565d) {
    constructor(){
        super(...arguments), this.renderOptions = {
            host: this
        }, this._$Do = void 0;
    }
    createRenderRoot() {
        const t = super.createRenderRoot();
        return this.renderOptions.renderBefore ??= t.firstChild, t;
    }
    update(t) {
        const i = this.render();
        this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(t), this._$Do = (0, $f58f44579a4747ac$export$b3890eb0ae9dca99)(i, this.renderRoot, this.renderOptions);
    }
    connectedCallback() {
        super.connectedCallback(), this._$Do?.setConnected(!0);
    }
    disconnectedCallback() {
        super.disconnectedCallback(), this._$Do?.setConnected(!1);
    }
    render() {
        return 0, $f58f44579a4747ac$export$9c068ae9cc5db4e8;
    }
}
$ab210b2da7b39b9d$export$3f2f9f5909897157._$litElement$ = !0, $ab210b2da7b39b9d$export$3f2f9f5909897157["finalized"] = !0, globalThis.litElementHydrateSupport?.({
    LitElement: $ab210b2da7b39b9d$export$3f2f9f5909897157
});
const $ab210b2da7b39b9d$var$r = globalThis.litElementPolyfillSupport;
$ab210b2da7b39b9d$var$r?.({
    LitElement: $ab210b2da7b39b9d$export$3f2f9f5909897157
});
const $ab210b2da7b39b9d$export$f5c524615a7708d6 = {
    _$AK: (t, e, i)=>{
        t._$AK(e, i);
    },
    _$AL: (t)=>t._$AL
};
(globalThis.litElementVersions ??= []).push("4.0.4");


/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const $a00bca1a101a9088$export$6acf61af03e62db = !1;





/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const $107bb7d062dde330$export$9ba3b3f20a85bfa = {
    ATTRIBUTE: 1,
    CHILD: 2,
    PROPERTY: 3,
    BOOLEAN_ATTRIBUTE: 4,
    EVENT: 5,
    ELEMENT: 6
}, $107bb7d062dde330$export$99b43ad1ed32e735 = (t)=>(...e)=>({
            _$litDirective$: t,
            values: e
        });
class $107bb7d062dde330$export$befdefbdce210f91 {
    constructor(t){}
    get _$AU() {
        return this._$AM._$AU;
    }
    _$AT(t, e, i) {
        this._$Ct = t, this._$AM = e, this._$Ci = i;
    }
    _$AS(t, e) {
        return this.update(t, e);
    }
    update(t, e) {
        return this.render(...e);
    }
}


/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const $19f464fcda7d2482$var$n = "important", $19f464fcda7d2482$var$i = " !" + $19f464fcda7d2482$var$n, $19f464fcda7d2482$export$1e5b4ce2fa884e6a = (0, $107bb7d062dde330$export$99b43ad1ed32e735)(class extends (0, $107bb7d062dde330$export$befdefbdce210f91) {
    constructor(t){
        if (super(t), t.type !== (0, $107bb7d062dde330$export$9ba3b3f20a85bfa).ATTRIBUTE || "style" !== t.name || t.strings?.length > 2) throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.");
    }
    render(t) {
        return Object.keys(t).reduce((e, r)=>{
            const s = t[r];
            return null == s ? e : e + `${r = r.includes("-") ? r : r.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g, "-$&").toLowerCase()}:${s};`;
        }, "");
    }
    update(e, [r]) {
        const { style: s } = e.element;
        if (void 0 === this.ft) return this.ft = new Set(Object.keys(r)), this.render(r);
        for (const t of this.ft)null == r[t] && (this.ft.delete(t), t.includes("-") ? s.removeProperty(t) : s[t] = null);
        for(const t in r){
            const e = r[t];
            if (null != e) {
                this.ft.add(t);
                const r = "string" == typeof e && e.endsWith($19f464fcda7d2482$var$i);
                t.includes("-") || r ? s.setProperty(t, r ? e.slice(0, -11) : e, r ? $19f464fcda7d2482$var$n : "") : s[t] = e;
            }
        }
        return 0, $f58f44579a4747ac$export$9c068ae9cc5db4e8;
    }
});


var $a3ab59aba365b2b9$exports = {};
(function webpackUniversalModuleDefinition(root, factory) {
    $a3ab59aba365b2b9$exports = factory();
})(window, function() {
    return /******/ function(modules) {
        /******/ // The module cache
        /******/ var installedModules = {};
        /******/ /******/ // The require function
        /******/ function __webpack_require__(moduleId) {
            /******/ /******/ // Check if module is in cache
            /******/ if (installedModules[moduleId]) /******/ return installedModules[moduleId].exports;
            /******/ // Create a new module (and put it into the cache)
            /******/ var module1 = installedModules[moduleId] = {
                /******/ i: moduleId,
                /******/ l: false,
                /******/ exports: {}
            };
            /******/ /******/ // Execute the module function
            /******/ modules[moduleId].call(module1.exports, module1, module1.exports, __webpack_require__);
            /******/ /******/ // Flag the module as loaded
            /******/ module1.l = true;
            /******/ /******/ // Return the exports of the module
            /******/ return module1.exports;
        /******/ }
        /******/ /******/ /******/ // expose the modules object (__webpack_modules__)
        /******/ __webpack_require__.m = modules;
        /******/ /******/ // expose the module cache
        /******/ __webpack_require__.c = installedModules;
        /******/ /******/ // define getter function for harmony exports
        /******/ __webpack_require__.d = function(exports, name, getter) {
            /******/ if (!__webpack_require__.o(exports, name)) /******/ Object.defineProperty(exports, name, {
                enumerable: true,
                get: getter
            });
        /******/ };
        /******/ /******/ // define __esModule on exports
        /******/ __webpack_require__.r = function(exports) {
            /******/ if (typeof Symbol !== "undefined" && Symbol.toStringTag) /******/ Object.defineProperty(exports, Symbol.toStringTag, {
                value: "Module"
            });
            /******/ Object.defineProperty(exports, "__esModule", {
                value: true
            });
        /******/ };
        /******/ /******/ // create a fake namespace object
        /******/ // mode & 1: value is a module id, require it
        /******/ // mode & 2: merge all properties of value into the ns
        /******/ // mode & 4: return value when already ns object
        /******/ // mode & 8|1: behave like require
        /******/ __webpack_require__.t = function(value, mode) {
            /******/ if (mode & 1) value = __webpack_require__(value);
            /******/ if (mode & 8) return value;
            /******/ if (mode & 4 && typeof value === "object" && value && value.__esModule) return value;
            /******/ var ns = Object.create(null);
            /******/ __webpack_require__.r(ns);
            /******/ Object.defineProperty(ns, "default", {
                enumerable: true,
                value: value
            });
            /******/ if (mode & 2 && typeof value != "string") for(var key in value)__webpack_require__.d(ns, key, (function(key) {
                return value[key];
            }).bind(null, key));
            /******/ return ns;
        /******/ };
        /******/ /******/ // getDefaultExport function for compatibility with non-harmony modules
        /******/ __webpack_require__.n = function(module1) {
            /******/ var getter = module1 && module1.__esModule ? /******/ function getDefault() {
                return module1["default"];
            } : /******/ function getModuleExports() {
                return module1;
            };
            /******/ __webpack_require__.d(getter, "a", getter);
            /******/ return getter;
        /******/ };
        /******/ /******/ // Object.prototype.hasOwnProperty.call
        /******/ __webpack_require__.o = function(object, property) {
            return Object.prototype.hasOwnProperty.call(object, property);
        };
        /******/ /******/ // __webpack_public_path__
        /******/ __webpack_require__.p = "";
        /******/ /******/ /******/ // Load entry module and return exports
        /******/ return __webpack_require__(__webpack_require__.s = 10);
    /******/ }([
        /* 0 */ /***/ function(module1, exports, __webpack_require__) {
            "use strict";
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            exports.assignDeep = exports.mapValues = void 0;
            function mapValues(o, mapper) {
                var result = {};
                for(var key in o)if (o.hasOwnProperty(key)) {
                    var v = o[key];
                    result[key] = mapper(v);
                }
                return result;
            }
            exports.mapValues = mapValues;
            /**
 * Overwrite values or properties on objects and lists recursively.
 * A shallow copy will be created for each array value.
 */ function assignDeep(target) {
                var sources = [];
                for(var _i = 1; _i < arguments.length; _i++)sources[_i - 1] = arguments[_i];
                sources.forEach(function(s) {
                    if (!s) return;
                    for(var key in s)if (s.hasOwnProperty(key)) {
                        var v = s[key];
                        if (Array.isArray(v)) // Shallow copy
                        target[key] = v.slice(0);
                        else if (typeof v === "object") {
                            if (!target[key]) target[key] = {};
                            assignDeep(target[key], v);
                        } else target[key] = v;
                    }
                });
                return target;
            }
            exports.assignDeep = assignDeep;
        /***/ },
        /* 1 */ /***/ function(module1, exports, __webpack_require__) {
            "use strict";
            var __importDefault = this && this.__importDefault || function(mod) {
                return mod && mod.__esModule ? mod : {
                    "default": mod
                };
            };
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            var options_1 = __webpack_require__(7);
            var builder_1 = __importDefault(__webpack_require__(8));
            var utils_1 = __webpack_require__(0);
            var Vibrant = /** @class */ function() {
                function Vibrant(_src, opts) {
                    this._src = _src;
                    this.opts = utils_1.assignDeep({}, Vibrant.DefaultOpts, opts);
                }
                Vibrant.use = function(pipeline) {
                    this._pipeline = pipeline;
                };
                Vibrant.from = function(src) {
                    return new builder_1.default(src);
                };
                Object.defineProperty(Vibrant.prototype, "result", {
                    get: function() {
                        return this._result;
                    },
                    enumerable: false,
                    configurable: true
                });
                Vibrant.prototype._process = function(image, opts) {
                    var quantizer = this.opts.quantizer;
                    image.scaleDown(this.opts);
                    var processOpts = options_1.buildProcessOptions(this.opts, opts);
                    return Vibrant._pipeline.process(image.getImageData(), processOpts);
                };
                Vibrant.prototype.palette = function() {
                    return this.swatches();
                };
                Vibrant.prototype.swatches = function() {
                    throw new Error("Method deprecated. Use `Vibrant.result.palettes[name]` instead");
                };
                Vibrant.prototype.getPalette = function() {
                    var _this = this;
                    var arg0 = arguments[0];
                    var arg1 = arguments[1];
                    var name = typeof arg0 === "string" ? arg0 : "default";
                    var cb = typeof arg0 === "string" ? arg1 : arg0;
                    var image = new this.opts.ImageClass();
                    return image.load(this._src).then(function(image) {
                        return _this._process(image, {
                            generators: [
                                name
                            ]
                        });
                    }).then(function(result) {
                        _this._result = result;
                        return result.palettes[name];
                    }).then(function(res) {
                        image.remove();
                        if (cb) cb(undefined, res);
                        return res;
                    }).catch(function(err) {
                        image.remove();
                        if (cb) cb(err);
                        return Promise.reject(err);
                    });
                };
                Vibrant.prototype.getPalettes = function() {
                    var _this = this;
                    var arg0 = arguments[0];
                    var arg1 = arguments[1];
                    var names = Array.isArray(arg0) ? arg0 : [
                        "*"
                    ];
                    var cb = Array.isArray(arg0) ? arg1 : arg0;
                    var image = new this.opts.ImageClass();
                    return image.load(this._src).then(function(image) {
                        return _this._process(image, {
                            generators: names
                        });
                    }).then(function(result) {
                        _this._result = result;
                        return result.palettes;
                    }).then(function(res) {
                        image.remove();
                        if (cb) cb(undefined, res);
                        return res;
                    }).catch(function(err) {
                        image.remove();
                        if (cb) cb(err);
                        return Promise.reject(err);
                    });
                };
                Vibrant.DefaultOpts = {
                    colorCount: 64,
                    quality: 5,
                    filters: []
                };
                return Vibrant;
            }();
            exports.default = Vibrant;
        /***/ },
        /* 2 */ /***/ function(module1, exports, __webpack_require__) {
            "use strict";
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            exports.applyFilters = exports.ImageBase = void 0;
            var ImageBase = /** @class */ function() {
                function ImageBase() {}
                ImageBase.prototype.scaleDown = function(opts) {
                    var width = this.getWidth();
                    var height = this.getHeight();
                    var ratio = 1;
                    if (opts.maxDimension > 0) {
                        var maxSide = Math.max(width, height);
                        if (maxSide > opts.maxDimension) ratio = opts.maxDimension / maxSide;
                    } else ratio = 1 / opts.quality;
                    if (ratio < 1) this.resize(width * ratio, height * ratio, ratio);
                };
                return ImageBase;
            }();
            exports.ImageBase = ImageBase;
            function applyFilters(imageData, filters) {
                if (filters.length > 0) {
                    var pixels = imageData.data;
                    var n = pixels.length / 4;
                    var offset = void 0;
                    var r = void 0;
                    var g = void 0;
                    var b = void 0;
                    var a = void 0;
                    for(var i = 0; i < n; i++){
                        offset = i * 4;
                        r = pixels[offset + 0];
                        g = pixels[offset + 1];
                        b = pixels[offset + 2];
                        a = pixels[offset + 3];
                        // Mark ignored color
                        for(var j = 0; j < filters.length; j++)if (!filters[j](r, g, b, a)) {
                            pixels[offset + 3] = 0;
                            break;
                        }
                    }
                }
                return imageData;
            }
            exports.applyFilters = applyFilters;
        /***/ },
        /* 3 */ /***/ function(module1, exports, __webpack_require__) {
            "use strict";
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            exports.Swatch = void 0;
            var converter_1 = __webpack_require__(4);
            var Swatch = /** @class */ function() {
                function Swatch(rgb, population) {
                    this._rgb = rgb;
                    this._population = population;
                }
                Swatch.applyFilters = function(colors, filters) {
                    return filters.length > 0 ? colors.filter(function(_a) {
                        var r = _a.r, g = _a.g, b = _a.b;
                        for(var j = 0; j < filters.length; j++){
                            if (!filters[j](r, g, b, 255)) return false;
                        }
                        return true;
                    }) : colors;
                };
                /**
     * Make a value copy of a swatch based on a previous one. Returns a new Swatch instance
     * @param {Swatch} swatch
     */ Swatch.clone = function(swatch) {
                    return new Swatch(swatch._rgb, swatch._population);
                };
                Object.defineProperty(Swatch.prototype, "r", {
                    /**
         * The red value in the RGB value
         */ get: function() {
                        return this._rgb[0];
                    },
                    enumerable: false,
                    configurable: true
                });
                Object.defineProperty(Swatch.prototype, "g", {
                    /**
         * The green value in the RGB value
         */ get: function() {
                        return this._rgb[1];
                    },
                    enumerable: false,
                    configurable: true
                });
                Object.defineProperty(Swatch.prototype, "b", {
                    /**
         * The blue value in the RGB value
         */ get: function() {
                        return this._rgb[2];
                    },
                    enumerable: false,
                    configurable: true
                });
                Object.defineProperty(Swatch.prototype, "rgb", {
                    /**
         * The color value as a rgb value
         */ get: function() {
                        return this._rgb;
                    },
                    enumerable: false,
                    configurable: true
                });
                Object.defineProperty(Swatch.prototype, "hsl", {
                    /**
         * The color value as a hsl value
         */ get: function() {
                        if (!this._hsl) {
                            var _a = this._rgb, r = _a[0], g = _a[1], b = _a[2];
                            this._hsl = converter_1.rgbToHsl(r, g, b);
                        }
                        return this._hsl;
                    },
                    enumerable: false,
                    configurable: true
                });
                Object.defineProperty(Swatch.prototype, "hex", {
                    /**
         * The color value as a hex string
         */ get: function() {
                        if (!this._hex) {
                            var _a = this._rgb, r = _a[0], g = _a[1], b = _a[2];
                            this._hex = converter_1.rgbToHex(r, g, b);
                        }
                        return this._hex;
                    },
                    enumerable: false,
                    configurable: true
                });
                Object.defineProperty(Swatch.prototype, "population", {
                    get: function() {
                        return this._population;
                    },
                    enumerable: false,
                    configurable: true
                });
                /**
     * Get the JSON object for the swatch
     */ Swatch.prototype.toJSON = function() {
                    return {
                        rgb: this.rgb,
                        population: this.population
                    };
                };
                /**
     * Get the color value as a rgb value
     * @deprecated Use property instead
     */ // TODO: deprecate internally, use property instead
                Swatch.prototype.getRgb = function() {
                    return this._rgb;
                };
                /**
     * Get the color value as a hsl value
     * @deprecated Use property instead
     */ // TODO: deprecate internally, use property instead
                Swatch.prototype.getHsl = function() {
                    return this.hsl;
                };
                /**
     * @deprecated Use property instead
     */ // TODO: deprecate internally, use property instead
                Swatch.prototype.getPopulation = function() {
                    return this._population;
                };
                /**
     * Get the color value as a hex string
     * @deprecated Use property instead
     */ // TODO: deprecate internally, use property instead
                Swatch.prototype.getHex = function() {
                    return this.hex;
                };
                Swatch.prototype.getYiq = function() {
                    if (!this._yiq) {
                        var rgb = this._rgb;
                        this._yiq = (rgb[0] * 299 + rgb[1] * 587 + rgb[2] * 114) / 1000;
                    }
                    return this._yiq;
                };
                Object.defineProperty(Swatch.prototype, "titleTextColor", {
                    get: function() {
                        if (this._titleTextColor) this._titleTextColor = this.getYiq() < 200 ? "#fff" : "#000";
                        return this._titleTextColor;
                    },
                    enumerable: false,
                    configurable: true
                });
                Object.defineProperty(Swatch.prototype, "bodyTextColor", {
                    get: function() {
                        if (this._bodyTextColor) this._bodyTextColor = this.getYiq() < 150 ? "#fff" : "#000";
                        return this._bodyTextColor;
                    },
                    enumerable: false,
                    configurable: true
                });
                Swatch.prototype.getTitleTextColor = function() {
                    return this.titleTextColor;
                };
                Swatch.prototype.getBodyTextColor = function() {
                    return this.bodyTextColor;
                };
                return Swatch;
            }();
            exports.Swatch = Swatch;
        /***/ },
        /* 4 */ /***/ function(module1, exports, __webpack_require__) {
            "use strict";
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            exports.getColorDiffStatus = exports.hexDiff = exports.rgbDiff = exports.deltaE94 = exports.rgbToCIELab = exports.xyzToCIELab = exports.rgbToXyz = exports.hslToRgb = exports.rgbToHsl = exports.rgbToHex = exports.hexToRgb = exports.DELTAE94_DIFF_STATUS = void 0;
            exports.DELTAE94_DIFF_STATUS = {
                NA: 0,
                PERFECT: 1,
                CLOSE: 2,
                GOOD: 10,
                SIMILAR: 50
            };
            /**
 * Converts hex string to RGB
 * @param hex - The hex value you with to get the RGB value of
 * @returns an array in the order of `red, green, blue` numerical values
 */ function hexToRgb(hex) {
                var m = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
                if (!m) throw new RangeError("'" + hex + "' is not a valid hex color");
                return [
                    m[1],
                    m[2],
                    m[3]
                ].map(function(s) {
                    return parseInt(s, 16);
                });
            }
            exports.hexToRgb = hexToRgb;
            /**
 * Given values for an RGB color convert to and return a valid HEX string
 * @param r - Red value in RGB
 * @param g - Green value in RGB
 * @param b - Blue value in RGB
 * @returns a valid hex string with pre-pending pound sign
 */ function rgbToHex(r, g, b) {
                return "#" + (16777216 + (r << 16) + (g << 8) + b).toString(16).slice(1, 7);
            }
            exports.rgbToHex = rgbToHex;
            /**
 * Given values for an RGB color convert to and return a valid HSL value
 * @param r - Red value in RGB
 * @param g - Green value in RGB
 * @param b - Blue value in RGB
 * @returns an array in the order of `hue, saturation, light` numerical values
 */ function rgbToHsl(r, g, b) {
                r /= 255;
                g /= 255;
                b /= 255;
                var max = Math.max(r, g, b);
                var min = Math.min(r, g, b);
                var h = 0;
                var s = 0;
                var l = (max + min) / 2;
                if (max !== min) {
                    var d = max - min;
                    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
                    switch(max){
                        case r:
                            h = (g - b) / d + (g < b ? 6 : 0);
                            break;
                        case g:
                            h = (b - r) / d + 2;
                            break;
                        case b:
                            h = (r - g) / d + 4;
                            break;
                    }
                    h /= 6;
                }
                return [
                    h,
                    s,
                    l
                ];
            }
            exports.rgbToHsl = rgbToHsl;
            function hslToRgb(h, s, l) {
                var r;
                var g;
                var b;
                function hue2rgb(p, q, t) {
                    if (t < 0) t += 1;
                    if (t > 1) t -= 1;
                    if (t < 1 / 6) return p + (q - p) * 6 * t;
                    if (t < 0.5) return q;
                    if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
                    return p;
                }
                if (s === 0) r = g = b = l;
                else {
                    var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
                    var p = 2 * l - q;
                    r = hue2rgb(p, q, h + 1 / 3);
                    g = hue2rgb(p, q, h);
                    b = hue2rgb(p, q, h - 1 / 3);
                }
                return [
                    r * 255,
                    g * 255,
                    b * 255
                ];
            }
            exports.hslToRgb = hslToRgb;
            function rgbToXyz(r, g, b) {
                r /= 255;
                g /= 255;
                b /= 255;
                r = r > 0.04045 ? Math.pow((r + 0.005) / 1.055, 2.4) : r / 12.92;
                g = g > 0.04045 ? Math.pow((g + 0.005) / 1.055, 2.4) : g / 12.92;
                b = b > 0.04045 ? Math.pow((b + 0.005) / 1.055, 2.4) : b / 12.92;
                r *= 100;
                g *= 100;
                b *= 100;
                var x = r * 0.4124 + g * 0.3576 + b * 0.1805;
                var y = r * 0.2126 + g * 0.7152 + b * 0.0722;
                var z = r * 0.0193 + g * 0.1192 + b * 0.9505;
                return [
                    x,
                    y,
                    z
                ];
            }
            exports.rgbToXyz = rgbToXyz;
            function xyzToCIELab(x, y, z) {
                var REF_X = 95.047;
                var REF_Y = 100;
                var REF_Z = 108.883;
                x /= REF_X;
                y /= REF_Y;
                z /= REF_Z;
                x = x > 0.008856 ? Math.pow(x, 1 / 3) : 7.787 * x + 16 / 116;
                y = y > 0.008856 ? Math.pow(y, 1 / 3) : 7.787 * y + 16 / 116;
                z = z > 0.008856 ? Math.pow(z, 1 / 3) : 7.787 * z + 16 / 116;
                var L = 116 * y - 16;
                var a = 500 * (x - y);
                var b = 200 * (y - z);
                return [
                    L,
                    a,
                    b
                ];
            }
            exports.xyzToCIELab = xyzToCIELab;
            function rgbToCIELab(r, g, b) {
                var _a = rgbToXyz(r, g, b), x = _a[0], y = _a[1], z = _a[2];
                return xyzToCIELab(x, y, z);
            }
            exports.rgbToCIELab = rgbToCIELab;
            function deltaE94(lab1, lab2) {
                var WEIGHT_L = 1;
                var WEIGHT_C = 1;
                var WEIGHT_H = 1;
                var L1 = lab1[0], a1 = lab1[1], b1 = lab1[2];
                var L2 = lab2[0], a2 = lab2[1], b2 = lab2[2];
                var dL = L1 - L2;
                var da = a1 - a2;
                var db = b1 - b2;
                var xC1 = Math.sqrt(a1 * a1 + b1 * b1);
                var xC2 = Math.sqrt(a2 * a2 + b2 * b2);
                var xDL = L2 - L1;
                var xDC = xC2 - xC1;
                var xDE = Math.sqrt(dL * dL + da * da + db * db);
                var xDH = Math.sqrt(xDE) > Math.sqrt(Math.abs(xDL)) + Math.sqrt(Math.abs(xDC)) ? Math.sqrt(xDE * xDE - xDL * xDL - xDC * xDC) : 0;
                var xSC = 1 + 0.045 * xC1;
                var xSH = 1 + 0.015 * xC1;
                xDL /= WEIGHT_L;
                xDC /= WEIGHT_C * xSC;
                xDH /= WEIGHT_H * xSH;
                return Math.sqrt(xDL * xDL + xDC * xDC + xDH * xDH);
            }
            exports.deltaE94 = deltaE94;
            function rgbDiff(rgb1, rgb2) {
                var lab1 = rgbToCIELab.apply(undefined, rgb1);
                var lab2 = rgbToCIELab.apply(undefined, rgb2);
                return deltaE94(lab1, lab2);
            }
            exports.rgbDiff = rgbDiff;
            function hexDiff(hex1, hex2) {
                var rgb1 = hexToRgb(hex1);
                var rgb2 = hexToRgb(hex2);
                return rgbDiff(rgb1, rgb2);
            }
            exports.hexDiff = hexDiff;
            function getColorDiffStatus(d) {
                if (d < exports.DELTAE94_DIFF_STATUS.NA) return "N/A";
                // Not perceptible by human eyes
                if (d <= exports.DELTAE94_DIFF_STATUS.PERFECT) return "Perfect";
                // Perceptible through close observation
                if (d <= exports.DELTAE94_DIFF_STATUS.CLOSE) return "Close";
                // Perceptible at a glance
                if (d <= exports.DELTAE94_DIFF_STATUS.GOOD) return "Good";
                // Colors are more similar than opposite
                if (d < exports.DELTAE94_DIFF_STATUS.SIMILAR) return "Similar";
                return "Wrong";
            }
            exports.getColorDiffStatus = getColorDiffStatus;
        /***/ },
        /* 5 */ /***/ function(module1, exports, __webpack_require__) {
            "use strict";
            var __importDefault = this && this.__importDefault || function(mod) {
                return mod && mod.__esModule ? mod : {
                    "default": mod
                };
            };
            var config_1 = __importDefault(__webpack_require__(6));
            var image_browser_1 = __importDefault(__webpack_require__(9));
            config_1.default.DefaultOpts.ImageClass = image_browser_1.default;
            module1.exports = config_1.default;
        /***/ },
        /* 6 */ /***/ function(module1, exports, __webpack_require__) {
            "use strict";
            var __importDefault = this && this.__importDefault || function(mod) {
                return mod && mod.__esModule ? mod : {
                    "default": mod
                };
            };
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            var core_1 = __importDefault(__webpack_require__(1));
            core_1.default.DefaultOpts.quantizer = "mmcq";
            core_1.default.DefaultOpts.generators = [
                "default"
            ];
            core_1.default.DefaultOpts.filters = [
                "default"
            ];
            exports.default = core_1.default;
        /***/ },
        /* 7 */ /***/ function(module1, exports, __webpack_require__) {
            "use strict";
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            exports.buildProcessOptions = void 0;
            var utils_1 = __webpack_require__(0);
            function buildProcessOptions(opts, override) {
                var colorCount = opts.colorCount, quantizer = opts.quantizer, generators = opts.generators, filters = opts.filters;
                // Merge with common quantizer options
                var commonQuantizerOpts = {
                    colorCount: colorCount
                };
                var q = typeof quantizer === "string" ? {
                    name: quantizer,
                    options: {}
                } : quantizer;
                q.options = utils_1.assignDeep({}, commonQuantizerOpts, q.options);
                return utils_1.assignDeep({}, {
                    quantizer: q,
                    generators: generators,
                    filters: filters
                }, override);
            }
            exports.buildProcessOptions = buildProcessOptions;
        /***/ },
        /* 8 */ /***/ function(module1, exports, __webpack_require__) {
            "use strict";
            var __importDefault = this && this.__importDefault || function(mod) {
                return mod && mod.__esModule ? mod : {
                    "default": mod
                };
            };
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            var _1 = __importDefault(__webpack_require__(1));
            var utils_1 = __webpack_require__(0);
            var Builder = /** @class */ function() {
                function Builder(src, opts) {
                    if (opts === void 0) opts = {};
                    this._src = src;
                    this._opts = utils_1.assignDeep({}, _1.default.DefaultOpts, opts);
                }
                Builder.prototype.maxColorCount = function(n) {
                    this._opts.colorCount = n;
                    return this;
                };
                Builder.prototype.maxDimension = function(d) {
                    this._opts.maxDimension = d;
                    return this;
                };
                Builder.prototype.addFilter = function(name) {
                    if (!this._opts.filters) this._opts.filters = [
                        name
                    ];
                    else this._opts.filters.push(name);
                    return this;
                };
                Builder.prototype.removeFilter = function(name) {
                    if (this._opts.filters) {
                        var i = this._opts.filters.indexOf(name);
                        if (i > 0) this._opts.filters.splice(i);
                    }
                    return this;
                };
                Builder.prototype.clearFilters = function() {
                    this._opts.filters = [];
                    return this;
                };
                Builder.prototype.quality = function(q) {
                    this._opts.quality = q;
                    return this;
                };
                Builder.prototype.useImageClass = function(imageClass) {
                    this._opts.ImageClass = imageClass;
                    return this;
                };
                Builder.prototype.useGenerator = function(generator, options) {
                    if (!this._opts.generators) this._opts.generators = [];
                    this._opts.generators.push(options ? {
                        name: generator,
                        options: options
                    } : generator);
                    return this;
                };
                Builder.prototype.useQuantizer = function(quantizer, options) {
                    this._opts.quantizer = options ? {
                        name: quantizer,
                        options: options
                    } : quantizer;
                    return this;
                };
                Builder.prototype.build = function() {
                    return new _1.default(this._src, this._opts);
                };
                Builder.prototype.getPalette = function(cb) {
                    return this.build().getPalette(cb);
                };
                Builder.prototype.getSwatches = function(cb) {
                    return this.build().getPalette(cb);
                };
                return Builder;
            }();
            exports.default = Builder;
        /***/ },
        /* 9 */ /***/ function(module1, exports, __webpack_require__) {
            "use strict";
            var __extends = this && this.__extends || function() {
                var extendStatics = function(d, b) {
                    extendStatics = Object.setPrototypeOf || ({
                        __proto__: []
                    }) instanceof Array && function(d, b) {
                        d.__proto__ = b;
                    } || function(d, b) {
                        for(var p in b)if (b.hasOwnProperty(p)) d[p] = b[p];
                    };
                    return extendStatics(d, b);
                };
                return function(d, b) {
                    extendStatics(d, b);
                    function __() {
                        this.constructor = d;
                    }
                    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
                };
            }();
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            var image_1 = __webpack_require__(2);
            function isRelativeUrl(url) {
                var u = new URL(url, location.href);
                return u.protocol === location.protocol && u.host === location.host && u.port === location.port;
            }
            function isSameOrigin(a, b) {
                var ua = new URL(a);
                var ub = new URL(b);
                // https://developer.mozilla.org/en-US/docs/Web/Security/Same-origin_policy
                return ua.protocol === ub.protocol && ua.hostname === ub.hostname && ua.port === ub.port;
            }
            var BrowserImage = /** @class */ function(_super) {
                __extends(BrowserImage, _super);
                function BrowserImage() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                BrowserImage.prototype._initCanvas = function() {
                    var img = this.image;
                    var canvas = this._canvas = document.createElement("canvas");
                    var context = canvas.getContext("2d");
                    if (!context) throw new ReferenceError("Failed to create canvas context");
                    this._context = context;
                    canvas.className = "@vibrant/canvas";
                    canvas.style.display = "none";
                    this._width = canvas.width = img.width;
                    this._height = canvas.height = img.height;
                    context.drawImage(img, 0, 0);
                    document.body.appendChild(canvas);
                };
                BrowserImage.prototype.load = function(image) {
                    var _this = this;
                    var img;
                    var src;
                    if (typeof image === "string") {
                        img = document.createElement("img");
                        src = image;
                        if (!isRelativeUrl(src) && !isSameOrigin(window.location.href, src)) img.crossOrigin = "anonymous";
                        img.src = src;
                    } else if (image instanceof HTMLImageElement) {
                        img = image;
                        src = image.src;
                    } else return Promise.reject(new Error("Cannot load buffer as an image in browser"));
                    this.image = img;
                    return new Promise(function(resolve, reject) {
                        var onImageLoad = function() {
                            _this._initCanvas();
                            resolve(_this);
                        };
                        if (img.complete) // Already loaded
                        onImageLoad();
                        else {
                            img.onload = onImageLoad;
                            img.onerror = function(e) {
                                return reject(new Error("Fail to load image: " + src));
                            };
                        }
                    });
                };
                BrowserImage.prototype.clear = function() {
                    this._context.clearRect(0, 0, this._width, this._height);
                };
                BrowserImage.prototype.update = function(imageData) {
                    this._context.putImageData(imageData, 0, 0);
                };
                BrowserImage.prototype.getWidth = function() {
                    return this._width;
                };
                BrowserImage.prototype.getHeight = function() {
                    return this._height;
                };
                BrowserImage.prototype.resize = function(targetWidth, targetHeight, ratio) {
                    var _a = this, canvas = _a._canvas, context = _a._context, img = _a.image;
                    this._width = canvas.width = targetWidth;
                    this._height = canvas.height = targetHeight;
                    context.scale(ratio, ratio);
                    context.drawImage(img, 0, 0);
                };
                BrowserImage.prototype.getPixelCount = function() {
                    return this._width * this._height;
                };
                BrowserImage.prototype.getImageData = function() {
                    return this._context.getImageData(0, 0, this._width, this._height);
                };
                BrowserImage.prototype.remove = function() {
                    if (this._canvas && this._canvas.parentNode) this._canvas.parentNode.removeChild(this._canvas);
                };
                return BrowserImage;
            }(image_1.ImageBase);
            exports.default = BrowserImage;
        /***/ },
        /* 10 */ /***/ function(module1, exports, __webpack_require__) {
            "use strict";
            var __importDefault = this && this.__importDefault || function(mod) {
                return mod && mod.__esModule ? mod : {
                    "default": mod
                };
            };
            var Vibrant = __webpack_require__(5);
            var pipeline_1 = __importDefault(__webpack_require__(11));
            Vibrant.use(pipeline_1.default);
            module1.exports = Vibrant;
        /***/ },
        /* 11 */ /***/ function(module1, exports, __webpack_require__) {
            "use strict";
            var __importDefault = this && this.__importDefault || function(mod) {
                return mod && mod.__esModule ? mod : {
                    "default": mod
                };
            };
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            var quantizer_mmcq_1 = __importDefault(__webpack_require__(12));
            var generator_default_1 = __importDefault(__webpack_require__(16));
            var pipeline_1 = __webpack_require__(17);
            var pipeline = new pipeline_1.BasicPipeline().filter.register("default", function(r, g, b, a) {
                return a >= 125 && !(r > 250 && g > 250 && b > 250);
            }).quantizer.register("mmcq", quantizer_mmcq_1.default).generator.register("default", generator_default_1.default);
            exports.default = pipeline;
        /***/ },
        /* 12 */ /***/ function(module1, exports, __webpack_require__) {
            "use strict";
            var __importDefault = this && this.__importDefault || function(mod) {
                return mod && mod.__esModule ? mod : {
                    "default": mod
                };
            };
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            var color_1 = __webpack_require__(3);
            var vbox_1 = __importDefault(__webpack_require__(13));
            var pqueue_1 = __importDefault(__webpack_require__(15));
            var fractByPopulations = 0.75;
            function _splitBoxes(pq, target) {
                var lastSize = pq.size();
                while(pq.size() < target){
                    var vbox = pq.pop();
                    if (vbox && vbox.count() > 0) {
                        var _a = vbox.split(), vbox1 = _a[0], vbox2 = _a[1];
                        pq.push(vbox1);
                        if (vbox2 && vbox2.count() > 0) pq.push(vbox2);
                        // No more new boxes, converged
                        if (pq.size() === lastSize) break;
                        else lastSize = pq.size();
                    } else break;
                }
            }
            var MMCQ = function(pixels, opts) {
                if (pixels.length === 0 || opts.colorCount < 2 || opts.colorCount > 256) throw new Error("Wrong MMCQ parameters");
                var vbox = vbox_1.default.build(pixels);
                var colorCount = vbox.histogram.colorCount;
                var pq = new pqueue_1.default(function(a, b) {
                    return a.count() - b.count();
                });
                pq.push(vbox);
                // first set of colors, sorted by population
                _splitBoxes(pq, fractByPopulations * opts.colorCount);
                // Re-order
                var pq2 = new pqueue_1.default(function(a, b) {
                    return a.count() * a.volume() - b.count() * b.volume();
                });
                pq2.contents = pq.contents;
                // next set - generate the median cuts using the (npix * vol) sorting.
                _splitBoxes(pq2, opts.colorCount - pq2.size());
                // calculate the actual colors
                return generateSwatches(pq2);
            };
            function generateSwatches(pq) {
                var swatches = [];
                while(pq.size()){
                    var v = pq.pop();
                    var color = v.avg();
                    var r = color[0], g = color[1], b = color[2];
                    swatches.push(new color_1.Swatch(color, v.count()));
                }
                return swatches;
            }
            exports.default = MMCQ;
        /***/ },
        /* 13 */ /***/ function(module1, exports, __webpack_require__) {
            "use strict";
            var __importDefault = this && this.__importDefault || function(mod) {
                return mod && mod.__esModule ? mod : {
                    "default": mod
                };
            };
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            var histogram_1 = __importDefault(__webpack_require__(14));
            var SIGBITS = 5;
            var RSHIFT = 8 - SIGBITS;
            var VBox = /** @class */ function() {
                function VBox(r1, r2, g1, g2, b1, b2, histogram) {
                    this.histogram = histogram;
                    this._volume = -1;
                    this._count = -1;
                    // NOTE: dimension will be mutated by split operation.
                    //       It must be specified explicitly, not from histogram
                    this.dimension = {
                        r1: r1,
                        r2: r2,
                        g1: g1,
                        g2: g2,
                        b1: b1,
                        b2: b2
                    };
                }
                VBox.build = function(pixels) {
                    var h = new histogram_1.default(pixels, {
                        sigBits: SIGBITS
                    });
                    var rmin = h.rmin, rmax = h.rmax, gmin = h.gmin, gmax = h.gmax, bmin = h.bmin, bmax = h.bmax;
                    return new VBox(rmin, rmax, gmin, gmax, bmin, bmax, h);
                };
                VBox.prototype.invalidate = function() {
                    this._volume = this._count = -1;
                    this._avg = null;
                };
                VBox.prototype.volume = function() {
                    if (this._volume < 0) {
                        var _a = this.dimension, r1 = _a.r1, r2 = _a.r2, g1 = _a.g1, g2 = _a.g2, b1 = _a.b1, b2 = _a.b2;
                        this._volume = (r2 - r1 + 1) * (g2 - g1 + 1) * (b2 - b1 + 1);
                    }
                    return this._volume;
                };
                VBox.prototype.count = function() {
                    if (this._count < 0) {
                        var _a = this.histogram, hist = _a.hist, getColorIndex = _a.getColorIndex;
                        var _b = this.dimension, r1 = _b.r1, r2 = _b.r2, g1 = _b.g1, g2 = _b.g2, b1 = _b.b1, b2 = _b.b2;
                        var c = 0;
                        for(var r = r1; r <= r2; r++){
                            for(var g = g1; g <= g2; g++)for(var b = b1; b <= b2; b++){
                                var index = getColorIndex(r, g, b);
                                c += hist[index];
                            }
                        }
                        this._count = c;
                    }
                    return this._count;
                };
                VBox.prototype.clone = function() {
                    var histogram = this.histogram;
                    var _a = this.dimension, r1 = _a.r1, r2 = _a.r2, g1 = _a.g1, g2 = _a.g2, b1 = _a.b1, b2 = _a.b2;
                    return new VBox(r1, r2, g1, g2, b1, b2, histogram);
                };
                VBox.prototype.avg = function() {
                    if (!this._avg) {
                        var _a = this.histogram, hist = _a.hist, getColorIndex = _a.getColorIndex;
                        var _b = this.dimension, r1 = _b.r1, r2 = _b.r2, g1 = _b.g1, g2 = _b.g2, b1 = _b.b1, b2 = _b.b2;
                        var ntot = 0;
                        var mult = 1 << 8 - SIGBITS;
                        var rsum = void 0;
                        var gsum = void 0;
                        var bsum = void 0;
                        rsum = gsum = bsum = 0;
                        for(var r = r1; r <= r2; r++){
                            for(var g = g1; g <= g2; g++)for(var b = b1; b <= b2; b++){
                                var index = getColorIndex(r, g, b);
                                var h = hist[index];
                                ntot += h;
                                rsum += h * (r + 0.5) * mult;
                                gsum += h * (g + 0.5) * mult;
                                bsum += h * (b + 0.5) * mult;
                            }
                        }
                        if (ntot) this._avg = [
                            ~~(rsum / ntot),
                            ~~(gsum / ntot),
                            ~~(bsum / ntot)
                        ];
                        else this._avg = [
                            ~~(mult * (r1 + r2 + 1) / 2),
                            ~~(mult * (g1 + g2 + 1) / 2),
                            ~~(mult * (b1 + b2 + 1) / 2)
                        ];
                    }
                    return this._avg;
                };
                VBox.prototype.contains = function(rgb) {
                    var r = rgb[0], g = rgb[1], b = rgb[2];
                    var _a = this.dimension, r1 = _a.r1, r2 = _a.r2, g1 = _a.g1, g2 = _a.g2, b1 = _a.b1, b2 = _a.b2;
                    r >>= RSHIFT;
                    g >>= RSHIFT;
                    b >>= RSHIFT;
                    return r >= r1 && r <= r2 && g >= g1 && g <= g2 && b >= b1 && b <= b2;
                };
                VBox.prototype.split = function() {
                    var _a = this.histogram, hist = _a.hist, getColorIndex = _a.getColorIndex;
                    var _b = this.dimension, r1 = _b.r1, r2 = _b.r2, g1 = _b.g1, g2 = _b.g2, b1 = _b.b1, b2 = _b.b2;
                    var count = this.count();
                    if (!count) return [];
                    if (count === 1) return [
                        this.clone()
                    ];
                    var rw = r2 - r1 + 1;
                    var gw = g2 - g1 + 1;
                    var bw = b2 - b1 + 1;
                    var maxw = Math.max(rw, gw, bw);
                    var accSum = null;
                    var sum;
                    var total;
                    sum = total = 0;
                    var maxd = null;
                    if (maxw === rw) {
                        maxd = "r";
                        accSum = new Uint32Array(r2 + 1);
                        for(var r = r1; r <= r2; r++){
                            sum = 0;
                            for(var g = g1; g <= g2; g++)for(var b = b1; b <= b2; b++){
                                var index = getColorIndex(r, g, b);
                                sum += hist[index];
                            }
                            total += sum;
                            accSum[r] = total;
                        }
                    } else if (maxw === gw) {
                        maxd = "g";
                        accSum = new Uint32Array(g2 + 1);
                        for(var g = g1; g <= g2; g++){
                            sum = 0;
                            for(var r = r1; r <= r2; r++)for(var b = b1; b <= b2; b++){
                                var index = getColorIndex(r, g, b);
                                sum += hist[index];
                            }
                            total += sum;
                            accSum[g] = total;
                        }
                    } else {
                        maxd = "b";
                        accSum = new Uint32Array(b2 + 1);
                        for(var b = b1; b <= b2; b++){
                            sum = 0;
                            for(var r = r1; r <= r2; r++)for(var g = g1; g <= g2; g++){
                                var index = getColorIndex(r, g, b);
                                sum += hist[index];
                            }
                            total += sum;
                            accSum[b] = total;
                        }
                    }
                    var splitPoint = -1;
                    var reverseSum = new Uint32Array(accSum.length);
                    for(var i = 0; i < accSum.length; i++){
                        var d = accSum[i];
                        if (splitPoint < 0 && d > total / 2) splitPoint = i;
                        reverseSum[i] = total - d;
                    }
                    var vbox = this;
                    function doCut(d) {
                        var dim1 = d + "1";
                        var dim2 = d + "2";
                        var d1 = vbox.dimension[dim1];
                        var d2 = vbox.dimension[dim2];
                        var vbox1 = vbox.clone();
                        var vbox2 = vbox.clone();
                        var left = splitPoint - d1;
                        var right = d2 - splitPoint;
                        if (left <= right) {
                            d2 = Math.min(d2 - 1, ~~(splitPoint + right / 2));
                            d2 = Math.max(0, d2);
                        } else {
                            d2 = Math.max(d1, ~~(splitPoint - 1 - left / 2));
                            d2 = Math.min(vbox.dimension[dim2], d2);
                        }
                        while(!accSum[d2])d2++;
                        var c2 = reverseSum[d2];
                        while(!c2 && accSum[d2 - 1])c2 = reverseSum[--d2];
                        vbox1.dimension[dim2] = d2;
                        vbox2.dimension[dim1] = d2 + 1;
                        return [
                            vbox1,
                            vbox2
                        ];
                    }
                    return doCut(maxd);
                };
                return VBox;
            }();
            exports.default = VBox;
        /***/ },
        /* 14 */ /***/ function(module1, exports, __webpack_require__) {
            "use strict";
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            var Histogram = /** @class */ function() {
                function Histogram(pixels, opts) {
                    this.pixels = pixels;
                    this.opts = opts;
                    var sigBits = opts.sigBits;
                    var getColorIndex = function(r, g, b) {
                        return (r << 2 * sigBits) + (g << sigBits) + b;
                    };
                    this.getColorIndex = getColorIndex;
                    var rshift = 8 - sigBits;
                    var hn = 1 << 3 * sigBits;
                    var hist = new Uint32Array(hn);
                    var rmax;
                    var rmin;
                    var gmax;
                    var gmin;
                    var bmax;
                    var bmin;
                    var r;
                    var g;
                    var b;
                    var a;
                    rmax = gmax = bmax = 0;
                    rmin = gmin = bmin = Number.MAX_VALUE;
                    var n = pixels.length / 4;
                    var i = 0;
                    while(i < n){
                        var offset = i * 4;
                        i++;
                        r = pixels[offset + 0];
                        g = pixels[offset + 1];
                        b = pixels[offset + 2];
                        a = pixels[offset + 3];
                        // Ignored pixels' alpha is marked as 0 in filtering stage
                        if (a === 0) continue;
                        r = r >> rshift;
                        g = g >> rshift;
                        b = b >> rshift;
                        var index = getColorIndex(r, g, b);
                        hist[index] += 1;
                        if (r > rmax) rmax = r;
                        if (r < rmin) rmin = r;
                        if (g > gmax) gmax = g;
                        if (g < gmin) gmin = g;
                        if (b > bmax) bmax = b;
                        if (b < bmin) bmin = b;
                    }
                    this._colorCount = hist.reduce(function(total, c) {
                        return c > 0 ? total + 1 : total;
                    }, 0);
                    this.hist = hist;
                    this.rmax = rmax;
                    this.rmin = rmin;
                    this.gmax = gmax;
                    this.gmin = gmin;
                    this.bmax = bmax;
                    this.bmin = bmin;
                }
                Object.defineProperty(Histogram.prototype, "colorCount", {
                    get: function() {
                        return this._colorCount;
                    },
                    enumerable: false,
                    configurable: true
                });
                return Histogram;
            }();
            exports.default = Histogram;
        /***/ },
        /* 15 */ /***/ function(module1, exports, __webpack_require__) {
            "use strict";
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            var PQueue = /** @class */ function() {
                function PQueue(comparator) {
                    this._comparator = comparator;
                    this.contents = [];
                    this._sorted = false;
                }
                PQueue.prototype._sort = function() {
                    if (!this._sorted) {
                        this.contents.sort(this._comparator);
                        this._sorted = true;
                    }
                };
                PQueue.prototype.push = function(item) {
                    this.contents.push(item);
                    this._sorted = false;
                };
                PQueue.prototype.peek = function(index) {
                    this._sort();
                    index = typeof index === "number" ? index : this.contents.length - 1;
                    return this.contents[index];
                };
                PQueue.prototype.pop = function() {
                    this._sort();
                    return this.contents.pop();
                };
                PQueue.prototype.size = function() {
                    return this.contents.length;
                };
                PQueue.prototype.map = function(mapper) {
                    this._sort();
                    return this.contents.map(mapper);
                };
                return PQueue;
            }();
            exports.default = PQueue;
        /***/ },
        /* 16 */ /***/ function(module1, exports, __webpack_require__) {
            "use strict";
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            var color_1 = __webpack_require__(3);
            var converter_1 = __webpack_require__(4);
            var DefaultOpts = {
                targetDarkLuma: 0.26,
                maxDarkLuma: 0.45,
                minLightLuma: 0.55,
                targetLightLuma: 0.74,
                minNormalLuma: 0.3,
                targetNormalLuma: 0.5,
                maxNormalLuma: 0.7,
                targetMutesSaturation: 0.3,
                maxMutesSaturation: 0.4,
                targetVibrantSaturation: 1.0,
                minVibrantSaturation: 0.35,
                weightSaturation: 3,
                weightLuma: 6.5,
                weightPopulation: 0.5
            };
            function _findMaxPopulation(swatches) {
                var p = 0;
                swatches.forEach(function(s) {
                    p = Math.max(p, s.population);
                });
                return p;
            }
            function _isAlreadySelected(palette, s) {
                return palette.Vibrant === s || palette.DarkVibrant === s || palette.LightVibrant === s || palette.Muted === s || palette.DarkMuted === s || palette.LightMuted === s;
            }
            function _createComparisonValue(saturation, targetSaturation, luma, targetLuma, population, maxPopulation, opts) {
                function weightedMean() {
                    var values = [];
                    for(var _i = 0; _i < arguments.length; _i++)values[_i] = arguments[_i];
                    var sum = 0;
                    var weightSum = 0;
                    for(var i = 0; i < values.length; i += 2){
                        var value = values[i];
                        var weight = values[i + 1];
                        sum += value * weight;
                        weightSum += weight;
                    }
                    return sum / weightSum;
                }
                function invertDiff(value, targetValue) {
                    return 1 - Math.abs(value - targetValue);
                }
                return weightedMean(invertDiff(saturation, targetSaturation), opts.weightSaturation, invertDiff(luma, targetLuma), opts.weightLuma, population / maxPopulation, opts.weightPopulation);
            }
            function _findColorVariation(palette, swatches, maxPopulation, targetLuma, minLuma, maxLuma, targetSaturation, minSaturation, maxSaturation, opts) {
                var max = null;
                var maxValue = 0;
                swatches.forEach(function(swatch) {
                    var _a = swatch.hsl, s = _a[1], l = _a[2];
                    if (s >= minSaturation && s <= maxSaturation && l >= minLuma && l <= maxLuma && !_isAlreadySelected(palette, swatch)) {
                        var value = _createComparisonValue(s, targetSaturation, l, targetLuma, swatch.population, maxPopulation, opts);
                        if (max === null || value > maxValue) {
                            max = swatch;
                            maxValue = value;
                        }
                    }
                });
                return max;
            }
            function _generateVariationColors(swatches, maxPopulation, opts) {
                var palette = {
                    Vibrant: null,
                    DarkVibrant: null,
                    LightVibrant: null,
                    Muted: null,
                    DarkMuted: null,
                    LightMuted: null
                };
                // mVibrantSwatch = findColor(TARGET_NORMAL_LUMA, MIN_NORMAL_LUMA, MAX_NORMAL_LUMA,
                //     TARGET_VIBRANT_SATURATION, MIN_VIBRANT_SATURATION, 1f)
                palette.Vibrant = _findColorVariation(palette, swatches, maxPopulation, opts.targetNormalLuma, opts.minNormalLuma, opts.maxNormalLuma, opts.targetVibrantSaturation, opts.minVibrantSaturation, 1, opts);
                // mLightVibrantSwatch = findColor(TARGET_LIGHT_LUMA, MIN_LIGHT_LUMA, 1f,
                //     TARGET_VIBRANT_SATURATION, MIN_VIBRANT_SATURATION, 1f)
                palette.LightVibrant = _findColorVariation(palette, swatches, maxPopulation, opts.targetLightLuma, opts.minLightLuma, 1, opts.targetVibrantSaturation, opts.minVibrantSaturation, 1, opts);
                // mDarkVibrantSwatch = findColor(TARGET_DARK_LUMA, 0f, MAX_DARK_LUMA,
                //     TARGET_VIBRANT_SATURATION, MIN_VIBRANT_SATURATION, 1f)
                palette.DarkVibrant = _findColorVariation(palette, swatches, maxPopulation, opts.targetDarkLuma, 0, opts.maxDarkLuma, opts.targetVibrantSaturation, opts.minVibrantSaturation, 1, opts);
                // mMutedSwatch = findColor(TARGET_NORMAL_LUMA, MIN_NORMAL_LUMA, MAX_NORMAL_LUMA,
                //     TARGET_MUTED_SATURATION, 0f, MAX_MUTED_SATURATION)
                palette.Muted = _findColorVariation(palette, swatches, maxPopulation, opts.targetNormalLuma, opts.minNormalLuma, opts.maxNormalLuma, opts.targetMutesSaturation, 0, opts.maxMutesSaturation, opts);
                // mLightMutedColor = findColor(TARGET_LIGHT_LUMA, MIN_LIGHT_LUMA, 1f,
                //     TARGET_MUTED_SATURATION, 0f, MAX_MUTED_SATURATION)
                palette.LightMuted = _findColorVariation(palette, swatches, maxPopulation, opts.targetLightLuma, opts.minLightLuma, 1, opts.targetMutesSaturation, 0, opts.maxMutesSaturation, opts);
                // mDarkMutedSwatch = findColor(TARGET_DARK_LUMA, 0f, MAX_DARK_LUMA,
                //     TARGET_MUTED_SATURATION, 0f, MAX_MUTED_SATURATION)
                palette.DarkMuted = _findColorVariation(palette, swatches, maxPopulation, opts.targetDarkLuma, 0, opts.maxDarkLuma, opts.targetMutesSaturation, 0, opts.maxMutesSaturation, opts);
                return palette;
            }
            function _generateEmptySwatches(palette, maxPopulation, opts) {
                if (!palette.Vibrant && !palette.DarkVibrant && !palette.LightVibrant) {
                    if (!palette.DarkVibrant && palette.DarkMuted) {
                        var _a = palette.DarkMuted.hsl, h = _a[0], s = _a[1], l = _a[2];
                        l = opts.targetDarkLuma;
                        palette.DarkVibrant = new color_1.Swatch(converter_1.hslToRgb(h, s, l), 0);
                    }
                    if (!palette.LightVibrant && palette.LightMuted) {
                        var _b = palette.LightMuted.hsl, h = _b[0], s = _b[1], l = _b[2];
                        l = opts.targetDarkLuma;
                        palette.DarkVibrant = new color_1.Swatch(converter_1.hslToRgb(h, s, l), 0);
                    }
                }
                if (!palette.Vibrant && palette.DarkVibrant) {
                    var _c = palette.DarkVibrant.hsl, h = _c[0], s = _c[1], l = _c[2];
                    l = opts.targetNormalLuma;
                    palette.Vibrant = new color_1.Swatch(converter_1.hslToRgb(h, s, l), 0);
                } else if (!palette.Vibrant && palette.LightVibrant) {
                    var _d = palette.LightVibrant.hsl, h = _d[0], s = _d[1], l = _d[2];
                    l = opts.targetNormalLuma;
                    palette.Vibrant = new color_1.Swatch(converter_1.hslToRgb(h, s, l), 0);
                }
                if (!palette.DarkVibrant && palette.Vibrant) {
                    var _e = palette.Vibrant.hsl, h = _e[0], s = _e[1], l = _e[2];
                    l = opts.targetDarkLuma;
                    palette.DarkVibrant = new color_1.Swatch(converter_1.hslToRgb(h, s, l), 0);
                }
                if (!palette.LightVibrant && palette.Vibrant) {
                    var _f = palette.Vibrant.hsl, h = _f[0], s = _f[1], l = _f[2];
                    l = opts.targetLightLuma;
                    palette.LightVibrant = new color_1.Swatch(converter_1.hslToRgb(h, s, l), 0);
                }
                if (!palette.Muted && palette.Vibrant) {
                    var _g = palette.Vibrant.hsl, h = _g[0], s = _g[1], l = _g[2];
                    l = opts.targetMutesSaturation;
                    palette.Muted = new color_1.Swatch(converter_1.hslToRgb(h, s, l), 0);
                }
                if (!palette.DarkMuted && palette.DarkVibrant) {
                    var _h = palette.DarkVibrant.hsl, h = _h[0], s = _h[1], l = _h[2];
                    l = opts.targetMutesSaturation;
                    palette.DarkMuted = new color_1.Swatch(converter_1.hslToRgb(h, s, l), 0);
                }
                if (!palette.LightMuted && palette.LightVibrant) {
                    var _j = palette.LightVibrant.hsl, h = _j[0], s = _j[1], l = _j[2];
                    l = opts.targetMutesSaturation;
                    palette.LightMuted = new color_1.Swatch(converter_1.hslToRgb(h, s, l), 0);
                }
            }
            var DefaultGenerator = function(swatches, opts) {
                opts = Object.assign({}, DefaultOpts, opts);
                var maxPopulation = _findMaxPopulation(swatches);
                var palette = _generateVariationColors(swatches, maxPopulation, opts);
                _generateEmptySwatches(palette, maxPopulation, opts);
                return palette;
            };
            exports.default = DefaultGenerator;
        /***/ },
        /* 17 */ /***/ function(module1, exports, __webpack_require__) {
            "use strict";
            var __awaiter = this && this.__awaiter || function(thisArg, _arguments, P, generator) {
                function adopt(value) {
                    return value instanceof P ? value : new P(function(resolve) {
                        resolve(value);
                    });
                }
                return new (P || (P = Promise))(function(resolve, reject) {
                    function fulfilled(value) {
                        try {
                            step(generator.next(value));
                        } catch (e) {
                            reject(e);
                        }
                    }
                    function rejected(value) {
                        try {
                            step(generator["throw"](value));
                        } catch (e) {
                            reject(e);
                        }
                    }
                    function step(result) {
                        result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
                    }
                    step((generator = generator.apply(thisArg, _arguments || [])).next());
                });
            };
            var __generator = this && this.__generator || function(thisArg, body) {
                var _ = {
                    label: 0,
                    sent: function() {
                        if (t[0] & 1) throw t[1];
                        return t[1];
                    },
                    trys: [],
                    ops: []
                }, f, y, t, g;
                return g = {
                    next: verb(0),
                    "throw": verb(1),
                    "return": verb(2)
                }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
                    return this;
                }), g;
                function verb(n) {
                    return function(v) {
                        return step([
                            n,
                            v
                        ]);
                    };
                }
                function step(op) {
                    if (f) throw new TypeError("Generator is already executing.");
                    while(_)try {
                        if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                        if (y = 0, t) op = [
                            op[0] & 2,
                            t.value
                        ];
                        switch(op[0]){
                            case 0:
                            case 1:
                                t = op;
                                break;
                            case 4:
                                _.label++;
                                return {
                                    value: op[1],
                                    done: false
                                };
                            case 5:
                                _.label++;
                                y = op[1];
                                op = [
                                    0
                                ];
                                continue;
                            case 7:
                                op = _.ops.pop();
                                _.trys.pop();
                                continue;
                            default:
                                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                    _ = 0;
                                    continue;
                                }
                                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                                    _.label = op[1];
                                    break;
                                }
                                if (op[0] === 6 && _.label < t[1]) {
                                    _.label = t[1];
                                    t = op;
                                    break;
                                }
                                if (t && _.label < t[2]) {
                                    _.label = t[2];
                                    _.ops.push(op);
                                    break;
                                }
                                if (t[2]) _.ops.pop();
                                _.trys.pop();
                                continue;
                        }
                        op = body.call(thisArg, _);
                    } catch (e) {
                        op = [
                            6,
                            e
                        ];
                        y = 0;
                    } finally{
                        f = t = 0;
                    }
                    if (op[0] & 5) throw op[1];
                    return {
                        value: op[0] ? op[1] : void 0,
                        done: true
                    };
                }
            };
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            exports.BasicPipeline = exports.Stage = void 0;
            var image_1 = __webpack_require__(2);
            var Stage = /** @class */ function() {
                function Stage(pipeline) {
                    this.pipeline = pipeline;
                    this._map = {};
                }
                Stage.prototype.names = function() {
                    return Object.keys(this._map);
                };
                Stage.prototype.has = function(name) {
                    return !!this._map[name];
                };
                Stage.prototype.get = function(name) {
                    return this._map[name];
                };
                Stage.prototype.register = function(name, stageFn) {
                    this._map[name] = stageFn;
                    return this.pipeline;
                };
                return Stage;
            }();
            exports.Stage = Stage;
            var BasicPipeline = /** @class */ function() {
                function BasicPipeline() {
                    this.filter = new Stage(this);
                    this.quantizer = new Stage(this);
                    this.generator = new Stage(this);
                }
                BasicPipeline.prototype._buildProcessTasks = function(_a) {
                    var _this = this;
                    var filters = _a.filters, quantizer = _a.quantizer, generators = _a.generators;
                    // Support wildcard for generators
                    if (generators.length === 1 && generators[0] === "*") generators = this.generator.names();
                    return {
                        filters: filters.map(function(f) {
                            return createTask(_this.filter, f);
                        }),
                        quantizer: createTask(this.quantizer, quantizer),
                        generators: generators.map(function(g) {
                            return createTask(_this.generator, g);
                        })
                    };
                    function createTask(stage, o) {
                        var name;
                        var options;
                        if (typeof o === "string") name = o;
                        else {
                            name = o.name;
                            options = o.options;
                        }
                        return {
                            name: name,
                            fn: stage.get(name),
                            options: options
                        };
                    }
                };
                BasicPipeline.prototype.process = function(imageData, opts) {
                    return __awaiter(this, void 0, void 0, function() {
                        var _a, filters, quantizer, generators, imageFilterData, colors, palettes;
                        return __generator(this, function(_b) {
                            switch(_b.label){
                                case 0:
                                    _a = this._buildProcessTasks(opts), filters = _a.filters, quantizer = _a.quantizer, generators = _a.generators;
                                    return [
                                        4 /*yield*/ ,
                                        this._filterColors(filters, imageData)
                                    ];
                                case 1:
                                    imageFilterData = _b.sent();
                                    return [
                                        4 /*yield*/ ,
                                        this._generateColors(quantizer, imageFilterData)
                                    ];
                                case 2:
                                    colors = _b.sent();
                                    return [
                                        4 /*yield*/ ,
                                        this._generatePalettes(generators, colors)
                                    ];
                                case 3:
                                    palettes = _b.sent();
                                    return [
                                        2 /*return*/ ,
                                        {
                                            colors: colors,
                                            palettes: palettes
                                        }
                                    ];
                            }
                        });
                    });
                };
                BasicPipeline.prototype._filterColors = function(filters, imageData) {
                    return Promise.resolve(image_1.applyFilters(imageData, filters.map(function(_a) {
                        var fn = _a.fn;
                        return fn;
                    })));
                };
                BasicPipeline.prototype._generateColors = function(quantizer, imageData) {
                    return Promise.resolve(quantizer.fn(imageData.data, quantizer.options));
                };
                BasicPipeline.prototype._generatePalettes = function(generators, colors) {
                    return __awaiter(this, void 0, void 0, function() {
                        var promiseArr;
                        return __generator(this, function(_a) {
                            switch(_a.label){
                                case 0:
                                    return [
                                        4 /*yield*/ ,
                                        Promise.all(generators.map(function(_a) {
                                            var fn = _a.fn, options = _a.options;
                                            return Promise.resolve(fn(colors, options));
                                        }))
                                    ];
                                case 1:
                                    promiseArr = _a.sent();
                                    // Map the values to the expected name
                                    return [
                                        2 /*return*/ ,
                                        Promise.resolve(promiseArr.reduce(function(promises, promiseVal, i) {
                                            promises[generators[i].name] = promiseVal;
                                            return promises;
                                        }, {}))
                                    ];
                            }
                        });
                    });
                };
                return BasicPipeline;
            }();
            exports.BasicPipeline = BasicPipeline;
        /***/ }
    ]);
});


const $2832a6b6c9d55462$var$DEBUG_COLOR = false;
const $2832a6b6c9d55462$var$CONTRAST_RATIO = 4.5;
const $2832a6b6c9d55462$var$COLOR_SIMILARITY_THRESHOLD = 150;
const $2832a6b6c9d55462$var$luminosity = (rgb)=>{
    const lum = [
        0,
        0,
        0
    ];
    for(let i = 0; i < rgb.length; i++){
        const chan = rgb[i] / 255;
        lum[i] = chan <= 0.03928 ? chan / 12.92 : ((chan + 0.055) / 1.055) ** 2.4;
    }
    return 0.2126 * lum[0] + 0.7152 * lum[1] + 0.0722 * lum[2];
};
const $2832a6b6c9d55462$var$rgbContrast = (color1, color2)=>{
    const lum1 = $2832a6b6c9d55462$var$luminosity(color1);
    const lum2 = $2832a6b6c9d55462$var$luminosity(color2);
    if (lum1 > lum2) return (lum1 + 0.05) / (lum2 + 0.05);
    return (lum2 + 0.05) / (lum1 + 0.05);
};
const $2832a6b6c9d55462$var$getRGBContrastRatio = (rgb1, rgb2)=>Math.round(($2832a6b6c9d55462$var$rgbContrast(rgb1, rgb2) + Number.EPSILON) * 100) / 100;
const $2832a6b6c9d55462$export$1561819adeec7903 = async (url, downsampleColors = 16)=>{
    const palette = await (0, (/*@__PURE__*/$parcel$interopDefault($a3ab59aba365b2b9$exports))).from(url, {
        colorCount: downsampleColors
    }).getPalette();
    const colors = Object.values(palette);
    colors.sort((colorA, colorB)=>colorB.population - colorA.population);
    const backgroundColor = colors[0];
    let foregroundColor;
    const contrastRatios = new Map();
    const approvedContrastRatio = (hex, rgb)=>{
        if (!contrastRatios.has(hex)) contrastRatios.set(hex, $2832a6b6c9d55462$var$getRGBContrastRatio(backgroundColor.rgb, rgb));
        return contrastRatios.get(hex) > $2832a6b6c9d55462$var$CONTRAST_RATIO;
    };
    for(let i = 1; i < colors.length && !foregroundColor; i++){
        if (approvedContrastRatio(colors[i].hex, colors[i].rgb)) {
            if ($2832a6b6c9d55462$var$DEBUG_COLOR) console.log("PICKED", colors[i].hex);
            foregroundColor = colors[i].rgb;
            break;
        }
        const currentColor = colors[i];
        if ($2832a6b6c9d55462$var$DEBUG_COLOR) console.log("Finding similar color with better contrast", currentColor.hex);
        for(let j = i + 1; j < colors.length; j++){
            const compareColor = colors[j];
            const diffScore = Math.abs(currentColor.rgb[0] - compareColor.rgb[0]) + Math.abs(currentColor.rgb[1] - compareColor.rgb[1]) + Math.abs(currentColor.rgb[2] - compareColor.rgb[2]);
            if ($2832a6b6c9d55462$var$DEBUG_COLOR) console.log(compareColor.hex, diffScore);
            if (diffScore > $2832a6b6c9d55462$var$COLOR_SIMILARITY_THRESHOLD) continue;
            if (approvedContrastRatio(compareColor.hex, compareColor.rgb)) {
                if ($2832a6b6c9d55462$var$DEBUG_COLOR) console.log("PICKED", compareColor.hex);
                foregroundColor = compareColor.rgb;
                break;
            }
        }
    }
    if (!foregroundColor) foregroundColor = backgroundColor.getYiq() < 200 ? [
        255,
        255,
        255
    ] : [
        0,
        0,
        0
    ];
    return {
        background: backgroundColor,
        foreground: foregroundColor,
        foregroundHEX: new backgroundColor.constructor(foregroundColor, 0).hex
    };
};



const $ab37392bf2f9deb0$export$38daf55da2e14a4f = (0, $f58f44579a4747ac$export$c0bb0b647f701bb5)` <!-- SVG icon for previous track -->
  <svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
    <path
      d="M459.5 440.6c9.5 7.9 22.8 9.7 34.1 4.4s18.4-16.6 18.4-29V96c0-12.4-7.2-23.7-18.4-29s-24.5-3.6-34.1 4.4L288 214.3V256v41.7L459.5 440.6zM256 352V256 128 96c0-12.4-7.2-23.7-18.4-29s-24.5-3.6-34.1 4.4l-192 160C4.2 237.5 0 246.5 0 256s4.2 18.5 11.5 24.6l192 160c9.5 7.9 22.8 9.7 34.1 4.4s18.4-16.6 18.4-29V352z"
    />
  </svg>`;
const $ab37392bf2f9deb0$export$4cff7387a9fd5bbf = (0, $f58f44579a4747ac$export$c0bb0b647f701bb5)` <!-- SVG icon for next track -->
  <svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
    <path
      d="M52.5 440.6c-9.5 7.9-22.8 9.7-34.1 4.4S0 428.4 0 416V96C0 83.6 7.2 72.3 18.4 67s24.5-3.6 34.1 4.4L224 214.3V256v41.7L52.5 440.6zM256 352V256 128 96c0-12.4 7.2-23.7 18.4-29s24.5-3.6 34.1 4.4l192 160c7.3 6.1 11.5 15.1 11.5 24.6s-4.2 18.5-11.5 24.6l-192 160c-9.5 7.9-22.8 9.7-34.1 4.4s-18.4-16.6-18.4-29V352z"
    />
  </svg>`;
const $ab37392bf2f9deb0$export$153112e4307e89bd = (0, $f58f44579a4747ac$export$c0bb0b647f701bb5)` <!-- SVG icon for volume control -->
  <!-- SVG icon for control volume -->
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height="12"
    width="14"
    viewBox="0 0 512 512"
  >
    <path
      d="M0 416c0 17.7 14.3 32 32 32l54.7 0c12.3 28.3 40.5 48 73.3 48s61-19.7 73.3-48L480 448c17.7 0 32-14.3 32-32s-14.3-32-32-32l-246.7 0c-12.3-28.3-40.5-48-73.3-48s-61 19.7-73.3 48L32 384c-17.7 0-32 14.3-32 32zm128 0a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zM320 256a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm32-80c-32.8 0-61 19.7-73.3 48L32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l246.7 0c12.3 28.3 40.5 48 73.3 48s61-19.7 73.3-48l54.7 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-54.7 0c-12.3-28.3-40.5-48-73.3-48zM192 128a32 32 0 1 1 0-64 32 32 0 1 1 0 64zm73.3-64C253 35.7 224.8 16 192 16s-61 19.7-73.3 48L32 64C14.3 64 0 78.3 0 96s14.3 32 32 32l86.7 0c12.3 28.3 40.5 48 73.3 48s61-19.7 73.3-48L480 128c17.7 0 32-14.3 32-32s-14.3-32-32-32L265.3 64z"
    />
  </svg>`;
const $ab37392bf2f9deb0$export$86f80383d5836d1d = (0, $f58f44579a4747ac$export$c0bb0b647f701bb5)`
  <!-- SVG icon for volume plus -->
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height="14"
    width="17.5"
    viewBox="0 0 640 512"
  >
    <path
      d="M533.6 32.5C598.5 85.2 640 165.8 640 256s-41.5 170.7-106.4 223.5c-10.3 8.4-25.4 6.8-33.8-3.5s-6.8-25.4 3.5-33.8C557.5 398.2 592 331.2 592 256s-34.5-142.2-88.7-186.3c-10.3-8.4-11.8-23.5-3.5-33.8s23.5-11.8 33.8-3.5zM473.1 107c43.2 35.2 70.9 88.9 70.9 149s-27.7 113.8-70.9 149c-10.3 8.4-25.4 6.8-33.8-3.5s-6.8-25.4 3.5-33.8C475.3 341.3 496 301.1 496 256s-20.7-85.3-53.2-111.8c-10.3-8.4-11.8-23.5-3.5-33.8s23.5-11.8 33.8-3.5zm-60.5 74.5C434.1 199.1 448 225.9 448 256s-13.9 56.9-35.4 74.5c-10.3 8.4-25.4 6.8-33.8-3.5s-6.8-25.4 3.5-33.8C393.1 284.4 400 271 400 256s-6.9-28.4-17.7-37.3c-10.3-8.4-11.8-23.5-3.5-33.8s23.5-11.8 33.8-3.5zM301.1 34.8C312.6 40 320 51.4 320 64V448c0 12.6-7.4 24-18.9 29.2s-25 3.1-34.4-5.3L131.8 352H64c-35.3 0-64-28.7-64-64V224c0-35.3 28.7-64 64-64h67.8L266.7 40.1c9.4-8.4 22.9-10.4 34.4-5.3z"
    />
  </svg>
`;
const $ab37392bf2f9deb0$export$b068b5ff921c80be = (0, $f58f44579a4747ac$export$c0bb0b647f701bb5)`
  <!-- SVG icon for volume minus -->
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height="14"
    width="12.25"
    viewBox="0 0 448 512"
  >
    <path
      d="M301.1 34.8C312.6 40 320 51.4 320 64V448c0 12.6-7.4 24-18.9 29.2s-25 3.1-34.4-5.3L131.8 352H64c-35.3 0-64-28.7-64-64V224c0-35.3 28.7-64 64-64h67.8L266.7 40.1c9.4-8.4 22.9-10.4 34.4-5.3zM412.6 181.5C434.1 199.1 448 225.9 448 256s-13.9 56.9-35.4 74.5c-10.3 8.4-25.4 6.8-33.8-3.5s-6.8-25.4 3.5-33.8C393.1 284.4 400 271 400 256s-6.9-28.4-17.7-37.3c-10.3-8.4-11.8-23.5-3.5-33.8s23.5-11.8 33.8-3.5z"
    />
  </svg>
`;


var $7a7e833d71663219$exports = {};
$7a7e833d71663219$exports = new URL("media_player.091ebb1f.png?" + Date.now(), import.meta.url).toString();



var $165724b8e4669b8b$export$2e2bcd8739ae039 = (0, $def2de46b9306e8a$export$dbf350e5966cf602)`
  :host {
    --ha-card-border-width: 0px;
  }
  #my-media-player-card {
    border-radius: 0.75rem;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 10px;
    background-color: #ffffffcc;
    color: rgb(0, 0, 0);
    padding: 0px 16px 0.5rem;
    /* padding: 1rem; */
  }
  .music-player {
    display: grid;
    align-items: center;
    box-sizing: content-box;
    row-gap: 0.5rem;
    grid-template-columns: 1fr min-content;
    transition: margin-top 0.7s ease-in-out 0s, padding 0.7s ease-in-out 0s,
      grid-row-gap 0.3s ease-in-out 0s, background-image 0.3s ease-in-out 0s;
  }
  .music-active {
    margin-top: 2.5rem;
    row-gap: 0px;
    transition: all 0.7s ease-in 0s;
    &.music-paused {
      margin-top: 0;
    }
  }

  .cover {
    position: relative;
    transition: transform 1s cubic-bezier(0.4, 0, 1, 1) 0.3s,
      border 0.8s linear 0.5s, background-image 0.8s linear 0.3s,
      box-shadow 0.8s 0.3s, opacity 1s ease-in-out 0.5s;
    display: flex;
    width: 150px;
    height: 150px;
    background-size: cover;
    border-radius: 0.75rem;
    opacity: 0;
  }
  .cover-active {
    transform: translateY(-2rem);
    box-shadow: rgba(0, 0, 0, 0.2) 0px 10px 10px;
    border: 1px solid rgba(171, 171, 171, 0.8);
    opacity: 1;
  }
  .content {
    padding-right: 1rem;
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: center;
    width: initial;
    overflow: hidden;
    margin-top: 0.5rem;
    transition: all 0.7s ease-in-out 0s;
  }
  .metadata {
    text-align: center;
    margin-bottom: 0.5rem;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    white-space: nowrap;
    align-items: center;
    & h2 {
      margin: 0px;
      font-size: 1.2rem;
      text-transform: uppercase;
      display: flex;
      width: fit-content;
      letter-spacing: normal;
      font-weight: 700;
    }
    & p {
      margin: 5px 0px;
      font-size: 16px;
      font-weight: 400;
      white-space: normal;
    }
  }
  .controls {
    display: flex;
    align-items: normal;
    justify-content: space-around;
    padding-top: 0.5rem;
  }
  .control-btn,
  .volumeBtn button,
  .volume-input button {
    background: none;
    border: none;
    padding: 0rem;
    margin: 0px 10px;
    cursor: pointer;
    transition: transform 0.2s ease-in-out 0s;
    &:hover {
      outline: none;
      transform: scale(1.1);
    }
    &:active {
      transform: scale(0.9);
    }
  }
  .control-btn svg {
    width: 32px;
    height: 32px;
    filter: drop-shadow(rgba(0, 0, 0, 0.3) 0px 2px 2px);
  }
  .progress-bar {
    background-color: rgba(0, 0, 0, 0.2);
    height: 0.5rem;
    width: 100%;
    border-radius: 999px;
    overflow: hidden;
    display: flex;
    margin: 0px 0.7rem;
  }
  #progress {
    height: 100%;
    width: 0px;
    transition: all 1s ease-out 0s;
    filter: brightness(0.5);
  }
  .time-info {
    display: flex;
    justify-content: space-between;
    padding: 0px 1px;
    font-size: 0.7rem;
  }
  .progress-info,
  .volume-input {
    flex-grow: 1;
    transition: opacity 0.5s ease 0s, visibility 0.5s ease 0s;
    opacity: 1;
    visibility: visible;
  }
  .progress-visible .volume-input,
  .volume-visible .progress-info {
    opacity: 0;
    visibility: hidden;
  }
  .progress-info {
    display: flex;
    align-items: center;
    font-size: smaller;
    width: 100%;
    flex-grow: 1;
  }
  .volume-input {
    display: flex;
    font-size: large;
    width: 85%;
    font-weight: 600;
    height: auto;
    align-items: center;
    position: absolute;
    & p {
      font-size: 0.8rem;
      margin: 0px;
    }
  }
  .slider {
    appearance: none;
    width: 100%;
    height: 0.5rem;
    filter: brightness(0.5);
    border-radius: 5px;
    background-position: initial;
    background-size: initial;
    background-repeat: initial;
    background-attachment: initial;
    background-origin: initial;
    background-clip: initial;
    background-color: rgba(0, 0, 0, 0.1);
    background-image: linear-gradient(
      to right,
      var(--bgColor, #000) var(--value),
      transparent var(--value)
    );
    outline: none;
    opacity: 0.7;
    transition: opacity 1s ease-out 0s;
    &::-webkit-slider-thumb {
      appearance: none;
      width: 1rem;
      height: 1rem;
      border-radius: 50%;
      background: var(--bgColor, #000);
      cursor: pointer;
    }
  }
  .bottom-bar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    transition: visibility 0.3s ease 0s;
    grid-column: 1 / -1;
  }
  @keyframes marquee {
    0% {
      transform: translateX(100%);
    }
    100% {
      transform: translateX(-100%);
    }
  }
  .marquee {
    overflow: hidden;
    white-space: nowrap;
    & span {
      display: inline-block;
      animation: marquee var(--speed) linear 1.5s;
      animation-iteration-count: infinite;
    }
  }

  #playPauseBtn {
    display: flex;
    position: relative;
    width: 51px;
    height: 51px;
  }
  .play,
  .pause {
    display: block;
    position: absolute;
    background-image: var(--svg);
    --svg: url('data:image/svg+xml,\<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">\<path d="M0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM188.3 147.1c-7.6 4.2-12.3 12.3-12.3 20.9V344c0 8.7 4.7 16.7 12.3 20.9s16.8 4.1 24.3-.5l144-88c7.1-4.4 11.5-12.1 11.5-20.5s-4.4-16.1-11.5-20.5l-144-88c-7.4-4.5-16.7-4.7-24.3-.5z"/>\</svg>');
    background-size: 100% 100%;
    width: 51px;
    height: 51px;
    transition: all 0.25s linear 0s;
    border-radius: 1000px;

    &::before,
    &::after {
      border-radius: 1000px;
      content: '';
      display: block;
      position: absolute;
      width: 51px;
      height: 51px;
    }
  }
  .play::before {
    box-shadow: rgba(255, 255, 255, 0) 0px 0px 0px;
    transition: all 0.25s linear 0s;
  }
  .playing {
    position: relative;
    width: 51px;
    height: 51px;
    display: flex;
    &:hover {
      transform: scale(1.1);
    }
    .play {
      opacity: 0;
    }
    .pause {
      --svg: url('data:image/svg+xml,\<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">\<path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM224 192V320c0 17.7-14.3 32-32 32s-32-14.3-32-32V192c0-17.7 14.3-32 32-32s32 14.3 32 32zm128 0V320c0 17.7-14.3 32-32 32s-32-14.3-32-32V192c0-17.7 14.3-32 32-32s32 14.3 32 32z"/>\</svg>');
      background-image: var(--svg);
      opacity: 1;
      &::before {
        animation: 1.5s ease-in-out 0s infinite normal none running audio1;
      }
      &::after {
        animation: 2.2s ease-in-out 0s infinite normal none running audio2;
      }
    }
  }

  .animate-audio1 {
    animation: 1.5s ease-in-out 0s infinite normal none running audio1;
  }
  @keyframes audio1 {
    0%,
    100% {
      box-shadow: 0 0 0 0.4em rgba(var(--bgColor), 0.4);
    }
    25% {
      box-shadow: 0 0 0 0.15em rgba(var(--bgColor), 0.15);
    }
    50% {
      box-shadow: 0 0 0 0.55em rgba(var(--bgColor), 0.55);
    }
    75% {
      box-shadow: 0 0 0 0.25em rgba(var(--bgColor), 0.25);
    }
  }
  .animate-audio2 {
    animation: 2.2s ease-in-out 0s infinite normal none running audio2;
  }
  @keyframes audio2 {
    0%,
    100% {
      box-shadow: 0 0 0 0.75em rgba(var(--bgColor), 0.15);
    }
    25% {
      box-shadow: 0 0 0 0.4em rgba(var(--bgColor), 0.3);
    }
    50% {
      box-shadow: 0 0 0 0.15em rgba(var(--bgColor), 0.05);
    }
    75% {
      box-shadow: 0 0 0 0.55em rgba(var(--bgColor), 0.45);
    }
  }
`;


class $9beb25968945f973$export$e2ab76f87befd879 extends (0, $ab210b2da7b39b9d$export$3f2f9f5909897157) {
    // Properties definition
    static get properties() {
        return {
            hass: {},
            _config: {},
            audio: {
                type: String
            },
            entityId: {
                type: String
            },
            isPlaying: {
                type: Boolean
            },
            isPaused: {
                type: Boolean
            },
            isIdle: {
                type: Boolean
            },
            isStandby: {
                type: Boolean
            },
            isUnavailable: {
                type: Boolean
            },
            isOff: {
                type: Boolean
            },
            isActive: {
                type: Boolean
            },
            picture: {
                type: String
            },
            progress: {
                type: Number
            },
            mediaPosition: {
                type: Number
            },
            mediaDuration: {
                type: Number
            },
            volume: {
                type: Number
            },
            backgroundColor: {
                type: String
            },
            backgroundColorRGB: {
                type: String
            },
            foregroundColorRGB: {
                type: String
            },
            foregroundColor: {
                type: String
            }
        };
    }
    static styles = [
        (0, $165724b8e4669b8b$export$2e2bcd8739ae039)
    ];
    // Method to set configuration
    setConfig(config) {
        this._config = config;
        if (this._config) {
            this.entityId = this._config.entity;
            this.audio = this._config.audio;
            console.log("Audio:", this.audio, "Entity", this.entityId);
        }
    }
    // Constructor
    constructor(){
        super();
        // Initial values for progress, mediaPosition, and mediaDuration
        this.progress = 0;
        this.mediaPosition = 0;
        this.mediaDuration = 0;
        this.audio = "";
        this._animationFrameId = null; // Animation frame ID for progress update
        // Bind the toggleVolumeControl method to the class instance
        this.toggleVolumeControl = this.toggleVolumeControl.bind(this);
    }
    set hass(obj) {
        this._hass = obj;
    }
    get hass() {
        return this._hass;
    }
    get entityId() {
        return this._entityId;
    }
    set entityId(newEntityId) {
        this._entityId = newEntityId;
        this.requestUpdate(); // Ensure LitElement re-renders when entityId changes
    }
    get entityState() {
        const stateObj = this.hass.states[this.entityId];
        const state = stateObj.state;
        return state;
    }
    get isPlaying() {
        return this.entityState === "playing";
    }
    get isPaused() {
        return this.entityState === "paused";
    }
    get isIdle() {
        return this.entityState === "idle";
    }
    get isStandby() {
        return this.entityState === "standby";
    }
    get isUnavailable() {
        return this.entityState === "unavailable";
    }
    get isOff() {
        return this.entityState === "off";
    }
    get isActive() {
        return !this.isOff && !this.isUnavailable && !this.isIdle;
    }
    get picture() {
        const stateObj = this.hass.states[this.entityId];
        const entityImage = stateObj.attributes.entity_picture;
        let entityPicture = entityImage ? entityImage : (0, (/*@__PURE__*/$parcel$interopDefault($7a7e833d71663219$exports)));
        return entityPicture;
    }
    // Callback when the element is added to the DOM
    connectedCallback() {
        super.connectedCallback();
        this._startProgressUpdate(); // Start updating progress
    }
    // Callback when the element is removed from the DOM
    disconnectedCallback() {
        if (this._animationFrameId) cancelAnimationFrame(this._animationFrameId); // Cancel progress update animation frame
        super.disconnectedCallback();
    }
    // Method to start updating progress
    _startProgressUpdate() {
        const updateProgress = ()=>{
            const stateObj = this.hass.states[this.entityId];
            if (stateObj) {
                // Extracting media information from Home Assistant state
                const { media_position_updated_at: media_position_updated_at, media_position: media_position, media_duration: media_duration } = stateObj.attributes;
                let percentage = 0;
                let updatedPosition = media_position;
                if (this.isPlaying) {
                    // Calculating progress percentage when media is playing
                    const updatedAt = new Date(media_position_updated_at).getTime() / 1000;
                    const now = Date.now() / 1000;
                    const elapsedTime = now - updatedAt;
                    updatedPosition = media_position + elapsedTime;
                    percentage = updatedPosition / media_duration * 100;
                } else if (this.isPaused) // Calculating progress percentage when media is paused
                percentage = media_position / media_duration * 100;
                // Updating properties
                this.progress = Math.min(percentage.toFixed(1), 100);
                this.mediaPosition = updatedPosition;
                this.mediaDuration = media_duration;
                this.requestUpdate(); // Requesting update to render changes
            }
            this._animationFrameId = requestAnimationFrame(updateProgress); // Scheduling next frame update
        };
        this._animationFrameId = requestAnimationFrame(updateProgress); // Starting the update loop
    }
    // Method to format time in MM:SS format
    _formatTime(seconds) {
        const pad = (num)=>num.toString().padStart(2, "0");
        const minutes = pad(Math.floor(seconds / 60));
        const secondsLeft = pad(Math.floor(seconds % 60));
        return `${minutes}:${secondsLeft}`;
    }
    _renderControls() {
        return (0, $f58f44579a4747ac$export$c0bb0b647f701bb5)`
      <div class="controls" style="--bgColor: ${this.backgroundColorRGB};">
        <button
          id="prevBtn"
          class="control-btn"
          @click=${()=>{
            this._serviceCmd("media_previous_track");
        }}
        >
          ${0, $ab37392bf2f9deb0$export$38daf55da2e14a4f}
        </button>
        <button
          id="playPauseBtn"
          class=" control-btn ${this.isPlaying ? "playing" : ""}"
          @click=${()=>this._serviceCmd("media_play_pause")}
        >
          <span class="play"></span>
          <span class="pause"></span>
        </button>
        <button
          id="nextBtn"
          class="control-btn"
          @click=${()=>this._serviceCmd("media_next_track")}
        >
          ${0, $ab37392bf2f9deb0$export$4cff7387a9fd5bbf}
        </button>
      </div>
    `;
    }
    _renderMediaInfo() {
        const stateObj = this.hass.states[this.entityId];
        const mediaTitle = stateObj ? stateObj.attributes.media_title : "Unknown";
        const mediaArtist = stateObj ? stateObj.attributes.media_artist : "Unknown";
        return (0, $f58f44579a4747ac$export$c0bb0b647f701bb5)`
      <div id="mediaInfo" class="metadata">
        <h2
          id="mediaTitle"
          style="text-wrap:${!this.isPlaying ? "pretty" : ""};"
          class="media-title"
        >
          <span>${mediaTitle}</span>
        </h2>
        <p>${mediaArtist}</p>
      </div>
    `;
    }
    _renderProgresBar() {
        const formattedPosition = this._formatTime(this.mediaPosition); // Format media position
        const formattedDuration = this._formatTime(this.mediaDuration); // Format  media duration
        const progressStyles = {
            backgroundColor: `${this.backgroundColor}`,
            width: `${this.progress}%`
        };
        return (0, $f58f44579a4747ac$export$c0bb0b647f701bb5)`
      <div class="progress-info">
        <span>${formattedPosition}</span>
        <div
          class="progress-bar"
          style="background-color: rgba(${this.foregroundColorRGB},0.1);"
        >
          <div id="progress" style=${(0, $19f464fcda7d2482$export$1e5b4ce2fa884e6a)(progressStyles)}></div>
        </div>
        <span>${formattedDuration}</span>
      </div>
    `;
    }
    // Render the volume slider
    _renderVolumeSlider() {
        const stateObj = this.hass.states[this._config.entity];
        this.volume = stateObj && stateObj.attributes.volume_level ? stateObj.attributes.volume_level * 100 : "";
        return (0, $f58f44579a4747ac$export$c0bb0b647f701bb5)`
      <div class="volume-input">
        <button
          id="volumeMinus"
          @click=${()=>this._serviceCmd("volume_down")}
        >
          ${0, $ab37392bf2f9deb0$export$b068b5ff921c80be}
        </button>
        <input
          class="slider"
          type="range"
          min="0"
          max="100"
          .value="${Math.round(this.volume)}"
          @input="${this.handleVolumeChange}"
          style="--value: ${Math.round(this.volume)}%; --bgColor: ${this.backgroundColor};"
        />
        <button id="volumePlus" @click=${()=>this._serviceCmd("volume_up")}>
          ${0, $ab37392bf2f9deb0$export$86f80383d5836d1d}
        </button>
        <p>${Math.round(this.volume)}</p>
      </div>
    `;
    }
    _renderBottomBar() {
        if (this.isActive) return (0, $f58f44579a4747ac$export$c0bb0b647f701bb5)`
        <div class="bottom-bar progress-visible">
          ${this._renderProgresBar()} ${this._renderVolumeSlider()}
          <div id="volumeBtn" class="volumeBtn">
            <button @click=${this.toggleVolumeControl}>${0, $ab37392bf2f9deb0$export$153112e4307e89bd}</button>
          </div>
        </div>
      `;
    }
    // Rendering method
    render() {
        if (!this._config) return (0, $f58f44579a4747ac$export$c0bb0b647f701bb5)``; // If Home Assistant instance or configuration is not available, render nothing
        const stateObj = this.hass.states[this._config.entity];
        // If state object is not available, render an unknown entity message
        if (!stateObj) return (0, $f58f44579a4747ac$export$c0bb0b647f701bb5)` <ha-card>Unknown entity: ${this._config.entity}</ha-card> `;
        if (stateObj) {
            this._setBackgroundVibrantColor();
            this._getAndLogMediaInfoWidth();
            // Rendering the media player card
            const gradientBg = {
                backgroundColor: `${this.backgroundColor}`,
                backgroundImage: `linear-gradient(to right, rgba(${this.backgroundColorRGB}, 1) 60%, rgba(${this.backgroundColorRGB}, 0) 90%), url('${this.picture}')`,
                backgroundSize: `contain`,
                backgroundRepeat: `no-repeat`,
                backgroundPosition: `right bottom`,
                transition: `background-image 1s ease-in-out 0.3s`
            };
            const gradient = {
                backgroundImage: `linear-gradient(317deg, rgba(${this.backgroundColorRGB}, 0.8) 0%, rgba(${this.backgroundColorRGB}, 0.7) 45%, transparent 100%)`,
                transition: `background-color 1s ease-in-out 0.3s`
            };
            return (0, $f58f44579a4747ac$export$c0bb0b647f701bb5)`
        <ha-card>
          <div
            id="my-media-player-card"
            style=${(0, $19f464fcda7d2482$export$1e5b4ce2fa884e6a)(this.isPlaying ? gradient : gradientBg)}
          >
            <div
              class="music-player ${this.isPlaying ? "music-active" : this.isPaused ? "music-active music-paused" : ""}"
            >
              <div class="content">
                ${this._renderMediaInfo()} ${this._renderControls()}
              </div>
              <div
                class="cover ${this.isPlaying ? "cover-active" : ""}"
                style="background-image: url('${this.picture}');"
              ></div>
            </div>
            ${this._renderBottomBar()}
          </div>
        </ha-card>
      `;
        }
    }
    toggleVolumeControl() {
        const bottomBar = this.shadowRoot.querySelector(".bottom-bar");
        bottomBar.classList.toggle("volume-visible");
        bottomBar.classList.toggle("progress-visible");
        if (this.audio) this.playPopupSound();
    }
    playPopupSound() {
        if (!this.audio) return;
        const audioUrl = this.audio;
        const audioElement = new Audio(audioUrl);
        audioElement.play();
    }
    // Method to get the width of the mediaInfo div and log it to the console
    _getAndLogMediaInfoWidth() {
        const mediaInfoDiv = this.shadowRoot.getElementById("mediaInfo");
        const mediaTitle = this.shadowRoot.getElementById("mediaTitle");
        if (mediaInfoDiv && mediaTitle) {
            const mediaInfoWidth = mediaInfoDiv.clientWidth;
            const mediaTitleWidth = mediaTitle.clientWidth;
            if (mediaInfoWidth < mediaTitleWidth) {
                mediaTitle.classList.add("marquee", "span");
                // Calculate animation speed
                const animationSpeed = mediaTitleWidth / mediaInfoWidth * 10;
                // Set animation speed as a CSS variable
                mediaTitle.style.setProperty("--speed", animationSpeed + "s");
            } else {
                mediaTitle.classList.remove("marquee", "span");
                // Reset animation speed
                mediaTitle.style.removeProperty("--speed");
            }
        }
    }
    _setBackgroundVibrantColor() {
        // Check if entityPicture has changed
        if (this.picture !== this._picture) {
            this._picture = this.picture; // Update the last entityPicture
            if (this.picture) (0, $2832a6b6c9d55462$export$1561819adeec7903)(this.picture).then(({ background: background, foreground: foreground, foregroundHEX: foregroundHEX })=>{
                this.backgroundColor = background ? background.hex : "";
                this.backgroundColorRGB = background ? background.rgb.join(", ") : "";
                this.foregroundColorRGB = foreground.join(", ");
                this.foregroundColor = foregroundHEX;
            }).catch((error)=>{
                console.error("Error:", error);
            });
        }
    }
    // Method to handle updating the volume_level attribute of the media player
    handleVolumeChange(event) {
        this.volume = event.target.value;
        this.updateVolume();
    }
    updateVolume() {
        const level_input = this.volume / 100;
        this.hass.callService("media_player", "volume_set", {
            entity_id: this.entityId,
            volume_level: level_input
        });
    }
    // Method to handle media control commands
    _serviceCmd(service_type) {
        this.hass.callService("media_player", service_type, {
            entity_id: this.entityId
        });
    }
    static getStubConfig(hass) {
        // Filter for media players that are 'on' or 'playing'
        const mediaPlayers = Object.keys(hass.states).filter((entityId)=>{
            return entityId.startsWith("media_player.") && (hass.states[entityId].state === "paused" || hass.states[entityId].state === "playing");
        });
        if (mediaPlayers.length === 0) return {
            entity: "media_player.default"
        }; // Default entity if none are 'on' or 'playing'
        // Select a random media player entity ID from the filtered list
        const randomIndex = Math.floor(Math.random() * mediaPlayers.length);
        return {
            entity: mediaPlayers[randomIndex]
        };
    }
    // Method to get the size of the card
    getCardSize() {
        return 3;
    }
}


// Registering the custom element
customElements.define("my-media-player-card", (0, $9beb25968945f973$export$e2ab76f87befd879));
console.info("%c \uD83D\uDCFB My Media Player Card ", "background: #222; color: #bada55");
window.customCards = window.customCards || [];
window.customCards.push({
    preview: true,
    type: "my-media-player-card",
    name: "My Media Player Card",
    description: "This is my custom media player card"
});


//# sourceMappingURL=my-media-player.js.map
