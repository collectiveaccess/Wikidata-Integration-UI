import {
  s as We,
  n as we,
  S as Ge,
  i as Fe,
  e as Xe,
  c as He,
  a as Ze,
  d as j,
  b as be,
  f as K,
  g as C,
  t as Qe,
  h as et,
  j as tt,
  k as nt,
  l as T,
  m as st,
  o as Y,
  p as x,
  q as G,
  r as I,
  u as rt,
  v as it,
  w as $e,
  x as z,
  y as re,
  z as q,
  A as ie,
  B as ae,
  C as J,
  D as oe,
  E as De
} from './chunks/index-3dbc572b.js';
import { s as at, a as ot } from './chunks/paths-396f020f.js';
import { _ as W } from './chunks/preload-helper-08e20361.js';
const H = [];
function fe(s, e = we) {
  let t;
  const a = new Set();
  function l(n) {
    if (We(s, n) && ((s = n), t)) {
      const r = !H.length;
      for (const i of a) i[1](), H.push(i, s);
      if (r) {
        for (let i = 0; i < H.length; i += 2) H[i][0](H[i + 1]);
        H.length = 0;
      }
    }
  }
  function c(n) {
    l(n(s));
  }
  function u(n, r = we) {
    const i = [n, r];
    return (
      a.add(i),
      a.size === 1 && (t = e(l) || we),
      n(s),
      () => {
        a.delete(i), a.size === 0 && (t(), (t = null));
      }
    );
  }
  return { set: l, update: c, subscribe: u };
}
function ct(s) {
  let e, t, a;
  const l = [s[1] || {}];
  var c = s[0][0];
  function u(n) {
    let r = {};
    for (let i = 0; i < l.length; i += 1) r = oe(r, l[i]);
    return { props: r };
  }
  return (
    c && (e = new c(u())),
    {
      c() {
        e && z(e.$$.fragment), (t = T());
      },
      l(n) {
        e && re(e.$$.fragment, n), (t = T());
      },
      m(n, r) {
        e && q(e, n, r), C(n, t, r), (a = !0);
      },
      p(n, r) {
        const i = r & 2 ? ie(l, [ae(n[1] || {})]) : {};
        if (c !== (c = n[0][0])) {
          if (e) {
            Y();
            const d = e;
            x(d.$$.fragment, 1, 0, () => {
              J(d, 1);
            }),
              G();
          }
          c
            ? ((e = new c(u())), z(e.$$.fragment), I(e.$$.fragment, 1), q(e, t.parentNode, t))
            : (e = null);
        } else c && e.$set(i);
      },
      i(n) {
        a || (e && I(e.$$.fragment, n), (a = !0));
      },
      o(n) {
        e && x(e.$$.fragment, n), (a = !1);
      },
      d(n) {
        n && j(t), e && J(e, n);
      }
    }
  );
}
function lt(s) {
  let e, t, a;
  const l = [s[1] || {}];
  var c = s[0][0];
  function u(n) {
    let r = { $$slots: { default: [pt] }, $$scope: { ctx: n } };
    for (let i = 0; i < l.length; i += 1) r = oe(r, l[i]);
    return { props: r };
  }
  return (
    c && (e = new c(u(s))),
    {
      c() {
        e && z(e.$$.fragment), (t = T());
      },
      l(n) {
        e && re(e.$$.fragment, n), (t = T());
      },
      m(n, r) {
        e && q(e, n, r), C(n, t, r), (a = !0);
      },
      p(n, r) {
        const i = r & 2 ? ie(l, [ae(n[1] || {})]) : {};
        if ((r & 525 && (i.$$scope = { dirty: r, ctx: n }), c !== (c = n[0][0]))) {
          if (e) {
            Y();
            const d = e;
            x(d.$$.fragment, 1, 0, () => {
              J(d, 1);
            }),
              G();
          }
          c
            ? ((e = new c(u(n))), z(e.$$.fragment), I(e.$$.fragment, 1), q(e, t.parentNode, t))
            : (e = null);
        } else c && e.$set(i);
      },
      i(n) {
        a || (e && I(e.$$.fragment, n), (a = !0));
      },
      o(n) {
        e && x(e.$$.fragment, n), (a = !1);
      },
      d(n) {
        n && j(t), e && J(e, n);
      }
    }
  );
}
function ft(s) {
  let e, t, a;
  const l = [s[2] || {}];
  var c = s[0][1];
  function u(n) {
    let r = {};
    for (let i = 0; i < l.length; i += 1) r = oe(r, l[i]);
    return { props: r };
  }
  return (
    c && (e = new c(u())),
    {
      c() {
        e && z(e.$$.fragment), (t = T());
      },
      l(n) {
        e && re(e.$$.fragment, n), (t = T());
      },
      m(n, r) {
        e && q(e, n, r), C(n, t, r), (a = !0);
      },
      p(n, r) {
        const i = r & 4 ? ie(l, [ae(n[2] || {})]) : {};
        if (c !== (c = n[0][1])) {
          if (e) {
            Y();
            const d = e;
            x(d.$$.fragment, 1, 0, () => {
              J(d, 1);
            }),
              G();
          }
          c
            ? ((e = new c(u())), z(e.$$.fragment), I(e.$$.fragment, 1), q(e, t.parentNode, t))
            : (e = null);
        } else c && e.$set(i);
      },
      i(n) {
        a || (e && I(e.$$.fragment, n), (a = !0));
      },
      o(n) {
        e && x(e.$$.fragment, n), (a = !1);
      },
      d(n) {
        n && j(t), e && J(e, n);
      }
    }
  );
}
function ut(s) {
  let e, t, a;
  const l = [s[2] || {}];
  var c = s[0][1];
  function u(n) {
    let r = { $$slots: { default: [dt] }, $$scope: { ctx: n } };
    for (let i = 0; i < l.length; i += 1) r = oe(r, l[i]);
    return { props: r };
  }
  return (
    c && (e = new c(u(s))),
    {
      c() {
        e && z(e.$$.fragment), (t = T());
      },
      l(n) {
        e && re(e.$$.fragment, n), (t = T());
      },
      m(n, r) {
        e && q(e, n, r), C(n, t, r), (a = !0);
      },
      p(n, r) {
        const i = r & 4 ? ie(l, [ae(n[2] || {})]) : {};
        if ((r & 521 && (i.$$scope = { dirty: r, ctx: n }), c !== (c = n[0][1]))) {
          if (e) {
            Y();
            const d = e;
            x(d.$$.fragment, 1, 0, () => {
              J(d, 1);
            }),
              G();
          }
          c
            ? ((e = new c(u(n))), z(e.$$.fragment), I(e.$$.fragment, 1), q(e, t.parentNode, t))
            : (e = null);
        } else c && e.$set(i);
      },
      i(n) {
        a || (e && I(e.$$.fragment, n), (a = !0));
      },
      o(n) {
        e && x(e.$$.fragment, n), (a = !1);
      },
      d(n) {
        n && j(t), e && J(e, n);
      }
    }
  );
}
function dt(s) {
  let e, t, a;
  const l = [s[3] || {}];
  var c = s[0][2];
  function u(n) {
    let r = {};
    for (let i = 0; i < l.length; i += 1) r = oe(r, l[i]);
    return { props: r };
  }
  return (
    c && (e = new c(u())),
    {
      c() {
        e && z(e.$$.fragment), (t = T());
      },
      l(n) {
        e && re(e.$$.fragment, n), (t = T());
      },
      m(n, r) {
        e && q(e, n, r), C(n, t, r), (a = !0);
      },
      p(n, r) {
        const i = r & 8 ? ie(l, [ae(n[3] || {})]) : {};
        if (c !== (c = n[0][2])) {
          if (e) {
            Y();
            const d = e;
            x(d.$$.fragment, 1, 0, () => {
              J(d, 1);
            }),
              G();
          }
          c
            ? ((e = new c(u())), z(e.$$.fragment), I(e.$$.fragment, 1), q(e, t.parentNode, t))
            : (e = null);
        } else c && e.$set(i);
      },
      i(n) {
        a || (e && I(e.$$.fragment, n), (a = !0));
      },
      o(n) {
        e && x(e.$$.fragment, n), (a = !1);
      },
      d(n) {
        n && j(t), e && J(e, n);
      }
    }
  );
}
function pt(s) {
  let e, t, a, l;
  const c = [ut, ft],
    u = [];
  function n(r, i) {
    return r[0][2] ? 0 : 1;
  }
  return (
    (e = n(s)),
    (t = u[e] = c[e](s)),
    {
      c() {
        t.c(), (a = T());
      },
      l(r) {
        t.l(r), (a = T());
      },
      m(r, i) {
        u[e].m(r, i), C(r, a, i), (l = !0);
      },
      p(r, i) {
        let d = e;
        (e = n(r)),
          e === d
            ? u[e].p(r, i)
            : (Y(),
              x(u[d], 1, 1, () => {
                u[d] = null;
              }),
              G(),
              (t = u[e]),
              t ? t.p(r, i) : ((t = u[e] = c[e](r)), t.c()),
              I(t, 1),
              t.m(a.parentNode, a));
      },
      i(r) {
        l || (I(t), (l = !0));
      },
      o(r) {
        x(t), (l = !1);
      },
      d(r) {
        u[e].d(r), r && j(a);
      }
    }
  );
}
function Ve(s) {
  let e,
    t = s[5] && je(s);
  return {
    c() {
      (e = Xe('div')), t && t.c(), this.h();
    },
    l(a) {
      e = He(a, 'DIV', { id: !0, 'aria-live': !0, 'aria-atomic': !0, style: !0 });
      var l = Ze(e);
      t && t.l(l), l.forEach(j), this.h();
    },
    h() {
      be(e, 'id', 'svelte-announcer'),
        be(e, 'aria-live', 'assertive'),
        be(e, 'aria-atomic', 'true'),
        K(e, 'position', 'absolute'),
        K(e, 'left', '0'),
        K(e, 'top', '0'),
        K(e, 'clip', 'rect(0 0 0 0)'),
        K(e, 'clip-path', 'inset(50%)'),
        K(e, 'overflow', 'hidden'),
        K(e, 'white-space', 'nowrap'),
        K(e, 'width', '1px'),
        K(e, 'height', '1px');
    },
    m(a, l) {
      C(a, e, l), t && t.m(e, null);
    },
    p(a, l) {
      a[5] ? (t ? t.p(a, l) : ((t = je(a)), t.c(), t.m(e, null))) : t && (t.d(1), (t = null));
    },
    d(a) {
      a && j(e), t && t.d();
    }
  };
}
function je(s) {
  let e;
  return {
    c() {
      e = Qe(s[6]);
    },
    l(t) {
      e = et(t, s[6]);
    },
    m(t, a) {
      C(t, e, a);
    },
    p(t, a) {
      a & 64 && tt(e, t[6]);
    },
    d(t) {
      t && j(e);
    }
  };
}
function _t(s) {
  let e, t, a, l, c;
  const u = [lt, ct],
    n = [];
  function r(d, L) {
    return d[0][1] ? 0 : 1;
  }
  (e = r(s)), (t = n[e] = u[e](s));
  let i = s[4] && Ve(s);
  return {
    c() {
      t.c(), (a = nt()), i && i.c(), (l = T());
    },
    l(d) {
      t.l(d), (a = st(d)), i && i.l(d), (l = T());
    },
    m(d, L) {
      n[e].m(d, L), C(d, a, L), i && i.m(d, L), C(d, l, L), (c = !0);
    },
    p(d, [L]) {
      let E = e;
      (e = r(d)),
        e === E
          ? n[e].p(d, L)
          : (Y(),
            x(n[E], 1, 1, () => {
              n[E] = null;
            }),
            G(),
            (t = n[e]),
            t ? t.p(d, L) : ((t = n[e] = u[e](d)), t.c()),
            I(t, 1),
            t.m(a.parentNode, a)),
        d[4]
          ? i
            ? i.p(d, L)
            : ((i = Ve(d)), i.c(), i.m(l.parentNode, l))
          : i && (i.d(1), (i = null));
    },
    i(d) {
      c || (I(t), (c = !0));
    },
    o(d) {
      x(t), (c = !1);
    },
    d(d) {
      n[e].d(d), d && j(a), i && i.d(d), d && j(l);
    }
  };
}
function ht(s, e, t) {
  let { stores: a } = e,
    { page: l } = e,
    { components: c } = e,
    { props_0: u = null } = e,
    { props_1: n = null } = e,
    { props_2: r = null } = e;
  rt('__svelte__', a), it(a.page.notify);
  let i = !1,
    d = !1,
    L = null;
  return (
    $e(() => {
      const E = a.page.subscribe(() => {
        i && (t(5, (d = !0)), t(6, (L = document.title || 'untitled page')));
      });
      return t(4, (i = !0)), E;
    }),
    (s.$$set = (E) => {
      'stores' in E && t(7, (a = E.stores)),
        'page' in E && t(8, (l = E.page)),
        'components' in E && t(0, (c = E.components)),
        'props_0' in E && t(1, (u = E.props_0)),
        'props_1' in E && t(2, (n = E.props_1)),
        'props_2' in E && t(3, (r = E.props_2));
    }),
    (s.$$.update = () => {
      s.$$.dirty & 384 && a.page.set(l);
    }),
    [c, u, n, r, i, d, L, a, l]
  );
}
class mt extends Ge {
  constructor(e) {
    super(),
      Fe(this, e, ht, _t, We, {
        stores: 7,
        page: 8,
        components: 0,
        props_0: 1,
        props_1: 2,
        props_2: 3
      });
  }
}
const gt = {},
  ue = [
    () =>
      W(
        () => import('./pages/__layout.svelte-11dec773.js'),
        [
          'pages/__layout.svelte-11dec773.js',
          'assets/pages/__layout.svelte-d48de065.css',
          'chunks/index-3dbc572b.js',
          'chunks/paths-396f020f.js'
        ]
      ),
    () =>
      W(
        () => import('./error.svelte-8e97f90a.js'),
        ['error.svelte-8e97f90a.js', 'chunks/index-3dbc572b.js']
      ),
    () =>
      W(
        () => import('./pages/index.svelte-94ec48ba.js'),
        [
          'pages/index.svelte-94ec48ba.js',
          'assets/pages/index.svelte-51b36dde.css',
          'chunks/index-3dbc572b.js',
          'chunks/SimpleAutocomplete-81201232.js',
          'assets/SimpleAutocomplete-cc4a1680.css',
          'chunks/item_basic_info-d9e32901.js',
          'assets/item_basic_info-53ce2e86.css',
          'chunks/preload-helper-08e20361.js'
        ]
      ),
    () =>
      W(
        () => import('./pages/items/_id_.svelte-7e0bc7ff.js'),
        [
          'pages/items/_id_.svelte-7e0bc7ff.js',
          'chunks/index-3dbc572b.js',
          'chunks/item_basic_info-d9e32901.js',
          'assets/item_basic_info-53ce2e86.css',
          'chunks/preload-helper-08e20361.js'
        ]
      ),
    () =>
      W(
        () => import('./pages/linked_data.svelte-760bad2f.js'),
        [
          'pages/linked_data.svelte-760bad2f.js',
          'assets/pages/linked_data.svelte-5b68f72c.css',
          'chunks/index-3dbc572b.js',
          'chunks/SimpleAutocomplete-81201232.js',
          'assets/SimpleAutocomplete-cc4a1680.css',
          'chunks/queries-02904e64.js'
        ]
      ),
    () =>
      W(
        () => import('./pages/linked_data_graph.svelte-cdb7861d.js'),
        [
          'pages/linked_data_graph.svelte-cdb7861d.js',
          'assets/pages/linked_data_graph.svelte-c5a9c663.css',
          'chunks/index-3dbc572b.js',
          'chunks/SimpleAutocomplete-81201232.js',
          'assets/SimpleAutocomplete-cc4a1680.css',
          'chunks/queries-02904e64.js'
        ]
      ),
    () =>
      W(
        () => import('./pages/linked_data_graph_demo.svelte-0c9c8ae2.js'),
        [
          'pages/linked_data_graph_demo.svelte-0c9c8ae2.js',
          'assets/pages/linked_data_graph_demo.svelte-ba77bd88.css',
          'chunks/index-3dbc572b.js',
          'chunks/queries-02904e64.js'
        ]
      )
  ],
  wt = {
    '': [[0, 2], [1]],
    linked_data: [[0, 4], [1]],
    linked_data_graph: [[0, 5], [1]],
    linked_data_graph_demo: [[0, 6], [1]],
    'items/[id]': [[0, 3], [1]]
  };
