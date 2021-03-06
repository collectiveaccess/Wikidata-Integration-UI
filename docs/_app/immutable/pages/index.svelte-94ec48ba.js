import {
  S as de,
  i as ge,
  s as ke,
  K as Ie,
  L as we,
  e as L,
  t as T,
  c as Q,
  a as H,
  h as y,
  d as h,
  b as R,
  g as v,
  G as N,
  k as M,
  m as F,
  M as ee,
  j as X,
  N as W,
  x as Y,
  l as K,
  y as Z,
  z as $,
  n as Ee,
  r as D,
  p as A,
  C as x,
  q as z,
  O as ve,
  w as je,
  o as J
} from '../chunks/index-3dbc572b.js';
import { S as Ne } from '../chunks/SimpleAutocomplete-81201232.js';
import { I as Se, C as be } from '../chunks/item_basic_info-d9e32901.js';
import '../chunks/preload-helper-08e20361.js';
function te(r, e, s) {
  const n = r.slice();
  return (n[19] = e[s]), n;
}
function le(r, e, s) {
  const n = r.slice();
  return (n[22] = e[s]), n;
}
function se(r, e, s) {
  const n = r.slice();
  return (n[19] = e[s]), n;
}
function oe(r, e, s) {
  const n = r.slice();
  return (n[22] = e[s]), n;
}
function ne(r, e, s) {
  const n = r.slice();
  return (n[29] = e[s]), n;
}
function ie(r) {
  let e, s;
  return {
    c() {
      (e = L('h2')), (s = T('Loading...')), this.h();
    },
    l(n) {
      e = Q(n, 'H2', { class: !0 });
      var t = H(e);
      (s = y(t, 'Loading...')), t.forEach(h), this.h();
    },
    h() {
      R(e, 'class', 'title is-2');
    },
    m(n, t) {
      v(n, e, t), N(e, s);
    },
    d(n) {
      n && h(e);
    }
  };
}
function fe(r) {
  let e,
    s,
    n,
    t,
    _,
    l,
    a,
    f,
    E,
    I = r[9],
    g = [];
  for (let c = 0; c < I.length; c += 1) g[c] = re(ne(r, I, c));
  return {
    c() {
      (e = L('h2')), (s = T('Saved Records')), (n = M()), (t = L('ol'));
      for (let c = 0; c < g.length; c += 1) g[c].c();
      (_ = M()), (l = L('button')), (a = T('Delete all records')), this.h();
    },
    l(c) {
      e = Q(c, 'H2', { class: !0 });
      var w = H(e);
      (s = y(w, 'Saved Records')), w.forEach(h), (n = F(c)), (t = Q(c, 'OL', {}));
      var k = H(t);
      for (let B = 0; B < g.length; B += 1) g[B].l(k);
      k.forEach(h), (_ = F(c)), (l = Q(c, 'BUTTON', { class: !0 }));
      var C = H(l);
      (a = y(C, 'Delete all records')), C.forEach(h), this.h();
    },
    h() {
      R(e, 'class', 'title is-2'),
        R(l, 'class', 'button is-danger delete-records-button svelte-me114u');
    },
    m(c, w) {
      v(c, e, w), N(e, s), v(c, n, w), v(c, t, w);
      for (let k = 0; k < g.length; k += 1) g[k].m(t, null);
      v(c, _, w), v(c, l, w), N(l, a), f || ((E = ee(l, 'click', r[12])), (f = !0));
    },
    p(c, w) {
      if (w[0] & 512) {
        I = c[9];
        let k;
        for (k = 0; k < I.length; k += 1) {
          const C = ne(c, I, k);
          g[k] ? g[k].p(C, w) : ((g[k] = re(C)), g[k].c(), g[k].m(t, null));
        }
        for (; k < g.length; k += 1) g[k].d(1);
        g.length = I.length;
      }
    },
    d(c) {
      c && h(e), c && h(n), c && h(t), W(g, c), c && h(_), c && h(l), (f = !1), E();
    }
  };
}
function re(r) {
  let e,
    s,
    n = r[29].label + '',
    t,
    _,
    l = r[29].id + '',
    a,
    f,
    E;
  return {
    c() {
      (e = L('li')), (s = L('a')), (t = T(n)), (_ = T(' (')), (a = T(l)), (f = T(')')), this.h();
    },
    l(I) {
      e = Q(I, 'LI', {});
      var g = H(e);
      s = Q(g, 'A', { href: !0 });
      var c = H(s);
      (t = y(c, n)),
        (_ = y(c, ' (')),
        (a = y(c, l)),
        (f = y(c, ')')),
        c.forEach(h),
        g.forEach(h),
        this.h();
    },
    h() {
      R(s, 'href', (E = `/items/${r[29].id}`));
    },
    m(I, g) {
      v(I, e, g), N(e, s), N(s, t), N(s, _), N(s, a), N(s, f);
    },
    p(I, g) {
      g[0] & 512 && n !== (n = I[29].label + '') && X(t, n),
        g[0] & 512 && l !== (l = I[29].id + '') && X(a, l),
        g[0] & 512 && E !== (E = `/items/${I[29].id}`) && R(s, 'href', E);
    },
    d(I) {
      I && h(e);
    }
  };
}
function ae(r) {
  let e,
    s,
    n,
    t,
    _,
    l,
    a,
    f,
    E,
    I,
    g,
    c,
    w,
    k,
    C,
    B,
    V,
    G,
    S = !r[8] && ce(r);
  f = new Se({ props: { item: r[1], languageCodes: r[5] } });
  let q = r[6],
    m = [];
  for (let o = 0; o < q.length; o += 1) m[o] = _e(se(r, q, o));
  const p = (o) =>
    A(m[o], 1, 1, () => {
      m[o] = null;
    });
  let b = r[7],
    i = [];
  for (let o = 0; o < b.length; o += 1) i[o] = me(te(r, b, o));
  const j = (o) =>
    A(i[o], 1, 1, () => {
      i[o] = null;
    });
  return {
    c() {
      (e = L('h2')),
        (s = T(r[3])),
        (n = T(' (')),
        (t = T(r[2])),
        (_ = T(')')),
        (l = M()),
        S && S.c(),
        (a = M()),
        Y(f.$$.fragment),
        (E = M()),
        (I = L('h3')),
        (g = T('Statements')),
        (c = M());
      for (let o = 0; o < m.length; o += 1) m[o].c();
      (w = M()), (k = L('h3')), (C = T('Identifiers')), (B = M());
      for (let o = 0; o < i.length; o += 1) i[o].c();
      (V = K()), this.h();
    },
    l(o) {
      e = Q(o, 'H2', { class: !0 });
      var u = H(e);
      (s = y(u, r[3])),
        (n = y(u, ' (')),
        (t = y(u, r[2])),
        (_ = y(u, ')')),
        u.forEach(h),
        (l = F(o)),
        S && S.l(o),
        (a = F(o)),
        Z(f.$$.fragment, o),
        (E = F(o)),
        (I = Q(o, 'H3', { class: !0 }));
      var O = H(I);
      (g = y(O, 'Statements')), O.forEach(h), (c = F(o));
      for (let U = 0; U < m.length; U += 1) m[U].l(o);
      (w = F(o)), (k = Q(o, 'H3', { class: !0 }));
      var d = H(k);
      (C = y(d, 'Identifiers')), d.forEach(h), (B = F(o));
      for (let U = 0; U < i.length; U += 1) i[U].l(o);
      (V = K()), this.h();
    },
    h() {
      R(e, 'class', 'title is-2'), R(I, 'class', 'title is-3'), R(k, 'class', 'title is-3');
    },
    m(o, u) {
      v(o, e, u),
        N(e, s),
        N(e, n),
        N(e, t),
        N(e, _),
        v(o, l, u),
        S && S.m(o, u),
        v(o, a, u),
        $(f, o, u),
        v(o, E, u),
        v(o, I, u),
        N(I, g),
        v(o, c, u);
      for (let O = 0; O < m.length; O += 1) m[O].m(o, u);
      v(o, w, u), v(o, k, u), N(k, C), v(o, B, u);
      for (let O = 0; O < i.length; O += 1) i[O].m(o, u);
      v(o, V, u), (G = !0);
    },
    p(o, u) {
      (!G || u[0] & 8) && X(s, o[3]),
        (!G || u[0] & 4) && X(t, o[2]),
        o[8]
          ? S && (S.d(1), (S = null))
          : S
          ? S.p(o, u)
          : ((S = ce(o)), S.c(), S.m(a.parentNode, a));
      const O = {};
      if (
        (u[0] & 2 && (O.item = o[1]), u[0] & 32 && (O.languageCodes = o[5]), f.$set(O), u[0] & 64)
      ) {
        q = o[6];
        let d;
        for (d = 0; d < q.length; d += 1) {
          const U = se(o, q, d);
          m[d]
            ? (m[d].p(U, u), D(m[d], 1))
            : ((m[d] = _e(U)), m[d].c(), D(m[d], 1), m[d].m(w.parentNode, w));
        }
        for (J(), d = q.length; d < m.length; d += 1) p(d);
        z();
      }
      if (u[0] & 128) {
        b = o[7];
        let d;
        for (d = 0; d < b.length; d += 1) {
          const U = te(o, b, d);
          i[d]
            ? (i[d].p(U, u), D(i[d], 1))
            : ((i[d] = me(U)), i[d].c(), D(i[d], 1), i[d].m(V.parentNode, V));
        }
        for (J(), d = b.length; d < i.length; d += 1) j(d);
        z();
      }
    },
    i(o) {
      if (!G) {
        D(f.$$.fragment, o);
        for (let u = 0; u < q.length; u += 1) D(m[u]);
        for (let u = 0; u < b.length; u += 1) D(i[u]);
        G = !0;
      }
    },
    o(o) {
      A(f.$$.fragment, o), (m = m.filter(Boolean));
      for (let u = 0; u < m.length; u += 1) A(m[u]);
      i = i.filter(Boolean);
      for (let u = 0; u < i.length; u += 1) A(i[u]);
      G = !1;
    },
    d(o) {
      o && h(e),
        o && h(l),
        S && S.d(o),
        o && h(a),
        x(f, o),
        o && h(E),
        o && h(I),
        o && h(c),
        W(m, o),
        o && h(w),
        o && h(k),
        o && h(B),
        W(i, o),
        o && h(V);
    }
  };
}
function ce(r) {
  let e, s, n, t;
  return {
    c() {
      (e = L('button')), (s = T('Import record')), this.h();
    },
    l(_) {
      e = Q(_, 'BUTTON', { class: !0 });
      var l = H(e);
      (s = y(l, 'Import record')), l.forEach(h), this.h();
    },
    h() {
      R(e, 'class', 'button is-primary');
    },
    m(_, l) {
      v(_, e, l), N(e, s), n || ((t = ee(e, 'click', r[11])), (n = !0));
    },
    p: Ee,
    d(_) {
      _ && h(e), (n = !1), t();
    }
  };
}
function ue(r) {
  let e, s;
  return (
    (e = new be({ props: { claim: r[22] } })),
    {
      c() {
        Y(e.$$.fragment);
      },
      l(n) {
        Z(e.$$.fragment, n);
      },
      m(n, t) {
        $(e, n, t), (s = !0);
      },
      p(n, t) {
        const _ = {};
        t[0] & 64 && (_.claim = n[22]), e.$set(_);
      },
      i(n) {
        s || (D(e.$$.fragment, n), (s = !0));
      },
      o(n) {
        A(e.$$.fragment, n), (s = !1);
      },
      d(n) {
        x(e, n);
      }
    }
  );
}
function _e(r) {
  let e,
    s,
    n = r[19],
    t = [];
  for (let l = 0; l < n.length; l += 1) t[l] = ue(oe(r, n, l));
  const _ = (l) =>
    A(t[l], 1, 1, () => {
      t[l] = null;
    });
  return {
    c() {
      for (let l = 0; l < t.length; l += 1) t[l].c();
      e = K();
    },
    l(l) {
      for (let a = 0; a < t.length; a += 1) t[a].l(l);
      e = K();
    },
    m(l, a) {
      for (let f = 0; f < t.length; f += 1) t[f].m(l, a);
      v(l, e, a), (s = !0);
    },
    p(l, a) {
      if (a[0] & 64) {
        n = l[19];
        let f;
        for (f = 0; f < n.length; f += 1) {
          const E = oe(l, n, f);
          t[f]
            ? (t[f].p(E, a), D(t[f], 1))
            : ((t[f] = ue(E)), t[f].c(), D(t[f], 1), t[f].m(e.parentNode, e));
        }
        for (J(), f = n.length; f < t.length; f += 1) _(f);
        z();
      }
    },
    i(l) {
      if (!s) {
        for (let a = 0; a < n.length; a += 1) D(t[a]);
        s = !0;
      }
    },
    o(l) {
      t = t.filter(Boolean);
      for (let a = 0; a < t.length; a += 1) A(t[a]);
      s = !1;
    },
    d(l) {
      W(t, l), l && h(e);
    }
  };
}
function he(r) {
  let e, s;
  return (
    (e = new be({ props: { claim: r[22] } })),
    {
      c() {
        Y(e.$$.fragment);
      },
      l(n) {
        Z(e.$$.fragment, n);
      },
      m(n, t) {
        $(e, n, t), (s = !0);
      },
      p(n, t) {
        const _ = {};
        t[0] & 128 && (_.claim = n[22]), e.$set(_);
      },
      i(n) {
        s || (D(e.$$.fragment, n), (s = !0));
      },
      o(n) {
        A(e.$$.fragment, n), (s = !1);
      },
      d(n) {
        x(e, n);
      }
    }
  );
}
function me(r) {
  let e,
    s,
    n = r[19],
    t = [];
  for (let l = 0; l < n.length; l += 1) t[l] = he(le(r, n, l));
  const _ = (l) =>
    A(t[l], 1, 1, () => {
      t[l] = null;
    });
  return {
    c() {
      for (let l = 0; l < t.length; l += 1) t[l].c();
      e = K();
    },
    l(l) {
      for (let a = 0; a < t.length; a += 1) t[a].l(l);
      e = K();
    },
    m(l, a) {
      for (let f = 0; f < t.length; f += 1) t[f].m(l, a);
      v(l, e, a), (s = !0);
    },
    p(l, a) {
      if (a[0] & 128) {
        n = l[19];
        let f;
        for (f = 0; f < n.length; f += 1) {
          const E = le(l, n, f);
          t[f]
            ? (t[f].p(E, a), D(t[f], 1))
            : ((t[f] = he(E)), t[f].c(), D(t[f], 1), t[f].m(e.parentNode, e));
        }
        for (J(), f = n.length; f < t.length; f += 1) _(f);
        z();
      }
    },
    i(l) {
      if (!s) {
        for (let a = 0; a < n.length; a += 1) D(t[a]);
        s = !0;
      }
    },
    o(l) {
      t = t.filter(Boolean);
      for (let a = 0; a < t.length; a += 1) A(t[a]);
      s = !1;
    },
    d(l) {
      W(t, l), l && h(e);
    }
  };
}
function Ce(r) {
  let e, s, n, t, _, l, a, f, E, I, g, c, w, k, C, B, V, G;
  function S(i) {
    r[14](i);
  }
  let q = {
    searchFunction: De,
    delay: '200',
    onChange: r[13],
    labelFieldName: 'search_label',
    placeholder: 'Search keyword',
    hideArrow: !0,
    showClear: !1,
    localFiltering: !1
  };
  r[0] !== void 0 && (q.selectedItem = r[0]),
    (l = new Ne({ props: q })),
    Ie.push(() => we(l, 'selectedItem', S));
  let m = r[4] && ie(),
    p = !r[1] && !r[4] && r[9].length > 0 && fe(r),
    b = r[1] && ae(r);
  return {
    c() {
      (e = L('h1')),
        (s = T('Wikidata Demo')),
        (n = M()),
        (t = L('div')),
        (_ = L('div')),
        Y(l.$$.fragment),
        (f = M()),
        (E = L('div')),
        (I = L('button')),
        (g = T('Reset')),
        (c = M()),
        m && m.c(),
        (w = M()),
        p && p.c(),
        (k = M()),
        b && b.c(),
        (C = K()),
        this.h();
    },
    l(i) {
      e = Q(i, 'H1', { class: !0 });
      var j = H(e);
      (s = y(j, 'Wikidata Demo')), j.forEach(h), (n = F(i)), (t = Q(i, 'DIV', { class: !0 }));
      var o = H(t);
      _ = Q(o, 'DIV', { class: !0 });
      var u = H(_);
      Z(l.$$.fragment, u), u.forEach(h), (f = F(o)), (E = Q(o, 'DIV', { class: !0 }));
      var O = H(E);
      I = Q(O, 'BUTTON', { class: !0 });
      var d = H(I);
      (g = y(d, 'Reset')),
        d.forEach(h),
        O.forEach(h),
        o.forEach(h),
        (c = F(i)),
        m && m.l(i),
        (w = F(i)),
        p && p.l(i),
        (k = F(i)),
        b && b.l(i),
        (C = K()),
        this.h();
    },
    h() {
      R(e, 'class', 'title is-1'),
        R(_, 'class', 'column is-four-fifths'),
        R(I, 'class', 'button is-small'),
        R(E, 'class', 'column'),
        R(t, 'class', 'columns');
    },
    m(i, j) {
      v(i, e, j),
        N(e, s),
        v(i, n, j),
        v(i, t, j),
        N(t, _),
        $(l, _, null),
        N(t, f),
        N(t, E),
        N(E, I),
        N(I, g),
        v(i, c, j),
        m && m.m(i, j),
        v(i, w, j),
        p && p.m(i, j),
        v(i, k, j),
        b && b.m(i, j),
        v(i, C, j),
        (B = !0),
        V || ((G = ee(I, 'click', r[10])), (V = !0));
    },
    p(i, j) {
      const o = {};
      !a && j[0] & 1 && ((a = !0), (o.selectedItem = i[0]), ve(() => (a = !1))),
        l.$set(o),
        i[4] ? m || ((m = ie()), m.c(), m.m(w.parentNode, w)) : m && (m.d(1), (m = null)),
        !i[1] && !i[4] && i[9].length > 0
          ? p
            ? p.p(i, j)
            : ((p = fe(i)), p.c(), p.m(k.parentNode, k))
          : p && (p.d(1), (p = null)),
        i[1]
          ? b
            ? (b.p(i, j), j[0] & 2 && D(b, 1))
            : ((b = ae(i)), b.c(), D(b, 1), b.m(C.parentNode, C))
          : b &&
            (J(),
            A(b, 1, 1, () => {
              b = null;
            }),
            z());
    },
    i(i) {
      B || (D(l.$$.fragment, i), D(b), (B = !0));
    },
    o(i) {
      A(l.$$.fragment, i), A(b), (B = !1);
    },
    d(i) {
      i && h(e),
        i && h(n),
        i && h(t),
        x(l),
        i && h(c),
        m && m.d(i),
        i && h(w),
        p && p.d(i),
        i && h(k),
        b && b.d(i),
        i && h(C),
        (V = !1),
        G();
    }
  };
}
let P = 'http://localhost:8000',
  pe = null;
