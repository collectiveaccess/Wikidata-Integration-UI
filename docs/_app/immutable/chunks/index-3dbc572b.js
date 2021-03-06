function J() {}
function nt(t, e) {
  for (const n in e) t[n] = e[n];
  return t;
}
function K(t) {
  return t();
}
function z() {
  return Object.create(null);
}
function $(t) {
  t.forEach(K);
}
function it(t) {
  return typeof t == 'function';
}
function $t(t, e) {
  return t != t ? e == e : t !== e || (t && typeof t == 'object') || typeof t == 'function';
}
function st(t) {
  return Object.keys(t).length === 0;
}
function vt(t, e, n, i) {
  if (t) {
    const s = Q(t, e, n, i);
    return t[0](s);
  }
}
function Q(t, e, n, i) {
  return t[1] && i ? nt(n.ctx.slice(), t[1](i(e))) : n.ctx;
}
function kt(t, e, n, i) {
  if (t[2] && i) {
    const s = t[2](i(n));
    if (e.dirty === void 0) return s;
    if (typeof s == 'object') {
      const a = [],
        l = Math.max(e.dirty.length, s.length);
      for (let c = 0; c < l; c += 1) a[c] = e.dirty[c] | s[c];
      return a;
    }
    return e.dirty | s;
  }
  return e.dirty;
}
function Et(t, e, n, i, s, a) {
  if (s) {
    const l = Q(e, n, i, a);
    t.p(l, s);
  }
}
function Nt(t) {
  if (t.ctx.length > 32) {
    const e = [],
      n = t.ctx.length / 32;
    for (let i = 0; i < n; i++) e[i] = -1;
    return e;
  }
  return -1;
}
let A = !1;
function lt() {
  A = !0;
}
function rt() {
  A = !1;
}
function ct(t, e, n, i) {
  for (; t < e; ) {
    const s = t + ((e - t) >> 1);
    n(s) <= i ? (t = s + 1) : (e = s);
  }
  return t;
}
function ot(t) {
  if (t.hydrate_init) return;
  t.hydrate_init = !0;
  let e = t.childNodes;
  if (t.nodeName === 'HEAD') {
    const r = [];
    for (let o = 0; o < e.length; o++) {
      const f = e[o];
      f.claim_order !== void 0 && r.push(f);
    }
    e = r;
  }
  const n = new Int32Array(e.length + 1),
    i = new Int32Array(e.length);
  n[0] = -1;
  let s = 0;
  for (let r = 0; r < e.length; r++) {
    const o = e[r].claim_order,
      f = (s > 0 && e[n[s]].claim_order <= o ? s + 1 : ct(1, s, (_) => e[n[_]].claim_order, o)) - 1;
    i[r] = n[f] + 1;
    const d = f + 1;
    (n[d] = r), (s = Math.max(d, s));
  }
  const a = [],
    l = [];
  let c = e.length - 1;
  for (let r = n[s] + 1; r != 0; r = i[r - 1]) {
    for (a.push(e[r - 1]); c >= r; c--) l.push(e[c]);
    c--;
  }
  for (; c >= 0; c--) l.push(e[c]);
  a.reverse(), l.sort((r, o) => r.claim_order - o.claim_order);
  for (let r = 0, o = 0; r < l.length; r++) {
    for (; o < a.length && l[r].claim_order >= a[o].claim_order; ) o++;
    const f = o < a.length ? a[o] : null;
    t.insertBefore(l[r], f);
  }
}
function at(t, e) {
  if (A) {
    for (
      ot(t),
        (t.actual_end_child === void 0 ||
          (t.actual_end_child !== null && t.actual_end_child.parentElement !== t)) &&
          (t.actual_end_child = t.firstChild);
      t.actual_end_child !== null && t.actual_end_child.claim_order === void 0;

    )
      t.actual_end_child = t.actual_end_child.nextSibling;
    e !== t.actual_end_child
      ? (e.claim_order !== void 0 || e.parentNode !== t) && t.insertBefore(e, t.actual_end_child)
      : (t.actual_end_child = e.nextSibling);
  } else (e.parentNode !== t || e.nextSibling !== null) && t.appendChild(e);
}
function ut(t, e, n) {
  t.insertBefore(e, n || null);
}
function ft(t, e, n) {
  A && !n ? at(t, e) : (e.parentNode !== t || e.nextSibling != n) && t.insertBefore(e, n || null);
}
function T(t) {
  t.parentNode.removeChild(t);
}
function St(t, e) {
  for (let n = 0; n < t.length; n += 1) t[n] && t[n].d(e);
}
function U(t) {
  return document.createElement(t);
}
function _t(t) {
  return document.createElementNS('http://www.w3.org/2000/svg', t);
}
function P(t) {
  return document.createTextNode(t);
}
function Tt() {
  return P(' ');
}
function At() {
  return P('');
}
function Mt(t, e, n, i) {
  return t.addEventListener(e, n, i), () => t.removeEventListener(e, n, i);
}
function jt(t) {
  return function (e) {
    return e.preventDefault(), t.call(this, e);
  };
}
function Ct(t, e, n) {
  n == null ? t.removeAttribute(e) : t.getAttribute(e) !== n && t.setAttribute(e, n);
}
function Ht(t, e, n) {
  const i = new Set();
  for (let s = 0; s < t.length; s += 1) t[s].checked && i.add(t[s].__value);
  return n || i.delete(e), Array.from(i);
}
function Lt(t) {
  return t === '' ? null : +t;
}
function dt(t) {
  return Array.from(t.childNodes);
}
function V(t) {
  t.claim_info === void 0 && (t.claim_info = { last_index: 0, total_claimed: 0 });
}
function X(t, e, n, i, s = !1) {
  V(t);
  const a = (() => {
    for (let l = t.claim_info.last_index; l < t.length; l++) {
      const c = t[l];
      if (e(c)) {
        const r = n(c);
        return r === void 0 ? t.splice(l, 1) : (t[l] = r), s || (t.claim_info.last_index = l), c;
      }
    }
    for (let l = t.claim_info.last_index - 1; l >= 0; l--) {
      const c = t[l];
      if (e(c)) {
        const r = n(c);
        return (
          r === void 0 ? t.splice(l, 1) : (t[l] = r),
          s ? r === void 0 && t.claim_info.last_index-- : (t.claim_info.last_index = l),
          c
        );
      }
    }
    return i();
  })();
  return (a.claim_order = t.claim_info.total_claimed), (t.claim_info.total_claimed += 1), a;
}
function ht(t, e, n, i) {
  return X(
    t,
    (s) => s.nodeName === e,
    (s) => {
      const a = [];
      for (let l = 0; l < s.attributes.length; l++) {
        const c = s.attributes[l];
        n[c.name] || a.push(c.name);
      }
      a.forEach((l) => s.removeAttribute(l));
    },
    () => i(e)
  );
}
function Bt(t, e, n) {
  return ht(t, e, n, U);
}
function mt(t, e) {
  return X(
    t,
    (n) => n.nodeType === 3,
    (n) => {
      const i = '' + e;
      if (n.data.startsWith(i)) {
        if (n.data.length !== i.length) return n.splitText(i.length);
      } else n.data = i;
    },
    () => P(e),
    !0
  );
}
function Dt(t) {
  return mt(t, ' ');
}
function F(t, e, n) {
  for (let i = n; i < t.length; i += 1) {
    const s = t[i];
    if (s.nodeType === 8 && s.textContent.trim() === e) return i;
  }
  return t.length;
}
function Ot(t, e) {
  const n = F(t, 'HTML_TAG_START', 0),
    i = F(t, 'HTML_TAG_END', n);
  if (n === i) return new R(void 0, e);
  V(t);
  const s = t.splice(n, i - n + 1);
  T(s[0]), T(s[s.length - 1]);
  const a = s.slice(1, s.length - 1);
  for (const l of a)
    (l.claim_order = t.claim_info.total_claimed), (t.claim_info.total_claimed += 1);
  return new R(a, e);
}
function Pt(t, e) {
  (e = '' + e), t.wholeText !== e && (t.data = e);
}
function qt(t, e) {
  t.value = e == null ? '' : e;
}
function Gt(t, e, n, i) {
  n === null ? t.style.removeProperty(e) : t.style.setProperty(e, n, i ? 'important' : '');
}
function It(t, e) {
  for (let n = 0; n < t.options.length; n += 1) {
    const i = t.options[n];
    if (i.__value === e) {
      i.selected = !0;
      return;
    }
  }
  t.selectedIndex = -1;
}
function zt(t) {
  const e = t.querySelector(':checked') || t.options[0];
  return e && e.__value;
}
function Ft(t, e, n) {
  t.classList[n ? 'add' : 'remove'](e);
}
class pt {
  constructor(e = !1) {
    (this.is_svg = !1), (this.is_svg = e), (this.e = this.n = null);
  }
  c(e) {
    this.h(e);
  }
  m(e, n, i = null) {
    this.e ||
      (this.is_svg ? (this.e = _t(n.nodeName)) : (this.e = U(n.nodeName)), (this.t = n), this.c(e)),
      this.i(i);
  }
  h(e) {
    (this.e.innerHTML = e), (this.n = Array.from(this.e.childNodes));
  }
  i(e) {
    for (let n = 0; n < this.n.length; n += 1) ut(this.t, this.n[n], e);
  }
  p(e) {
    this.d(), this.h(e), this.i(this.a);
  }
  d() {
    this.n.forEach(T);
  }
}
class R extends pt {
  constructor(e, n = !1) {
    super(n), (this.e = this.n = null), (this.l = e);
  }
  c(e) {
    this.l ? (this.n = this.l) : super.c(e);
  }
  i(e) {
    for (let n = 0; n < this.n.length; n += 1) ft(this.t, this.n[n], e);
  }
}
let b;
function w(t) {
  b = t;
}
function q() {
  if (!b) throw new Error('Function called outside component initialization');
  return b;
}
function Rt(t) {
  q().$$.on_mount.push(t);
}
function Wt(t) {
  q().$$.after_update.push(t);
}
function Jt(t, e) {
  return q().$$.context.set(t, e), e;
}
const x = [],
  W = [],
  N = [],
  B = [],
  Y = Promise.resolve();
