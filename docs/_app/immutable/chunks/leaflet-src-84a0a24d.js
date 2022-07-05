function Ro(Ft, li) {
  return (
    li.forEach(function (l) {
      l &&
        typeof l != 'string' &&
        !Array.isArray(l) &&
        Object.keys(l).forEach(function (J) {
          if (J !== 'default' && !(J in Ft)) {
            var x = Object.getOwnPropertyDescriptor(l, J);
            Object.defineProperty(
              Ft,
              J,
              x.get
                ? x
                : {
                    enumerable: !0,
                    get: function () {
                      return l[J];
                    }
                  }
            );
          }
        });
    }),
    Object.freeze(Object.defineProperty(Ft, Symbol.toStringTag, { value: 'Module' }))
  );
}
var Do =
    typeof globalThis != 'undefined'
      ? globalThis
      : typeof window != 'undefined'
      ? window
      : typeof global != 'undefined'
      ? global
      : typeof self != 'undefined'
      ? self
      : {},
  ui = { exports: {} };
/* @preserve
 * Leaflet 1.8.0, a JS library for interactive maps. https://leafletjs.com
 * (c) 2010-2022 Vladimir Agafonkin, (c) 2010-2011 CloudMade
 */ (function (Ft, li) {
  (function (l, J) {
    J(li);
  })(Do, function (l) {
    var J = '1.8.0';
    function x(t) {
      var i, e, n, o;
      for (e = 1, n = arguments.length; e < n; e++) {
        o = arguments[e];
        for (i in o) t[i] = o[i];
      }
      return t;
    }
    var Wt =
      Object.create ||
      (function () {
        function t() {}
        return function (i) {
          return (t.prototype = i), new t();
        };
      })();
    function M(t, i) {
      var e = Array.prototype.slice;
      if (t.bind) return t.bind.apply(t, e.call(arguments, 1));
      var n = e.call(arguments, 2);
      return function () {
        return t.apply(i, n.length ? n.concat(e.call(arguments)) : arguments);
      };
    }
    var Xi = 0;
    function P(t) {
      return '_leaflet_id' in t || (t._leaflet_id = ++Xi), t._leaflet_id;
    }
    function Ji(t, i, e) {
      var n, o, s, r;
      return (
        (r = function () {
          (n = !1), o && (s.apply(e, o), (o = !1));
        }),
        (s = function () {
          n ? (o = arguments) : (t.apply(e, arguments), setTimeout(r, i), (n = !0));
        }),
        s
      );
    }
    function bt(t, i, e) {
      var n = i[1],
        o = i[0],
        s = n - o;
      return t === n && e ? t : ((((t - o) % s) + s) % s) + o;
    }
    function Z() {
      return !1;
    }
    function V(t, i) {
      if (i === !1) return t;
      var e = Math.pow(10, i === void 0 ? 6 : i);
      return Math.round(t * e) / e;
    }
    function ci(t) {
      return t.trim ? t.trim() : t.replace(/^\s+|\s+$/g, '');
    }
    function mt(t) {
      return ci(t).split(/\s+/);
    }
    function C(t, i) {
      Object.prototype.hasOwnProperty.call(t, 'options') ||
        (t.options = t.options ? Wt(t.options) : {});
      for (var e in i) t.options[e] = i[e];
      return t.options;
    }
    function $i(t, i, e) {
      var n = [];
      for (var o in t)
        n.push(encodeURIComponent(e ? o.toUpperCase() : o) + '=' + encodeURIComponent(t[o]));
      return (!i || i.indexOf('?') === -1 ? '?' : '&') + n.join('&');
    }
    var fn = /\{ *([\w_ -]+) *\}/g;
    function Qi(t, i) {
      return t.replace(fn, function (e, n) {
        var o = i[n];
        if (o === void 0) throw new Error('No value provided for variable ' + e);
        return typeof o == 'function' && (o = o(i)), o;
      });
    }
    var q =
      Array.isArray ||
      function (t) {
        return Object.prototype.toString.call(t) === '[object Array]';
      };
    function fi(t, i) {
      for (var e = 0; e < t.length; e++) if (t[e] === i) return e;
      return -1;
    }
    var Ut = 'data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=';
    function di(t) {
      return window['webkit' + t] || window['moz' + t] || window['ms' + t];
    }
    var te = 0;
    function ie(t) {
      var i = +new Date(),
        e = Math.max(0, 16 - (i - te));
      return (te = i + e), window.setTimeout(t, e);
    }
    var _i = window.requestAnimationFrame || di('RequestAnimationFrame') || ie,
      ee =
        window.cancelAnimationFrame ||
        di('CancelAnimationFrame') ||
        di('CancelRequestAnimationFrame') ||
        function (t) {
          window.clearTimeout(t);
        };
    function N(t, i, e) {
      if (e && _i === ie) t.call(i);
      else return _i.call(window, M(t, i));
    }
    function H(t) {
      t && ee.call(window, t);
    }
    var dn = {
      __proto__: null,
      extend: x,
      create: Wt,
      bind: M,
      get lastId() {
        return Xi;
      },
      stamp: P,
      throttle: Ji,
      wrapNum: bt,
      falseFn: Z,
      formatNum: V,
      trim: ci,
      splitWords: mt,
      setOptions: C,
      getParamString: $i,
      template: Qi,
      isArray: q,
      indexOf: fi,
      emptyImageUrl: Ut,
      requestFn: _i,
      cancelFn: ee,
      requestAnimFrame: N,
      cancelAnimFrame: H
    };
    function $() {}
    ($.extend = function (t) {
      var i = function () {
          C(this), this.initialize && this.initialize.apply(this, arguments), this.callInitHooks();
        },
        e = (i.__super__ = this.prototype),
        n = Wt(e);
      (n.constructor = i), (i.prototype = n);
      for (var o in this)
        Object.prototype.hasOwnProperty.call(this, o) &&
          o !== 'prototype' &&
          o !== '__super__' &&
          (i[o] = this[o]);
      return (
        t.statics && x(i, t.statics),
        t.includes && (_n(t.includes), x.apply(null, [n].concat(t.includes))),
        x(n, t),
        delete n.statics,
        delete n.includes,
        n.options && ((n.options = e.options ? Wt(e.options) : {}), x(n.options, t.options)),
        (n._initHooks = []),
        (n.callInitHooks = function () {
          if (!this._initHooksCalled) {
            e.callInitHooks && e.callInitHooks.call(this), (this._initHooksCalled = !0);
            for (var s = 0, r = n._initHooks.length; s < r; s++) n._initHooks[s].call(this);
          }
        }),
        i
      );
    }),
      ($.include = function (t) {
        var i = this.prototype.options;
        return (
          x(this.prototype, t),
          t.options && ((this.prototype.options = i), this.mergeOptions(t.options)),
          this
        );
      }),
      ($.mergeOptions = function (t) {
        return x(this.prototype.options, t), this;
      }),
      ($.addInitHook = function (t) {
        var i = Array.prototype.slice.call(arguments, 1),
          e =
            typeof t == 'function'
              ? t
              : function () {
                  this[t].apply(this, i);
                };
        return (
          (this.prototype._initHooks = this.prototype._initHooks || []),
          this.prototype._initHooks.push(e),
          this
        );
      });
    function _n(t) {
      if (!(typeof L == 'undefined' || !L || !L.Mixin)) {
        t = q(t) ? t : [t];
        for (var i = 0; i < t.length; i++)
          t[i] === L.Mixin.Events &&
            console.warn(
              'Deprecated include of L.Mixin.Events: this property will be removed in future releases, please inherit from L.Evented instead.',
              new Error().stack
            );
      }
    }
    var D = {
      on: function (t, i, e) {
        if (typeof t == 'object') for (var n in t) this._on(n, t[n], i);
        else {
          t = mt(t);
          for (var o = 0, s = t.length; o < s; o++) this._on(t[o], i, e);
        }
        return this;
      },
      off: function (t, i, e) {
        if (!arguments.length) delete this._events;
        else if (typeof t == 'object') for (var n in t) this._off(n, t[n], i);
        else {
          t = mt(t);
          for (var o = arguments.length === 1, s = 0, r = t.length; s < r; s++)
            o ? this._off(t[s]) : this._off(t[s], i, e);
        }
        return this;
      },
      _on: function (t, i, e) {
        if (typeof i != 'function') {
          console.warn('wrong listener type: ' + typeof i);
          return;
        }
        this._events = this._events || {};
        var n = this._events[t];
        n || ((n = []), (this._events[t] = n)), e === this && (e = void 0);
        for (var o = { fn: i, ctx: e }, s = n, r = 0, a = s.length; r < a; r++)
          if (s[r].fn === i && s[r].ctx === e) return;
        s.push(o);
      },
      _off: function (t, i, e) {
        var n, o, s;
        if (!!this._events && ((n = this._events[t]), !!n)) {
          if (arguments.length === 1) {
            if (this._firingCount) for (o = 0, s = n.length; o < s; o++) n[o].fn = Z;
            delete this._events[t];
            return;
          }
          if ((e === this && (e = void 0), typeof i != 'function')) {
            console.warn('wrong listener type: ' + typeof i);
            return;
          }
          for (o = 0, s = n.length; o < s; o++) {
            var r = n[o];
            if (r.ctx === e && r.fn === i) {
              this._firingCount && ((r.fn = Z), (this._events[t] = n = n.slice())), n.splice(o, 1);
              return;
            }
          }
          console.warn('listener not found');
        }
      },
      fire: function (t, i, e) {
        if (!this.listens(t, e)) return this;
        var n = x({}, i, { type: t, target: this, sourceTarget: (i && i.sourceTarget) || this });
        if (this._events) {
          var o = this._events[t];
          if (o) {
            this._firingCount = this._firingCount + 1 || 1;
            for (var s = 0, r = o.length; s < r; s++) {
              var a = o[s];
              a.fn.call(a.ctx || this, n);
            }
            this._firingCount--;
          }
        }
        return e && this._propagateEvent(n), this;
      },
      listens: function (t, i) {
        typeof t != 'string' && console.warn('"string" type argument expected');
        var e = this._events && this._events[t];
        if (e && e.length) return !0;
        if (i) {
          for (var n in this._eventParents) if (this._eventParents[n].listens(t, i)) return !0;
        }
        return !1;
      },
      once: function (t, i, e) {
        if (typeof t == 'object') {
          for (var n in t) this.once(n, t[n], i);
          return this;
        }
        var o = M(function () {
          this.off(t, i, e).off(t, o, e);
        }, this);
        return this.on(t, i, e).on(t, o, e);
      },
      addEventParent: function (t) {
        return (
          (this._eventParents = this._eventParents || {}), (this._eventParents[P(t)] = t), this
        );
      },
      removeEventParent: function (t) {
        return this._eventParents && delete this._eventParents[P(t)], this;
      },
      _propagateEvent: function (t) {
        for (var i in this._eventParents)
          this._eventParents[i].fire(
            t.type,
            x({ layer: t.target, propagatedFrom: t.target }, t),
            !0
          );
      }
    };
    (D.addEventListener = D.on),
      (D.removeEventListener = D.clearAllEventListeners = D.off),
      (D.addOneTimeEventListener = D.once),
      (D.fireEvent = D.fire),
      (D.hasEventListeners = D.listens);
    var Mt = $.extend(D);
    function d(t, i, e) {
      (this.x = e ? Math.round(t) : t), (this.y = e ? Math.round(i) : i);
    }
    var ne =
      Math.trunc ||
      function (t) {
        return t > 0 ? Math.floor(t) : Math.ceil(t);
      };
    d.prototype = {
      clone: function () {
        return new d(this.x, this.y);
      },
      add: function (t) {
        return this.clone()._add(g(t));
      },
      _add: function (t) {
        return (this.x += t.x), (this.y += t.y), this;
      },
      subtract: function (t) {
        return this.clone()._subtract(g(t));
      },
      _subtract: function (t) {
        return (this.x -= t.x), (this.y -= t.y), this;
      },
      divideBy: function (t) {
        return this.clone()._divideBy(t);
      },
      _divideBy: function (t) {
        return (this.x /= t), (this.y /= t), this;
      },
      multiplyBy: function (t) {
        return this.clone()._multiplyBy(t);
      },
      _multiplyBy: function (t) {
        return (this.x *= t), (this.y *= t), this;
      },
      scaleBy: function (t) {
        return new d(this.x * t.x, this.y * t.y);
      },
      unscaleBy: function (t) {
        return new d(this.x / t.x, this.y / t.y);
      },
      round: function () {
        return this.clone()._round();
      },
      _round: function () {
        return (this.x = Math.round(this.x)), (this.y = Math.round(this.y)), this;
      },
      floor: function () {
        return this.clone()._floor();
      },
      _floor: function () {
        return (this.x = Math.floor(this.x)), (this.y = Math.floor(this.y)), this;
      },
      ceil: function () {
        return this.clone()._ceil();
      },
      _ceil: function () {
        return (this.x = Math.ceil(this.x)), (this.y = Math.ceil(this.y)), this;
      },
      trunc: function () {
        return this.clone()._trunc();
      },
      _trunc: function () {
        return (this.x = ne(this.x)), (this.y = ne(this.y)), this;
      },
      distanceTo: function (t) {
        t = g(t);
        var i = t.x - this.x,
          e = t.y - this.y;
        return Math.sqrt(i * i + e * e);
      },
      equals: function (t) {
        return (t = g(t)), t.x === this.x && t.y === this.y;
      },
      contains: function (t) {
        return (t = g(t)), Math.abs(t.x) <= Math.abs(this.x) && Math.abs(t.y) <= Math.abs(this.y);
      },
      toString: function () {
        return 'Point(' + V(this.x) + ', ' + V(this.y) + ')';
      }
    };
    function g(t, i, e) {
      return t instanceof d
        ? t
        : q(t)
        ? new d(t[0], t[1])
        : t == null
        ? t
        : typeof t == 'object' && 'x' in t && 'y' in t
        ? new d(t.x, t.y)
        : new d(t, i, e);
    }
    function z(t, i) {
      if (!!t) for (var e = i ? [t, i] : t, n = 0, o = e.length; n < o; n++) this.extend(e[n]);
    }
    z.prototype = {
      extend: function (t) {
        return (
          (t = g(t)),
          !this.min && !this.max
            ? ((this.min = t.clone()), (this.max = t.clone()))
            : ((this.min.x = Math.min(t.x, this.min.x)),
              (this.max.x = Math.max(t.x, this.max.x)),
              (this.min.y = Math.min(t.y, this.min.y)),
              (this.max.y = Math.max(t.y, this.max.y))),
          this
        );
      },
      getCenter: function (t) {
        return new d((this.min.x + this.max.x) / 2, (this.min.y + this.max.y) / 2, t);
      },
      getBottomLeft: function () {
        return new d(this.min.x, this.max.y);
      },
      getTopRight: function () {
        return new d(this.max.x, this.min.y);
      },
      getTopLeft: function () {
        return this.min;
      },
      getBottomRight: function () {
        return this.max;
      },
      getSize: function () {
        return this.max.subtract(this.min);
      },
      contains: function (t) {
        var i, e;
        return (
          typeof t[0] == 'number' || t instanceof d ? (t = g(t)) : (t = W(t)),
          t instanceof z ? ((i = t.min), (e = t.max)) : (i = e = t),
          i.x >= this.min.x && e.x <= this.max.x && i.y >= this.min.y && e.y <= this.max.y
        );
      },
      intersects: function (t) {
        t = W(t);
        var i = this.min,
          e = this.max,
          n = t.min,
          o = t.max,
          s = o.x >= i.x && n.x <= e.x,
          r = o.y >= i.y && n.y <= e.y;
        return s && r;
      },
      overlaps: function (t) {
        t = W(t);
        var i = this.min,
          e = this.max,
          n = t.min,
          o = t.max,
          s = o.x > i.x && n.x < e.x,
          r = o.y > i.y && n.y < e.y;
        return s && r;
      },
      isValid: function () {
        return !!(this.min && this.max);
      }
    };
    function W(t, i) {
      return !t || t instanceof z ? t : new z(t, i);
    }
    function R(t, i) {
      if (!!t) for (var e = i ? [t, i] : t, n = 0, o = e.length; n < o; n++) this.extend(e[n]);
    }
    R.prototype = {
      extend: function (t) {
        var i = this._southWest,
          e = this._northEast,
          n,
          o;
        if (t instanceof T) (n = t), (o = t);
        else if (t instanceof R) {
          if (((n = t._southWest), (o = t._northEast), !n || !o)) return this;
        } else return t ? this.extend(S(t) || A(t)) : this;
        return (
          !i && !e
            ? ((this._southWest = new T(n.lat, n.lng)), (this._northEast = new T(o.lat, o.lng)))
            : ((i.lat = Math.min(n.lat, i.lat)),
              (i.lng = Math.min(n.lng, i.lng)),
              (e.lat = Math.max(o.lat, e.lat)),
              (e.lng = Math.max(o.lng, e.lng))),
          this
        );
      },
      pad: function (t) {
        var i = this._southWest,
          e = this._northEast,
          n = Math.abs(i.lat - e.lat) * t,
          o = Math.abs(i.lng - e.lng) * t;
        return new R(new T(i.lat - n, i.lng - o), new T(e.lat + n, e.lng + o));
      },
      getCenter: function () {
        return new T(
          (this._southWest.lat + this._northEast.lat) / 2,
          (this._southWest.lng + this._northEast.lng) / 2
        );
      },
      getSouthWest: function () {
        return this._southWest;
      },
      getNorthEast: function () {
        return this._northEast;
      },
      getNorthWest: function () {
        return new T(this.getNorth(), this.getWest());
      },
      getSouthEast: function () {
        return new T(this.getSouth(), this.getEast());
      },
      getWest: function () {
        return this._southWest.lng;
      },
      getSouth: function () {
        return this._southWest.lat;
      },
      getEast: function () {
        return this._northEast.lng;
      },
      getNorth: function () {
        return this._northEast.lat;
      },
      contains: function (t) {
        typeof t[0] == 'number' || t instanceof T || 'lat' in t ? (t = S(t)) : (t = A(t));
        var i = this._southWest,
          e = this._northEast,
          n,
          o;
        return (
          t instanceof R ? ((n = t.getSouthWest()), (o = t.getNorthEast())) : (n = o = t),
          n.lat >= i.lat && o.lat <= e.lat && n.lng >= i.lng && o.lng <= e.lng
        );
      },
      intersects: function (t) {
        t = A(t);
        var i = this._southWest,
          e = this._northEast,
          n = t.getSouthWest(),
          o = t.getNorthEast(),
          s = o.lat >= i.lat && n.lat <= e.lat,
          r = o.lng >= i.lng && n.lng <= e.lng;
        return s && r;
      },
      overlaps: function (t) {
        t = A(t);
        var i = this._southWest,
          e = this._northEast,
          n = t.getSouthWest(),
          o = t.getNorthEast(),
          s = o.lat > i.lat && n.lat < e.lat,
          r = o.lng > i.lng && n.lng < e.lng;
        return s && r;
      },
      toBBoxString: function () {
        return [this.getWest(), this.getSouth(), this.getEast(), this.getNorth()].join(',');
      },
      equals: function (t, i) {
        return t
          ? ((t = A(t)),
            this._southWest.equals(t.getSouthWest(), i) &&
              this._northEast.equals(t.getNorthEast(), i))
          : !1;
      },
      isValid: function () {
        return !!(this._southWest && this._northEast);
      }
    };
    function A(t, i) {
      return t instanceof R ? t : new R(t, i);
    }
    function T(t, i, e) {
      if (isNaN(t) || isNaN(i)) throw new Error('Invalid LatLng object: (' + t + ', ' + i + ')');
      (this.lat = +t), (this.lng = +i), e !== void 0 && (this.alt = +e);
    }
    T.prototype = {
      equals: function (t, i) {
        if (!t) return !1;
        t = S(t);
        var e = Math.max(Math.abs(this.lat - t.lat), Math.abs(this.lng - t.lng));
        return e <= (i === void 0 ? 1e-9 : i);
      },
      toString: function (t) {
        return 'LatLng(' + V(this.lat, t) + ', ' + V(this.lng, t) + ')';
      },
      distanceTo: function (t) {
        return st.distance(this, S(t));
      },
      wrap: function () {
        return st.wrapLatLng(this);
      },
      toBounds: function (t) {
        var i = (180 * t) / 40075017,
          e = i / Math.cos((Math.PI / 180) * this.lat);
        return A([this.lat - i, this.lng - e], [this.lat + i, this.lng + e]);
      },
      clone: function () {
        return new T(this.lat, this.lng, this.alt);
      }
    };
    function S(t, i, e) {
      return t instanceof T
        ? t
        : q(t) && typeof t[0] != 'object'
        ? t.length === 3
          ? new T(t[0], t[1], t[2])
          : t.length === 2
          ? new T(t[0], t[1])
          : null
        : t == null
        ? t
        : typeof t == 'object' && 'lat' in t
        ? new T(t.lat, 'lng' in t ? t.lng : t.lon, t.alt)
        : i === void 0
        ? null
        : new T(t, i, e);
    }
    var Q = {
        latLngToPoint: function (t, i) {
          var e = this.projection.project(t),
            n = this.scale(i);
          return this.transformation._transform(e, n);
        },
        pointToLatLng: function (t, i) {
          var e = this.scale(i),
            n = this.transformation.untransform(t, e);
          return this.projection.unproject(n);
        },
        project: function (t) {
          return this.projection.project(t);
        },
        unproject: function (t) {
          return this.projection.unproject(t);
        },
        scale: function (t) {
          return 256 * Math.pow(2, t);
        },
        zoom: function (t) {
          return Math.log(t / 256) / Math.LN2;
        },
        getProjectedBounds: function (t) {
          if (this.infinite) return null;
          var i = this.projection.bounds,
            e = this.scale(t),
            n = this.transformation.transform(i.min, e),
            o = this.transformation.transform(i.max, e);
          return new z(n, o);
        },
        infinite: !1,
        wrapLatLng: function (t) {
          var i = this.wrapLng ? bt(t.lng, this.wrapLng, !0) : t.lng,
            e = this.wrapLat ? bt(t.lat, this.wrapLat, !0) : t.lat,
            n = t.alt;
          return new T(e, i, n);
        },
        wrapLatLngBounds: function (t) {
          var i = t.getCenter(),
            e = this.wrapLatLng(i),
            n = i.lat - e.lat,
            o = i.lng - e.lng;
          if (n === 0 && o === 0) return t;
          var s = t.getSouthWest(),
            r = t.getNorthEast(),
            a = new T(s.lat - n, s.lng - o),
            h = new T(r.lat - n, r.lng - o);
          return new R(a, h);
        }
      },
      st = x({}, Q, {
        wrapLng: [-180, 180],
        R: 6371e3,
        distance: function (t, i) {
          var e = Math.PI / 180,
            n = t.lat * e,
            o = i.lat * e,
            s = Math.sin(((i.lat - t.lat) * e) / 2),
            r = Math.sin(((i.lng - t.lng) * e) / 2),
            a = s * s + Math.cos(n) * Math.cos(o) * r * r,
            h = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
          return this.R * h;
        }
      }),
      oe = 6378137,
      mi = {
        R: oe,
        MAX_LATITUDE: 85.0511287798,
        project: function (t) {
          var i = Math.PI / 180,
            e = this.MAX_LATITUDE,
            n = Math.max(Math.min(e, t.lat), -e),
            o = Math.sin(n * i);
          return new d(this.R * t.lng * i, (this.R * Math.log((1 + o) / (1 - o))) / 2);
        },
        unproject: function (t) {
          var i = 180 / Math.PI;
          return new T(
            (2 * Math.atan(Math.exp(t.y / this.R)) - Math.PI / 2) * i,
            (t.x * i) / this.R
          );
        },
        bounds: (function () {
          var t = oe * Math.PI;
          return new z([-t, -t], [t, t]);
        })()
      };
    function pi(t, i, e, n) {
      if (q(t)) {
        (this._a = t[0]), (this._b = t[1]), (this._c = t[2]), (this._d = t[3]);
        return;
      }
      (this._a = t), (this._b = i), (this._c = e), (this._d = n);
    }
    pi.prototype = {
      transform: function (t, i) {
        return this._transform(t.clone(), i);
      },
      _transform: function (t, i) {
        return (
          (i = i || 1),
          (t.x = i * (this._a * t.x + this._b)),
          (t.y = i * (this._c * t.y + this._d)),
          t
        );
      },
      untransform: function (t, i) {
        return (i = i || 1), new d((t.x / i - this._b) / this._a, (t.y / i - this._d) / this._c);
      }
    };
    function Ct(t, i, e, n) {
      return new pi(t, i, e, n);
    }
    var gi = x({}, st, {
        code: 'EPSG:3857',
        projection: mi,
        transformation: (function () {
          var t = 0.5 / (Math.PI * mi.R);
          return Ct(t, 0.5, -t, 0.5);
        })()
      }),
      mn = x({}, gi, { code: 'EPSG:900913' });
    function se(t) {
      return document.createElementNS('http://www.w3.org/2000/svg', t);
    }
    function re(t, i) {
      var e = '',
        n,
        o,
        s,
        r,
        a,
        h;
      for (n = 0, s = t.length; n < s; n++) {
        for (a = t[n], o = 0, r = a.length; o < r; o++)
          (h = a[o]), (e += (o ? 'L' : 'M') + h.x + ' ' + h.y);
        e += i ? (f.svg ? 'z' : 'x') : '';
      }
      return e || 'M0 0';
    }
    var vi = document.documentElement.style,
      Gt = 'ActiveXObject' in window,
      pn = Gt && !document.addEventListener,
      ae = 'msLaunchUri' in navigator && !('documentMode' in document),
      yi = j('webkit'),
      he = j('android'),
      ue = j('android 2') || j('android 3'),
      gn = parseInt(/WebKit\/([0-9]+)|$/.exec(navigator.userAgent)[1], 10),
      vn = he && j('Google') && gn < 537 && !('AudioNode' in window),
      wi = !!window.opera,
      le = !ae && j('chrome'),
      ce = j('gecko') && !yi && !wi && !Gt,
      yn = !le && j('safari'),
      fe = j('phantom'),
      de = 'OTransition' in vi,
      wn = navigator.platform.indexOf('Win') === 0,
      _e = Gt && 'transition' in vi,
      Pi = 'WebKitCSSMatrix' in window && 'm11' in new window.WebKitCSSMatrix() && !ue,
      me = 'MozPerspective' in vi,
      Pn = !window.L_DISABLE_3D && (_e || Pi || me) && !de && !fe,
      zt = typeof orientation != 'undefined' || j('mobile'),
      xn = zt && yi,
      Ln = zt && Pi,
      pe = !window.PointerEvent && window.MSPointerEvent,
      ge = !!(window.PointerEvent || pe),
      ve = 'ontouchstart' in window || !!window.TouchEvent,
      Tn = !window.L_NO_TOUCH && (ve || ge),
      bn = zt && wi,
      Mn = zt && ce,
      Cn = (window.devicePixelRatio || window.screen.deviceXDPI / window.screen.logicalXDPI) > 1,
      zn = (function () {
        var t = !1;
        try {
          var i = Object.defineProperty({}, 'passive', {
            get: function () {
              t = !0;
            }
          });
          window.addEventListener('testPassiveEventSupport', Z, i),
            window.removeEventListener('testPassiveEventSupport', Z, i);
        } catch {}
        return t;
      })(),
      Sn = (function () {
        return !!document.createElement('canvas').getContext;
      })(),
      xi = !!(document.createElementNS && se('svg').createSVGRect),
      kn =
        !!xi &&
        (function () {
          var t = document.createElement('div');
          return (
            (t.innerHTML = '<svg/>'),
            (t.firstChild && t.firstChild.namespaceURI) === 'http://www.w3.org/2000/svg'
          );
        })(),
      En =
        !xi &&
        (function () {
          try {
            var t = document.createElement('div');
            t.innerHTML = '<v:shape adj="1"/>';
            var i = t.firstChild;
            return (i.style.behavior = 'url(#default#VML)'), i && typeof i.adj == 'object';
          } catch {
            return !1;
          }
        })();
    function j(t) {
      return navigator.userAgent.toLowerCase().indexOf(t) >= 0;
    }
    var f = {
        ie: Gt,
        ielt9: pn,
        edge: ae,
        webkit: yi,
        android: he,
        android23: ue,
        androidStock: vn,
        opera: wi,
        chrome: le,
        gecko: ce,
        safari: yn,
        phantom: fe,
        opera12: de,
        win: wn,
        ie3d: _e,
        webkit3d: Pi,
        gecko3d: me,
        any3d: Pn,
        mobile: zt,
        mobileWebkit: xn,
        mobileWebkit3d: Ln,
        msPointer: pe,
        pointer: ge,
        touch: Tn,
        touchNative: ve,
        mobileOpera: bn,
        mobileGecko: Mn,
        retina: Cn,
        passiveEvents: zn,
        canvas: Sn,
        svg: xi,
        vml: En,
        inlineSvg: kn
      },
      ye = f.msPointer ? 'MSPointerDown' : 'pointerdown',
      we = f.msPointer ? 'MSPointerMove' : 'pointermove',
      Pe = f.msPointer ? 'MSPointerUp' : 'pointerup',
      xe = f.msPointer ? 'MSPointerCancel' : 'pointercancel',
      Li = { touchstart: ye, touchmove: we, touchend: Pe, touchcancel: xe },
      Le = { touchstart: Nn, touchmove: Vt, touchend: Vt, touchcancel: Vt },
      pt = {},
      Te = !1;
    function Zn(t, i, e) {
      return (
        i === 'touchstart' && Bn(),
        Le[i]
          ? ((e = Le[i].bind(this, e)), t.addEventListener(Li[i], e, !1), e)
          : (console.warn('wrong event specified:', i), L.Util.falseFn)
      );
    }
    function On(t, i, e) {
      if (!Li[i]) {
        console.warn('wrong event specified:', i);
        return;
      }
      t.removeEventListener(Li[i], e, !1);
    }
    function In(t) {
      pt[t.pointerId] = t;
    }
    function An(t) {
      pt[t.pointerId] && (pt[t.pointerId] = t);
    }
    function be(t) {
      delete pt[t.pointerId];
    }
    function Bn() {
      Te ||
        (document.addEventListener(ye, In, !0),
        document.addEventListener(we, An, !0),
        document.addEventListener(Pe, be, !0),
        document.addEventListener(xe, be, !0),
        (Te = !0));
    }
    function Vt(t, i) {
      if (i.pointerType !== (i.MSPOINTER_TYPE_MOUSE || 'mouse')) {
        i.touches = [];
        for (var e in pt) i.touches.push(pt[e]);
        (i.changedTouches = [i]), t(i);
      }
    }
    function Nn(t, i) {
      i.MSPOINTER_TYPE_TOUCH && i.pointerType === i.MSPOINTER_TYPE_TOUCH && B(i), Vt(t, i);
    }
    function Rn(t) {
      var i = {},
        e,
        n;
      for (n in t) (e = t[n]), (i[n] = e && e.bind ? e.bind(t) : e);
      return (
        (t = i), (i.type = 'dblclick'), (i.detail = 2), (i.isTrusted = !1), (i._simulated = !0), i
      );
    }
    var Dn = 200;
    function Hn(t, i) {
      t.addEventListener('dblclick', i);
      var e = 0,
        n;
      function o(s) {
        if (s.detail !== 1) {
          n = s.detail;
          return;
        }
        if (
          !(
            s.pointerType === 'mouse' ||
            (s.sourceCapabilities && !s.sourceCapabilities.firesTouchEvents)
          )
        ) {
          var r = Date.now();
          r - e <= Dn ? (n++, n === 2 && i(Rn(s))) : (n = 1), (e = r);
        }
      }
      return t.addEventListener('click', o), { dblclick: i, simDblclick: o };
    }
    function Fn(t, i) {
      t.removeEventListener('dblclick', i.dblclick), t.removeEventListener('click', i.simDblclick);
    }
    var Ti = Kt(['transform', 'webkitTransform', 'OTransform', 'MozTransform', 'msTransform']),
      St = Kt(['webkitTransition', 'transition', 'OTransition', 'MozTransition', 'msTransition']),
      Me = St === 'webkitTransition' || St === 'OTransition' ? St + 'End' : 'transitionend';
    function Ce(t) {
      return typeof t == 'string' ? document.getElementById(t) : t;
    }
    function kt(t, i) {
      var e = t.style[i] || (t.currentStyle && t.currentStyle[i]);
      if ((!e || e === 'auto') && document.defaultView) {
        var n = document.defaultView.getComputedStyle(t, null);
        e = n ? n[i] : null;
      }
      return e === 'auto' ? null : e;
    }
    function w(t, i, e) {
      var n = document.createElement(t);
      return (n.className = i || ''), e && e.appendChild(n), n;
    }
    function k(t) {
      var i = t.parentNode;
      i && i.removeChild(t);
    }
    function qt(t) {
      for (; t.firstChild; ) t.removeChild(t.firstChild);
    }
    function gt(t) {
      var i = t.parentNode;
      i && i.lastChild !== t && i.appendChild(t);
    }
    function vt(t) {
      var i = t.parentNode;
      i && i.firstChild !== t && i.insertBefore(t, i.firstChild);
    }
    function bi(t, i) {
      if (t.classList !== void 0) return t.classList.contains(i);
      var e = jt(t);
      return e.length > 0 && new RegExp('(^|\\s)' + i + '(\\s|$)').test(e);
    }
    function m(t, i) {
      if (t.classList !== void 0)
        for (var e = mt(i), n = 0, o = e.length; n < o; n++) t.classList.add(e[n]);
      else if (!bi(t, i)) {
        var s = jt(t);
        Mi(t, (s ? s + ' ' : '') + i);
      }
    }
    function E(t, i) {
      t.classList !== void 0
        ? t.classList.remove(i)
        : Mi(t, ci((' ' + jt(t) + ' ').replace(' ' + i + ' ', ' ')));
    }
    function Mi(t, i) {
      t.className.baseVal === void 0 ? (t.className = i) : (t.className.baseVal = i);
    }
    function jt(t) {
      return (
        t.correspondingElement && (t = t.correspondingElement),
        t.className.baseVal === void 0 ? t.className : t.className.baseVal
      );
    }
    function F(t, i) {
      'opacity' in t.style ? (t.style.opacity = i) : 'filter' in t.style && Wn(t, i);
    }
    function Wn(t, i) {
      var e = !1,
        n = 'DXImageTransform.Microsoft.Alpha';
      try {
        e = t.filters.item(n);
      } catch {
        if (i === 1) return;
      }
      (i = Math.round(i * 100)),
        e
          ? ((e.Enabled = i !== 100), (e.Opacity = i))
          : (t.style.filter += ' progid:' + n + '(opacity=' + i + ')');
    }
    function Kt(t) {
      for (var i = document.documentElement.style, e = 0; e < t.length; e++)
        if (t[e] in i) return t[e];
      return !1;
    }
    function ut(t, i, e) {
      var n = i || new d(0, 0);
      t.style[Ti] =
        (f.ie3d
          ? 'translate(' + n.x + 'px,' + n.y + 'px)'
          : 'translate3d(' + n.x + 'px,' + n.y + 'px,0)') + (e ? ' scale(' + e + ')' : '');
    }
    function O(t, i) {
      (t._leaflet_pos = i),
        f.any3d ? ut(t, i) : ((t.style.left = i.x + 'px'), (t.style.top = i.y + 'px'));
    }
    function lt(t) {
      return t._leaflet_pos || new d(0, 0);
    }
    var Et, Zt, Ci;
    if ('onselectstart' in document)
      (Et = function () {
        _(window, 'selectstart', B);
      }),
        (Zt = function () {
          b(window, 'selectstart', B);
        });
    else {
      var Ot = Kt([
        'userSelect',
        'WebkitUserSelect',
        'OUserSelect',
        'MozUserSelect',
        'msUserSelect'
      ]);
      (Et = function () {
        if (Ot) {
          var t = document.documentElement.style;
          (Ci = t[Ot]), (t[Ot] = 'none');
        }
      }),
        (Zt = function () {
          Ot && ((document.documentElement.style[Ot] = Ci), (Ci = void 0));
        });
    }
    function zi() {
      _(window, 'dragstart', B);
    }
    function Si() {
      b(window, 'dragstart', B);
    }
    var Yt, ki;
    function Ei(t) {
      for (; t.tabIndex === -1; ) t = t.parentNode;
      !t.style ||
        (Xt(),
        (Yt = t),
        (ki = t.style.outline),
        (t.style.outline = 'none'),
        _(window, 'keydown', Xt));
    }
    function Xt() {
      !Yt || ((Yt.style.outline = ki), (Yt = void 0), (ki = void 0), b(window, 'keydown', Xt));
    }
    function ze(t) {
      do t = t.parentNode;
      while ((!t.offsetWidth || !t.offsetHeight) && t !== document.body);
      return t;
    }
    function Zi(t) {
      var i = t.getBoundingClientRect();
      return {
        x: i.width / t.offsetWidth || 1,
        y: i.height / t.offsetHeight || 1,
        boundingClientRect: i
      };
    }
    var Un = {
      __proto__: null,
      TRANSFORM: Ti,
      TRANSITION: St,
      TRANSITION_END: Me,
      get: Ce,
      getStyle: kt,
      create: w,
      remove: k,
      empty: qt,
      toFront: gt,
      toBack: vt,
      hasClass: bi,
      addClass: m,
      removeClass: E,
      setClass: Mi,
      getClass: jt,
      setOpacity: F,
      testProp: Kt,
      setTransform: ut,
      setPosition: O,
      getPosition: lt,
      get disableTextSelection() {
        return Et;
      },
      get enableTextSelection() {
        return Zt;
      },
      disableImageDrag: zi,
      enableImageDrag: Si,
      preventOutline: Ei,
      restoreOutline: Xt,
      getSizedParentNode: ze,
      getScale: Zi
    };
    function _(t, i, e, n) {
      if (i && typeof i == 'object') for (var o in i) Ii(t, o, i[o], e);
      else {
        i = mt(i);
        for (var s = 0, r = i.length; s < r; s++) Ii(t, i[s], e, n);
      }
      return this;
    }
    var K = '_leaflet_events';
    function b(t, i, e, n) {
      if (arguments.length === 1) Se(t), delete t[K];
      else if (i && typeof i == 'object') for (var o in i) Ai(t, o, i[o], e);
      else if (((i = mt(i)), arguments.length === 2))
        Se(t, function (a) {
          return fi(i, a) !== -1;
        });
      else for (var s = 0, r = i.length; s < r; s++) Ai(t, i[s], e, n);
      return this;
    }
    function Se(t, i) {
      for (var e in t[K]) {
        var n = e.split(/\d/)[0];
        (!i || i(n)) && Ai(t, n, null, null, e);
      }
    }
    var Oi = {
      mouseenter: 'mouseover',
      mouseleave: 'mouseout',
      wheel: !('onwheel' in window) && 'mousewheel'
    };
    function Ii(t, i, e, n) {
      var o = i + P(e) + (n ? '_' + P(n) : '');
      if (t[K] && t[K][o]) return this;
      var s = function (a) {
          return e.call(n || t, a || window.event);
        },
        r = s;
      !f.touchNative && f.pointer && i.indexOf('touch') === 0
        ? (s = Zn(t, i, s))
        : f.touch && i === 'dblclick'
        ? (s = Hn(t, s))
        : 'addEventListener' in t
        ? i === 'touchstart' || i === 'touchmove' || i === 'wheel' || i === 'mousewheel'
          ? t.addEventListener(Oi[i] || i, s, f.passiveEvents ? { passive: !1 } : !1)
          : i === 'mouseenter' || i === 'mouseleave'
          ? ((s = function (a) {
              (a = a || window.event), Ni(t, a) && r(a);
            }),
            t.addEventListener(Oi[i], s, !1))
          : t.addEventListener(i, r, !1)
        : t.attachEvent('on' + i, s),
        (t[K] = t[K] || {}),
        (t[K][o] = s);
    }
    function Ai(t, i, e, n, o) {
      o = o || i + P(e) + (n ? '_' + P(n) : '');
      var s = t[K] && t[K][o];
      if (!s) return this;
      !f.touchNative && f.pointer && i.indexOf('touch') === 0
        ? On(t, i, s)
        : f.touch && i === 'dblclick'
        ? Fn(t, s)
        : 'removeEventListener' in t
        ? t.removeEventListener(Oi[i] || i, s, !1)
        : t.detachEvent('on' + i, s),
        (t[K][o] = null);
    }
    function ct(t) {
      return (
        t.stopPropagation
          ? t.stopPropagation()
          : t.originalEvent
          ? (t.originalEvent._stopped = !0)
          : (t.cancelBubble = !0),
        this
      );
    }
    function Bi(t) {
      return Ii(t, 'wheel', ct), this;
    }
    function It(t) {
      return (
        _(t, 'mousedown touchstart dblclick contextmenu', ct), (t._leaflet_disable_click = !0), this
      );
    }
    function B(t) {
      return t.preventDefault ? t.preventDefault() : (t.returnValue = !1), this;
    }
    function ft(t) {
      return B(t), ct(t), this;
    }
    function ke(t, i) {
      if (!i) return new d(t.clientX, t.clientY);
      var e = Zi(i),
        n = e.boundingClientRect;
      return new d(
        (t.clientX - n.left) / e.x - i.clientLeft,
        (t.clientY - n.top) / e.y - i.clientTop
      );
    }
    var Gn =
      f.win && f.chrome ? 2 * window.devicePixelRatio : f.gecko ? window.devicePixelRatio : 1;
    function Ee(t) {
      return f.edge
        ? t.wheelDeltaY / 2
        : t.deltaY && t.deltaMode === 0
        ? -t.deltaY / Gn
        : t.deltaY && t.deltaMode === 1
        ? -t.deltaY * 20
        : t.deltaY && t.deltaMode === 2
        ? -t.deltaY * 60
        : t.deltaX || t.deltaZ
        ? 0
        : t.wheelDelta
        ? (t.wheelDeltaY || t.wheelDelta) / 2
        : t.detail && Math.abs(t.detail) < 32765
        ? -t.detail * 20
        : t.detail
        ? (t.detail / -32765) * 60
        : 0;
    }
    function Ni(t, i) {
      var e = i.relatedTarget;
      if (!e) return !0;
      try {
        for (; e && e !== t; ) e = e.parentNode;
      } catch {
        return !1;
      }
      return e !== t;
    }
    var Vn = {
        __proto__: null,
        on: _,
        off: b,
        stopPropagation: ct,
        disableScrollPropagation: Bi,
        disableClickPropagation: It,
        preventDefault: B,
        stop: ft,
        getMousePosition: ke,
        getWheelDelta: Ee,
        isExternalTarget: Ni,
        addListener: _,
        removeListener: b
      },
      Ze = Mt.extend({
        run: function (t, i, e, n) {
          this.stop(),
            (this._el = t),
            (this._inProgress = !0),
            (this._duration = e || 0.25),
            (this._easeOutPower = 1 / Math.max(n || 0.5, 0.2)),
            (this._startPos = lt(t)),
            (this._offset = i.subtract(this._startPos)),
            (this._startTime = +new Date()),
            this.fire('start'),
            this._animate();
        },
        stop: function () {
          !this._inProgress || (this._step(!0), this._complete());
        },
        _animate: function () {
          (this._animId = N(this._animate, this)), this._step();
        },
        _step: function (t) {
          var i = +new Date() - this._startTime,
            e = this._duration * 1e3;
          i < e ? this._runFrame(this._easeOut(i / e), t) : (this._runFrame(1), this._complete());
        },
        _runFrame: function (t, i) {
          var e = this._startPos.add(this._offset.multiplyBy(t));
          i && e._round(), O(this._el, e), this.fire('step');
        },
        _complete: function () {
          H(this._animId), (this._inProgress = !1), this.fire('end');
        },
        _easeOut: function (t) {
          return 1 - Math.pow(1 - t, this._easeOutPower);
        }
      }),
      v = Mt.extend({
        options: {
          crs: gi,
          center: void 0,
          zoom: void 0,
          minZoom: void 0,
          maxZoom: void 0,
          layers: [],
          maxBounds: void 0,
          renderer: void 0,
          zoomAnimation: !0,
          zoomAnimationThreshold: 4,
          fadeAnimation: !0,
          markerZoomAnimation: !0,
          transform3DLimit: 8388608,
          zoomSnap: 1,
          zoomDelta: 1,
          trackResize: !0
        },
        initialize: function (t, i) {
          (i = C(this, i)),
            (this._handlers = []),
            (this._layers = {}),
            (this._zoomBoundLayers = {}),
            (this._sizeChanged = !0),
            this._initContainer(t),
            this._initLayout(),
            (this._onResize = M(this._onResize, this)),
            this._initEvents(),
            i.maxBounds && this.setMaxBounds(i.maxBounds),
            i.zoom !== void 0 && (this._zoom = this._limitZoom(i.zoom)),
            i.center && i.zoom !== void 0 && this.setView(S(i.center), i.zoom, { reset: !0 }),
            this.callInitHooks(),
            (this._zoomAnimated = St && f.any3d && !f.mobileOpera && this.options.zoomAnimation),
            this._zoomAnimated &&
              (this._createAnimProxy(), _(this._proxy, Me, this._catchTransitionEnd, this)),
            this._addLayers(this.options.layers);
        },
        setView: function (t, i, e) {
          if (
            ((i = i === void 0 ? this._zoom : this._limitZoom(i)),
            (t = this._limitCenter(S(t), i, this.options.maxBounds)),
            (e = e || {}),
            this._stop(),
            this._loaded && !e.reset && e !== !0)
          ) {
            e.animate !== void 0 &&
              ((e.zoom = x({ animate: e.animate }, e.zoom)),
              (e.pan = x({ animate: e.animate, duration: e.duration }, e.pan)));
            var n =
              this._zoom !== i
                ? this._tryAnimatedZoom && this._tryAnimatedZoom(t, i, e.zoom)
                : this._tryAnimatedPan(t, e.pan);
            if (n) return clearTimeout(this._sizeTimer), this;
          }
          return this._resetView(t, i), this;
        },
        setZoom: function (t, i) {
          return this._loaded
            ? this.setView(this.getCenter(), t, { zoom: i })
            : ((this._zoom = t), this);
        },
        zoomIn: function (t, i) {
          return (t = t || (f.any3d ? this.options.zoomDelta : 1)), this.setZoom(this._zoom + t, i);
        },
        zoomOut: function (t, i) {
          return (t = t || (f.any3d ? this.options.zoomDelta : 1)), this.setZoom(this._zoom - t, i);
        },
        setZoomAround: function (t, i, e) {
          var n = this.getZoomScale(i),
            o = this.getSize().divideBy(2),
            s = t instanceof d ? t : this.latLngToContainerPoint(t),
            r = s.subtract(o).multiplyBy(1 - 1 / n),
            a = this.containerPointToLatLng(o.add(r));
          return this.setView(a, i, { zoom: e });
        },
        _getBoundsCenterZoom: function (t, i) {
          (i = i || {}), (t = t.getBounds ? t.getBounds() : A(t));
          var e = g(i.paddingTopLeft || i.padding || [0, 0]),
            n = g(i.paddingBottomRight || i.padding || [0, 0]),
            o = this.getBoundsZoom(t, !1, e.add(n));
          if (((o = typeof i.maxZoom == 'number' ? Math.min(i.maxZoom, o) : o), o === 1 / 0))
            return { center: t.getCenter(), zoom: o };
          var s = n.subtract(e).divideBy(2),
            r = this.project(t.getSouthWest(), o),
            a = this.project(t.getNorthEast(), o),
            h = this.unproject(r.add(a).divideBy(2).add(s), o);
          return { center: h, zoom: o };
        },
        fitBounds: function (t, i) {
          if (((t = A(t)), !t.isValid())) throw new Error('Bounds are not valid.');
          var e = this._getBoundsCenterZoom(t, i);
          return this.setView(e.center, e.zoom, i);
        },
        fitWorld: function (t) {
          return this.fitBounds(
            [
              [-90, -180],
              [90, 180]
            ],
            t
          );
        },
        panTo: function (t, i) {
          return this.setView(t, this._zoom, { pan: i });
        },
        panBy: function (t, i) {
          if (((t = g(t).round()), (i = i || {}), !t.x && !t.y)) return this.fire('moveend');
          if (i.animate !== !0 && !this.getSize().contains(t))
            return (
              this._resetView(
                this.unproject(this.project(this.getCenter()).add(t)),
                this.getZoom()
              ),
              this
            );
          if (
            (this._panAnim ||
              ((this._panAnim = new Ze()),
              this._panAnim.on(
                { step: this._onPanTransitionStep, end: this._onPanTransitionEnd },
                this
              )),
            i.noMoveStart || this.fire('movestart'),
            i.animate !== !1)
          ) {
            m(this._mapPane, 'leaflet-pan-anim');
            var e = this._getMapPanePos().subtract(t).round();
            this._panAnim.run(this._mapPane, e, i.duration || 0.25, i.easeLinearity);
          } else this._rawPanBy(t), this.fire('move').fire('moveend');
          return this;
        },
        flyTo: function (t, i, e) {
          if (((e = e || {}), e.animate === !1 || !f.any3d)) return this.setView(t, i, e);
          this._stop();
          var n = this.project(this.getCenter()),
            o = this.project(t),
            s = this.getSize(),
            r = this._zoom;
          (t = S(t)), (i = i === void 0 ? r : i);
          var a = Math.max(s.x, s.y),
            h = a * this.getZoomScale(r, i),
            u = o.distanceTo(n) || 1,
            c = 1.42,
            p = c * c;
          function y(I) {
            var hi = I ? -1 : 1,
              Io = I ? h : a,
              Ao = h * h - a * a + hi * p * p * u * u,
              Bo = 2 * Io * p * u,
              Yi = Ao / Bo,
              cn = Math.sqrt(Yi * Yi + 1) - Yi,
              No = cn < 1e-9 ? -18 : Math.log(cn);
            return No;
          }
          function ot(I) {
            return (Math.exp(I) - Math.exp(-I)) / 2;
          }
          function _t(I) {
            return (Math.exp(I) + Math.exp(-I)) / 2;
          }
          function ai(I) {
            return ot(I) / _t(I);
          }
          var ht = y(0);
          function Ki(I) {
            return a * (_t(ht) / _t(ht + c * I));
          }
          function ko(I) {
            return (a * (_t(ht) * ai(ht + c * I) - ot(ht))) / p;
          }
          function Eo(I) {
            return 1 - Math.pow(1 - I, 1.5);
          }
          var Zo = Date.now(),
            un = (y(1) - ht) / c,
            Oo = e.duration ? 1e3 * e.duration : 1e3 * un * 0.8;
          function ln() {
            var I = (Date.now() - Zo) / Oo,
              hi = Eo(I) * un;
            I <= 1
              ? ((this._flyToFrame = N(ln, this)),
                this._move(
                  this.unproject(n.add(o.subtract(n).multiplyBy(ko(hi) / u)), r),
                  this.getScaleZoom(a / Ki(hi), r),
                  { flyTo: !0 }
                ))
              : this._move(t, i)._moveEnd(!0);
          }
          return this._moveStart(!0, e.noMoveStart), ln.call(this), this;
        },
        flyToBounds: function (t, i) {
          var e = this._getBoundsCenterZoom(t, i);
          return this.flyTo(e.center, e.zoom, i);
        },
        setMaxBounds: function (t) {
          if (((t = A(t)), t.isValid()))
            this.options.maxBounds && this.off('moveend', this._panInsideMaxBounds);
          else
            return (this.options.maxBounds = null), this.off('moveend', this._panInsideMaxBounds);
          return (
            (this.options.maxBounds = t),
            this._loaded && this._panInsideMaxBounds(),
            this.on('moveend', this._panInsideMaxBounds)
          );
        },
        setMinZoom: function (t) {
          var i = this.options.minZoom;
          return (
            (this.options.minZoom = t),
            this._loaded &&
            i !== t &&
            (this.fire('zoomlevelschange'), this.getZoom() < this.options.minZoom)
              ? this.setZoom(t)
              : this
          );
        },
        setMaxZoom: function (t) {
          var i = this.options.maxZoom;
          return (
            (this.options.maxZoom = t),
            this._loaded &&
            i !== t &&
            (this.fire('zoomlevelschange'), this.getZoom() > this.options.maxZoom)
              ? this.setZoom(t)
              : this
          );
        },
        panInsideBounds: function (t, i) {
          this._enforcingBounds = !0;
          var e = this.getCenter(),
            n = this._limitCenter(e, this._zoom, A(t));
          return e.equals(n) || this.panTo(n, i), (this._enforcingBounds = !1), this;
        },
        panInside: function (t, i) {
          i = i || {};
          var e = g(i.paddingTopLeft || i.padding || [0, 0]),
            n = g(i.paddingBottomRight || i.padding || [0, 0]),
            o = this.project(this.getCenter()),
            s = this.project(t),
            r = this.getPixelBounds(),
            a = W([r.min.add(e), r.max.subtract(n)]),
            h = a.getSize();
          if (!a.contains(s)) {
            this._enforcingBounds = !0;
            var u = s.subtract(a.getCenter()),
              c = a.extend(s).getSize().subtract(h);
            (o.x += u.x < 0 ? -c.x : c.x),
              (o.y += u.y < 0 ? -c.y : c.y),
              this.panTo(this.unproject(o), i),
              (this._enforcingBounds = !1);
          }
          return this;
        },
        invalidateSize: function (t) {
          if (!this._loaded) return this;
          t = x({ animate: !1, pan: !0 }, t === !0 ? { animate: !0 } : t);
          var i = this.getSize();
          (this._sizeChanged = !0), (this._lastCenter = null);
          var e = this.getSize(),
            n = i.divideBy(2).round(),
            o = e.divideBy(2).round(),
            s = n.subtract(o);
          return !s.x && !s.y
            ? this
            : (t.animate && t.pan
                ? this.panBy(s)
                : (t.pan && this._rawPanBy(s),
                  this.fire('move'),
                  t.debounceMoveend
                    ? (clearTimeout(this._sizeTimer),
                      (this._sizeTimer = setTimeout(M(this.fire, this, 'moveend'), 200)))
                    : this.fire('moveend')),
              this.fire('resize', { oldSize: i, newSize: e }));
        },
        stop: function () {
          return (
            this.setZoom(this._limitZoom(this._zoom)),
            this.options.zoomSnap || this.fire('viewreset'),
            this._stop()
          );
        },
        locate: function (t) {
          if (
            ((t = this._locateOptions = x({ timeout: 1e4, watch: !1 }, t)),
            !('geolocation' in navigator))
          )
            return (
              this._handleGeolocationError({ code: 0, message: 'Geolocation not supported.' }), this
            );
          var i = M(this._handleGeolocationResponse, this),
            e = M(this._handleGeolocationError, this);
          return (
            t.watch
              ? (this._locationWatchId = navigator.geolocation.watchPosition(i, e, t))
              : navigator.geolocation.getCurrentPosition(i, e, t),
            this
          );
        },
        stopLocate: function () {
          return (
            navigator.geolocation &&
              navigator.geolocation.clearWatch &&
              navigator.geolocation.clearWatch(this._locationWatchId),
            this._locateOptions && (this._locateOptions.setView = !1),
            this
          );
        },
        _handleGeolocationError: function (t) {
          if (!!this._container._leaflet_id) {
            var i = t.code,
              e =
                t.message ||
                (i === 1 ? 'permission denied' : i === 2 ? 'position unavailable' : 'timeout');
            this._locateOptions.setView && !this._loaded && this.fitWorld(),
              this.fire('locationerror', { code: i, message: 'Geolocation error: ' + e + '.' });
          }
        },
        _handleGeolocationResponse: function (t) {
          if (!!this._container._leaflet_id) {
            var i = t.coords.latitude,
              e = t.coords.longitude,
              n = new T(i, e),
              o = n.toBounds(t.coords.accuracy * 2),
              s = this._locateOptions;
            if (s.setView) {
              var r = this.getBoundsZoom(o);
              this.setView(n, s.maxZoom ? Math.min(r, s.maxZoom) : r);
            }
            var a = { latlng: n, bounds: o, timestamp: t.timestamp };
            for (var h in t.coords) typeof t.coords[h] == 'number' && (a[h] = t.coords[h]);
            this.fire('locationfound', a);
          }
        },
        addHandler: function (t, i) {
          if (!i) return this;
          var e = (this[t] = new i(this));
          return this._handlers.push(e), this.options[t] && e.enable(), this;
        },
        remove: function () {
          if (
            (this._initEvents(!0),
            this.options.maxBounds && this.off('moveend', this._panInsideMaxBounds),
            this._containerId !== this._container._leaflet_id)
          )
            throw new Error('Map container is being reused by another instance');
          try {
            delete this._container._leaflet_id, delete this._containerId;
          } catch {
            (this._container._leaflet_id = void 0), (this._containerId = void 0);
          }
          this._locationWatchId !== void 0 && this.stopLocate(),
            this._stop(),
            k(this._mapPane),
            this._clearControlPos && this._clearControlPos(),
            this._resizeRequest && (H(this._resizeRequest), (this._resizeRequest = null)),
            this._clearHandlers(),
            this._loaded && this.fire('unload');
          var t;
          for (t in this._layers) this._layers[t].remove();
          for (t in this._panes) k(this._panes[t]);
          return (
            (this._layers = []),
            (this._panes = []),
            delete this._mapPane,
            delete this._renderer,
            this
          );
        },
        createPane: function (t, i) {
          var e = 'leaflet-pane' + (t ? ' leaflet-' + t.replace('Pane', '') + '-pane' : ''),
            n = w('div', e, i || this._mapPane);
          return t && (this._panes[t] = n), n;
        },
        getCenter: function () {
          return (
            this._checkIfLoaded(),
            this._lastCenter && !this._moved()
              ? this._lastCenter
              : this.layerPointToLatLng(this._getCenterLayerPoint())
          );
        },
        getZoom: function () {
          return this._zoom;
        },
        getBounds: function () {
          var t = this.getPixelBounds(),
            i = this.unproject(t.getBottomLeft()),
            e = this.unproject(t.getTopRight());
          return new R(i, e);
        },
        getMinZoom: function () {
          return this.options.minZoom === void 0 ? this._layersMinZoom || 0 : this.options.minZoom;
        },
        getMaxZoom: function () {
          return this.options.maxZoom === void 0
            ? this._layersMaxZoom === void 0
              ? 1 / 0
              : this._layersMaxZoom
            : this.options.maxZoom;
        },
        getBoundsZoom: function (t, i, e) {
          (t = A(t)), (e = g(e || [0, 0]));
          var n = this.getZoom() || 0,
            o = this.getMinZoom(),
            s = this.getMaxZoom(),
            r = t.getNorthWest(),
            a = t.getSouthEast(),
            h = this.getSize().subtract(e),
            u = W(this.project(a, n), this.project(r, n)).getSize(),
            c = f.any3d ? this.options.zoomSnap : 1,
            p = h.x / u.x,
            y = h.y / u.y,
            ot = i ? Math.max(p, y) : Math.min(p, y);
          return (
            (n = this.getScaleZoom(ot, n)),
            c &&
              ((n = Math.round(n / (c / 100)) * (c / 100)),
              (n = i ? Math.ceil(n / c) * c : Math.floor(n / c) * c)),
            Math.max(o, Math.min(s, n))
          );
        },
        getSize: function () {
          return (
            (!this._size || this._sizeChanged) &&
              ((this._size = new d(
                this._container.clientWidth || 0,
                this._container.clientHeight || 0
              )),
              (this._sizeChanged = !1)),
            this._size.clone()
          );
        },
        getPixelBounds: function (t, i) {
          var e = this._getTopLeftPoint(t, i);
          return new z(e, e.add(this.getSize()));
        },
        getPixelOrigin: function () {
          return this._checkIfLoaded(), this._pixelOrigin;
        },
        getPixelWorldBounds: function (t) {
          return this.options.crs.getProjectedBounds(t === void 0 ? this.getZoom() : t);
        },
        getPane: function (t) {
          return typeof t == 'string' ? this._panes[t] : t;
        },
        getPanes: function () {
          return this._panes;
        },
        getContainer: function () {
          return this._container;
        },
        getZoomScale: function (t, i) {
          var e = this.options.crs;
          return (i = i === void 0 ? this._zoom : i), e.scale(t) / e.scale(i);
        },
        getScaleZoom: function (t, i) {
          var e = this.options.crs;
          i = i === void 0 ? this._zoom : i;
          var n = e.zoom(t * e.scale(i));
          return isNaN(n) ? 1 / 0 : n;
        },
        project: function (t, i) {
          return (i = i === void 0 ? this._zoom : i), this.options.crs.latLngToPoint(S(t), i);
        },
        unproject: function (t, i) {
          return (i = i === void 0 ? this._zoom : i), this.options.crs.pointToLatLng(g(t), i);
        },
        layerPointToLatLng: function (t) {
          var i = g(t).add(this.getPixelOrigin());
          return this.unproject(i);
        },
        latLngToLayerPoint: function (t) {
          var i = this.project(S(t))._round();
          return i._subtract(this.getPixelOrigin());
        },
        wrapLatLng: function (t) {
          return this.options.crs.wrapLatLng(S(t));
        },
        wrapLatLngBounds: function (t) {
          return this.options.crs.wrapLatLngBounds(A(t));
        },
        distance: function (t, i) {
          return this.options.crs.distance(S(t), S(i));
        },
        containerPointToLayerPoint: function (t) {
          return g(t).subtract(this._getMapPanePos());
        },
        layerPointToContainerPoint: function (t) {
          return g(t).add(this._getMapPanePos());
        },
        containerPointToLatLng: function (t) {
          var i = this.containerPointToLayerPoint(g(t));
          return this.layerPointToLatLng(i);
        },
        latLngToContainerPoint: function (t) {
          return this.layerPointToContainerPoint(this.latLngToLayerPoint(S(t)));
        },
        mouseEventToContainerPoint: function (t) {
          return ke(t, this._container);
        },
        mouseEventToLayerPoint: function (t) {
          return this.containerPointToLayerPoint(this.mouseEventToContainerPoint(t));
        },
        mouseEventToLatLng: function (t) {
          return this.layerPointToLatLng(this.mouseEventToLayerPoint(t));
        },
        _initContainer: function (t) {
          var i = (this._container = Ce(t));
          if (i) {
            if (i._leaflet_id) throw new Error('Map container is already initialized.');
          } else throw new Error('Map container not found.');
          _(i, 'scroll', this._onScroll, this), (this._containerId = P(i));
        },
        _initLayout: function () {
          var t = this._container;
          (this._fadeAnimated = this.options.fadeAnimation && f.any3d),
            m(
              t,
              'leaflet-container' +
                (f.touch ? ' leaflet-touch' : '') +
                (f.retina ? ' leaflet-retina' : '') +
                (f.ielt9 ? ' leaflet-oldie' : '') +
                (f.safari ? ' leaflet-safari' : '') +
                (this._fadeAnimated ? ' leaflet-fade-anim' : '')
            );
          var i = kt(t, 'position');
          i !== 'absolute' && i !== 'relative' && i !== 'fixed' && (t.style.position = 'relative'),
            this._initPanes(),
            this._initControlPos && this._initControlPos();
        },
        _initPanes: function () {
          var t = (this._panes = {});
          (this._paneRenderers = {}),
            (this._mapPane = this.createPane('mapPane', this._container)),
            O(this._mapPane, new d(0, 0)),
            this.createPane('tilePane'),
            this.createPane('overlayPane'),
            this.createPane('shadowPane'),
            this.createPane('markerPane'),
            this.createPane('tooltipPane'),
            this.createPane('popupPane'),
            this.options.markerZoomAnimation ||
              (m(t.markerPane, 'leaflet-zoom-hide'), m(t.shadowPane, 'leaflet-zoom-hide'));
        },
        _resetView: function (t, i) {
          O(this._mapPane, new d(0, 0));
          var e = !this._loaded;
          (this._loaded = !0), (i = this._limitZoom(i)), this.fire('viewprereset');
          var n = this._zoom !== i;
          this._moveStart(n, !1)._move(t, i)._moveEnd(n),
            this.fire('viewreset'),
            e && this.fire('load');
        },
        _moveStart: function (t, i) {
          return t && this.fire('zoomstart'), i || this.fire('movestart'), this;
        },
        _move: function (t, i, e, n) {
          i === void 0 && (i = this._zoom);
          var o = this._zoom !== i;
          return (
            (this._zoom = i),
            (this._lastCenter = t),
            (this._pixelOrigin = this._getNewPixelOrigin(t)),
            n
              ? e && e.pinch && this.fire('zoom', e)
              : ((o || (e && e.pinch)) && this.fire('zoom', e), this.fire('move', e)),
            this
          );
        },
        _moveEnd: function (t) {
          return t && this.fire('zoomend'), this.fire('moveend');
        },
        _stop: function () {
          return H(this._flyToFrame), this._panAnim && this._panAnim.stop(), this;
        },
        _rawPanBy: function (t) {
          O(this._mapPane, this._getMapPanePos().subtract(t));
        },
        _getZoomSpan: function () {
          return this.getMaxZoom() - this.getMinZoom();
        },
        _panInsideMaxBounds: function () {
          this._enforcingBounds || this.panInsideBounds(this.options.maxBounds);
        },
        _checkIfLoaded: function () {
          if (!this._loaded) throw new Error('Set map center and zoom first.');
        },
        _initEvents: function (t) {
          (this._targets = {}), (this._targets[P(this._container)] = this);
          var i = t ? b : _;
          i(
            this._container,
            'click dblclick mousedown mouseup mouseover mouseout mousemove contextmenu keypress keydown keyup',
            this._handleDOMEvent,
            this
          ),
            this.options.trackResize && i(window, 'resize', this._onResize, this),
            f.any3d &&
              this.options.transform3DLimit &&
              (t ? this.off : this.on).call(this, 'moveend', this._onMoveEnd);
        },
        _onResize: function () {
          H(this._resizeRequest),
            (this._resizeRequest = N(function () {
              this.invalidateSize({ debounceMoveend: !0 });
            }, this));
        },
        _onScroll: function () {
          (this._container.scrollTop = 0), (this._container.scrollLeft = 0);
        },
        _onMoveEnd: function () {
          var t = this._getMapPanePos();
          Math.max(Math.abs(t.x), Math.abs(t.y)) >= this.options.transform3DLimit &&
            this._resetView(this.getCenter(), this.getZoom());
        },
        _findEventTargets: function (t, i) {
          for (
            var e = [],
              n,
              o = i === 'mouseout' || i === 'mouseover',
              s = t.target || t.srcElement,
              r = !1;
            s;

          ) {
            if (
              ((n = this._targets[P(s)]),
              n && (i === 'click' || i === 'preclick') && this._draggableMoved(n))
            ) {
              r = !0;
              break;
            }
            if (
              (n && n.listens(i, !0) && ((o && !Ni(s, t)) || (e.push(n), o))) ||
              s === this._container
            )
              break;
            s = s.parentNode;
          }
          return !e.length && !r && !o && this.listens(i, !0) && (e = [this]), e;
        },
        _isClickDisabled: function (t) {
          for (; t !== this._container; ) {
            if (t._leaflet_disable_click) return !0;
            t = t.parentNode;
          }
        },
        _handleDOMEvent: function (t) {
          var i = t.target || t.srcElement;
          if (
            !(
              !this._loaded ||
              i._leaflet_disable_events ||
              (t.type === 'click' && this._isClickDisabled(i))
            )
          ) {
            var e = t.type;
            e === 'mousedown' && Ei(i), this._fireDOMEvent(t, e);
          }
        },
        _mouseEvents: ['click', 'dblclick', 'mouseover', 'mouseout', 'contextmenu'],
        _fireDOMEvent: function (t, i, e) {
          if (t.type === 'click') {
            var n = x({}, t);
            (n.type = 'preclick'), this._fireDOMEvent(n, n.type, e);
          }
          var o = this._findEventTargets(t, i);
          if (e) {
            for (var s = [], r = 0; r < e.length; r++) e[r].listens(i, !0) && s.push(e[r]);
            o = s.concat(o);
          }
          if (!!o.length) {
            i === 'contextmenu' && B(t);
            var a = o[0],
              h = { originalEvent: t };
            if (t.type !== 'keypress' && t.type !== 'keydown' && t.type !== 'keyup') {
              var u = a.getLatLng && (!a._radius || a._radius <= 10);
              (h.containerPoint = u
                ? this.latLngToContainerPoint(a.getLatLng())
                : this.mouseEventToContainerPoint(t)),
                (h.layerPoint = this.containerPointToLayerPoint(h.containerPoint)),
                (h.latlng = u ? a.getLatLng() : this.layerPointToLatLng(h.layerPoint));
            }
            for (r = 0; r < o.length; r++)
              if (
                (o[r].fire(i, h, !0),
                h.originalEvent._stopped ||
                  (o[r].options.bubblingMouseEvents === !1 && fi(this._mouseEvents, i) !== -1))
              )
                return;
          }
        },
        _draggableMoved: function (t) {
          return (
            (t = t.dragging && t.dragging.enabled() ? t : this),
            (t.dragging && t.dragging.moved()) || (this.boxZoom && this.boxZoom.moved())
          );
        },
        _clearHandlers: function () {
          for (var t = 0, i = this._handlers.length; t < i; t++) this._handlers[t].disable();
        },
        whenReady: function (t, i) {
          return this._loaded ? t.call(i || this, { target: this }) : this.on('load', t, i), this;
        },
        _getMapPanePos: function () {
          return lt(this._mapPane) || new d(0, 0);
        },
        _moved: function () {
          var t = this._getMapPanePos();
          return t && !t.equals([0, 0]);
        },
        _getTopLeftPoint: function (t, i) {
          var e = t && i !== void 0 ? this._getNewPixelOrigin(t, i) : this.getPixelOrigin();
          return e.subtract(this._getMapPanePos());
        },
        _getNewPixelOrigin: function (t, i) {
          var e = this.getSize()._divideBy(2);
          return this.project(t, i)._subtract(e)._add(this._getMapPanePos())._round();
        },
        _latLngToNewLayerPoint: function (t, i, e) {
          var n = this._getNewPixelOrigin(e, i);
          return this.project(t, i)._subtract(n);
        },
        _latLngBoundsToNewLayerBounds: function (t, i, e) {
          var n = this._getNewPixelOrigin(e, i);
          return W([
            this.project(t.getSouthWest(), i)._subtract(n),
            this.project(t.getNorthWest(), i)._subtract(n),
            this.project(t.getSouthEast(), i)._subtract(n),
            this.project(t.getNorthEast(), i)._subtract(n)
          ]);
        },
        _getCenterLayerPoint: function () {
          return this.containerPointToLayerPoint(this.getSize()._divideBy(2));
        },
        _getCenterOffset: function (t) {
          return this.latLngToLayerPoint(t).subtract(this._getCenterLayerPoint());
        },
        _limitCenter: function (t, i, e) {
          if (!e) return t;
          var n = this.project(t, i),
            o = this.getSize().divideBy(2),
            s = new z(n.subtract(o), n.add(o)),
            r = this._getBoundsOffset(s, e, i);
          return r.round().equals([0, 0]) ? t : this.unproject(n.add(r), i);
        },
        _limitOffset: function (t, i) {
          if (!i) return t;
          var e = this.getPixelBounds(),
            n = new z(e.min.add(t), e.max.add(t));
          return t.add(this._getBoundsOffset(n, i));
        },
        _getBoundsOffset: function (t, i, e) {
          var n = W(this.project(i.getNorthEast(), e), this.project(i.getSouthWest(), e)),
            o = n.min.subtract(t.min),
            s = n.max.subtract(t.max),
            r = this._rebound(o.x, -s.x),
            a = this._rebound(o.y, -s.y);
          return new d(r, a);
        },
        _rebound: function (t, i) {
          return t + i > 0
            ? Math.round(t - i) / 2
            : Math.max(0, Math.ceil(t)) - Math.max(0, Math.floor(i));
        },
        _limitZoom: function (t) {
          var i = this.getMinZoom(),
            e = this.getMaxZoom(),
            n = f.any3d ? this.options.zoomSnap : 1;
          return n && (t = Math.round(t / n) * n), Math.max(i, Math.min(e, t));
        },
        _onPanTransitionStep: function () {
          this.fire('move');
        },
        _onPanTransitionEnd: function () {
          E(this._mapPane, 'leaflet-pan-anim'), this.fire('moveend');
        },
        _tryAnimatedPan: function (t, i) {
          var e = this._getCenterOffset(t)._trunc();
          return (i && i.animate) !== !0 && !this.getSize().contains(e)
            ? !1
            : (this.panBy(e, i), !0);
        },
        _createAnimProxy: function () {
          var t = (this._proxy = w('div', 'leaflet-proxy leaflet-zoom-animated'));
          this._panes.mapPane.appendChild(t),
            this.on(
              'zoomanim',
              function (i) {
                var e = Ti,
                  n = this._proxy.style[e];
                ut(this._proxy, this.project(i.center, i.zoom), this.getZoomScale(i.zoom, 1)),
                  n === this._proxy.style[e] && this._animatingZoom && this._onZoomTransitionEnd();
              },
              this
            ),
            this.on('load moveend', this._animMoveEnd, this),
            this._on('unload', this._destroyAnimProxy, this);
        },
        _destroyAnimProxy: function () {
          k(this._proxy), this.off('load moveend', this._animMoveEnd, this), delete this._proxy;
        },
        _animMoveEnd: function () {
          var t = this.getCenter(),
            i = this.getZoom();
          ut(this._proxy, this.project(t, i), this.getZoomScale(i, 1));
        },
        _catchTransitionEnd: function (t) {
          this._animatingZoom &&
            t.propertyName.indexOf('transform') >= 0 &&
            this._onZoomTransitionEnd();
        },
        _nothingToAnimate: function () {
          return !this._container.getElementsByClassName('leaflet-zoom-animated').length;
        },
        _tryAnimatedZoom: function (t, i, e) {
          if (this._animatingZoom) return !0;
          if (
            ((e = e || {}),
            !this._zoomAnimated ||
              e.animate === !1 ||
              this._nothingToAnimate() ||
              Math.abs(i - this._zoom) > this.options.zoomAnimationThreshold)
          )
            return !1;
          var n = this.getZoomScale(i),
            o = this._getCenterOffset(t)._divideBy(1 - 1 / n);
          return e.animate !== !0 && !this.getSize().contains(o)
            ? !1
            : (N(function () {
                this._moveStart(!0, !1)._animateZoom(t, i, !0);
              }, this),
              !0);
        },
        _animateZoom: function (t, i, e, n) {
          !this._mapPane ||
            (e &&
              ((this._animatingZoom = !0),
              (this._animateToCenter = t),
              (this._animateToZoom = i),
              m(this._mapPane, 'leaflet-zoom-anim')),
            this.fire('zoomanim', { center: t, zoom: i, noUpdate: n }),
            this._tempFireZoomEvent ||
              (this._tempFireZoomEvent = this._zoom !== this._animateToZoom),
            this._move(this._animateToCenter, this._animateToZoom, void 0, !0),
            setTimeout(M(this._onZoomTransitionEnd, this), 250));
        },
        _onZoomTransitionEnd: function () {
          !this._animatingZoom ||
            (this._mapPane && E(this._mapPane, 'leaflet-zoom-anim'),
            (this._animatingZoom = !1),
            this._move(this._animateToCenter, this._animateToZoom, void 0, !0),
            this._tempFireZoomEvent && this.fire('zoom'),
            delete this._tempFireZoomEvent,
            this.fire('move'),
            this._moveEnd(!0));
        }
      });
    function qn(t, i) {
      return new v(t, i);
    }
    var U = $.extend({
        options: { position: 'topright' },
        initialize: function (t) {
          C(this, t);
        },
        getPosition: function () {
          return this.options.position;
        },
        setPosition: function (t) {
          var i = this._map;
          return (
            i && i.removeControl(this), (this.options.position = t), i && i.addControl(this), this
          );
        },
        getContainer: function () {
          return this._container;
        },
        addTo: function (t) {
          this.remove(), (this._map = t);
          var i = (this._container = this.onAdd(t)),
            e = this.getPosition(),
            n = t._controlCorners[e];
          return (
            m(i, 'leaflet-control'),
            e.indexOf('bottom') !== -1 ? n.insertBefore(i, n.firstChild) : n.appendChild(i),
            this._map.on('unload', this.remove, this),
            this
          );
        },
        remove: function () {
          return this._map
            ? (k(this._container),
              this.onRemove && this.onRemove(this._map),
              this._map.off('unload', this.remove, this),
              (this._map = null),
              this)
            : this;
        },
        _refocusOnMap: function (t) {
          this._map && t && t.screenX > 0 && t.screenY > 0 && this._map.getContainer().focus();
        }
      }),
      At = function (t) {
        return new U(t);
      };
    v.include({
      addControl: function (t) {
        return t.addTo(this), this;
      },
      removeControl: function (t) {
        return t.remove(), this;
      },
      _initControlPos: function () {
        var t = (this._controlCorners = {}),
          i = 'leaflet-',
          e = (this._controlContainer = w('div', i + 'control-container', this._container));
        function n(o, s) {
          var r = i + o + ' ' + i + s;
          t[o + s] = w('div', r, e);
        }
        n('top', 'left'), n('top', 'right'), n('bottom', 'left'), n('bottom', 'right');
      },
      _clearControlPos: function () {
        for (var t in this._controlCorners) k(this._controlCorners[t]);
        k(this._controlContainer), delete this._controlCorners, delete this._controlContainer;
      }
    });
    var Oe = U.extend({
        options: {
          collapsed: !0,
          position: 'topright',
          autoZIndex: !0,
          hideSingleBase: !1,
          sortLayers: !1,
          sortFunction: function (t, i, e, n) {
            return e < n ? -1 : n < e ? 1 : 0;
          }
        },
        initialize: function (t, i, e) {
          C(this, e),
            (this._layerControlInputs = []),
            (this._layers = []),
            (this._lastZIndex = 0),
            (this._handlingClick = !1);
          for (var n in t) this._addLayer(t[n], n);
          for (n in i) this._addLayer(i[n], n, !0);
        },
        onAdd: function (t) {
          this._initLayout(),
            this._update(),
            (this._map = t),
            t.on('zoomend', this._checkDisabledLayers, this);
          for (var i = 0; i < this._layers.length; i++)
            this._layers[i].layer.on('add remove', this._onLayerChange, this);
          return this._container;
        },
        addTo: function (t) {
          return U.prototype.addTo.call(this, t), this._expandIfNotCollapsed();
        },
        onRemove: function () {
          this._map.off('zoomend', this._checkDisabledLayers, this);
          for (var t = 0; t < this._layers.length; t++)
            this._layers[t].layer.off('add remove', this._onLayerChange, this);
        },
        addBaseLayer: function (t, i) {
          return this._addLayer(t, i), this._map ? this._update() : this;
        },
        addOverlay: function (t, i) {
          return this._addLayer(t, i, !0), this._map ? this._update() : this;
        },
        removeLayer: function (t) {
          t.off('add remove', this._onLayerChange, this);
          var i = this._getLayer(P(t));
          return (
            i && this._layers.splice(this._layers.indexOf(i), 1), this._map ? this._update() : this
          );
        },
        expand: function () {
          m(this._container, 'leaflet-control-layers-expanded'),
            (this._section.style.height = null);
          var t = this._map.getSize().y - (this._container.offsetTop + 50);
          return (
            t < this._section.clientHeight
              ? (m(this._section, 'leaflet-control-layers-scrollbar'),
                (this._section.style.height = t + 'px'))
              : E(this._section, 'leaflet-control-layers-scrollbar'),
            this._checkDisabledLayers(),
            this
          );
        },
        collapse: function () {
          return E(this._container, 'leaflet-control-layers-expanded'), this;
        },
        _initLayout: function () {
          var t = 'leaflet-control-layers',
            i = (this._container = w('div', t)),
            e = this.options.collapsed;
          i.setAttribute('aria-haspopup', !0), It(i), Bi(i);
          var n = (this._section = w('section', t + '-list'));
          e &&
            (this._map.on('click', this.collapse, this),
            _(
              i,
              {
                mouseenter: function () {
                  _(n, 'click', B),
                    this.expand(),
                    setTimeout(function () {
                      b(n, 'click', B);
                    });
                },
                mouseleave: this.collapse
              },
              this
            ));
          var o = (this._layersLink = w('a', t + '-toggle', i));
          (o.href = '#'),
            (o.title = 'Layers'),
            o.setAttribute('role', 'button'),
            _(o, 'click', B),
            _(o, 'focus', this.expand, this),
            e || this.expand(),
            (this._baseLayersList = w('div', t + '-base', n)),
            (this._separator = w('div', t + '-separator', n)),
            (this._overlaysList = w('div', t + '-overlays', n)),
            i.appendChild(n);
        },
        _getLayer: function (t) {
          for (var i = 0; i < this._layers.length; i++)
            if (this._layers[i] && P(this._layers[i].layer) === t) return this._layers[i];
        },
        _addLayer: function (t, i, e) {
          this._map && t.on('add remove', this._onLayerChange, this),
            this._layers.push({ layer: t, name: i, overlay: e }),
            this.options.sortLayers &&
              this._layers.sort(
                M(function (n, o) {
                  return this.options.sortFunction(n.layer, o.layer, n.name, o.name);
                }, this)
              ),
            this.options.autoZIndex &&
              t.setZIndex &&
              (this._lastZIndex++, t.setZIndex(this._lastZIndex)),
            this._expandIfNotCollapsed();
        },
        _update: function () {
          if (!this._container) return this;
          qt(this._baseLayersList), qt(this._overlaysList), (this._layerControlInputs = []);
          var t,
            i,
            e,
            n,
            o = 0;
          for (e = 0; e < this._layers.length; e++)
            (n = this._layers[e]),
              this._addItem(n),
              (i = i || n.overlay),
              (t = t || !n.overlay),
              (o += n.overlay ? 0 : 1);
          return (
            this.options.hideSingleBase &&
              ((t = t && o > 1), (this._baseLayersList.style.display = t ? '' : 'none')),
            (this._separator.style.display = i && t ? '' : 'none'),
            this
          );
        },
        _onLayerChange: function (t) {
          this._handlingClick || this._update();
          var i = this._getLayer(P(t.target)),
            e = i.overlay
              ? t.type === 'add'
                ? 'overlayadd'
                : 'overlayremove'
              : t.type === 'add'
              ? 'baselayerchange'
              : null;
          e && this._map.fire(e, i);
        },
        _createRadioElement: function (t, i) {
          var e =
              '<input type="radio" class="leaflet-control-layers-selector" name="' +
              t +
              '"' +
              (i ? ' checked="checked"' : '') +
              '/>',
            n = document.createElement('div');
          return (n.innerHTML = e), n.firstChild;
        },
        _addItem: function (t) {
          var i = document.createElement('label'),
            e = this._map.hasLayer(t.layer),
            n;
          t.overlay
            ? ((n = document.createElement('input')),
              (n.type = 'checkbox'),
              (n.className = 'leaflet-control-layers-selector'),
              (n.defaultChecked = e))
            : (n = this._createRadioElement('leaflet-base-layers_' + P(this), e)),
            this._layerControlInputs.push(n),
            (n.layerId = P(t.layer)),
            _(n, 'click', this._onInputClick, this);
          var o = document.createElement('span');
          o.innerHTML = ' ' + t.name;
          var s = document.createElement('span');
          i.appendChild(s), s.appendChild(n), s.appendChild(o);
          var r = t.overlay ? this._overlaysList : this._baseLayersList;
          return r.appendChild(i), this._checkDisabledLayers(), i;
        },
        _onInputClick: function () {
          var t = this._layerControlInputs,
            i,
            e,
            n = [],
            o = [];
          this._handlingClick = !0;
          for (var s = t.length - 1; s >= 0; s--)
            (i = t[s]),
              (e = this._getLayer(i.layerId).layer),
              i.checked ? n.push(e) : i.checked || o.push(e);
          for (s = 0; s < o.length; s++) this._map.hasLayer(o[s]) && this._map.removeLayer(o[s]);
          for (s = 0; s < n.length; s++) this._map.hasLayer(n[s]) || this._map.addLayer(n[s]);
          (this._handlingClick = !1), this._refocusOnMap();
        },
        _checkDisabledLayers: function () {
          for (
            var t = this._layerControlInputs, i, e, n = this._map.getZoom(), o = t.length - 1;
            o >= 0;
            o--
          )
            (i = t[o]),
              (e = this._getLayer(i.layerId).layer),
              (i.disabled =
                (e.options.minZoom !== void 0 && n < e.options.minZoom) ||
                (e.options.maxZoom !== void 0 && n > e.options.maxZoom));
        },
        _expandIfNotCollapsed: function () {
          return this._map && !this.options.collapsed && this.expand(), this;
        }
      }),
      jn = function (t, i, e) {
        return new Oe(t, i, e);
      },
      Ri = U.extend({
        options: {
          position: 'topleft',
          zoomInText: '<span aria-hidden="true">+</span>',
          zoomInTitle: 'Zoom in',
          zoomOutText: '<span aria-hidden="true">&#x2212;</span>',
          zoomOutTitle: 'Zoom out'
        },
        onAdd: function (t) {
          var i = 'leaflet-control-zoom',
            e = w('div', i + ' leaflet-bar'),
            n = this.options;
          return (
            (this._zoomInButton = this._createButton(
              n.zoomInText,
              n.zoomInTitle,
              i + '-in',
              e,
              this._zoomIn
            )),
            (this._zoomOutButton = this._createButton(
              n.zoomOutText,
              n.zoomOutTitle,
              i + '-out',
              e,
              this._zoomOut
            )),
            this._updateDisabled(),
            t.on('zoomend zoomlevelschange', this._updateDisabled, this),
            e
          );
        },
        onRemove: function (t) {
          t.off('zoomend zoomlevelschange', this._updateDisabled, this);
        },
        disable: function () {
          return (this._disabled = !0), this._updateDisabled(), this;
        },
        enable: function () {
          return (this._disabled = !1), this._updateDisabled(), this;
        },
        _zoomIn: function (t) {
          !this._disabled &&
            this._map._zoom < this._map.getMaxZoom() &&
            this._map.zoomIn(this._map.options.zoomDelta * (t.shiftKey ? 3 : 1));
        },
        _zoomOut: function (t) {
          !this._disabled &&
            this._map._zoom > this._map.getMinZoom() &&
            this._map.zoomOut(this._map.options.zoomDelta * (t.shiftKey ? 3 : 1));
        },
        _createButton: function (t, i, e, n, o) {
          var s = w('a', e, n);
          return (
            (s.innerHTML = t),
            (s.href = '#'),
            (s.title = i),
            s.setAttribute('role', 'button'),
            s.setAttribute('aria-label', i),
            It(s),
            _(s, 'click', ft),
            _(s, 'click', o, this),
            _(s, 'click', this._refocusOnMap, this),
            s
          );
        },
        _updateDisabled: function () {
          var t = this._map,
            i = 'leaflet-disabled';
          E(this._zoomInButton, i),
            E(this._zoomOutButton, i),
            this._zoomInButton.setAttribute('aria-disabled', 'false'),
            this._zoomOutButton.setAttribute('aria-disabled', 'false'),
            (this._disabled || t._zoom === t.getMinZoom()) &&
              (m(this._zoomOutButton, i),
              this._zoomOutButton.setAttribute('aria-disabled', 'true')),
            (this._disabled || t._zoom === t.getMaxZoom()) &&
              (m(this._zoomInButton, i), this._zoomInButton.setAttribute('aria-disabled', 'true'));
        }
      });
    v.mergeOptions({ zoomControl: !0 }),
      v.addInitHook(function () {
        this.options.zoomControl &&
          ((this.zoomControl = new Ri()), this.addControl(this.zoomControl));
      });
    var Kn = function (t) {
        return new Ri(t);
      },
      Ie = U.extend({
        options: { position: 'bottomleft', maxWidth: 100, metric: !0, imperial: !0 },
        onAdd: function (t) {
          var i = 'leaflet-control-scale',
            e = w('div', i),
            n = this.options;
          return (
            this._addScales(n, i + '-line', e),
            t.on(n.updateWhenIdle ? 'moveend' : 'move', this._update, this),
            t.whenReady(this._update, this),
            e
          );
        },
        onRemove: function (t) {
          t.off(this.options.updateWhenIdle ? 'moveend' : 'move', this._update, this);
        },
        _addScales: function (t, i, e) {
          t.metric && (this._mScale = w('div', i, e)),
            t.imperial && (this._iScale = w('div', i, e));
        },
        _update: function () {
          var t = this._map,
            i = t.getSize().y / 2,
            e = t.distance(
              t.containerPointToLatLng([0, i]),
              t.containerPointToLatLng([this.options.maxWidth, i])
            );
          this._updateScales(e);
        },
        _updateScales: function (t) {
          this.options.metric && t && this._updateMetric(t),
            this.options.imperial && t && this._updateImperial(t);
        },
        _updateMetric: function (t) {
          var i = this._getRoundNum(t),
            e = i < 1e3 ? i + ' m' : i / 1e3 + ' km';
          this._updateScale(this._mScale, e, i / t);
        },
        _updateImperial: function (t) {
          var i = t * 3.2808399,
            e,
            n,
            o;
          i > 5280
            ? ((e = i / 5280),
              (n = this._getRoundNum(e)),
              this._updateScale(this._iScale, n + ' mi', n / e))
            : ((o = this._getRoundNum(i)), this._updateScale(this._iScale, o + ' ft', o / i));
        },
        _updateScale: function (t, i, e) {
          (t.style.width = Math.round(this.options.maxWidth * e) + 'px'), (t.innerHTML = i);
        },
        _getRoundNum: function (t) {
          var i = Math.pow(10, (Math.floor(t) + '').length - 1),
            e = t / i;
          return (e = e >= 10 ? 10 : e >= 5 ? 5 : e >= 3 ? 3 : e >= 2 ? 2 : 1), i * e;
        }
      }),
      Yn = function (t) {
        return new Ie(t);
      },
      Xn =
        '<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="12" height="8"><path fill="#4C7BE1" d="M0 0h12v4H0z"/><path fill="#FFD500" d="M0 4h12v3H0z"/><path fill="#E0BC00" d="M0 7h12v1H0z"/></svg>',
      Di = U.extend({
        options: {
          position: 'bottomright',
          prefix:
            '<a href="https://leafletjs.com" title="A JavaScript library for interactive maps">' +
            (f.inlineSvg ? Xn + ' ' : '') +
            'Leaflet</a>'
        },
        initialize: function (t) {
          C(this, t), (this._attributions = {});
        },
        onAdd: function (t) {
          (t.attributionControl = this),
            (this._container = w('div', 'leaflet-control-attribution')),
            It(this._container);
          for (var i in t._layers)
            t._layers[i].getAttribution && this.addAttribution(t._layers[i].getAttribution());
          return this._update(), t.on('layeradd', this._addAttribution, this), this._container;
        },
        onRemove: function (t) {
          t.off('layeradd', this._addAttribution, this);
        },
        _addAttribution: function (t) {
          t.layer.getAttribution &&
            (this.addAttribution(t.layer.getAttribution()),
            t.layer.once(
              'remove',
              function () {
                this.removeAttribution(t.layer.getAttribution());
              },
              this
            ));
        },
        setPrefix: function (t) {
          return (this.options.prefix = t), this._update(), this;
        },
        addAttribution: function (t) {
          return t
            ? (this._attributions[t] || (this._attributions[t] = 0),
              this._attributions[t]++,
              this._update(),
              this)
            : this;
        },
        removeAttribution: function (t) {
          return t
            ? (this._attributions[t] && (this._attributions[t]--, this._update()), this)
            : this;
        },
        _update: function () {
          if (!!this._map) {
            var t = [];
            for (var i in this._attributions) this._attributions[i] && t.push(i);
            var e = [];
            this.options.prefix && e.push(this.options.prefix),
              t.length && e.push(t.join(', ')),
              (this._container.innerHTML = e.join(' <span aria-hidden="true">|</span> '));
          }
        }
      });
    v.mergeOptions({ attributionControl: !0 }),
      v.addInitHook(function () {
        this.options.attributionControl && new Di().addTo(this);
      });
    var Jn = function (t) {
      return new Di(t);
    };
    (U.Layers = Oe),
      (U.Zoom = Ri),
      (U.Scale = Ie),
      (U.Attribution = Di),
      (At.layers = jn),
      (At.zoom = Kn),
      (At.scale = Yn),
      (At.attribution = Jn);
    var Y = $.extend({
      initialize: function (t) {
        this._map = t;
      },
      enable: function () {
        return this._enabled ? this : ((this._enabled = !0), this.addHooks(), this);
      },
      disable: function () {
        return this._enabled ? ((this._enabled = !1), this.removeHooks(), this) : this;
      },
      enabled: function () {
        return !!this._enabled;
      }
    });
    Y.addTo = function (t, i) {
      return t.addHandler(i, this), this;
    };
    var $n = { Events: D },
      Ae = f.touch ? 'touchstart mousedown' : 'mousedown',
      rt = Mt.extend({
        options: { clickTolerance: 3 },
        initialize: function (t, i, e, n) {
          C(this, n),
            (this._element = t),
            (this._dragStartTarget = i || t),
            (this._preventOutline = e);
        },
        enable: function () {
          this._enabled || (_(this._dragStartTarget, Ae, this._onDown, this), (this._enabled = !0));
        },
        disable: function () {
          !this._enabled ||
            (rt._dragging === this && this.finishDrag(!0),
            b(this._dragStartTarget, Ae, this._onDown, this),
            (this._enabled = !1),
            (this._moved = !1));
        },
        _onDown: function (t) {
          if (!!this._enabled && ((this._moved = !1), !bi(this._element, 'leaflet-zoom-anim'))) {
            if (t.touches && t.touches.length !== 1) {
              rt._dragging === this && this.finishDrag();
              return;
            }
            if (
              !(rt._dragging || t.shiftKey || (t.which !== 1 && t.button !== 1 && !t.touches)) &&
              ((rt._dragging = this),
              this._preventOutline && Ei(this._element),
              zi(),
              Et(),
              !this._moving)
            ) {
              this.fire('down');
              var i = t.touches ? t.touches[0] : t,
                e = ze(this._element);
              (this._startPoint = new d(i.clientX, i.clientY)),
                (this._startPos = lt(this._element)),
                (this._parentScale = Zi(e));
              var n = t.type === 'mousedown';
              _(document, n ? 'mousemove' : 'touchmove', this._onMove, this),
                _(document, n ? 'mouseup' : 'touchend touchcancel', this._onUp, this);
            }
          }
        },
        _onMove: function (t) {
          if (!!this._enabled) {
            if (t.touches && t.touches.length > 1) {
              this._moved = !0;
              return;
            }
            var i = t.touches && t.touches.length === 1 ? t.touches[0] : t,
              e = new d(i.clientX, i.clientY)._subtract(this._startPoint);
            (!e.x && !e.y) ||
              Math.abs(e.x) + Math.abs(e.y) < this.options.clickTolerance ||
              ((e.x /= this._parentScale.x),
              (e.y /= this._parentScale.y),
              B(t),
              this._moved ||
                (this.fire('dragstart'),
                (this._moved = !0),
                m(document.body, 'leaflet-dragging'),
                (this._lastTarget = t.target || t.srcElement),
                window.SVGElementInstance &&
                  this._lastTarget instanceof window.SVGElementInstance &&
                  (this._lastTarget = this._lastTarget.correspondingUseElement),
                m(this._lastTarget, 'leaflet-drag-target')),
              (this._newPos = this._startPos.add(e)),
              (this._moving = !0),
              (this._lastEvent = t),
              this._updatePosition());
          }
        },
        _updatePosition: function () {
          var t = { originalEvent: this._lastEvent };
          this.fire('predrag', t), O(this._element, this._newPos), this.fire('drag', t);
        },
        _onUp: function () {
          !this._enabled || this.finishDrag();
        },
        finishDrag: function (t) {
          E(document.body, 'leaflet-dragging'),
            this._lastTarget &&
              (E(this._lastTarget, 'leaflet-drag-target'), (this._lastTarget = null)),
            b(document, 'mousemove touchmove', this._onMove, this),
            b(document, 'mouseup touchend touchcancel', this._onUp, this),
            Si(),
            Zt(),
            this._moved &&
              this._moving &&
              this.fire('dragend', {
                noInertia: t,
                distance: this._newPos.distanceTo(this._startPos)
              }),
            (this._moving = !1),
            (rt._dragging = !1);
        }
      });
    function Be(t, i) {
      if (!i || !t.length) return t.slice();
      var e = i * i;
      return (t = io(t, e)), (t = to(t, e)), t;
    }
    function Ne(t, i, e) {
      return Math.sqrt(Bt(t, i, e, !0));
    }
    function Qn(t, i, e) {
      return Bt(t, i, e);
    }
    function to(t, i) {
      var e = t.length,
        n = typeof Uint8Array != void 0 + '' ? Uint8Array : Array,
        o = new n(e);
      (o[0] = o[e - 1] = 1), Hi(t, o, i, 0, e - 1);
      var s,
        r = [];
      for (s = 0; s < e; s++) o[s] && r.push(t[s]);
      return r;
    }
    function Hi(t, i, e, n, o) {
      var s = 0,
        r,
        a,
        h;
      for (a = n + 1; a <= o - 1; a++) (h = Bt(t[a], t[n], t[o], !0)), h > s && ((r = a), (s = h));
      s > e && ((i[r] = 1), Hi(t, i, e, n, r), Hi(t, i, e, r, o));
    }
    function io(t, i) {
      for (var e = [t[0]], n = 1, o = 0, s = t.length; n < s; n++)
        eo(t[n], t[o]) > i && (e.push(t[n]), (o = n));
      return o < s - 1 && e.push(t[s - 1]), e;
    }
    var Re;
    function De(t, i, e, n, o) {
      var s = n ? Re : dt(t, e),
        r = dt(i, e),
        a,
        h,
        u;
      for (Re = r; ; ) {
        if (!(s | r)) return [t, i];
        if (s & r) return !1;
        (a = s || r),
          (h = Jt(t, i, a, e, o)),
          (u = dt(h, e)),
          a === s ? ((t = h), (s = u)) : ((i = h), (r = u));
      }
    }
    function Jt(t, i, e, n, o) {
      var s = i.x - t.x,
        r = i.y - t.y,
        a = n.min,
        h = n.max,
        u,
        c;
      return (
        e & 8
          ? ((u = t.x + (s * (h.y - t.y)) / r), (c = h.y))
          : e & 4
          ? ((u = t.x + (s * (a.y - t.y)) / r), (c = a.y))
          : e & 2
          ? ((u = h.x), (c = t.y + (r * (h.x - t.x)) / s))
          : e & 1 && ((u = a.x), (c = t.y + (r * (a.x - t.x)) / s)),
        new d(u, c, o)
      );
    }
    function dt(t, i) {
      var e = 0;
      return (
        t.x < i.min.x ? (e |= 1) : t.x > i.max.x && (e |= 2),
        t.y < i.min.y ? (e |= 4) : t.y > i.max.y && (e |= 8),
        e
      );
    }
    function eo(t, i) {
      var e = i.x - t.x,
        n = i.y - t.y;
      return e * e + n * n;
    }
    function Bt(t, i, e, n) {
      var o = i.x,
        s = i.y,
        r = e.x - o,
        a = e.y - s,
        h = r * r + a * a,
        u;
      return (
        h > 0 &&
          ((u = ((t.x - o) * r + (t.y - s) * a) / h),
          u > 1 ? ((o = e.x), (s = e.y)) : u > 0 && ((o += r * u), (s += a * u))),
        (r = t.x - o),
        (a = t.y - s),
        n ? r * r + a * a : new d(o, s)
      );
    }
    function tt(t) {
      return !q(t[0]) || (typeof t[0][0] != 'object' && typeof t[0][0] != 'undefined');
    }
    function He(t) {
      return console.warn('Deprecated use of _flat, please use L.LineUtil.isFlat instead.'), tt(t);
    }
    var no = {
      __proto__: null,
      simplify: Be,
      pointToSegmentDistance: Ne,
      closestPointOnSegment: Qn,
      clipSegment: De,
      _getEdgeIntersection: Jt,
      _getBitCode: dt,
      _sqClosestPointOnSegment: Bt,
      isFlat: tt,
      _flat: He
    };
    function Fe(t, i, e) {
      var n,
        o = [1, 4, 2, 8],
        s,
        r,
        a,
        h,
        u,
        c,
        p,
        y;
      for (s = 0, c = t.length; s < c; s++) t[s]._code = dt(t[s], i);
      for (a = 0; a < 4; a++) {
        for (p = o[a], n = [], s = 0, c = t.length, r = c - 1; s < c; r = s++)
          (h = t[s]),
            (u = t[r]),
            h._code & p
              ? u._code & p || ((y = Jt(u, h, p, i, e)), (y._code = dt(y, i)), n.push(y))
              : (u._code & p && ((y = Jt(u, h, p, i, e)), (y._code = dt(y, i)), n.push(y)),
                n.push(h));
        t = n;
      }
      return t;
    }
    var oo = { __proto__: null, clipPolygon: Fe },
      Fi = {
        project: function (t) {
          return new d(t.lng, t.lat);
        },
        unproject: function (t) {
          return new T(t.y, t.x);
        },
        bounds: new z([-180, -90], [180, 90])
      },
      Wi = {
        R: 6378137,
        R_MINOR: 6356752314245179e-9,
        bounds: new z([-2003750834279e-5, -1549657073972e-5], [2003750834279e-5, 1876465623138e-5]),
        project: function (t) {
          var i = Math.PI / 180,
            e = this.R,
            n = t.lat * i,
            o = this.R_MINOR / e,
            s = Math.sqrt(1 - o * o),
            r = s * Math.sin(n),
            a = Math.tan(Math.PI / 4 - n / 2) / Math.pow((1 - r) / (1 + r), s / 2);
          return (n = -e * Math.log(Math.max(a, 1e-10))), new d(t.lng * i * e, n);
        },
        unproject: function (t) {
          for (
            var i = 180 / Math.PI,
              e = this.R,
              n = this.R_MINOR / e,
              o = Math.sqrt(1 - n * n),
              s = Math.exp(-t.y / e),
              r = Math.PI / 2 - 2 * Math.atan(s),
              a = 0,
              h = 0.1,
              u;
            a < 15 && Math.abs(h) > 1e-7;
            a++
          )
            (u = o * Math.sin(r)),
              (u = Math.pow((1 - u) / (1 + u), o / 2)),
              (h = Math.PI / 2 - 2 * Math.atan(s * u) - r),
              (r += h);
          return new T(r * i, (t.x * i) / e);
        }
      },
      so = { __proto__: null, LonLat: Fi, Mercator: Wi, SphericalMercator: mi },
      ro = x({}, st, {
        code: 'EPSG:3395',
        projection: Wi,
        transformation: (function () {
          var t = 0.5 / (Math.PI * Wi.R);
          return Ct(t, 0.5, -t, 0.5);
        })()
      }),
      We = x({}, st, {
        code: 'EPSG:4326',
        projection: Fi,
        transformation: Ct(1 / 180, 1, -1 / 180, 0.5)
      }),
      ao = x({}, Q, {
        projection: Fi,
        transformation: Ct(1, 0, -1, 0),
        scale: function (t) {
          return Math.pow(2, t);
        },
        zoom: function (t) {
          return Math.log(t) / Math.LN2;
        },
        distance: function (t, i) {
          var e = i.lng - t.lng,
            n = i.lat - t.lat;
          return Math.sqrt(e * e + n * n);
        },
        infinite: !0
      });
    (Q.Earth = st),
      (Q.EPSG3395 = ro),
      (Q.EPSG3857 = gi),
      (Q.EPSG900913 = mn),
      (Q.EPSG4326 = We),
      (Q.Simple = ao);
    var G = Mt.extend({
      options: { pane: 'overlayPane', attribution: null, bubblingMouseEvents: !0 },
      addTo: function (t) {
        return t.addLayer(this), this;
      },
      remove: function () {
        return this.removeFrom(this._map || this._mapToAdd);
      },
      removeFrom: function (t) {
        return t && t.removeLayer(this), this;
      },
      getPane: function (t) {
        return this._map.getPane(t ? this.options[t] || t : this.options.pane);
      },
      addInteractiveTarget: function (t) {
        return (this._map._targets[P(t)] = this), this;
      },
      removeInteractiveTarget: function (t) {
        return delete this._map._targets[P(t)], this;
      },
      getAttribution: function () {
        return this.options.attribution;
      },
      _layerAdd: function (t) {
        var i = t.target;
        if (!!i.hasLayer(this)) {
          if (((this._map = i), (this._zoomAnimated = i._zoomAnimated), this.getEvents)) {
            var e = this.getEvents();
            i.on(e, this),
              this.once(
                'remove',
                function () {
                  i.off(e, this);
                },
                this
              );
          }
          this.onAdd(i), this.fire('add'), i.fire('layeradd', { layer: this });
        }
      }
    });
    v.include({
      addLayer: function (t) {
        if (!t._layerAdd) throw new Error('The provided object is not a Layer.');
        var i = P(t);
        return this._layers[i]
          ? this
          : ((this._layers[i] = t),
            (t._mapToAdd = this),
            t.beforeAdd && t.beforeAdd(this),
            this.whenReady(t._layerAdd, t),
            this);
      },
      removeLayer: function (t) {
        var i = P(t);
        return this._layers[i]
          ? (this._loaded && t.onRemove(this),
            delete this._layers[i],
            this._loaded && (this.fire('layerremove', { layer: t }), t.fire('remove')),
            (t._map = t._mapToAdd = null),
            this)
          : this;
      },
      hasLayer: function (t) {
        return P(t) in this._layers;
      },
      eachLayer: function (t, i) {
        for (var e in this._layers) t.call(i, this._layers[e]);
        return this;
      },
      _addLayers: function (t) {
        t = t ? (q(t) ? t : [t]) : [];
        for (var i = 0, e = t.length; i < e; i++) this.addLayer(t[i]);
      },
      _addZoomLimit: function (t) {
        (!isNaN(t.options.maxZoom) || !isNaN(t.options.minZoom)) &&
          ((this._zoomBoundLayers[P(t)] = t), this._updateZoomLevels());
      },
      _removeZoomLimit: function (t) {
        var i = P(t);
        this._zoomBoundLayers[i] && (delete this._zoomBoundLayers[i], this._updateZoomLevels());
      },
      _updateZoomLevels: function () {
        var t = 1 / 0,
          i = -1 / 0,
          e = this._getZoomSpan();
        for (var n in this._zoomBoundLayers) {
          var o = this._zoomBoundLayers[n].options;
          (t = o.minZoom === void 0 ? t : Math.min(t, o.minZoom)),
            (i = o.maxZoom === void 0 ? i : Math.max(i, o.maxZoom));
        }
        (this._layersMaxZoom = i === -1 / 0 ? void 0 : i),
          (this._layersMinZoom = t === 1 / 0 ? void 0 : t),
          e !== this._getZoomSpan() && this.fire('zoomlevelschange'),
          this.options.maxZoom === void 0 &&
            this._layersMaxZoom &&
            this.getZoom() > this._layersMaxZoom &&
            this.setZoom(this._layersMaxZoom),
          this.options.minZoom === void 0 &&
            this._layersMinZoom &&
            this.getZoom() < this._layersMinZoom &&
            this.setZoom(this._layersMinZoom);
      }
    });
    var yt = G.extend({
        initialize: function (t, i) {
          C(this, i), (this._layers = {});
          var e, n;
          if (t) for (e = 0, n = t.length; e < n; e++) this.addLayer(t[e]);
        },
        addLayer: function (t) {
          var i = this.getLayerId(t);
          return (this._layers[i] = t), this._map && this._map.addLayer(t), this;
        },
        removeLayer: function (t) {
          var i = t in this._layers ? t : this.getLayerId(t);
          return (
            this._map && this._layers[i] && this._map.removeLayer(this._layers[i]),
            delete this._layers[i],
            this
          );
        },
        hasLayer: function (t) {
          var i = typeof t == 'number' ? t : this.getLayerId(t);
          return i in this._layers;
        },
        clearLayers: function () {
          return this.eachLayer(this.removeLayer, this);
        },
        invoke: function (t) {
          var i = Array.prototype.slice.call(arguments, 1),
            e,
            n;
          for (e in this._layers) (n = this._layers[e]), n[t] && n[t].apply(n, i);
          return this;
        },
        onAdd: function (t) {
          this.eachLayer(t.addLayer, t);
        },
        onRemove: function (t) {
          this.eachLayer(t.removeLayer, t);
        },
        eachLayer: function (t, i) {
          for (var e in this._layers) t.call(i, this._layers[e]);
          return this;
        },
        getLayer: function (t) {
          return this._layers[t];
        },
        getLayers: function () {
          var t = [];
          return this.eachLayer(t.push, t), t;
        },
        setZIndex: function (t) {
          return this.invoke('setZIndex', t);
        },
        getLayerId: function (t) {
          return P(t);
        }
      }),
      ho = function (t, i) {
        return new yt(t, i);
      },
      wt = yt.extend({
        addLayer: function (t) {
          return this.hasLayer(t)
            ? this
            : (t.addEventParent(this),
              yt.prototype.addLayer.call(this, t),
              this.fire('layeradd', { layer: t }));
        },
        removeLayer: function (t) {
          return this.hasLayer(t)
            ? (t in this._layers && (t = this._layers[t]),
              t.removeEventParent(this),
              yt.prototype.removeLayer.call(this, t),
              this.fire('layerremove', { layer: t }))
            : this;
        },
        setStyle: function (t) {
          return this.invoke('setStyle', t);
        },
        bringToFront: function () {
          return this.invoke('bringToFront');
        },
        bringToBack: function () {
          return this.invoke('bringToBack');
        },
        getBounds: function () {
          var t = new R();
          for (var i in this._layers) {
            var e = this._layers[i];
            t.extend(e.getBounds ? e.getBounds() : e.getLatLng());
          }
          return t;
        }
      }),
      uo = function (t, i) {
        return new wt(t, i);
      },
      Pt = $.extend({
        options: { popupAnchor: [0, 0], tooltipAnchor: [0, 0], crossOrigin: !1 },
        initialize: function (t) {
          C(this, t);
        },
        createIcon: function (t) {
          return this._createIcon('icon', t);
        },
        createShadow: function (t) {
          return this._createIcon('shadow', t);
        },
        _createIcon: function (t, i) {
          var e = this._getIconUrl(t);
          if (!e) {
            if (t === 'icon') throw new Error('iconUrl not set in Icon options (see the docs).');
            return null;
          }
          var n = this._createImg(e, i && i.tagName === 'IMG' ? i : null);
          return (
            this._setIconStyles(n, t),
            (this.options.crossOrigin || this.options.crossOrigin === '') &&
              (n.crossOrigin = this.options.crossOrigin === !0 ? '' : this.options.crossOrigin),
            n
          );
        },
        _setIconStyles: function (t, i) {
          var e = this.options,
            n = e[i + 'Size'];
          typeof n == 'number' && (n = [n, n]);
          var o = g(n),
            s = g((i === 'shadow' && e.shadowAnchor) || e.iconAnchor || (o && o.divideBy(2, !0)));
          (t.className = 'leaflet-marker-' + i + ' ' + (e.className || '')),
            s && ((t.style.marginLeft = -s.x + 'px'), (t.style.marginTop = -s.y + 'px')),
            o && ((t.style.width = o.x + 'px'), (t.style.height = o.y + 'px'));
        },
        _createImg: function (t, i) {
          return (i = i || document.createElement('img')), (i.src = t), i;
        },
        _getIconUrl: function (t) {
          return (f.retina && this.options[t + 'RetinaUrl']) || this.options[t + 'Url'];
        }
      });
    function lo(t) {
      return new Pt(t);
    }
    var Nt = Pt.extend({
        options: {
          iconUrl: 'marker-icon.png',
          iconRetinaUrl: 'marker-icon-2x.png',
          shadowUrl: 'marker-shadow.png',
          iconSize: [25, 41],
          iconAnchor: [12, 41],
          popupAnchor: [1, -34],
          tooltipAnchor: [16, -28],
          shadowSize: [41, 41]
        },
        _getIconUrl: function (t) {
          return (
            typeof Nt.imagePath != 'string' && (Nt.imagePath = this._detectIconPath()),
            (this.options.imagePath || Nt.imagePath) + Pt.prototype._getIconUrl.call(this, t)
          );
        },
        _stripUrl: function (t) {
          var i = function (e, n, o) {
            var s = n.exec(e);
            return s && s[o];
          };
          return (t = i(t, /^url\((['"])?(.+)\1\)$/, 2)), t && i(t, /^(.*)marker-icon\.png$/, 1);
        },
        _detectIconPath: function () {
          var t = w('div', 'leaflet-default-icon-path', document.body),
            i = kt(t, 'background-image') || kt(t, 'backgroundImage');
          if ((document.body.removeChild(t), (i = this._stripUrl(i)), i)) return i;
          var e = document.querySelector('link[href$="leaflet.css"]');
          return e ? e.href.substring(0, e.href.length - 11 - 1) : '';
        }
      }),
      Ue = Y.extend({
        initialize: function (t) {
          this._marker = t;
        },
        addHooks: function () {
          var t = this._marker._icon;
          this._draggable || (this._draggable = new rt(t, t, !0)),
            this._draggable
              .on(
                {
                  dragstart: this._onDragStart,
                  predrag: this._onPreDrag,
                  drag: this._onDrag,
                  dragend: this._onDragEnd
                },
                this
              )
              .enable(),
            m(t, 'leaflet-marker-draggable');
        },
        removeHooks: function () {
          this._draggable
            .off(
              {
                dragstart: this._onDragStart,
                predrag: this._onPreDrag,
                drag: this._onDrag,
                dragend: this._onDragEnd
              },
              this
            )
            .disable(),
            this._marker._icon && E(this._marker._icon, 'leaflet-marker-draggable');
        },
        moved: function () {
          return this._draggable && this._draggable._moved;
        },
        _adjustPan: function (t) {
          var i = this._marker,
            e = i._map,
            n = this._marker.options.autoPanSpeed,
            o = this._marker.options.autoPanPadding,
            s = lt(i._icon),
            r = e.getPixelBounds(),
            a = e.getPixelOrigin(),
            h = W(r.min._subtract(a).add(o), r.max._subtract(a).subtract(o));
          if (!h.contains(s)) {
            var u = g(
              (Math.max(h.max.x, s.x) - h.max.x) / (r.max.x - h.max.x) -
                (Math.min(h.min.x, s.x) - h.min.x) / (r.min.x - h.min.x),
              (Math.max(h.max.y, s.y) - h.max.y) / (r.max.y - h.max.y) -
                (Math.min(h.min.y, s.y) - h.min.y) / (r.min.y - h.min.y)
            ).multiplyBy(n);
            e.panBy(u, { animate: !1 }),
              this._draggable._newPos._add(u),
              this._draggable._startPos._add(u),
              O(i._icon, this._draggable._newPos),
              this._onDrag(t),
              (this._panRequest = N(this._adjustPan.bind(this, t)));
          }
        },
        _onDragStart: function () {
          (this._oldLatLng = this._marker.getLatLng()),
            this._marker.closePopup && this._marker.closePopup(),
            this._marker.fire('movestart').fire('dragstart');
        },
        _onPreDrag: function (t) {
          this._marker.options.autoPan &&
            (H(this._panRequest), (this._panRequest = N(this._adjustPan.bind(this, t))));
        },
        _onDrag: function (t) {
          var i = this._marker,
            e = i._shadow,
            n = lt(i._icon),
            o = i._map.layerPointToLatLng(n);
          e && O(e, n),
            (i._latlng = o),
            (t.latlng = o),
            (t.oldLatLng = this._oldLatLng),
            i.fire('move', t).fire('drag', t);
        },
        _onDragEnd: function (t) {
          H(this._panRequest),
            delete this._oldLatLng,
            this._marker.fire('moveend').fire('dragend', t);
        }
      }),
      $t = G.extend({
        options: {
          icon: new Nt(),
          interactive: !0,
          keyboard: !0,
          title: '',
          alt: 'Marker',
          zIndexOffset: 0,
          opacity: 1,
          riseOnHover: !1,
          riseOffset: 250,
          pane: 'markerPane',
          shadowPane: 'shadowPane',
          bubblingMouseEvents: !1,
          autoPanOnFocus: !0,
          draggable: !1,
          autoPan: !1,
          autoPanPadding: [50, 50],
          autoPanSpeed: 10
        },
        initialize: function (t, i) {
          C(this, i), (this._latlng = S(t));
        },
        onAdd: function (t) {
          (this._zoomAnimated = this._zoomAnimated && t.options.markerZoomAnimation),
            this._zoomAnimated && t.on('zoomanim', this._animateZoom, this),
            this._initIcon(),
            this.update();
        },
        onRemove: function (t) {
          this.dragging &&
            this.dragging.enabled() &&
            ((this.options.draggable = !0), this.dragging.removeHooks()),
            delete this.dragging,
            this._zoomAnimated && t.off('zoomanim', this._animateZoom, this),
            this._removeIcon(),
            this._removeShadow();
        },
        getEvents: function () {
          return { zoom: this.update, viewreset: this.update };
        },
        getLatLng: function () {
          return this._latlng;
        },
        setLatLng: function (t) {
          var i = this._latlng;
          return (
            (this._latlng = S(t)),
            this.update(),
            this.fire('move', { oldLatLng: i, latlng: this._latlng })
          );
        },
        setZIndexOffset: function (t) {
          return (this.options.zIndexOffset = t), this.update();
        },
        getIcon: function () {
          return this.options.icon;
        },
        setIcon: function (t) {
          return (
            (this.options.icon = t),
            this._map && (this._initIcon(), this.update()),
            this._popup && this.bindPopup(this._popup, this._popup.options),
            this
          );
        },
        getElement: function () {
          return this._icon;
        },
        update: function () {
          if (this._icon && this._map) {
            var t = this._map.latLngToLayerPoint(this._latlng).round();
            this._setPos(t);
          }
          return this;
        },
        _initIcon: function () {
          var t = this.options,
            i = 'leaflet-zoom-' + (this._zoomAnimated ? 'animated' : 'hide'),
            e = t.icon.createIcon(this._icon),
            n = !1;
          e !== this._icon &&
            (this._icon && this._removeIcon(),
            (n = !0),
            t.title && (e.title = t.title),
            e.tagName === 'IMG' && (e.alt = t.alt || '')),
            m(e, i),
            t.keyboard && ((e.tabIndex = '0'), e.setAttribute('role', 'button')),
            (this._icon = e),
            t.riseOnHover &&
              this.on({ mouseover: this._bringToFront, mouseout: this._resetZIndex }),
            this.options.autoPanOnFocus && _(e, 'focus', this._panOnFocus, this);
          var o = t.icon.createShadow(this._shadow),
            s = !1;
          o !== this._shadow && (this._removeShadow(), (s = !0)),
            o && (m(o, i), (o.alt = '')),
            (this._shadow = o),
            t.opacity < 1 && this._updateOpacity(),
            n && this.getPane().appendChild(this._icon),
            this._initInteraction(),
            o && s && this.getPane(t.shadowPane).appendChild(this._shadow);
        },
        _removeIcon: function () {
          this.options.riseOnHover &&
            this.off({ mouseover: this._bringToFront, mouseout: this._resetZIndex }),
            this.options.autoPanOnFocus && b(this._icon, 'focus', this._panOnFocus, this),
            k(this._icon),
            this.removeInteractiveTarget(this._icon),
            (this._icon = null);
        },
        _removeShadow: function () {
          this._shadow && k(this._shadow), (this._shadow = null);
        },
        _setPos: function (t) {
          this._icon && O(this._icon, t),
            this._shadow && O(this._shadow, t),
            (this._zIndex = t.y + this.options.zIndexOffset),
            this._resetZIndex();
        },
        _updateZIndex: function (t) {
          this._icon && (this._icon.style.zIndex = this._zIndex + t);
        },
        _animateZoom: function (t) {
          var i = this._map._latLngToNewLayerPoint(this._latlng, t.zoom, t.center).round();
          this._setPos(i);
        },
        _initInteraction: function () {
          if (
            !!this.options.interactive &&
            (m(this._icon, 'leaflet-interactive'), this.addInteractiveTarget(this._icon), Ue)
          ) {
            var t = this.options.draggable;
            this.dragging && ((t = this.dragging.enabled()), this.dragging.disable()),
              (this.dragging = new Ue(this)),
              t && this.dragging.enable();
          }
        },
        setOpacity: function (t) {
          return (this.options.opacity = t), this._map && this._updateOpacity(), this;
        },
        _updateOpacity: function () {
          var t = this.options.opacity;
          this._icon && F(this._icon, t), this._shadow && F(this._shadow, t);
        },
        _bringToFront: function () {
          this._updateZIndex(this.options.riseOffset);
        },
        _resetZIndex: function () {
          this._updateZIndex(0);
        },
        _panOnFocus: function () {
          var t = this._map;
          if (!!t) {
            var i = this.options.icon.options,
              e = i.iconSize ? g(i.iconSize) : g(0, 0),
              n = i.iconAnchor ? g(i.iconAnchor) : g(0, 0);
            t.panInside(this._latlng, { paddingTopLeft: n, paddingBottomRight: e.subtract(n) });
          }
        },
        _getPopupAnchor: function () {
          return this.options.icon.options.popupAnchor;
        },
        _getTooltipAnchor: function () {
          return this.options.icon.options.tooltipAnchor;
        }
      });
    function co(t, i) {
      return new $t(t, i);
    }
    var at = G.extend({
        options: {
          stroke: !0,
          color: '#3388ff',
          weight: 3,
          opacity: 1,
          lineCap: 'round',
          lineJoin: 'round',
          dashArray: null,
          dashOffset: null,
          fill: !1,
          fillColor: null,
          fillOpacity: 0.2,
          fillRule: 'evenodd',
          interactive: !0,
          bubblingMouseEvents: !0
        },
        beforeAdd: function (t) {
          this._renderer = t.getRenderer(this);
        },
        onAdd: function () {
          this._renderer._initPath(this), this._reset(), this._renderer._addPath(this);
        },
        onRemove: function () {
          this._renderer._removePath(this);
        },
        redraw: function () {
          return this._map && this._renderer._updatePath(this), this;
        },
        setStyle: function (t) {
          return (
            C(this, t),
            this._renderer &&
              (this._renderer._updateStyle(this),
              this.options.stroke &&
                t &&
                Object.prototype.hasOwnProperty.call(t, 'weight') &&
                this._updateBounds()),
            this
          );
        },
        bringToFront: function () {
          return this._renderer && this._renderer._bringToFront(this), this;
        },
        bringToBack: function () {
          return this._renderer && this._renderer._bringToBack(this), this;
        },
        getElement: function () {
          return this._path;
        },
        _reset: function () {
          this._project(), this._update();
        },
        _clickTolerance: function () {
          return (
            (this.options.stroke ? this.options.weight / 2 : 0) +
            (this._renderer.options.tolerance || 0)
          );
        }
      }),
      Qt = at.extend({
        options: { fill: !0, radius: 10 },
        initialize: function (t, i) {
          C(this, i), (this._latlng = S(t)), (this._radius = this.options.radius);
        },
        setLatLng: function (t) {
          var i = this._latlng;
          return (
            (this._latlng = S(t)),
            this.redraw(),
            this.fire('move', { oldLatLng: i, latlng: this._latlng })
          );
        },
        getLatLng: function () {
          return this._latlng;
        },
        setRadius: function (t) {
          return (this.options.radius = this._radius = t), this.redraw();
        },
        getRadius: function () {
          return this._radius;
        },
        setStyle: function (t) {
          var i = (t && t.radius) || this._radius;
          return at.prototype.setStyle.call(this, t), this.setRadius(i), this;
        },
        _project: function () {
          (this._point = this._map.latLngToLayerPoint(this._latlng)), this._updateBounds();
        },
        _updateBounds: function () {
          var t = this._radius,
            i = this._radiusY || t,
            e = this._clickTolerance(),
            n = [t + e, i + e];
          this._pxBounds = new z(this._point.subtract(n), this._point.add(n));
        },
        _update: function () {
          this._map && this._updatePath();
        },
        _updatePath: function () {
          this._renderer._updateCircle(this);
        },
        _empty: function () {
          return this._radius && !this._renderer._bounds.intersects(this._pxBounds);
        },
        _containsPoint: function (t) {
          return t.distanceTo(this._point) <= this._radius + this._clickTolerance();
        }
      });
    function fo(t, i) {
      return new Qt(t, i);
    }
    var Ui = Qt.extend({
      initialize: function (t, i, e) {
        if (
          (typeof i == 'number' && (i = x({}, e, { radius: i })),
          C(this, i),
          (this._latlng = S(t)),
          isNaN(this.options.radius))
        )
          throw new Error('Circle radius cannot be NaN');
        this._mRadius = this.options.radius;
      },
      setRadius: function (t) {
        return (this._mRadius = t), this.redraw();
      },
      getRadius: function () {
        return this._mRadius;
      },
      getBounds: function () {
        var t = [this._radius, this._radiusY || this._radius];
        return new R(
          this._map.layerPointToLatLng(this._point.subtract(t)),
          this._map.layerPointToLatLng(this._point.add(t))
        );
      },
      setStyle: at.prototype.setStyle,
      _project: function () {
        var t = this._latlng.lng,
          i = this._latlng.lat,
          e = this._map,
          n = e.options.crs;
        if (n.distance === st.distance) {
          var o = Math.PI / 180,
            s = this._mRadius / st.R / o,
            r = e.project([i + s, t]),
            a = e.project([i - s, t]),
            h = r.add(a).divideBy(2),
            u = e.unproject(h).lat,
            c =
              Math.acos(
                (Math.cos(s * o) - Math.sin(i * o) * Math.sin(u * o)) /
                  (Math.cos(i * o) * Math.cos(u * o))
              ) / o;
          (isNaN(c) || c === 0) && (c = s / Math.cos((Math.PI / 180) * i)),
            (this._point = h.subtract(e.getPixelOrigin())),
            (this._radius = isNaN(c) ? 0 : h.x - e.project([u, t - c]).x),
            (this._radiusY = h.y - r.y);
        } else {
          var p = n.unproject(n.project(this._latlng).subtract([this._mRadius, 0]));
          (this._point = e.latLngToLayerPoint(this._latlng)),
            (this._radius = this._point.x - e.latLngToLayerPoint(p).x);
        }
        this._updateBounds();
      }
    });
    function _o(t, i, e) {
      return new Ui(t, i, e);
    }
    var it = at.extend({
      options: { smoothFactor: 1, noClip: !1 },
      initialize: function (t, i) {
        C(this, i), this._setLatLngs(t);
      },
      getLatLngs: function () {
        return this._latlngs;
      },
      setLatLngs: function (t) {
        return this._setLatLngs(t), this.redraw();
      },
      isEmpty: function () {
        return !this._latlngs.length;
      },
      closestLayerPoint: function (t) {
        for (var i = 1 / 0, e = null, n = Bt, o, s, r = 0, a = this._parts.length; r < a; r++)
          for (var h = this._parts[r], u = 1, c = h.length; u < c; u++) {
            (o = h[u - 1]), (s = h[u]);
            var p = n(t, o, s, !0);
            p < i && ((i = p), (e = n(t, o, s)));
          }
        return e && (e.distance = Math.sqrt(i)), e;
      },
      getCenter: function () {
        if (!this._map) throw new Error('Must add layer to map before using getCenter()');
        var t,
          i,
          e,
          n,
          o,
          s,
          r,
          a = this._rings[0],
          h = a.length;
        if (!h) return null;
        for (t = 0, i = 0; t < h - 1; t++) i += a[t].distanceTo(a[t + 1]) / 2;
        if (i === 0) return this._map.layerPointToLatLng(a[0]);
        for (t = 0, n = 0; t < h - 1; t++)
          if (((o = a[t]), (s = a[t + 1]), (e = o.distanceTo(s)), (n += e), n > i))
            return (
              (r = (n - i) / e),
              this._map.layerPointToLatLng([s.x - r * (s.x - o.x), s.y - r * (s.y - o.y)])
            );
      },
      getBounds: function () {
        return this._bounds;
      },
      addLatLng: function (t, i) {
        return (
          (i = i || this._defaultShape()),
          (t = S(t)),
          i.push(t),
          this._bounds.extend(t),
          this.redraw()
        );
      },
      _setLatLngs: function (t) {
        (this._bounds = new R()), (this._latlngs = this._convertLatLngs(t));
      },
      _defaultShape: function () {
        return tt(this._latlngs) ? this._latlngs : this._latlngs[0];
      },
      _convertLatLngs: function (t) {
        for (var i = [], e = tt(t), n = 0, o = t.length; n < o; n++)
          e ? ((i[n] = S(t[n])), this._bounds.extend(i[n])) : (i[n] = this._convertLatLngs(t[n]));
        return i;
      },
      _project: function () {
        var t = new z();
        (this._rings = []),
          this._projectLatlngs(this._latlngs, this._rings, t),
          this._bounds.isValid() && t.isValid() && ((this._rawPxBounds = t), this._updateBounds());
      },
      _updateBounds: function () {
        var t = this._clickTolerance(),
          i = new d(t, t);
        !this._rawPxBounds ||
          (this._pxBounds = new z([
            this._rawPxBounds.min.subtract(i),
            this._rawPxBounds.max.add(i)
          ]));
      },
      _projectLatlngs: function (t, i, e) {
        var n = t[0] instanceof T,
          o = t.length,
          s,
          r;
        if (n) {
          for (r = [], s = 0; s < o; s++)
            (r[s] = this._map.latLngToLayerPoint(t[s])), e.extend(r[s]);
          i.push(r);
        } else for (s = 0; s < o; s++) this._projectLatlngs(t[s], i, e);
      },
      _clipPoints: function () {
        var t = this._renderer._bounds;
        if (((this._parts = []), !(!this._pxBounds || !this._pxBounds.intersects(t)))) {
          if (this.options.noClip) {
            this._parts = this._rings;
            return;
          }
          var i = this._parts,
            e,
            n,
            o,
            s,
            r,
            a,
            h;
          for (e = 0, o = 0, s = this._rings.length; e < s; e++)
            for (h = this._rings[e], n = 0, r = h.length; n < r - 1; n++)
              (a = De(h[n], h[n + 1], t, n, !0)),
                a &&
                  ((i[o] = i[o] || []),
                  i[o].push(a[0]),
                  (a[1] !== h[n + 1] || n === r - 2) && (i[o].push(a[1]), o++));
        }
      },
      _simplifyPoints: function () {
        for (var t = this._parts, i = this.options.smoothFactor, e = 0, n = t.length; e < n; e++)
          t[e] = Be(t[e], i);
      },
      _update: function () {
        !this._map || (this._clipPoints(), this._simplifyPoints(), this._updatePath());
      },
      _updatePath: function () {
        this._renderer._updatePoly(this);
      },
      _containsPoint: function (t, i) {
        var e,
          n,
          o,
          s,
          r,
          a,
          h = this._clickTolerance();
        if (!this._pxBounds || !this._pxBounds.contains(t)) return !1;
        for (e = 0, s = this._parts.length; e < s; e++)
          for (a = this._parts[e], n = 0, r = a.length, o = r - 1; n < r; o = n++)
            if (!(!i && n === 0) && Ne(t, a[o], a[n]) <= h) return !0;
        return !1;
      }
    });
    function mo(t, i) {
      return new it(t, i);
    }
    it._flat = He;
    var xt = it.extend({
      options: { fill: !0 },
      isEmpty: function () {
        return !this._latlngs.length || !this._latlngs[0].length;
      },
      getCenter: function () {
        if (!this._map) throw new Error('Must add layer to map before using getCenter()');
        var t,
          i,
          e,
          n,
          o,
          s,
          r,
          a,
          h,
          u = this._rings[0],
          c = u.length;
        if (!c) return null;
        for (s = r = a = 0, t = 0, i = c - 1; t < c; i = t++)
          (e = u[t]),
            (n = u[i]),
            (o = e.y * n.x - n.y * e.x),
            (r += (e.x + n.x) * o),
            (a += (e.y + n.y) * o),
            (s += o * 3);
        return s === 0 ? (h = u[0]) : (h = [r / s, a / s]), this._map.layerPointToLatLng(h);
      },
      _convertLatLngs: function (t) {
        var i = it.prototype._convertLatLngs.call(this, t),
          e = i.length;
        return e >= 2 && i[0] instanceof T && i[0].equals(i[e - 1]) && i.pop(), i;
      },
      _setLatLngs: function (t) {
        it.prototype._setLatLngs.call(this, t),
          tt(this._latlngs) && (this._latlngs = [this._latlngs]);
      },
      _defaultShape: function () {
        return tt(this._latlngs[0]) ? this._latlngs[0] : this._latlngs[0][0];
      },
      _clipPoints: function () {
        var t = this._renderer._bounds,
          i = this.options.weight,
          e = new d(i, i);
        if (
          ((t = new z(t.min.subtract(e), t.max.add(e))),
          (this._parts = []),
          !(!this._pxBounds || !this._pxBounds.intersects(t)))
        ) {
          if (this.options.noClip) {
            this._parts = this._rings;
            return;
          }
          for (var n = 0, o = this._rings.length, s; n < o; n++)
            (s = Fe(this._rings[n], t, !0)), s.length && this._parts.push(s);
        }
      },
      _updatePath: function () {
        this._renderer._updatePoly(this, !0);
      },
      _containsPoint: function (t) {
        var i = !1,
          e,
          n,
          o,
          s,
          r,
          a,
          h,
          u;
        if (!this._pxBounds || !this._pxBounds.contains(t)) return !1;
        for (s = 0, h = this._parts.length; s < h; s++)
          for (e = this._parts[s], r = 0, u = e.length, a = u - 1; r < u; a = r++)
            (n = e[r]),
              (o = e[a]),
              n.y > t.y != o.y > t.y &&
                t.x < ((o.x - n.x) * (t.y - n.y)) / (o.y - n.y) + n.x &&
                (i = !i);
        return i || it.prototype._containsPoint.call(this, t, !0);
      }
    });
    function po(t, i) {
      return new xt(t, i);
    }
    var et = wt.extend({
      initialize: function (t, i) {
        C(this, i), (this._layers = {}), t && this.addData(t);
      },
      addData: function (t) {
        var i = q(t) ? t : t.features,
          e,
          n,
          o;
        if (i) {
          for (e = 0, n = i.length; e < n; e++)
            (o = i[e]),
              (o.geometries || o.geometry || o.features || o.coordinates) && this.addData(o);
          return this;
        }
        var s = this.options;
        if (s.filter && !s.filter(t)) return this;
        var r = Gi(t, s);
        return r
          ? ((r.feature = ei(t)),
            (r.defaultOptions = r.options),
            this.resetStyle(r),
            s.onEachFeature && s.onEachFeature(t, r),
            this.addLayer(r))
          : this;
      },
      resetStyle: function (t) {
        return t === void 0
          ? this.eachLayer(this.resetStyle, this)
          : ((t.options = x({}, t.defaultOptions)),
            this._setLayerStyle(t, this.options.style),
            this);
      },
      setStyle: function (t) {
        return this.eachLayer(function (i) {
          this._setLayerStyle(i, t);
        }, this);
      },
      _setLayerStyle: function (t, i) {
        t.setStyle && (typeof i == 'function' && (i = i(t.feature)), t.setStyle(i));
      }
    });
    function Gi(t, i) {
      var e = t.type === 'Feature' ? t.geometry : t,
        n = e ? e.coordinates : null,
        o = [],
        s = i && i.pointToLayer,
        r = (i && i.coordsToLatLng) || Vi,
        a,
        h,
        u,
        c;
      if (!n && !e) return null;
      switch (e.type) {
        case 'Point':
          return (a = r(n)), Ge(s, t, a, i);
        case 'MultiPoint':
          for (u = 0, c = n.length; u < c; u++) (a = r(n[u])), o.push(Ge(s, t, a, i));
          return new wt(o);
        case 'LineString':
        case 'MultiLineString':
          return (h = ti(n, e.type === 'LineString' ? 0 : 1, r)), new it(h, i);
        case 'Polygon':
        case 'MultiPolygon':
          return (h = ti(n, e.type === 'Polygon' ? 1 : 2, r)), new xt(h, i);
        case 'GeometryCollection':
          for (u = 0, c = e.geometries.length; u < c; u++) {
            var p = Gi({ geometry: e.geometries[u], type: 'Feature', properties: t.properties }, i);
            p && o.push(p);
          }
          return new wt(o);
        default:
          throw new Error('Invalid GeoJSON object.');
      }
    }
    function Ge(t, i, e, n) {
      return t ? t(i, e) : new $t(e, n && n.markersInheritOptions && n);
    }
    function Vi(t) {
      return new T(t[1], t[0], t[2]);
    }
    function ti(t, i, e) {
      for (var n = [], o = 0, s = t.length, r; o < s; o++)
        (r = i ? ti(t[o], i - 1, e) : (e || Vi)(t[o])), n.push(r);
      return n;
    }
    function qi(t, i) {
      return (
        (t = S(t)),
        t.alt !== void 0 ? [V(t.lng, i), V(t.lat, i), V(t.alt, i)] : [V(t.lng, i), V(t.lat, i)]
      );
    }
    function ii(t, i, e, n) {
      for (var o = [], s = 0, r = t.length; s < r; s++)
        o.push(i ? ii(t[s], i - 1, e, n) : qi(t[s], n));
      return !i && e && o.push(o[0]), o;
    }
    function Lt(t, i) {
      return t.feature ? x({}, t.feature, { geometry: i }) : ei(i);
    }
    function ei(t) {
      return t.type === 'Feature' || t.type === 'FeatureCollection'
        ? t
        : { type: 'Feature', properties: {}, geometry: t };
    }
    var ji = {
      toGeoJSON: function (t) {
        return Lt(this, { type: 'Point', coordinates: qi(this.getLatLng(), t) });
      }
    };
    $t.include(ji),
      Ui.include(ji),
      Qt.include(ji),
      it.include({
        toGeoJSON: function (t) {
          var i = !tt(this._latlngs),
            e = ii(this._latlngs, i ? 1 : 0, !1, t);
          return Lt(this, { type: (i ? 'Multi' : '') + 'LineString', coordinates: e });
        }
      }),
      xt.include({
        toGeoJSON: function (t) {
          var i = !tt(this._latlngs),
            e = i && !tt(this._latlngs[0]),
            n = ii(this._latlngs, e ? 2 : i ? 1 : 0, !0, t);
          return i || (n = [n]), Lt(this, { type: (e ? 'Multi' : '') + 'Polygon', coordinates: n });
        }
      }),
      yt.include({
        toMultiPoint: function (t) {
          var i = [];
          return (
            this.eachLayer(function (e) {
              i.push(e.toGeoJSON(t).geometry.coordinates);
            }),
            Lt(this, { type: 'MultiPoint', coordinates: i })
          );
        },
        toGeoJSON: function (t) {
          var i = this.feature && this.feature.geometry && this.feature.geometry.type;
          if (i === 'MultiPoint') return this.toMultiPoint(t);
          var e = i === 'GeometryCollection',
            n = [];
          return (
            this.eachLayer(function (o) {
              if (o.toGeoJSON) {
                var s = o.toGeoJSON(t);
                if (e) n.push(s.geometry);
                else {
                  var r = ei(s);
                  r.type === 'FeatureCollection' ? n.push.apply(n, r.features) : n.push(r);
                }
              }
            }),
            e
              ? Lt(this, { geometries: n, type: 'GeometryCollection' })
              : { type: 'FeatureCollection', features: n }
          );
        }
      });
    function Ve(t, i) {
      return new et(t, i);
    }
    var go = Ve,
      ni = G.extend({
        options: {
          opacity: 1,
          alt: '',
          interactive: !1,
          crossOrigin: !1,
          errorOverlayUrl: '',
          zIndex: 1,
          className: ''
        },
        initialize: function (t, i, e) {
          (this._url = t), (this._bounds = A(i)), C(this, e);
        },
        onAdd: function () {
          this._image || (this._initImage(), this.options.opacity < 1 && this._updateOpacity()),
            this.options.interactive &&
              (m(this._image, 'leaflet-interactive'), this.addInteractiveTarget(this._image)),
            this.getPane().appendChild(this._image),
            this._reset();
        },
        onRemove: function () {
          k(this._image), this.options.interactive && this.removeInteractiveTarget(this._image);
        },
        setOpacity: function (t) {
          return (this.options.opacity = t), this._image && this._updateOpacity(), this;
        },
        setStyle: function (t) {
          return t.opacity && this.setOpacity(t.opacity), this;
        },
        bringToFront: function () {
          return this._map && gt(this._image), this;
        },
        bringToBack: function () {
          return this._map && vt(this._image), this;
        },
        setUrl: function (t) {
          return (this._url = t), this._image && (this._image.src = t), this;
        },
        setBounds: function (t) {
          return (this._bounds = A(t)), this._map && this._reset(), this;
        },
        getEvents: function () {
          var t = { zoom: this._reset, viewreset: this._reset };
          return this._zoomAnimated && (t.zoomanim = this._animateZoom), t;
        },
        setZIndex: function (t) {
          return (this.options.zIndex = t), this._updateZIndex(), this;
        },
        getBounds: function () {
          return this._bounds;
        },
        getElement: function () {
          return this._image;
        },
        _initImage: function () {
          var t = this._url.tagName === 'IMG',
            i = (this._image = t ? this._url : w('img'));
          if (
            (m(i, 'leaflet-image-layer'),
            this._zoomAnimated && m(i, 'leaflet-zoom-animated'),
            this.options.className && m(i, this.options.className),
            (i.onselectstart = Z),
            (i.onmousemove = Z),
            (i.onload = M(this.fire, this, 'load')),
            (i.onerror = M(this._overlayOnError, this, 'error')),
            (this.options.crossOrigin || this.options.crossOrigin === '') &&
              (i.crossOrigin = this.options.crossOrigin === !0 ? '' : this.options.crossOrigin),
            this.options.zIndex && this._updateZIndex(),
            t)
          ) {
            this._url = i.src;
            return;
          }
          (i.src = this._url), (i.alt = this.options.alt);
        },
        _animateZoom: function (t) {
          var i = this._map.getZoomScale(t.zoom),
            e = this._map._latLngBoundsToNewLayerBounds(this._bounds, t.zoom, t.center).min;
          ut(this._image, e, i);
        },
        _reset: function () {
          var t = this._image,
            i = new z(
              this._map.latLngToLayerPoint(this._bounds.getNorthWest()),
              this._map.latLngToLayerPoint(this._bounds.getSouthEast())
            ),
            e = i.getSize();
          O(t, i.min), (t.style.width = e.x + 'px'), (t.style.height = e.y + 'px');
        },
        _updateOpacity: function () {
          F(this._image, this.options.opacity);
        },
        _updateZIndex: function () {
          this._image &&
            this.options.zIndex !== void 0 &&
            this.options.zIndex !== null &&
            (this._image.style.zIndex = this.options.zIndex);
        },
        _overlayOnError: function () {
          this.fire('error');
          var t = this.options.errorOverlayUrl;
          t && this._url !== t && ((this._url = t), (this._image.src = t));
        },
        getCenter: function () {
          return this._bounds.getCenter();
        }
      }),
      vo = function (t, i, e) {
        return new ni(t, i, e);
      },
      qe = ni.extend({
        options: { autoplay: !0, loop: !0, keepAspectRatio: !0, muted: !1, playsInline: !0 },
        _initImage: function () {
          var t = this._url.tagName === 'VIDEO',
            i = (this._image = t ? this._url : w('video'));
          if (
            (m(i, 'leaflet-image-layer'),
            this._zoomAnimated && m(i, 'leaflet-zoom-animated'),
            this.options.className && m(i, this.options.className),
            (i.onselectstart = Z),
            (i.onmousemove = Z),
            (i.onloadeddata = M(this.fire, this, 'load')),
            t)
          ) {
            for (var e = i.getElementsByTagName('source'), n = [], o = 0; o < e.length; o++)
              n.push(e[o].src);
            this._url = e.length > 0 ? n : [i.src];
            return;
          }
          q(this._url) || (this._url = [this._url]),
            !this.options.keepAspectRatio &&
              Object.prototype.hasOwnProperty.call(i.style, 'objectFit') &&
              (i.style.objectFit = 'fill'),
            (i.autoplay = !!this.options.autoplay),
            (i.loop = !!this.options.loop),
            (i.muted = !!this.options.muted),
            (i.playsInline = !!this.options.playsInline);
          for (var s = 0; s < this._url.length; s++) {
            var r = w('source');
            (r.src = this._url[s]), i.appendChild(r);
          }
        }
      });
    function yo(t, i, e) {
      return new qe(t, i, e);
    }
    var je = ni.extend({
      _initImage: function () {
        var t = (this._image = this._url);
        m(t, 'leaflet-image-layer'),
          this._zoomAnimated && m(t, 'leaflet-zoom-animated'),
          this.options.className && m(t, this.options.className),
          (t.onselectstart = Z),
          (t.onmousemove = Z);
      }
    });
    function wo(t, i, e) {
      return new je(t, i, e);
    }
    var X = G.extend({
      options: { interactive: !1, offset: [0, 0], className: '', pane: void 0 },
      initialize: function (t, i) {
        C(this, t), (this._source = i);
      },
      openOn: function (t) {
        return (
          (t = arguments.length ? t : this._source._map), t.hasLayer(this) || t.addLayer(this), this
        );
      },
      close: function () {
        return this._map && this._map.removeLayer(this), this;
      },
      toggle: function (t) {
        return (
          this._map
            ? this.close()
            : (arguments.length ? (this._source = t) : (t = this._source),
              this._prepareOpen(),
              this.openOn(t._map)),
          this
        );
      },
      onAdd: function (t) {
        (this._zoomAnimated = t._zoomAnimated),
          this._container || this._initLayout(),
          t._fadeAnimated && F(this._container, 0),
          clearTimeout(this._removeTimeout),
          this.getPane().appendChild(this._container),
          this.update(),
          t._fadeAnimated && F(this._container, 1),
          this.bringToFront(),
          this.options.interactive &&
            (m(this._container, 'leaflet-interactive'), this.addInteractiveTarget(this._container));
      },
      onRemove: function (t) {
        t._fadeAnimated
          ? (F(this._container, 0),
            (this._removeTimeout = setTimeout(M(k, void 0, this._container), 200)))
          : k(this._container),
          this.options.interactive &&
            (E(this._container, 'leaflet-interactive'),
            this.removeInteractiveTarget(this._container));
      },
      getLatLng: function () {
        return this._latlng;
      },
      setLatLng: function (t) {
        return (
          (this._latlng = S(t)), this._map && (this._updatePosition(), this._adjustPan()), this
        );
      },
      getContent: function () {
        return this._content;
      },
      setContent: function (t) {
        return (this._content = t), this.update(), this;
      },
      getElement: function () {
        return this._container;
      },
      update: function () {
        !this._map ||
          ((this._container.style.visibility = 'hidden'),
          this._updateContent(),
          this._updateLayout(),
          this._updatePosition(),
          (this._container.style.visibility = ''),
          this._adjustPan());
      },
      getEvents: function () {
        var t = { zoom: this._updatePosition, viewreset: this._updatePosition };
        return this._zoomAnimated && (t.zoomanim = this._animateZoom), t;
      },
      isOpen: function () {
        return !!this._map && this._map.hasLayer(this);
      },
      bringToFront: function () {
        return this._map && gt(this._container), this;
      },
      bringToBack: function () {
        return this._map && vt(this._container), this;
      },
      _prepareOpen: function (t) {
        var i = this._source;
        if (!i._map) return !1;
        if (i instanceof wt) {
          i = null;
          var e = this._source._layers;
          for (var n in e)
            if (e[n]._map) {
              i = e[n];
              break;
            }
          if (!i) return !1;
          this._source = i;
        }
        if (!t)
          if (i.getCenter) t = i.getCenter();
          else if (i.getLatLng) t = i.getLatLng();
          else if (i.getBounds) t = i.getBounds().getCenter();
          else throw new Error('Unable to get source layer LatLng.');
        return this.setLatLng(t), this._map && this.update(), !0;
      },
      _updateContent: function () {
        if (!!this._content) {
          var t = this._contentNode,
            i =
              typeof this._content == 'function'
                ? this._content(this._source || this)
                : this._content;
          if (typeof i == 'string') t.innerHTML = i;
          else {
            for (; t.hasChildNodes(); ) t.removeChild(t.firstChild);
            t.appendChild(i);
          }
          this.fire('contentupdate');
        }
      },
      _updatePosition: function () {
        if (!!this._map) {
          var t = this._map.latLngToLayerPoint(this._latlng),
            i = g(this.options.offset),
            e = this._getAnchor();
          this._zoomAnimated ? O(this._container, t.add(e)) : (i = i.add(t).add(e));
          var n = (this._containerBottom = -i.y),
            o = (this._containerLeft = -Math.round(this._containerWidth / 2) + i.x);
          (this._container.style.bottom = n + 'px'), (this._container.style.left = o + 'px');
        }
      },
      _getAnchor: function () {
        return [0, 0];
      }
    });
    v.include({
      _initOverlay: function (t, i, e, n) {
        var o = i;
        return o instanceof t || (o = new t(n).setContent(i)), e && o.setLatLng(e), o;
      }
    }),
      G.include({
        _initOverlay: function (t, i, e, n) {
          var o = e;
          return (
            o instanceof t
              ? (C(o, n), (o._source = this))
              : ((o = i && !n ? i : new t(n, this)), o.setContent(e)),
            o
          );
        }
      });
    var oi = X.extend({
        options: {
          pane: 'popupPane',
          offset: [0, 7],
          maxWidth: 300,
          minWidth: 50,
          maxHeight: null,
          autoPan: !0,
          autoPanPaddingTopLeft: null,
          autoPanPaddingBottomRight: null,
          autoPanPadding: [5, 5],
          keepInView: !1,
          closeButton: !0,
          autoClose: !0,
          closeOnEscapeKey: !0,
          className: ''
        },
        openOn: function (t) {
          return (
            (t = arguments.length ? t : this._source._map),
            !t.hasLayer(this) && t._popup && t._popup.options.autoClose && t.removeLayer(t._popup),
            (t._popup = this),
            X.prototype.openOn.call(this, t)
          );
        },
        onAdd: function (t) {
          X.prototype.onAdd.call(this, t),
            t.fire('popupopen', { popup: this }),
            this._source &&
              (this._source.fire('popupopen', { popup: this }, !0),
              this._source instanceof at || this._source.on('preclick', ct));
        },
        onRemove: function (t) {
          X.prototype.onRemove.call(this, t),
            t.fire('popupclose', { popup: this }),
            this._source &&
              (this._source.fire('popupclose', { popup: this }, !0),
              this._source instanceof at || this._source.off('preclick', ct));
        },
        getEvents: function () {
          var t = X.prototype.getEvents.call(this);
          return (
            (this.options.closeOnClick !== void 0
              ? this.options.closeOnClick
              : this._map.options.closePopupOnClick) && (t.preclick = this.close),
            this.options.keepInView && (t.moveend = this._adjustPan),
            t
          );
        },
        _initLayout: function () {
          var t = 'leaflet-popup',
            i = (this._container = w(
              'div',
              t + ' ' + (this.options.className || '') + ' leaflet-zoom-animated'
            )),
            e = (this._wrapper = w('div', t + '-content-wrapper', i));
          if (
            ((this._contentNode = w('div', t + '-content', e)),
            It(i),
            Bi(this._contentNode),
            _(i, 'contextmenu', ct),
            (this._tipContainer = w('div', t + '-tip-container', i)),
            (this._tip = w('div', t + '-tip', this._tipContainer)),
            this.options.closeButton)
          ) {
            var n = (this._closeButton = w('a', t + '-close-button', i));
            n.setAttribute('role', 'button'),
              n.setAttribute('aria-label', 'Close popup'),
              (n.href = '#close'),
              (n.innerHTML = '<span aria-hidden="true">&#215;</span>'),
              _(n, 'click', this.close, this);
          }
        },
        _updateLayout: function () {
          var t = this._contentNode,
            i = t.style;
          (i.width = ''), (i.whiteSpace = 'nowrap');
          var e = t.offsetWidth;
          (e = Math.min(e, this.options.maxWidth)),
            (e = Math.max(e, this.options.minWidth)),
            (i.width = e + 1 + 'px'),
            (i.whiteSpace = ''),
            (i.height = '');
          var n = t.offsetHeight,
            o = this.options.maxHeight,
            s = 'leaflet-popup-scrolled';
          o && n > o ? ((i.height = o + 'px'), m(t, s)) : E(t, s),
            (this._containerWidth = this._container.offsetWidth);
        },
        _animateZoom: function (t) {
          var i = this._map._latLngToNewLayerPoint(this._latlng, t.zoom, t.center),
            e = this._getAnchor();
          O(this._container, i.add(e));
        },
        _adjustPan: function (t) {
          if (!!this.options.autoPan) {
            this._map._panAnim && this._map._panAnim.stop();
            var i = this._map,
              e = parseInt(kt(this._container, 'marginBottom'), 10) || 0,
              n = this._container.offsetHeight + e,
              o = this._containerWidth,
              s = new d(this._containerLeft, -n - this._containerBottom);
            s._add(lt(this._container));
            var r = i.layerPointToContainerPoint(s),
              a = g(this.options.autoPanPadding),
              h = g(this.options.autoPanPaddingTopLeft || a),
              u = g(this.options.autoPanPaddingBottomRight || a),
              c = i.getSize(),
              p = 0,
              y = 0;
            r.x + o + u.x > c.x && (p = r.x + o - c.x + u.x),
              r.x - p - h.x < 0 && (p = r.x - h.x),
              r.y + n + u.y > c.y && (y = r.y + n - c.y + u.y),
              r.y - y - h.y < 0 && (y = r.y - h.y),
              (p || y) &&
                i.fire('autopanstart').panBy([p, y], { animate: t && t.type === 'moveend' });
          }
        },
        _getAnchor: function () {
          return g(
            this._source && this._source._getPopupAnchor ? this._source._getPopupAnchor() : [0, 0]
          );
        }
      }),
      Po = function (t, i) {
        return new oi(t, i);
      };
    v.mergeOptions({ closePopupOnClick: !0 }),
      v.include({
        openPopup: function (t, i, e) {
          return this._initOverlay(oi, t, i, e).openOn(this), this;
        },
        closePopup: function (t) {
          return (t = arguments.length ? t : this._popup), t && t.close(), this;
        }
      }),
      G.include({
        bindPopup: function (t, i) {
          return (
            (this._popup = this._initOverlay(oi, this._popup, t, i)),
            this._popupHandlersAdded ||
              (this.on({
                click: this._openPopup,
                keypress: this._onKeyPress,
                remove: this.closePopup,
                move: this._movePopup
              }),
              (this._popupHandlersAdded = !0)),
            this
          );
        },
        unbindPopup: function () {
          return (
            this._popup &&
              (this.off({
                click: this._openPopup,
                keypress: this._onKeyPress,
                remove: this.closePopup,
                move: this._movePopup
              }),
              (this._popupHandlersAdded = !1),
              (this._popup = null)),
            this
          );
        },
        openPopup: function (t) {
          return this._popup && this._popup._prepareOpen(t) && this._popup.openOn(this._map), this;
        },
        closePopup: function () {
          return this._popup && this._popup.close(), this;
        },
        togglePopup: function () {
          return this._popup && this._popup.toggle(this), this;
        },
        isPopupOpen: function () {
          return this._popup ? this._popup.isOpen() : !1;
        },
        setPopupContent: function (t) {
          return this._popup && this._popup.setContent(t), this;
        },
        getPopup: function () {
          return this._popup;
        },
        _openPopup: function (t) {
          if (!(!this._popup || !this._map)) {
            ft(t);
            var i = t.layer || t.target;
            if (this._popup._source === i && !(i instanceof at)) {
              this._map.hasLayer(this._popup) ? this.closePopup() : this.openPopup(t.latlng);
              return;
            }
            (this._popup._source = i), this.openPopup(t.latlng);
          }
        },
        _movePopup: function (t) {
          this._popup.setLatLng(t.latlng);
        },
        _onKeyPress: function (t) {
          t.originalEvent.keyCode === 13 && this._openPopup(t);
        }
      });
    var si = X.extend({
        options: {
          pane: 'tooltipPane',
          offset: [0, 0],
          direction: 'auto',
          permanent: !1,
          sticky: !1,
          opacity: 0.9
        },
        onAdd: function (t) {
          X.prototype.onAdd.call(this, t),
            this.setOpacity(this.options.opacity),
            t.fire('tooltipopen', { tooltip: this }),
            this._source &&
              (this.addEventParent(this._source),
              this._source.fire('tooltipopen', { tooltip: this }, !0));
        },
        onRemove: function (t) {
          X.prototype.onRemove.call(this, t),
            t.fire('tooltipclose', { tooltip: this }),
            this._source &&
              (this.removeEventParent(this._source),
              this._source.fire('tooltipclose', { tooltip: this }, !0));
        },
        getEvents: function () {
          var t = X.prototype.getEvents.call(this);
          return this.options.permanent || (t.preclick = this.close), t;
        },
        _initLayout: function () {
          var t = 'leaflet-tooltip',
            i =
              t +
              ' ' +
              (this.options.className || '') +
              ' leaflet-zoom-' +
              (this._zoomAnimated ? 'animated' : 'hide');
          this._contentNode = this._container = w('div', i);
        },
        _updateLayout: function () {},
        _adjustPan: function () {},
        _setPosition: function (t) {
          var i,
            e,
            n = this._map,
            o = this._container,
            s = n.latLngToContainerPoint(n.getCenter()),
            r = n.layerPointToContainerPoint(t),
            a = this.options.direction,
            h = o.offsetWidth,
            u = o.offsetHeight,
            c = g(this.options.offset),
            p = this._getAnchor();
          a === 'top'
            ? ((i = h / 2), (e = u))
            : a === 'bottom'
            ? ((i = h / 2), (e = 0))
            : a === 'center'
            ? ((i = h / 2), (e = u / 2))
            : a === 'right'
            ? ((i = 0), (e = u / 2))
            : a === 'left'
            ? ((i = h), (e = u / 2))
            : r.x < s.x
            ? ((a = 'right'), (i = 0), (e = u / 2))
            : ((a = 'left'), (i = h + (c.x + p.x) * 2), (e = u / 2)),
            (t = t.subtract(g(i, e, !0)).add(c).add(p)),
            E(o, 'leaflet-tooltip-right'),
            E(o, 'leaflet-tooltip-left'),
            E(o, 'leaflet-tooltip-top'),
            E(o, 'leaflet-tooltip-bottom'),
            m(o, 'leaflet-tooltip-' + a),
            O(o, t);
        },
        _updatePosition: function () {
          var t = this._map.latLngToLayerPoint(this._latlng);
          this._setPosition(t);
        },
        setOpacity: function (t) {
          (this.options.opacity = t), this._container && F(this._container, t);
        },
        _animateZoom: function (t) {
          var i = this._map._latLngToNewLayerPoint(this._latlng, t.zoom, t.center);
          this._setPosition(i);
        },
        _getAnchor: function () {
          return g(
            this._source && this._source._getTooltipAnchor && !this.options.sticky
              ? this._source._getTooltipAnchor()
              : [0, 0]
          );
        }
      }),
      xo = function (t, i) {
        return new si(t, i);
      };
    v.include({
      openTooltip: function (t, i, e) {
        return this._initOverlay(si, t, i, e).openOn(this), this;
      },
      closeTooltip: function (t) {
        return t.close(), this;
      }
    }),
      G.include({
        bindTooltip: function (t, i) {
          return (
            this._tooltip && this.isTooltipOpen() && this.unbindTooltip(),
            (this._tooltip = this._initOverlay(si, this._tooltip, t, i)),
            this._initTooltipInteractions(),
            this._tooltip.options.permanent &&
              this._map &&
              this._map.hasLayer(this) &&
              this.openTooltip(),
            this
          );
        },
        unbindTooltip: function () {
          return (
            this._tooltip &&
              (this._initTooltipInteractions(!0), this.closeTooltip(), (this._tooltip = null)),
            this
          );
        },
        _initTooltipInteractions: function (t) {
          if (!(!t && this._tooltipHandlersAdded)) {
            var i = t ? 'off' : 'on',
              e = { remove: this.closeTooltip, move: this._moveTooltip };
            this._tooltip.options.permanent
              ? (e.add = this._openTooltip)
              : ((e.mouseover = this._openTooltip),
                (e.mouseout = this.closeTooltip),
                (e.click = this._openTooltip)),
              this._tooltip.options.sticky && (e.mousemove = this._moveTooltip),
              this[i](e),
              (this._tooltipHandlersAdded = !t);
          }
        },
        openTooltip: function (t) {
          return (
            this._tooltip && this._tooltip._prepareOpen(t) && this._tooltip.openOn(this._map), this
          );
        },
        closeTooltip: function () {
          if (this._tooltip) return this._tooltip.close();
        },
        toggleTooltip: function () {
          return this._tooltip && this._tooltip.toggle(this), this;
        },
        isTooltipOpen: function () {
          return this._tooltip.isOpen();
        },
        setTooltipContent: function (t) {
          return this._tooltip && this._tooltip.setContent(t), this;
        },
        getTooltip: function () {
          return this._tooltip;
        },
        _openTooltip: function (t) {
          !this._tooltip ||
            !this._map ||
            (this._map.dragging && this._map.dragging.moving()) ||
            ((this._tooltip._source = t.layer || t.target),
            this.openTooltip(this._tooltip.options.sticky ? t.latlng : void 0));
        },
        _moveTooltip: function (t) {
          var i = t.latlng,
            e,
            n;
          this._tooltip.options.sticky &&
            t.originalEvent &&
            ((e = this._map.mouseEventToContainerPoint(t.originalEvent)),
            (n = this._map.containerPointToLayerPoint(e)),
            (i = this._map.layerPointToLatLng(n))),
            this._tooltip.setLatLng(i);
        }
      });
    var Ke = Pt.extend({
      options: { iconSize: [12, 12], html: !1, bgPos: null, className: 'leaflet-div-icon' },
      createIcon: function (t) {
        var i = t && t.tagName === 'DIV' ? t : document.createElement('div'),
          e = this.options;
        if (
          (e.html instanceof Element
            ? (qt(i), i.appendChild(e.html))
            : (i.innerHTML = e.html !== !1 ? e.html : ''),
          e.bgPos)
        ) {
          var n = g(e.bgPos);
          i.style.backgroundPosition = -n.x + 'px ' + -n.y + 'px';
        }
        return this._setIconStyles(i, 'icon'), i;
      },
      createShadow: function () {
        return null;
      }
    });
    function Lo(t) {
      return new Ke(t);
    }
    Pt.Default = Nt;
    var Rt = G.extend({
      options: {
        tileSize: 256,
        opacity: 1,
        updateWhenIdle: f.mobile,
        updateWhenZooming: !0,
        updateInterval: 200,
        zIndex: 1,
        bounds: null,
        minZoom: 0,
        maxZoom: void 0,
        maxNativeZoom: void 0,
        minNativeZoom: void 0,
        noWrap: !1,
        pane: 'tilePane',
        className: '',
        keepBuffer: 2
      },
      initialize: function (t) {
        C(this, t);
      },
      onAdd: function () {
        this._initContainer(), (this._levels = {}), (this._tiles = {}), this._resetView();
      },
      beforeAdd: function (t) {
        t._addZoomLimit(this);
      },
      onRemove: function (t) {
        this._removeAllTiles(),
          k(this._container),
          t._removeZoomLimit(this),
          (this._container = null),
          (this._tileZoom = void 0);
      },
      bringToFront: function () {
        return this._map && (gt(this._container), this._setAutoZIndex(Math.max)), this;
      },
      bringToBack: function () {
        return this._map && (vt(this._container), this._setAutoZIndex(Math.min)), this;
      },
      getContainer: function () {
        return this._container;
      },
      setOpacity: function (t) {
        return (this.options.opacity = t), this._updateOpacity(), this;
      },
      setZIndex: function (t) {
        return (this.options.zIndex = t), this._updateZIndex(), this;
      },
      isLoading: function () {
        return this._loading;
      },
      redraw: function () {
        if (this._map) {
          this._removeAllTiles();
          var t = this._clampZoom(this._map.getZoom());
          t !== this._tileZoom && ((this._tileZoom = t), this._updateLevels()), this._update();
        }
        return this;
      },
      getEvents: function () {
        var t = {
          viewprereset: this._invalidateAll,
          viewreset: this._resetView,
          zoom: this._resetView,
          moveend: this._onMoveEnd
        };
        return (
          this.options.updateWhenIdle ||
            (this._onMove ||
              (this._onMove = Ji(this._onMoveEnd, this.options.updateInterval, this)),
            (t.move = this._onMove)),
          this._zoomAnimated && (t.zoomanim = this._animateZoom),
          t
        );
      },
      createTile: function () {
        return document.createElement('div');
      },
      getTileSize: function () {
        var t = this.options.tileSize;
        return t instanceof d ? t : new d(t, t);
      },
      _updateZIndex: function () {
        this._container &&
          this.options.zIndex !== void 0 &&
          this.options.zIndex !== null &&
          (this._container.style.zIndex = this.options.zIndex);
      },
      _setAutoZIndex: function (t) {
        for (
          var i = this.getPane().children, e = -t(-1 / 0, 1 / 0), n = 0, o = i.length, s;
          n < o;
          n++
        )
          (s = i[n].style.zIndex), i[n] !== this._container && s && (e = t(e, +s));
        isFinite(e) && ((this.options.zIndex = e + t(-1, 1)), this._updateZIndex());
      },
      _updateOpacity: function () {
        if (!!this._map && !f.ielt9) {
          F(this._container, this.options.opacity);
          var t = +new Date(),
            i = !1,
            e = !1;
          for (var n in this._tiles) {
            var o = this._tiles[n];
            if (!(!o.current || !o.loaded)) {
              var s = Math.min(1, (t - o.loaded) / 200);
              F(o.el, s),
                s < 1 ? (i = !0) : (o.active ? (e = !0) : this._onOpaqueTile(o), (o.active = !0));
            }
          }
          e && !this._noPrune && this._pruneTiles(),
            i && (H(this._fadeFrame), (this._fadeFrame = N(this._updateOpacity, this)));
        }
      },
      _onOpaqueTile: Z,
      _initContainer: function () {
        this._container ||
          ((this._container = w('div', 'leaflet-layer ' + (this.options.className || ''))),
          this._updateZIndex(),
          this.options.opacity < 1 && this._updateOpacity(),
          this.getPane().appendChild(this._container));
      },
      _updateLevels: function () {
        var t = this._tileZoom,
          i = this.options.maxZoom;
        if (t !== void 0) {
          for (var e in this._levels)
            (e = Number(e)),
              this._levels[e].el.children.length || e === t
                ? ((this._levels[e].el.style.zIndex = i - Math.abs(t - e)), this._onUpdateLevel(e))
                : (k(this._levels[e].el),
                  this._removeTilesAtZoom(e),
                  this._onRemoveLevel(e),
                  delete this._levels[e]);
          var n = this._levels[t],
            o = this._map;
          return (
            n ||
              ((n = this._levels[t] = {}),
              (n.el = w('div', 'leaflet-tile-container leaflet-zoom-animated', this._container)),
              (n.el.style.zIndex = i),
              (n.origin = o.project(o.unproject(o.getPixelOrigin()), t).round()),
              (n.zoom = t),
              this._setZoomTransform(n, o.getCenter(), o.getZoom()),
              Z(n.el.offsetWidth),
              this._onCreateLevel(n)),
            (this._level = n),
            n
          );
        }
      },
      _onUpdateLevel: Z,
      _onRemoveLevel: Z,
      _onCreateLevel: Z,
      _pruneTiles: function () {
        if (!!this._map) {
          var t,
            i,
            e = this._map.getZoom();
          if (e > this.options.maxZoom || e < this.options.minZoom) {
            this._removeAllTiles();
            return;
          }
          for (t in this._tiles) (i = this._tiles[t]), (i.retain = i.current);
          for (t in this._tiles)
            if (((i = this._tiles[t]), i.current && !i.active)) {
              var n = i.coords;
              this._retainParent(n.x, n.y, n.z, n.z - 5) ||
                this._retainChildren(n.x, n.y, n.z, n.z + 2);
            }
          for (t in this._tiles) this._tiles[t].retain || this._removeTile(t);
        }
      },
      _removeTilesAtZoom: function (t) {
        for (var i in this._tiles) this._tiles[i].coords.z === t && this._removeTile(i);
      },
      _removeAllTiles: function () {
        for (var t in this._tiles) this._removeTile(t);
      },
      _invalidateAll: function () {
        for (var t in this._levels)
          k(this._levels[t].el), this._onRemoveLevel(Number(t)), delete this._levels[t];
        this._removeAllTiles(), (this._tileZoom = void 0);
      },
      _retainParent: function (t, i, e, n) {
        var o = Math.floor(t / 2),
          s = Math.floor(i / 2),
          r = e - 1,
          a = new d(+o, +s);
        a.z = +r;
        var h = this._tileCoordsToKey(a),
          u = this._tiles[h];
        return u && u.active
          ? ((u.retain = !0), !0)
          : (u && u.loaded && (u.retain = !0), r > n ? this._retainParent(o, s, r, n) : !1);
      },
      _retainChildren: function (t, i, e, n) {
        for (var o = 2 * t; o < 2 * t + 2; o++)
          for (var s = 2 * i; s < 2 * i + 2; s++) {
            var r = new d(o, s);
            r.z = e + 1;
            var a = this._tileCoordsToKey(r),
              h = this._tiles[a];
            if (h && h.active) {
              h.retain = !0;
              continue;
            } else h && h.loaded && (h.retain = !0);
            e + 1 < n && this._retainChildren(o, s, e + 1, n);
          }
      },
      _resetView: function (t) {
        var i = t && (t.pinch || t.flyTo);
        this._setView(this._map.getCenter(), this._map.getZoom(), i, i);
      },
      _animateZoom: function (t) {
        this._setView(t.center, t.zoom, !0, t.noUpdate);
      },
      _clampZoom: function (t) {
        var i = this.options;
        return i.minNativeZoom !== void 0 && t < i.minNativeZoom
          ? i.minNativeZoom
          : i.maxNativeZoom !== void 0 && i.maxNativeZoom < t
          ? i.maxNativeZoom
          : t;
      },
      _setView: function (t, i, e, n) {
        var o = Math.round(i);
        (this.options.maxZoom !== void 0 && o > this.options.maxZoom) ||
        (this.options.minZoom !== void 0 && o < this.options.minZoom)
          ? (o = void 0)
          : (o = this._clampZoom(o));
        var s = this.options.updateWhenZooming && o !== this._tileZoom;
        (!n || s) &&
          ((this._tileZoom = o),
          this._abortLoading && this._abortLoading(),
          this._updateLevels(),
          this._resetGrid(),
          o !== void 0 && this._update(t),
          e || this._pruneTiles(),
          (this._noPrune = !!e)),
          this._setZoomTransforms(t, i);
      },
      _setZoomTransforms: function (t, i) {
        for (var e in this._levels) this._setZoomTransform(this._levels[e], t, i);
      },
      _setZoomTransform: function (t, i, e) {
        var n = this._map.getZoomScale(e, t.zoom),
          o = t.origin.multiplyBy(n).subtract(this._map._getNewPixelOrigin(i, e)).round();
        f.any3d ? ut(t.el, o, n) : O(t.el, o);
      },
      _resetGrid: function () {
        var t = this._map,
          i = t.options.crs,
          e = (this._tileSize = this.getTileSize()),
          n = this._tileZoom,
          o = this._map.getPixelWorldBounds(this._tileZoom);
        o && (this._globalTileRange = this._pxBoundsToTileRange(o)),
          (this._wrapX = i.wrapLng &&
            !this.options.noWrap && [
              Math.floor(t.project([0, i.wrapLng[0]], n).x / e.x),
              Math.ceil(t.project([0, i.wrapLng[1]], n).x / e.y)
            ]),
          (this._wrapY = i.wrapLat &&
            !this.options.noWrap && [
              Math.floor(t.project([i.wrapLat[0], 0], n).y / e.x),
              Math.ceil(t.project([i.wrapLat[1], 0], n).y / e.y)
            ]);
      },
      _onMoveEnd: function () {
        !this._map || this._map._animatingZoom || this._update();
      },
      _getTiledPixelBounds: function (t) {
        var i = this._map,
          e = i._animatingZoom ? Math.max(i._animateToZoom, i.getZoom()) : i.getZoom(),
          n = i.getZoomScale(e, this._tileZoom),
          o = i.project(t, this._tileZoom).floor(),
          s = i.getSize().divideBy(n * 2);
        return new z(o.subtract(s), o.add(s));
      },
      _update: function (t) {
        var i = this._map;
        if (!!i) {
          var e = this._clampZoom(i.getZoom());
          if ((t === void 0 && (t = i.getCenter()), this._tileZoom !== void 0)) {
            var n = this._getTiledPixelBounds(t),
              o = this._pxBoundsToTileRange(n),
              s = o.getCenter(),
              r = [],
              a = this.options.keepBuffer,
              h = new z(o.getBottomLeft().subtract([a, -a]), o.getTopRight().add([a, -a]));
            if (!(isFinite(o.min.x) && isFinite(o.min.y) && isFinite(o.max.x) && isFinite(o.max.y)))
              throw new Error('Attempted to load an infinite number of tiles');
            for (var u in this._tiles) {
              var c = this._tiles[u].coords;
              (c.z !== this._tileZoom || !h.contains(new d(c.x, c.y))) &&
                (this._tiles[u].current = !1);
            }
            if (Math.abs(e - this._tileZoom) > 1) {
              this._setView(t, e);
              return;
            }
            for (var p = o.min.y; p <= o.max.y; p++)
              for (var y = o.min.x; y <= o.max.x; y++) {
                var ot = new d(y, p);
                if (((ot.z = this._tileZoom), !!this._isValidTile(ot))) {
                  var _t = this._tiles[this._tileCoordsToKey(ot)];
                  _t ? (_t.current = !0) : r.push(ot);
                }
              }
            if (
              (r.sort(function (ht, Ki) {
                return ht.distanceTo(s) - Ki.distanceTo(s);
              }),
              r.length !== 0)
            ) {
              this._loading || ((this._loading = !0), this.fire('loading'));
              var ai = document.createDocumentFragment();
              for (y = 0; y < r.length; y++) this._addTile(r[y], ai);
              this._level.el.appendChild(ai);
            }
          }
        }
      },
      _isValidTile: function (t) {
        var i = this._map.options.crs;
        if (!i.infinite) {
          var e = this._globalTileRange;
          if (
            (!i.wrapLng && (t.x < e.min.x || t.x > e.max.x)) ||
            (!i.wrapLat && (t.y < e.min.y || t.y > e.max.y))
          )
            return !1;
        }
        if (!this.options.bounds) return !0;
        var n = this._tileCoordsToBounds(t);
        return A(this.options.bounds).overlaps(n);
      },
      _keyToBounds: function (t) {
        return this._tileCoordsToBounds(this._keyToTileCoords(t));
      },
      _tileCoordsToNwSe: function (t) {
        var i = this._map,
          e = this.getTileSize(),
          n = t.scaleBy(e),
          o = n.add(e),
          s = i.unproject(n, t.z),
          r = i.unproject(o, t.z);
        return [s, r];
      },
      _tileCoordsToBounds: function (t) {
        var i = this._tileCoordsToNwSe(t),
          e = new R(i[0], i[1]);
        return this.options.noWrap || (e = this._map.wrapLatLngBounds(e)), e;
      },
      _tileCoordsToKey: function (t) {
        return t.x + ':' + t.y + ':' + t.z;
      },
      _keyToTileCoords: function (t) {
        var i = t.split(':'),
          e = new d(+i[0], +i[1]);
        return (e.z = +i[2]), e;
      },
      _removeTile: function (t) {
        var i = this._tiles[t];
        !i ||
          (k(i.el),
          delete this._tiles[t],
          this.fire('tileunload', { tile: i.el, coords: this._keyToTileCoords(t) }));
      },
      _initTile: function (t) {
        m(t, 'leaflet-tile');
        var i = this.getTileSize();
        (t.style.width = i.x + 'px'),
          (t.style.height = i.y + 'px'),
          (t.onselectstart = Z),
          (t.onmousemove = Z),
          f.ielt9 && this.options.opacity < 1 && F(t, this.options.opacity);
      },
      _addTile: function (t, i) {
        var e = this._getTilePos(t),
          n = this._tileCoordsToKey(t),
          o = this.createTile(this._wrapCoords(t), M(this._tileReady, this, t));
        this._initTile(o),
          this.createTile.length < 2 && N(M(this._tileReady, this, t, null, o)),
          O(o, e),
          (this._tiles[n] = { el: o, coords: t, current: !0 }),
          i.appendChild(o),
          this.fire('tileloadstart', { tile: o, coords: t });
      },
      _tileReady: function (t, i, e) {
        i && this.fire('tileerror', { error: i, tile: e, coords: t });
        var n = this._tileCoordsToKey(t);
        (e = this._tiles[n]),
          e &&
            ((e.loaded = +new Date()),
            this._map._fadeAnimated
              ? (F(e.el, 0), H(this._fadeFrame), (this._fadeFrame = N(this._updateOpacity, this)))
              : ((e.active = !0), this._pruneTiles()),
            i || (m(e.el, 'leaflet-tile-loaded'), this.fire('tileload', { tile: e.el, coords: t })),
            this._noTilesToLoad() &&
              ((this._loading = !1),
              this.fire('load'),
              f.ielt9 || !this._map._fadeAnimated
                ? N(this._pruneTiles, this)
                : setTimeout(M(this._pruneTiles, this), 250)));
      },
      _getTilePos: function (t) {
        return t.scaleBy(this.getTileSize()).subtract(this._level.origin);
      },
      _wrapCoords: function (t) {
        var i = new d(
          this._wrapX ? bt(t.x, this._wrapX) : t.x,
          this._wrapY ? bt(t.y, this._wrapY) : t.y
        );
        return (i.z = t.z), i;
      },
      _pxBoundsToTileRange: function (t) {
        var i = this.getTileSize();
        return new z(t.min.unscaleBy(i).floor(), t.max.unscaleBy(i).ceil().subtract([1, 1]));
      },
      _noTilesToLoad: function () {
        for (var t in this._tiles) if (!this._tiles[t].loaded) return !1;
        return !0;
      }
    });
    function To(t) {
      return new Rt(t);
    }
    var Tt = Rt.extend({
      options: {
        minZoom: 0,
        maxZoom: 18,
        subdomains: 'abc',
        errorTileUrl: '',
        zoomOffset: 0,
        tms: !1,
        zoomReverse: !1,
        detectRetina: !1,
        crossOrigin: !1,
        referrerPolicy: !1
      },
      initialize: function (t, i) {
        (this._url = t),
          (i = C(this, i)),
          i.detectRetina &&
            f.retina &&
            i.maxZoom > 0 &&
            ((i.tileSize = Math.floor(i.tileSize / 2)),
            i.zoomReverse ? (i.zoomOffset--, i.minZoom++) : (i.zoomOffset++, i.maxZoom--),
            (i.minZoom = Math.max(0, i.minZoom))),
          typeof i.subdomains == 'string' && (i.subdomains = i.subdomains.split('')),
          this.on('tileunload', this._onTileRemove);
      },
      setUrl: function (t, i) {
        return (
          this._url === t && i === void 0 && (i = !0), (this._url = t), i || this.redraw(), this
        );
      },
      createTile: function (t, i) {
        var e = document.createElement('img');
        return (
          _(e, 'load', M(this._tileOnLoad, this, i, e)),
          _(e, 'error', M(this._tileOnError, this, i, e)),
          (this.options.crossOrigin || this.options.crossOrigin === '') &&
            (e.crossOrigin = this.options.crossOrigin === !0 ? '' : this.options.crossOrigin),
          typeof this.options.referrerPolicy == 'string' &&
            (e.referrerPolicy = this.options.referrerPolicy),
          (e.alt = ''),
          e.setAttribute('role', 'presentation'),
          (e.src = this.getTileUrl(t)),
          e
        );
      },
      getTileUrl: function (t) {
        var i = {
          r: f.retina ? '@2x' : '',
          s: this._getSubdomain(t),
          x: t.x,
          y: t.y,
          z: this._getZoomForUrl()
        };
        if (this._map && !this._map.options.crs.infinite) {
          var e = this._globalTileRange.max.y - t.y;
          this.options.tms && (i.y = e), (i['-y'] = e);
        }
        return Qi(this._url, x(i, this.options));
      },
      _tileOnLoad: function (t, i) {
        f.ielt9 ? setTimeout(M(t, this, null, i), 0) : t(null, i);
      },
      _tileOnError: function (t, i, e) {
        var n = this.options.errorTileUrl;
        n && i.getAttribute('src') !== n && (i.src = n), t(e, i);
      },
      _onTileRemove: function (t) {
        t.tile.onload = null;
      },
      _getZoomForUrl: function () {
        var t = this._tileZoom,
          i = this.options.maxZoom,
          e = this.options.zoomReverse,
          n = this.options.zoomOffset;
        return e && (t = i - t), t + n;
      },
      _getSubdomain: function (t) {
        var i = Math.abs(t.x + t.y) % this.options.subdomains.length;
        return this.options.subdomains[i];
      },
      _abortLoading: function () {
        var t, i;
        for (t in this._tiles)
          if (
            this._tiles[t].coords.z !== this._tileZoom &&
            ((i = this._tiles[t].el), (i.onload = Z), (i.onerror = Z), !i.complete)
          ) {
            i.src = Ut;
            var e = this._tiles[t].coords;
            k(i), delete this._tiles[t], this.fire('tileabort', { tile: i, coords: e });
          }
      },
      _removeTile: function (t) {
        var i = this._tiles[t];
        if (!!i) return i.el.setAttribute('src', Ut), Rt.prototype._removeTile.call(this, t);
      },
      _tileReady: function (t, i, e) {
        if (!(!this._map || (e && e.getAttribute('src') === Ut)))
          return Rt.prototype._tileReady.call(this, t, i, e);
      }
    });
    function Ye(t, i) {
      return new Tt(t, i);
    }
    var Xe = Tt.extend({
      defaultWmsParams: {
        service: 'WMS',
        request: 'GetMap',
        layers: '',
        styles: '',
        format: 'image/jpeg',
        transparent: !1,
        version: '1.1.1'
      },
      options: { crs: null, uppercase: !1 },
      initialize: function (t, i) {
        this._url = t;
        var e = x({}, this.defaultWmsParams);
        for (var n in i) n in this.options || (e[n] = i[n]);
        i = C(this, i);
        var o = i.detectRetina && f.retina ? 2 : 1,
          s = this.getTileSize();
        (e.width = s.x * o), (e.height = s.y * o), (this.wmsParams = e);
      },
      onAdd: function (t) {
        (this._crs = this.options.crs || t.options.crs),
          (this._wmsVersion = parseFloat(this.wmsParams.version));
        var i = this._wmsVersion >= 1.3 ? 'crs' : 'srs';
        (this.wmsParams[i] = this._crs.code), Tt.prototype.onAdd.call(this, t);
      },
      getTileUrl: function (t) {
        var i = this._tileCoordsToNwSe(t),
          e = this._crs,
          n = W(e.project(i[0]), e.project(i[1])),
          o = n.min,
          s = n.max,
          r = (
            this._wmsVersion >= 1.3 && this._crs === We
              ? [o.y, o.x, s.y, s.x]
              : [o.x, o.y, s.x, s.y]
          ).join(','),
          a = Tt.prototype.getTileUrl.call(this, t);
        return (
          a +
          $i(this.wmsParams, a, this.options.uppercase) +
          (this.options.uppercase ? '&BBOX=' : '&bbox=') +
          r
        );
      },
      setParams: function (t, i) {
        return x(this.wmsParams, t), i || this.redraw(), this;
      }
    });
    function bo(t, i) {
      return new Xe(t, i);
    }
    (Tt.WMS = Xe), (Ye.wms = bo);
    var nt = G.extend({
        options: { padding: 0.1 },
        initialize: function (t) {
          C(this, t), P(this), (this._layers = this._layers || {});
        },
        onAdd: function () {
          this._container ||
            (this._initContainer(),
            this._zoomAnimated && m(this._container, 'leaflet-zoom-animated')),
            this.getPane().appendChild(this._container),
            this._update(),
            this.on('update', this._updatePaths, this);
        },
        onRemove: function () {
          this.off('update', this._updatePaths, this), this._destroyContainer();
        },
        getEvents: function () {
          var t = {
            viewreset: this._reset,
            zoom: this._onZoom,
            moveend: this._update,
            zoomend: this._onZoomEnd
          };
          return this._zoomAnimated && (t.zoomanim = this._onAnimZoom), t;
        },
        _onAnimZoom: function (t) {
          this._updateTransform(t.center, t.zoom);
        },
        _onZoom: function () {
          this._updateTransform(this._map.getCenter(), this._map.getZoom());
        },
        _updateTransform: function (t, i) {
          var e = this._map.getZoomScale(i, this._zoom),
            n = this._map.getSize().multiplyBy(0.5 + this.options.padding),
            o = this._map.project(this._center, i),
            s = n.multiplyBy(-e).add(o).subtract(this._map._getNewPixelOrigin(t, i));
          f.any3d ? ut(this._container, s, e) : O(this._container, s);
        },
        _reset: function () {
          this._update(), this._updateTransform(this._center, this._zoom);
          for (var t in this._layers) this._layers[t]._reset();
        },
        _onZoomEnd: function () {
          for (var t in this._layers) this._layers[t]._project();
        },
        _updatePaths: function () {
          for (var t in this._layers) this._layers[t]._update();
        },
        _update: function () {
          var t = this.options.padding,
            i = this._map.getSize(),
            e = this._map.containerPointToLayerPoint(i.multiplyBy(-t)).round();
          (this._bounds = new z(e, e.add(i.multiplyBy(1 + t * 2)).round())),
            (this._center = this._map.getCenter()),
            (this._zoom = this._map.getZoom());
        }
      }),
      Je = nt.extend({
        options: { tolerance: 0 },
        getEvents: function () {
          var t = nt.prototype.getEvents.call(this);
          return (t.viewprereset = this._onViewPreReset), t;
        },
        _onViewPreReset: function () {
          this._postponeUpdatePaths = !0;
        },
        onAdd: function () {
          nt.prototype.onAdd.call(this), this._draw();
        },
        _initContainer: function () {
          var t = (this._container = document.createElement('canvas'));
          _(t, 'mousemove', this._onMouseMove, this),
            _(t, 'click dblclick mousedown mouseup contextmenu', this._onClick, this),
            _(t, 'mouseout', this._handleMouseOut, this),
            (t._leaflet_disable_events = !0),
            (this._ctx = t.getContext('2d'));
        },
        _destroyContainer: function () {
          H(this._redrawRequest),
            delete this._ctx,
            k(this._container),
            b(this._container),
            delete this._container;
        },
        _updatePaths: function () {
          if (!this._postponeUpdatePaths) {
            var t;
            this._redrawBounds = null;
            for (var i in this._layers) (t = this._layers[i]), t._update();
            this._redraw();
          }
        },
        _update: function () {
          if (!(this._map._animatingZoom && this._bounds)) {
            nt.prototype._update.call(this);
            var t = this._bounds,
              i = this._container,
              e = t.getSize(),
              n = f.retina ? 2 : 1;
            O(i, t.min),
              (i.width = n * e.x),
              (i.height = n * e.y),
              (i.style.width = e.x + 'px'),
              (i.style.height = e.y + 'px'),
              f.retina && this._ctx.scale(2, 2),
              this._ctx.translate(-t.min.x, -t.min.y),
              this.fire('update');
          }
        },
        _reset: function () {
          nt.prototype._reset.call(this),
            this._postponeUpdatePaths && ((this._postponeUpdatePaths = !1), this._updatePaths());
        },
        _initPath: function (t) {
          this._updateDashArray(t), (this._layers[P(t)] = t);
          var i = (t._order = { layer: t, prev: this._drawLast, next: null });
          this._drawLast && (this._drawLast.next = i),
            (this._drawLast = i),
            (this._drawFirst = this._drawFirst || this._drawLast);
        },
        _addPath: function (t) {
          this._requestRedraw(t);
        },
        _removePath: function (t) {
          var i = t._order,
            e = i.next,
            n = i.prev;
          e ? (e.prev = n) : (this._drawLast = n),
            n ? (n.next = e) : (this._drawFirst = e),
            delete t._order,
            delete this._layers[P(t)],
            this._requestRedraw(t);
        },
        _updatePath: function (t) {
          this._extendRedrawBounds(t), t._project(), t._update(), this._requestRedraw(t);
        },
        _updateStyle: function (t) {
          this._updateDashArray(t), this._requestRedraw(t);
        },
        _updateDashArray: function (t) {
          if (typeof t.options.dashArray == 'string') {
            var i = t.options.dashArray.split(/[, ]+/),
              e = [],
              n,
              o;
            for (o = 0; o < i.length; o++) {
              if (((n = Number(i[o])), isNaN(n))) return;
              e.push(n);
            }
            t.options._dashArray = e;
          } else t.options._dashArray = t.options.dashArray;
        },
        _requestRedraw: function (t) {
          !this._map ||
            (this._extendRedrawBounds(t),
            (this._redrawRequest = this._redrawRequest || N(this._redraw, this)));
        },
        _extendRedrawBounds: function (t) {
          if (t._pxBounds) {
            var i = (t.options.weight || 0) + 1;
            (this._redrawBounds = this._redrawBounds || new z()),
              this._redrawBounds.extend(t._pxBounds.min.subtract([i, i])),
              this._redrawBounds.extend(t._pxBounds.max.add([i, i]));
          }
        },
        _redraw: function () {
          (this._redrawRequest = null),
            this._redrawBounds && (this._redrawBounds.min._floor(), this._redrawBounds.max._ceil()),
            this._clear(),
            this._draw(),
            (this._redrawBounds = null);
        },
        _clear: function () {
          var t = this._redrawBounds;
          if (t) {
            var i = t.getSize();
            this._ctx.clearRect(t.min.x, t.min.y, i.x, i.y);
          } else
            this._ctx.save(),
              this._ctx.setTransform(1, 0, 0, 1, 0, 0),
              this._ctx.clearRect(0, 0, this._container.width, this._container.height),
              this._ctx.restore();
        },
        _draw: function () {
          var t,
            i = this._redrawBounds;
          if ((this._ctx.save(), i)) {
            var e = i.getSize();
            this._ctx.beginPath(), this._ctx.rect(i.min.x, i.min.y, e.x, e.y), this._ctx.clip();
          }
          this._drawing = !0;
          for (var n = this._drawFirst; n; n = n.next)
            (t = n.layer), (!i || (t._pxBounds && t._pxBounds.intersects(i))) && t._updatePath();
          (this._drawing = !1), this._ctx.restore();
        },
        _updatePoly: function (t, i) {
          if (!!this._drawing) {
            var e,
              n,
              o,
              s,
              r = t._parts,
              a = r.length,
              h = this._ctx;
            if (!!a) {
              for (h.beginPath(), e = 0; e < a; e++) {
                for (n = 0, o = r[e].length; n < o; n++)
                  (s = r[e][n]), h[n ? 'lineTo' : 'moveTo'](s.x, s.y);
                i && h.closePath();
              }
              this._fillStroke(h, t);
            }
          }
        },
        _updateCircle: function (t) {
          if (!(!this._drawing || t._empty())) {
            var i = t._point,
              e = this._ctx,
              n = Math.max(Math.round(t._radius), 1),
              o = (Math.max(Math.round(t._radiusY), 1) || n) / n;
            o !== 1 && (e.save(), e.scale(1, o)),
              e.beginPath(),
              e.arc(i.x, i.y / o, n, 0, Math.PI * 2, !1),
              o !== 1 && e.restore(),
              this._fillStroke(e, t);
          }
        },
        _fillStroke: function (t, i) {
          var e = i.options;
          e.fill &&
            ((t.globalAlpha = e.fillOpacity),
            (t.fillStyle = e.fillColor || e.color),
            t.fill(e.fillRule || 'evenodd')),
            e.stroke &&
              e.weight !== 0 &&
              (t.setLineDash && t.setLineDash((i.options && i.options._dashArray) || []),
              (t.globalAlpha = e.opacity),
              (t.lineWidth = e.weight),
              (t.strokeStyle = e.color),
              (t.lineCap = e.lineCap),
              (t.lineJoin = e.lineJoin),
              t.stroke());
        },
        _onClick: function (t) {
          for (
            var i = this._map.mouseEventToLayerPoint(t), e, n, o = this._drawFirst;
            o;
            o = o.next
          )
            (e = o.layer),
              e.options.interactive &&
                e._containsPoint(i) &&
                (!(t.type === 'click' || t.type === 'preclick') || !this._map._draggableMoved(e)) &&
                (n = e);
          this._fireEvent(n ? [n] : !1, t);
        },
        _onMouseMove: function (t) {
          if (!(!this._map || this._map.dragging.moving() || this._map._animatingZoom)) {
            var i = this._map.mouseEventToLayerPoint(t);
            this._handleMouseHover(t, i);
          }
        },
        _handleMouseOut: function (t) {
          var i = this._hoveredLayer;
          i &&
            (E(this._container, 'leaflet-interactive'),
            this._fireEvent([i], t, 'mouseout'),
            (this._hoveredLayer = null),
            (this._mouseHoverThrottled = !1));
        },
        _handleMouseHover: function (t, i) {
          if (!this._mouseHoverThrottled) {
            for (var e, n, o = this._drawFirst; o; o = o.next)
              (e = o.layer), e.options.interactive && e._containsPoint(i) && (n = e);
            n !== this._hoveredLayer &&
              (this._handleMouseOut(t),
              n &&
                (m(this._container, 'leaflet-interactive'),
                this._fireEvent([n], t, 'mouseover'),
                (this._hoveredLayer = n))),
              this._fireEvent(this._hoveredLayer ? [this._hoveredLayer] : !1, t),
              (this._mouseHoverThrottled = !0),
              setTimeout(
                M(function () {
                  this._mouseHoverThrottled = !1;
                }, this),
                32
              );
          }
        },
        _fireEvent: function (t, i, e) {
          this._map._fireDOMEvent(i, e || i.type, t);
        },
        _bringToFront: function (t) {
          var i = t._order;
          if (!!i) {
            var e = i.next,
              n = i.prev;
            if (e) e.prev = n;
            else return;
            n ? (n.next = e) : e && (this._drawFirst = e),
              (i.prev = this._drawLast),
              (this._drawLast.next = i),
              (i.next = null),
              (this._drawLast = i),
              this._requestRedraw(t);
          }
        },
        _bringToBack: function (t) {
          var i = t._order;
          if (!!i) {
            var e = i.next,
              n = i.prev;
            if (n) n.next = e;
            else return;
            e ? (e.prev = n) : n && (this._drawLast = n),
              (i.prev = null),
              (i.next = this._drawFirst),
              (this._drawFirst.prev = i),
              (this._drawFirst = i),
              this._requestRedraw(t);
          }
        }
      });
    function $e(t) {
      return f.canvas ? new Je(t) : null;
    }
    var Dt = (function () {
        try {
          return (
            document.namespaces.add('lvml', 'urn:schemas-microsoft-com:vml'),
            function (t) {
              return document.createElement('<lvml:' + t + ' class="lvml">');
            }
          );
        } catch {}
        return function (t) {
          return document.createElement(
            '<' + t + ' xmlns="urn:schemas-microsoft.com:vml" class="lvml">'
          );
        };
      })(),
      Mo = {
        _initContainer: function () {
          this._container = w('div', 'leaflet-vml-container');
        },
        _update: function () {
          this._map._animatingZoom || (nt.prototype._update.call(this), this.fire('update'));
        },
        _initPath: function (t) {
          var i = (t._container = Dt('shape'));
          m(i, 'leaflet-vml-shape ' + (this.options.className || '')),
            (i.coordsize = '1 1'),
            (t._path = Dt('path')),
            i.appendChild(t._path),
            this._updateStyle(t),
            (this._layers[P(t)] = t);
        },
        _addPath: function (t) {
          var i = t._container;
          this._container.appendChild(i), t.options.interactive && t.addInteractiveTarget(i);
        },
        _removePath: function (t) {
          var i = t._container;
          k(i), t.removeInteractiveTarget(i), delete this._layers[P(t)];
        },
        _updateStyle: function (t) {
          var i = t._stroke,
            e = t._fill,
            n = t.options,
            o = t._container;
          (o.stroked = !!n.stroke),
            (o.filled = !!n.fill),
            n.stroke
              ? (i || (i = t._stroke = Dt('stroke')),
                o.appendChild(i),
                (i.weight = n.weight + 'px'),
                (i.color = n.color),
                (i.opacity = n.opacity),
                n.dashArray
                  ? (i.dashStyle = q(n.dashArray)
                      ? n.dashArray.join(' ')
                      : n.dashArray.replace(/( *, *)/g, ' '))
                  : (i.dashStyle = ''),
                (i.endcap = n.lineCap.replace('butt', 'flat')),
                (i.joinstyle = n.lineJoin))
              : i && (o.removeChild(i), (t._stroke = null)),
            n.fill
              ? (e || (e = t._fill = Dt('fill')),
                o.appendChild(e),
                (e.color = n.fillColor || n.color),
                (e.opacity = n.fillOpacity))
              : e && (o.removeChild(e), (t._fill = null));
        },
        _updateCircle: function (t) {
          var i = t._point.round(),
            e = Math.round(t._radius),
            n = Math.round(t._radiusY || e);
          this._setPath(
            t,
            t._empty() ? 'M0 0' : 'AL ' + i.x + ',' + i.y + ' ' + e + ',' + n + ' 0,' + 65535 * 360
          );
        },
        _setPath: function (t, i) {
          t._path.v = i;
        },
        _bringToFront: function (t) {
          gt(t._container);
        },
        _bringToBack: function (t) {
          vt(t._container);
        }
      },
      ri = f.vml ? Dt : se,
      Ht = nt.extend({
        _initContainer: function () {
          (this._container = ri('svg')),
            this._container.setAttribute('pointer-events', 'none'),
            (this._rootGroup = ri('g')),
            this._container.appendChild(this._rootGroup);
        },
        _destroyContainer: function () {
          k(this._container),
            b(this._container),
            delete this._container,
            delete this._rootGroup,
            delete this._svgSize;
        },
        _update: function () {
          if (!(this._map._animatingZoom && this._bounds)) {
            nt.prototype._update.call(this);
            var t = this._bounds,
              i = t.getSize(),
              e = this._container;
            (!this._svgSize || !this._svgSize.equals(i)) &&
              ((this._svgSize = i), e.setAttribute('width', i.x), e.setAttribute('height', i.y)),
              O(e, t.min),
              e.setAttribute('viewBox', [t.min.x, t.min.y, i.x, i.y].join(' ')),
              this.fire('update');
          }
        },
        _initPath: function (t) {
          var i = (t._path = ri('path'));
          t.options.className && m(i, t.options.className),
            t.options.interactive && m(i, 'leaflet-interactive'),
            this._updateStyle(t),
            (this._layers[P(t)] = t);
        },
        _addPath: function (t) {
          this._rootGroup || this._initContainer(),
            this._rootGroup.appendChild(t._path),
            t.addInteractiveTarget(t._path);
        },
        _removePath: function (t) {
          k(t._path), t.removeInteractiveTarget(t._path), delete this._layers[P(t)];
        },
        _updatePath: function (t) {
          t._project(), t._update();
        },
        _updateStyle: function (t) {
          var i = t._path,
            e = t.options;
          !i ||
            (e.stroke
              ? (i.setAttribute('stroke', e.color),
                i.setAttribute('stroke-opacity', e.opacity),
                i.setAttribute('stroke-width', e.weight),
                i.setAttribute('stroke-linecap', e.lineCap),
                i.setAttribute('stroke-linejoin', e.lineJoin),
                e.dashArray
                  ? i.setAttribute('stroke-dasharray', e.dashArray)
                  : i.removeAttribute('stroke-dasharray'),
                e.dashOffset
                  ? i.setAttribute('stroke-dashoffset', e.dashOffset)
                  : i.removeAttribute('stroke-dashoffset'))
              : i.setAttribute('stroke', 'none'),
            e.fill
              ? (i.setAttribute('fill', e.fillColor || e.color),
                i.setAttribute('fill-opacity', e.fillOpacity),
                i.setAttribute('fill-rule', e.fillRule || 'evenodd'))
              : i.setAttribute('fill', 'none'));
        },
        _updatePoly: function (t, i) {
          this._setPath(t, re(t._parts, i));
        },
        _updateCircle: function (t) {
          var i = t._point,
            e = Math.max(Math.round(t._radius), 1),
            n = Math.max(Math.round(t._radiusY), 1) || e,
            o = 'a' + e + ',' + n + ' 0 1,0 ',
            s = t._empty()
              ? 'M0 0'
              : 'M' + (i.x - e) + ',' + i.y + o + e * 2 + ',0 ' + o + -e * 2 + ',0 ';
          this._setPath(t, s);
        },
        _setPath: function (t, i) {
          t._path.setAttribute('d', i);
        },
        _bringToFront: function (t) {
          gt(t._path);
        },
        _bringToBack: function (t) {
          vt(t._path);
        }
      });
    f.vml && Ht.include(Mo);
    function Qe(t) {
      return f.svg || f.vml ? new Ht(t) : null;
    }
    v.include({
      getRenderer: function (t) {
        var i =
          t.options.renderer ||
          this._getPaneRenderer(t.options.pane) ||
          this.options.renderer ||
          this._renderer;
        return (
          i || (i = this._renderer = this._createRenderer()),
          this.hasLayer(i) || this.addLayer(i),
          i
        );
      },
      _getPaneRenderer: function (t) {
        if (t === 'overlayPane' || t === void 0) return !1;
        var i = this._paneRenderers[t];
        return (
          i === void 0 && ((i = this._createRenderer({ pane: t })), (this._paneRenderers[t] = i)), i
        );
      },
      _createRenderer: function (t) {
        return (this.options.preferCanvas && $e(t)) || Qe(t);
      }
    });
    var tn = xt.extend({
      initialize: function (t, i) {
        xt.prototype.initialize.call(this, this._boundsToLatLngs(t), i);
      },
      setBounds: function (t) {
        return this.setLatLngs(this._boundsToLatLngs(t));
      },
      _boundsToLatLngs: function (t) {
        return (t = A(t)), [t.getSouthWest(), t.getNorthWest(), t.getNorthEast(), t.getSouthEast()];
      }
    });
    function Co(t, i) {
      return new tn(t, i);
    }
    (Ht.create = ri),
      (Ht.pointsToPath = re),
      (et.geometryToLayer = Gi),
      (et.coordsToLatLng = Vi),
      (et.coordsToLatLngs = ti),
      (et.latLngToCoords = qi),
      (et.latLngsToCoords = ii),
      (et.getFeature = Lt),
      (et.asFeature = ei),
      v.mergeOptions({ boxZoom: !0 });
    var en = Y.extend({
      initialize: function (t) {
        (this._map = t),
          (this._container = t._container),
          (this._pane = t._panes.overlayPane),
          (this._resetStateTimeout = 0),
          t.on('unload', this._destroy, this);
      },
      addHooks: function () {
        _(this._container, 'mousedown', this._onMouseDown, this);
      },
      removeHooks: function () {
        b(this._container, 'mousedown', this._onMouseDown, this);
      },
      moved: function () {
        return this._moved;
      },
      _destroy: function () {
        k(this._pane), delete this._pane;
      },
      _resetState: function () {
        (this._resetStateTimeout = 0), (this._moved = !1);
      },
      _clearDeferredResetState: function () {
        this._resetStateTimeout !== 0 &&
          (clearTimeout(this._resetStateTimeout), (this._resetStateTimeout = 0));
      },
      _onMouseDown: function (t) {
        if (!t.shiftKey || (t.which !== 1 && t.button !== 1)) return !1;
        this._clearDeferredResetState(),
          this._resetState(),
          Et(),
          zi(),
          (this._startPoint = this._map.mouseEventToContainerPoint(t)),
          _(
            document,
            {
              contextmenu: ft,
              mousemove: this._onMouseMove,
              mouseup: this._onMouseUp,
              keydown: this._onKeyDown
            },
            this
          );
      },
      _onMouseMove: function (t) {
        this._moved ||
          ((this._moved = !0),
          (this._box = w('div', 'leaflet-zoom-box', this._container)),
          m(this._container, 'leaflet-crosshair'),
          this._map.fire('boxzoomstart')),
          (this._point = this._map.mouseEventToContainerPoint(t));
        var i = new z(this._point, this._startPoint),
          e = i.getSize();
        O(this._box, i.min),
          (this._box.style.width = e.x + 'px'),
          (this._box.style.height = e.y + 'px');
      },
      _finish: function () {
        this._moved && (k(this._box), E(this._container, 'leaflet-crosshair')),
          Zt(),
          Si(),
          b(
            document,
            {
              contextmenu: ft,
              mousemove: this._onMouseMove,
              mouseup: this._onMouseUp,
              keydown: this._onKeyDown
            },
            this
          );
      },
      _onMouseUp: function (t) {
        if (!(t.which !== 1 && t.button !== 1) && (this._finish(), !!this._moved)) {
          this._clearDeferredResetState(),
            (this._resetStateTimeout = setTimeout(M(this._resetState, this), 0));
          var i = new R(
            this._map.containerPointToLatLng(this._startPoint),
            this._map.containerPointToLatLng(this._point)
          );
          this._map.fitBounds(i).fire('boxzoomend', { boxZoomBounds: i });
        }
      },
      _onKeyDown: function (t) {
        t.keyCode === 27 && (this._finish(), this._clearDeferredResetState(), this._resetState());
      }
    });
    v.addInitHook('addHandler', 'boxZoom', en), v.mergeOptions({ doubleClickZoom: !0 });
    var nn = Y.extend({
      addHooks: function () {
        this._map.on('dblclick', this._onDoubleClick, this);
      },
      removeHooks: function () {
        this._map.off('dblclick', this._onDoubleClick, this);
      },
      _onDoubleClick: function (t) {
        var i = this._map,
          e = i.getZoom(),
          n = i.options.zoomDelta,
          o = t.originalEvent.shiftKey ? e - n : e + n;
        i.options.doubleClickZoom === 'center'
          ? i.setZoom(o)
          : i.setZoomAround(t.containerPoint, o);
      }
    });
    v.addInitHook('addHandler', 'doubleClickZoom', nn),
      v.mergeOptions({
        dragging: !0,
        inertia: !0,
        inertiaDeceleration: 3400,
        inertiaMaxSpeed: 1 / 0,
        easeLinearity: 0.2,
        worldCopyJump: !1,
        maxBoundsViscosity: 0
      });
    var on = Y.extend({
      addHooks: function () {
        if (!this._draggable) {
          var t = this._map;
          (this._draggable = new rt(t._mapPane, t._container)),
            this._draggable.on(
              { dragstart: this._onDragStart, drag: this._onDrag, dragend: this._onDragEnd },
              this
            ),
            this._draggable.on('predrag', this._onPreDragLimit, this),
            t.options.worldCopyJump &&
              (this._draggable.on('predrag', this._onPreDragWrap, this),
              t.on('zoomend', this._onZoomEnd, this),
              t.whenReady(this._onZoomEnd, this));
        }
        m(this._map._container, 'leaflet-grab leaflet-touch-drag'),
          this._draggable.enable(),
          (this._positions = []),
          (this._times = []);
      },
      removeHooks: function () {
        E(this._map._container, 'leaflet-grab'),
          E(this._map._container, 'leaflet-touch-drag'),
          this._draggable.disable();
      },
      moved: function () {
        return this._draggable && this._draggable._moved;
      },
      moving: function () {
        return this._draggable && this._draggable._moving;
      },
      _onDragStart: function () {
        var t = this._map;
        if ((t._stop(), this._map.options.maxBounds && this._map.options.maxBoundsViscosity)) {
          var i = A(this._map.options.maxBounds);
          (this._offsetLimit = W(
            this._map.latLngToContainerPoint(i.getNorthWest()).multiplyBy(-1),
            this._map
              .latLngToContainerPoint(i.getSouthEast())
              .multiplyBy(-1)
              .add(this._map.getSize())
          )),
            (this._viscosity = Math.min(1, Math.max(0, this._map.options.maxBoundsViscosity)));
        } else this._offsetLimit = null;
        t.fire('movestart').fire('dragstart'),
          t.options.inertia && ((this._positions = []), (this._times = []));
      },
      _onDrag: function (t) {
        if (this._map.options.inertia) {
          var i = (this._lastTime = +new Date()),
            e = (this._lastPos = this._draggable._absPos || this._draggable._newPos);
          this._positions.push(e), this._times.push(i), this._prunePositions(i);
        }
        this._map.fire('move', t).fire('drag', t);
      },
      _prunePositions: function (t) {
        for (; this._positions.length > 1 && t - this._times[0] > 50; )
          this._positions.shift(), this._times.shift();
      },
      _onZoomEnd: function () {
        var t = this._map.getSize().divideBy(2),
          i = this._map.latLngToLayerPoint([0, 0]);
        (this._initialWorldOffset = i.subtract(t).x),
          (this._worldWidth = this._map.getPixelWorldBounds().getSize().x);
      },
      _viscousLimit: function (t, i) {
        return t - (t - i) * this._viscosity;
      },
      _onPreDragLimit: function () {
        if (!(!this._viscosity || !this._offsetLimit)) {
          var t = this._draggable._newPos.subtract(this._draggable._startPos),
            i = this._offsetLimit;
          t.x < i.min.x && (t.x = this._viscousLimit(t.x, i.min.x)),
            t.y < i.min.y && (t.y = this._viscousLimit(t.y, i.min.y)),
            t.x > i.max.x && (t.x = this._viscousLimit(t.x, i.max.x)),
            t.y > i.max.y && (t.y = this._viscousLimit(t.y, i.max.y)),
            (this._draggable._newPos = this._draggable._startPos.add(t));
        }
      },
      _onPreDragWrap: function () {
        var t = this._worldWidth,
          i = Math.round(t / 2),
          e = this._initialWorldOffset,
          n = this._draggable._newPos.x,
          o = ((n - i + e) % t) + i - e,
          s = ((n + i + e) % t) - i - e,
          r = Math.abs(o + e) < Math.abs(s + e) ? o : s;
        (this._draggable._absPos = this._draggable._newPos.clone()),
          (this._draggable._newPos.x = r);
      },
      _onDragEnd: function (t) {
        var i = this._map,
          e = i.options,
          n = !e.inertia || t.noInertia || this._times.length < 2;
        if ((i.fire('dragend', t), n)) i.fire('moveend');
        else {
          this._prunePositions(+new Date());
          var o = this._lastPos.subtract(this._positions[0]),
            s = (this._lastTime - this._times[0]) / 1e3,
            r = e.easeLinearity,
            a = o.multiplyBy(r / s),
            h = a.distanceTo([0, 0]),
            u = Math.min(e.inertiaMaxSpeed, h),
            c = a.multiplyBy(u / h),
            p = u / (e.inertiaDeceleration * r),
            y = c.multiplyBy(-p / 2).round();
          !y.x && !y.y
            ? i.fire('moveend')
            : ((y = i._limitOffset(y, i.options.maxBounds)),
              N(function () {
                i.panBy(y, { duration: p, easeLinearity: r, noMoveStart: !0, animate: !0 });
              }));
        }
      }
    });
    v.addInitHook('addHandler', 'dragging', on),
      v.mergeOptions({ keyboard: !0, keyboardPanDelta: 80 });
    var sn = Y.extend({
      keyCodes: {
        left: [37],
        right: [39],
        down: [40],
        up: [38],
        zoomIn: [187, 107, 61, 171],
        zoomOut: [189, 109, 54, 173]
      },
      initialize: function (t) {
        (this._map = t),
          this._setPanDelta(t.options.keyboardPanDelta),
          this._setZoomDelta(t.options.zoomDelta);
      },
      addHooks: function () {
        var t = this._map._container;
        t.tabIndex <= 0 && (t.tabIndex = '0'),
          _(t, { focus: this._onFocus, blur: this._onBlur, mousedown: this._onMouseDown }, this),
          this._map.on({ focus: this._addHooks, blur: this._removeHooks }, this);
      },
      removeHooks: function () {
        this._removeHooks(),
          b(
            this._map._container,
            { focus: this._onFocus, blur: this._onBlur, mousedown: this._onMouseDown },
            this
          ),
          this._map.off({ focus: this._addHooks, blur: this._removeHooks }, this);
      },
      _onMouseDown: function () {
        if (!this._focused) {
          var t = document.body,
            i = document.documentElement,
            e = t.scrollTop || i.scrollTop,
            n = t.scrollLeft || i.scrollLeft;
          this._map._container.focus(), window.scrollTo(n, e);
        }
      },
      _onFocus: function () {
        (this._focused = !0), this._map.fire('focus');
      },
      _onBlur: function () {
        (this._focused = !1), this._map.fire('blur');
      },
      _setPanDelta: function (t) {
        var i = (this._panKeys = {}),
          e = this.keyCodes,
          n,
          o;
        for (n = 0, o = e.left.length; n < o; n++) i[e.left[n]] = [-1 * t, 0];
        for (n = 0, o = e.right.length; n < o; n++) i[e.right[n]] = [t, 0];
        for (n = 0, o = e.down.length; n < o; n++) i[e.down[n]] = [0, t];
        for (n = 0, o = e.up.length; n < o; n++) i[e.up[n]] = [0, -1 * t];
      },
      _setZoomDelta: function (t) {
        var i = (this._zoomKeys = {}),
          e = this.keyCodes,
          n,
          o;
        for (n = 0, o = e.zoomIn.length; n < o; n++) i[e.zoomIn[n]] = t;
        for (n = 0, o = e.zoomOut.length; n < o; n++) i[e.zoomOut[n]] = -t;
      },
      _addHooks: function () {
        _(document, 'keydown', this._onKeyDown, this);
      },
      _removeHooks: function () {
        b(document, 'keydown', this._onKeyDown, this);
      },
      _onKeyDown: function (t) {
        if (!(t.altKey || t.ctrlKey || t.metaKey)) {
          var i = t.keyCode,
            e = this._map,
            n;
          if (i in this._panKeys)
            (!e._panAnim || !e._panAnim._inProgress) &&
              ((n = this._panKeys[i]),
              t.shiftKey && (n = g(n).multiplyBy(3)),
              e.panBy(n),
              e.options.maxBounds && e.panInsideBounds(e.options.maxBounds));
          else if (i in this._zoomKeys)
            e.setZoom(e.getZoom() + (t.shiftKey ? 3 : 1) * this._zoomKeys[i]);
          else if (i === 27 && e._popup && e._popup.options.closeOnEscapeKey) e.closePopup();
          else return;
          ft(t);
        }
      }
    });
    v.addInitHook('addHandler', 'keyboard', sn),
      v.mergeOptions({ scrollWheelZoom: !0, wheelDebounceTime: 40, wheelPxPerZoomLevel: 60 });
    var rn = Y.extend({
      addHooks: function () {
        _(this._map._container, 'wheel', this._onWheelScroll, this), (this._delta = 0);
      },
      removeHooks: function () {
        b(this._map._container, 'wheel', this._onWheelScroll, this);
      },
      _onWheelScroll: function (t) {
        var i = Ee(t),
          e = this._map.options.wheelDebounceTime;
        (this._delta += i),
          (this._lastMousePos = this._map.mouseEventToContainerPoint(t)),
          this._startTime || (this._startTime = +new Date());
        var n = Math.max(e - (+new Date() - this._startTime), 0);
        clearTimeout(this._timer), (this._timer = setTimeout(M(this._performZoom, this), n)), ft(t);
      },
      _performZoom: function () {
        var t = this._map,
          i = t.getZoom(),
          e = this._map.options.zoomSnap || 0;
        t._stop();
        var n = this._delta / (this._map.options.wheelPxPerZoomLevel * 4),
          o = (4 * Math.log(2 / (1 + Math.exp(-Math.abs(n))))) / Math.LN2,
          s = e ? Math.ceil(o / e) * e : o,
          r = t._limitZoom(i + (this._delta > 0 ? s : -s)) - i;
        (this._delta = 0),
          (this._startTime = null),
          r &&
            (t.options.scrollWheelZoom === 'center'
              ? t.setZoom(i + r)
              : t.setZoomAround(this._lastMousePos, i + r));
      }
    });
    v.addInitHook('addHandler', 'scrollWheelZoom', rn);
    var zo = 600;
    v.mergeOptions({ tapHold: f.touchNative && f.safari && f.mobile, tapTolerance: 15 });
    var an = Y.extend({
      addHooks: function () {
        _(this._map._container, 'touchstart', this._onDown, this);
      },
      removeHooks: function () {
        b(this._map._container, 'touchstart', this._onDown, this);
      },
      _onDown: function (t) {
        if ((clearTimeout(this._holdTimeout), t.touches.length === 1)) {
          var i = t.touches[0];
          (this._startPos = this._newPos = new d(i.clientX, i.clientY)),
            (this._holdTimeout = setTimeout(
              M(function () {
                this._cancel(),
                  this._isTapValid() &&
                    (_(document, 'touchend', B),
                    _(document, 'touchend touchcancel', this._cancelClickPrevent),
                    this._simulateEvent('contextmenu', i));
              }, this),
              zo
            )),
            _(document, 'touchend touchcancel contextmenu', this._cancel, this),
            _(document, 'touchmove', this._onMove, this);
        }
      },
      _cancelClickPrevent: function t() {
        b(document, 'touchend', B), b(document, 'touchend touchcancel', t);
      },
      _cancel: function () {
        clearTimeout(this._holdTimeout),
          b(document, 'touchend touchcancel contextmenu', this._cancel, this),
          b(document, 'touchmove', this._onMove, this);
      },
      _onMove: function (t) {
        var i = t.touches[0];
        this._newPos = new d(i.clientX, i.clientY);
      },
      _isTapValid: function () {
        return this._newPos.distanceTo(this._startPos) <= this._map.options.tapTolerance;
      },
      _simulateEvent: function (t, i) {
        var e = new MouseEvent(t, {
          bubbles: !0,
          cancelable: !0,
          view: window,
          screenX: i.screenX,
          screenY: i.screenY,
          clientX: i.clientX,
          clientY: i.clientY
        });
        (e._simulated = !0), i.target.dispatchEvent(e);
      }
    });
    v.addInitHook('addHandler', 'tapHold', an),
      v.mergeOptions({ touchZoom: f.touch, bounceAtZoomLimits: !0 });
    var hn = Y.extend({
      addHooks: function () {
        m(this._map._container, 'leaflet-touch-zoom'),
          _(this._map._container, 'touchstart', this._onTouchStart, this);
      },
      removeHooks: function () {
        E(this._map._container, 'leaflet-touch-zoom'),
          b(this._map._container, 'touchstart', this._onTouchStart, this);
      },
      _onTouchStart: function (t) {
        var i = this._map;
        if (!(!t.touches || t.touches.length !== 2 || i._animatingZoom || this._zooming)) {
          var e = i.mouseEventToContainerPoint(t.touches[0]),
            n = i.mouseEventToContainerPoint(t.touches[1]);
          (this._centerPoint = i.getSize()._divideBy(2)),
            (this._startLatLng = i.containerPointToLatLng(this._centerPoint)),
            i.options.touchZoom !== 'center' &&
              (this._pinchStartLatLng = i.containerPointToLatLng(e.add(n)._divideBy(2))),
            (this._startDist = e.distanceTo(n)),
            (this._startZoom = i.getZoom()),
            (this._moved = !1),
            (this._zooming = !0),
            i._stop(),
            _(document, 'touchmove', this._onTouchMove, this),
            _(document, 'touchend touchcancel', this._onTouchEnd, this),
            B(t);
        }
      },
      _onTouchMove: function (t) {
        if (!(!t.touches || t.touches.length !== 2 || !this._zooming)) {
          var i = this._map,
            e = i.mouseEventToContainerPoint(t.touches[0]),
            n = i.mouseEventToContainerPoint(t.touches[1]),
            o = e.distanceTo(n) / this._startDist;
          if (
            ((this._zoom = i.getScaleZoom(o, this._startZoom)),
            !i.options.bounceAtZoomLimits &&
              ((this._zoom < i.getMinZoom() && o < 1) || (this._zoom > i.getMaxZoom() && o > 1)) &&
              (this._zoom = i._limitZoom(this._zoom)),
            i.options.touchZoom === 'center')
          ) {
            if (((this._center = this._startLatLng), o === 1)) return;
          } else {
            var s = e._add(n)._divideBy(2)._subtract(this._centerPoint);
            if (o === 1 && s.x === 0 && s.y === 0) return;
            this._center = i.unproject(
              i.project(this._pinchStartLatLng, this._zoom).subtract(s),
              this._zoom
            );
          }
          this._moved || (i._moveStart(!0, !1), (this._moved = !0)), H(this._animRequest);
          var r = M(i._move, i, this._center, this._zoom, { pinch: !0, round: !1 });
          (this._animRequest = N(r, this, !0)), B(t);
        }
      },
      _onTouchEnd: function () {
        if (!this._moved || !this._zooming) {
          this._zooming = !1;
          return;
        }
        (this._zooming = !1),
          H(this._animRequest),
          b(document, 'touchmove', this._onTouchMove, this),
          b(document, 'touchend touchcancel', this._onTouchEnd, this),
          this._map.options.zoomAnimation
            ? this._map._animateZoom(
                this._center,
                this._map._limitZoom(this._zoom),
                !0,
                this._map.options.zoomSnap
              )
            : this._map._resetView(this._center, this._map._limitZoom(this._zoom));
      }
    });
    v.addInitHook('addHandler', 'touchZoom', hn),
      (v.BoxZoom = en),
      (v.DoubleClickZoom = nn),
      (v.Drag = on),
      (v.Keyboard = sn),
      (v.ScrollWheelZoom = rn),
      (v.TapHold = an),
      (v.TouchZoom = hn),
      (l.Bounds = z),
      (l.Browser = f),
      (l.CRS = Q),
      (l.Canvas = Je),
      (l.Circle = Ui),
      (l.CircleMarker = Qt),
      (l.Class = $),
      (l.Control = U),
      (l.DivIcon = Ke),
      (l.DivOverlay = X),
      (l.DomEvent = Vn),
      (l.DomUtil = Un),
      (l.Draggable = rt),
      (l.Evented = Mt),
      (l.FeatureGroup = wt),
      (l.GeoJSON = et),
      (l.GridLayer = Rt),
      (l.Handler = Y),
      (l.Icon = Pt),
      (l.ImageOverlay = ni),
      (l.LatLng = T),
      (l.LatLngBounds = R),
      (l.Layer = G),
      (l.LayerGroup = yt),
      (l.LineUtil = no),
      (l.Map = v),
      (l.Marker = $t),
      (l.Mixin = $n),
      (l.Path = at),
      (l.Point = d),
      (l.PolyUtil = oo),
      (l.Polygon = xt),
      (l.Polyline = it),
      (l.Popup = oi),
      (l.PosAnimation = Ze),
      (l.Projection = so),
      (l.Rectangle = tn),
      (l.Renderer = nt),
      (l.SVG = Ht),
      (l.SVGOverlay = je),
      (l.TileLayer = Tt),
      (l.Tooltip = si),
      (l.Transformation = pi),
      (l.Util = dn),
      (l.VideoOverlay = qe),
      (l.bind = M),
      (l.bounds = W),
      (l.canvas = $e),
      (l.circle = _o),
      (l.circleMarker = fo),
      (l.control = At),
      (l.divIcon = Lo),
      (l.extend = x),
      (l.featureGroup = uo),
      (l.geoJSON = Ve),
      (l.geoJson = go),
      (l.gridLayer = To),
      (l.icon = lo),
      (l.imageOverlay = vo),
      (l.latLng = S),
      (l.latLngBounds = A),
      (l.layerGroup = ho),
      (l.map = qn),
      (l.marker = co),
      (l.point = g),
      (l.polygon = po),
      (l.polyline = mo),
      (l.popup = Po),
      (l.rectangle = Co),
      (l.setOptions = C),
      (l.stamp = P),
      (l.svg = Qe),
      (l.svgOverlay = wo),
      (l.tileLayer = Ye),
      (l.tooltip = xo),
      (l.transformation = Ct),
      (l.version = J),
      (l.videoOverlay = yo);
    var So = window.L;
    (l.noConflict = function () {
      return (window.L = So), this;
    }),
      (window.L = l);
  });
})(ui, ui.exports);
var Ho = ui.exports,
  Fo = Ro({ __proto__: null, default: Ho }, [ui.exports]);
export { Fo as l };