async function De(r) {
  if (r.length > 1) {
    const e = P + '/search?keyword=' + r,
      s = await fetch(e);
    return console.log('search for ' + r), await s.json();
  }
}
function Oe(r, e, s) {
  let n = {
      Q5: 'human',
      Q30: 'United States',
      Q487604: 'Martha Graham',
      Q16973731: 'Dianne McIntyre',
      Q753828: 'Essex',
      Q76: 'Barack Obama',
      Q28425: 'Chiroptera',
      Q111420520: 'Karl Hirsch'
    },
    t = '',
    _ = null,
    l = pe,
    a = n[pe],
    f = !1,
    E = [],
    I = [],
    g = [],
    c = !1,
    w = [];
  function k(p) {
    let b = p.languages,
      i = Object.keys(b);
    if (b.en) {
      let j = i.indexOf('en');
      i = ['en', ...i.slice(0, j), ...i.slice(j + 1)];
    }
    s(5, (E = i));
  }
  function C(p) {
    s(6, (I = (p.statements && Object.values(p.statements)) || [])),
      s(7, (g = (p.identifiers && Object.values(p.identifiers)) || [])),
      k(p);
  }
  function B() {
    s(1, (_ = null)), s(2, (l = null)), s(3, (a = null)), s(0, (t = ''));
  }
  async function V() {
    const p = P + '/import_wikidata';
    await (
      await fetch(p, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ item_id: l, item_label: a, item_data: _ })
      })
    ).json(),
      s(9, (w = [...w, { id: l, label: a }])),
      s(1, (_ = null)),
      s(3, (a = null)),
      s(2, (l = null)),
      s(8, (c = !0));
  }
  async function G() {
    s(4, (f = !0));
    const p = P + '/items';
    let i = await (await fetch(p)).json();
    s(9, (w = i)), s(4, (f = !1));
  }
  async function S() {
    const p = P + '/items';
    let i = await (
      await fetch(p, { method: 'DELETE', headers: { 'Content-Type': 'application/json' } })
    ).json();
    console.log(i), s(9, (w = []));
  }
  async function q(p) {
    if (!p) return;
    s(4, (f = !0)), s(1, (_ = null)), s(8, (c = !1)), s(2, (l = p.id)), s(3, (a = p.label));
    const b = P + '/fetch_wikidata_item/' + l,
      i = await fetch(b);
    s(1, (_ = await i.json())), C(_), s(4, (f = !1));
  }
  je(async () => {
    if ((G(), !l)) {
      s(4, (f = !1));
      return;
    }
    const p = P + '/fetch_wikidata_item/' + l,
      b = await fetch(p);
    s(1, (_ = await b.json())), C(_), s(4, (f = !1));
  });
  function m(p) {
    (t = p), s(0, t);
  }
  return [t, _, l, a, f, E, I, g, c, w, B, V, S, q, m];
}
class Qe extends de {
  constructor(e) {
    super(), ge(this, e, Oe, Ce, ke, {}, null, [-1, -1]);
  }
}
export { Qe as default };
