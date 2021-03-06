import {
  S as Oe,
  i as we,
  s as Ee,
  K as Ie,
  L as Se,
  e as E,
  t as C,
  c as I,
  a as S,
  h as D,
  d as u,
  b as J,
  g as A,
  G as d,
  j as W,
  k as F,
  m as V,
  Z as le,
  _ as Q,
  M as U,
  N as X,
  R as je,
  x as Te,
  l as ne,
  y as Ne,
  z as ye,
  O as Ce,
  r as De,
  p as Je,
  C as Ae,
  w as Be,
  $ as te
} from '../chunks/index-3dbc572b.js';
import { S as Me } from '../chunks/SimpleAutocomplete-81201232.js';
import {
  g as Pe,
  a as Re,
  b as Fe,
  c as Ve,
  d as He,
  e as Ke,
  f as We,
  s as qe,
  h as ze,
  p as Ge,
  w as Ze,
  v as Qe
} from '../chunks/queries-02904e64.js';
function oe(n, e, l) {
  const s = n.slice();
  return (s[29] = e[l][0]), (s[30] = e[l][1]), s;
}
function re(n, e, l) {
  const s = n.slice();
  return (s[33] = e[l][0]), (s[34] = e[l][1]), s;
}
function ie(n, e, l) {
  const s = n.slice();
  return (s[37] = e[l][0]), (s[38] = e[l][1]), s;
}
function ce(n, e, l) {
  const s = n.slice();
  return (s[41] = e[l]), s;
}
function fe(n, e, l) {
  const s = n.slice();
  return (s[41] = e[l]), s;
}
function he(n, e, l) {
  const s = n.slice();
  return (s[41] = e[l]), s;
}
function _e(n) {
  let e, l, s, a, h;
  return {
    c() {
      (e = E('h2')), (l = C(n[2])), (s = C(' (')), (a = C(n[1])), (h = C(')')), this.h();
    },
    l(t) {
      e = I(t, 'H2', { class: !0 });
      var o = S(e);
      (l = D(o, n[2])), (s = D(o, ' (')), (a = D(o, n[1])), (h = D(o, ')')), o.forEach(u), this.h();
    },
    h() {
      J(e, 'class', 'title is-2');
    },
    m(t, o) {
      A(t, e, o), d(e, l), d(e, s), d(e, a), d(e, h);
    },
    p(t, o) {
      o[0] & 4 && W(l, t[2]), o[0] & 2 && W(a, t[1]);
    },
    d(t) {
      t && u(e);
    }
  };
}
function ue(n) {
  let e,
    l,
    s,
    a,
    h,
    t,
    o,
    m,
    b,
    p,
    v,
    g,
    _,
    r = [R, ...n[6]],
    c = [];
  for (let f = 0; f < r.length; f += 1) c[f] = de(he(n, r, f));
  let k = [R, ...n[7]],
    L = [];
  for (let f = 0; f < k.length; f += 1) L[f] = be(fe(n, k, f));
  let q = [R, ...n[8]],
    T = [];
  for (let f = 0; f < q.length; f += 1) T[f] = pe(ce(n, q, f));
  let G = Object.entries(n[9]),
    y = [];
  for (let f = 0; f < G.length; f += 1) y[f] = Le(oe(n, G, f));
  return {
    c() {
      (e = E('div')), (l = E('div')), (s = E('select'));
      for (let f = 0; f < c.length; f += 1) c[f].c();
      (a = F()), (h = E('div')), (t = E('select'));
      for (let f = 0; f < L.length; f += 1) L[f].c();
      (o = F()), (m = E('div')), (b = E('select'));
      for (let f = 0; f < T.length; f += 1) T[f].c();
      (p = F()), (v = E('table'));
      for (let f = 0; f < y.length; f += 1) y[f].c();
      this.h();
    },
    l(f) {
      e = I(f, 'DIV', { class: !0 });
      var w = S(e);
      l = I(w, 'DIV', { class: !0 });
      var i = S(l);
      s = I(i, 'SELECT', { class: !0 });
      var B = S(s);
      for (let O = 0; O < c.length; O += 1) c[O].l(B);
      B.forEach(u), i.forEach(u), (a = V(w)), (h = I(w, 'DIV', { class: !0 }));
      var Y = S(h);
      t = I(Y, 'SELECT', { class: !0 });
      var $ = S(t);
      for (let O = 0; O < L.length; O += 1) L[O].l($);
      $.forEach(u), Y.forEach(u), (o = V(w)), (m = I(w, 'DIV', { class: !0 }));
      var x = S(m);
      b = I(x, 'SELECT', { class: !0 });
      var ee = S(b);
      for (let O = 0; O < T.length; O += 1) T[O].l(ee);
      ee.forEach(u), x.forEach(u), w.forEach(u), (p = V(f)), (v = I(f, 'TABLE', { class: !0 }));
      var j = S(v);
      for (let O = 0; O < y.length; O += 1) y[O].l(j);
      j.forEach(u), this.h();
    },
    h() {
      J(s, 'class', 'select'),
        n[3] === void 0 && le(() => n[14].call(s)),
        J(l, 'class', 'svelte-1b3f6ge'),
        J(t, 'class', 'select'),
        n[4] === void 0 && le(() => n[16].call(t)),
        J(h, 'class', 'svelte-1b3f6ge'),
        J(b, 'class', 'select'),
        n[5] === void 0 && le(() => n[18].call(b)),
        J(m, 'class', 'svelte-1b3f6ge'),
        J(e, 'class', 'type-selector svelte-1b3f6ge'),
        J(v, 'class', 'table is-fullwidth');
    },
    m(f, w) {
      A(f, e, w), d(e, l), d(l, s);
      for (let i = 0; i < c.length; i += 1) c[i].m(s, null);
      Q(s, n[3]), d(e, a), d(e, h), d(h, t);
      for (let i = 0; i < L.length; i += 1) L[i].m(t, null);
      Q(t, n[4]), d(e, o), d(e, m), d(m, b);
      for (let i = 0; i < T.length; i += 1) T[i].m(b, null);
      Q(b, n[5]), A(f, p, w), A(f, v, w);
      for (let i = 0; i < y.length; i += 1) y[i].m(v, null);
      g ||
        ((_ = [
          U(s, 'change', n[14]),
          U(s, 'change', n[15]),
          U(t, 'change', n[16]),
          U(t, 'change', n[17]),
          U(b, 'change', n[18]),
          U(b, 'change', n[19])
        ]),
        (g = !0));
    },
    p(f, w) {
      if (w[0] & 64) {
        r = [R, ...f[6]];
        let i;
        for (i = 0; i < r.length; i += 1) {
          const B = he(f, r, i);
          c[i] ? c[i].p(B, w) : ((c[i] = de(B)), c[i].c(), c[i].m(s, null));
        }
        for (; i < c.length; i += 1) c[i].d(1);
        c.length = r.length;
      }
      if ((w[0] & 72 && Q(s, f[3]), w[0] & 128)) {
        k = [R, ...f[7]];
        let i;
        for (i = 0; i < k.length; i += 1) {
          const B = fe(f, k, i);
          L[i] ? L[i].p(B, w) : ((L[i] = be(B)), L[i].c(), L[i].m(t, null));
        }
        for (; i < L.length; i += 1) L[i].d(1);
        L.length = k.length;
      }
      if ((w[0] & 144 && Q(t, f[4]), w[0] & 256)) {
        q = [R, ...f[8]];
        let i;
        for (i = 0; i < q.length; i += 1) {
          const B = ce(f, q, i);
          T[i] ? T[i].p(B, w) : ((T[i] = pe(B)), T[i].c(), T[i].m(b, null));
        }
        for (; i < T.length; i += 1) T[i].d(1);
        T.length = q.length;
      }
      if ((w[0] & 288 && Q(b, f[5]), w[0] & 512)) {
        G = Object.entries(f[9]);
        let i;
        for (i = 0; i < G.length; i += 1) {
          const B = oe(f, G, i);
          y[i] ? y[i].p(B, w) : ((y[i] = Le(B)), y[i].c(), y[i].m(v, null));
        }
        for (; i < y.length; i += 1) y[i].d(1);
        y.length = G.length;
      }
    },
    d(f) {
      f && u(e), X(c, f), X(L, f), X(T, f), f && u(p), f && u(v), X(y, f), (g = !1), je(_);
    }
  };
}
function de(n) {
  let e,
    l = n[41] + '',
    s,
    a,
    h;
  return {
    c() {
      (e = E('option')), (s = C(l)), (a = F()), this.h();
    },
    l(t) {
      e = I(t, 'OPTION', {});
      var o = S(e);
      (s = D(o, l)), (a = V(o)), o.forEach(u), this.h();
    },
    h() {
      (e.__value = h = n[41]), (e.value = e.__value);
    },
    m(t, o) {
      A(t, e, o), d(e, s), d(e, a);
    },
    p(t, o) {
      o[0] & 64 && l !== (l = t[41] + '') && W(s, l),
        o[0] & 64 && h !== (h = t[41]) && ((e.__value = h), (e.value = e.__value));
    },
    d(t) {
      t && u(e);
    }
  };
}
function be(n) {
  let e,
    l = n[41] + '',
    s,
    a,
    h;
  return {
    c() {
      (e = E('option')), (s = C(l)), (a = F()), this.h();
    },
    l(t) {
      e = I(t, 'OPTION', {});
      var o = S(e);
      (s = D(o, l)), (a = V(o)), o.forEach(u), this.h();
    },
    h() {
      (e.__value = h = n[41]), (e.value = e.__value);
    },
    m(t, o) {
      A(t, e, o), d(e, s), d(e, a);
    },
    p(t, o) {
      o[0] & 128 && l !== (l = t[41] + '') && W(s, l),
        o[0] & 128 && h !== (h = t[41]) && ((e.__value = h), (e.value = e.__value));
    },
    d(t) {
      t && u(e);
    }
  };
}
function pe(n) {
  let e,
    l = n[41] + '',
    s,
    a,
    h;
  return {
    c() {
      (e = E('option')), (s = C(l)), (a = F()), this.h();
    },
    l(t) {
      e = I(t, 'OPTION', {});
      var o = S(e);
      (s = D(o, l)), (a = V(o)), o.forEach(u), this.h();
    },
    h() {
      (e.__value = h = n[41]), (e.value = e.__value);
    },
    m(t, o) {
      A(t, e, o), d(e, s), d(e, a);
    },
    p(t, o) {
      o[0] & 256 && l !== (l = t[41] + '') && W(s, l),
        o[0] & 256 && h !== (h = t[41]) && ((e.__value = h), (e.value = e.__value));
    },
    d(t) {
      t && u(e);
    }
  };
}
function ge(n) {
  let e,
    l = Object.entries(n[30].related),
    s = [];
  for (let a = 0; a < l.length; a += 1) s[a] = ke(re(n, l, a));
  return {
    c() {
      e = E('table');
      for (let a = 0; a < s.length; a += 1) s[a].c();
      this.h();
    },
    l(a) {
      e = I(a, 'TABLE', { class: !0 });
      var h = S(e);
      for (let t = 0; t < s.length; t += 1) s[t].l(h);
      h.forEach(u), this.h();
    },
    h() {
      J(e, 'class', 'table is-fullwidth');
    },
    m(a, h) {
      A(a, e, h);
      for (let t = 0; t < s.length; t += 1) s[t].m(e, null);
    },
    p(a, h) {
      if (h[0] & 512) {
        l = Object.entries(a[30].related);
        let t;
        for (t = 0; t < l.length; t += 1) {
          const o = re(a, l, t);
          s[t] ? s[t].p(o, h) : ((s[t] = ke(o)), s[t].c(), s[t].m(e, null));
        }
        for (; t < s.length; t += 1) s[t].d(1);
        s.length = l.length;
      }
    },
    d(a) {
      a && u(e), X(s, a);
    }
  };
}
function me(n) {
  let e,
    l = Object.entries(n[34].related),
    s = [];
  for (let a = 0; a < l.length; a += 1) s[a] = ve(ie(n, l, a));
  return {
    c() {
      e = E('table');
      for (let a = 0; a < s.length; a += 1) s[a].c();
      this.h();
    },
    l(a) {
      e = I(a, 'TABLE', { class: !0 });
      var h = S(e);
      for (let t = 0; t < s.length; t += 1) s[t].l(h);
      h.forEach(u), this.h();
    },
    h() {
      J(e, 'class', 'table is-fullwidth');
    },
    m(a, h) {
      A(a, e, h);
      for (let t = 0; t < s.length; t += 1) s[t].m(e, null);
    },
    p(a, h) {
      if (h[0] & 512) {
        l = Object.entries(a[34].related);
        let t;
        for (t = 0; t < l.length; t += 1) {
          const o = ie(a, l, t);
          s[t] ? s[t].p(o, h) : ((s[t] = ve(o)), s[t].c(), s[t].m(e, null));
        }
        for (; t < s.length; t += 1) s[t].d(1);
        s.length = l.length;
      }
    },
    d(a) {
      a && u(e), X(s, a);
    }
  };
}
function ve(n) {
  let e,
    l,
    s = n[38].label + '',
    a,
    h,
    t = n[38].id + '',
    o,
    m;
  return {
    c() {
      (e = E('tr')), (l = E('td')), (a = C(s)), (h = F()), (o = C(t)), (m = F()), this.h();
    },
    l(b) {
      e = I(b, 'TR', {});
      var p = S(e);
      l = I(p, 'TD', { class: !0 });
      var v = S(l);
      (a = D(v, s)), (h = V(v)), (o = D(v, t)), v.forEach(u), (m = V(p)), p.forEach(u), this.h();
    },
    h() {
      J(l, 'class', 'no-border svelte-1b3f6ge');
    },
    m(b, p) {
      A(b, e, p), d(e, l), d(l, a), d(l, h), d(l, o), d(e, m);
    },
    p(b, p) {
      p[0] & 512 && s !== (s = b[38].label + '') && W(a, s),
        p[0] & 512 && t !== (t = b[38].id + '') && W(o, t);
    },
    d(b) {
      b && u(e);
    }
  };
}
function ke(n) {
  let e,
    l,
    s = n[34].label + '',
    a,
    h,
    t = n[34].id + '',
    o,
    m,
    b,
    p,
    v = Object.keys(n[34].related).length > 0,
    g,
    _ = v && me(n);
  return {
    c() {
      (e = E('tr')),
        (l = E('td')),
        (a = C(s)),
        (h = C(' (')),
        (o = C(t)),
        (m = C(')')),
        (b = F()),
        (p = E('td')),
        _ && _.c(),
        (g = F()),
        this.h();
    },
    l(r) {
      e = I(r, 'TR', {});
      var c = S(e);
      l = I(c, 'TD', { class: !0 });
      var k = S(l);
      (a = D(k, s)),
        (h = D(k, ' (')),
        (o = D(k, t)),
        (m = D(k, ')')),
        k.forEach(u),
        (b = V(c)),
        (p = I(c, 'TD', { class: !0 }));
      var L = S(p);
      _ && _.l(L), L.forEach(u), (g = V(c)), c.forEach(u), this.h();
    },
    h() {
      J(l, 'class', 'is-half svelte-1b3f6ge'), J(p, 'class', 'svelte-1b3f6ge');
    },
    m(r, c) {
      A(r, e, c),
        d(e, l),
        d(l, a),
        d(l, h),
        d(l, o),
        d(l, m),
        d(e, b),
        d(e, p),
        _ && _.m(p, null),
        d(e, g);
    },
    p(r, c) {
      c[0] & 512 && s !== (s = r[34].label + '') && W(a, s),
        c[0] & 512 && t !== (t = r[34].id + '') && W(o, t),
        c[0] & 512 && (v = Object.keys(r[34].related).length > 0),
        v ? (_ ? _.p(r, c) : ((_ = me(r)), _.c(), _.m(p, null))) : _ && (_.d(1), (_ = null));
    },
    d(r) {
      r && u(e), _ && _.d();
    }
  };
}
function Le(n) {
  let e,
    l,
    s = n[30].label + '',
    a,
    h,
    t = n[30].id + '',
    o,
    m,
    b,
    p,
    v = Object.keys(n[30].related).length > 0,
    g,
    _ = v && ge(n);
  return {
    c() {
      (e = E('tr')),
        (l = E('td')),
        (a = C(s)),
        (h = C(' (')),
        (o = C(t)),
        (m = C(')')),
        (b = F()),
        (p = E('td')),
        _ && _.c(),
        (g = F()),
        this.h();
    },
    l(r) {
      e = I(r, 'TR', {});
      var c = S(e);
      l = I(c, 'TD', { class: !0 });
      var k = S(l);
      (a = D(k, s)),
        (h = D(k, ' (')),
        (o = D(k, t)),
        (m = D(k, ')')),
        k.forEach(u),
        (b = V(c)),
        (p = I(c, 'TD', { class: !0 }));
      var L = S(p);
      _ && _.l(L), L.forEach(u), (g = V(c)), c.forEach(u), this.h();
    },
    h() {
      J(l, 'class', 'is-one-third svelte-1b3f6ge'), J(p, 'class', 'svelte-1b3f6ge');
    },
    m(r, c) {
      A(r, e, c),
        d(e, l),
        d(l, a),
        d(l, h),
        d(l, o),
        d(l, m),
        d(e, b),
        d(e, p),
        _ && _.m(p, null),
        d(e, g);
    },
    p(r, c) {
      c[0] & 512 && s !== (s = r[30].label + '') && W(a, s),
        c[0] & 512 && t !== (t = r[30].id + '') && W(o, t),
        c[0] & 512 && (v = Object.keys(r[30].related).length > 0),
        v ? (_ ? _.p(r, c) : ((_ = ge(r)), _.c(), _.m(p, null))) : _ && (_.d(1), (_ = null));
    },
    d(r) {
      r && u(e), _ && _.d();
    }
  };
}
function Ue(n) {
  let e, l, s, a, h, t, o, m, b;
  function p(r) {
    n[13](r);
  }
  let v = {
    searchFunction: n[11],
    delay: '200',
    onChange: n[12],
    labelFieldName: 'search_label',
    placeholder: 'Search keyword',
    hideArrow: !0,
    showClear: !1,
    localFiltering: !1
  };
  n[0] !== void 0 && (v.selectedItem = n[0]),
    (a = new Me({ props: v })),
    Ie.push(() => Se(a, 'selectedItem', p));
  let g = n[1] && _e(n),
    _ = n[0] && ue(n);
  return {
    c() {
      (e = E('h1')),
        (l = C('Linked Data')),
        (s = F()),
        Te(a.$$.fragment),
        (t = F()),
        g && g.c(),
        (o = F()),
        _ && _.c(),
        (m = ne()),
        this.h();
    },
    l(r) {
      e = I(r, 'H1', { class: !0 });
      var c = S(e);
      (l = D(c, 'Linked Data')),
        c.forEach(u),
        (s = V(r)),
        Ne(a.$$.fragment, r),
        (t = V(r)),
        g && g.l(r),
        (o = V(r)),
        _ && _.l(r),
        (m = ne()),
        this.h();
    },
    h() {
      J(e, 'class', 'title is-1');
    },
    m(r, c) {
      A(r, e, c),
        d(e, l),
        A(r, s, c),
        ye(a, r, c),
        A(r, t, c),
        g && g.m(r, c),
        A(r, o, c),
        _ && _.m(r, c),
        A(r, m, c),
        (b = !0);
    },
    p(r, c) {
      const k = {};
      !h && c[0] & 1 && ((h = !0), (k.selectedItem = r[0]), Ce(() => (h = !1))),
        a.$set(k),
        r[1]
          ? g
            ? g.p(r, c)
            : ((g = _e(r)), g.c(), g.m(o.parentNode, o))
          : g && (g.d(1), (g = null)),
        r[0]
          ? _
            ? _.p(r, c)
            : ((_ = ue(r)), _.c(), _.m(m.parentNode, m))
          : _ && (_.d(1), (_ = null));
    },
    i(r) {
      b || (De(a.$$.fragment, r), (b = !0));
    },
    o(r) {
      Je(a.$$.fragment, r), (b = !1);
    },
    d(r) {
      r && u(e), r && u(s), Ae(a, r), r && u(t), g && g.d(r), r && u(o), _ && _.d(r), r && u(m);
    }
  };
}
let R = 'Select type';
function Xe(n, e, l) {
  let s = '',
    a = null,
    h = null,
    t = R,
    o = R,
    m = R,
    b = [],
    p = [],
    v = [],
    g = [],
    _ = [],
    r = [],
    c = {},
    k = {},
    L = {};
  async function q(j, O) {
    let H = await ze(j),
      M = Object.values(H),
      N = null,
      Z = Ge.map((P) => P.label),
      K = Ze.map((P) => P.label),
      z = Qe.map((P) => P.label);
    M.some((P) => Z.includes(P))
      ? (N = Z)
      : M.some((P) => K.includes(P))
      ? (N = K)
      : M.some((P) => z.includes(P))
      ? (N = z)
      : (N = []),
      O == 'L1' ? l(6, (b = N)) : O == 'L2' ? l(7, (v = N)) : l(8, (_ = N));
  }
  async function T(j) {
    let O, H, M;
    if (
      (j === 'L1'
        ? ((O = t), (H = [a]))
        : j === 'L2'
        ? ((H = p), (O = o))
        : j === 'L3' && ((H = g), (O = m)),
      O === R)
    )
      switch (j) {
        case 'L1':
          l(9, (c = {})), l(4, (o = R)), l(5, (m = R));
          break;
        case 'L2':
          l(9, (c = k)), l(5, (m = R));
          break;
        case 'L3':
          l(9, (c = L));
          break;
      }
    switch (O) {
      case 'student of':
        M = await We(H);
        break;
      case 'student':
        M = await Ke(H);
        break;
      case 'notable works':
        M = await He(H);
        break;
      case 'choreographer for':
        M = await Ve(H);
        break;
      case 'choreographed by':
        M = await Fe(H);
        break;
      case 'location of first performance':
        M = await Re(H);
        break;
      case 'country':
        M = await Pe(H);
        break;
      default:
        return;
    }
    if (j === 'L1') {
      let N = {};
      (p = new Set()),
        Object.values(M).forEach((Z) => {
          Object.values(Z).forEach((K) => {
            p.add(K.id),
              (N[K.id] = { id: K.id, label: K.label, description: K.description, related: {} });
          });
        }),
        (p = [...p]),
        (k = JSON.parse(JSON.stringify(N))),
        l(9, (c = N)),
        await q(Object.keys(k), 'L2');
    } else if (j === 'L2') {
      let N = JSON.parse(JSON.stringify(k));
      g = new Set();
      for (let [Z, K] of Object.entries(N))
        if (!!M[Z])
          for (let [z, P] of Object.entries(M[Z]))
            g.add(z),
              (K.related[z] = { id: z, label: P.label, description: P.description, related: {} });
      (g = [...g]), (L = JSON.parse(JSON.stringify(N))), l(9, (c = N)), await q(g, 'L3');
    } else if (j === 'L3') {
      let N = JSON.parse(JSON.stringify(L));
      r = new Set();
      for (let [Z, K] of Object.entries(N))
        for (let [z, P] of Object.entries(K.related))
          if (!!M[z])
            for (let [se, ae] of Object.entries(M[z]))
              r.add(z),
                (P.related[se] = {
                  id: se,
                  label: ae.label,
                  description: ae.description,
                  related: {}
                });
      (r = [...r]), JSON.parse(JSON.stringify(N)), l(9, (c = N));
    }
  }
  async function G(j) {
    if ((j && (l(1, (a = null)), l(2, (h = null))), j.length > 1)) return await qe(j);
  }
  function y() {
    l(3, (t = R)),
      l(4, (o = R)),
      l(5, (m = R)),
      l(9, (c = {})),
      l(6, (b = [])),
      (p = []),
      (k = {}),
      l(7, (v = [])),
      (g = []),
      (L = {}),
      l(8, (_ = [])),
      (r = []);
  }
  async function f(j) {
    Object.keys(j).length != 0 && (y(), l(1, (a = j.id)), l(2, (h = j.label)), await q([a], 'L1'));
  }
  Be(async () => {});
  function w(j) {
    (s = j), l(0, s);
  }
  function i() {
    (t = te(this)), l(3, t), l(6, b);
  }
  const B = () => T('L1');
  function Y() {
    (o = te(this)), l(4, o), l(7, v);
  }
  const $ = () => T('L2');
  function x() {
    (m = te(this)), l(5, m), l(8, _);
  }
  return [s, a, h, t, o, m, b, v, _, c, T, G, f, w, i, B, Y, $, x, () => T('L3')];
}
class el extends Oe {
  constructor(e) {
    super(), we(this, e, Xe, Ue, Ee, {}, null, [-1, -1]);
  }
}
export { el as default };