function bt(s) {
  s.client;
}
function Ce(s) {
  return s instanceof Error || (s && s.name && s.message) ? s : new Error(JSON.stringify(s));
}
function ze(s) {
  if (s.fallthrough)
    throw new Error(
      'fallthrough is no longer supported. Use matchers instead: https://kit.svelte.dev/docs/routing#advanced-routing-matching'
    );
  if ('maxage' in s) throw new Error('maxage should be replaced with cache: { maxage }');
  const e = s.status && s.status >= 400 && s.status <= 599 && !s.redirect;
  if (s.error || e) {
    const t = s.status;
    if (!s.error && e) return { status: t || 500, error: new Error() };
    const a = typeof s.error == 'string' ? new Error(s.error) : s.error;
    return a instanceof Error
      ? !t || t < 400 || t > 599
        ? (console.warn(
            '"error" returned from load() without a valid status code \u2014 defaulting to 500'
          ),
          { status: 500, error: a })
        : { status: t, error: a }
      : {
          status: 500,
          error: new Error(
            `"error" property returned from load() must be a string or instance of Error, received type "${typeof a}"`
          )
        };
  }
  if (s.redirect) {
    if (!s.status || Math.floor(s.status / 100) !== 3)
      throw new Error(
        '"redirect" property returned from load() must be accompanied by a 3xx status code'
      );
    if (typeof s.redirect != 'string')
      throw new Error('"redirect" property returned from load() must be a string');
  }
  if (
    s.dependencies &&
    (!Array.isArray(s.dependencies) || s.dependencies.some((t) => typeof t != 'string'))
  )
    throw new Error('"dependencies" property returned from load() must be of type string[]');
  if (s.context)
    throw new Error(
      'You are returning "context" from a load function. "context" was renamed to "stuff", please adjust your code accordingly.'
    );
  return s;
}
function yt(s, e) {
  return s === '/' || e === 'ignore'
    ? s
    : e === 'never'
    ? s.endsWith('/')
      ? s.slice(0, -1)
      : s
    : e === 'always' && !s.endsWith('/')
    ? s + '/'
    : s;
}
class vt extends URL {
  get hash() {
    throw new Error(
      'url.hash is inaccessible from load. Consider accessing hash from the page store within the script tag of your component.'
    );
  }
}
function qe(s) {
  let e = s.baseURI;
  if (!e) {
    const t = s.getElementsByTagName('base');
    e = t.length ? t[0].href : s.URL;
  }
  return e;
}
function ke() {
  return { x: pageXOffset, y: pageYOffset };
}
function Je(s) {
  return s.composedPath().find((t) => t instanceof Node && t.nodeName.toUpperCase() === 'A');
}
function Ke(s) {
  return s instanceof SVGAElement ? new URL(s.href.baseVal, document.baseURI) : new URL(s.href);
}
function Be(s) {
  const e = fe(s);
  let t = !0;
  function a() {
    (t = !0), e.update((u) => u);
  }
  function l(u) {
    (t = !1), e.set(u);
  }
  function c(u) {
    let n;
    return e.subscribe((r) => {
      (n === void 0 || (t && r !== n)) && u((n = r));
    });
  }
  return { notify: a, set: l, subscribe: c };
}
function $t() {
  const { set: s, subscribe: e } = fe(!1),
    t = '1657049611489';
  let a;
  async function l() {
    clearTimeout(a);
    const u = await fetch(`${ot}/_app/version.json`, {
      headers: { pragma: 'no-cache', 'cache-control': 'no-cache' }
    });
    if (u.ok) {
      const { version: n } = await u.json(),
        r = n !== t;
      return r && (s(!0), clearTimeout(a)), r;
    } else throw new Error(`Version check failed: ${u.status}`);
  }
  return { subscribe: e, check: l };
}
function kt(s) {
  let e = 5381,
    t = s.length;
  if (typeof s == 'string') for (; t; ) e = (e * 33) ^ s.charCodeAt(--t);
  else for (; t; ) e = (e * 33) ^ s[--t];
  return (e >>> 0).toString(36);
}
const Ee = window.fetch;
function Et(s, e) {
  let a = `script[sveltekit\\:data-type="data"][sveltekit\\:data-url=${JSON.stringify(
    typeof s == 'string' ? s : s.url
  )}]`;
  e && typeof e.body == 'string' && (a += `[sveltekit\\:data-body="${kt(e.body)}"]`);
  const l = document.querySelector(a);
  if (l && l.textContent) {
    const { body: c, ...u } = JSON.parse(l.textContent);
    return Promise.resolve(new Response(c, u));
  }
  return Ee(s, e);
}
const Rt = /^(\.\.\.)?(\w+)(?:=(\w+))?$/;
function Lt(s) {
  const e = [],
    t = [];
  let a = !0;
  return {
    pattern:
      s === ''
        ? /^\/$/
        : new RegExp(
            `^${decodeURIComponent(s)
              .split(/(?:@[a-zA-Z0-9_-]+)?(?:\/|$)/)
              .map((c, u, n) => {
                const r = /^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(c);
                if (r) return e.push(r[1]), t.push(r[2]), '(?:/(.*))?';
                const i = u === n.length - 1;
                return (
                  c &&
                  '/' +
                    c
                      .split(/\[(.+?)\]/)
                      .map((d, L) => {
                        if (L % 2) {
                          const [, E, Z, F] = Rt.exec(d);
                          return e.push(Z), t.push(F), E ? '(.*?)' : '([^/]+?)';
                        }
                        return (
                          i && d.includes('.') && (a = !1),
                          d
                            .normalize()
                            .replace(/%5[Bb]/g, '[')
                            .replace(/%5[Dd]/g, ']')
                            .replace(/#/g, '%23')
                            .replace(/\?/g, '%3F')
                            .replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
                        );
                      })
                      .join('')
                );
              })
              .join('')}${a ? '/?' : ''}$`
          ),
    names: e,
    types: t
  };
}
function St(s, e, t, a) {
  const l = {};
  for (let c = 0; c < e.length; c += 1) {
    const u = e[c],
      n = t[c],
      r = s[c + 1] || '';
    if (n) {
      const i = a[n];
      if (!i) throw new Error(`Missing "${n}" param matcher`);
      if (!i(r)) return;
    }
    l[u] = r;
  }
  return l;
}
function Ut(s, e, t) {
  return Object.entries(e).map(([l, [c, u, n]]) => {
    const { pattern: r, names: i, types: d } = Lt(l);
    return {
      id: l,
      exec: (L) => {
        const E = r.exec(L);
        if (E) return St(E, i, d, t);
      },
      a: c.map((L) => s[L]),
      b: u.map((L) => s[L]),
      has_shadow: !!n
    };
  });
}
const Ye = 'sveltekit:scroll',
  B = 'sveltekit:index',
  ye = Ut(ue, wt, gt),
  At = ue[0](),
  Ot = ue[1](),
  Me = {};