let D = !1;
function Z() {
  D || ((D = !0), Y.then(tt));
}
function Kt() {
  return Z(), Y;
}
function O(t) {
  N.push(t);
}
function Qt(t) {
  B.push(t);
}
const L = new Set();
let E = 0;
function tt() {
  const t = b;
  do {
    for (; E < x.length; ) {
      const e = x[E];
      E++, w(e), yt(e.$$);
    }
    for (w(null), x.length = 0, E = 0; W.length; ) W.pop()();
    for (let e = 0; e < N.length; e += 1) {
      const n = N[e];
      L.has(n) || (L.add(n), n());
    }
    N.length = 0;
  } while (x.length);
  for (; B.length; ) B.pop()();
  (D = !1), L.clear(), w(t);
}
function yt(t) {
  if (t.fragment !== null) {
    t.update(), $(t.before_update);
    const e = t.dirty;
    (t.dirty = [-1]), t.fragment && t.fragment.p(t.ctx, e), t.after_update.forEach(O);
  }
}
const S = new Set();
let g;
function Ut() {
  g = { r: 0, c: [], p: g };
}
function Vt() {
  g.r || $(g.c), (g = g.p);
}
function et(t, e) {
  t && t.i && (S.delete(t), t.i(e));
}
function gt(t, e, n, i) {
  if (t && t.o) {
    if (S.has(t)) return;
    S.add(t),
      g.c.push(() => {
        S.delete(t), i && (n && t.d(1), i());
      }),
      t.o(e);
  }
}
function Xt(t, e) {
  gt(t, 1, 1, () => {
    e.delete(t.key);
  });
}
function Yt(t, e, n, i, s, a, l, c, r, o, f, d) {
  let _ = t.length,
    m = a.length,
    h = _;
  const M = {};
  for (; h--; ) M[t[h].key] = h;
  const v = [],
    j = new Map(),
    C = new Map();
  for (h = m; h--; ) {
    const u = d(s, a, h),
      p = n(u);
    let y = l.get(p);
    y ? i && y.p(u, e) : ((y = o(p, u)), y.c()),
      j.set(p, (v[h] = y)),
      p in M && C.set(p, Math.abs(h - M[p]));
  }
  const G = new Set(),
    I = new Set();
  function H(u) {
    et(u, 1), u.m(c, f), l.set(u.key, u), (f = u.first), m--;
  }
  for (; _ && m; ) {
    const u = v[m - 1],
      p = t[_ - 1],
      y = u.key,
      k = p.key;
    u === p
      ? ((f = u.first), _--, m--)
      : j.has(k)
      ? !l.has(y) || G.has(y)
        ? H(u)
        : I.has(k)
        ? _--
        : C.get(y) > C.get(k)
        ? (I.add(y), H(u))
        : (G.add(k), _--)
      : (r(p, l), _--);
  }
  for (; _--; ) {
    const u = t[_];
    j.has(u.key) || r(u, l);
  }
  for (; m; ) H(v[m - 1]);
  return v;
}
function Zt(t, e) {
  const n = {},
    i = {},
    s = { $$scope: 1 };
  let a = t.length;
  for (; a--; ) {
    const l = t[a],
      c = e[a];
    if (c) {
      for (const r in l) r in c || (i[r] = 1);
      for (const r in c) s[r] || ((n[r] = c[r]), (s[r] = 1));
      t[a] = c;
    } else for (const r in l) s[r] = 1;
  }
  for (const l in i) l in n || (n[l] = void 0);
  return n;
}
function te(t) {
  return typeof t == 'object' && t !== null ? t : {};
}
function ee(t, e, n) {
  const i = t.$$.props[e];
  i !== void 0 && ((t.$$.bound[i] = n), n(t.$$.ctx[i]));
}
function ne(t) {
  t && t.c();
}
function ie(t, e) {
  t && t.l(e);
}
function xt(t, e, n, i) {
  const { fragment: s, on_mount: a, on_destroy: l, after_update: c } = t.$$;
  s && s.m(e, n),
    i ||
      O(() => {
        const r = a.map(K).filter(it);
        l ? l.push(...r) : $(r), (t.$$.on_mount = []);
      }),
    c.forEach(O);
}
function wt(t, e) {
  const n = t.$$;
  n.fragment !== null &&
    ($(n.on_destroy),
    n.fragment && n.fragment.d(e),
    (n.on_destroy = n.fragment = null),
    (n.ctx = []));
}
function bt(t, e) {
  t.$$.dirty[0] === -1 && (x.push(t), Z(), t.$$.dirty.fill(0)),
    (t.$$.dirty[(e / 31) | 0] |= 1 << e % 31);
}
function se(t, e, n, i, s, a, l, c = [-1]) {
  const r = b;
  w(t);
  const o = (t.$$ = {
    fragment: null,
    ctx: null,
    props: a,
    update: J,
    not_equal: s,
    bound: z(),
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(e.context || (r ? r.$$.context : [])),
    callbacks: z(),
    dirty: c,
    skip_bound: !1,
    root: e.target || r.$$.root
  });
  l && l(o.root);
  let f = !1;
  if (
    ((o.ctx = n
      ? n(t, e.props || {}, (d, _, ...m) => {
          const h = m.length ? m[0] : _;
          return (
            o.ctx &&
              s(o.ctx[d], (o.ctx[d] = h)) &&
              (!o.skip_bound && o.bound[d] && o.bound[d](h), f && bt(t, d)),
            _
          );
        })
      : []),
    o.update(),
    (f = !0),
    $(o.before_update),
    (o.fragment = i ? i(o.ctx) : !1),
    e.target)
  ) {
    if (e.hydrate) {
      lt();
      const d = dt(e.target);
      o.fragment && o.fragment.l(d), d.forEach(T);
    } else o.fragment && o.fragment.c();
    e.intro && et(t.$$.fragment), xt(t, e.target, e.anchor, e.customElement), rt(), tt();
  }
  w(r);
}
class le {
  $destroy() {
    wt(this, 1), (this.$destroy = J);
  }
  $on(e, n) {
    const i = this.$$.callbacks[e] || (this.$$.callbacks[e] = []);
    return (
      i.push(n),
      () => {
        const s = i.indexOf(n);
        s !== -1 && i.splice(s, 1);
      }
    );
  }
  $set(e) {
    this.$$set && !st(e) && ((this.$$.skip_bound = !0), this.$$set(e), (this.$$.skip_bound = !1));
  }
}
export {
  zt as $,
  Zt as A,
  te as B,
  wt as C,
  nt as D,
  Kt as E,
  vt as F,
  at as G,
  Et as H,
  Nt as I,
  kt as J,
  W as K,
  ee as L,
  Mt as M,
  St as N,
  Qt as O,
  Ft as P,
  qt as Q,
  $ as R,
  le as S,
  jt as T,
  it as U,
  R as V,
  Ot as W,
  Yt as X,
  Xt as Y,
  O as Z,
  It as _,
  dt as a,
  Lt as a0,
  Ht as a1,
  Ct as b,
  Bt as c,
  T as d,
  U as e,
  Gt as f,
  ft as g,
  mt as h,
  se as i,
  Pt as j,
  Tt as k,
  At as l,
  Dt as m,
  J as n,
  Ut as o,
  gt as p,
  Vt as q,
  et as r,
  $t as s,
  P as t,
  Jt as u,
  Wt as v,
  Rt as w,
  ne as x,
  ie as y,
  xt as z
};