let se = {};
try {
  se = JSON.parse(sessionStorage[Ye]);
} catch {}
function ve(s) {
  se[s] = ke();
}
function Pt({ target: s, session: e, base: t, trailing_slash: a }) {
  var xe;
  const l = new Map(),
    c = [],
    u = { url: Be({}), page: Be({}), navigating: fe(null), session: fe(e), updated: $t() },
    n = { id: null, promise: null },
    r = { before_navigate: [], after_navigate: [] };
  let i = { branch: [], error: null, session_id: 0, stuff: Me, url: null },
    d = !1,
    L = !0,
    E = !1,
    Z = 1,
    F = null,
    Re,
    Le,
    Se = !1;
  u.session.subscribe(async (o) => {
    (Le = o), Se && ((Z += 1), he(new URL(location.href), [], !0));
  }),
    (Se = !0);
  let X = !0,
    D = (xe = history.state) == null ? void 0 : xe[B];
  D || ((D = Date.now()), history.replaceState({ ...history.state, [B]: D }, '', location.href));
  const de = se[D];
  de && ((history.scrollRestoration = 'manual'), scrollTo(de.x, de.y));
  let pe = !1,
    _e,
    Ue;
  async function Ae(
    o,
    { noscroll: p = !1, replaceState: w = !1, keepfocus: f = !1, state: _ = {} },
    b
  ) {
    const v = new URL(o, qe(document));
    if (X)
      return ge({
        url: v,
        scroll: p ? ke() : null,
        keepfocus: f,
        redirect_chain: b,
        details: { state: _, replaceState: w },
        accepted: () => {},
        blocked: () => {}
      });
    await te(v);
  }
  async function Oe(o) {
    const p = Te(o);
    if (!p) throw new Error('Attempted to prefetch a URL that does not belong to this app');
    return (n.promise = Ne(p, !1)), (n.id = p.id), n.promise;
  }
  async function he(o, p, w, f, _) {
    var R, S, O;
    const b = Te(o),
      v = (Ue = {});
    let h = b && (await Ne(b, w));
    if (
      (!h &&
        o.origin === location.origin &&
        o.pathname === location.pathname &&
        (h = await ee({
          status: 404,
          error: new Error(`Not found: ${o.pathname}`),
          url: o,
          routeId: null
        })),
      !h)
    )
      return await te(o), !1;
    if (Ue !== v) return !1;
    if (((c.length = 0), h.redirect))
      if (p.length > 10 || p.includes(o.pathname))
        h = await ee({ status: 500, error: new Error('Redirect loop'), url: o, routeId: null });
      else
        return (
          X
            ? Ae(new URL(h.redirect, o).href, {}, [...p, o.pathname])
            : await te(new URL(h.redirect, location.href)),
          !1
        );
    else
      ((S = (R = h.props) == null ? void 0 : R.page) == null ? void 0 : S.status) >= 400 &&
        (await u.updated.check()) &&
        (await te(o));
    if (((E = !0), f && f.details)) {
      const { details: $ } = f,
        y = $.replaceState ? 0 : 1;
      ($.state[B] = D += y), history[$.replaceState ? 'replaceState' : 'pushState']($.state, '', o);
    }
    if (
      (d ? ((i = h.state), h.props.page && (h.props.page.url = o), Re.$set(h.props)) : Pe(h), f)
    ) {
      const { scroll: $, keepfocus: y } = f;
      if (!y) {
        const U = document.body,
          g = U.getAttribute('tabindex');
        (O = getSelection()) == null || O.removeAllRanges(),
          (U.tabIndex = -1),
          U.focus({ preventScroll: !0 }),
          g !== null ? U.setAttribute('tabindex', g) : U.removeAttribute('tabindex');
      }
      if ((await De(), L)) {
        const U = o.hash && document.getElementById(o.hash.slice(1));
        $ ? scrollTo($.x, $.y) : U ? U.scrollIntoView() : scrollTo(0, 0);
      }
    } else await De();
    (n.promise = null), (n.id = null), (L = !0), h.props.page && (_e = h.props.page);
    const m = h.state.branch[h.state.branch.length - 1];
    (X = (m == null ? void 0 : m.module.router) !== !1), _ && _(), (E = !1);
  }
  function Pe(o) {
    i = o.state;
    const p = document.querySelector('style[data-sveltekit]');
    if (
      (p && p.remove(),
      (_e = o.props.page),
      (Re = new mt({ target: s, props: { ...o.props, stores: u }, hydrate: !0 })),
      X)
    ) {
      const w = { from: null, to: new URL(location.href) };
      r.after_navigate.forEach((f) => f(w));
    }
    d = !0;
  }
  async function me({ url: o, params: p, stuff: w, branch: f, status: _, error: b, routeId: v }) {
    var y, U;
    const h = f.filter(Boolean),
      m = h.find((g) => {
        var P;
        return (P = g.loaded) == null ? void 0 : P.redirect;
      }),
      R = {
        redirect: (y = m == null ? void 0 : m.loaded) == null ? void 0 : y.redirect,
        state: { url: o, params: p, branch: f, error: b, stuff: w, session_id: Z },
        props: { components: h.map((g) => g.module.default) }
      };
    for (let g = 0; g < h.length; g += 1) {
      const P = h[g].loaded;
      R.props[`props_${g}`] = P ? await P.props : null;
    }
    if (!i.url || o.href !== i.url.href || i.error !== b || i.stuff !== w) {
      R.props.page = { error: b, params: p, routeId: v, status: _, stuff: w, url: o };
      const g = (P, k) => {
        Object.defineProperty(R.props.page, P, {
          get: () => {
            throw new Error(`$page.${P} has been replaced by $page.url.${k}`);
          }
        });
      };
      g('origin', 'origin'), g('path', 'pathname'), g('query', 'searchParams');
    }
    const O = h[h.length - 1],
      $ = (U = O == null ? void 0 : O.loaded) == null ? void 0 : U.cache;
    if ($) {
      const g = o.pathname + o.search;
      let P = !1;
      const k = () => {
          l.get(g) === R && l.delete(g), N(), clearTimeout(A);
        },
        A = setTimeout(k, $.maxage * 1e3),
        N = u.session.subscribe(() => {
          P && k();
        });
      (P = !0), l.set(g, R);
    }
    return R;
  }
  async function Q({
    status: o,
    error: p,
    module: w,
    url: f,
    params: _,
    stuff: b,
    props: v,
    routeId: h
  }) {
    const m = {
      module: w,
      uses: { params: new Set(), url: !1, session: !1, stuff: !1, dependencies: new Set() },
      loaded: null,
      stuff: b
    };
    function R(y) {
      const { href: U } = new URL(y, f);
      m.uses.dependencies.add(U);
    }
    v && m.uses.dependencies.add(f.href);
    const S = {};
    for (const y in _)
      Object.defineProperty(S, y, {
        get() {
          return m.uses.params.add(y), _[y];
        },
        enumerable: !0
      });
    const O = Le,
      $ = new vt(f);
    if (w.load) {
      const y = {
        routeId: h,
        params: S,
        props: v || {},
        get url() {
          return (m.uses.url = !0), $;
        },
        get session() {
          return (m.uses.session = !0), O;
        },
        get stuff() {
          return (m.uses.stuff = !0), { ...b };
        },
        async fetch(g, P) {
          let k;
          typeof g == 'string'
            ? (k = g)
            : ((k = g.url),
              (P = {
                body: g.method === 'GET' || g.method === 'HEAD' ? void 0 : await g.blob(),
                cache: g.cache,
                credentials: g.credentials,
                headers: g.headers,
                integrity: g.integrity,
                keepalive: g.keepalive,
                method: g.method,
                mode: g.mode,
                redirect: g.redirect,
                referrer: g.referrer,
                referrerPolicy: g.referrerPolicy,
                signal: g.signal,
                ...P
              }));
          const A = new URL(k, f).href;
          return R(A), d ? Ee(A, P) : Et(k, P);
        },
        status: o != null ? o : null,
        error: p != null ? p : null
      };
      let U;
      if (((U = await w.load.call(null, y)), !U))
        throw new Error('load function must return a value');
      (m.loaded = ze(U)),
        m.loaded.stuff && (m.stuff = m.loaded.stuff),
        m.loaded.dependencies && m.loaded.dependencies.forEach(R);
    } else v && (m.loaded = ze({ props: v }));
    return m;
  }
  async function Ne({ id: o, url: p, params: w, route: f }, _) {
    var U, g, P;
    if (n.id === o && n.promise) return n.promise;
    if (!_) {
      const k = l.get(o);
      if (k) return k;
    }
    const { a: b, b: v, has_shadow: h } = f,
      m = i.url && {
        url: o !== i.url.pathname + i.url.search,
        params: Object.keys(w).filter((k) => i.params[k] !== w[k]),
        session: Z !== i.session_id
      };
    let R = [],
      S = Me,
      O = !1,
      $ = 200,
      y = null;
    b.forEach((k) => k().catch(() => {}));
    e: for (let k = 0; k < b.length; k += 1) {
      let A;
      try {
        if (!b[k]) continue;
        const N = await b[k](),
          V = i.branch[k];
        if (
          !V ||
          N !== V.module ||
          (m.url && V.uses.url) ||
          m.params.some((M) => V.uses.params.has(M)) ||
          (m.session && V.uses.session) ||
          Array.from(V.uses.dependencies).some((M) => c.some((le) => le(M))) ||
          (O && V.uses.stuff)
        ) {
          let M = {};
          const le = h && k === b.length - 1;
          if (le) {
            const ne = await Ee(
              `${p.pathname}${p.pathname.endsWith('/') ? '' : '/'}__data.json${p.search}`,
              { headers: { 'x-sveltekit-load': 'true' } }
            );
            if (ne.ok) {
              const Ie = ne.headers.get('x-sveltekit-location');
              if (Ie) return { redirect: Ie, props: {}, state: i };
              M = ne.status === 204 ? {} : await ne.json();
            } else ($ = ne.status), (y = new Error('Failed to load data'));
          }
          if (
            (y ||
              (A = await Q({ module: N, url: p, params: w, props: M, stuff: S, routeId: f.id })),
            A && (le && (A.uses.url = !0), A.loaded))
          ) {
            if (
              (A.loaded.error && (($ = A.loaded.status), (y = A.loaded.error)), A.loaded.redirect)
            )
              return { redirect: A.loaded.redirect, props: {}, state: i };
            A.loaded.stuff && (O = !0);
          }
        } else A = V;
      } catch (N) {
        ($ = 500), (y = Ce(N));
      }
      if (y) {
        for (; k--; )
          if (v[k]) {
            let N,
              V,
              ce = k;
            for (; !(V = R[ce]); ) ce -= 1;
            try {
              if (
                ((N = await Q({
                  status: $,
                  error: y,
                  module: await v[k](),
                  url: p,
                  params: w,
                  stuff: V.stuff,
                  routeId: f.id
                })),
                (U = N == null ? void 0 : N.loaded) != null && U.error)
              )
                continue;
              (g = N == null ? void 0 : N.loaded) != null &&
                g.stuff &&
                (S = { ...S, ...N.loaded.stuff }),
                (R = R.slice(0, ce + 1).concat(N));
              break e;
            } catch {
              continue;
            }
          }
        return await ee({ status: $, error: y, url: p, routeId: f.id });
      } else
        (P = A == null ? void 0 : A.loaded) != null && P.stuff && (S = { ...S, ...A.loaded.stuff }),
          R.push(A);
    }
    return await me({ url: p, params: w, stuff: S, branch: R, status: $, error: y, routeId: f.id });
  }
  async function ee({ status: o, error: p, url: w, routeId: f }) {
    var h, m;
    const _ = {},
      b = await Q({ module: await At, url: w, params: _, stuff: {}, routeId: f }),
      v = await Q({
        status: o,
        error: p,
        module: await Ot,
        url: w,
        params: _,
        stuff: (b && b.loaded && b.loaded.stuff) || {},
        routeId: f
      });
    return await me({
      url: w,
      params: _,
      stuff: {
        ...((h = b == null ? void 0 : b.loaded) == null ? void 0 : h.stuff),
        ...((m = v == null ? void 0 : v.loaded) == null ? void 0 : m.stuff)
      },
      branch: [b, v],
      status: o,
      error: p,
      routeId: f
    });
  }
  function Te(o) {
    if (o.origin !== location.origin || !o.pathname.startsWith(t)) return;
    const p = decodeURI(o.pathname.slice(t.length) || '/');
    for (const w of ye) {
      const f = w.exec(p);
      if (f) return { id: o.pathname + o.search, route: w, params: f, url: o };
    }
  }
  async function ge({
    url: o,
    scroll: p,
    keepfocus: w,
    redirect_chain: f,
    details: _,
    accepted: b,
    blocked: v
  }) {
    const h = i.url;
    let m = !1;
    const R = { from: h, to: o, cancel: () => (m = !0) };
    if ((r.before_navigate.forEach(($) => $(R)), m)) {
      v();
      return;
    }
    const S = yt(o.pathname, a),
      O = new URL(o.origin + S + o.search + o.hash);
    ve(D),
      b(),
      d && u.navigating.set({ from: i.url, to: O }),
      await he(O, f, !1, { scroll: p, keepfocus: w, details: _ }, () => {
        const $ = { from: h, to: O };
        r.after_navigate.forEach((y) => y($)), u.navigating.set(null);
      });
  }
  function te(o) {
    return (location.href = o.href), new Promise(() => {});
  }
  return {
    after_navigate: (o) => {
      $e(
        () => (
          r.after_navigate.push(o),
          () => {
            const p = r.after_navigate.indexOf(o);
            r.after_navigate.splice(p, 1);
          }
        )
      );
    },
    before_navigate: (o) => {
      $e(
        () => (
          r.before_navigate.push(o),
          () => {
            const p = r.before_navigate.indexOf(o);
            r.before_navigate.splice(p, 1);
          }
        )
      );
    },
    disable_scroll_handling: () => {
      (E || !d) && (L = !1);
    },
    goto: (o, p = {}) => Ae(o, p, []),
    invalidate: (o) => {
      if (typeof o == 'function') c.push(o);
      else {
        const { href: p } = new URL(o, location.href);
        c.push((w) => w === p);
      }
      return (
        F ||
          (F = Promise.resolve().then(async () => {
            await he(new URL(location.href), [], !0), (F = null);
          })),
        F
      );
    },
    prefetch: async (o) => {
      const p = new URL(o, qe(document));
      await Oe(p);
    },
    prefetch_routes: async (o) => {
      const w = (o ? ye.filter((f) => o.some((_) => f.exec(_))) : ye).map((f) =>
        Promise.all(f.a.map((_) => _()))
      );
      await Promise.all(w);
    },
    _start_router: () => {
      (history.scrollRestoration = 'manual'),
        addEventListener('beforeunload', (f) => {
          let _ = !1;
          const b = { from: i.url, to: null, cancel: () => (_ = !0) };
          r.before_navigate.forEach((v) => v(b)),
            _ ? (f.preventDefault(), (f.returnValue = '')) : (history.scrollRestoration = 'auto');
        }),
        addEventListener('visibilitychange', () => {
          if (document.visibilityState === 'hidden') {
            ve(D);
            try {
              sessionStorage[Ye] = JSON.stringify(se);
            } catch {}
          }
        });
      const o = (f) => {
        const _ = Je(f);
        _ && _.href && _.hasAttribute('sveltekit:prefetch') && Oe(Ke(_));
      };
      let p;
      const w = (f) => {
        clearTimeout(p),
          (p = setTimeout(() => {
            var _;
            (_ = f.target) == null ||
              _.dispatchEvent(new CustomEvent('sveltekit:trigger_prefetch', { bubbles: !0 }));
          }, 20));
      };
      addEventListener('touchstart', o),
        addEventListener('mousemove', w),
        addEventListener('sveltekit:trigger_prefetch', o),
        addEventListener('click', (f) => {
          if (
            !X ||
            f.button ||
            f.which !== 1 ||
            f.metaKey ||
            f.ctrlKey ||
            f.shiftKey ||
            f.altKey ||
            f.defaultPrevented
          )
            return;
          const _ = Je(f);
          if (!_ || !_.href) return;
          const b = _ instanceof SVGAElement,
            v = Ke(_);
          if (!b && v.origin === 'null') return;
          const h = (_.getAttribute('rel') || '').split(/\s+/);
          if (
            _.hasAttribute('download') ||
            h.includes('external') ||
            _.hasAttribute('sveltekit:reload') ||
            (b ? _.target.baseVal : _.target)
          )
            return;
          const [m, R] = v.href.split('#');
          if (R !== void 0 && m === location.href.split('#')[0]) {
            (pe = !0), ve(D), u.page.set({ ..._e, url: v }), u.page.notify();
            return;
          }
          ge({
            url: v,
            scroll: _.hasAttribute('sveltekit:noscroll') ? ke() : null,
            keepfocus: !1,
            redirect_chain: [],
            details: { state: {}, replaceState: v.href === location.href },
            accepted: () => f.preventDefault(),
            blocked: () => f.preventDefault()
          });
        }),
        addEventListener('popstate', (f) => {
          if (f.state && X) {
            if (f.state[B] === D) return;
            ge({
              url: new URL(location.href),
              scroll: se[f.state[B]],
              keepfocus: !1,
              redirect_chain: [],
              details: null,
              accepted: () => {
                D = f.state[B];
              },
              blocked: () => {
                const _ = D - f.state[B];
                history.go(_);
              }
            });
          }
        }),
        addEventListener('hashchange', () => {
          pe &&
            ((pe = !1), history.replaceState({ ...history.state, [B]: ++D }, '', location.href));
        });
    },
    _hydrate: async ({ status: o, error: p, nodes: w, params: f, routeId: _ }) => {
      const b = new URL(location.href),
        v = [];
      let h = {},
        m,
        R;
      try {
        for (let S = 0; S < w.length; S += 1) {
          const O = S === w.length - 1;
          let $;
          if (O) {
            const U = document.querySelector('script[sveltekit\\:data-type="props"]');
            U && ($ = JSON.parse(U.textContent));
          }
          const y = await Q({
            module: await ue[w[S]](),
            url: b,
            params: f,
            stuff: h,
            status: O ? o : void 0,
            error: O ? p : void 0,
            props: $,
            routeId: _
          });
          if (($ && (y.uses.dependencies.add(b.href), (y.uses.url = !0)), v.push(y), y && y.loaded))
            if (y.loaded.error) {
              if (p) throw y.loaded.error;
              R = { status: y.loaded.status, error: y.loaded.error, url: b, routeId: _ };
            } else y.loaded.stuff && (h = { ...h, ...y.loaded.stuff });
        }
        m = R
          ? await ee(R)
          : await me({ url: b, params: f, stuff: h, branch: v, status: o, error: p, routeId: _ });
      } catch (S) {
        if (p) throw S;
        m = await ee({ status: 500, error: Ce(S), url: b, routeId: _ });
      }
      m.redirect && (await te(new URL(m.redirect, location.href))), Pe(m);
    }
  };
}
async function It({
  paths: s,
  target: e,
  session: t,
  route: a,
  spa: l,
  trailing_slash: c,
  hydrate: u
}) {
  const n = Pt({ target: e, session: t, base: s.base, trailing_slash: c });
  bt({ client: n }),
    at(s),
    u && (await n._hydrate(u)),
    a && (l && n.goto(location.href, { replaceState: !0 }), n._start_router()),
    dispatchEvent(new CustomEvent('sveltekit:start'));
}
export { It as start };
